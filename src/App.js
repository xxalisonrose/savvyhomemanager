import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HouseTracker from './HouseTracker';
import TaskBoxes from './TaskBoxes';
import NotesList from './NotesList';

const App = () => {
  const [selectedHome, setSelectedHome] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleHomeClick = (home) => {
    setSelectedHome(home); // Update selected home when a home is clicked
  };

  const handleBackClick = () => {
    setSelectedHome(null); // Reset selected home to go back to HouseTracker
  };


  const handleSelectedTaskBackClick = () => {
    setSelectedTask(null); // Reset selected task to go back to TaskTracker
  };



  return (
    <div>
      <h1>SavvyHomeManager</h1>
  
      {selectedHome && !selectedTask && (
        <TaskBoxes home={selectedHome} onBackClick={handleBackClick} />
      )}
  
      {selectedTask && (
        <NotesList task={selectedTask} onBackClickNotes={handleSelectedTaskBackClick} />
      )}
  
      {!selectedHome && (
        <HouseTracker onHomeClick={handleHomeClick} />
      )}
    </div>
  );
};

export default App;


