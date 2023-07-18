import { Button, Card, Col, Form, Input, Row, Tabs } from "antd"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginAPI } from "../../apis/usersAPI"
import { useNavigate } from 'react-router-dom';
import useRequest from "../../hook/useRequest";

interface userInfo {
    username: string,
    password: string
}

const LoginPage = () => {
    const navigate = useNavigate();

    //tabs切换触发的事件
    // const onChange = (key: string) => {
    //     console.log(typeof key);
    // };


    //获取自定义hook中获取菜单的数据的方法
    const { getMenusDataAsync } = useRequest();

    
    const doLogin = async (values: userInfo) => {
        const res: any = await loginAPI(values);
        console.log(res);

        if (res.message === "认证成功") {
            //登录成功
            //将token保存在本地
            localStorage.Token = res.data.token;
            //将用户信息保存在本地
            localStorage.User = JSON.stringify(res.data.user);
            //将用户的菜单权限更新到状态机中
            await getMenusDataAsync();
            //跳转页面
            navigate('/home');
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
                            prefix={<UserOutlined />}
                        />
                    </Form.Item>
                    <Form.Item name='password'>
                        <Input.Password
                            prefix={<LockOutlined />}
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
                <Tabs defaultActiveKey="1" items={items}
                    // onChange={onChange}
                    centered
                    tabBarStyle={{ borderBottom: '1px solid #dbdbdb' }}
                    tabBarGutter={80} />
            </Card>

        </div>
    )
}

export default LoginPage