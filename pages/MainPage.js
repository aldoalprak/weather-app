import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h1>Welcome to NextWeather App</h1>
        <img src={require('./../assets/bg.png')} width={600}/>
        <br/><br/><br/>
        <Link to="/home">
          <Button
            color="primary"
            variant="contained"
            size="large"
          >
            Click Me
          </Button>
        </Link>
      </Grid>
      
    </div>
  )
}