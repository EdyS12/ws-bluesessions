import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages";
import Calendario from "./Pages/calendar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Calendario" component={Calendario} exact />
      </Switch>
    </Router>
  );
}

export default App;
