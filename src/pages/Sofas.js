import React, { useContext, useEffect, useState }  from 'react'
import { getFurnitures } from "../services/furnitures"
import ProductCard from '../components/products/productCard'
import {CartContext} from "../CartContext"
import "../css/oneBedroom.css"
import useTrans, { TransCtx } from "../hooks/useTrans"

function Sofas() {
    const {t} = useContext(TransCtx)

    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        async function fetchTVStands(){
            const {
                data: {furniture}
            } = await getFurnitures()
        setFurnitures(furniture)
        }
        fetchTVStands()
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    console.log(`WAT: ${furnitures}`)

    return (
        <div className='one-b-main-div' style={{minHeight: '90vh'}}>

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>{t.sofas.title}</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '80vw', alignSelf: 'center', marginTop: '5vw'}}>
            {furnitures?.filter(furniture => furniture?.category?.en === "SOFAS").map((filteredFurniture, idx) => (
                <div style={{marginBottom: '5vw'}} key={idx}>
                <ProductCard 
                name={filteredFurniture.name.en} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                category={filteredFurniture.category.en}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                size={filteredFurniture.size.es}
                id={filteredFurniture._id}
                />
                </div>
            ))}
        </div>

        </div>
    )
}

export default Sofas

