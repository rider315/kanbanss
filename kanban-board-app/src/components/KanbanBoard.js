// import React, { useState, useEffect } from 'react';
// import TicketCard from './TicketCard';
// import GroupingDisplay from './GroupingDisplay';
// import { fetchTickets } from '../services/apiService';
// import '../styles/KanbanBoard.css'; // Ensure Kanban styles are correctly applied

// const KanbanBoard = () => {
//   const [tickets, setTickets] = useState([]);
//   const [groupedTickets, setGroupedTickets] = useState({});
//   const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
//   const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadTickets() {
//       try {
//         const data = await fetchTickets();

//         if (Array.isArray(data.tickets)) {
//           // Create a map of userId to userName
//           const userMap = {};
//           data.users.forEach(user => {
//             userMap[user.id] = user.name;
//           });

//           // Map userId to actual user name and avatar in tickets
//           const updatedTickets = data.tickets.map(ticket => ({
//             ...ticket,
//             user: userMap[ticket.userId] || 'Unknown User'
//           }));

//           setTickets(updatedTickets);
//           groupTickets(updatedTickets, grouping, ordering);
//         } else {
//           setError('Invalid data format');
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadTickets();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('grouping', grouping);
//     localStorage.setItem('ordering', ordering);
//     groupTickets(tickets, grouping, ordering);
//   }, [grouping, ordering, tickets]);

//   const handleGroupingChange = (newGrouping) => {
//     setGrouping(newGrouping);
//   };

//   const handleOrderingChange = (newOrdering) => {
//     setOrdering(newOrdering);
//   };

//   const groupTickets = (tickets, grouping, ordering) => {
//     let grouped = {};

//     // Group tickets by the chosen field (status, user, priority)
//     tickets.forEach(ticket => {
//       const groupKey = ticket[grouping];
//       if (!grouped[groupKey]) {
//         grouped[groupKey] = [];
//       }
//       grouped[groupKey].push(ticket);
//     });

//     // Sort each group by the ordering field (priority, title)
//     Object.keys(grouped).forEach(group => {
//       grouped[group].sort((a, b) => {
//         if (ordering === 'priority') {
//           return b.priority - a.priority;
//         } else if (ordering === 'title') {
//           return a.title.localeCompare(b.title);
//         }
//         return 0;
//       });
//     });

//     setGroupedTickets(grouped);
//   };

//   return (
//     <div className="kanban-board">
//       <GroupingDisplay 
//         grouping={grouping} 
//         onGroupingChange={handleGroupingChange} 
//         ordering={ordering} 
//         onOrderingChange={handleOrderingChange}
//       />
//       {loading ? (
//         <div className="loading-message">
//           <p>Loading tickets...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//         </div>
//       ) : (
//         <div className="kanban-columns">
//           {Object.keys(groupedTickets).map(group => (
//             <div key={group} className="kanban-column">
//               <h2>{group}</h2>
//               {groupedTickets[group].map(ticket => (
//                 <TicketCard key={ticket.id} ticket={ticket} />
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default KanbanBoard;











// import React, { useState, useEffect } from 'react';
// import TicketCard from './TicketCard';
// import GroupingDisplay from './GroupingDisplay';
// import { fetchTickets } from '../services/apiService';
// import '../styles/KanbanBoard.css'; // Ensure Kanban styles are correctly applied

// const statusColumns = ['Todo', 'In progress', 'Backlog', 'Done', 'Cancelled']; // All possible statuses
// const priorityLevels = ['No priority', 'Low', 'Medium', 'High', 'Urgent']; // Priority labels for grouping

// const KanbanBoard = () => {
//   const [tickets, setTickets] = useState([]);
//   const [groupedTickets, setGroupedTickets] = useState({});
//   const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
//   const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadTickets() {
//       try {
//         const data = await fetchTickets();

//         if (Array.isArray(data.tickets)) {
//           // Create a map of userId to userName
//           const userMap = {};
//           data.users.forEach(user => {
//             userMap[user.id] = {
//               name: user.name,
//               avatar: user.avatarUrl || '/path/to/default-avatar.svg' // Update for default avatars
//             };
//           });

//           // Map userId to actual user name and avatar in tickets
//           const updatedTickets = data.tickets.map(ticket => ({
//             ...ticket,
//             user: userMap[ticket.userId] || { name: 'Unknown User' } // Add full user object here
//           }));

