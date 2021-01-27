import React from 'react';

const DictionaryListWords = ({words}) => {
  return (
    <div>
      {
        words?.map(( { word }, index ) => (
          <ul key={`${word}_${index}`}>
            <li>{word}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default DictionaryListWords;
