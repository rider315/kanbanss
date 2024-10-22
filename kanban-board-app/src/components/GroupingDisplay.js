


import React, { useState } from 'react';
import '../styles/GroupingDisplay.css';

const GroupingDisplay = ({ grouping, onGroupingChange, ordering, onOrderingChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="grouping-display-wrapper">
      <button 
        type="button" 
        className="display-button" 
        onClick={toggleDropdown}
      >
        <i className="fas fa-filter"></i> Display
        <svg className="dropdown-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {dropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <label>Grouping:</label>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>Ordering:</label>
            <select value={ordering} onChange={(e) => onOrderingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupingDisplay;
