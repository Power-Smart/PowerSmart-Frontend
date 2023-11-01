import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import loginPageImage from '../../assets/images/login.png';
import { FcGoogle } from 'react-icons/fc';
import './login.css';
import { userLogin } from '../../api/apiUser';
import { login } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { session } from '../../redux/slices/userSlice';
import { fetchCustomer } from '../../redux/slices/customerSlice';
import { Link } from 'react-router-dom';
import { antNotification } from '../../utils/alerts';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [buttonState, setButtonState] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const { isLogged, user } = useSelector(state => state.user);

    const onFinish = async (values) => {
        try {
            setButtonState(true);
            const response = await userLogin(values.email, values.password);
            // console.log(response);
            dispatch(login(response.data));
            if (response.data.id) {
                dispatch(fetchCustomer(response.data.id));
                setButtonState(false);
                navigate('/');
            } else {
                antNotification(api, 'topLeft', 'Login Failed !', "Invalid username or password", 'error');
                setButtonState(false);
            }
        } catch (error) {
            antNotification(api, 'topLeft', 'Login Failed', '', 'error')
            setButtonState(false);
        }
    };

    useEffect(() => {
        dispatch(session());
        if (isLogged) {
            switch (user.role) {
                case 1:
                    navigate('/');
                    break;
                case 2:
                    navigate('/tech')
                    break;
                case 3:
                    navigate('/stockManager')
                    break;
                case 4:
                    navigate('/admin');
                    break;
                default:
                    break;
            }
        }
    }, [])

    return (
        <div className="login__page">
            {contextHolder}
            <div className="login__container" >
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
                                {
                                    type: 'email',
                                    message: 'Input a valid email',
                                }
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
                                // {
                                //     min: 8,
                                //     message: 'Password must be at least 8 characters'
                                // }
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
                                <Button type="primary" htmlType="submit" className="login-form-button" disabled={buttonState} >
                                    Log in
                                </Button><br></br>
                            </div>
                            <div className="google__login">
                                Need an account?<br /><Link to='/register' className='text-blue-700'>Sign Up</Link>
                                {/* Or <a href='#'>Continue With <FcGoogle style={{ display: 'inline', fontSize: '20px' }} /></a> */}
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
