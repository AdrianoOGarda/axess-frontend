import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import Provider from "./context"
import {CartProvider} from "./CartContext"
import {FirstBedProvider} from "./productsContext/FirstBedContext"

ReactDOM.render(
    <Provider>
    <CartProvider>
    <FirstBedProvider>
        <Router />
    </FirstBedProvider> 
    </CartProvider>
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
