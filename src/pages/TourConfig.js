import React, {useState} from 'react'
import { Select, InputNumber } from 'antd';
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
        <div className="tour-config-main-div">

            <div className="tour-config-title-div">
                <div className="tour-config-divider"></div>
                <h1>Recorrido guiado</h1>
                <div className="tour-config-divider"></div>
            </div>

            <div>
                <p>Selecciona el proyecto al que pertenece tu departamento</p>
                <Select defaultValue="AWA" onChange={handleChangeProject} className='tour-config-project-select'>
                    <Option value="AWA">AWA</Option>
                </Select>
            </div>

            <div>
                <p>¿Cuántas recámaras tiene tu departamento?</p>
                <InputNumber min={1} max={3} onChange={onChangeBedrooms} className='tour-config-bedrooms-select' />
            </div>

            <div>
                <button>Cancelar</button>
                <button>Continuar</button>
            </div>

        </div>
    )
}

export default TourConfig
