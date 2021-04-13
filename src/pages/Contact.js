import React, {useContext, useState} from 'react'
import emailjs, { init, sendForm } from 'emailjs-com';
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'antd';
import "../css/contact.css"
import "../css/typography.css"
import "../css/oneBedroom.css"
init("user_9nJB02h6LGqHX2fbUhkuP");

const Contact = () => {
    let history = useHistory();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const setIs = () => {
        setIsModalVisible(true)
    }

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

    return (
        <div className="contact-main-div">

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>Checkout</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

            <h2>¿Tienes alguna duda, sugerencia o comentario? ¡Contáctanos!</h2>
            <form className="contact-form" onSubmit={sendEmail} className='contact-form'>
                <input type="hidden" name="contact_number" />
                <label>Nombre</label>
                <input type="text" name="user_name" />
                <label>Teléfono</label>
                <input type="text" name="user_phone" />
                <label>Correo</label>
                <input type="email" name="user_email" />
                <label>Mensaje</label>
                <textarea  name="user_message" className='contact-textarea'/>
                <div className='contact-buttons-div'>
                    <input type="submit" value="Enviar" className='contact-continue-button' />
                </div>
    
            </form>

            <Modal visible={isModalVisible} onCancel={handleCancel} className='normal-contact-modal'
            footer={[
                <Button key="back" onClick={handleCancel}>
                    ¡De acuerdo!
                </Button>,
            ]}
            >
                <div>
                    <p className='contact-modal-p'><span className='contact-modal-span'>¡Gracias por comunicarte con nosotros! </span>Nos pondremos en contacto contigo.</p>
                </div>
            </Modal>
        </div>
    )
}

export default Contact