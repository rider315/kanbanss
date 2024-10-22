


import React from 'react';
import '../styles/TicketCard.css'; 


const statusIcons = {
  "Todo": require('../icons/status/to_do.png'),
  "In progress": require('../icons/status/progress.png'),
  "Backlog": require('../icons/status/backlog.png'),
  "Done": require('../icons/status/done.png'),
  "Cancelled": require('../icons/status/cancelled.png')
};


const defaultAvatar = require('../icons/profile.png');


const tagIcon = require('../icons/circle.png');

const TicketCard = ({ ticket }) => {
  const { id, title, tag, status, user } = ticket;

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        
        <div className="ticket-id">{id}</div>

        
        <div className="user-avatar">
          <img
            src={defaultAvatar}
            alt={`Profile picture of ${user.name}`}
            className="avatar-img"
          />
        </div>
      </div>

      <div className="ticket-title-row">
        <div className="status-icon">
          <img src={statusIcons[status]} alt={`${status} icon`} className="status-icon-img" />
        </div>
        <div className="ticket-title">{title}</div>
      </div>

      
      <div className="ticket-tag">
        <img src={tagIcon} alt="Tag icon" className="tag-icon" />
        <span>{tag}</span>
      </div>
    </div>
  );
};

export default TicketCard;
