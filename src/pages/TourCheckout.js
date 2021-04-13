import React, {useContext, useState} from 'react'
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
import emailjs, { init, sendForm } from 'emailjs-com';
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'antd';
import "../css/tourCheckout.css"
import "../css/typography.css"
import "../css/oneBedroom.css"
init("user_9nJB02h6LGqHX2fbUhkuP");

const TourCheckout = () => {
    let history = useHistory();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [cart, setCart] = useContext(CartContext);

    const [firstBed, setFirstBed] = useContext(FirstBedContext);
    const [secondBed, setSecondBed] = useContext(SecondBedContext);
    const [thirdBed, setThirdBed] = useContext(ThirdBedContext);

    const [firstNightstand, setFirstNightstand] = useContext(FirstNightstandContext);
    const [secondNightstand, setSecondNightstand] = useContext(SecondNightstandContext);
    const [thirdNightstand, setThirdNightstand] = useContext(ThirdNightstandContext);
    
    const [equip, setEquip] = useContext(EquipContext);
    const [deco, setDeco] = useContext(DecoContext);
    const [hot, setHot] = useContext(HotContext);
    const [deptoCon, setDeptoCon] = useContext(DeptoContext)


    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const goWayBack = async () => {
        await localStorage.clear();
        history.push('tour-select')
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('contact_form', 'template_dg5kczt', e.target, 'user_9nJB02h6LGqHX2fbUhkuP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setIsModalVisible(true);
    }

    return (
        <div className="tour-checkout-main-div">

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>Checkout</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

            <h2>Ingresa tus datos para que podamos contactarte</h2>
            <form className="contact-form" onSubmit={sendEmail} className='tour-checkout-form'>
                <input type="hidden" name="contact_number" />
                <label>Nombre</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Teléfono</label>
                <input type="text" name="user_phone" />
                <input type="hidden" name="firstbed_name" value={firstBed?.name}/>
                <input type="hidden" name="firstbed_quantity" value={firstBed?.quantity}/>
                <input type="hidden" name="secondbed_name" value={secondBed?.name}/>
                <input type="hidden" name="secondbed_quantity" value={secondBed?.quantity}/>
                <input type="hidden" name="thirdbed_name" value={thirdBed?.name}/>
                <input type="hidden" name="thirdbed_quantity" value={thirdBed?.quantity}/>
                <input type="hidden" name="firstnight_name" value={firstNightstand?.name}/>
                <input type="hidden" name="firstnight_quantity" value={firstNightstand?.quantity}/>
                <input type="hidden" name="secondnight_name" value={secondNightstand?.name}/>
                <input type="hidden" name="secondnight_quantity" value={secondNightstand?.quantity}/>
                <input type="hidden" name="thirdnight_name" value={thirdNightstand?.name}/>
                <input type="hidden" name="thirdnight_quantity" value={thirdNightstand?.quantity}/>
                {deptoCon ==! "" ? (
                    <input type="hidden" name="depto_type" value={deptoCon}/>
                ) : (
                    <></>
                )}
                {equip === false ? (
                    <></>
                ) : (
                    <input type="hidden" name="equip_package" value='Sí'/>
                )}
                {deco === false ? (
                    <></>
                ) : (
                    <input type="hidden" name="dec_package" value='Sí'/>
                )}
                {hot === false ? (
                    <></>
                ) : (
                    <input type="hidden" name="hot_package" value='Sí'/>
                )}
                {cart?.map((item, idx) => (
                    <input key={idx} type="hidden" name={`normal_product_${idx}`} value={`Nombre: ${item.name} / Cantidad: ${item.quantity}`}/>
                ))}

                <div className='tour-checkout-buttons-div'>
                    <button className='tour-checkout-cancel-button' onClick={goWayBack}>Atrás</button>
                    <input type="submit" value="Enviar" className='tour-checkout-continue-button' />
                </div>
    
            </form>

            <Modal title='¡Gracias!' visible={isModalVisible} onCancel={handleCancel} className='tour-checkout-modal'
            footer={[
                <Button key="back" onClick={handleCancel}>
                    ¡De acuerdo!
                </Button>,
            ]}
            >
                <div>
                    <p style={{fontFamily: 'L Regular', color: '#8c857e', fontSize: '1.5vw', marginTop: '-2vw'}} className='tour-checkout-modal-div-p'>Nos pondremos en contacto contigo</p>
                </div>
            </Modal>
        </div>
    )
}

export default TourCheckout