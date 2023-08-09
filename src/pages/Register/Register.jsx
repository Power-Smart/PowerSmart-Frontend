import './register.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import registerPageImage from '../../assets/images/register.png'
import { userRegister } from '../../api/apiUser';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { completeProfileInfo } from '../../redux/slices/userSlice';


const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        if (values.password !== values.confirmPassword) {
            alert('Password and Confirm Password do not match')
        } else {
            const response = await userRegister(values);
            console.log(response.data.user.user_id)
            if (response.status === 201) {
                navigate('/register/profileComplete')
                dispatch(completeProfileInfo(response.data.user.user_id));
                console.log('Registration Successful')
            } else {
                console.log('Registration Failed')
            }
        }
    };

    return (
        <div className="register__page">
            <div className="login__container" >
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
                        <label htmlFor="">Name</label>
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                        </Form.Item>

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
                                </Button>
                            </div>
                            <div className="google__login">
                                Already Logged In?<Link to='/login'> Login</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>

                <div className="image">
                    <img src={registerPageImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register
