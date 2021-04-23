import React, { useContext, useEffect, useState, useRef } from 'react'
import TourCard from '../components/products/tourCard'
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {Link, useHistory} from 'react-router-dom'
import { TransCtx } from "../hooks/useTrans"
import "../css/oneBedroom.css"
import '../css/typography.css'


function TourKitchen() {
    const {t} = useContext(TransCtx)

    const [furnitures, setFurnitures] = useState(null);
    const [cart, setCart] = useContext(CartContext);
    const [selectedSofa, setSelectedSofa] = useState(null);
    const [selectedSideChair, setSelectedSideChair] = useState(null);
    const [selectedCoffee, setSelectedCoffee] = useState(null);
    const [selectedTV, setSelectedTV] = useState(null);
    const [selectedNormal, setSelectedNormal] = useState(false);
    const [selectedNormalChair, setSelectedNormalChair] = useState(null);
    const [selectedNormalCoffee, setSelectedNormalCoffee] = useState(null);
    const [selectedNormalTV, setSelectedNormalTV] = useState(null)


    const goToChairRef = useRef(null);
    const goToCoffeeRef = useRef(null);
    const goToTVRef = useRef(null);
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

    const sofaAdd = (fName, fImage, fCategory) => {
        setSelectedSofa({name: fName, image: fImage, category: fCategory, quantity: 1})
    }
    const chairAdd = (fName, fImage, fCategory) => {
        setSelectedSideChair({name: fName, image: fImage, category: fCategory, quantity: 1})
    }
    const highAdd = (fName, fImage, fCategory) => {
        setSelectedCoffee({name: fName, image: fImage, category: fCategory, quantity: 1})
    }
    const tvAdd = (fName, fImage, fCategory) => {
        setSelectedTV({name: fName, image: fImage, category: fCategory, quantity: 1})
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

        let tvInCart = newCart.find(
            (item) => selectedTV?.name === item.name
        );
        if (tvInCart) {
            tvInCart.quantity++;
        } else {
            tvInCart = {
                ...selectedTV, 
                quantity: 1,
            };
            newCart.push(tvInCart);
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

    const goToChair= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const goToCoffee= (id) =>{
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
                <h1>{t.tourLiving.title}</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

        {furnitures?.filter(furniture => furniture?.category?.en === "SOFAS" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourLiving.sofa}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "SOFAS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <TourCard
                name={filteredFurniture.name[t.lang]} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description[t.lang]}
                material={filteredFurniture.material[t.lang]}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size[t.lang]}
                selectedProduct={selectedNormal}
                normalProductAdd={() => {
                    sofaAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormal(i);
                    goToChair(goToChairRef);
                }}
                />
            ))}
            <div></div>
        </div>

        {furnitures?.filter(furniture => furniture?.category?.en === "SIDE CHAIRS" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourLiving.sideChairs}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "SIDE CHAIRS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <TourCard
                name={filteredFurniture.name[t.lang]} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description[t.lang]}
                material={filteredFurniture.material[t.lang]}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size[t.lang]}
                selectedProduct={selectedNormalChair}
                normalProductAdd={() => {
                    chairAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormalChair(i);
                    goToCoffee(goToCoffeeRef);
                }}
                />
            ))}
            <div ref={goToChairRef}></div>
        </div>


        {furnitures?.filter(furniture => furniture?.category?.en === "COFFEE TABLES" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourLiving.sideTables}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "COFFEE TABLES" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <TourCard
                name={filteredFurniture.name[t.lang]} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description[t.lang]}
                material={filteredFurniture.material[t.lang]}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size[t.lang]}
                selectedProduct={selectedNormalCoffee}
                normalProductAdd={() => {
                    highAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormalCoffee(i);
                    goToTV(goToTVRef);
                }}
                />
            ))}
            <div ref={goToCoffeeRef}></div>
        </div>

        {furnitures?.filter(furniture => furniture?.category?.en === "TV STANDS" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourLiving.tv}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "TV STANDS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <TourCard
                name={filteredFurniture.name[t.lang]} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description[t.lang]}
                material={filteredFurniture.material[t.lang]}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size[t.lang]}
                selectedProduct={selectedNormalTV}
                normalProductAdd={() => {
                    tvAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormalTV(i);
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

export default TourKitchen
