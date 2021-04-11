import React, { useContext } from 'react'
import {CartContext} from "../CartContext";
import "../css/cart.css"
import "../css/typography.css"


const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const clearLocalCart = () => {
        setCart([]);
    }

    const clearStorage = () => {
        localStorage.clear()
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

    console.log(`aaaaaarghhhh: ${JSON.stringify(cart)}`)

    return (
        <div className='main-cart-div'>

        <div className='cart-title-div'>
            <div className='cart-title-inside-div'>
                <div className='cart-title-divider'></div>
                <h1>Carrito</h1>
                <div className='cart-title-divider'></div>
            </div> 
        </div>

            
            {cart?.filter(product => product.category  !== undefined).map( (cartItem, idx) => (
                <div key={idx} className='cart-product-div'>
                    <img src={cartItem.image} alt="item-image"/>
                    <p>{cartItem.name}</p>
                    <input type="number" min="1" value={cartItem.quantity} onChange={(e) => setQuantity(cartItem, e.target.value)} />
                    <button onClick={() => removeFromCart(cartItem)}>Remove from Cart</button>
                    {cartItem.category === "BEDS" && (
                        <p>Esta es una cama</p>
                    )}
                </div>
            ))}

        <button onClick={clearLocalCart}>Clear Cart</button>
        <button onClick={clearStorage}>Clear Storage</button>
        </div>
    )
}

export default Cart
