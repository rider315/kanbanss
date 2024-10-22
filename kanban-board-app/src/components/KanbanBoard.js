


import React, { useState, useEffect } from 'react';
import TicketCard from './TicketCard';
import GroupingDisplay from './GroupingDisplay';
import DisplayDialog from './DisplayDialog';
import { fetchTickets } from '../services/apiService';
import '../styles/KanbanBoard.css'; 

const statusIcons = {
  "Todo": require('../icons/status/to_do.png'),
  "In progress": require('../icons/status/progress.png'),
  "Backlog": require('../icons/status/backlog.png'),
  "Done": require('../icons/status/done.png'),
  "Cancelled": require('../icons/status/cancelled.png')
};

const priorityIcons = {
  0: require('../icons/priority/no_priority.png'),  
  1: require('../icons/priority/low_priority.png'),  
  2: require('../icons/priority/medim_priority.png'),  
  3: require('../icons/priority/high_priority.png'),   
  4: require('../icons/priority/urgent.png')  
};


const statusColumns = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];

const priorityLevels = ['No priority', 'Urgent', 'High', 'Medium', 'Low']; 

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadTickets() {
      try {
        const data = await fetchTickets();

        if (Array.isArray(data.tickets)) {
         
          const userMap = {};
          data.users.forEach(user => {
            userMap[user.id] = {
              name: user.name,
              avatar: user.avatarUrl || '/path/to/default-avatar.svg'
            };
          });

          
          const updatedTickets = data.tickets.map(ticket => ({
            ...ticket,
            user: userMap[ticket.userId] || { name: 'Unknown User' } 
          }));

          setTickets(updatedTickets);
          groupTickets(updatedTickets, grouping, ordering);
        } else {
          setError('Invalid data format');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadTickets();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
    groupTickets(tickets, grouping, ordering);
  }, [grouping, ordering, tickets]);

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const handleOrderingChange = (newOrdering) => {
    setOrdering(newOrdering);
  };

  const groupTickets = (tickets, grouping, ordering) => {
    let grouped = {};

    
tickets.forEach(ticket => {
  let groupKey;
  
  if (grouping === 'user') {
    groupKey = ticket.user.name; 
  } else if (grouping === 'priority') {
    groupKey = priorityLevels[ticket.priority]; 
  } else {
    groupKey = ticket.status; 
  }

  if (!grouped[groupKey]) {
    grouped[groupKey] = [];
  }
  grouped[groupKey].push(ticket);
});


if (grouping === 'status') {
  statusColumns.forEach(status => {
    if (!grouped[status]) {
      grouped[status] = []; 
    }
  });
}
 else if (grouping === 'priority') {
      
      const sortedGroups = {};
      priorityLevels.forEach(priority => {
        if (grouped[priority]) {
          sortedGroups[priority] = grouped[priority];
        } else {
          sortedGroups[priority] = []; 
        }
      });
      grouped = sortedGroups;
    }

    
    Object.keys(grouped).forEach(group => {
      grouped[group].sort((a, b) => {
        if (ordering === 'priority') {
          return b.priority - a.priority;
        } else if (ordering === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    });

    setGroupedTickets(grouped);
  };

  
  const renderGroupHeading = (group, count) => {
    if (grouping === 'status') {
      return (
        <h2 className="group-heading">
          <img src={statusIcons[group]} alt={`${group} icon`} className="group-icon" />
          {group} <span className="ticket-count">{count}</span> 
        </h2>
      );
    } else if (grouping === 'priority') {
      const priorityIndex = priorityLevels.indexOf(group);
      return (
        <h2 className="group-heading">
          <img src={priorityIcons[priorityIndex]} alt={`${group} icon`} className="group-icon" />
          {group} <span className="ticket-count">{count}</span> 
        </h2>
      );
    } else {
      return <h2>{group} <span className="ticket-count">{count}</span></h2>; 
    }
  };
  
  

  return (
    <div className="kanban-board">
      <DisplayDialog 
        grouping={grouping} 
        onGroupingChange={handleGroupingChange} 
        ordering={ordering} 
        onOrderingChange={handleOrderingChange}
      />
      {loading ? (
        <div className="loading-message">
          <p>Loading tickets...</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : (
        <div className="kanban-columns">
          {Object.keys(groupedTickets).map(group => (
            <div key={group} className="kanban-column">
              {renderGroupHeading(group, groupedTickets[group].length)} 
              {groupedTickets[group].length > 0 ? (
                groupedTickets[group].map(ticket => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))
              ) : (
                <p>No tickets</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;
