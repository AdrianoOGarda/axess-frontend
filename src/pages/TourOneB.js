import React, { useContext, useEffect, useState } from 'react'
import TourCard from '../components/products/tourCard'
import FirstBedCard from "../components/products/firstBedCard"
import SecondBedCard from "../components/products/secondBedCard"
import ThirdBedCard from "../components/products/thirdBedCard"
import FirstNightstandCard from "../components/products/FirstNightstandCard"
import SecondNightstandCard from "../components/products/secondNightstandCard"
import ThirdNightstandCard from "../components/products/thirdNightstandCard"
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {FirstBedContext} from "../productsContext/FirstBedContext"
import {SecondBedContext} from "../productsContext/SecondBedContext"
import {ThirdBedContext} from "../productsContext/ThirdBedContext"
import {FirstNightstandContext} from "../productsContext/FirstNightstandContext"
import {SecondNightstandContext} from "../productsContext/SecondNightstandContext"
import {ThirdNightstandContext} from "../productsContext/ThirdNightstandContext"


function TourOneB() {
    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [firstBed, setFirstBed] = useContext(FirstBedContext);
    const [secondBed, setSecondBed] = useContext(SecondBedContext);
    const [thirdBed, setThirdBed] = useContext(ThirdBedContext);
    const [firstNightstand, setFirstNightstand] = useContext(FirstNightstandContext);
    const [secondNightstand, setSecondNightstand] = useContext(SecondNightstandContext);
    const [thirdNightstand, setThirdNightstand] = useContext(ThirdNightstandContext);


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
        localStorage.setItem("secondBed", JSON.stringify(secondBed));
    }, [secondBed]);
    useEffect(() => {
        localStorage.setItem("thirdBed", JSON.stringify(thirdBed));
    }, [thirdBed]);

    useEffect(() => {
        localStorage.setItem("firstNightstand", JSON.stringify(firstNightstand));
    }, [firstNightstand]);
    useEffect(() => {
        localStorage.setItem("secondNightstand", JSON.stringify(secondNightstand));
    }, [secondNightstand]);
    useEffect(() => {
        localStorage.setItem("thirdNightstand", JSON.stringify(thirdNightstand));
    }, [thirdNightstand]);

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

        {furnitures?.filter(furniture => furniture?.category?.en === "NIGHTSTANDS").map(filteredFurniture => (
                <SecondNightstandCard 
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
                <ThirdNightstandCard 
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


        {furnitures?.filter(furniture => furniture?.category?.en === "BEDS").map(filteredFurniture => (
                <SecondBedCard 
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

        {furnitures?.filter(furniture => furniture?.category?.en === "BEDS").map(filteredFurniture => (
                <ThirdBedCard 
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
