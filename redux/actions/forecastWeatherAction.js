import FetchApi from '../utils/fetchApi';

export const getForecastWeather = query => {
  console.log('fetching forecast...', query);
  if(!query) {
    query=`q=Bandung`
  }
  return dispatch => {
    dispatch({
      type: 'FETCH_FORECAST_REQUEST'
    });

    FetchApi.get(`/data/2.5/forecast?appid=828aebb97dc316555aae9135cb5c241c&units=metric&${query}`)
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