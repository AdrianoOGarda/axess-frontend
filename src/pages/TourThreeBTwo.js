import React, { useContext, useEffect, useState } from 'react'
import SecondBedCard from "../components/products/secondBedCard"
import SecondNightstandCard from "../components/products/secondNightstandCard"
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {SecondBedContext} from "../productsContext/SecondBedContext"
import {SecondNightstandContext} from "../productsContext/SecondNightstandContext"
import {useHistory} from "react-router-dom"


function TourTwoB() {
    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [secondBed, setSecondBed] = useContext(SecondBedContext);
    const [secondNightstand, setSecondNightstand] = useContext(SecondNightstandContext);
    const [bedTwo, setBedTwo] = useState(null)
    const [nightstandTwo, setNightstandTwo] = useState(null)

    let history = useHistory();

    const addToCartBed = (fName, fImage, fCategory) => {
        setBedTwo({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const addToCartNight = (fName, fImage, fCategory) => {
        setNightstandTwo({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const addF = async () => {
        await setSecondBed(bedTwo)
        await setSecondNightstand(nightstandTwo)
        history.push('/tour-cart')
    }

    const goBack = () => {
        history.push('/tour-select')
    }

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


    useEffect(() => {
        console.log('settingBedOne', bedTwo)
    }, [bedTwo])
    useEffect(() => {
        console.log('settingFirstBed', secondBed)
    }, [addF])

    useEffect(() => {
        console.log('settingNightstandOne', nightstandTwo)
    }, [nightstandTwo])
    useEffect(() => {
        console.log('settingFirstNightstand', secondNightstand)
    }, [addF])


    return (
        <div className='one-b-main-div'>

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>Segunda Recámara</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>   


        <p>Selecciona las camas:</p>
        <div className='one-b-beds-div'>
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
                onSelectImage={() => addToCartBed(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en)}
                />
            ))}
        </div>

        <p>Selecciona los burós:</p>
        <div className='one-b-beds-div'>
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
                onSelectImage={() => addToCartNight(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en)}
                />
            ))}
        </div>


        <div className='one-bedroom-buttons-div'>
                <button className='one-bedroom-cancel-button' onClick={goBack}>Atrás</button>
                <button className='one-bedroom-continue-button' onClick={addF}>Continuar</button> 
        </div>

        </div>

        
    )
}

export default TourTwoB
