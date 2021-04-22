import React, {useContext, useState} from 'react'
import {CartContext} from '../../CartContext';
import {MyContext} from "../../context"
import Info from '../../icons/info.svg'
import { Modal } from 'antd';
import './productCard.css';
import {Link, useHistory} from "react-router-dom"
import useWindowSize from "../../hooks/useWindowSize"
import { deleteFurniture } from "../../services/furnitures"
import { TransCtx } from "../../hooks/useTrans"

const ProductCard = (props) => {
    const {t} = useContext(TransCtx)

    const windowSize = useWindowSize();
    const [cart, setCart] = useContext(CartContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isAddedVisible, setIsAddedVisible] = useState(false);

    const { clearCtxUser, user } = useContext(MyContext);
    let history = useHistory();

    const addToCart = () => {
        const product = {name: props.name, image: props.image, category: props.category}
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
        setIsAddedVisible(true);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setIsAddedVisible(false);
    };

    async function eliminateFurniture(furnId) { 
        await deleteFurniture(furnId);
        history.push('/')
    }
    


    return (windowSize > 480) ? (
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
                <>
                <Link to={`edit/${props.id}`} style={{fontFamily: 'L Regular', fontSize: '.8vw'}}>EDITAR</Link>
                <p className='delete-button-product-card' onClick={() => {
                    eliminateFurniture(props.id);
                    setIsModalVisible(false);
                }}>BORRAR</p>
                </>
            )}
                </div>
            </div>
        </Modal>

        <Modal 
        visible={isAddedVisible} 
        onCancel={handleCancel} 
        >
            <p style={{fontFamily: 'L Bold', color: '#8c857e', fontSize: '1.5vw', marginTop: '2vw'}}>El producto fue agregado al carrito</p>
        </Modal>

        </div>
    ) : (
        
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
        width='85vw'
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
                <>
                <Link to={`/edit${props.id}`} style={{fontFamily: 'L Regular', fontSize: '4vw'}}>EDITAR</Link>
                <p className='delete-button-product-card' onClick={() => {
                    eliminateFurniture(props.id);
                    setIsModalVisible(false);
                }}>BORRAR</p>
                </>
            )}
                </div>
            </div>
        </Modal>

        <Modal 
        visible={isAddedVisible} 
        onCancel={handleCancel} 
        >
            <p style={{fontFamily: 'L Bold', color: '#8c857e', fontSize: '4vw'}}>El producto fue agregado al carrito</p>
        </Modal>

        </div>
    )
}

export default ProductCard