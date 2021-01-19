const URL_POKEMON = process.env.REACT_APP_API_POKEMON_URI;

export const SERVER = (function () {
  const URL_BASE = {
    BASE: '/',
    URL_POKEMON,
  }
  const API = 'api/v2';
  const POKEMON = 'pokemon';
  return {
    GET_POKEMON: (pokemonName) => `${URL_BASE.URL_POKEMON}/${API}/${POKEMON}/${pokemonName}`
  }
})();