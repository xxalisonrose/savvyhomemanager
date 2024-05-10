import React, { useState, useEffect } from 'react';
import TaskNotes from './TaskNotes';

const NotesList = ({ task, onBackClickNotes }) => {
  const [entries, setEntries] = useState(() => {
    // Load entries from local storage if available, or initialize as an empty array
    const savedEntries = localStorage.getItem(`entries_${task}`); // Use task name as part of the key
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  

  // Update local storage whenever entries change
  useEffect(() => {
    localStorage.setItem(`entries_${task}`, JSON.stringify(entries));
  }, [entries, task]);

  const handleAddEntry = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
  };



  const handleBackClickNotes = () => {
    console.log("Back button clicked");
  }

  return (
    <>
      <h2>{task} Entries:</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.date}</strong>: {entry.text}
          </li>
        ))}
      </ul>

      <TaskNotes addEntry={handleAddEntry} />

      {/* Back button to navigate back to TaskBoxes */}
      <button onClick={handleBackClickNotes} className="back-button">
        Back to Task Selection
      </button>
    </>
  );
};

export default NotesList;
