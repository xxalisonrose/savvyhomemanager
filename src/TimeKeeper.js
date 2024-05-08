// API to keep track of date and time
// In future users will be able to pick their own timezones
// This is hard coded to EST

import React, { useState, useEffect } from 'react';

const TimeKeeper = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/New_York');
        if (!response.ok) {
          throw new Error('Failed to fetch time');
        }
        const data = await response.json();
        setCurrentTime(data.datetime);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching time:', error);
        setLoading(false);
      }
    };

    fetchTime();
  }, []);

  return (
    <div className='TimeKeeper'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{currentTime ? currentTime : 'Failed to fetch time'}</p>
      )}
    </div>
  );
};

export default TimeKeeper;
