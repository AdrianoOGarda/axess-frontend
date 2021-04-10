import React, {useState, useEffect} from 'react'
import { AutoComplete} from "antd"
import { SearchOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom'
import "./header/header.css"
import useWindowSize from "../hooks/useWindowSize"


const SearchBar = () => {

let history = useHistory();
const windowSize = useWindowSize(); 

const options = [
    { value: 'Camas' },
    { value: 'Burós' },
    { value: 'Muebles de TV'},
    { value: 'Comedores' },
    { value: 'Sillas para Comedor' },
    { value: 'Bancos de Cocina'},
    { value: 'Sofás' },
    { value: 'Sillas Laterales' },
    { value: 'Mesas de Centro' },
    { value: 'Credenzas'},
    { value: 'Mesas Laterales de Exterior' },
    { value: 'Sillas de Exterior' },
    { value: 'Comedores de Exterior' },
    { value: 'Sillas Lounge'},
    { value: 'Camastros' },
    { value: 'Salas de Exterior' },
];


const onSelect = (value) => {
    if(value === 'Camas'){
        history.push('/beds')
    }
    else if (value === 'Burós') {
        history.push('/nightstands')
    }
    else if (value === 'Muebles de TV') {
        history.push('/tv-stands')
    }
    else if (value === 'Comedores') {
        history.push('/dining-tables')
    }
    else if (value === 'Sillas para Comedor') {
        history.push('/dining-chairs')
    }
    else if (value === 'Bancos de Cocina') {
        history.push('/high-chairs')
    }
    else if (value === 'Sofás') {
        history.push('/sofas')
    }
    else if (value === 'Sillas Laterales') {
        history.push('/side-chairs')
    }
    else if (value === 'Mesas de Centro') {
        history.push('/coffee-tables')
    }
    else if (value === 'Credenzas') {
        history.push('/credenzas')
    }
    else if (value === 'Mesas Laterales de Exterior') {
        history.push('/outdoor-side-tables')
    }
    else if (value === 'Sillas de Exterior') {
        history.push('/outdoor-chairs')
    }
    else if (value === 'Comedores de Exterior') {
        history.push('/outdoor-dining-tables')
    }
    else if (value === 'Sillas Lounge') {
        history.push('/lounge-chairs')
    }
    else if (value === 'Camastros') {
        history.push('/sunbeds')
    }
    else if (value === 'Slas de Exterior') {
        history.push('/outdoor-sofas')
    }
};

    return (windowSize > 480) ? (
        <AutoComplete
        placeholder={<SearchOutlined style={{fontSize: '1.8vw', position: 'absolute', top: '25%', left: '1.5%', color: 'black'}} />} 
        className="antd-header-autocomplete"
        options={options}
        filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSelect={onSelect}
        dropdownClassName='searchbar-dropdown'
        />
            ) :
            (
        <AutoComplete
        placeholder={<SearchOutlined style={{fontSize: '5vw', position: 'absolute', top: '20%', left: '1.5%', color: 'black'}} />} 
        className="antd-header-autocomplete"
        options={options}
        filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSelect={onSelect}
        dropdownClassName='searchbar-dropdown'
        />
            )
}

export default SearchBar
