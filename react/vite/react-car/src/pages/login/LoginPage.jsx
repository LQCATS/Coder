import { Button, Card, Col, Form, Input, Row, Tabs } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react'
import { loginAPI } from '../../apis/loginAPI';


const LoginPage = () => {


    //tabs切换触发的事件
    const onChange = (key) => {
        console.log(key);
    };

    //点击登录触发事件
    const doLogin = async (values) => {
        console.log(values);
        //调取接口登录
        const res = await loginAPI(values);
        console.log(res);
        if (res.message === "认证成功") {
            //登录成功将用户信息保存在本地
        }
    };

    const items = [
        {
            key: '1',
            label: `账户密码登录`,
            children: (
                <Form onFinish={doLogin}>
                    <Form.Item name='username'>
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>
                    <Form.Item name='password'>
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '400px' }}>登录</Button>
                    </Form.Item>
                </Form>
            ),
        },
        {
            key: '2',
            label: `手机号登录`,
            children: (
                <Form onFinish={doLogin}>
                    <Form.Item name='username'>
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>
                    <Row gutter={17}>
                        <Col span={16}>
                            <Form.Item name='password'>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item>
                                <Button>获取验证码</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '400px' }}>登录</Button>
                    </Form.Item>
                </Form>
            ),
        },

    ];

    return (
        <div className='login_bg'>
            <Card className='login_warp'>
                <div className='logo_warp'>
                    <div className="logo">
                        <img src="http://xawn.f3322.net:8002/distremote/static/img/logo.png" alt="" />
                    </div>
                    <h1>赤兔养车</h1>
                </div>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange}
                    centered
                    tabBarStyle={{ borderBottom: '1px solid #dbdbdb' }}
                    tabBarGutter={80} />
            </Card>

        </div>

    )
}

export default LoginPage