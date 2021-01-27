import { getRequest } from "../../config/httpClient";
import { SERVER } from "../../config/serverConfig";

export const fetchWeatherInRange = (weatherData) => {
  return {
    type: FETCH_WEATHER_IN_RANGE,
    weatherData
  }
}

// GET_WEATHER_RANGE:(start, end) => `${URL_WEATHER}?start=${start}&end=${end}`,
//     GET_WEATHER_DAY
export const WeatherInRange = (start, end) => {
  return async (dispatch) => {
    const response = await getRequest(SERVER.GET_WEATHER_RANGE(start, end));
    console.log(response);
    dispatch(fetchWeatherInRange(response));
  }
}
