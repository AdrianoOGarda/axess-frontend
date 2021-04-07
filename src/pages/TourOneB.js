import React, { useContext, useEffect, useState } from 'react'
import TourCard from '../components/products/tourCard'
import FirstBedCard from "../components/products/firstBedCard"
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {FirstBedContext} from "../productsContext/FirstBedContext"


function TourOneB() {
    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [firstBed, setFirstBed] = useContext(FirstBedContext);


    useEffect(() => {
        async function fetchBeds(){
            const {
                data: {furniture}
            } = await getFurnitures()
        setFurnitures(furniture)
        }
        fetchBeds()
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("firstBed", JSON.stringify(firstBed));
    }, [firstBed]);

    return (
        <div>   
        {furnitures?.filter(furniture => furniture?.category?.en === "BEDS").map(filteredFurniture => (
                <FirstBedCard 
                name={filteredFurniture.name.en} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size.es}
                />
            ))}
        </div>
    )
}

export default TourOneB
