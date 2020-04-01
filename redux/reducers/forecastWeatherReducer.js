const initialState = {
  loading: false,
  data:'',
  error:''
}

const forecastWeatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_CURRENT_WEATHER_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_FORECAST':
      return { ...state, data: action.payload, error: '', loading: false };
    case 'FETCH_FORECAST_FAILED':
      return { ...state, error: action.payload, loading: false };
  }
  return {...state}
}

export default forecastWeatherReducer;