import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';


const api = {
  key: "14ebf360bbbd41434fd818ca7994d1cd",
  base: "https://api.openweathermap.org/data/2.5"
}


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const search = evt => {
    if (evt.key === "Enter") {
      Promise.all([
        fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json()),
        fetch(`${api.base}/forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
      ])
      .then(([weatherResult, forecastResult]) => {
        setWeather(weatherResult);
        const daily = forecastResult.list.filter(item => item.dt_txt.includes("12:00:00"));
        setForecast(daily);
        setQuery('');
        console.log(weatherResult, daily);
    })
    .catch(err => console.error(err));
  }
};

  //function that tells today's date
  const todaysDate = (entry) => {
    
    let dayInWords = entry.toLocaleString('en-US', {weekday: 'short'})
    let day = entry.getDate();
    let month = entry.getMonth() + 1;
    let year = entry.getFullYear();
    return `${dayInWords}, ${day} ${month} ${year}`;
  }

  return (
    <div className={
      typeof weather.main !== "undefined"
        ? (
        weather.weather[0].main === "Rain"
          ? "app rainy"
          : weather.weather[0].main === "Clouds"
            ? "app cloudy"
            : weather.weather[0].main === "Clear"
              ? "app clear-day"
              : weather.weather[0].main === "Smoke"
                ? "app smoky"
                : weather.main.temp > 35
                  ? "app summer"
                  : "app"
      )
    : "app"
}>
    
      <main>
        <div className='search-box'>
          <input type="text" className='search-bar' placeholder='Enter city...' 
            onChange={(e) => setQuery(e.target.value)} value={query} onKeyDown={search}></input>
        </div>
          {typeof weather.main != "undefined" ? (
          <div>
            <div className='weather-display'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{todaysDate(new Date())}</div>
              <div className='weather-data'>
                <div className='temperature'>{Math.round(weather.main.temp)}&deg;c</div>
                <div className='forecast'> {weather.weather[0].main}</div>
                </div>
              </div>
              {forecast.length > 0 && (
                <div className="future-forecast-container">
                  <details className='future-forecast-accordion'>
                    <summary className='future-forecast-heading'>Access 5-Day Forecast </summary>
                    <div className="future-forecast">
                      {forecast.map((day, index) => (
                        <div key={index} className="forecast-day">
                          <div className="forecast-date"> {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })} </div>
                          <div className="forecast-temp">{Math.round(day.main.temp)} &deg;C </div>
                          <div className="forecast-weather">{day.weather[0].main} </div>
                        </div>
                      ))}
                    </div>
                  </details>
                  </div>
              )}


            </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
