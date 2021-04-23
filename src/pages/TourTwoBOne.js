import React, { useContext, useEffect, useState, useRef } from 'react'
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
import { TransCtx } from "../hooks/useTrans"


function TourTwoBOne() {
    const {t} = useContext(TransCtx)

    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [firstBed, setFirstBed] = useContext(FirstBedContext);
    const [firstNightstand, setFirstNightstand] = useContext(FirstNightstandContext);
    const [bedOne, setBedOne] = useState(null)
    const [nightstandOne, setNightstandOne] = useState(null)
    const [selectedTVStand, setSelectedTVStand] = useState(null);
    const [selectedNormal, setSelectedNormal] = useState(false);
    const [selectedNight, setSelectedNight] = useState(false);
    const [selected, setSelected] = useState(false);

    const goToNightstandRef = useRef(null);
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

    const normalAdd = (fName, fImage, fCategory) => {
        setSelectedTVStand({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

    const addToCart = (fName, fImage, fCategory) => {
        setBedOne({name: fName, image: fImage, category: fCategory, quantity: 1})
    }

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

        await setFirstBed(bedOne)
        await setFirstNightstand(nightstandOne)
        
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

    useEffect(() => {
        console.log('settingBedOne', bedOne)
    }, [bedOne])
    useEffect(() => {
        console.log('settingFirstBed', firstBed)
    }, [addF])
    useEffect(() => {
        console.log('settingNightstandOne', nightstandOne)
    }, [nightstandOne])
    useEffect(() => {
        console.log('settingFirstNightstand', firstNightstand)
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
                <h1>{t.tourBedroom.title}</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>

        <p>{t.tourBedroom.textBed}</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "BEDS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <FirstBedCard 
                name={filteredFurniture.name[t.lang]} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description[t.lang]}
                material={filteredFurniture.material[t.lang]}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size[t.lang]}
                selectedProduct={selected}
                onSelectImage={() => {
                    addToCart(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en);
                    setSelected(i);
                    goToNightstand(goToNightstandRef);
                }}                
                />
            ))}
            <div></div>
        </div>  

        <p>{t.tourBedroom.textNight}</p>
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "NIGHTSTANDS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
                <FirstNightstandCard 
                name={filteredFurniture.name[t.lang]} 
                key={filteredFurniture._id} 
                price={filteredFurniture.price} 
                image={filteredFurniture.image}
                idx={i}
                description={filteredFurniture.description[t.lang]}
                material={filteredFurniture.material[t.lang]}
                category={filteredFurniture.category.en}
                size={filteredFurniture.size[t.lang]}
                selectedProduct={selectedNight}
                onSelectImage={() => {
                    addToCartNight(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNight(i);
                    goToTV(goToTVRef);
                }}
                />
            ))}
            <div ref={goToNightstandRef}></div>
        </div>

        <p>{t.tourBedroom.textTV}</p>
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
                selectedProduct={selectedNormal}
                normalProductAdd={() => {
                    normalAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en);
                    setSelectedNormal(i);
                    goToContinue(continueRef);
                }}
                />
            ))}
            <div ref={goToTVRef}></div>
        </div>

        <div className='one-bedroom-buttons-div'>
                <button className='one-bedroom-cancel-button' onClick={goBack}>{t.tourBedroom.backBtn}</button>
                <button className='one-bedroom-continue-button' onClick={addF}>{t.tourBedroom.continueBtn}</button> 
        </div>

            <div ref={continueRef}></div>
        </div>

        
    )
}

export default TourTwoBOne