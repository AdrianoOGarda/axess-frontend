import React, { useContext, useState, useEffect } from 'react'
import {CartContext} from "../CartContext";
import {EquipContext} from "../productsContext/EquipContext"
import {DecoContext} from "../productsContext/DecContext"
import {HotContext} from "../productsContext/HotContext"
import { FirstBedContext } from "../productsContext/FirstBedContext"
import {SecondBedContext} from "../productsContext/SecondBedContext"
import {ThirdBedContext} from "../productsContext/ThirdBedContext"
import {FirstNightstandContext} from "../productsContext/FirstNightstandContext"
import {SecondNightstandContext} from "../productsContext/SecondNightstandContext"
import {ThirdNightstandContext} from "../productsContext/ThirdNightstandContext"
import { Checkbox, Modal } from 'antd';
import Info from "../icons/info.svg"
import {useHistory} from 'react-router-dom'
import "../css/typography.css"
import "../css/cartList.css"
import "../css/oneBedroom.css"



const CartList = () => {
    const [firstBed, setFirstBed] = useContext(FirstBedContext);
    const [secondBed, setSecondBed] = useContext(SecondBedContext);
    const [thirdBed, setThirdBed] = useContext(ThirdBedContext);

    const [firstNightstand, setFirstNightstand] = useContext(FirstNightstandContext);
    const [secondNightstand, setSecondNightstand] = useContext(SecondNightstandContext);
    const [thirdNightstand, setThirdNightstand] = useContext(ThirdNightstandContext);

    const [cart, setCart] = useContext(CartContext);
    const [equip, setEquip] = useContext(EquipContext);
    const [deco, setDeco] = useContext(DecoContext);
    const [hot, setHot] = useContext(HotContext);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEquipVisible, setIsEquipVisible] = useState(false);
    const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);
    const [isThirdModalVisible, setIsThirdModalVisible] = useState(false);


    let history = useHistory()

    const showModal = () => {
        setIsModalVisible(true);
    };
    const showEquipModal = () => {
        setIsEquipVisible(true);
    };
    const showSecondModal = () => {
        setIsSecondModalVisible(true);
    };
    const showThirdModal = () => {
        setIsThirdModalVisible(true);
    };
    const handleCancel = () => {
        setIsEquipVisible(false);
        setIsSecondModalVisible(false);
        setIsThirdModalVisible(false);
    };

    function onChangeEq(e) {
        setEquip(e.target.checked);
        console.log(`checked = ${e.target.checked}`);
        console.log(`aaaasco = ${equip}`);
    }
    function onChangeDec(e) {
        setDeco(e.target.checked);
    }
    function onChangeHot(e) {
        setHot(e.target.checked);
    }

    const goBack = async () => {
        await localStorage.clear();
        history.push('/tour-select')
    }
    const addF = () => {
        history.push('/tour-cart')
    }

    useEffect(() => {
        localStorage.setItem("equipamiento", equip);
        console.log('jjjjjjj', equip)
    }, [equip]);
    useEffect(() => {
        localStorage.setItem("decorativo", deco);
    }, [deco]);
    useEffect(() => {
        localStorage.setItem("hoteleria", hot);
    }, [hot]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    


    return (
        <div className='cart-list-main-div'>

            <div className='list-cart-title-div'>
                <div className='list-cart-title-inside-div'>
                    <div className='list-cart-title-divider'></div>
                    <h1>Resumen del carrito</h1>
                    <div className='list-cart-title-divider'></div>
                </div> 
            </div>    

        <div className='cart-list-div'>    

        
            {firstBed?.category === undefined || firstBed === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={firstBed.image} alt="item-image"/>
                <p>{firstBed.name}</p>
            </div>
        }

        {secondBed?.category === undefined || secondBed === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={secondBed.image} alt="item-image"/>
                <p>{secondBed.name}</p>
            </div>
        }

        {thirdBed?.category === undefined || thirdBed === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={thirdBed.image} alt="item-image"/>
                <p>{thirdBed.name}</p>
            </div>
        }

        {firstNightstand?.category === undefined || firstNightstand === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={firstNightstand.image} alt="item-image"/>
                <p>{firstNightstand.name}</p>
            </div>
        }

        {secondNightstand?.category === undefined || secondNightstand === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={secondNightstand.image} alt="item-image"/>
                <p>{secondNightstand.name}</p>
            </div>
        }

        {thirdNightstand?.category === undefined || thirdNightstand === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={thirdNightstand.image} alt="item-image"/>
                <p>{thirdNightstand.name}</p>
            </div>
        }
        </div>

            <div className='cart-list-div'>
            {cart.filter(product => product.category  !== undefined).map( (cartItem, idx) => (
                <div key={idx} className='cart-list-product-div'>
                    <img src={cartItem.image} alt="item-image"/>
                    <p>{cartItem.name}</p>
                </div>
            ))}
            </div>


            <div className='cart-list-packages-select'>
                <p>Accesorios</p>
                <div className="packages-select-inside-div">
                    <p>¿Quieres agregar un paquete de equipamiento?</p>
                    <img onClick={showEquipModal} src={Info} alt="info-icon"/>
                    <Checkbox onChange={onChangeEq} className='package-checkbox'></Checkbox>
                </div>
                <div className="packages-select-inside-div">
                    <p>¿Quieres agregar un paquete decorativo?</p>
                    <img onClick={showSecondModal} src={Info} alt="info-icon"/>
                    <Checkbox onChange={onChangeDec} className='package-checkbox'></Checkbox>
                </div>
                <div className="packages-select-inside-div">
                    <p>¿Quieres agregar un paquete de hotelería?</p>
                    <img onClick={showThirdModal} src={Info} alt="info-icon"/>
                    <Checkbox onChange={onChangeHot} className='package-checkbox'></Checkbox>
                </div>
            </div> 
        
        <Modal visible={isEquipVisible} onCancel={handleCancel}>
            <div className='equipamiento-modal'>
                <h2>Incluye:</h2>
                <p>Centro de lavado</p>
                <p>Refrigerador</p>
                <p>Colchón</p>
                <p>Televisión</p>
                <p>(El detalle se le enviará en la cotización)</p>
            </div>
        </Modal>
        <Modal visible={isSecondModalVisible} onCancel={handleCancel}>
            <div className='equipamiento-modal'>
                <h2>Incluye:</h2>
                <p>Tapetes</p>
                <p>Lámparas de mesa, de techo y de piso</p>
                <p>Papel tapiz</p>
                <p>Cojines decorativos</p>
                <p>Cuadros decorativos</p>
                <p>(El detalle se le enviará en la cotización)</p>
            </div>
        </Modal>
        <Modal visible={isThirdModalVisible} onCancel={handleCancel}>
            <div className='equipamiento-modal'>
                <h2>Incluye:</h2>
                <p>Blancos para recámaras</p>
                <p>Toallas para baños</p>
                <p>Batería de cocina</p>
                <p>Vajilla</p>
                <p>Accesorios de cocina</p>
                <p>Artículos de servicio</p>
                <p>Caja fuerte</p>
                <p>(El detalle se le enviará en la cotización)</p>
            </div>
        </Modal>

            {/* <button onClick={() => localStorage.clear()}>Borrar</button> */}

            <div className='one-bedroom-buttons-div'>
                <button className='one-bedroom-cancel-button' onClick={goBack}>Atrás</button>
                <button className='one-bedroom-continue-button' onClick={addF}>Continuar</button> 
            </div>

        </div>
)
}

export default CartList