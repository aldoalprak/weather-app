import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentWeather} from '../redux/actions/currentWeatherAction';
import {getForecastWeather} from '../redux/actions/forecastWeatherAction';
import WeatherBox from './WeatherBox';

export default function FavouriteTab() {
  const favouriteHandler = useSelector(state => state.favouriteHandler);
  const dispatch = useDispatch();

  const handleFavouriteClick = (city) => {
    const query = `q=${city}`;
    dispatch(getCurrentWeather(query));
    dispatch(getForecastWeather(query));
  }
  return (
    <>
       {favouriteHandler.data.length>0 ? 
       <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        
          {favouriteHandler.data.map( (city) => 
            <>
              <Button
                onClick={handleFavouriteClick.bind(this, city)}
              >
                <h3>{city}</h3>
              </Button>
            </>
          )}
        </Grid>
        <WeatherBox/>
      </>

      :<p>No favourite has been selected</p>}
      
    </>
    
  )
}