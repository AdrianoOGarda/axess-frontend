import React, { useContext, useState, useEffect } from 'react'
import {CartContext} from "../CartContext";
import {FirstBedContext} from "../productsContext/FirstBedContext"
import "../css/tourCart.css"
import "../css/typography.css"
import { Select } from 'antd';

const { Option } = Select;


const TourCart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [firstBed, setFirstBed] = useContext(FirstBedContext);
    const [depto, setDepto] = useState(null);

    const deptoNumbers = ['1', '1A', '2', '2A', '2B', '3', '3A', '3B', '4A/5A', '5', '6', '7', '8']

    const clearLocalCart = () => {
        setCart([]);
    }

    const clearLocalBed = () => {
        setFirstBed({});
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove ))
    };

    const removeFirstBed = (productToRemove) => {
        setFirstBed(firstBed.filter((product) => product !== productToRemove ))
    };

    function setQuantity(product, value) {
        const newCart = [...cart];
        console.log(`valueeee: ${value}`)
        newCart.find(
            (item) => item.name === product.name
        ).quantity = value;
        setCart(newCart);
    }

    function setBedQuantity(product, value) {
        const newFirstBed = [...firstBed];
        newFirstBed.find(
            (item) => item.name === product.name
        ).quantity = value;
        setFirstBed(newFirstBed);
    }

    function onChange(value) {
        console.log(`selected ${value}`);
        setDepto(value)
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    useEffect(() => {

        if(depto === '2B'){
            setFirstBed({...firstBed, quantity: 5});        }
    }, [depto]);

    console.log('putaaaa', firstBed)

    // function setQuantity(value, product) {
    //     console.log(`valueeee: ${value}`)
    // }

    console.log(`aaaaaarghhhh: ${JSON.stringify(cart)}`)

    return (
        <div className='tour-main-cart-div'>

        <div className='tour-cart-title-div'>
            <div className='tour-cart-title-inside-div'>
                <div className='tour-cart-title-divider'></div>
                <h1>Checkout</h1>
                <div className='tour-cart-title-divider'></div>
            </div> 
        </div>

        <div>
            <p>¿Qué tipo de departamento tienes?</p>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Departamento X"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
            >
            {deptoNumbers.map((number, idx) => (
                <Option key={idx} value={number}>{number}</Option>
            ))}
                </Select>
        </div>

            
            {/* {cart?.map( (cartItem, idx) => (
                <div key={idx} className='tour-cart-product-div'>
                    <img src={cartItem.image} alt="item-image"/>
                    <p>{cartItem.name}</p>
                    <input type="number" min="1" value={cartItem.quantity} onChange={(e) => setBedQuantity(cartItem, e.target.value)} />
                    <button onClick={() => removeFromCart(cartItem)}>Remove from Cart</button>
                    {cartItem.category === "BEDS" && (
                        <p>Esta es una cama</p>
                    )}
                </div>
            ))} */}

            {/* {firstBed?.map( (cartItem, idx) => (
                <div key={idx} className='tour-cart-product-div'>
                    <img src={cartItem.image} alt="item-image"/>
                    <p>{cartItem.name}</p>
                    <input type="number" min="1" value={cartItem.quantity} onChange={(e) => setBedQuantity(cartItem, e.target.value)} />
                    <button onClick={() => removeFromCart(cartItem)}>Remove from Cart</button>
                    {cartItem.category === "BEDS" && (
                        <p>Esta es una cama</p>
                    )}
                </div>
            ))} */}

            
                <div className='tour-cart-product-div'>
                    <img src={firstBed?.image} alt="item-image"/>
                    <p>{firstBed?.name}</p>
                    <input type="number" min="1" value={firstBed?.quantity} onChange={(e) => setBedQuantity(firstBed, e.target.value)} />
                    <button onClick={() => removeFromCart(firstBed)}>Remove from Cart</button>
                    {firstBed?.category === "BEDS" && (
                        <p>Esta es una cama</p>
                    )}
                </div>
            

            
            

        <button onClick={clearLocalCart}>Clear Cart</button>
        <button onClick={clearLocalBed}>Clear Bed</button>
        </div>
    )
}

export default TourCart
