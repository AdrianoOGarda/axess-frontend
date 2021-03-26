import React, { useContext } from 'react'
import {Form, Input, Button} from "antd"
import { login } from "../services"
import { MyContext } from '../context'

let devUrl = process.env.DEV_URL;
let prodUrl = process.env.PROD_URL;


function Login({history}) {
    const [form] = Form.useForm()
    const { setCtxUser } = useContext(MyContext)

    async function loginProcess(values){
        const {
            data: { user }
            } = await login(values) 
                delete user.password
                delete user.hash
                delete user.salt
                setCtxUser(user)

                console.log(user)
                history.push("/")
}





    return (
        <div>
            <Form layout='vertical' name="basic" form={form} onFinish={loginProcess}>
                <Form.Item
                    label="email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password />
                </Form.Item>

                <div style={{display: 'flex'}}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </div>
            </Form>

        </div>
    )
}

export default Login
