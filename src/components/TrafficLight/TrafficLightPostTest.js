import React, { useState, useEffect } from 'react';
// import { COLOR_RED, COLOR_YELLOW, COLOR_GREEN } from '../../config/constants';
import { Link } from 'react-router-dom';
import { useTimer } from '../../hooks/useTimer';
import Clock from '../Timer/Clock';

import './TrafficLightScreen.css';

const YELLOW = "yellow";
const RED = "red";
const GREEN = "green";

const TrafficLightPostTest = () => {
  const initialStateTime = {
    red: 0,
    yellow: 0,
    green: 0
  };
  const initialStateColor = {
    red: false,
    yellow: false,
    green: false
  };

  const [colorLight, setColorLight] = useState(initialStateColor);
  const [timeLight, setTimeLight] = useState(initialStateTime);

  const handleButtonClick = (color) => {
    setColorLight( prevState => ({
      ...initialStateColor,
      [color] : !prevState[color],
    }));
  };

  const {handleInputChange, handleStartTimer, timer} = useTimer(0);

  const handleInputChangeTrafficLight = ({ target }) => {
    setTimeLight( prevState => ({
      ...prevState,
      [target.name]: +target.value,
    }));
  };

  useEffect(() => {
    handleInputChange(timeLight.red + timeLight.yellow + timeLight.green);
  }, [timeLight,handleInputChange]);

  useEffect(() => {
    if(timer - timeLight.yellow - timeLight.green > 0){
      setColorLight( {
        ...initialStateColor,
        red : true,
      });
    }else if(timer - timeLight.green > 0) {
      setColorLight( {
        ...initialStateColor,
        yellow : true,
      });
    }else if( timer > 0 ){
      setColorLight( {
        ...initialStateColor,
        green : true,
      });
    }else{
      setColorLight({...initialStateColor})
    }
  }, [timer, timeLight ]);

  const handleStartTrafficLight = () => {
    handleStartTimer();
  };

  return (
    <div className="App">
      <div className="app light">
        <div className={`red ${colorLight.red ? 'on' : 'off'}`}></div>
        <div className={`yellow ${colorLight.yellow ? 'on' : 'off'}`}></div>
        <div className={`green ${colorLight.green ? 'on' : 'off'}`}></div>
      </div>
      <Clock inputTimer={timer} />
      <div>
        <button onClick={() => handleButtonClick(RED)}>RED</button>
        <button onClick={() => handleButtonClick(YELLOW)}>YELLOW</button>
        <button onClick={() => handleButtonClick(GREEN)}>GREEN</button>
        <br />
        <input
          placeholder="time of red"
          name="red"
          type="number"
          value={timeLight.red}
          onChange={handleInputChangeTrafficLight}
        />
        <br />
        <input
          placeholder="time of yellow"
          name="yellow"
          type="number"
          value={timeLight.yellow}
          onChange={handleInputChangeTrafficLight}
        />
        <br />
        <input
          placeholder="time of green"
          name="green"
          type="number"
          value={timeLight.green}
          onChange={handleInputChangeTrafficLight}
        />
        <br />
        <button onClick={handleStartTrafficLight}>
          START
            </button>
        <Link to="/">
          <button> RETURN </button>
        </Link>
      </div>
    </div>
  )
}

export default TrafficLightPostTest;
