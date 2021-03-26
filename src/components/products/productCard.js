import React, {useContext} from 'react'
import {CartContext} from '../../CartContext';


const ProductCard = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const product = {name: props.name}
        setCart(curr => [...curr, product]);
    }
    

    console.log(`queverga: ${cart}`)

    return (
        <div>
            <p>{props.name}</p>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default ProductCard