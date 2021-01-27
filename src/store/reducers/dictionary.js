import { FETCH_DICTIONARY_MEANING_WORD_SUCCESS, FETCH_DICTIONARY_SUCCESS, FETCH_DICTIONARY_SYNONYMS_SUCCESS } from "../types/dictionary";

const initialState = {
  words: [],
  synonyms: [],
  meaning: [],
};

export const dictionary = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_DICTIONARY_SUCCESS:
      return{
        ...state,
        words: action.words
      }
    case FETCH_DICTIONARY_SYNONYMS_SUCCESS:
      return{
        ...state,
        synonyms: action.synonyms
      }
    case FETCH_DICTIONARY_MEANING_WORD_SUCCESS:
      return {
        ...state,
        meaning: action.meaning
      }
    default:
      return state;
  }

}
