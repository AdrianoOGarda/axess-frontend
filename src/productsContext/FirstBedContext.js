import React, { useState} from "react";

const firstBedFromLocalStorage = JSON.parse(localStorage.getItem("firstBed") || "{}")

export const FirstBedContext = React.createContext();

export const FirstBedProvider = (props) => {
    const [firstBed, setFirstBed] = useState(firstBedFromLocalStorage);

    return (
        <FirstBedContext.Provider value={[firstBed, setFirstBed]}>
            {props.children}
        </FirstBedContext.Provider>
    )
}