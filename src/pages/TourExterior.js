import React, { useContext, useEffect, useState, useRef } from 'react'
import TourCard from '../components/products/tourCard'
import { getFurnitures } from "../services/furnitures"
import {CartContext} from "../CartContext"
import {Link, useHistory} from 'react-router-dom'
import { TransCtx } from "../hooks/useTrans"
import "../css/oneBedroom.css"
import '../css/typography.css'


function TourExterior() {
    const {t} = useContext(TransCtx)

    const [furnitures, setFurnitures] = useState(null)
    const [cart, setCart] = useContext(CartContext);
    const [selectedDiningTable, setSelectedDiningTable] = useState(null)
    const [selectedDiningChair, setSelectedDiningChair] = useState(null)
    const [selectedSofa, setSelectedSofa] = useState(null);
    const [selectedTable, setSelectedTable] = useState(null);
    const [selectedLounge, setSelectedLounge] = useState(null);
    const [selectedSunbed, setSelectedSunbed] = useState(null);
    const [selectedNormal, setSelectedNormal] = useState(false);
    const [selectedNormalChair, setSelectedNormalChair] = useState(null);
    const [selectedNormalSofa, setSelectedNormalSofa] = useState(null);
    const [selectedNormalTable, setSelectedNormalTable] = useState(null);
    const [selectedNormalLounge, setSelectedNormalLounge] = useState(null);
    const [selectedNormalSunbed, setSelectedNormalSunbed] = useState(null);

    const goToChairRef = useRef(null);
    const goToSofaRef = useRef(null);
    const goToTableRef = useRef(null);
    const goToLoungeRef = useRef(null);
    const goToSunbedRef = useRef(null);
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

    const diningAdd = (fName, fImage, fCategory, fDescription, fPrice) => {
        setSelectedDiningTable({name: fName, image: fImage, category: fCategory, quantity: 1, description: fDescription, price: fPrice})
    }
    const chairAdd = (fName, fImage, fCategory, fDescription, fPrice) => {
        setSelectedDiningChair({name: fName, image: fImage, category: fCategory, quantity: 1, description: fDescription, price: fPrice})
    }
    const sofaAdd = (fName, fImage, fCategory, fDescription, fPrice) => {
        setSelectedSofa({name: fName, image: fImage, category: fCategory, quantity: 1, description: fDescription, price: fPrice})
    }
    const tableAdd = (fName, fImage, fCategory, fDescription, fPrice) => {
        setSelectedTable({name: fName, image: fImage, category: fCategory, quantity: 1, description: fDescription, price: fPrice})
    }
    const loungeAdd = (fName, fImage, fCategory, fDescription, fPrice) => {
        setSelectedLounge({name: fName, image: fImage, category: fCategory, quantity: 1, description: fDescription, price: fPrice})
    }
    const sunbedAdd = (fName, fImage, fCategory, fDescription, fPrice) => {
        setSelectedSunbed({name: fName, image: fImage, category: fCategory, quantity: 1, description: fDescription, price: fPrice})
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

        let sofaInCart = newCart.find(
            (item) => selectedSofa?.name === item.name
        );
        if (sofaInCart) {
            sofaInCart.quantity++;
        } else {
            sofaInCart = {
                ...selectedSofa, 
                quantity: 1,
            };
            newCart.push(sofaInCart);
        };

        let tableInCart = newCart.find(
            (item) => selectedTable?.name === item.name
        );
        if (tableInCart) {
            tableInCart.quantity++;
        } else {
            tableInCart = {
                ...selectedTable, 
                quantity: 1,
            };
            newCart.push(tableInCart);
        };

        let loungeInCart = newCart.find(
            (item) => selectedLounge?.name === item.name
        );
        if (loungeInCart) {
            loungeInCart.quantity++;
        } else {
            loungeInCart = {
                ...selectedLounge, 
                quantity: 1,
            };
            newCart.push(loungeInCart);
        };

        let sunbedInCart = newCart.find(
            (item) => selectedSunbed?.name === item.name
        );
        if (sunbedInCart) {
            sunbedInCart.quantity++;
        } else {
            sunbedInCart = {
                ...selectedSunbed, 
                quantity: 1,
            };
            newCart.push(sunbedInCart);
        };

        await setCart(newCart);
        history.push('/cart-list')
    }

    const goBack = () => {
        history.push('/tour-select')
    }



    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);


    const goToChair= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const goToSofa= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const goToTable= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const goToLounge= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const goToSunbed= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const goToContinue= (id) =>{
        id.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    

    //SOFAS DE EXTERIOR

    return (
        <div className='one-b-main-div'>

        <div className='one-bedroom-title-div'>
            <div className='one-bedroom-title-inside-div'>
                <div className='one-bedroom-title-divider'></div>
                <h1>Exterior</h1>
                <div className='one-bedroom-title-divider'></div>
            </div> 
        </div>


        {furnitures?.filter(furniture => furniture?.category?.en === "OUTDOOR DINING TABLES" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourExterior.table}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "OUTDOOR DINING TABLES" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                    diningAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en, filteredFurniture.description[t.lang], filteredFurniture.price);
                    setSelectedNormal(i);
                    goToChair(goToChairRef);
                }}
                />
            ))}
            <div></div>
        </div>
        

        {furnitures?.filter(furniture => furniture?.category?.en === "OUTDOOR CHAIRS" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourExterior.chairs}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "OUTDOOR CHAIRS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                    chairAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en, filteredFurniture.description[t.lang], filteredFurniture.price);
                    setSelectedNormalChair(i);
                    goToLounge(goToLoungeRef);
                }}
                />
            ))}
            <div ref={goToChairRef}></div>
        </div>

        
        {/* {furnitures?.filter(furniture => furniture?.category?.en === "OUTDOOR SOFAS" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourExterior.sofa}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "OUTDOOR SOFAS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                selectedProduct={selectedNormalSofa}
                normalProductAdd={() => {
                    sofaAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en, filteredFurniture.description[t.lang], filteredFurniture.price);
                    setSelectedNormalSofa(i);
                    goToTable(goToTableRef)
                }}
                />
            ))}
            <div ref={goToSofaRef}></div>
        </div> */}


        {/* {furnitures?.filter(furniture => furniture?.category?.en === "OUTDOOR SIDE TABLES" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourExterior.sideTable}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "OUTDOOR SIDE TABLES" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                selectedProduct={selectedNormalTable}
                normalProductAdd={() => {
                    tableAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en, filteredFurniture.description[t.lang], filteredFurniture.price);
                    setSelectedNormalTable(i);
                    goToLounge(goToLoungeRef)
                }}
                />
            ))}
            <div ref={goToTableRef}></div>
        </div> */}


        {furnitures?.filter(furniture => furniture?.category?.en === "LOUNGE CHAIRS" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourExterior.lounge}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "LOUNGE CHAIRS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                selectedProduct={selectedNormalLounge}
                normalProductAdd={() => {
                    loungeAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en, filteredFurniture.description[t.lang], filteredFurniture.price);
                    setSelectedNormalLounge(i);
                    goToContinue(continueRef);
                }}
                />
            ))}
            <div ref={goToLoungeRef}></div>
        </div>

        {/* {furnitures?.filter(furniture => furniture?.category?.en === "SUNBEDS" && furniture?.project === "AWA").length > 0 ? (
            <p>{t.tourExterior.sunbed}</p>
        ): (
            <></>
        )}
        <div className='one-b-beds-div'>
        {furnitures?.filter(furniture => furniture?.category?.en === "SUNBEDS" && furniture?.project === "AWA").map((filteredFurniture, i) => (
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
                selectedProduct={selectedNormalSunbed}
                normalProductAdd={() => {
                    sunbedAdd(filteredFurniture.name[t.lang], filteredFurniture.image, filteredFurniture.category.en, filteredFurniture.description[t.lang], filteredFurniture.price);
                    setSelectedNormalSunbed(i);
                    goToContinue(continueRef);
                }}
                />
            ))}
            <div ref={goToSunbedRef}></div>
        </div>
         */}

        <div className='one-bedroom-buttons-div'>
                <button className='one-bedroom-cancel-button' onClick={goBack}>{t.tourBedroom.backBtn}</button>
                <button className='one-bedroom-continue-button' onClick={addF}>{t.tourBedroom.continueBtn}</button> 
        </div>
            
            <div ref={continueRef}></div>
        </div>

        
    )
}

export default TourExterior
