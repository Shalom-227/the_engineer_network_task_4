function About() {
  return (
    <div className="about-page">
      <h1>About Weather App</h1>
      <p>Welcome!</p>
      <p> Our mission is simple: to keep you informed about the weather 
        so you can plan your day with confidence.</p>
        
        <h2>What We Do</h2>
        <ul>
            <li>Real-time weather updates for your location and worldwide.</li>
            <li>5-day forecasts with temperature, humidity, wind, and rain chances.</li>
            <li>Dynamic backgrounds and icons that match conditions.</li>
            <li>Severe weather alerts to keep you safe.</li>
        </ul>
      <h2>How It Works</h2>
      <p>
        We use trusted sources like the <strong>OpenWeatherMap API</strong> to
        fetch accurate, up-to-date weather data and present it in a clean,
        easy-to-read interface.
      </p>
      <h2>Our Vision</h2>
      <p>
        Weather affects every part of life — from what you wear to how you
        travel. By making forecasts accessible and engaging, we help you make
        smarter, safer, and more enjoyable decisions every day.
      </p>
    </div>
  );
}

export default About;
