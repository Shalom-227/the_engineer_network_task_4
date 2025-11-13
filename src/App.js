import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';


const api = {
  key: "14ebf360bbbd41434fd818ca7994d1cd",
  base: "https://api.openweathermap.org/data/2.5"
}


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
    });
  }
}

  //function that tells today's date
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
          <input type="text" className='search-bar' placeholder='Search here ...' 
            onChange={(e) => setQuery(e.target.value)} value={query} onKeyDown={search}></input>
        </div>
          {typeof weather.main != "undefined" ? (
          <div>
            <div className='weather-display'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{todaysDate(new Date())}</div>
              <div className='weather-data'>
                <div className='temperature'> 30&deg;C</div>
                <div className='forecast'> Winter</div>
                </div>
              </div>
            </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
