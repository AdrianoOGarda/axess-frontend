import React, { useContext } from 'react'
import {CartContext} from "../CartContext";
import { InputNumber } from 'antd';


const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const clearLocalCart = () => {
        setCart([]);
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove ))
    };

    function setQuantity(product, value) {
        const newCart = [...cart];
        console.log(`valueeee: ${value}`)
        newCart.find(
            (item) => item.name === product.name
        ).quantity = value;
        setCart(newCart);
    }

    // function setQuantity(value, product) {
    //     console.log(`valueeee: ${value}`)
    // }

    console.log(`aaaaaarghhhh: ${cart}`)

    return (
        <>
            <p>CART</p>
            <p>{cart.length}</p>
            <button onClick={clearLocalCart}>Clear Cart</button>
            {cart?.map( (cartItem, idx) => (
                <div key={idx}>
                    <p>Item</p>
                    <p>{cartItem.name}</p>
                    <p>{cartItem.quantity}</p>
                    <button onClick={() => removeFromCart(cartItem)}>Remove from Cart</button>
                    <input type="number" min="1" value={cartItem.quantity} onChange={(e) => setQuantity(cartItem, e.target.value)} />
                </div>
            ))}
        </>
    )
}

export default Cart
