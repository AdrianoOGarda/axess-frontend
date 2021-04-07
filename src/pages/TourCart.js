import React, { useContext, useState, useEffect } from 'react'
import {CartContext} from "../CartContext";
import {FirstBedContext} from "../productsContext/FirstBedContext"
import {FirstNightstandContext} from "../productsContext/FirstNightstandContext"
import "../css/tourCart.css"
import "../css/typography.css"
import { Select } from 'antd';

const { Option } = Select;


const TourCart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [firstBed, setFirstBed] = useContext(FirstBedContext);
    const [firstNightstand, setFirstNightstand] = useContext(FirstNightstandContext);
    const [depto, setDepto] = useState(null);
    const [bedSize, setBedSize] = useState('King');

    const deptoNumbers = ['1', '1A', '2', '2A', '2B', '3', '3A', '3B', '4A/5A', '5', '6', '7', '8']
    const bedSizes = ['King', 'Queen', 'Matrimonial']

    const clearLocalCart = () => {
        setCart([]);
    }

    const clearLocalBed = () => {
        setFirstBed({});
        localStorage.clear()
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove ))
    };

    const removeFirstBed = (productToRemove) => {
        localStorage.removeItem('firstBed')
    };
    const removeFirstNightstand = (productToRemove) => {
        localStorage.removeItem('firstBed')
    };

    function setBedQuantity(product, value) {
        const newFirstBed = {...firstBed};
        newFirstBed.quantity = value;
        setFirstBed(newFirstBed);
    }

    function setNightstandQuantity(product, value) {
        const newFirstNightstand = {...firstNightstand};
        newFirstNightstand.quantity = value;
        setFirstNightstand(newFirstNightstand);
    }

    function onChange(value) {
        console.log(`selected ${value}`);
        setDepto(value)
    }

    function onChangeBedSize(e) {
        console.log(`selectedBSIZE ${e.target.value}`);
        setBedSize(e.target.value)
    }

    function onSearch(val) {
        console.log('search:', val);
    }


    useEffect(() => {
        if(depto === '1'){
            setBedSize('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '1A'){
            setBedSize('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '2'){
            setBedSize('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '2A'){
            setBedSize('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '2B'){
            setBedSize('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '3'){
            setBedSize('Matrimonial')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
        } else if(depto === '3A'){
            setBedSize('Matrimonial')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
        } else if(depto === '3B'){
            setBedSize('Matrimonial')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
        } else if(depto === '4A/5A'){
            setBedSize('Queen')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '5'){
            setBedSize('Queen')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '6'){
            setBedSize('Matrimonial')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
        } else if(depto === '7'){
            setBedSize('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '8'){
            setBedSize('Matrimonial')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
        }
    }, [depto]);

    // console.log('putaaaa', firstBed)
    // console.log(`aaaaaarghhhh: ${JSON.stringify(cart)}`)
    // console.log('jjjjjjj', bedSize)

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

            {JSON.stringify(firstBed) === '{}' ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={firstBed?.image} alt="item-image"/>
                <p>{firstBed?.name}</p>
                <input type="number" min="1" value={firstBed?.quantity} onChange={(e) => setBedQuantity(firstBed, e.target.value)} />
                <button onClick={() => removeFirstBed(firstBed)}>Remove from Cart</button>
                {firstBed?.category === "BEDS" && (
                    <select onChange={onChangeBedSize} value={bedSize}>
                    {bedSizes.map((number, idx) => (
                        <option key={idx} value={number}>{number}</option>
                    ))}
                    </select>
                )}
            </div>
        }   

        {JSON.stringify(firstNightstand) === '{}' ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={firstNightstand?.image} alt="item-image"/>
                <p>{firstNightstand?.name}</p>
                <input type="number" min="1" value={firstNightstand?.quantity} onChange={(e) => setNightstandQuantity(firstNightstand, e.target.value)} />
                <button onClick={() => removeFirstNightstand(firstNightstand)}>Remove from Cart</button>
                <p>{firstNightstand?.quantity}</p>
            </div>
        }  
            

        <button onClick={clearLocalCart}>Clear Cart</button>
        <button onClick={clearLocalBed}>Clear Bed</button>
        {/* <p>Aver: {firstBed?.firstBedSize}</p> */}
        </div>
    )
}

export default TourCart