//           setTickets(updatedTickets);
//           groupTickets(updatedTickets, grouping, ordering);
//         } else {
//           setError('Invalid data format');
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadTickets();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('grouping', grouping);
//     localStorage.setItem('ordering', ordering);
//     groupTickets(tickets, grouping, ordering);
//   }, [grouping, ordering, tickets]);

//   const handleGroupingChange = (newGrouping) => {
//     setGrouping(newGrouping);
//   };

//   const handleOrderingChange = (newOrdering) => {
//     setOrdering(newOrdering);
//   };

//   const groupTickets = (tickets, grouping, ordering) => {
//     let grouped = {};

//     // Group tickets by the chosen field (status, user, priority)
//     tickets.forEach(ticket => {
//       let groupKey;
      
//       if (grouping === 'user') {
//         groupKey = ticket.user.name; // Use user name for grouping by user
//       } else if (grouping === 'priority') {
//         groupKey = priorityLevels[ticket.priority]; // Use priority level names for grouping by priority
//       } else {
//         groupKey = ticket.status; // Default grouping by status
//       }

//       if (!grouped[groupKey]) {
//         grouped[groupKey] = [];
//       }
//       grouped[groupKey].push(ticket);
//     });

//     if (grouping === 'status') {
//       statusColumns.forEach(status => {
//         if (!grouped[status]) {
//           grouped[status] = []; // Ensure all statuses are displayed, even if empty
//         }
//       });
//     }

//     // Sort each group by the ordering field (priority, title)
//     Object.keys(grouped).forEach(group => {
//       grouped[group].sort((a, b) => {
//         if (ordering === 'priority') {
//           return b.priority - a.priority;
//         } else if (ordering === 'title') {
//           return a.title.localeCompare(b.title);
//         }
//         return 0;
//       });
//     });

//     setGroupedTickets(grouped);
//   };

//   return (
//     <div className="kanban-board">
//       <GroupingDisplay 
//         grouping={grouping} 
//         onGroupingChange={handleGroupingChange} 
//         ordering={ordering} 
//         onOrderingChange={handleOrderingChange}
//       />
//       {loading ? (
//         <div className="loading-message">
//           <p>Loading tickets...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//         </div>
//       ) : (
//         <div className="kanban-columns">
//           {Object.keys(groupedTickets).map(group => (
//             <div key={group} className="kanban-column">
//               <h2>{group}</h2>
//               {groupedTickets[group].length > 0 ? (
//                 groupedTickets[group].map(ticket => (
//                   <TicketCard key={ticket.id} ticket={ticket} />
//                 ))
//               ) : (
//                 <p>No tickets</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default KanbanBoard;












// import React, { useState, useEffect } from 'react';
// import TicketCard from './TicketCard';
// import GroupingDisplay from './GroupingDisplay';
// import DisplayDialog from './DisplayDialog';
// import { fetchTickets } from '../services/apiService';
// import '../styles/KanbanBoard.css'; // Ensure Kanban styles are correctly applied

// // Status and priority icon mappings
// const statusIcons = {
//   "Todo": require('../icons/status/to_do.png'),
//   "In progress": require('../icons/status/progress.png'),
//   "Backlog": require('../icons/status/backlog.png'),
//   "Done": require('../icons/status/done.png'),
//   "Cancelled": require('../icons/status/cancelled.png')
// };

// const priorityIcons = {
//   0: require('../icons/priority/no_priority.png'),   // No priority
//   1: require('../icons/priority/low_priority.png'),  // Low
//   2: require('../icons/priority/medim_priority.png'),  // Medium
//   3: require('../icons/priority/high_priority.png'),   // High
//   4: require('../icons/priority/urgent.png')  // Urgent
// };

// // Status labels
// const statusColumns = ['Todo', 'In progress', 'Backlog', 'Done', 'Cancelled'];
// // Priority labels
// const priorityLevels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

// const KanbanBoard = () => {
//   const [tickets, setTickets] = useState([]);
//   const [groupedTickets, setGroupedTickets] = useState({});
//   const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
//   const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadTickets() {
//       try {
//         const data = await fetchTickets();

//         if (Array.isArray(data.tickets)) {
//           // Create a map of userId to userName
//           const userMap = {};
//           data.users.forEach(user => {
//             userMap[user.id] = {
//               name: user.name,
//               avatar: user.avatarUrl || '/path/to/default-avatar.svg' // Update for default avatars
//             };
//           });

