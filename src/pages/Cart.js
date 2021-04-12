import React, { useContext, useEffect } from 'react'
import {CartContext} from "../CartContext";
import {Link} from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import "../css/cart.css"
import "../css/typography.css"


const Cart = () => {
    const windowSize = useWindowSize();

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

    function onChangeBedSize(e, product) {
        const newCart = [...cart];
        //newCart.filter((item) => item.name === product.name)
        newCart.filter((item) => item.name === product.name)[0].bedSize = e.target.value
        setCart(newCart)
    }


    function setQuantity(product, value) {
        const newCart = [...cart];
        if(value == 0) {
            setCart(newCart.filter((item) => item.name !== product.name))
            } else {
                newCart.find(
                    (item) => item.name === product.name
                ).quantity = value;
                setCart(newCart);
            }
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const bedSizes = ['King', 'Queen', 'Matrimonial']

    console.log(`aaaaaarghhhh: ${JSON.stringify(cart)}`)

    return (windowSize > 480) ? (
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
                    <input type="number" min="0" value={cartItem.quantity} onChange={(e) => setQuantity(cartItem, e.target.value)} />
                    {cartItem.category === "BEDS" && (
                        <select onChange={e => onChangeBedSize(e, cartItem)} className='cart-bed-select'>
                            {bedSizes.map((number, idx) => (
                                <option key={idx} value={number}>{number}</option>
                            ))}
                        </select>
                    )}
                </div>
            ))}
            
            <div style={{marginTop: '10vw', marginBottom: '10vw'}}>
                <Link to='/cart-checkout' style={{color: '#8c857e'}} className='cart-continue-button'>Continuar</Link>
            </div>
        </div>
    ) : (
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
                    <div className='cart-product-mobile-name-div'>
                        <img src={cartItem.image} alt="item-image"/>
                        <div className='cart-mobile-size-div'>
                            <p>{cartItem.name}</p>
                            {cartItem.category === "BEDS" && (
                            <select onChange={e => onChangeBedSize(e, cartItem)} className='cart-bed-select'>
                                {bedSizes.map((number, idx) => (
                                    <option key={idx} value={number}>{number}</option>
                                ))}
                            </select>
                            )}
                        </div>
                    </div>
                    <input type="number" min="0" value={cartItem.quantity} onChange={(e) => setQuantity(cartItem, e.target.value)} />
                </div>
            ))}
        
        <div style={{marginTop: '30vw'}}>
            <Link to='/' style={{color: '#8c857e'}} className='cart-continue-button'>Continuar</Link>
        </div>

        </div>
    )
}

export default Cart
