import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
};

export default App;
