import React, { useState} from "react";

const equipFromLocalStorage = JSON.parse(localStorage.getItem("equipamiento") || false)

export const EquipContext = React.createContext();

export const EquipProvider = (props) => {
    const [equip, setEquip] = useState(equipFromLocalStorage);

    return (
        <EquipContext.Provider value={[equip, setEquip]}>
            {props.children}
        </EquipContext.Provider>
    )
}