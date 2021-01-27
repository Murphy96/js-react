import React from 'react'

const Meaning = ({meaning}) => {
  return (
    <div>
      <h1>{ meaning.word }</h1>
      <li>{ meaning.meaning }</li>
    </div>
  )
}

export default Meaning
