import React, {useState, useEffect, useContext} from 'react'
import { Select, InputNumber } from 'antd';
import { Link } from "react-router-dom"
import "../css/tourConfig.css"
import "../css/typography.css"
import useTrans, { TransCtx } from "../hooks/useTrans"

const { Option } = Select;


function TourConfig() {
    const {t} = useContext(TransCtx)

    const [bedrooms, setBedrooms] = useState(null);

    function handleChangeProject(value) {
        console.log(`selected ${value}`);
    }

    function onChangeBedrooms(value) {
        setBedrooms(value);
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <>

        <div className="tour-config-title-main-div">
            <div className="tour-config-title-div">
                <div className="tour-config-divider"></div>
                <h1>{t.tourConfig.title}</h1>
                <div className="tour-config-divider"></div>
            </div>
        </div> 

        <div className="tour-config-main-div">

            <div className='tour-config-paragraph-div'>
                <p className='tour-config-paragraph'>{t.tourConfig.depto}</p>
                <Select bordered={false} defaultValue="AWA" onChange={handleChangeProject} className='tour-config-project-select'>
                    <Option value="AWA">AWA</Option>
                </Select>
            </div>

            <div className='tour-config-paragraph-div'>
                <p className='tour-config-paragraph'>{t.tourConfig.question}</p>
                <InputNumber defaultValue='N' min={1} max={3} onChange={onChangeBedrooms} className='tour-config-bedrooms-select' />
            </div>

            <div className='tour-config-buttons-div'>
                <button className='tour-config-cancel-button'>{t.tourConfig.cancelBtn}</button>
                {bedrooms === 1 && (
                    <div className='tour-config-continue-button'>
                        <Link to="/one-bedroom" style={{color: '#8c857e'}}>{t.tourConfig.continueBtn}</Link>
                    </div>
                )}
                {bedrooms === 2 && (
                    <div className='tour-config-continue-button'>
                        <Link to="/two-bedrooms-first" style={{color: '#8c857e'}}>{t.tourConfig.continueBtn}</Link>
                    </div>                )}
                {bedrooms === 3 && (
                    <div className='tour-config-continue-button'>
                        <Link to="/three-bedrooms-first" style={{color: '#8c857e'}}>{t.tourConfig.continueBtn}</Link>
                    </div>                )}       
            </div>

        </div>
        </>
    )
}

export default TourConfig
