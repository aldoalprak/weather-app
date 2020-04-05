import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import MainPage from './MainPage';

export default function Router() {
  return(
    <div>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}