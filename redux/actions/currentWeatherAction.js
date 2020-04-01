import FetchApi from '../utils/fetchApi';

export const getCurrentWeather = query => {
  console.log('fetching Weather...', query);
  if(!query) {
    query=`q=Bandung`;
  }
  return dispatch => {
    dispatch({
      type: 'FETCH_CURRENT_WEATHER_REQUEST'
    });

    FetchApi.get(`/data/2.5/weather?appid=828aebb97dc316555aae9135cb5c241c&units=metric&${query}`)
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