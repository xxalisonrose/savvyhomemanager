// List of Notes

import React from 'react';

const EntryList = ({ entries }) => {
  return (
    <div>
      <h2>Entries:</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.date}</strong>: {entry.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
