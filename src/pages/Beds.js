import React, { useContext, useEffect, useState }  from 'react'
import { getFurnitures } from "../services/furnitures"
import ProductCard from '../components/products/productCard'

import {CartContext} from "../CartContext"


function Beds() {

    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        async function fetchBeds(){
            const {
                data: {furniture}
            } = await getFurnitures()
        setFurnitures(furniture)
        console.log(furniture)
        }
        fetchBeds()
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    console.log(`WAT: ${furnitures}`)

    return (
        <>
            <p>Aquí van las camas</p>
            {furnitures?.filter(furniture => furniture?.category?.en === "BEDS").map(filteredFurniture => (
                <ProductCard 
                name={filteredFurniture.name.en} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                size={filteredFurniture.size.es}
                id={filteredFurniture}
                />
            ))}
        </>
    )
}

export default Beds

