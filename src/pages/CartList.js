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
import { TransCtx } from "../hooks/useTrans"
import "../css/typography.css"
import "../css/cartList.css"
import "../css/oneBedroom.css"



const CartList = () => {
    const {t} = useContext(TransCtx)

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
    const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
    const [isInfoModalVisibleBedTwo, setIsInfoModalVisibleBedTwo] = useState(false);
    const [isInfoModalVisibleBedThree, setIsInfoModalVisibleBedThree] = useState(false);
    const [isInfoModalVisibleNightOne, setIsInfoModalVisibleNightOne] = useState(false);
    const [isInfoModalVisibleNightTwo, setIsInfoModalVisibleNightTwo] = useState(false);
    const [isInfoModalVisibleNightThree, setIsInfoModalVisibleNightThree] = useState(false);
    const [isInfoModalVisible0, setIsInfoModalVisible0] = useState(false);
    const [isInfoModalVisible1, setIsInfoModalVisible1] = useState(false);
    const [isInfoModalVisible2, setIsInfoModalVisible2] = useState(false);
    const [isInfoModalVisible3, setIsInfoModalVisible3] = useState(false);
    const [isInfoModalVisible4, setIsInfoModalVisible4] = useState(false);
    const [isInfoModalVisible5, setIsInfoModalVisible5] = useState(false);
    const [isInfoModalVisible6, setIsInfoModalVisible6] = useState(false);
    const [isInfoModalVisible7, setIsInfoModalVisible7] = useState(false);
    const [isInfoModalVisible8, setIsInfoModalVisible8] = useState(false);
    const [isInfoModalVisible9, setIsInfoModalVisible9] = useState(false);
    const [isInfoModalVisible10, setIsInfoModalVisible10] = useState(false);
    const [isInfoModalVisible11, setIsInfoModalVisible11] = useState(false);
    const [isInfoModalVisible12, setIsInfoModalVisible12] = useState(false);
    const [isInfoModalVisible13, setIsInfoModalVisible13] = useState(false);
    const [isInfoModalVisible14, setIsInfoModalVisible14] = useState(false);
    const [isInfoModalVisible15, setIsInfoModalVisible15] = useState(false);

    const [isInfoCartVisible, setIsInfoCartVisible] = useState(false);
    const [regularDescription, setRegularDescription] = useState('');
    const [regularPrice, setRegularPrice] = useState('');

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
    const showInfoModal = () => {
        setIsInfoModalVisible(true);
    };
    const showInfoModalBedTwo = () => {
        setIsInfoModalVisibleBedTwo(true);
    };
    const showInfoModalBedThree = () => {
        setIsInfoModalVisibleBedThree(true);
    };
    const showInfoModalNightOne = () => {
        setIsInfoModalVisibleNightOne(true);
    };
    const showInfoModalNightTwo = () => {
        setIsInfoModalVisibleNightTwo(true);
    };
    const showInfoModalNightThree = () => {
        setIsInfoModalVisibleNightThree(true);
    };
    
    
    const handleCancel = () => {
        setIsEquipVisible(false);
        setIsSecondModalVisible(false);
        setIsThirdModalVisible(false);
        setIsInfoModalVisible(false);
        setIsInfoModalVisibleBedTwo(false);
        setIsInfoModalVisibleBedThree(false);
        setIsInfoModalVisibleNightOne(false);
        setIsInfoModalVisibleNightTwo(false);
        setIsInfoModalVisibleNightThree(false);
        setIsInfoCartVisible(false);
    };

    function onChangeEq(e) {
        setEquip(e.target.checked);
        console.log(`checked = ${e.target.checked}`);
        console.log(`aaa = ${equip}`);
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
    
    console.log('waaaaaat', firstNightstand)


    return (
        <div className='cart-list-main-div'>

            <div className='list-cart-title-div'>
                <div className='list-cart-title-inside-div'>
                    <div className='list-cart-title-divider'></div>
                    <h1>{t.cartList.title}</h1>
                    <div className='list-cart-title-divider'></div>
                </div> 
            </div>    

        <div className='cart-list-div'>    

        
            {firstBed?.category === undefined || firstBed === null ? 
            <></>
            :
            <div className='cart-list-product-div'>                    
                <img src={firstBed.image} alt="item-image"/>
                <p>{firstBed.name}</p><img onClick={showInfoModal} src={Info} alt="info-icon" className="cart-list-product-info" />
                    <Modal visible={isInfoModalVisible} onCancel={handleCancel}>
                        <div className='equipamiento-modal'>
                            <p>{firstBed.description}</p>
                            <p>{firstBed.price}</p>
                        </div>
                    </Modal>
            </div>
        }

        {secondBed?.category === undefined || secondBed === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={secondBed.image} alt="item-image"/>
                <p>{secondBed.name}</p><img onClick={showInfoModalBedTwo} src={Info} alt="info-icon" className="cart-list-product-info" />
                    <Modal visible={isInfoModalVisibleBedTwo} onCancel={handleCancel}>
                        <div className='equipamiento-modal'>
                            <p>{secondBed.description}</p>
                            <p>{secondBed.price}</p>
                        </div>
                    </Modal>
            </div>
        }

        {thirdBed?.category === undefined || thirdBed === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={thirdBed.image} alt="item-image"/>
                <p>{thirdBed.name}</p><img onClick={showInfoModalBedThree} src={Info} alt="info-icon" className="cart-list-product-info" />
                    <Modal visible={isInfoModalVisibleBedThree} onCancel={handleCancel}>
                        <div className='equipamiento-modal'>
                            <p>{thirdBed.description}</p>
                            <p>{thirdBed.price}</p>
                        </div>
                    </Modal>
            </div>
        }

        {firstNightstand?.category === undefined || firstNightstand === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={firstNightstand.image} alt="item-image"/>
                <p>{firstNightstand.name}</p><img onClick={showInfoModalNightOne} src={Info} alt="info-icon" className="cart-list-product-info" />
                    <Modal visible={isInfoModalVisibleNightOne} onCancel={handleCancel}>
                        <div className='equipamiento-modal'>
                            <p>{firstNightstand.description}</p>
                            <p>{firstNightstand.price}</p>
                        </div>
                    </Modal>
            </div>
        }

        {secondNightstand?.category === undefined || secondNightstand === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={secondNightstand.image} alt="item-image"/>
                <p>{secondNightstand.name}</p><img onClick={showInfoModalNightTwo} src={Info} alt="info-icon" className="cart-list-product-info" />
                    <Modal visible={isInfoModalVisibleNightTwo} onCancel={handleCancel}>
                        <div className='equipamiento-modal'>
                            <p>{secondNightstand.description}</p>
                            <p>{secondNightstand.price}</p>
                        </div>
                    </Modal>
            </div>
        }

        {thirdNightstand?.category === undefined || thirdNightstand === null ? 
            <></>
            :
            <div className='cart-list-product-div'>
                <img src={thirdNightstand.image} alt="item-image"/>
                <p>{thirdNightstand.name}</p><img onClick={showInfoModalNightThree} src={Info} alt="info-icon" className="cart-list-product-info" />
                    <Modal visible={isInfoModalVisibleNightThree} onCancel={handleCancel}>
                        <div className='equipamiento-modal'>
                            <p>{thirdNightstand.description}</p>
                            <p>{thirdNightstand.price}</p>
                        </div>
                    </Modal>
            </div>
        }
        </div>

            <div className='cart-list-div'>
            {cart.filter(product => product.category  !== undefined).map( (cartItem, idx) => (
                <div key={idx} className='cart-list-product-div'>
                    <img src={cartItem.image} alt="item-image"/>
                    <p>{cartItem.name}</p><img onClick={() => {
                        setRegularDescription(cartItem.description);
                        setRegularPrice(cartItem.price);
                        setIsInfoCartVisible(true);
                    }} src={Info} alt="info-icon" className="cart-list-product-info" />
                </div>
            ))}
            <Modal visible={isInfoCartVisible} onCancel={handleCancel}>
                        <div className='equipamiento-modal'>
                            <p>{regularDescription}</p>
                            <p>{regularPrice}</p>
                        </div>
            </Modal>
            </div>


            <div className='cart-list-packages-select'>
                <p>{t.cartList.accessories}</p>
                <div className="packages-select-inside-div">
                    <p>{t.cartList.equip}</p>
                    <img onClick={showEquipModal} src={Info} alt="info-icon"/>
                    <Checkbox onChange={onChangeEq} className='package-checkbox'></Checkbox>
                </div>
                <div className="packages-select-inside-div">
                    <p>{t.cartList.deco}</p>
                    <img onClick={showSecondModal} src={Info} alt="info-icon"/>
                    <Checkbox onChange={onChangeDec} className='package-checkbox'></Checkbox>
                </div>
                <div className="packages-select-inside-div">
                    <p>{t.cartList.hot}</p>
                    <img onClick={showThirdModal} src={Info} alt="info-icon"/>
                    <Checkbox onChange={onChangeHot} className='package-checkbox'></Checkbox>
                </div>
            </div> 
        
        <Modal visible={isEquipVisible} onCancel={handleCancel}>
            <div className='equipamiento-modal'>
                <h2>{t.cartList.equipModal.title}</h2>
                <p>{t.cartList.equipModal.first}</p>
                <p>{t.cartList.equipModal.second}</p>
                <p>{t.cartList.equipModal.third}</p>
                <p>{t.cartList.equipModal.fourth}</p>
                <p>{t.cartList.equipModal.parenthesis}</p>
            </div>
        </Modal>
        <Modal visible={isSecondModalVisible} onCancel={handleCancel}>
            <div className='equipamiento-modal'>
                <h2>{t.cartList.equipModal.title}</h2>
                <p>{t.cartList.decoModal.first}</p>
                <p>{t.cartList.decoModal.second}</p>
                <p>{t.cartList.decoModal.third}</p>
                <p>{t.cartList.decoModal.fourth}</p>
                <p>{t.cartList.decoModal.fifth}</p>
                <p>{t.cartList.equipModal.parenthesis}</p>
            </div>
        </Modal>
        <Modal visible={isThirdModalVisible} onCancel={handleCancel}>
            <div className='equipamiento-modal'>
                <h2>{t.cartList.equipModal.title}</h2>
                <p>{t.cartList.hotModal.first}</p>
                <p>{t.cartList.hotModal.second}</p>
                <p>{t.cartList.hotModal.third}</p>
                <p>{t.cartList.hotModal.fourth}</p>
                <p>{t.cartList.hotModal.fifth}</p>
                <p>{t.cartList.hotModal.sixth}</p>
                <p>{t.cartList.hotModal.seventh}</p>
                <p>{t.cartList.equipModal.parenthesis}</p>
            </div>
        </Modal>

            {/* <button onClick={() => localStorage.clear()}>Borrar</button> */}

            <div className='one-bedroom-buttons-div'>
                <button className='one-bedroom-cancel-button' onClick={goBack}>{t.tourBedroom.backBtn}</button>
                <button className='one-bedroom-continue-button' onClick={addF}>{t.tourBedroom.continueBtn}</button> 
            </div>

        </div>
)
}

export default CartList