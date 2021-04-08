import React, { useContext, useEffect, useState } from 'react'
import SecondBedCard from "../components/products/secondBedCard"
import SecondNightstandCard from "../components/products/secondNightstandCard"
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {SecondBedContext} from "../productsContext/SecondBedContext"
import {SecondNightstandContext} from "../productsContext/SecondNightstandContext"


function TourTwoB() {
    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [secondBed, setSecondBed] = useContext(SecondBedContext);
    const [secondNightstand, setSecondNightstand] = useContext(SecondNightstandContext);


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
        localStorage.setItem("secondBed", JSON.stringify(secondBed));
    }, [secondBed]);


    useEffect(() => {
        localStorage.setItem("secondNightstand", JSON.stringify(secondNightstand));
    }, [secondNightstand]);


    return (
        <div>   

        {furnitures?.filter(furniture => furniture?.category?.en === "BEDS" && furniture?.project === "AWA").map(filteredFurniture => (
                <SecondBedCard 
                name={filteredFurniture.name.es} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size.es}
                />
            ))}

        {furnitures?.filter(furniture => furniture?.category?.en === "NIGHTSTANDS" && furniture?.project === "AWA").map(filteredFurniture => (
                <SecondNightstandCard 
                name={filteredFurniture.name.es} 
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

export default TourTwoB
