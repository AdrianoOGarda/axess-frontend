import React, { useContext, useEffect, useState } from 'react'
import ThirdBedCard from "../components/products/thirdBedCard"
import ThirdNightstandCard from "../components/products/thirdNightstandCard"
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {ThirdBedContext} from "../productsContext/ThirdBedContext"
import {ThirdNightstandContext} from "../productsContext/ThirdNightstandContext"
import {useHistory} from "react-router-dom"


function TourThreeB() {
    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [thirdBed, setThirdBed] = useContext(ThirdBedContext);
    const [thirdNightstand, setThirdNightstand] = useContext(ThirdNightstandContext);
    const [bedThree, setBedThree] = useState(null)
    const [nightstandThree, setNightstandThree] = useState(null)

    let history = useHistory();

    const addToCartBed = (fName, fImage, fCategory) => {
        setBedThree({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const addToCartNight = (fName, fImage, fCategory) => {
        setNightstandThree({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const addF = async () => {
        await setThirdBed(bedThree)
        await setThirdNightstand(nightstandThree)
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
        localStorage.setItem("thirdBed", JSON.stringify(thirdBed));
    }, [thirdBed]);


    useEffect(() => {
        localStorage.setItem("thirdNightstand", JSON.stringify(thirdNightstand));
    }, [thirdNightstand]);


    useEffect(() => {
        console.log('settingBedOne', bedThree)
    }, [bedThree])
    useEffect(() => {
        console.log('settingFirstBed', thirdBed)
    }, [addF])

    useEffect(() => {
        console.log('settingNightstandOne', nightstandThree)
    }, [nightstandThree])
    useEffect(() => {
        console.log('settingFirstNightstand', thirdNightstand)
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
                <ThirdBedCard 
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
                <ThirdNightstandCard 
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

export default TourThreeB
