import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home, Login, Signup, Beds, Cart, Nightstands, 
CreateFurniture, EditFurniture, TourConfig, TourOneB, 
TourCart, TourTwoBTwo, TourTwoBOne, TourThreeBOne, TourThreeBTwo, 
TourThreeBThree, TVStands, TourKitchen, TourLiving, 
TourExterior, CartList, TourCheckout, Contact, CartCheckout, 
DiningTables, DiningChairs, HighChairs, Sofas, SideChairs, CoffeeTables, Credenzas,
OutdoorSideTables, OutdoorChairs, OutdoorDiningTables, LoungeChairs, Sunbeds, OutdoorSofas } from "./pages"

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
        <Route exact path="/tv-stands" component={TVStands}/>
        <Route exact path="/nightstands" component={Nightstands}/>
        <Route exact path="/dining-tables" component={DiningTables}/>
        <Route exact path="/dining-chairs" component={DiningChairs}/>
        <Route exact path="/high-chairs" component={HighChairs}/>
        <Route exact path="/sofas" component={Sofas}/>
        <Route exact path="/side-chairs" component={SideChairs}/>
        <Route exact path="/coffee-tables" component={CoffeeTables}/>
        <Route exact path="/credenzas" component={Credenzas}/>
        <Route exact path="/outdoor-side-tables" component={OutdoorSideTables}/>
        <Route exact path="/outdoor-chairs" component={OutdoorChairs}/>
        <Route exact path="/outdoor-dining-tables" component={OutdoorDiningTables}/>
        <Route exact path="/lounge-chairs" component={LoungeChairs}/>
        <Route exact path="/sunbeds" component={Sunbeds}/>
        <Route exact path="/outdoor-sofas" component={OutdoorSofas}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/create-furniture" component={CreateFurniture}/>
        <Route exact path="/tour-select" component={TourConfig}/>
        <Route exact path="/one-bedroom" component={TourOneB}/>
        <Route exact path="/two-bedrooms-first" component={TourTwoBOne}/>
        <Route exact path="/two-bedrooms-second" component={TourTwoBTwo}/>
        <Route exact path="/three-bedrooms-first" component={TourThreeBOne}/>
        <Route exact path="/three-bedrooms-second" component={TourThreeBTwo}/>
        <Route exact path="/three-bedrooms-third" component={TourThreeBThree}/>
        <Route exact path="/tour-kitchen" component={TourKitchen}/>
        <Route exact path="/tour-living" component={TourLiving}/>
        <Route exact path="/tour-exterior" component={TourExterior}/>
        <Route exact path="/cart-list" component={CartList}/>
        <Route exact path="/tour-cart" component={TourCart}/>
        <Route exact path="/tour-checkout" component={TourCheckout}/>
        <Route exact path="/cart-checkout" component={CartCheckout}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/:furnitureId" component={EditFurniture}/>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
