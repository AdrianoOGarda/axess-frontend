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
import {DeptoContext} from "../deptoContext"
import {useHistory} from 'react-router-dom'
import useWindowSize from "../hooks/useWindowSize"
import "../css/tourCart.css"
import "../css/typography.css"
import "../css/oneBedroom.css"
import { Select } from 'antd';

const { Option } = Select;


const TourCart = () => {
    let history = useHistory();
    const windowSize = useWindowSize();

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
    const [deptoCon, setDeptoCon] = useContext(DeptoContext)

    const [depto, setDepto] = useState(null);
    const [bedSize, setBedSize] = useState('King');
    const [bedSizeTwo, setBedSizeTwo] = useState('King');
    const [bedSizeThree, setBedSizeThree] = useState('King');

    const deptoNumbers = ['1', '1A', '2', '2A', '2B', '3', '3A', '3B', '4A/5A', '5', '6', '7', '8']
    const bedSizes = ['King', 'Queen', 'Matrimonial', 'Individual']

    const goBack = async () => {
        await localStorage.clear();
        history.push('/tour-select')
    }
    const goForward = () => {
        history.push('/tour-checkout')
    }

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
        setDeptoCon(value);

        const newCart = [...cart];
        const highInCart = newCart.find((item) => item.category === "HIGH CHAIRS (KITCHEN)");
        const chairInCart = newCart.find((item) => item.category === "DINING CHAIRS");
        const exteriorChairInCart = newCart.find((item) => item.category === "OUTDOOR CHAIRS");
        if(highInCart) {
            newCart.find((item) => item.category === "HIGH CHAIRS (KITCHEN)").quantity = 3;
        }
        if(chairInCart) {
            newCart.find((item) => item.category === "DINING CHAIRS").quantity = 6;
        }
        if(exteriorChairInCart) {
            newCart.find((item) => item.category === "OUTDOOR CHAIRS").quantity = 4;
        }
        setCart(newCart);
    }

    console.log('ECHALE ES LO ULTIMO', deptoCon)

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
        localStorage.setItem("depto", deptoCon);
    }, [deptoCon]);


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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (windowSize > 480) ?  (
        <div className='tour-main-cart-div'>

        <div className='tour-cart-title-div'>
            <div className='tour-cart-title-inside-div'>
                <div className='tour-cart-title-divider'></div>
                <h1>Checkout</h1>
                <div className='tour-cart-title-divider'></div>
            </div> 
        </div>

        <div className='depto-select-div'>
            <p>¿Qué tipo de departamento tienes?</p>
            <Select
                className='depto-select-select'
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
                <p>*Las cantidades son determinadas dependiendo del tipo de departamento, pero si deseas puedes modificarlas.</p>
        </div>

            {firstBed?.category === undefined || firstBed === null? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={firstBed?.image} alt="item-image"/>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '23vw'}}>
                    <p>{firstBed?.name}</p>
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '15vw'}}>
                    <input type="number" min="0" value={firstBed?.quantity} onChange={(e) => setBedQuantity(firstBed, e.target.value)} />
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '25vw'}}>
                    {firstBed?.category === "BEDS" && (
                        <select onChange={onChangeBedSize} value={bedSize} className='tour-cart-bed-select new-tour-cart-bed-select'>
                        {bedSizes.map((number, idx) => (
                            <option key={idx} value={number}>{number}</option>
                    ))}
                        </select>
                    )}
                </div>
                
            </div>
        }

        {secondBed?.category === undefined || secondBed === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={secondBed?.image} alt="item-image"/>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '23vw'}}>
                    <p>{secondBed?.name}</p>
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '15vw'}}>
                    <input type="number" min="0" value={secondBed?.quantity} onChange={(e) => setBedQuantityTwo(secondBed, e.target.value)} className='tour-cart-number-input'/>
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '25vw'}}>
                {secondBed?.category === "BEDS" && (
                    <select onChange={onChangeBedSizeTwo} value={bedSizeTwo} className='tour-cart-bed-select new-tour-cart-bed-select'>
                    {bedSizes.map((number, idx) => (
                        <option key={idx} value={number}>{number}</option>
                    ))}
                    </select>
                )}
                </div>
                
            </div>
        }   

        {thirdBed?.category === undefined || thirdBed === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={thirdBed?.image} alt="item-image"/>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '23vw'}}>
                    <p>{thirdBed?.name}</p>
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '15vw'}}>
                    <input type="number" min="0" value={thirdBed?.quantity} onChange={(e) => setBedQuantityThree(thirdBed, e.target.value)} />
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '25vw'}}>
                {thirdBed?.category === "BEDS" && (
                    <select onChange={onChangeBedSizeThree} value={bedSizeThree} className='tour-cart-bed-select'>
                    {bedSizes.map((number, idx) => (
                        <option key={idx} value={number}>{number}</option>
                    ))}
                    </select>
                )}
                </div>
            </div>
        } 

        {firstNightstand?.category === undefined || firstNightstand === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={firstNightstand?.image} alt="item-image"/>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '23vw'}}>
                    <p>{firstNightstand?.name}</p>
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '15vw'}}>
                    <input type="number" min="0" value={firstNightstand?.quantity} onChange={(e) => setNightstandQuantity(firstNightstand, e.target.value)} />
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '25vw'}}></div>
            </div>
        }  

    {secondNightstand?.category === undefined || secondNightstand === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={secondNightstand?.image} alt="item-image"/>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '23vw'}}>
                    <p>{secondNightstand?.name}</p>
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '15vw'}}>
                    <input type="number" min="0" value={secondNightstand?.quantity} onChange={(e) => setNightstandQuantityTwo(secondNightstand, e.target.value)} />
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '25vw'}}></div>
            </div>
    } 

    {thirdNightstand?.category === undefined || thirdNightstand === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <img src={thirdNightstand?.image} alt="item-image"/>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '23vw'}}>
                    <p>{thirdNightstand?.name}</p>
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '15vw'}}>
                    <input type="number" min="0" value={thirdNightstand?.quantity} onChange={(e) => setNightstandQuantityThree(thirdNightstand, e.target.value)} />
                </div>
                <div style={{display: 'flex', 
                alignItems: 'center', justifyContent: 'start', width: '25vw'}}></div>
            </div>
    }

    {cart?.filter(product => product.category  !== undefined).map( (cartItem, idx) => (
                <div key={idx} className='tour-cart-product-div'>
                    <img src={cartItem.image} alt="item-image"/>
                    <div style={{display: 'flex', 
                    alignItems: 'center', justifyContent: 'start', width: '23vw'}}>
                        <p>{cartItem.name}</p>
                    </div>
                    <div style={{display: 'flex', 
                    alignItems: 'center', justifyContent: 'start', width: '15vw'}}>
                        <input type="number" min="0" value={cartItem.quantity} onChange={(e) => setQuantity(cartItem, e.target.value)} />
                    </div>
                    <div style={{display: 'flex', 
                    alignItems: 'center', justifyContent: 'start', width: '25vw'}}></div>
                </div>
            ))}  

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className='one-bedroom-buttons-div'>
                    <button className='one-bedroom-cancel-button' onClick={goBack}>Atrás</button>
                    <button className='one-bedroom-continue-button' onClick={goForward}>Continuar</button> 
                </div>
            </div>

        </div>
    ) : (
        <div className='tour-main-cart-div'>

        <div className='tour-cart-title-div'>
            <div className='tour-cart-title-inside-div'>
                <div className='tour-cart-title-divider'></div>
                <h1>Checkout</h1>
                <div className='tour-cart-title-divider'></div>
            </div> 
        </div>

        <div className='depto-select-div'>
            <p>¿Qué tipo de departamento tienes?</p>
            <Select
                className='depto-select-select'
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
                <p>*Las cantidades son determinadas dependiendo del tipo de departamento, pero si deseas puedes modificarlas.</p>
        </div>

            {firstBed?.category === undefined || firstBed === null? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <div className='tour-cart-product-mobile-name-div'>
                    <img src={firstBed?.image} alt="item-image"/>
                    <div className='tour-cart-mobile-size-div'>
                        <p>{firstBed?.name}</p>
                        {firstBed?.category === "BEDS" && (
                        <select onChange={onChangeBedSize} value={bedSize} className='tour-cart-bed-select'>
                            {bedSizes.map((number, idx) => (
                            <option key={idx} value={number}>{number}</option>
                        ))}
                        </select>
                        )}
                    </div>
                </div>
                <input type="number" min="0" value={firstBed?.quantity} onChange={(e) => setBedQuantity(firstBed, e.target.value)} />
            </div>
        }

        {secondBed?.category === undefined || secondBed === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <div className='tour-cart-product-mobile-name-div'> 
                    <img src={secondBed?.image} alt="item-image"/>
                    <div className='tour-cart-mobile-size-div'> 
                        <p>{secondBed?.name}</p>
                        {secondBed?.category === "BEDS" && (
                        <select onChange={onChangeBedSizeTwo} value={bedSizeTwo} className='tour-cart-bed-select'>
                            {bedSizes.map((number, idx) => (
                                <option key={idx} value={number}>{number}</option>
                            ))}
                        </select>
                        )}
                    </div>
                </div>
                <input type="number" min="0" value={secondBed?.quantity} onChange={(e) => setBedQuantityTwo(secondBed, e.target.value)} className='tour-cart-number-input'/>
            </div>
        }   

        {thirdBed?.category === undefined || thirdBed === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <div className='tour-cart-product-mobile-name-div'> 
                    <img src={thirdBed?.image} alt="item-image"/>
                    <div className='tour-cart-mobile-size-div'> 
                        <p>{thirdBed?.name}</p>
                        {thirdBed?.category === "BEDS" && (
                        <select onChange={onChangeBedSizeThree} value={bedSizeThree} className='tour-cart-bed-select'>
                            {bedSizes.map((number, idx) => (
                            <option key={idx} value={number}>{number}</option>
                            ))}
                        </select>
                        )}
                    </div>
                </div>
                <input type="number" min="0" value={thirdBed?.quantity} onChange={(e) => setBedQuantityThree(thirdBed, e.target.value)} />
            </div>
        } 

        {firstNightstand?.category === undefined || firstNightstand === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <div className='tour-cart-product-mobile-name-div'> 
                    <img src={firstNightstand?.image} alt="item-image"/>
                    <p>{firstNightstand?.name}</p>
                </div>
                <input type="number" min="0" value={firstNightstand?.quantity} onChange={(e) => setNightstandQuantity(firstNightstand, e.target.value)} />
            </div>
        }  

    {secondNightstand?.category === undefined || secondNightstand === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <div className='tour-cart-product-mobile-name-div'>
                    <img src={secondNightstand?.image} alt="item-image"/>
                    <p>{secondNightstand?.name}</p>
                </div>
                <input type="number" min="0" value={secondNightstand?.quantity} onChange={(e) => setNightstandQuantityTwo(secondNightstand, e.target.value)} />
            </div>
    } 

    {thirdNightstand?.category === undefined || thirdNightstand === null ? 
            <div>

            </div>
            :
            <div className='tour-cart-product-div'>
                <div className='tour-cart-product-mobile-name-div'>
                    <img src={thirdNightstand?.image} alt="item-image"/>
                    <p>{thirdNightstand?.name}</p>
                </div>
                <input type="number" min="0" value={thirdNightstand?.quantity} onChange={(e) => setNightstandQuantityThree(thirdNightstand, e.target.value)} />
            </div>
    }

    {cart?.filter(product => product.category  !== undefined).map( (cartItem, idx) => (
                <div key={idx} className='tour-cart-product-div'>
                    <div className='tour-cart-product-mobile-name-div'> 
                        <img src={cartItem.image} alt="item-image"/>
                        <p>{cartItem.name}</p>
                    </div>
                    <input type="number" min="0" value={cartItem.quantity} onChange={(e) => setQuantity(cartItem, e.target.value)} />
                </div>
            ))}  
            

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className='one-bedroom-buttons-div'>
                    <button className='one-bedroom-cancel-button' onClick={goBack}>Atrás</button>
                    <button className='one-bedroom-continue-button' onClick={goForward}>Continuar</button> 
                </div>
            </div>

        </div>
    )
}

export default TourCart
