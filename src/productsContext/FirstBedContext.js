import React, { useState, useEffect} from "react";

const firstBedFromLocalStorage = JSON.parse(localStorage.getItem("firstBed") || "{}")

export const FirstBedContext = React.createContext();

export const FirstBedProvider = (props) => {
    const [firstBed, setFirstBed] = useState(firstBedFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('firstBed', JSON.stringify(firstBed))
    }, [firstBed])

    return (
        <FirstBedContext.Provider value={[firstBed, setFirstBed]}>
            {props.children}
        </FirstBedContext.Provider>
    )
}