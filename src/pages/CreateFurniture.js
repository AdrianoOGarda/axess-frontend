import React, {useState} from 'react'
import { Button, Form, Input, Select } from "antd"
import axios from 'axios'
import {createFurniture} from "../services/furnitures"
import FormItem from 'antd/lib/form/FormItem'
import "../css/typography.css"

const { Option } = Select;

function NewFurniture({ history }) {
    const [form] = Form.useForm();
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

    const categoriesEN = ["BEDS", "NIGHTSTANDS", "CREDENZAS", "HIGH CHAIRS (KITCHEN)", "DINING CHAIRS", "DINING TABLES", "SOFAS", "COFFEE TABLES", "SIDE CHAIRS", "TV STANDS", "OUTDOOR CHAIRS", "OUTDOOR DINING TABLES", "LOUNGE CHAIRS", "SUNBEDS", "OUTDOOR SIDE TABLES", "OUTDOOR SOFAS"]
    const categoriesES = ["CAMAS", "BUROS", "CREDENZAS", "BANCOS (DE COCINA)", "SILLAS PARA COMEDOR", "COMEDORES", "SOFAS", "MESAS DE CENTRO", "SILLAS LATERALES", "MUEBLES DE TV", "SILLAS DE EXTERIOR", "COMEDORES DE EXTERIOR", "SILLAS LOUNGE", "CAMASTROS", "MESAS LATERALES EXTERIOR", "SALAS DE EXTERIOR"]


    async function sendFurniture(values) {
        await createFurniture({
            ...values,
            image: imageUrl, 
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

    const changeNameEN = (e) => {
        setNameEN(e.target.value)
    }

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

    const changeCategoryEN = (value) => {
        setCategoryEN(value)
    }

    const changeCategoryES = (value) => {
        setCategoryES(value)
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



    return (
    <div style={{padding: '5%', fontFamily: 'L Regular'}}>

    <Form layout='vertical' form={form} onFinish={sendFurniture}>
        <Form.Item name='nameEN' label='Nombre (EN)'>
            <Input onChange={changeNameEN} />
        </Form.Item>
        <Form.Item name='nameES' label='Nombre (ES)'>
            <Input onChange={changeNameES} />
        </Form.Item>
        <Form.Item name='descriptionEN' label='Descripción (EN)'>
            <Input onChange={changeDescriptionEN} />
        </Form.Item>
        <Form.Item name='descriptionES' label='Descripción (ES)'>
            <Input onChange={changeDescriptionES} />
        </Form.Item>
        <Form.Item name='sizeEN' label='Tamaño (EN)'>
            <Input onChange={changeSizeEN} />
        </Form.Item>
        <Form.Item name='sizeES' label='Tamaño (ES)'>
            <Input onChange={changeSizeES} />
        </Form.Item>
        <Form.Item name='materialEN' label='Material (EN)'>
            <Input onChange={changeMaterialEN} />
        </Form.Item>
        <Form.Item name='materialES' label='Material (ES)'>
            <Input onChange={changeMaterialES} />
        </Form.Item>
        <Form.Item name='categoryEN' label='Categoría (EN)'>
            <Select placeholder="Selecciona una categoría (EN)" onChange={changeCategoryEN}>
            {categoriesEN.map((category, idx) => (
                <Option key={idx} value={category}>{category}</Option>
            ))}
            </Select>
        </Form.Item>
        <Form.Item name='categoryES' label='Categoría (ES)'>
            <Select placeholder="Selecciona una categoría (ES)" onChange={changeCategoryES}>
            {categoriesES.map((category, idx) => (
            <Option key={idx} value={category}>{category}</Option>
        ))}
            </Select>
        </Form.Item>
        <Form.Item name='project' label='Proyecto'>
            <Select>
                <Option value="AWA">AWA</Option>
            </Select>
        </Form.Item>
        <Form.Item name='price' label='Precio (MXN)'>
            <Input/>
        </Form.Item>
        <input type='file' name="file" onChange={uploadImage}/>
        <Button type='primary' htmlType='submit' disabled={!imageUrl}>
            Create Furniture
        </Button>
    </Form>

    </div>
    )
}

export default NewFurniture
