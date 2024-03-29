import React from 'react'
import { Form, Input, Button } from 'antd';
import { signup } from "../services"


const Signup = ({ history }) => {
    const [form] = Form.useForm()

    async function signupProcess(values) {
        await signup(values)
        history.push("/login")
    }


    return (
        <div style={{marginTop: '5vw', padding: '2vw', minHeight: '90vh'}}>
            <Form layout='vertical' name="basic" form={form} initialValues={{ remember: true }} onFinish={signupProcess}>
                <Form.Item
                    label="email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
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

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Signup