//           // Map userId to actual user name and avatar in tickets
//           const updatedTickets = data.tickets.map(ticket => ({
//             ...ticket,
//             user: userMap[ticket.userId] || { name: 'Unknown User' } // Add full user object here
//           }));

//           setTickets(updatedTickets);
//           groupTickets(updatedTickets, grouping, ordering);
//         } else {
//           setError('Invalid data format');
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadTickets();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('grouping', grouping);
//     localStorage.setItem('ordering', ordering);
//     groupTickets(tickets, grouping, ordering);
//   }, [grouping, ordering, tickets]);

//   const handleGroupingChange = (newGrouping) => {
//     setGrouping(newGrouping);
//   };

//   const handleOrderingChange = (newOrdering) => {
//     setOrdering(newOrdering);
//   };

//   const groupTickets = (tickets, grouping, ordering) => {
//     let grouped = {};

//     tickets.forEach(ticket => {
//       let groupKey;
      
//       if (grouping === 'user') {
//         groupKey = ticket.user.name; // Use user name for grouping by user
//       } else if (grouping === 'priority') {
//         groupKey = priorityLevels[ticket.priority]; // Use priority level names for grouping by priority
//       } else {
//         groupKey = ticket.status; // Default grouping by status
//       }

//       if (!grouped[groupKey]) {
//         grouped[groupKey] = [];
//       }
//       grouped[groupKey].push(ticket);
//     });

//     if (grouping === 'status') {
//       statusColumns.forEach(status => {
//         if (!grouped[status]) {
//           grouped[status] = []; // Ensure all statuses are displayed, even if empty
//         }
//       });
//     }

//     // Sort each group by the ordering field (priority, title)
//     Object.keys(grouped).forEach(group => {
//       grouped[group].sort((a, b) => {
//         if (ordering === 'priority') {
//           return b.priority - a.priority;
//         } else if (ordering === 'title') {
//           return a.title.localeCompare(b.title);
//         }
//         return 0;
//       });
//     });

//     setGroupedTickets(grouped);
//   };

//   // Function to render the group heading with icons
//   const renderGroupHeading = (group) => {
//     if (grouping === 'status') {
//       return (
//         <h2>
//           <img src={statusIcons[group]} alt={`${group} icon`} className="group-icon" />
//           {group}
//         </h2>
//       );
//     } else if (grouping === 'priority') {
//       const priorityIndex = priorityLevels.indexOf(group);
//       return (
//         <h2>
//           <img src={priorityIcons[priorityIndex]} alt={`${group} icon`} className="group-icon" />
//           {group}
//         </h2>
//       );
//     } else {
//       return <h2>{group}</h2>; // For users or any other grouping, no icon
//     }
//   };

//   return (
//     <div className="kanban-board">
//       <DisplayDialog 
//         grouping={grouping} 
//         onGroupingChange={handleGroupingChange} 
//         ordering={ordering} 
//         onOrderingChange={handleOrderingChange}
//       />
//       {loading ? (
//         <div className="loading-message">
//           <p>Loading tickets...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//         </div>
//       ) : (
//         <div className="kanban-columns">
//           {Object.keys(groupedTickets).map(group => (
//             <div key={group} className="kanban-column">
//               {renderGroupHeading(group)} {/* Render the heading with icons */}
//               {groupedTickets[group].length > 0 ? (
//                 groupedTickets[group].map(ticket => (
//                   <TicketCard key={ticket.id} ticket={ticket} />
//                 ))
//               ) : (
//                 <p>No tickets</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default KanbanBoard;




















// import React, { useState, useEffect } from 'react';
// import TicketCard from './TicketCard';
// import GroupingDisplay from './GroupingDisplay';
// import DisplayDialog from './DisplayDialog';
// import { fetchTickets } from '../services/apiService';
// import '../styles/KanbanBoard.css'; // Ensure Kanban styles are correctly applied

// // Status and priority icon mappings
// const statusIcons = {
//   "Todo": require('../icons/status/to_do.png'),
//   "In progress": require('../icons/status/progress.png'),
//   "Backlog": require('../icons/status/backlog.png'),
//   "Done": require('../icons/status/done.png'),
//   "Cancelled": require('../icons/status/cancelled.png')
// };

