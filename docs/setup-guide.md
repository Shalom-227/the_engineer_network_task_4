# ⚙️ Setup Guide

This guide explains how to install, configure, and run the Weather App.

## 1. Clone the Repository
```bash
git clone https://github.com/Shalom-227/the_engineer_network_task_4

cd weather-app


## 2. Install Dependencies
npm install


##3 Get an OpenWeather API Key
1. Create an account at https://openweathermap.org

2. Go to API Keys

3. Copy your API key

##4. Add API Key to the App

In Weather.js, update:
const api = {
  key: "YOUR_API_KEY",
  base: "https://api.openweathermap.org/data/2.5"
};

##5. Start the Development Server
npm start

App runs on:  http://localhost:3000

## 6 Build for Production
npm run build


## Troubleshooting
❌ API not working 

- Ensure your API key is active
- Ensure the correct endpoint is used

❌ Blank page or crash
- Check console for missing components
- Ensure React Router is properly configured

❌ Cannot read properties of undefined (weather or forecast)
- Ensure error handling blocks protect empty API results
