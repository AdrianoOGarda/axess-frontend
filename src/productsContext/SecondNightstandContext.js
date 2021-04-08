import React, { useState} from "react";

const secondNightstandFromLocalStorage = JSON.parse(localStorage.getItem("secondNightstand") || "{}")

export const SecondNightstandContext = React.createContext();

export const SecondNightstandProvider = (props) => {
    const [secondNightstand, setSecondNightstand] = useState(secondNightstandFromLocalStorage);

    return (
        <SecondNightstandContext.Provider value={[secondNightstand, setSecondNightstand]}>
            {props.children}
        </SecondNightstandContext.Provider>
    )
}