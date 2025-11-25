# 🌐 API Reference

The Weather App uses the **OpenWeather REST API**.

## Base URL
https://api.openweathermap.org/data/2.5



# 1. Current Weather Endpoint
GET /weather?q={cityName}&units=metric&APPID={apiKey}

### Example Response Fields
- `weather[0].main` – Weather condition (Clear, Rain, Clouds)
- `main.temp` – Temperature in Celsius
- `name` – City name
- `sys.country` – Country code



# 2. 5-Day Forecast Endpoint
GET /forecast?q={cityName}&units=metric&APPID={apiKey}


### Notes
- The API returns 40 entries (3-hour intervals)
- The app filters entries with `"12:00:00"` to show daily forecasts



# 3. Error Codes
| Code | Meaning |
|------|---------|
| 200 | Success |
| 404 | City not found |
| 401 | Invalid API key |



# Example Fetch Implementation
```js
Promise.all([
  fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`).then(r => r.json()),
  fetch(`${api.base}/forecast?q=${query}&units=metric&APPID=${api.key}`).then(r => r.json())
]);
