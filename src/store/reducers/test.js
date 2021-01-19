import { REPLACE_POKEMON } from '../types';

const initialState = {};

export const test = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case REPLACE_POKEMON:
      newState[action.name] = action.data;
      return newState;
    default:
      return state;
  }
}
