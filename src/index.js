import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import Register from "./components/Auth/Register";
// import GameMap from './components/GameMap/GameMap';
import Login from "./components/Auth/Login";
import Map from "./Player API/MAP UI";
import MapView from "./Player API/Map";

const key = "";

const routing = (
  <Router>
    <Switch>
      <Route
        exact
        path='/'
        render={props => <Register {...props} key={key} />}
      />
      <Route exact path='/login' render={props => <Login {...props} />} />
      <Route exact path='/gamemap' render={props => <Map {...props} />} />
      <Route exact path='/gamemap' render={props => <MapView {...props} />} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
