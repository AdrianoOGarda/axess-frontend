import React, { useContext, useState, useEffect } from 'react'
import {CartContext} from "../CartContext";
import {FirstBedContext} from "../productsContext/FirstBedContext"
import {SecondBedContext} from "../productsContext/SecondBedContext"
import {ThirdBedContext} from "../productsContext/ThirdBedContext"
import {FirstNightstandContext} from "../productsContext/FirstNightstandContext"
import {SecondNightstandContext} from "../productsContext/SecondNightstandContext"
import {ThirdNightstandContext} from "../productsContext/ThirdNightstandContext"
import {EquipContext} from "../productsContext/EquipContext"
import {DecoContext} from "../productsContext/DecContext"
import {HotContext} from "../productsContext/HotContext"
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
    
    const [equip, setEquip] = useContext(EquipContext)
    const [deco, setDeco] = useContext(DecoContext)
    const [hot, setHot] = useContext(HotContext)

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

        if(value == 0) {
        setCart(newCart.filter((item) => item.name !== product.name))
        } else {
            newCart.find(
                (item) => item.name === product.name
            ).quantity = value;
            setCart(newCart);
        }
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
        if(value == 0) {
            localStorage.removeItem('firstBed');
            setFirstBed({});
        } else {
                newFirstBed.quantity = value;
                setFirstBed(newFirstBed);
        }
    };
    function setBedQuantityTwo(product, value) {
        const newSecondBed = {...secondBed};
        if(value == 0) {
            localStorage.removeItem('secondBed');
            setSecondBed({});
        } else {
            newSecondBed.quantity = value;
            setSecondBed(newSecondBed);
        }
    }
    function setBedQuantityThree(product, value) {
        const newThirdBed = {...thirdBed};
        if(value == 0) {
            localStorage.removeItem('thirdBed');
            setThirdBed({});
        } else {
            newThirdBed.quantity = value;
            setThirdBed(newThirdBed);
        }
    }

    function setNightstandQuantity(product, value) {
        const newFirstNightstand = {...firstNightstand};
        if(value == 0) {
            localStorage.removeItem('firstNightstand');
            setFirstNightstand({});
        } else {
            newFirstNightstand.quantity = value;
            setFirstNightstand(newFirstNightstand);
        } 
    }
    function setNightstandQuantityTwo(product, value) {
        const newSecondNightstand = {...secondNightstand};
        if(value == 0) {
            localStorage.removeItem('secondNightstand');
            setSecondNightstand({});
        } else {
            newSecondNightstand.quantity = value;
            setSecondNightstand(newSecondNightstand);
        }         
    }
    function setNightstandQuantityThree(product, value) {
        const newThirdNightstand = {...thirdNightstand};
        if(value == 0) {
            localStorage.removeItem('thirdNightstand');
            setThirdNightstand({});
        } else {
            newThirdNightstand.quantity = value;
            setThirdNightstand(newThirdNightstand);
        }       
    }

    function onChange(value) {
        console.log(`selected antdf ${value}`);
        setDepto(value);

        const newCart = [...cart];
        const highInCart = newCart.find((item) => item.category === "HIGH CHAIRS (KITCHEN)");
        const chairInCart = newCart.find((item) => item.category === "DINING CHAIRS");
        if(highInCart) {
            newCart.find((item) => item.category === "HIGH CHAIRS (KITCHEN)").quantity = 3;
        }
        if(chairInCart) {
            newCart.find((item) => item.category === "DINING CHAIRS").quantity = 6;
        }
        setCart(newCart);
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

    console.log('aiydiyabsidbaihsbxs', cart.find((item) => item.category === "SUNBEDS"))

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    useEffect(() => {
        console.log(firstBed);
    }, [firstBed]);
    useEffect(() => {
        console.log(secondBed);
    }, [secondBed]);
    useEffect(() => {
        console.log(thirdBed);
    }, [thirdBed]);
    useEffect(() => {
        console.log(firstNightstand);
    }, [firstNightstand]);
    useEffect(() => {
        console.log(secondNightstand);
    }, [secondNightstand]);
    useEffect(() => {
        console.log(thirdNightstand);
    }, [thirdNightstand]);
    

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

            const newCart = [...cart];
            const sunInCart = newCart.find((item) => item.category === "SUNBEDS");
            const outdoorSofaInCart = newCart.find((item) => item.category === "SUNBEDS");
            if(sunInCart) {
                newCart.find((item) => item.category === "SUNBEDS").quantity = 2;
            }
            if(outdoorSofaInCart) {
                newCart.find((item) => item.category === "OUTDOOR SOFAS").quantity = 2;
            }
            setCart(newCart);

        } else if(depto === '2A'){
            setBedSize('King')
            setBedSizeTwo('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setFirstNightstand({...firstNightstand, quantity: 2})
            setSecondNightstand({...secondNightstand, quantity: 2});

            const newCart = [...cart];
            const sunInCart = newCart.find((item) => item.category === "SUNBEDS");
            const outdoorSofaInCart = newCart.find((item) => item.category === "SUNBEDS");
            if(sunInCart) {
                newCart.find((item) => item.category === "SUNBEDS").quantity = 2;
            }
            if(outdoorSofaInCart) {
                newCart.find((item) => item.category === "OUTDOOR SOFAS").quantity = 2;
            }
            setCart(newCart);
        } else if(depto === '2B'){
            setBedSize('King')
            setBedSizeTwo('King')
            setFirstBed({...firstBed, quantity: 1, firstBedSize: bedSize});
            setSecondBed({...secondBed, quantity: 1, secondBedSize: bedSizeTwo});
            setFirstNightstand({...firstNightstand, quantity: 2})
            setSecondNightstand({...secondNightstand, quantity: 2})

            const newCart = [...cart];
            const sunInCart = newCart.find((item) => item.category === "SUNBEDS");
            const loungeInCart = newCart.find((item) => item.category === "LOUNGE CHAIRS");
            if(sunInCart) {
                newCart.find((item) => item.category === "SUNBEDS").quantity = 2;
            }
            if(loungeInCart) {
                newCart.find((item) => item.category === "LOUNGE CHAIRS").quantity = 2;
            }
            setCart(newCart);
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

            const newCart = [...cart];
            const sunInCart = newCart.find((item) => item.category === "SUNBEDS");
            const loungeInCart = newCart.find((item) => item.category === "LOUNGE CHAIRS");
            if(sunInCart) {
                newCart.find((item) => item.category === "SUNBEDS").quantity = 2;
            }
            if(loungeInCart) {
                newCart.find((item) => item.category === "LOUNGE CHAIRS").quantity = 2;
            }
            setCart(newCart);
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

            const newCart = [...cart];
            const sunInCart = newCart.find((item) => item.category === "SUNBEDS");
            const loungeInCart = newCart.find((item) => item.category === "LOUNGE CHAIRS");
            if(sunInCart) {
                newCart.find((item) => item.category === "SUNBEDS").quantity = 2;
            }
            if(loungeInCart) {
                newCart.find((item) => item.category === "LOUNGE CHAIRS").quantity = 2;
            }
            setCart(newCart);
        }
    }, [depto]);

    // console.log('putaaaa', firstBed)
    // console.log(`aaaaaarghhhh: ${JSON.stringify(cart)}`)
    // console.log('jjjjjjj', bedSize)
    // console.log('jjjjjjj', equip)
    console.log('jjjjjjj', secondBed)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

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

            {firstBed?.category === undefined || firstBed === null? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={firstBed?.image} alt="item-image"/>
                <p>{firstBed?.name}</p>
                <input type="number" min="0" value={firstBed?.quantity} onChange={(e) => setBedQuantity(firstBed, e.target.value)} />
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

        {secondBed?.category === undefined || secondBed === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={secondBed?.image} alt="item-image"/>
                <p>{secondBed?.name}</p>
                <input type="number" min="0" value={secondBed?.quantity} onChange={(e) => setBedQuantityTwo(secondBed, e.target.value)} />
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

        {thirdBed?.category === undefined || thirdBed === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={thirdBed?.image} alt="item-image"/>
                <p>{thirdBed?.name}</p>
                <input type="number" min="0" value={thirdBed?.quantity} onChange={(e) => setBedQuantityThree(thirdBed, e.target.value)} />
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

        {firstNightstand?.category === undefined || firstNightstand === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={firstNightstand?.image} alt="item-image"/>
                <p>{firstNightstand?.name}</p>
                <input type="number" min="0" value={firstNightstand?.quantity} onChange={(e) => setNightstandQuantity(firstNightstand, e.target.value)} />
                <button onClick={() => removeFirstNightstand(firstNightstand)}>Remove from Cart</button>
                <p>{firstNightstand?.quantity}</p>
            </div>
        }  

    {secondNightstand?.category === undefined || secondNightstand === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={secondNightstand?.image} alt="item-image"/>
                <p>{secondNightstand?.name}</p>
                <input type="number" min="0" value={secondNightstand?.quantity} onChange={(e) => setNightstandQuantityTwo(secondNightstand, e.target.value)} />
                <button onClick={() => removeFirstNightstand(secondNightstand)}>Remove from Cart</button>
                <p>{secondNightstand?.quantity}</p>
            </div>
    } 

    {thirdNightstand?.category === undefined || thirdNightstand === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={thirdNightstand?.image} alt="item-image"/>
                <p>{thirdNightstand?.name}</p>
                <input type="number" min="0" value={thirdNightstand?.quantity} onChange={(e) => setNightstandQuantityThree(thirdNightstand, e.target.value)} />
                <button onClick={() => removeFirstNightstand(thirdNightstand)}>Remove from Cart</button>
                <p>{thirdNightstand?.quantity}</p>
            </div>
    }

    {cart?.filter(product => product.category  !== undefined).map( (cartItem, idx) => (
                <div key={idx} className='tour-cart-product-div'>
                    <img src={cartItem.image} alt="item-image"/>
                    <p>{cartItem.name}</p>
                    <input type="number" min="0" value={cartItem.quantity} onChange={(e) => setQuantity(cartItem, e.target.value)} />
                    <button onClick={() => removeFromCart(cartItem)}>Remove from Cart</button>
                    {cartItem.category === "BEDS" && (
                        <p>Esta es una cama</p>
                    )}
                </div>
            ))}  
            

        <button onClick={clearLocalCart}>Clear Cart</button>
        <button onClick={clearLocalBed}>Clear Bed</button>
        
        {hot === true ? (
            <p>True</p>
        ) : (
            <p>False</p>
        )}
        {/* <p>Aver: {firstBed?.firstBedSize}</p> */}
        </div>
    )
}

export default TourCart
