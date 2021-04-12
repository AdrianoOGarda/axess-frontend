import React, { useContext, useEffect, useState, useRef } from 'react'
import TourCard from '../components/products/tourCard'
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {Link, useHistory} from 'react-router-dom'
import "../css/oneBedroom.css"
import '../css/typography.css'


function TourKitchen() {
    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [selectedDiningTable, setSelectedDiningTable] = useState(null)
    const [selectedDiningChair, setSelectedDiningChair] = useState(null)
    const [selectedHigh, setSelectedHigh] = useState(null)
    const [selectedNormal, setSelectedNormal] = useState(false);
    const [selectedNormalChair, setSelectedNormalChair] = useState(null);
    const [selectedNormalHigh, setSelectedNormalHigh] = useState(null);

    const goToChairRef = useRef(null);
    const goToHighRef = useRef(null);
    const continueRef = useRef(null);

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
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const diningAdd = (fName, fImage, fCategory) => {
        setSelectedDiningTable({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const chairAdd = (fName, fImage, fCategory) => {
        setSelectedDiningChair({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const highAdd = (fName, fImage, fCategory) => {
        setSelectedHigh({name: fName, image: fImage, category: fCategory, quantity: 1})
    }



    const addF = async () => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => selectedDiningTable?.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...selectedDiningTable, 
                quantity: 1,
            };
            newCart.push(itemInCart);
        };

        let chairInCart = newCart.find(
            (item) => selectedDiningChair?.name === item.name
        );
        if (chairInCart) {
            chairInCart.quantity++;
        } else {
            chairInCart = {
                ...selectedDiningChair, 
                quantity: 1,
            };
            newCart.push(chairInCart);
        };

        let highInCart = newCart.find(
            (item) => selectedHigh?.name === item.name
        );
        if (highInCart) {
            highInCart.quantity++;
        } else {
            highInCart = {
                ...selectedHigh, 
                quantity: 1,
            };
            newCart.push(highInCart);
        };

        await setCart(newCart);
        history.push('/tour-living')
    }

    const goBack = () => {
        history.push('/tour-select')
    }



    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const goToChair= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const goToHigh= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const goToContinue= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    

    return (
        <div className='one-b-main-div'>

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>Cocina & Comedor</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

        {furnitures?.filter(furniture => furniture?.category?.en === "DINING TABLES" && furniture?.project === "AWA").length > 0 ? (
            <p>Selecciona la mesa de comedor:</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "DINING TABLES" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                    diningAdd(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormal(i);
                    goToChair(goToChairRef);
                }}
                />
            ))}
            <div></div>
        </div>
        
        {furnitures?.filter(furniture => furniture?.category?.en === "DINING CHAIRS" && furniture?.project === "AWA").length > 0 ? (
            <p>Selecciona las sillas de comedor:</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "DINING CHAIRS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                    setSelectedNormalChair(i);
                    goToHigh(goToHighRef);
                }}
                />
            ))}
            <div ref={goToChairRef}></div>
        </div>

        {furnitures?.filter(furniture => furniture?.category?.en === "HIGH CHAIRS (KITCHEN)" && furniture?.project === "AWA").length > 0 ? (
            <p>Selecciona los bancos de cocina:</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "HIGH CHAIRS (KITCHEN)" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                selectedProduct={selectedNormalHigh}
                normalProductAdd={() => {
                    highAdd(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormalHigh(i);
                    goToContinue(continueRef);
                }}
                />
            ))}
            <div ref={goToHighRef}></div>
        </div>
        

        <div className='one-bedroom-buttons-div'>
                <button className='one-bedroom-cancel-button' onClick={goBack}>Atrás</button>
                <button className='one-bedroom-continue-button' onClick={addF}>Continuar</button> 
        </div>

            <div ref={continueRef}></div>
        </div>

        
    )
}

export default TourKitchen
