import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from './styles'
import App from "../App";
import ThreeDay from "../ThreeDay";
import FiveDay from "../FiveDay";
import Header from '../Header'

const Router = () => (
  <BrowserRouter>
    <GlobalStyle />
    <div>
      <Switch>
        <Route exact path="/" render={() => <Header><App /></Header>} />
        <Route path="/threeday" render={() => <Header><ThreeDay /></Header>} />
        <Route path="/fiveday" render={() => <Header><FiveDay /></Header>} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;