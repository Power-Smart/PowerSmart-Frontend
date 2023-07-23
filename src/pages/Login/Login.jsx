import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import loginPageImage from '../../assets/images/login.png';
import { FcGoogle } from 'react-icons/fc';
import './login.css';
import { userLogin } from '../../api/apiUser';
import { login } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            const response = await userLogin(values.email, values.password);
            dispatch(login(response.data));
            navigate('/');
        } catch (error) {
            console.log(error);
        }
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
                        name="email"
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
