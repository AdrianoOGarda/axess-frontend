import React, { useState} from "react";

const hotFromLocalStorage = JSON.parse(localStorage.getItem("hoteleria") || false)

export const HotContext = React.createContext();

export const HotProvider = (props) => {
    const [hot, setHot] = useState(hotFromLocalStorage);

    return (
        <HotContext.Provider value={[hot, setHot]}>
            {props.children}
        </HotContext.Provider>
    )
}