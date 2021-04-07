import React, { useState} from "react";

const firstNightstandFromLocalStorage = JSON.parse(localStorage.getItem("firstNightstand") || "{}")

export const FirstNightstandContext = React.createContext();

export const FirstNightstandProvider = (props) => {
    const [firstNightstand, setFirstNightstand] = useState(firstNightstandFromLocalStorage);

    return (
        <FirstNightstandContext.Provider value={[firstNightstand, setFirstNightstand]}>
            {props.children}
        </FirstNightstandContext.Provider>
    )
}