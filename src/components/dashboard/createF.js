import React, {useState} from 'react'
import { Button, Form, Input } from "antd"
import axios from 'axios'
import {createFurniture} from "../../services/furnitures"
import FormItem from 'antd/lib/form/FormItem'


function NewFurniture({ history }) {
    const [form] = Form.useForm()
    const [imageUrl, setImageUrl] = useState(null)

    async function sendFurniture(values) {
        await createFurniture({...values, image1: imageUrl})
        history.push('/') //NO FUNCIONA
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
      <Form.Item name='project' label='Project'>
        <Input />
      </Form.Item>
      <input type='file' name="file" onChange={uploadImage}/>
      <Button type='primary' htmlType='submit' disabled={!imageUrl}>
        Create Furniture
      </Button>
    </Form>
    )
}

export default NewFurniture
