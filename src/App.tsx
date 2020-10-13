import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Posts}></Route>
      </Switch>
    </div>
  );
};

export default App;
