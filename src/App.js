import React from 'react';

const api = {
  key: "14ebf360bbbd41434fd818ca7994d1cd",
  base: "https://api.openweathermap.org/data/2.5"
}


function App() {

  const todaysDate = (entry) => {
    
    let dayInWords = entry.toLocaleString('en-US', {weekday: 'short'})
    let day = entry.getDate();
    let month = entry.getMonth() + 1;
    let year = entry.getFullYear();
    return `${dayInWords}, ${day} ${month} ${year}`;
  }
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input type="text" className='search-bar' placeholder='Search here ...'></input>
        </div>
        <div className='weather-display'>
          <div className='location'> Osogbo City, NGR</div>
          <div className='date'>{todaysDate(new Date())}</div>
          <div className='weather-data'>
            <div className='temperature'> 30&deg;C</div>
            <div className='forecast'> Winter</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
