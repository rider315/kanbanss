
// import React from 'react';
// import '../styles/TicketCard.css'; // Add the required CSS here

// // Icon mappings for status
// const statusIcons = {
//   "Todo": require('../icons/status/to_do.png'),
//   "In progress": require('../icons/status/progress.png'),
//   "Backlog": require('../icons/status/backlog.png'),
//   "Done": require('../icons/status/done.png'),
//   "Cancelled": require('../icons/status/cancelled.png')
// };

// // Icon mappings for priority
// const priorityIcons = {
//   0: require('../icons/priority/no_priority.png'),   // No priority
//   1: require('../icons/priority/low_priority.png'),  // Low
//   2: require('../icons/priority/medim_priority.png'),  // Medium
//   3: require('../icons/priority/high_priority.png'),   // High
//   4: require('../icons/priority/urgent.png')  // Urgent
// };
// const TicketCard = ({ ticket, user }) => {
//   const { id, title, tag, status, priority } = ticket;

//   return (
//     <div className="ticket-card">
//       {/* Ticket ID */}
//       <div className="ticket-id">{id}</div>

//       {/* Ticket Title */}
//       <div className="ticket-title">{title}</div>

//       {/* Feature Request Tag */}
//       <div className="ticket-tag">
//         <i className="fa fa-signal" aria-hidden="true"></i>
//         {tag}
//       </div>

//       {/* Status Icon */}
//       <div className="status-icon">
//         <img src={statusIcons[status]} alt={status} />
//       </div>

//       {/* Priority Icon */}
//       <div className="priority-icon">
//         <img src={priorityIcons[priority]} alt={`Priority ${priority}`} />
//       </div>

//       {/* User Avatar */}
//       <div className="user-avatar">
//         <img
//           src={user?.avatarUrl || "/path/to/default-avatar.svg"}
//           alt={`Profile picture of ${user?.name}`}
//           className="avatar-img"
//         />
//       </div>
//     </div>
//   );
// };

// export default TicketCard;







// import React from 'react';
// import '../styles/TicketCard.css'; // Add the required CSS here

// // Icon mappings for status
// const statusIcons = {
//   "Todo": require('../icons/status/to_do.png'),
//   "In progress": require('../icons/status/progress.png'),
//   "Backlog": require('../icons/status/backlog.png'),
//   "Done": require('../icons/status/done.png'),
//   "Cancelled": require('../icons/status/cancelled.png')
// };

// // Icon mappings for priority
// const priorityIcons = {
//   0: require('../icons/priority/no_priority.png'),   // No priority
//   1: require('../icons/priority/low_priority.png'),  // Low
//   2: require('../icons/priority/medim_priority.png'),  // Medium
//   3: require('../icons/priority/high_priority.png'),   // High
//   4: require('../icons/priority/urgent.png')  // Urgent
// };

// const TicketCard = ({ ticket }) => {
//   const { id, title, tag, status, priority, user } = ticket;

//   return (
//     <div className="ticket-card">
//       {/* Ticket ID */}
//       <div className="ticket-id">{id}</div>

//       {/* Ticket Title */}
//       <div className="ticket-title">{title}</div>

//       {/* Feature Request Tag */}
//       <div className="ticket-tag">
//         <i className="fa fa-signal" aria-hidden="true"></i>
//         {tag}
//       </div>

//       {/* Status Icon */}
//       <div className="status-icon">
//         <img src={statusIcons[status]} alt={status} />
//       </div>

//       {/* Priority Icon */}
//       <div className="priority-icon">
//         <img src={priorityIcons[priority]} alt={`Priority ${priority}`} />
//       </div>

//       {/* User Avatar */}
//       <div className="user-avatar">
//         <img
//           src={user.avatar || require("../icons/profile.png")}
//           alt={`Profile picture of ${user.name}`}
//           className="avatar-img"
//         />
//       </div>
//     </div>
//   );
// };

// export default TicketCard;





// import React from 'react';
// import '../styles/TicketCard.css'; // Add the required CSS here

// // Icon mappings for status
// const statusIcons = {
//   "Todo": require('../icons/status/to_do.png'),
//   "In progress": require('../icons/status/progress.png'),
//   "Backlog": require('../icons/status/backlog.png'),
//   "Done": require('../icons/status/done.png'),
//   "Cancelled": require('../icons/status/cancelled.png')
// };

