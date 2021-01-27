const URL_POKEMON = process.env.REACT_APP_API_POKEMON_URI;
const URL_TASK = 'http://localhost:9000/todo';
const URL_DICTIONARY = 'http://localhost:9000/dictionary';
const URL_WEATHER = 'http://localhost:9000/weather';
const SYNONYMS = 'synonyms';
const DAY = 'day';
export const SERVER = (function () {
  const URL_BASE = {
    BASE: '/',
    URL_POKEMON,
    URL_TASK,
    URL_DICTIONARY,
    SYNONYMS,
    URL_WEATHER,
    DAY,
  }
  const API = 'api/v2';
  const POKEMON = 'pokemon';
  return {
    GET_POKEMON: (pokemonName) => `${URL_BASE.URL_POKEMON}/${API}/${POKEMON}/${pokemonName}`,
    GET_TASK: () => `${URL_TASK}/`,
    POST_TASK: () => `${URL_TASK}/`,
    GET_CHANGE_STATUS_TASK: (idTask) => `${URL_TASK}/${idTask}`,
    DELETE_TASK: (idTask) => `${URL_TASK}/${idTask}`,
    GET_DICTIONARY: () => `${URL_DICTIONARY}`,
    GET_DICTIONARY_MEANING: (word) => `${URL_DICTIONARY}/${word}`,
    GET_DICTIONARY_SYNONYMS: (word) => `${URL_DICTIONARY}/${SYNONYMS}/${word}`,
    GET_WEATHER_RANGE:(start, end) => `${URL_WEATHER}?start=${start}&end=${end}`,
    GET_WEATHER_DAY:(date) => `${URL_WEATHER}/${DAY}?date=${date}`,
  }
})();
