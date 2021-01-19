import { useDispatch, useSelector } from 'react-redux';

import { loadPokemon } from '../store/actions';

export const useTestState = () => {
  return useSelector(state => state.test);
}

export const useTestDispatch = () => {
  const dispatch = useDispatch();
  return {
    loadPokemon: (pokemonName) => () => dispatch(loadPokemon(pokemonName)),
  }
}