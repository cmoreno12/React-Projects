import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginScreen } from "../components/LoginScreen";
import { MarvelScreen } from "../components/MarvelScreen";
import { Navbar } from "../components/UI/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/login" component={LoginScreen}></Route>
          <Route exact path="/" component={MarvelScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
};
