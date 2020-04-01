import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentWeather} from '../redux/actions/currentWeatherAction';
import {getForecastWeather} from '../redux/actions/forecastWeatherAction';

export default function CountrySelect() {
  const [cityState, setCityState] = useState('')
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setCityState(event.target.value)
  }

  const handleClick = async() => {
    const query = `q=${cityState}`;
    dispatch(getCurrentWeather(query));
    dispatch(getForecastWeather(query));
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Autocomplete
          options={cities}
          freeSolo
          style={{ width: 500}}
          renderInput={params => 
            <TextField 
              {...params} 
              label="Enter City Name" 
              variant="standard"
              onChange={handleInput}        
            />}
        />
        <Button
          color="primary"
          onClick={handleClick}
          variant="contained"
        >
          Predict Now!
        </Button>
      </Grid>
    </>
  )
  
}

const cities = [
  // {label: 'Bandung'},
  // {label: 'Makassar'},
  // {label: 'Jakarta'}
]