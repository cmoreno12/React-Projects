import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { DcScreen } from "../components/DcScreen";
import { HeroScreen } from "../components/HeroScreen";
import { MarvelScreen } from "../components/MarvelScreen";
import { Navbar } from "../components/UI/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/marvel" component={MarvelScreen} />
          <Redirect to="marvel" />
        </Switch>
      </div>
    </>
  );
};
