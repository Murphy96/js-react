import React from 'react';

const ErrorTask = ({error}) => {
  console.log(error);
  return (
    <div>
      <h2>{error}</h2>
    </div>
  )
}

export default ErrorTask;
