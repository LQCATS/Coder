import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Card } from 'antd'
import { loginAPI } from '../../apis/usersAPI';

const LoginPage = () => {
    const navigate = useNavigate();
    //账户和密码的全局变量
    const loginData = useRef({
        account: '',
        password: ''
    });


    const onFinish = (values) => {
        //将用户输入的账户和密码保存在全局变量中
        loginData.current = values;
        //登陆
        doLogin();
    }

    //登陆事件
    const doLogin = async () => {
        //调取登录接口
        let res = await loginAPI(loginData.current);
        // console.log(res);
        if (res.code) {
            //将数据保存在本地储存
            localStorage.setItem('Token', JSON.stringify(res.data.token));
            //跳转页面
            navigate('/', { replace: true })
        }
    }
    return (
        <div className='login'>
            <Link to={'/'}>link登录</Link>
            <button onClick={() => {
                navigate('/', { replace: true })
            }}>登录</button>

            <Button type="primary" size='small'>登录</Button>

            <Card
                title="登录"
                bordered={false}
                style={{
                    width: 500,
                    backgroundColor: 'skyblue',
                    textAlign: 'center'
                }}
            >
                <Form onFinish={onFinish} labelCol={{ span: 4 }} >
                    <Form.Item label='账号名字' name='account'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='账号密码' name='password'>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='sumbit'>登录</Button>
                    </Form.Item>
                </Form>
            </Card>


        </div>
    )
}

export default LoginPage