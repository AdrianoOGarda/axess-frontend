import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import Provider from "./context"
import {CartProvider} from "./CartContext"
import {FirstBedProvider} from "./productsContext/FirstBedContext"
import {SecondBedProvider} from "./productsContext/SecondBedContext"
import {ThirdBedProvider} from "./productsContext/ThirdBedContext"
import {FirstNightstandProvider} from "./productsContext/FirstNightstandContext"
import {SecondNightstandProvider} from "./productsContext/SecondNightstandContext"
import {ThirdNightstandProvider} from "./productsContext/ThirdNightstandContext"
import {EquipProvider } from "./productsContext/EquipContext"
import {DecoProvider} from "./productsContext/DecContext"
import {HotProvider} from "./productsContext/HotContext"


ReactDOM.render(
    <Provider>
    <CartProvider>
    <FirstBedProvider>
    <SecondBedProvider>
        <ThirdBedProvider>
    <FirstNightstandProvider>
    <SecondNightstandProvider>
    <ThirdNightstandProvider>
    <EquipProvider>
    <DecoProvider>
    <HotProvider>
        <Router />
    </HotProvider>
    </DecoProvider>
    </EquipProvider>    
    </ThirdNightstandProvider>
    </SecondNightstandProvider>
    </FirstNightstandProvider>
    </ThirdBedProvider>
    </SecondBedProvider>
    </FirstBedProvider> 
    </CartProvider>
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
