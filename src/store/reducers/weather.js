import { FETCH_WEATHER_IN_RANGE } from "../types/weather";

const initialState = {
  weatherData : [],
}

export const weather = ( state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_IN_RANGE:
      return {
        weatherData: action.weatherData
      };
    default:
      return state
  }
}
