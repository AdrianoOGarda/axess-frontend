import React, { useContext, useEffect, useState } from 'react'
import TourCard from '../components/products/tourCard'
import FirstBedCard from "../components/products/firstBedCard"
import FirstNightstandCard from "../components/products/FirstNightstandCard"
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {FirstBedContext} from "../productsContext/FirstBedContext"
import {FirstNightstandContext} from "../productsContext/FirstNightstandContext"


function TourOneB() {
    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [firstBed, setFirstBed] = useContext(FirstBedContext);
    const [firstNightstand, setFirstNightstand] = useContext(FirstNightstandContext);


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

    useEffect(() => {
        localStorage.setItem("firstNightstand", JSON.stringify(firstNightstand));
    }, [firstNightstand]);

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

        {furnitures?.filter(furniture => furniture?.category?.en === "NIGHTSTANDS").map(filteredFurniture => (
                <FirstNightstandCard 
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
