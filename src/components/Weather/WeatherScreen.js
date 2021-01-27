import React, { useState } from 'react';

const WeatherScreen = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleInputChangeDate = ({target}) => {
    if(target.name === 'start'){
      setStartTime(target.value);
    }else{
      setEndTime(target.value);
    }
  };

  const SearchWeatherInRange = () => {
    console.log(startTime);
    console.log(endTime);
  }

  return (
    <div className="layout">
      <div className="title"> WEATHER </div>
      <label>START : </label>
      <input
        type="date"
        name="start"
        patter="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}"
        onChange={handleInputChangeDate}
      />
      <br />
      <label>END : </label>
      <input
        type="date"
        name="end"
        pattern="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}"
        onChange={handleInputChangeDate}
      />
      <br />
      <button onClick={SearchWeatherInRange}>SEARCH</button>

    </div>
  )
}

export default WeatherScreen;
