import React, { useState } from "react";

const deptoFromLocalStorage = localStorage.getItem("depto") || ""

export const DeptoContext = React.createContext();

export const DeptoProvider = (props) => {
    const [deptoCon, setDeptoCon] = useState(deptoFromLocalStorage);

    return (
        <DeptoContext.Provider value={[deptoCon, setDeptoCon]}>
            {props.children}
        </DeptoContext.Provider>
    )
}