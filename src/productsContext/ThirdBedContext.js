import React, { useState, useEffect } from "react";

const thirdBedFromLocalStorage = JSON.parse(localStorage.getItem("thirdBed") || "{}")

export const ThirdBedContext = React.createContext();

export const ThirdBedProvider = (props) => {
    const [thirdBed, setThirdBed] = useState(thirdBedFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('thirdBed', JSON.stringify(thirdBed))
    }, [thirdBed])

    return (
        <ThirdBedContext.Provider value={[thirdBed, setThirdBed]}>
            {props.children}
        </ThirdBedContext.Provider>
    )
}