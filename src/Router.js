import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home, Login, Signup, Beds, Cart, Nightstands, CreateFurniture} from "./pages"

import NotFound from './components/404/NotFound.js';
import Layout from "./components/layout"

const Router = () => (
  <BrowserRouter>
  <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/beds" component={Beds}/>
        <Route exact path="/nightstands" component={Nightstands}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/create-furniture" component={CreateFurniture}/>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
