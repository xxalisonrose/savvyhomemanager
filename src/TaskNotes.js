// Task Notes
import React from 'react';
import { useState } from 'react';
import notebook from './images/notebook-svgrepo-com.svg';

const EntryForm = ({ addEntry }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addEntry({ text, date: new Date().toLocaleString() });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <img src={notebook} alt="Task Icon" className="task-icon" />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your entry..."
        rows={5}
        cols={50}
      />
      <br />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;
