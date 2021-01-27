import React from 'react'

const Synonyms = ({synonyms}) => {
  return (
    <div>
      <h1>{
          (synonyms.word === 'synonyms')? synonyms.meaning :synonyms.word
      }</h1>
      {
        synonyms?.synonyms?.map((word, index) => (
          <ol key={`${word}_${index}`}>
            <li>{word}</li>
          </ol>
        ))
      }
    </div>
  )
}

export default Synonyms
