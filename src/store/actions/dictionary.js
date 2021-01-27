import { getRequest } from "../../config/httpClient"
import { SERVER } from "../../config/serverConfig"
import { FETCH_DICTIONARY_SUCCESS, FETCH_DICTIONARY_SYNONYMS_SUCCESS, FETCH_DICTIONARY_MEANING_WORD_SUCCESS } from "../types/dictionary"
// import { replacePokemon } from "./test"

export const fetchDictionarySuccess = (words) => {
  return {
    type: FETCH_DICTIONARY_SUCCESS,
    words
  }
}

export const fetchDictionarySynonymsSuccess = (synonyms) => {
  return {
    type: FETCH_DICTIONARY_SYNONYMS_SUCCESS,
    synonyms
  }
}

export const fetchDictionaryMeaningWordSuccess = (meaning) => {
  return {
    type: FETCH_DICTIONARY_MEANING_WORD_SUCCESS,
    meaning
  }
}

export const fetchDictionary = () => {
  return async ( dispatch ) => {
    const response = await getRequest(SERVER.GET_DICTIONARY());
    dispatch(fetchDictionarySuccess(response));
  }
}



export const fetchDictionarySynonyms = (synonyms) => {
  return async (dispatch) => {
    const response = await getRequest(SERVER.GET_DICTIONARY_SYNONYMS(synonyms));
    dispatch(fetchDictionarySynonymsSuccess(response));
  }
}

export const fetchDictionaryMeaningWord = (word) => {
  return async (dispatch) => {
    const response = await getRequest(SERVER.GET_DICTIONARY_MEANING(word));
    dispatch(fetchDictionaryMeaningWordSuccess(response));
  }
}
