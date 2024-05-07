    // Function to format the date and time string
    function formatDateTime(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        };
        return dateTime.toLocaleString(undefined, options);
      }
  
      // Function to fetch world time
      async function fetchWorldTime() {
        const timeContainer = document.getElementById('timeContainer');
        timeContainer.innerHTML = '<p>Loading...</p>';
        
        try {
          const response = await fetch('https://worldtimeapi.org/api/timezone/America/New_York');
          if (!response.ok) {
            throw new Error('Failed to fetch world time');
          }
          const data = await response.json();
          timeContainer.innerHTML = `
            <h2>Current Time</h2>
            <p>Timezone: ${data.timezone}</p>
            <p>Current Time: ${formatDateTime(data.datetime)}</p>
          `;
        } catch (error) {
          timeContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        }
      }
  
      // Call fetchWorldTime when the page loads
      fetchWorldTime();