// const priorityIcons = {
//   0: require('../icons/priority/no_priority.png'),   // No priority
//   1: require('../icons/priority/low_priority.png'),  // Low
//   2: require('../icons/priority/medim_priority.png'),  // Medium
//   3: require('../icons/priority/high_priority.png'),   // High
//   4: require('../icons/priority/urgent.png')  // Urgent
// };

// // Status and Priority labels
// const statusColumns = ['Todo', 'In progress', 'Backlog', 'Done', 'Cancelled'];
// const priorityLevels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

// const KanbanBoard = () => {
//   const [tickets, setTickets] = useState([]);
//   const [groupedTickets, setGroupedTickets] = useState({});
//   const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
//   const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadTickets() {
//       try {
//         const data = await fetchTickets();

//         if (Array.isArray(data.tickets)) {
//           // Create a map of userId to userName
//           const userMap = {};
//           data.users.forEach(user => {
//             userMap[user.id] = {
//               name: user.name,
//               avatar: user.avatarUrl || '/path/to/default-avatar.svg' // Update for default avatars
//             };
//           });

//           // Map userId to actual user name and avatar in tickets
//           const updatedTickets = data.tickets.map(ticket => ({
//             ...ticket,
//             user: userMap[ticket.userId] || { name: 'Unknown User' } // Add full user object here
//           }));

//           setTickets(updatedTickets);
//           groupTickets(updatedTickets, grouping, ordering);
//         } else {
//           setError('Invalid data format');
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadTickets();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('grouping', grouping);
//     localStorage.setItem('ordering', ordering);
//     groupTickets(tickets, grouping, ordering);
//   }, [grouping, ordering, tickets]);

//   const handleGroupingChange = (newGrouping) => {
//     setGrouping(newGrouping);
//   };

//   const handleOrderingChange = (newOrdering) => {
//     setOrdering(newOrdering);
//   };

//   const groupTickets = (tickets, grouping, ordering) => {
//     let grouped = {};

//     tickets.forEach(ticket => {
//       let groupKey;

//       if (grouping === 'user') {
//         groupKey = ticket.user.name; // Use user name for grouping by user
//       } else if (grouping === 'priority') {
//         groupKey = priorityLevels[ticket.priority]; // Use priority level names for grouping by priority
//       } else {
//         groupKey = ticket.status; // Default grouping by status
//       }

//       if (!grouped[groupKey]) {
//         grouped[groupKey] = [];
//       }
//       grouped[groupKey].push(ticket);
//     });

//     if (grouping === 'status') {
//       statusColumns.forEach(status => {
//         if (!grouped[status]) {
//           grouped[status] = []; // Ensure all statuses are displayed, even if empty
//         }
//       });
//     }

//     // Sort each group by the ordering field (priority, title)
//     Object.keys(grouped).forEach(group => {
//       grouped[group].sort((a, b) => {
//         if (ordering === 'priority') {
//           return b.priority - a.priority;
//         } else if (ordering === 'title') {
//           return a.title.localeCompare(b.title);
//         }
//         return 0;
//       });
//     });

//     setGroupedTickets(grouped);
//   };

//   // Function to render the group heading with icons and count
//   const renderGroupHeading = (group, count) => {
//     if (grouping === 'status') {
//       return (
//         <h2 className="group-heading">
//           <img src={statusIcons[group]} alt={`${group} icon`} className="group-icon" />
//           {group} <span className="ticket-count">({count})</span>
//         </h2>
//       );
//     } else if (grouping === 'priority') {
//       const priorityIndex = priorityLevels.indexOf(group);
//       return (
//         <h2 className="group-heading">
//           <img src={priorityIcons[priorityIndex]} alt={`${group} icon`} className="group-icon" />
//           {group} <span className="ticket-count">({count})</span>
//         </h2>
//       );
//     } else {
//       return <h2>{group} <span className="ticket-count">({count})</span></h2>; // For users or any other grouping, no icon
//     }
//   };

