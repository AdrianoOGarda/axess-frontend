import React, { useContext, useState, useEffect } from 'react'
import {CartContext} from "../CartContext";
import {FirstBedContext} from "../productsContext/FirstBedContext"
import {SecondBedContext} from "../productsContext/SecondBedContext"
import {ThirdBedContext} from "../productsContext/ThirdBedContext"
import {FirstNightstandContext} from "../productsContext/FirstNightstandContext"
import {SecondNightstandContext} from "../productsContext/SecondNightstandContext"
import {ThirdNightstandContext} from "../productsContext/ThirdNightstandContext"
import "../css/tourCart.css"
import "../css/typography.css"
import { Select } from 'antd';

const { Option } = Select;


const TourCart = () => {
    const [cart, setCart] = useContext(CartContext);

    const [firstBed, setFirstBed] = useContext(FirstBedContext);
    const [secondBed, setSecondBed] = useContext(SecondBedContext);
    const [thirdBed, setThirdBed] = useContext(ThirdBedContext);

    const [firstNightstand, setFirstNightstand] = useContext(FirstNightstandContext);
    const [secondNightstand, setSecondNightstand] = useContext(SecondNightstandContext);
    const [thirdNightstand, setThirdNightstand] = useContext(ThirdNightstandContext);

    const [depto, setDepto] = useState(null);
    const [bedSize, setBedSize] = useState('King');
    const [bedSizeTwo, setBedSizeTwo] = useState('King');
    const [bedSizeThree, setBedSizeThree] = useState('King');

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
    
    function setQuantity(product, value) {
        const newCart = [...cart];
        console.log(`valueeee: ${value}`)
        newCart.find(
            (item) => item.name === product.name
        ).quantity = value;
        setCart(newCart);
    }

    const removeFirstBed = (productToRemove) => {
        localStorage.removeItem('firstBed')
        localStorage.removeItem('secondBed')
        localStorage.removeItem('thirdBed')
    };
    const removeFirstNightstand = (productToRemove) => {
        localStorage.removeItem('firstNightstand')
        localStorage.removeItem('secondNightstand')
        localStorage.removeItem('thirdNightstand')
    };

    function setBedQuantity(product, value) {
        const newFirstBed = {...firstBed};
        newFirstBed.quantity = value;
        setFirstBed(newFirstBed);
    };
    function setBedQuantityTwo(product, value) {
        const newSecondBed = {...secondBed};
        newSecondBed.quantity = value;
        setSecondBed(newSecondBed);
    }
    function setBedQuantityThree(product, value) {
        const newThirdBed = {...thirdBed};
        newThirdBed.quantity = value;
        setThirdBed(newThirdBed);
    }

    function setNightstandQuantity(product, value) {
        const newFirstNightstand = {...firstNightstand};
        newFirstNightstand.quantity = value;
        setFirstNightstand(newFirstNightstand);
    }
    function setNightstandQuantityTwo(product, value) {
        const newSecondNightstand = {...secondNightstand};
        newSecondNightstand.quantity = value;
        setSecondNightstand(newSecondNightstand);
    }
    function setNightstandQuantityThree(product, value) {
        const newThirdNightstand = {...thirdNightstand};
        newThirdNightstand.quantity = value;
        setThirdNightstand(newThirdNightstand);
    }

    function onChange(value) {
        console.log(`selected ${value}`);
        setDepto(value)
    }

    function onChangeBedSize(e) {
        console.log(`selectedBSIZE ${e.target.value}`);
        setBedSize(e.target.value)
        setFirstBed({...firstBed, firstBedSize: e.target.value})
    }
    function onChangeBedSizeTwo(e) {
        console.log(`selectedBSIZE ${e.target.value}`);
        setBedSizeTwo(e.target.value)
        setSecondBed({...secondBed, secondBedSize: e.target.value})
    }
    function onChangeBedSizeThree(e) {
        console.log(`selectedBSIZE ${e.target.value}`);
        setBedSizeThree(e.target.value)
        setThirdBed({...thirdBed, thirdBedSize: e.target.value})
    }

    function onSearch(val) {
        console.log('search:', val);
    }


    useEffect(() => {
        if(depto === '1'){
            setBedSize('King')
            setBedSizeTwo('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setFirstNightstand({...firstNightstand, quantity: 2})
            setSecondNightstand({...secondNightstand, quantity: 2})
        } else if(depto === '1A'){
            setBedSize('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '2'){
            setBedSize('King')
            setBedSizeTwo('King')
            setBedSizeThree('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setThirdBed({...thirdBed, quantity: 1, thirdBedSize: bedSizeThree});
            setFirstNightstand({...firstNightstand, quantity: 2})
            setSecondNightstand({...secondNightstand, quantity: 2})
            setThirdNightstand({...thirdNightstand, quantity: 2})
        } else if(depto === '2A'){
            setBedSize('King')
            setBedSizeTwo('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setFirstNightstand({...firstNightstand, quantity: 2})
            setSecondNightstand({...secondNightstand, quantity: 2})
        } else if(depto === '2B'){
            setBedSize('King')
            setBedSizeTwo('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setFirstNightstand({...firstNightstand, quantity: 2})
            setSecondNightstand({...secondNightstand, quantity: 2})
        } else if(depto === '3'){
            setBedSize('Matrimonial')
            setBedSizeTwo('King')
            setBedSizeThree('King')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setThirdBed({...thirdBed, quantity: 1, thirdBedSize: bedSizeThree});
            setFirstNightstand({...firstNightstand, quantity: 1})
            setSecondNightstand({...secondNightstand, quantity: 2})
            setThirdNightstand({...thirdNightstand, quantity: 2})
        } else if(depto === '3A'){
            setBedSize('Matrimonial')
            setBedSizeTwo('King')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setFirstNightstand({...firstNightstand, quantity: 1})
            setSecondNightstand({...secondNightstand, quantity: 2})
        } else if(depto === '3B'){
            setBedSize('Matrimonial')
            setBedSizeTwo('King')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setFirstNightstand({...firstNightstand, quantity: 1})
            setSecondNightstand({...secondNightstand, quantity: 2})
        } else if(depto === '4A/5A'){
            setBedSize('Queen')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setFirstNightstand({...firstNightstand, quantity: 2})
        } else if(depto === '5'){
            setBedSize('Queen')
            setBedSizeTwo('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setFirstNightstand({...firstNightstand, quantity: 2})
            setSecondNightstand({...secondNightstand, quantity: 2})
        } else if(depto === '6'){
            setBedSize('Matrimonial')
            setBedSizeTwo('Queen')
            setBedSizeThree('King')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setThirdBed({...thirdBed, quantity: 1, thirdBedSize: bedSizeThree});
            setFirstNightstand({...firstNightstand, quantity: 1})
            setSecondNightstand({...secondNightstand, quantity: 2})
            setThirdNightstand({...thirdNightstand, quantity: 2})
        } else if(depto === '7'){
            setBedSize('King')
            setBedSizeTwo('King')
            setBedSizeThree('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setThirdBed({...thirdBed, quantity: 1, thirdBedSize: bedSizeThree});
            setFirstNightstand({...firstNightstand, quantity: 2})
            setSecondNightstand({...secondNightstand, quantity: 2})
            setThirdNightstand({...thirdNightstand, quantity: 2})
        } else if(depto === '8'){
            setBedSize('Matrimonial')
            setBedSizeTwo('King')
            setBedSizeThree('King')
            setFirstBed({...firstBed, quantity: 2, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setThirdBed({...thirdBed, quantity: 1, thirdBedSize: bedSizeThree});
            setFirstNightstand({...firstNightstand, quantity: 1})
            setSecondNightstand({...secondNightstand, quantity: 2})
            setThirdNightstand({...thirdNightstand, quantity: 2})
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

        {JSON.stringify(secondBed) === '{}' ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={secondBed?.image} alt="item-image"/>
                <p>{secondBed?.name}</p>
                <input type="number" min="1" value={secondBed?.quantity} onChange={(e) => setBedQuantityTwo(secondBed, e.target.value)} />
                <button onClick={() => removeFirstBed(secondBed)}>Remove from Cart</button>
                {secondBed?.category === "BEDS" && (
                    <select onChange={onChangeBedSizeTwo} value={bedSizeTwo}>
                    {bedSizes.map((number, idx) => (
                        <option key={idx} value={number}>{number}</option>
                    ))}
                    </select>
                )}
            </div>
        }   

        {JSON.stringify(thirdBed) === '{}' ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={thirdBed?.image} alt="item-image"/>
                <p>{thirdBed?.name}</p>
                <input type="number" min="1" value={thirdBed?.quantity} onChange={(e) => setBedQuantityThree(thirdBed, e.target.value)} />
                <button onClick={() => removeFirstBed(thirdBed)}>Remove from Cart</button>
                {thirdBed?.category === "BEDS" && (
                    <select onChange={onChangeBedSizeThree} value={bedSizeThree}>
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

    {JSON.stringify(secondNightstand) === '{}' ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={secondNightstand?.image} alt="item-image"/>
                <p>{secondNightstand?.name}</p>
                <input type="number" min="1" value={secondNightstand?.quantity} onChange={(e) => setNightstandQuantityTwo(secondNightstand, e.target.value)} />
                <button onClick={() => removeFirstNightstand(secondNightstand)}>Remove from Cart</button>
                <p>{secondNightstand?.quantity}</p>
            </div>
    } 

    {JSON.stringify(thirdNightstand) === '{}' ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={thirdNightstand?.image} alt="item-image"/>
                <p>{thirdNightstand?.name}</p>
                <input type="number" min="1" value={thirdNightstand?.quantity} onChange={(e) => setNightstandQuantityThree(thirdNightstand, e.target.value)} />
                <button onClick={() => removeFirstNightstand(thirdNightstand)}>Remove from Cart</button>
                <p>{thirdNightstand?.quantity}</p>
            </div>
    }

    {cart?.map( (cartItem, idx) => (
                <div key={idx} className='tour-cart-product-div'>
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
        <button onClick={clearLocalBed}>Clear Bed</button>
        {/* <p>Aver: {firstBed?.firstBedSize}</p> */}
        </div>
    )
}

export default TourCart
