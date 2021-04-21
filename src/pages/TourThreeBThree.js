import React, { useContext, useEffect, useState, useRef } from 'react'
import ThirdBedCard from "../components/products/thirdBedCard"
import TourCard from '../components/products/tourCard'
import ThirdNightstandCard from "../components/products/thirdNightstandCard"
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {ThirdBedContext} from "../productsContext/ThirdBedContext"
import {ThirdNightstandContext} from "../productsContext/ThirdNightstandContext"
import {useHistory} from "react-router-dom"
import { TransCtx } from "../hooks/useTrans"



function TourThreeB() {
    const {t} = useContext(TransCtx)

    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [thirdBed, setThirdBed] = useContext(ThirdBedContext);
    const [thirdNightstand, setThirdNightstand] = useContext(ThirdNightstandContext);
    const [bedThree, setBedThree] = useState(null)
    const [nightstandThree, setNightstandThree] = useState(null);
    const [selectedNight, setSelectedNight] = useState(false);
    const [selectedTVStand, setSelectedTVStand] = useState(null);
    const [selected, setSelected] = useState(false);
    const [selectedNormal, setSelectedNormal] = useState(false);

    const goToNightstandRef = useRef(null);
    const goToTVRef = useRef(null);
    const continueRef = useRef(null);

    let history = useHistory();

    const addToCartBed = (fName, fImage, fCategory) => {
        setBedThree({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const addToCartNight = (fName, fImage, fCategory) => {
        setNightstandThree({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    useEffect(() => {
        console.log('putamadre', selectedTVStand)
    }, [])

    const addF = async () => {

            let newCart = [...cart];
            let itemInCart = newCart.find(
                (item) => selectedTVStand?.name === item.name
            );
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                itemInCart = {
                    ...selectedTVStand, 
                    quantity: 1,
                };
                newCart.push(itemInCart);
            };
            setCart(newCart);
        

        await setThirdBed(bedThree)
        await setThirdNightstand(nightstandThree)
        history.push('/tour-kitchen')
    }

    const normalAdd = (fName, fImage, fCategory) => {
        setSelectedTVStand({name: fName, image: fImage, category: fCategory, quantity: 1})
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
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

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

    const goToNightstand= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const goToTV= (id) =>{
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
                <h1>Tercera Recámara</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>   


        <p>Selecciona las camas:</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "BEDS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <ThirdBedCard 
                name={filteredFurniture.name.es} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size.es}
                selectedProduct={selected}
                onSelectImage={() => {
                    addToCartBed(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en);
                    setSelected(i);
                    goToNightstand(goToNightstandRef);
                }}
                />
            ))}
            <div></div>
        </div>

        <p>Selecciona los burós:</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "NIGHTSTANDS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <ThirdNightstandCard 
                name={filteredFurniture.name.es} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                idx={i}
                image={filteredFurniture.image}
                description={filteredFurniture.description.es}
                material={filteredFurniture.material.es}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size.es}
                selectedProduct={selectedNight}
                onSelectImage={() => {
                    addToCartNight(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNight(i);
                    goToTV(goToTVRef);
                }}
                />
            ))}
            <div ref={goToNightstandRef}></div>
        </div>

        <p>Selecciona los muebles de TV:</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "TV STANDS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                    normalAdd(filteredFurniture.name.es, filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormal(i);
                    goToContinue(continueRef);
                }}
                />
            ))}
            <div ref={goToTVRef}></div>
        </div>


        <div className='one-bedroom-buttons-div'>
                <button className='one-bedroom-cancel-button' onClick={goBack}>Atrás</button>
                <button className='one-bedroom-continue-button' onClick={addF}>Continuar</button> 
        </div>

            <div ref={continueRef}></div>
        </div>

        
    )
}

export default TourThreeB
