import React, {useContext, useState} from 'react'
import {CartContext} from '../../CartContext';
import {MyContext} from "../../context"
import Info from '../../icons/info.svg'
import { Modal } from 'antd';
import './productCard.css';
import {Link} from "react-router-dom"

const ProductCard = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { clearCtxUser, user } = useContext(MyContext);

    const addToCart = () => {
        const product = {name: props.name}
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product, 
                quantity: 1,
            };
            newCart.push(itemInCart);
        };
        setCart(newCart);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    


    return (
        <div className='product-card-div'>
            <img src={props.image} alt="imagen-tarjeta"/>
            <div className='product-card-name-div'>
                <h4>{props.name}</h4>
                <img src={Info} alt="info-icon" onClick={showModal}/>
            </div>
            <p className='price-tag'>${props.price}</p>
            <button onClick={addToCart}><span>+</span>Agregar al carrito</button>

        <Modal 
        title={props.name} 
        visible={isModalVisible} 
        onCancel={handleCancel} 
        width='70vw'
        bodyStyle={{padding: '1.5vw'}}>
            <div className="product-modal-div">
                <img src={props.image} alt="modal-product-img"/>
                <div className='modal-info-div'>
                    <h4>Descripción</h4>
                    <p>{props.description}</p>
                    <h4>Tamaño</h4>
                    <p>{props.size}</p>
                    <h4>Material</h4>
                    <p>{props.material}</p>
                    {user && (
                <Link to={`/${props.id}`} style={{fontFamily: 'L Regular'}}>EDITAR</Link>
            )}
                </div>
            </div>
        </Modal>

        </div>
    )
}

export default ProductCard