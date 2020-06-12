import React from 'react';
import testing from './test2.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="landing-container">
          <header className="overlay">I'm Dylan Lynn.
          <br />
          A Developer
          </header>
          <img src={testing} className="landing-image" />
        </div>
      </header>
    </div>
  );
}

export default App;
