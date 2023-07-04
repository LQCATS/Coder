import { Button } from "antd"
import { loginAPI } from "../../apis/usersAPI"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const doLogin = async () => {
        const res: any = await loginAPI({
            username: 'bobo',
            password: '1234qwer'
        });
        console.log(res);
        if (res.message === "认证成功") {
            //登录成功
            //将token保存在本地
            localStorage.Token = res.data.token;
            //将用户信息保存在本地
            localStorage.User = JSON.stringify(res.data.user);
            //跳转页面
            navigate('/');
        }

    };
    return (
        <div>
            <Button onClick={doLogin}>登录</Button>
        </div>
    )
}

export default LoginPage