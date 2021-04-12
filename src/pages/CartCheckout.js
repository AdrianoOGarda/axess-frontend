import React, {useContext, useState, useEffect} from 'react'
import {CartContext} from "../CartContext";
import emailjs, { init, sendForm } from 'emailjs-com';
import { useHistory } from 'react-router-dom'
import { Modal } from 'antd';
import "../css/cartCheckout.css"
import "../css/typography.css"
import "../css/oneBedroom.css"
init("user_9nJB02h6LGqHX2fbUhkuP");

const CartChekout = () => {
    let history = useHistory();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [cart, setCart] = useContext(CartContext);

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('contact_form', 'template_y4izvbt', e.target, 'user_9nJB02h6LGqHX2fbUhkuP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setIsModalVisible(true);
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div className="cart-checkout-main-div">

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>Checkout</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

            <h2>Ingresa tus datos para que podamos contactarte</h2>
            <form className="contact-form" onSubmit={sendEmail} className='cart-checkout-form'>
                <input type="hidden" name="contact_number" />
                <label>Nombre</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Teléfono</label>
                <input type="text" name="user_phone" />
                {cart?.map((item, idx) => (
                    <input key={idx} type="hidden" name={`normal_product_${idx}`} value={`Nombre: ${item.name} / Cantidad: ${item.quantity} / Tamaño: ${item.bedSize}`}/>
                ))}

                <div className='cart-checkout-buttons-div'>
                    <input type="submit" value="Enviar" className='contact-continue-button' />
                </div>
    
            </form>

            <Modal title='¡Gracias!' visible={isModalVisible} onCancel={handleCancel}>
                <div>
                    <p style={{fontFamily: 'L Regular'}}>Nos pondremos en contacto contigo</p>
                </div>
            </Modal>
        </div>
    )
}

export default CartChekout