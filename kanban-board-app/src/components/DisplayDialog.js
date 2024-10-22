// import React, { useState } from 'react';
// import '../styles/DisplayDialog.css';

// const DisplayDialog = ({ grouping, onGroupingChange, ordering, onOrderingChange }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative inline-block text-left display-dialog">
//       <div>
//         <button
//           type="button"
//           className="dropdown-btn"
//           onClick={toggleDropdown}
//           aria-expanded={isOpen}
//           aria-haspopup="true"
//         >
//           <i className="fas fa-filter"></i> Display
//           <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//         <div className="dropdown-menu" role="menu" aria-orientation="vertical" tabIndex="-1">
//           <div className="dropdown-item">
//             <span>Grouping</span>
//             <select
//               value={grouping}
//               onChange={(e) => onGroupingChange(e.target.value)}
//               className="dropdown-select"
//             >
//               <option value="status">Status</option>
//               <option value="user">User</option>
//               <option value="priority">Priority</option>
//             </select>
//           </div>

//           <div className="dropdown-item">
//             <span>Ordering</span>
//             <select
//               value={ordering}
//               onChange={(e) => onOrderingChange(e.target.value)}
//               className="dropdown-select"
//             >
//               <option value="priority">Priority</option>
//               <option value="title">Title</option>
//             </select>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisplayDialog;





import React, { useState } from 'react';
import '../styles/DisplayDialog.css'; // Ensure the correct CSS is imported

const DisplayDialog = ({ grouping, onGroupingChange, ordering, onOrderingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Display button inside the navbar, vertically centered */}
        <button
          type="button"
          className="dropdown-btn display-button"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <i className="fas fa-filter"></i> Display
          <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="dropdown-menu" role="menu" aria-orientation="vertical" tabIndex="-1">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select
              value={grouping}
              onChange={(e) => onGroupingChange(e.target.value)}
              className="dropdown-select"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-item">
            <span>Ordering</span>
            <select
              value={ordering}
              onChange={(e) => onOrderingChange(e.target.value)}
              className="dropdown-select"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayDialog;

