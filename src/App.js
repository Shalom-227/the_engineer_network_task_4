import React from 'react';

const api = {
  key: "14ebf360bbbd41434fd818ca7994d1cd",
  base: "https://api.openweathermap.org/data/2.5"
}


function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input type="text" className='search-bar' placeholder='Search here ...'>
          </input>
        </div>
      </main>
    </div>
  );
}

export default App;
