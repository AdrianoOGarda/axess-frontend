import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {updateFurniture, getFurniture} from "../services/furnitures"
import { Button, Form, Input, Select } from "antd"
import "../css/typography.css"
import "../css/editFurniture.css"

const { Option } = Select;


const EditFurniture = ({history,
    match: {
        params: { furnitureId }
    }
}) => {

    const [oneFurniture, setOneFurniture] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [nameEN, setNameEN] = useState(null);
    const [nameES, setNameES] = useState(null);
    const [descriptionEN, setDescriptionEN] = useState(null);
    const [descriptionES, setDescriptionES] = useState(null);
    const [sizeEN, setSizeEN] = useState(null);
    const [sizeES, setSizeES] = useState(null);
    const [materialEN, setMaterialEN] = useState(null);
    const [materialES, setMaterialES] = useState(null);
    const [categoryEN, setCategoryEN] = useState(null);
    const [categoryES, setCategoryES] = useState(null);
    const [project, setProject] = useState(null);
    const [price, setPrice] = useState(null);

    // const [form] = Form.useForm();

    useEffect(() => {
        async function fetchFurniture() {
            const {
                data: { furniture }
            } = await getFurniture(furnitureId)

            setOneFurniture(furniture)
        }
        fetchFurniture();
    }, [furnitureId])

    async function changeFurniture(){
        await updateFurniture(furnitureId, {
            image: imageUrl, 
            price: price,
            project: project,
            name: {
                en: nameEN,
                es: nameES
            }, 
            category: {
                en: categoryEN, 
                es: categoryES 
            }, 
            description: {
                en: descriptionEN,
                es: descriptionES
            }, 
            size: {
                en: sizeEN, 
                es: sizeES
            },
            material: {
                en: materialEN,
                es: materialES
            }
        })
        history.push('/')
    }

    async function uploadImage({ target: { files }}) {
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "w6ragv3p")
        console.log(data)

        const {
            data: { secure_url }
        } = await axios.post(
            "https://api.cloudinary.com/v1_1/axess/upload", 
            data
        )
        setImageUrl(secure_url)
    }

    const changeNameEN = (e) => {
        setNameEN(e.target.value)
    }

    console.log('yfyufiyiyfiy', project)

    const changeNameES = (e) => {
        setNameES(e.target.value)
    }

    const changeDescriptionEN = (e) => {
        setDescriptionEN(e.target.value)
    }

    const changeDescriptionES = (e) => {
        setDescriptionES(e.target.value)
    }

    const changeSizeEN = (e) => {
        setSizeEN(e.target.value)
    }

    const changeSizeES = (e) => {
        setSizeES(e.target.value)
    }

    const changeMaterialEN = (e) => {
        setMaterialEN(e.target.value)
    }

    const changeMaterialES = (e) => {
        setMaterialES(e.target.value)
    }

    // const changeCategoryEN = (value) => {
    //     setCategoryEN(value)
    // }

    // const changeCategoryES = (value) => {
    //     setCategoryES(value)
    // }


    const changeCategoryES = (e) => {
        setCategoryES(e.target.value)
    }

    const changeCategoryEN = (e) => {
        setCategoryEN(e.target.value)
    }

    const changeProject = (e) => {
        setProject(e.target.value)
    }

    const changePrice = (e) => {
        setPrice(e.target.value)
    }

    const categoriesEN = ["BEDS", "NIGHTSTANDS", "CREDENZAS", "HIGH CHAIRS (KITCHEN)", "DINING CHAIRS", "DINING TABLES", "SOFAS", "COFFEE TABLES", "SIDE CHAIRS", "TV STANDS", "OUTDOOR CHAIRS", "OUTDOOR DINING TABLES", "LOUNGE CHAIRS", "SUNBEDS", "OUTDOOR SIDE TABLES", "OUTDOOR SOFAS"]
    const categoriesES = ["CAMAS", "BUROS", "CREDENZAS", "BANCOS (DE COCINA)", "SILLAS PARA COMEDOR", "COMEDORES", "SOFAS", "MESAS DE CENTRO", "SILLAS LATERALES", "MUEBLES DE TV", "SILLAS DE EXTERIOR", "COMEDORES DE EXTERIOR", "SILLAS LOUNGE", "CAMASTROS", "MESAS LATERALES EXTERIOR", "SALAS DE EXTERIOR"]
    

    return (
        <div className="edit-form-div">

        <form onSubmit={changeFurniture} className="edit-fur-for">
            <label>Nombre (EN)</label><br />
            <input type="text" name='name EN' id='name EN' defaultValue={oneFurniture?.name.en} onChange={changeNameEN}/><br />
            <label>Nombre (ES)</label><br />
            <input type="text" id='name ES' name='name ES' defaultValue={oneFurniture?.name.es} onChange={changeNameES}/><br />
            <label>Descripción (EN)</label><br />
            <input type="text" id='description EN' name='desc EN' defaultValue={oneFurniture?.description.en} onChange={changeDescriptionEN}/><br />
            <label>Descripción (ES)</label><br />
            <input type="text" id='description ES' name='desc ES' defaultValue={oneFurniture?.description.en} onChange={changeDescriptionES}/><br />
            <label>Tamaño (EN)</label><br />
            <input type="text" id='size EN' name='size EN' defaultValue={oneFurniture?.size.en} onChange={changeSizeEN}/><br />
            <label>Tamaño (ES)</label><br />
            <input type="text" id='size ES' name='size ES' defaultValue={oneFurniture?.size.es} onChange={changeSizeES}/><br />
            <label>Material (EN)</label><br />
            <input type="text" id='material EN' name='material EN' defaultValue={oneFurniture?.material.en} onChange={changeMaterialEN}/><br />
            <label>Material (ES)</label><br />
            <input type="text" id='material ES' name='material ES' defaultValue={oneFurniture?.material.es} onChange={changeMaterialES}/><br />
            <label>Categoría (EN)</label><br />
            <select id='category EN' onChange={changeCategoryEN}>
                {categoriesEN.map((category, idx) => (
                    <option key={idx} value={category}>{category}</option>
                ))}
            </select><br />
            <label>Categoría (ES)</label><br />
            <select id='category ES' onChange={changeCategoryES}>
                {categoriesES.map((category, idx) => (
                    <option key={idx} value={category}>{category}</option>
                ))}
            </select><br />
            <label>Proyecto</label><br />
            <select id='project' onChange={changeProject}>
                <option value='AWA'>AWA</option>
                <option value='null'>NULL</option>
            </select><br />
            <label>Precio (MXN)</label><br />
            <input type="text" id='price' name='price' defaultValue={oneFurniture?.price} onChange={changePrice}/><br /> 
            <input type='file' name="file" onChange={uploadImage} className='edit-fur-image-input'/><br /> 
            <input type='submit' value='Actualizar' disabled={!imageUrl} className='edit-fur-ant-button' />     
        </form>
        
        </div>

    //     <Form layout='vertical' form={form} onFinish={changeFurniture}>
    //     <Form.Item name='nameEN' label='Nombre (EN)'>
    //         <Input onChange={changeNameEN} />
    //     </Form.Item>
    //     <Form.Item name='nameES' label='Nombre (ES)'>
    //         <Input onChange={changeNameES} />
    //     </Form.Item>
    //     <Form.Item name='descriptionEN' label='Descripción (EN)'>
    //         <Input onChange={changeDescriptionEN} />
    //     </Form.Item>
    //     <Form.Item name='descriptionES' label='Descripción (ES)'>
    //         <Input onChange={changeDescriptionES} />
    //     </Form.Item>
    //     <Form.Item name='sizeEN' label='Tamaño (EN)'>
    //         <Input onChange={changeSizeEN} />
    //     </Form.Item>
    //     <Form.Item name='sizeES' label='Tamaño (ES)'>
    //         <Input onChange={changeSizeES} />
    //     </Form.Item>
    //     <Form.Item name='materialEN' label='Material (EN)'>
    //         <Input onChange={changeMaterialEN} />
    //     </Form.Item>
    //     <Form.Item name='materialES' label='Material (ES)'>
    //         <Input onChange={changeMaterialES} />
    //     </Form.Item>
    //     <Form.Item name='categoryEN' label='Categoría (EN)'>
    //         <Select placeholder="Selecciona una categoría (EN)" onChange={changeCategoryEN}>
    //         {categoriesEN.map((category, idx) => (
    //             <Option key={idx} value={category}>{category}</Option>
    //         ))}
    //         </Select>
    //     </Form.Item>
    //     <Form.Item name='categoryES' label='Categoría (ES)'>
    //         <Select placeholder="Selecciona una categoría (ES)" onChange={changeCategoryES}>
    //         {categoriesES.map((category, idx) => (
    //         <Option key={idx} value={category}>{category}</Option>
    //     ))}
    //         </Select>
    //     </Form.Item>
    //     <Form.Item name='project' label='Proyecto'>
    //         <Select>
    //             <Option value="AWA">AWA</Option>
    //         </Select>
    //     </Form.Item>
    //     <Form.Item name='price' label='Precio (MXN)'>
    //         <Input/>
    //     </Form.Item>
    //     <input type='file' name="file" onChange={uploadImage}/>
    //     <Button type='primary' htmlType='submit' disabled={!imageUrl}>
    //         Create Furniture
    //     </Button>
    // </Form>
    )
}

export default EditFurniture
