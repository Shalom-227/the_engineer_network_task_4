# Project Overview
This project, a  Weather Dashboard is a React-based application that provides real-time weather information using the OpenWeatherMap API.

## Features
- City Search: ##Type ##out ##any ##city of choice in the search bar and ##push ##enter to instantly view its current weather.

- Current Conditions: Displays city name and country, date, temperature, and weather description.

- 5-Day Forecast: Shows a simple forecast with daily temperature trends and  weather description displayed in accordion style.

- Responsive UI: Clean and user-friendly interface optimized for desktop and mobile.

## API Integration
This project uses the OpenWeatherMap API to fetch weather data:

- Current Weather Data API → Provides live weather conditions for the searched city.

- 5 Day / a day Forecast API → Supplies forecast data, simplified into daily summaries.


## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Shalom-227/the_engineer_network_task_4
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
/public
  /components       → Reusable React components
  /assets/images    → Static images and icons
  /index.css        → Global styles
/App.js            → Main application entry point

## Tech Stack
- React.js (frontend framework)

- Native JavaScript to Fetch API (for HTTP requests)

- OpenWeatherMap API (data source)

- Vanilla CSS ( for styling)

## Future Updates
- Loading States: Display a spinner or message while weather data is being fetched.

- Error Handling: Show user-friendly error messages in the browser (e.g., “City not found” or “Network error”) instead of only logging to the console.



live link: https://the-engineer-network-task-4-wsnk.vercel.app/