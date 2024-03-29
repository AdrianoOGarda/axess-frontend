import React, { useContext, useEffect, useState }  from 'react'
import { getFurnitures } from "../services/furnitures"
import ProductCard from '../components/products/productCard'
import {CartContext} from "../CartContext"
import useTrans, { TransCtx } from "../hooks/useTrans"
import useWindowSize from '../hooks/useWindowSize'
import "../css/oneBedroom.css"


function CoffeeTables() {
    const {t} = useContext(TransCtx)
    const windowSize = useWindowSize();
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

    return (windowSize > 480) ? (
        <div className='one-b-main-div' style={{minHeight: '90vh'}}>

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>{t.coffeeTables.title}</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

        <div style={{display: 'flex', justifyContent: 'left', flexWrap: 'wrap', width: '80vw', alignSelf: 'center', marginTop: '5vw'}}>
            {furnitures?.filter(furniture => furniture?.category?.en === "COFFEE TABLES").map((filteredFurniture, idx) => (
                <div style={{marginBottom: '5vw', marginRight: '3vw'}} key={idx}>
                <ProductCard 
                name={filteredFurniture.name[t.lang]} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                category={filteredFurniture.category.en}
                description={filteredFurniture.description[t.lang]}
                material={filteredFurniture.material[t.lang]}
                size={filteredFurniture.size[t.lang]}
                id={filteredFurniture._id}
                />
                </div>
            ))}
        </div>

        </div>
    ) : (
        <div className='one-b-main-div' style={{minHeight: '90vh'}}>

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>{t.coffeeTables.title}</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '80vw', alignSelf: 'center', marginTop: '5vw'}}>
            {furnitures?.filter(furniture => furniture?.category?.en === "COFFEE TABLES").map((filteredFurniture, idx) => (
                <div style={{marginBottom: '5vw'}} key={idx}>
                <ProductCard 
                name={filteredFurniture.name[t.lang]} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                category={filteredFurniture.category.en}
                description={filteredFurniture.description[t.lang]}
                material={filteredFurniture.material[t.lang]}
                size={filteredFurniture.size[t.lang]}
                id={filteredFurniture._id}
                />
                </div>
            ))}
        </div>

        </div>
    )
}

export default CoffeeTables

