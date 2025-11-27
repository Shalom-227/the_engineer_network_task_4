import './about.css';

function About() {
  return (
    <div className="about-page">
      <div className='block'>
        <h1>About Your Daily Weather App</h1>
        <p>Your Daily Weather App provides accurate, real-time weather updates for any city in the world.
          With a simple search, you can view the current temperature, weather conditions, and a detailed 5-day forecast.<br />
          The app is designed to be fast, responsive, and beginner-friendly, making it easy for anyone to check the weather quickly and reliably.
          Whether you’re planning your day, checking travel conditions, or just curious about the weather in another country, 
          this app gives you the essential information you need.
        </p>
      </div>
      
      <div className='block'>
          <h2>What Your Daiy Weather App Does</h2>
          <ul>
              <li>Real-time weather updates for your location and worldwide.</li>
              <li>5-day forecasts with temperature, humidity, wind, and rain chances.</li>
              <li>Dynamic backgrounds and icons that match conditions.</li>
              <li>Severe weather alerts to keep you safe.</li>
          </ul>
      </div>
    
      <div className='block'>
        <h2>How It Works</h2>
        <p>
          Your Daily Weather App fetches live weather data from the <strong> OpenWeather API</strong> and displays it in a clean, easy-to-read layout.
          When you enter a city name, the app retrieves: <br /> Current weather information <br /> 
          Temperature in Celsius <br /> 
          Weather conditions (Clear, Cloudy, Rainy, etc.) <br /> 
          5-day forecast with daily temperature and conditions <br /> 
          Behind the scenes, the app uses React state management, asynchronous API calls, loading/error handling, CRUD functionality, 
          and localStorage persistence to enhance user experience.
        </p>
      </div>
    </div>
  );
}

export default About;
