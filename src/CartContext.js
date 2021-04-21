import React, { useState, useEffect} from "react";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState(cartFromLocalStorage);
    
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}