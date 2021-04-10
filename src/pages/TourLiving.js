import React, { useContext, useEffect, useState } from 'react'
import TourCard from '../components/products/tourCard'
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {Link, useHistory} from 'react-router-dom'
import "../css/oneBedroom.css"
import '../css/typography.css'


function TourKitchen() {
    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [selectedSofa, setSelectedSofa] = useState(null)
    const [selectedSideChair, setSelectedSideChair] = useState(null)
    const [selectedCoffee, setSelectedCoffee] = useState(null)
    const [selectedNormal, setSelectedNormal] = useState(false);
    const [selectedNormalChair, setSelectedNormalChair] = useState(null);
    const [selectedNormalCoffee, setSelectedNormalCoffee] = useState(null)


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

    const sofaAdd = (fName, fImage, fCategory) => {
        setSelectedSofa({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const chairAdd = (fName, fImage, fCategory) => {
        setSelectedSideChair({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const highAdd = (fName, fImage, fCategory) => {
        setSelectedCoffee({name: fName, image: fImage, category: fCategory, quantity: 1})
    }



    const addF = async () => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => selectedSofa?.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...selectedSofa, 
                quantity: 1,
            };
            newCart.push(itemInCart);
        };

        let chairInCart = newCart.find(
            (item) => selectedSideChair?.name === item.name
        );
        if (chairInCart) {
            chairInCart.quantity++;
        } else {
            chairInCart = {
                ...selectedSideChair, 
                quantity: 1,
            };
            newCart.push(chairInCart);
        };

        let coffeeInCart = newCart.find(
            (item) => selectedCoffee?.name === item.name
        );
        if (coffeeInCart) {
            coffeeInCart.quantity++;
        } else {
            coffeeInCart = {
                ...selectedCoffee, 
                quantity: 1,
            };
            newCart.push(coffeeInCart);
        };

        await setCart(newCart);
        history.push('/tour-exterior')
    }

    const goBack = () => {
        history.push('/tour-select')
    }



    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    

    return (
        <div className='one-b-main-div'>

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>Sala</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>


        <p>Selecciona el sillón:</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "SOFAS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <TourCard
                name={filteredFurniture.name.en} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size.es}
                selectedProduct={selectedNormal}
                normalProductAdd={() => {
                    sofaAdd(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormal(i)
                }}
                />
            ))}
        </div>

        <p>Selecciona las sillas de comedor:</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "SIDE CHAIRS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <TourCard
                name={filteredFurniture.name.en} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size.es}
                selectedProduct={selectedNormalChair}
                normalProductAdd={() => {
                    chairAdd(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormalChair(i)
                }}
                />
            ))}
        </div>

        <p>Selecciona los bancos de cocina:</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "COFFEE TABLES" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <TourCard
                name={filteredFurniture.name.en} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size.es}
                selectedProduct={selectedNormalCoffee}
                normalProductAdd={() => {
                    highAdd(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormalCoffee(i)
                }}
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

export default TourKitchen
