import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HouseTracker from './HouseTracker';
import TaskBoxes from './TaskBoxes';

const App = () => {
  const [selectedHome, setSelectedHome] = useState(null);

  const handleHomeClick = (home) => {
    setSelectedHome(home); // Update selected home when a home is clicked
  };

  const handleBackClick = () => {
    setSelectedHome(null); // Reset selected home to go back to HouseTracker
  };

  return (
    <div>
      <h1>SavvyHomeManager</h1>
      
      {/* Render HouseTracker or TaskBoxes based on selectedHome */}
      {selectedHome ? (
        <TaskBoxes home={selectedHome} onBackClick={handleBackClick} />
      ) : (
        <HouseTracker onHomeClick={handleHomeClick} />
      )}
    </div>
  );
};

export default App;
