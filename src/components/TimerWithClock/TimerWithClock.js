import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const TimerWithClock = () => {
  const initialState = 0;
  const [counterTimer, setCounterTimer] = useState(initialState);
  const [list, setList] = useState([]);
  const [check, setCheck] = useState(false);

  const handleButtonStart = () => {
    setCounterTimer(initialState);
    setCheck(true);
    setList([]);
  };
  const handleButtonStop = () => {
    setList([...list, counterTimer]);
  }

  const handleButtonPauseReset = () => {
    setList([...list, counterTimer]);
    setCounterTimer(initialState);
    setCheck(false);
  };

  useEffect(() => {
    if(check){
      const  timerClock = setTimeout(() => {
        setCounterTimer(preState => preState + 1);
      }, 500);
      return () => clearTimeout(timerClock);
    }
  }, [counterTimer, check]);

  return (
    <div className="layout">
      <div className="title">TIMER :D</div>
      <div className="title">{counterTimer}</div>
      <div className="input">
        <button onClick={handleButtonStart}>START</button>
        <button onClick={handleButtonStop}>PAUSE</button>
        <button onClick={handleButtonPauseReset}>VUELTA</button>
        {
          <ol>
            {list?.map((item, index) => (<li key={index}>{item}</li>))}
          </ol>
        }
        <Link to="/"><button>RETURN</button></Link>
      </div>
    </div>
  )
}

export default TimerWithClock;
