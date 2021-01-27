import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDictionary, fetchDictionaryMeaningWord, fetchDictionarySynonyms } from '../../store/actions/dictionary';
import { Link } from 'react-router-dom';
import DictionaryListWords from './DictionaryListWords';
import Meaning from './Meaning';
import Synonyms from './Synonyms';
const DictionaryScreen = () => {
  const dictionary = useSelector(state => state.dictionary);
  const { words, synonyms, meaning } = dictionary;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDictionary());
  }, [dispatch]);

  const [synonymsSearch, setSynonymsSearch] = useState('');
  const [check, setCheck] = useState(0)
  const handleInputChange = ({target}) => {
    setSynonymsSearch(target.value)
  }
  const handleSearchWord = ({target}) => {
    if(target.name === 'synonyms'){
      setCheck(1);
      dispatch(fetchDictionarySynonyms(synonymsSearch));
    }else if(target.name === 'meaning' && synonymsSearch ){
      dispatch(fetchDictionaryMeaningWord(synonymsSearch));
      setCheck(2);
    }else{
      setCheck(0);
    }
    setSynonymsSearch('');
  }

  return (
    <div>
      <h1>DICTIONARY</h1>

      <DictionaryListWords words={words}/>
      <div>
        <input
          placeholder="Enter your word"
          name="synonyms"
          value={synonymsSearch}
          onChange={handleInputChange}
        />
        <button name="synonyms" onClick={ handleSearchWord }>SEARCH SYNONYMS</button>
        <button name="meaning" onClick={ handleSearchWord }>SEARCH MEANING</button>
        <Link to="/"><button>RETURN</button></Link>
        {
          check === 1 && synonyms.length !== 0 && (
            <Synonyms synonyms={synonyms} />
          )
        }
        { check === 2 && <Meaning meaning={meaning}/> }
      </div>


    </div>
  )
}

export default DictionaryScreen;

