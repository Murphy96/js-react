import React from 'react'

const Clock = ({ inputTimer }) => {

  return (
    <div className="clock">
      <div className="clock-hands">
        {inputTimer}
      </div>
    </div>
  )
}

export default Clock
