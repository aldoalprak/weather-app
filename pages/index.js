import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearchBar from '../components/SearchBar'; 
import WeatherBox from '../components/WeatherBox';
import FavouriteTab from '../components/FavouriteTab';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
}

const a11yProps = (index) => {
  return {
    id: `tab-${index}`,
  };
}

export default function Home(props) {
  const [tabsValue, setTabsValue] = useState(0);

  const classes  = useStyles();
  
  const handleTabsChange = (event, newValue) => {
    setTabsValue(newValue);
  }
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Tabs
        variant="fullWidth"
        value={tabsValue}
        onChange={handleTabsChange}
      >
        <Tab label="Home" {...a11yProps(0)}/>
        <Tab label="Favourite" {...a11yProps(1)}/>
      </Tabs>
    </AppBar>
    <TabPanel value={tabsValue} index={0}>
      <SearchBar/>
      <WeatherBox/>
    </TabPanel>
    <TabPanel value={tabsValue} index={1}>
      <FavouriteTab/>
    </TabPanel>
   </div>
   
  )  
}

// Home.getInitialProps = ({store}) => {}