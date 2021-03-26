import React, { useContext } from 'react'
import {CartContext} from "../CartContext";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const clearLocalCart = () => {
        localStorage.clear();
    }


    return (
        <>
            <p>CART</p>
            <p>{cart.length}</p>
            <button onClick={clearLocalCart}>Clear Cart</button>
        </>
    )
}

export default Cart
