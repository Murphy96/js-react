// import React, { useState, useEffect } from 'react';
// import './TrafficLight.css';
// const TrafficLight = () => {
//   const initialState = {
//     red: false,
//     yellow: false,
//     green: false,
//   };

//   const [timeTrafficLight, setTimeTrafficLight] = useState({
//     red: 0,
//     yellow: 0,
//     green: 0,
//   });
//   const [trafficLight, setTrafficLight] = useState(initialState);

//   const handleButtonTurnOnOff = ({ target }) => {
//     setTrafficLight({
//       ...initialState,
//       [target.name]: !trafficLight[target.name]
//     });
//   };

//   const handleInputStart = ({ target }) => {
//     setTimeTrafficLight(prevState => ({
//       ...prevState,
//       [target.name]: +target.value
//     }));
//   };
//   // This state verify if there was change in the button start or stop
//   const [checkStartStop, setCheckStartStop] = useState(false);
//   const handleButtonStart = () => {
//     setCheckStartStop(true);

//   };
//   const handleButtonStop = () => {
//     setCheckStartStop(false);
//   };
//   // console.log(checkStartStop);
//   useEffect(() => {
//     console.log('a');
//     if(checkStartStop){
//       // glabal
//       const timeRed = setTimeout(() => {
//         setTrafficLight({...initialState, red : true });
//         const timeYellow = setTimeout(() => {
//           setTrafficLight({...initialState, yellow : true });
//         }, 2000);
//         return() => clearTimeout(timeYellow);
//       },2000);
//       console.log('b1');
//       return () => clearTimeout(timeRed);
//     }
//     console.log('c');

//     // setTrafficLight({...initialState, red : true });
//     // const timeRed = setTimeout(() => {
//     //   setTrafficLight({...initialState, yellow : true });
//     //   setTimeout(() => {
//     //     setTrafficLight({...initialState, green : true });
//     //     setTimeout(() => {
//     //       setTrafficLight({...initialState});
//     //     }, timeTrafficLight.green * 1000);

//     //   }, timeTrafficLight.yellow * 1000);
//     // }, timeTrafficLight.red * 1000);
//     // return () => clearTimeout(timeRed);

//   }, [checkStartStop]);

//   useEffect(() => {
//     effect
//     return () => {
//       //cleanup => des
//     }
//   }, [input])



//   return (
//     <div>
//       <div>
//         <div className="traffic-light">
//           <div className={`red ${trafficLight.red ? 'on' : 'off'}`} />
//           <div className={`yellow ${trafficLight.yellow ? 'on' : 'off'}`} />
//           <div className={`green ${trafficLight.green ? 'on' : 'off'}`} />
//         </div>
//         <div>
//           <button name="red" onClick={handleButtonTurnOnOff}>red</button>
//           <button name="yellow" onClick={handleButtonTurnOnOff}>yellow</button>
//           <button name="green" onClick={handleButtonTurnOnOff}>green</button>
//         </div>
//         <div>
//           <input name="red" onChange={handleInputStart}></input>
//           <input name="yellow" onChange={handleInputStart}></input>
//           <input name="green" onChange={handleInputStart}></input>
//           <button onClick={ handleButtonStart }>START</button>
//           <button onClick={ handleButtonStop }>STOP</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TrafficLight;



import React from 'react'

const TrafficLight = () => {
  return (
    <div>
      TrafficLight
    </div>
  )
}

export default TrafficLight
