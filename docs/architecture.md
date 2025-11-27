# 🏗️ Application Architecture

This document describes how the Weather App is structured and how data flows through the system.

---

# 1. Project Structure

This document explains how the Weather App is structured.

src/
├─ components/
│   ├─ assets
│   ├─ images/
│   │    ├─ clear-day.png
│   │    ├─ cloudy.png
│   │    ├─ delete-icon.png
│   │    ├─ rainy.png
│   │    ├─ smoky.png
│   │    ├─ summer-2.jpg
│   │    ├─ summer.jpg
│   │    ├─ weather-app-logo.png
│   │    ├─ winter.png
│   │    ├─ mist.png
│   │  
│   ├─ Footer.css
│   ├─ Footer.jsx
│   ├─ NavBar.css
│   ├─ NavBar.jsx
│   ├─ scrollToTop.js
│   
│─ pages/
│   ├─ about.css
│   ├─ About.js
│   │─ Home.css    
│   └─ Home.js
│   │─ Weather.js    
│   └─ App.js 
│   │─ index.css    
│   └─ index.js


# 2. Data Flow

### Weather Search Flow

1. User types a city  
2. Presses Enter / clicks button  
3. Search handler triggers two API calls:
   - `/weather`
   - `/forecast`
4. Responses stored in state  
5. Forecast filtered to 12:00 entries  
6. UI updates automatically  
7. Saved cities stored via CRUD logic  
8. Theme + saved cities persist using localStorage  


### Forecast Handling

API Forecast → Filter ("12:00:00") → forecast[] → 5-Day UI

### CRUD Saved Cities

Add/Delete → savedCities state → localStorage sync → Render list


# 3. Main States

| State | Purpose |
|-------|---------|
| `query` | User input |
| `weather` | Current weather data |
| `forecast` | 5-day forecast |
| `savedCities` | User saved favorites |
| `loading` | API call status |
| `error` | Error message display |

Stored with:
        useState()
        useEffect()
        localStorage


# 4. Routing Structure

Pages:
/
├─ Home
├─ /Weather
├─ /About

Navigation uses React Router.


# 5. Error Handling Logic
- If query empty → show “Please enter a city name”
- If API error → display error
- If forecast missing → safe empty array (`[]`)


