import currentWeatherReducer from './currentWeatherReducer';
import forecastWeahterReducer from './forecastWeatherReducer';
import favouriteReducer from './favouriteReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecastWeather: forecastWeahterReducer,
  favouriteHandler: favouriteReducer
})

export default rootReducer;