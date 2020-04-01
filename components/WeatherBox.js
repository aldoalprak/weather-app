import {useEffect, useState} from 'react';
import {geolocated} from 'react-geolocated';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentWeather} from '../redux/actions/currentWeatherAction';
import {getForecastWeather} from '../redux/actions/forecastWeatherAction';
import {addFavourite, deleteFavourite} from '../redux/actions/favouriteAction';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// const logo = require('./50n.png')

const cardStyle = makeStyles({
  root: {
    width: 150,
    height:150
  },
});



function WeatherBox({getInitialState}) {
  const cardClass = cardStyle();
  const [dayState, setDay] = useState(moment().format('MMMM Do YYYY'));
  const currentWeather = useSelector(state => state.currentWeather);
  const forecastWeather = useSelector(state => state.forecastWeather);
  const favouriteHandler = useSelector(state => state.favouriteHandler);
  const dispatch = useDispatch();

  useEffect(() => {
    //initialize value
    if(!getInitialState) return //to prevent code running when open favourite tab
    let query;
    function getPosition(position) {
      query=`lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      
      dispatch(getCurrentWeather(query));
      dispatch(getForecastWeather(query));
    }
    console.log(navigator)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }

    dispatch(getCurrentWeather());
    dispatch(getForecastWeather());
  },[])

  const handleForecastClick = (day) => {
    const nextDay = moment().add(day, 'days').format('MMMM Do YYYY');
    setDay(nextDay);

  }

  const handleFavouriteClick = (city) => {
    dispatch(addFavourite(city));
  }

  const handleDeleteFavouriteClick = (city) => {
    dispatch(deleteFavourite(city));
  }
  
  return (
    <>
      <Card>
        <CardContent>
          {
            currentWeather.data ?
              <>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  {favouriteHandler.data.indexOf(currentWeather.data.name) === -1 ?
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={handleFavouriteClick.bind(this, currentWeather.data.name)}
                    >
                      Add to Favourite
                    </Button> :
                    <Button
                      color="secondary"
                      variant="outlined"
                      onClick={handleDeleteFavouriteClick.bind(this, currentWeather.data.name)}
                    >
                      Remove from Favourite
                    </Button>
                    
                  }
                  
                  <p>{currentWeather.data.name}, {currentWeather.data.sys.country}</p>
                  <p>{moment().format('MMMM Do YYYY | dddd H:mm A')}</p>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <p>{Math.round(currentWeather.data.main.temp)}<sup>o</sup>C</p>
                  <img src={require("./../assets/03n.png")} />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <p>{currentWeather.data.weather[0].description}</p>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <p>humidity: {currentWeather.data.main.humidity}%</p> ~~
                  <p>wind speed: {Math.round(currentWeather.data.wind.speed*3.6)}km/h</p>
                </Grid>
               
              </>
            :null   
          }
          <br/>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            container spacing={5}
          >
            <h2>Weather Forecast</h2>
            <h5>{dayState}</h5>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {
              forecastWeather.data ?
                <>
                  {forecastWeather.data.list.map(item => {
                    if(moment.unix(item.dt).format('MMMM Do YYYY') === dayState) {
                      return (
                        <>
                          <Card className={cardClass.root}>
                            <img src={require("./../assets/03n.png")} />
                            <CardContent
                              color="textSecondary"
                            >  
                              <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                container spacing={10}
                              >
                                <h6>{Math.round(item.main.temp)}<sup>o</sup>C - {item.weather[0].description}</h6>
                                <h5>{moment.unix(item.dt).format('H:mm A')}</h5>
                              </Grid>
                            </CardContent>
                          </Card>
                        </>
                      )
                      
                    }
                  })
                  }
                </>
              :null
            }
            
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {
              [0,1,2,3,4,5].map((day, i)=> {
                return(
                  <>
                    <Button
                      key={i}
                      variant="contained"
                      color="primary"
                      onClick={handleForecastClick.bind(this, day)}
                    >
                      {moment().add(day,'days').format('dddd')} 
                    </Button>
                    <p>-</p>
                  </>
                )
              })
            }
          </Grid>
          
        </CardContent>
      </Card>
    </>
  )
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(WeatherBox)