import { REPLACE_POKEMON } from '../types';
import { getRequest } from '../../config/httpClient';
import { SERVER } from '../../config/serverConfig';

export const replacePokemon = (pokemonName, pokemonData) => {
  return {
    type: REPLACE_POKEMON,
    name: pokemonName,
    data: pokemonData,
  }
}

export const loadPokemon = (pokemonName) => {
  return async (dispatch) => {
    const response = await getRequest(SERVER.GET_POKEMON(pokemonName));
    dispatch(replacePokemon(pokemonName, response));
  }
}
