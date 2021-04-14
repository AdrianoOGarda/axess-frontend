import React from 'react'
import "./footer.css"
import WhatsApp from "../../icons/whatsapp.png"
import Instagram from "../../icons/instagram.png"
import Facebook from '../../icons/facebook.png'
import '../../css/typography.css'
import useWindowSize from "../../hooks/useWindowSize"

const Footer = () => {
    
    const windowSize = useWindowSize(); 

    return (windowSize > 480) ?  (
        <div className="axess-footer">
            <div className='axess-footer-main-div'>
                <div className="footer-divider"></div>
                <div>
                    <div className="footer-icons-text-div">
                        <p>SÍGUENOS EN REDES SOCIALES</p>
                        <div className='footer-icons-div'>
                            <a href="https://wa.me/+523310519153"><img src={WhatsApp} alt="whatsapp"/></a>
                            <a href="https://www.instagram.com/axessdesign/?hl=es-la"><img src={Instagram} alt="instagram"/></a>
                            <a href="https://www.facebook.com/AxessDesign"><img src={Facebook} alt="facebook"/></a>
                        </div>
                    </div>
                </div>
                <div className="footer-divider"></div>
            </div>
        </div>
    ) :  (
        <div className="axess-footer-mobile">
            <div className='axess-footer-main-div-mobile'>
                <div className="footer-divider-mobile"></div>
                <div>
                    <div className="footer-icons-text-div-mobile">
                        <p>SÍGUENOS EN REDES SOCIALES</p>
                        <div className='footer-icons-div-mobile'>
                            <a href="https://wa.me/+523310519153"><img src={WhatsApp} alt="whatsapp"/></a>
                            <a href="https://www.instagram.com/axessdesign/?hl=es-la"><img src={Instagram} alt="instagram"/></a>
                            <a href="https://www.facebook.com/AxessDesign"><img src={Facebook} alt="facebook"/></a>
                        </div>
                    </div>
                </div>
                <div className="footer-divider-mobile"></div>
            </div>
        </div>
    )
}

export default Footer