// // Default avatar image (sample avatar)
// const defaultAvatar = require('../icons/profile.png');

// const TicketCard = ({ ticket }) => {
//   const { id, title, tag, status, user } = ticket;

//   return (
//     <div className="ticket-card">
//       <div className="ticket-header">
//         {/* Ticket ID */}
//         <div className="ticket-id">{id}</div>

//         {/* User Avatar */}
//         <div className="user-avatar">
//           <img
//             src={ defaultAvatar}
//             alt={`Profile picture of ${user.name}`}
//             className="avatar-img"
//           />
//         </div>
//       </div>

//       {/* Ticket Title and Status Icon in the same line */}
//       <div className="ticket-title-row">
//         <div className="ticket-title">{title}</div>
//         <div className="status-icon">
//           <img src={statusIcons[status]} alt={`${status} icon`} className="status-icon-img" />
//         </div>
//       </div>

//       {/* Feature Request Tag */}
//       <div className="ticket-tag">
//         <i className="fa fa-signal" aria-hidden="true"></i>
//         {tag}
//       </div>
//     </div>
//   );
// };

// export default TicketCard;






// import React from 'react';
// import '../styles/TicketCard.css'; // Add the required CSS here

// // Icon mappings for status
// const statusIcons = {
//   "Todo": require('../icons/status/to_do.png'),
//   "In progress": require('../icons/status/progress.png'),
//   "Backlog": require('../icons/status/backlog.png'),
//   "Done": require('../icons/status/done.png'),
//   "Cancelled": require('../icons/status/cancelled.png')
// };

// // Default avatar image (sample avatar)
// const defaultAvatar = require('../icons/profile.png');

// const TicketCard = ({ ticket }) => {
//   const { id, title, tag, status, user } = ticket;

//   return (
//     <div className="ticket-card">
//       <div className="ticket-header">
//         {/* Ticket ID */}
//         <div className="ticket-id">{id}</div>

//         {/* User Avatar */}
//         <div className="user-avatar">
//           <img
//             src={defaultAvatar}
//             alt={`Profile picture of ${user.name}`}
//             className="avatar-img"
//           />
//         </div>
//       </div>

//       {/* Ticket Title and Status Icon in the same line */}
//       <div className="ticket-title-row">
//         <div className="status-icon">
//           <img src={statusIcons[status]} alt={`${status} icon`} className="status-icon-img" />
//         </div>
//         <div className="ticket-title">{title}</div>
//       </div>

//       {/* Feature Request Tag */}
//       <div className="ticket-tag">
//         <i className="fa fa-signal" aria-hidden="true"></i>
//         {tag}
//       </div>
//     </div>
//   );
// };

// export default TicketCard;



import React from 'react';
import '../styles/TicketCard.css'; // Ensure the CSS file has the updated styles

// Icon mappings for status
const statusIcons = {
  "Todo": require('../icons/status/to_do.png'),
  "In progress": require('../icons/status/progress.png'),
  "Backlog": require('../icons/status/backlog.png'),
  "Done": require('../icons/status/done.png'),
  "Cancelled": require('../icons/status/cancelled.png')
};

// Default avatar image (sample avatar)
const defaultAvatar = require('../icons/profile.png');

// Icon for the tag
const tagIcon = require('../icons/circle.png');

const TicketCard = ({ ticket }) => {
  const { id, title, tag, status, user } = ticket;

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        {/* Ticket ID */}
        <div className="ticket-id">{id}</div>

        {/* User Avatar */}
        <div className="user-avatar">
          <img
            src={defaultAvatar}
            alt={`Profile picture of ${user.name}`}
            className="avatar-img"
          />
        </div>
      </div>

      {/* Ticket Title and Status Icon in the same line */}
      <div className="ticket-title-row">
        <div className="status-icon">
          <img src={statusIcons[status]} alt={`${status} icon`} className="status-icon-img" />
        </div>
        <div className="ticket-title">{title}</div>
      </div>

      {/* Feature Request Tag with Icon */}
      <div className="ticket-tag">
        <img src={tagIcon} alt="Tag icon" className="tag-icon" />
        <span>{tag}</span>
      </div>
    </div>
  );
};

export default TicketCard;
