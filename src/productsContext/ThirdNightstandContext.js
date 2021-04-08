import React, { useState} from "react";

const thirdNightstandFromLocalStorage = JSON.parse(localStorage.getItem("thirdNightstand") || "{}")

export const ThirdNightstandContext = React.createContext();

export const ThirdNightstandProvider = (props) => {
    const [thirdNightstand, setThirdNightstand] = useState(thirdNightstandFromLocalStorage);

    return (
        <ThirdNightstandContext.Provider value={[thirdNightstand, setThirdNightstand]}>
            {props.children}
        </ThirdNightstandContext.Provider>
    )
}