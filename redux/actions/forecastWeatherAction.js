import FetchApi from '../utils/fetchApi';

export const getForecastWeather = query => {
  if(!query) {
    query=`q=Austin`
  }
  return dispatch => {
    dispatch({
      type: 'FETCH_FORECAST_REQUEST'
    });

    FetchApi.get(`/data/2.5/forecast?appid=${WEATHER_API_KEY}&units=metric&${query}`)
      .then(({ data }) =>
        dispatch({
          type: 'FETCH_FORECAST',
          payload: data
        })
      )
      .catch(err => {
        dispatch({
          type: 'FETCH_FORECAST_FAILED',
          payload: err
        });
      });
  };
};