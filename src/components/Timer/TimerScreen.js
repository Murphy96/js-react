import React from 'react';
import { Link } from 'react-router-dom';
import { useTimer } from '../../hooks/useTimer';
import Clock from './Clock';
import './Timer.css';

const TimerScreen = ({ initialState = 30 }) => {
  const { handleInputChange, handleStartTimer, handleStopTimer, handleResetTimer, timer, textInput } = useTimer(initialState);
  return (
      <div className="layout">
      <div className="timer">
        <h1 className="title">Timer Screen</h1>
        <Clock inputTimer={timer} />
        <input
          placeholder="Enter time"
          type="number"
          value={textInput}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button onClick={handleStartTimer}>
          START
        </button>
        <button onClick={handleStopTimer}>
          STOP
        </button>
        <button onClick={handleResetTimer}>
          RESET
        </button>
        <Link to="/">
          <button> RETURN </button>
        </Link>
        {
          (!timer && textInput !== 0) && (
            <h1>ACABO</h1>
          )
        }
      </div>
    </div>
  )
}

export default TimerScreen;
