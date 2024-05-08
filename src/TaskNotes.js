import React, { useState } from 'react';
import TimeKeeper from './TimeKeeper';

const TaskNotes = ({ addEntry }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Always add the entry, even if text is empty
    addEntry({ text, date: new Date().toLocaleString() });
    setText(''); // Clear the text input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Optional Notes Section"
        rows={5}
        cols={50}
      />
      <br />
      <TimeKeeper />
      
      <button type="submit" className='submit-button'>Update</button>
      
    </form>
  );
};

export default TaskNotes;
