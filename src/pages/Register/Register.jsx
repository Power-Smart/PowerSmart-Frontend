import './register.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import registerPageImage from '../../assets/images/register.png'


const Register = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="login__page" >

            <div className="login__form">
                <h1>REGISTER</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <label htmlFor="">Email</label>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                    </Form.Item>

                    <label htmlFor="">Password</label>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                        />
                    </Form.Item>

                    <label htmlFor="">Confirm Password</label>
                    <Form.Item
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                        />
                    </Form.Item>


                    <Form.Item className='form__submission'>
                        <div className="login__register">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register
                            </Button><br></br>
                        </div>
                        <div className="google__login">
                            Already Logged In?<a href=""> Login</a>
                        </div>
                    </Form.Item>
                </Form>
            </div>

            <div className="image">
                <img src={registerPageImage} alt="" />
            </div>

        </div>
    )
}

export default Register
