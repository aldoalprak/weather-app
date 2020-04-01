import FetchApi from '../utils/fetchApi';

export const getCurrentWeather = query => {
  if(!query) {
    query=`q=Austin`;
  }
  return dispatch => {
    dispatch({
      type: 'FETCH_CURRENT_WEATHER_REQUEST'
    });

    FetchApi.get(`/data/2.5/weather?appid=${WEATHER_API_KEY}&units=metric&${query}`)
      .then(({ data }) =>
        dispatch({
          type: 'FETCH_CURRENT_WEATHER',
          payload: data
        })
      )
      .catch(err => {
        dispatch({
          type: 'FETCH_CURRENT_WEATHER_FAILED',
          payload: err
        });
      });
  };
};