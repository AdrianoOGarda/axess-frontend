import React, { useState} from "react";

const decoFromLocalStorage = JSON.parse(localStorage.getItem("decorativo") || false)

export const DecoContext = React.createContext();

export const DecoProvider = (props) => {
    const [deco, setDeco] = useState(decoFromLocalStorage);

    return (
        <DecoContext.Provider value={[deco, setDeco]}>
            {props.children}
        </DecoContext.Provider>
    )
}