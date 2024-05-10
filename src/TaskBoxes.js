// Task Boxes

/* Future Goals
- Fix colors of SVGs to match better -- not black
- Add a box that will allow you to add your own task
- Add a select group of tasks so the image will be there
- Misc image for tasks that don't have an assigned image*/

import React from 'react';
import { useState } from 'react';
import NotesList from './NotesList';

//Images
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


const TaskBoxes = ({ onBackClick, onBackClickNotes }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleBackClick = () => {
    setSelectedTask(null);
    onBackClick(); // Call the provided onBackClick function
  };

  return (
    <>
      {selectedTask ? (
        <NotesList task={selectedTask} onBackClickNotes={onBackClickNotes} />
      ) : (
        <div className="homes">
          <div className="boxes-container">
            {TaskList.map((task, index) => (
              <div key={index} className="location-box" onClick={() => handleTaskClick(task)}>
                <img src={taskImageMapping[task]} alt="Task Icon" className="task-icon" />
                <div className="box-content">
                  <div className="box-title">{task}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="btn-container">
        <br /> {/* Line break */}
        <button onClick={handleBackClick} className="back-button">
          Return to Select a Different House
        </button>
      </div>
    </>
  );
};

export default TaskBoxes;
