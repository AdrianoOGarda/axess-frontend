import React, {useState} from 'react'
import { Button, Form, Input, Select } from "antd"
import axios from 'axios'
import {createFurniture} from "../../services/furnitures"
import FormItem from 'antd/lib/form/FormItem'

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
    const [categoryEN, setCategoryEN] = useState(null);
    const [categoryES, setCategoryES] = useState(null);

    const categoriesEN = ["BEDS", "NIGHTSTANDS", "CREDENZAS", "HIGH CHAIRS (KITCHEN)", "DINING CHAIRS", "DINING TABLES", "SOFAS", "COFFEE TABLES", "SIDE CHAIRS", "TV STANDS", "OUTDOOR CHAIRS", "OUTDOOR DINING TABLES", "LOUNGE CHAIRS", "SUNBEDS", "OUTDOOR SIDE TABLES", "OUTDOOR SOFAS"]
    const categoriesES = ["CAMAS", "BUROS", "CREDENZAS", "BANCOS (DE COCINA)", "SILLAS PARA COMEDOR", "COMEDORES", "SOFAS", "MESAS DE CENTRO", "SILLAS LATERALES", "MUEBLES DE TV", "SILLAS DE EXTERIOR", "COMEDORES DE EXTERIOR", "SILLAS LOUNGE", "CAMASTROS", "MESAS LATERALES EXTERIOR", "SALAS DE EXTERIOR"]


    async function sendFurniture(values) {
        await createFurniture({
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
          }
      })
        history.push('/') //NO FUNCIONA
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
      <Form layout='vertical' form={form} onFinish={sendFurniture}>
        <Form.Item name='nameEN' label='Name (EN)'>
          <Input onChange={changeNameEN} />
        </Form.Item>
        <Form.Item name='nameES' label='Name (ES)'>
          <Input onChange={changeNameES} />
        </Form.Item>
        <Form.Item name='descriptionEN' label='Description (EN)'>
          <Input onChange={changeDescriptionEN} />
        </Form.Item>
        <Form.Item name='descriptionES' label='Description (ES)'>
          <Input onChange={changeDescriptionES} />
        </Form.Item>
        <Form.Item name='sizeEN' label='Size (EN)'>
          <Input onChange={changeSizeEN} />
        </Form.Item>
        <Form.Item name='sizeES' label='Size (ES)'>
          <Input onChange={changeSizeES} />
        </Form.Item>
        <Form.Item name='categoryEN' label='Category (EN)'>
          <Select placeholder="Selecciona una categoría (EN)" onChange={changeCategoryEN}>
          {categoriesEN.map((category, idx) => (
            <Option key={idx} value={category}>{category}</Option>
          ))}
          </Select>
        </Form.Item>
        <Form.Item name='categoryES' label='Category (ES)'>
          <Select placeholder="Selecciona una categoría (ES)" onChange={changeCategoryES}>
          {categoriesES.map((category, idx) => (
            <Option key={idx} value={category}>{category}</Option>
          ))}
          </Select>
        </Form.Item>
        <input type='file' name="file" onChange={uploadImage}/>
        <Button type='primary' htmlType='submit' disabled={!imageUrl}>
          Create Furniture
        </Button>
      </Form>
    )
}

export default NewFurniture
