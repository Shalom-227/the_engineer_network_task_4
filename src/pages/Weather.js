import { type } from '@testing-library/user-event/dist/type';
import React, { Component, useState, useEffect } from 'react';


const api = {
  key: "14ebf360bbbd41434fd818ca7994d1cd",
  base: "https://api.openweathermap.org/data/2.5"
}


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [savedCities, setSavedCities] = useState([]);
  const [loading, setLoading] = useState(false); //state of loading
  const [error, setError] = useState(null);  // state for error



  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedCities"));
    if (stored) {
      setSavedCities(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedCities", JSON.stringify(savedCities));
  }, [savedCities]);

  useEffect(() => {
    if (savedCities.length > 0) {
      localStorage.setItem("savedCities", JSON.stringify(savedCities));
    } else {
      localStorage.removeItem("savedCities");
    }
  }, [savedCities]);

  const search = evt => {
    if (!query.trim()) { //prompts user to enter city name if empty is entered
          setError("Please enter a city name.");
          return;
        }

      setLoading(true);
      setError(null);

      Promise.all([
        fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json()),
        fetch(`${api.base}/forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
      ])
      .then(([weatherResult, forecastResult]) => {

        if (weatherResult.cod === "404") {
          throw new Error("City not found. Mind your spelling.");
        }
          setWeather(weatherResult);
        
          const daily = forecastResult.list ? forecastResult.list.filter(item => item.dt_txt.includes("12:00:00")) : [];
          setForecast(daily);
          // setQuery('');
        console.log(weatherResult, daily);
      })
        .catch(err => { setError(err.message || "Hmmm... Soemthing is not right");

      })
      .finally(() => setLoading(false));
  };

  // create function to add city favorites

  const addFavoriteCity = () => {
    if (!weather.name) return;
    const newCity = {
      name: weather.name,
      country: weather.sys.country,
      temp: weather.main.temp,
      id: Date.now()
    };
  setSavedCities([...savedCities, newCity]);
  };

  const deleteFavoriteCity = (id) => {
    setSavedCities(prev => prev.filter(city => city.id !== id));
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
        <div >
          < form className='search-box' onSubmit={(evt) => {
            evt.preventDefault(); search();}}>
            <input type="text" className='search-bar' placeholder='Enter city...' 
              onChange={(evt) => setQuery(evt.target.value)} value={query}/>
              <button className="search-button" type="button" onClick={search}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
          </form>
        </div>
          {loading && (
            <div className="loading">Coming Up...</div>
            )}
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
          {typeof weather.main != "undefined" ? (
          <div>
            <div className='weather-display'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{todaysDate(new Date())}</div>
              <div className='weather-data'>
                <div className='temperature'>{Math.round(weather.main.temp)}&deg;c</div>
                <div className='forecast'> {weather.weather[0].main}</div>
                <button onClick={addFavoriteCity} className="save-btn">Add As Favorite</button>
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
                {savedCities.length > 0 && (
                  <div className="favorites-container">
                    <h3 className='favorites-heading'>Favorites</h3>
                    <ul>
                      {savedCities.map(city => (
                        <li className="favorites" key={city.id}>
                          {city.name}, {city.country} — {Math.round(city.temp)}°C
                          <button className="remove-favorite" onClick={() => 
                            deleteFavoriteCity(city.id)}> 
                            <svg className='bin'
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6l-2 14H7L5 6" />
                              <path d="M10 11v6" />
                              <path d="M14 11v6" />
                              <path d="M9 6V4h6v2" />
                            </svg>
                          </button>
                        </li>
                        ))}
                    </ul>
                  </div>
                      )}
              </div>
                )}
          </div>
            ) : ('')}
      </main>
    </div>
    );
  }

export default App;
