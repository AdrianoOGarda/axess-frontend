import React, {useState} from 'react'
import { Select, InputNumber } from 'antd';
import { Link } from "react-router-dom"
import "../css/tourConfig.css"
import "../css/typography.css"

const { Option } = Select;


function TourConfig() {

    const [bedrooms, setBedrooms] = useState(null);

    function handleChangeProject(value) {
        console.log(`selected ${value}`);
    }

    function onChangeBedrooms(value) {
        setBedrooms(value);
    }

    return (
        <>

        <div className="tour-config-title-main-div">
            <div className="tour-config-title-div">
                <div className="tour-config-divider"></div>
                <h1>Recorrido guiado</h1>
                <div className="tour-config-divider"></div>
            </div>
        </div> 

        <div className="tour-config-main-div">

            <div className='tour-config-paragraph-div'>
                <p className='tour-config-paragraph'>Selecciona el proyecto al que pertenece tu departamento</p>
                <Select defaultValue="AWA" onChange={handleChangeProject} className='tour-config-project-select'>
                    <Option value="AWA">AWA</Option>
                </Select>
            </div>

            <div className='tour-config-paragraph-div'>
                <p className='tour-config-paragraph'>¿Cuántas recámaras tiene tu departamento?</p>
                <InputNumber defaultValue='N' min={1} max={3} onChange={onChangeBedrooms} className='tour-config-bedrooms-select' />
            </div>

            <div className='tour-config-buttons-div'>
                <button className='tour-config-cancel-button'>Cancelar</button>
                {bedrooms === 1 && (
                    <div className='tour-config-continue-button'>
                        <Link to="/one-bedroom" style={{color: '#8c857e'}}>Continuar</Link>
                    </div>
                )}
                {bedrooms === 2 && (
                    <div className='tour-config-continue-button'>
                        <Link to="/one-bedroom" style={{color: '#8c857e'}}>Continuar</Link>
                    </div>                )}
                {bedrooms === 3 && (
                    <div className='tour-config-continue-button'>
                        <Link to="/one-bedroom" style={{color: '#8c857e'}}>Continuar</Link>
                    </div>                )}       
            </div>

        </div>
        </>
    )
}

export default TourConfig
