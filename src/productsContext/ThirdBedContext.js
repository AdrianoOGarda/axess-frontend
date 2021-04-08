import React, { useState} from "react";

const thirdBedFromLocalStorage = JSON.parse(localStorage.getItem("thirdBed") || "{}")

export const ThirdBedContext = React.createContext();

export const ThirdBedProvider = (props) => {
    const [thirdBed, setThirdBed] = useState(thirdBedFromLocalStorage);

    return (
        <ThirdBedContext.Provider value={[thirdBed, setThirdBed]}>
            {props.children}
        </ThirdBedContext.Provider>
    )
}