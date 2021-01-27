import { useState, useEffect } from 'react';
export const useTimer = (initialState) => {

  const [timer, setTimer] = useState(initialState);
  const [textInput, setTextInput] = useState('0');
  const [check, setCheck] = useState(false);

  const handleStartTimer = () => {
    setCheck(true);
    setTimer(textInput);
  };
  const handleStopTimer = () => {
    setCheck(false);
  };
  const handleResetTimer = () => {
    setCheck(false);
    setTimer(initialState);
    setTextInput('0');
  };
  const handleInputChange = (value) => {
    setTextInput(value);
  };
  useEffect(() => {
    if(check && timer > 0 ){
      // state -
      const time = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(time);
    }
  }, [check, timer]);

  /*
    useEffect
    setTimeout ->
    setInterval ->
  */


  return {handleInputChange, handleStartTimer, handleStopTimer, handleResetTimer, timer, textInput};
}
