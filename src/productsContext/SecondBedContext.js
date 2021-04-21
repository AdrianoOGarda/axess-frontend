import React, { useState, useEffect } from "react";

const secondBedFromLocalStorage = JSON.parse(localStorage.getItem("secondBed") || "{}")

export const SecondBedContext = React.createContext();

export const SecondBedProvider = (props) => {
    const [secondBed, setSecondBed] = useState(secondBedFromLocalStorage);
    
    useEffect(() => {
        localStorage.setItem('secondBed', JSON.stringify(secondBed))
    }, [secondBed])

    return (
        <SecondBedContext.Provider value={[secondBed, setSecondBed]}>
            {props.children}
        </SecondBedContext.Provider>
    )
}