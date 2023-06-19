import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd'

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Link to={'/'}>link登录</Link>
            <button onClick={() => {
                navigate('/', { replace: true })
            }}>登录</button>

            <Button type="primary" size='small'>登录</Button>
        </div>
    )
}

export default LoginPage