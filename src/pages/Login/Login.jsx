import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './login.css';
import loginPageImage from '../../assets/images/login.png';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="login__page" >
            <div className="image">
                <div className="title">
                    <h1>Welcome</h1>
                    <h4>Energy Mastery Begins Here!</h4>
                </div>
                <img src={loginPageImage} alt="" />
            </div>

            <div className="login__form">
                <h1>LOGIN</h1>
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
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className='rememberME'>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot Password ?
                        </a>
                    </Form.Item>

                    <Form.Item className='form__submission'>
                        <div className="login__register">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button><br></br>
                        </div>
                        <div className="google__login">
                            Need an account?<a href=""> SIGN UP</a><br></br>
                            Or <a href='#'>Continue With <FcGoogle style={{ display: 'inline', fontSize: '20px' }} /></a>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
