// List of Notes
import React, { useState } from 'react';
import TaskNotes from './TaskNotes'; // Import TaskNotes component for adding entries

const NotesList = ({ task, onBackClickNotes }) => {
    const [entries, setEntries] = useState([]); // State to manage task entries
  
    const handleAddEntry = (newEntry) => {
      setEntries([...entries, newEntry]); // Add new entry to the list of entries
    };
  
    return (
      <>
        {/* Display task entries and add new entries using TaskNotes component */}
        <h2>{task} Entries:</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.date}</strong>: {entry.text}
            </li>
          ))}
        </ul>
  
        {/* Render TaskNotes component for adding new entries */}
        <TaskNotes addEntry={handleAddEntry} />
  
        {/* Back button to navigate back to TaskBoxes */}
        <button onClick={onBackClickNotes} className="back-button">
          Back to Task Selection
        </button>
      </>
    );
  };
  

export default NotesList;
