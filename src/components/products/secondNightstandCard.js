import React, {useState, useContext, useEffect } from 'react'
import {SecondNightstandContext} from "../../productsContext/SecondNightstandContext"
import "./firstBedCard.css"
import Info from "../../icons/info.svg"
import { Modal } from 'antd';
import useWindowSize from "../../hooks/useWindowSize"



function SecondNightstandCard(props) {
    const windowSize = useWindowSize();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selected, setSelected] = useState(false);
    const [secondNightstand, setSecondNightstand] = useContext(SecondNightstandContext);
    const [nightstandTwo, setNightstandTwo] = useState(null)


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const addToCart = () => {
        setNightstandTwo({name: props.name, image: props.image, category: props.category, quantity: 1})
    }

    const addF = () => {
        setSecondNightstand(nightstandTwo)
    }

    const clearLocalBed = () => {
        setSecondNightstand({});
    }


    return (windowSize > 480) ? (
        <div className='first-bed-card-div'>
            <img src={props.image} alt="imagen-tarjeta" onClick={props.onSelectImage} className={selected}/>
            <div className='first-bed-card-name-div'>
                <h4>{props.name}</h4>
                <img src={Info} alt="info-icon" onClick={showModal}/>
            </div>

        <Modal 
        title={props.name} 
        visible={isModalVisible} 
        onCancel={handleCancel} 
        width='70vw'
        bodyStyle={{padding: '1.5vw'}}>
            <div className="first-bed-modal-div">
                <img src={props.image} alt="modal-first-bed-img"/>
                <div className='first-bed-modal-info-div'>
                    <h4>Precio</h4>
                    <p>${props.price}</p>
                    <h4>Descripción</h4>
                    <p>{props.description}</p>
                    <h4>Tamaño</h4>
                    <p>{props.size}</p>
                    <h4>Material</h4>
                    <p>{props.material}</p>
                </div>
            </div>
        </Modal>

        {/* <button onClick={clearLocalBed}>Clear Cart</button>
        <button onClick={addF}>CONTINUE</button> */}
        

        </div>
    ) : (
        <div className='first-bed-card-div'>
            <img src={props.image} onClick={props.onSelectImage} alt="imagen-tarjeta"/>
            <div className='first-bed-card-name-div'>
                <h4>{props.name}</h4>
                <img src={Info} alt="info-icon" onClick={showModal}/>
            </div>

        <Modal 
        title={props.name} 
        visible={isModalVisible} 
        onCancel={handleCancel} 
        width='85vw'
        bodyStyle={{padding: '1.5vw'}}>
            <div className="first-bed-modal-div">
                <img src={props.image} alt="modal-first-bed-img"/>
                <div className='first-bed-modal-info-div'>
                    <h4>Precio</h4>
                    <p>${props.price}</p>
                    <h4>Descripción</h4>
                    <p>{props.description}</p>
                    <h4>Tamaño</h4>
                    <p>{props.size}</p>
                    <h4>Material</h4>
                    <p>{props.material}</p>
                </div>
            </div>
        </Modal>

        </div>
    )
}

export default SecondNightstandCard
