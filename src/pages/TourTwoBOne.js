import React, { useContext, useEffect, useState } from 'react'
import TourCard from '../components/products/tourCard'
import FirstBedCard from "../components/products/firstBedCard"
import FirstNightstandCard from "../components/products/FirstNightstandCard"
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {FirstBedContext} from "../productsContext/FirstBedContext"
import {FirstNightstandContext} from "../productsContext/FirstNightstandContext"
import {Link, useHistory} from 'react-router-dom'
import "../css/oneBedroom.css"
import '../css/typography.css'


function TourTwoBOne() {
    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [firstBed, setFirstBed] = useContext(FirstBedContext);
    const [firstNightstand, setFirstNightstand] = useContext(FirstNightstandContext);
    const [bedOne, setBedOne] = useState(null)
    const [nightstandOne, setNightstandOne] = useState(null)
    let history = useHistory();


    useEffect(() => {
        async function fetchBeds(){
            const {
                data: {furniture}
            } = await getFurnitures()
        setFurnitures(furniture)
        }
        fetchBeds()
    }, [])

    const addToCart = (fName, fImage, fCategory) => {
        setBedOne({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const addF = () => {
        setFirstBed(bedOne)
        setFirstNightstand(nightstandOne)
        history.push('/two-bedrooms-second')
    }

    const goBack = () => {
        history.push('/tour-select')
    }

    const addToCartNight = (fName, fImage, fCategory) => {
        setNightstandOne({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

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
        <div className='one-b-main-div'>

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>Recámara</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

        <p>Selecciona las camas:</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "BEDS" && furniture?.project === "AWA").map(filteredFurniture => (
                <FirstBedCard 
                name={filteredFurniture.name.en} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size.es}
                onSelectImage={() => addToCart(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en)}
                />
            ))}
        </div>  

        <p>Selecciona los burós:</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "NIGHTSTANDS" && furniture?.project === "AWA").map(filteredFurniture => (
                <FirstNightstandCard 
                name={filteredFurniture.name.en} 
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

export default TourTwoBOne