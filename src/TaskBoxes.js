// Task Boxes

import React from 'react';
import bathroom from './images/bathroom-cleaning-housekeeping-toilet-svgrepo-com.svg';
import bed from './images/bed-single-svgrepo-com.svg';
import dishes from './images/dishes-svgrepo-com.svg';
import towels from './images/towel.svg';

const TaskList = [
  "Wash Bed Sheets",
  "Wash Towels",
  "Clean Bathroom",
  "Clean Kitchen"
];

const taskImageMapping = {
  "Wash Bed Sheets": bed,
  "Wash Towels": towels,
  "Clean Bathroom": bathroom,
  "Clean Kitchen": dishes
};

function TaskBoxes({ onBackClick }) {
  const handleBackClick = () => {
    // Call the onBackClick callback provided by the parent component
    onBackClick();
  };

  return (
    <div className="homes">
      <button onClick={handleBackClick} className="back-button">
        Back to HouseTracker
      </button>
      <div className="boxes-container">
        {TaskList.map((task, i) => (
          <div key={i} className="location-box">
            <img src={taskImageMapping[task]} alt="Task Icon" className="task-icon" />
            <div className="box-content">
              <div className="box-title">{task}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoxes;
