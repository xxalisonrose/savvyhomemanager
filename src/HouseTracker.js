/*
House Tracker

To do if there is time: 

    - Create a function to remove a home

To do way way way down the line:
    - Add more than just household chores to the list
*/

import React, { useState } from 'react';
import house from './images/house-solid.svg';
import plus from './images/plus.svg';


// Hard coded 3 houses for ease
const HouseTracker = ({ onHomeClick }) => {
  const [newHomeName, setNewHomeName] = useState('');
  const [locations, setLocations] = useState([
    "Ashland",
    "Sugarloaf",
    "North End"
  ]);

  const handleClick = (home) => {
    onHomeClick(home);
  };

  const handleAddHome = () => {
    if (newHomeName.trim() !== '') {
      const updatedLocations = [...locations, newHomeName.trim()];
      setLocations(updatedLocations);
      setNewHomeName(''); // Clear the input field after adding a new home
    }
  };

  return (
    <div className="homes">
      <div className="boxes-container">
        {locations.map((home, i) => (
          <div key={i} className="location-box" onClick={() => handleClick(home)}>
            <img src={house} alt="House Icon" className="house-icon" />
            <div className="box-content">
              <div className="box-title">{home}</div>
            </div>
          </div>
        ))}
        {/* Input field and button for adding a new home */}
        <div className="location-box add-home-box">
        <img src={plus} alt="Plus Icon" className="plus-icon" />
          <input
            type="text"
            placeholder="Enter new home name"
            value={newHomeName}
            onChange={(e) => setNewHomeName(e.target.value)}
          />
          <button onClick={handleAddHome} className="add-button">Add Home</button>
        </div>
      </div>
    </div>
  );
};

export default HouseTracker;
