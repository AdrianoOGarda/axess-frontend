import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home, Login, Signup, Beds, Cart, Nightstands, CreateFurniture, EditFurniture, TourConfig, TourOneB, TourCart, TourTwoBTwo, TourTwoBOne, ReplicaOne } from "./pages"

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
        <Route exact path="/tour-select" component={TourConfig}/>
        <Route exact path="/one-bedroom" component={TourOneB}/>
        {/* <Route exact path="/one-bedroom" component={ReplicaOne}/> */}
        <Route exact path="/two-bedrooms-first" component={TourTwoBOne}/>
        <Route exact path="/two-bedrooms-second" component={TourTwoBTwo}/>
        <Route exact path="/tour-cart" component={TourCart}/>
        <Route exact path="/:furnitureId" component={EditFurniture}/>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
