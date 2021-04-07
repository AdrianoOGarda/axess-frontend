import React, {useState, useContext, useEffect } from 'react'
import {CartContext} from '../../CartContext';
import "./tourCard.css"
import Info from "../../icons/info.svg"
import { Modal } from 'antd';
import useWindowSize from "../../hooks/useWindowSize"



function TourCard(props) {
    const windowSize = useWindowSize();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selected, setSelected] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const [bedOne, setBedOne] = useState(null)


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const selectedProduct = async () => {
        // await setSelected(null);
        // setSelected('selected-product');
    }

    const addToCart = () => {
        setBedOne({name: props.name, image: props.image, category: props.category, quantity: 1})
    }

    const addF = () => {
        setCart([...cart, bedOne])
    }

    const clearLocalCart = () => {
        setCart([]);
    }

    // useEffect(() => {

    //     if(bedOne !== null) {
    //         setCart(...cart, bedOne);
    //     }

    //     console.log('hhhhh', bedOne)
    // }, [bedOne])

    // const removeFromCart = (productToRemove) => {
    //     setCart(cart.filter((product) => product !== productToRemove ))
    // };

    // const addToCart = () => {
    //     const product = {name: props.name, image: props.image, category: props.category}
    //     let newCart = [...cart];
    //     let itemInCart = newCart.find(
    //         (item) => product.name === item.name
    //     );
    //     if (itemInCart) {
    //         itemInCart.quantity++;
    //     } else {
    //         itemInCart = {
    //             ...product, 
    //             quantity: 1,
    //         };
    //         newCart.push(itemInCart);
    //     };
    //     setCart(newCart);
    // }

    // const setBed = () => {
    //     setBedOne({name: props.name, image: props.image, category: props.category})
    // }

console.log('pppp', bedOne)

    return (windowSize > 480) ? (
        <div className='tour-card-div'>
            <img src={props.image} alt="imagen-tarjeta" onClick={addToCart} className={selected}/>
            <div className='tour-card-name-div'>
                <h4>{props.name}</h4>
                <img src={Info} alt="info-icon" onClick={showModal}/>
            </div>

        <Modal 
        title={props.name} 
        visible={isModalVisible} 
        onCancel={handleCancel} 
        width='70vw'
        bodyStyle={{padding: '1.5vw'}}>
            <div className="tour-modal-div">
                <img src={props.image} alt="modal-tour-img"/>
                <div className='tour-modal-info-div'>
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

        <button onClick={clearLocalCart}>Clear Cart</button>
        <button onClick={addF}>CONTINUE</button>
        

        </div>
    ) : (
        <div className='tour-card-div'>
            <img src={props.image} alt="imagen-tarjeta"/>
            <div className='tour-card-name-div'>
                <h4>{props.name}</h4>
                <img src={Info} alt="info-icon" onClick={showModal}/>
            </div>

        <Modal 
        title={props.name} 
        visible={isModalVisible} 
        onCancel={handleCancel} 
        width='85vw'
        bodyStyle={{padding: '1.5vw'}}>
            <div className="tour-modal-div">
                <img src={props.image} alt="modal-tour-img"/>
                <div className='tour-modal-info-div'>
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

export default TourCard