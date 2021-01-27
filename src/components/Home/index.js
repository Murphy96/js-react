import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Run the file <b>todo</b> for the backend, <b>PORT:9000</b>.
        </p>
        <Link to="/test">
          <button>TEST</button>
        </Link>

        <div>
          <h2>Proof Alejandro</h2>
          <Link to="/traffic-light">
            <button>TRAFFIC LIGHT</button>
          </Link>
          <Link to="/traffic-light-post">
            <button>TRAFFIC LIGHT POST</button>
          </Link>
          <Link to="/task">
            <button>TASK</button>
          </Link>
        </div>
        <div>
          <h2>Proof David</h2>
          <Link to="/timer">
            <button>TIMER</button>
          </Link>
          <Link to="/dictionary">
            <button>DICTIONARY</button>
          </Link>
        </div>
        <div>
        <h2>Proof Dotnara</h2>
          <Link to="/timer-with-clock">
            <button>Timer with Clock</button>
          </Link>
          <Link to="/weather">
            <button>Weather</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
