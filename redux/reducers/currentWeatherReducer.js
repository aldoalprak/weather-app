const initialState = {
  loading: false,
  data:'',
  error:''
}

const currentWeatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_FORECAST_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_CURRENT_WEATHER':
      return { ...state, data: action.payload, error: '', loading: false };
    case 'FETCH_CURRENT_WEATHER_FAILED':
      return { ...state, error: action.payload, loading: false };
  }
  return {...state}
}

export default currentWeatherReducer;