//   return (
//     <div className="kanban-board">
//       <DisplayDialog 
//         grouping={grouping} 
//         onGroupingChange={handleGroupingChange} 
//         ordering={ordering} 
//         onOrderingChange={handleOrderingChange}
//       />
//       {loading ? (
//         <div className="loading-message">
//           <p>Loading tickets...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//         </div>
//       ) : (
//         <div className="kanban-columns">
//           {Object.keys(groupedTickets).map(group => (
//             <div key={group} className="kanban-column">
//               {renderGroupHeading(group, groupedTickets[group].length)} {/* Render the heading with icons and count */}
//               {groupedTickets[group].length > 0 ? (
//                 groupedTickets[group].map(ticket => (
//                   <TicketCard key={ticket.id} ticket={ticket} />
//                 ))
//               ) : (
//                 <p>No tickets</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };




// export default KanbanBoard;










import React, { useState, useEffect } from 'react';
import TicketCard from './TicketCard';
import GroupingDisplay from './GroupingDisplay';
import DisplayDialog from './DisplayDialog';
import { fetchTickets } from '../services/apiService';
import '../styles/KanbanBoard.css'; // Ensure Kanban styles are correctly applied

// Status and priority icon mappings
const statusIcons = {
  "Todo": require('../icons/status/to_do.png'),
  "In progress": require('../icons/status/progress.png'),
  "Backlog": require('../icons/status/backlog.png'),
  "Done": require('../icons/status/done.png'),
  "Cancelled": require('../icons/status/cancelled.png')
};

const priorityIcons = {
  0: require('../icons/priority/no_priority.png'),   // No priority
  1: require('../icons/priority/low_priority.png'),  // Low
  2: require('../icons/priority/medim_priority.png'),  // Medium
  3: require('../icons/priority/high_priority.png'),   // High
  4: require('../icons/priority/urgent.png')  // Urgent
};

// Status and Priority labels
// Status labels (Corrected order)
const statusColumns = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];

const priorityLevels = ['No priority', 'Urgent', 'High', 'Medium', 'Low']; // Correct order

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
          // Create a map of userId to userName
          const userMap = {};
          data.users.forEach(user => {
            userMap[user.id] = {
              name: user.name,
              avatar: user.avatarUrl || '/path/to/default-avatar.svg' // Update for default avatars
            };
          });

          // Map userId to actual user name and avatar in tickets
          const updatedTickets = data.tickets.map(ticket => ({
            ...ticket,
            user: userMap[ticket.userId] || { name: 'Unknown User' } // Add full user object here
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

    // Group tickets by the chosen field (status, user, priority)
tickets.forEach(ticket => {
  let groupKey;
  
  if (grouping === 'user') {
    groupKey = ticket.user.name; // Use user name for grouping by user
  } else if (grouping === 'priority') {
    groupKey = priorityLevels[ticket.priority]; // Use priority level names for grouping by priority
  } else {
    groupKey = ticket.status; // Default grouping by status
  }

  if (!grouped[groupKey]) {
    grouped[groupKey] = [];
  }
  grouped[groupKey].push(ticket);
});

// Ensure the correct order of statuses
if (grouping === 'status') {
  statusColumns.forEach(status => {
    if (!grouped[status]) {
      grouped[status] = []; // Ensure all statuses are displayed, even if empty
    }
  });
}
 else if (grouping === 'priority') {
      // Sort priority groups according to predefined order in `priorityLevels`
      const sortedGroups = {};
      priorityLevels.forEach(priority => {
        if (grouped[priority]) {
          sortedGroups[priority] = grouped[priority];
        } else {
          sortedGroups[priority] = []; // Ensure all priority levels are shown even if no tickets
        }
      });
      grouped = sortedGroups;
    }

    // Sort each group by the ordering field (priority, title)
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

  // Function to render the group heading with icons and count
  const renderGroupHeading = (group, count) => {
    if (grouping === 'status') {
      return (
        <h2 className="group-heading">
          <img src={statusIcons[group]} alt={`${group} icon`} className="group-icon" />
          {group} <span className="ticket-count">{count}</span> {/* Ticket count after heading */}
        </h2>
      );
    } else if (grouping === 'priority') {
      const priorityIndex = priorityLevels.indexOf(group);
      return (
        <h2 className="group-heading">
          <img src={priorityIcons[priorityIndex]} alt={`${group} icon`} className="group-icon" />
          {group} <span className="ticket-count">{count}</span> {/* Ticket count after heading */}
        </h2>
      );
    } else {
      return <h2>{group} <span className="ticket-count">{count}</span></h2>; // For users or any other grouping
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
              {renderGroupHeading(group, groupedTickets[group].length)} {/* Render the heading with icons and count */}
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
