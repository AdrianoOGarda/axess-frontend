import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import NotFound from './components/404/NotFound.js';
import Layout from "./components/layout"

const Router = () => (
  <BrowserRouter>
  <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
