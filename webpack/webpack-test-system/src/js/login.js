import '../sass/loginAndRegister.scss';
import '../static/utils/auto-size';

//引入封装的http函数，向后端请求数据
import { http } from '../static/utils/http';


//全局变量

//小眼睛默开关变量，默认关闭
let isEyeShow = false;
//正则用户名开关变量，默认失败
let isUserNameTrue = false;
//正则密码开关变量，默认失败
let isUserPwdTrue = false;


//密码眼睛图标
import eyes from '../images/登录_10.png';
import eyesOpen from '../images/open-eye.png';

/**
 * 登录函数
 */
const login = () => {
    //用户名正则判断
    //找到输入用户名标签
    $('.userName input').blur(function () {
        //用户名输入的正则表达式
        const reUser = /^1[3-8]\d{9}$/;
        //input失去焦点的时候验证
        const isTrueUser = reUser.test($(this).val());
        if (isTrueUser) {
            //符合正则，input边框变成绿色
            $(this).css({ borderColor: 'green' });
            $(this).next().css({ visibility: 'hidden' });
            isUserNameTrue = true;

        } else {
            //不符合正则，input边框变成红色，提示信息
            $(this).css({ borderColor: 'red' });
            $(this).next().css({ visibility: 'visible' });
        }
    })

    //登录密码正则判断
    //找到输入密码标签
    $('.password input').blur(function () {
        //密码的正则表达式
        const rePwd = /^[A-Z][A-Za-z0-9]{5,15}$/;
        //input失去焦点的时候验证
        const isTruePwd = rePwd.test($(this).val());
        //正则正确
        if (isTruePwd) {
            //符合正则，input边框变成绿色
            $(this).css({ borderColor: 'green' });
            $(this).next().css({ visibility: 'hidden' });
            isUserPwdTrue = true;

        } else {
            //不符合正则，input边框变成红色，提示信息
            $(this).css({ borderColor: 'red' });
            $(this).next().css({ visibility: 'visible' });
        }
    })

    //密码隐藏显示
    $('.eyes').click(function () {
        if (isEyeShow) {
            isEyeShow = false;
            $(this).css('backgroundImage', `url(${eyes})`)
            $(this).prev().prev().attr('type', 'password')
        } else {
            isEyeShow = true;
            $(this).css('backgroundImage', `url(${eyesOpen})`)
            $(this).prev().prev().attr('type', 'text')
        }
    })

    //登录按钮点击事件，登录成功跳转到首页
    $('#login-but').click(async function () {
        //获取用户的用户名
        let phone = $('.userName input').val();
        //获取用户的密码
        let password = $('.password input').val();

        //所有正则都正确，向后端发送请求，验证是否正确
        if (isUserNameTrue && isUserPwdTrue) {
            const res = await http({
                url: '/students/login',
                method: 'POST',
                data: {
                    phone,
                    password
                }
            })
            console.log(res)

            if (res.token) {
                //将token储存在本地储存之后再进行跳转
                localStorage.setItem('token', res.token);
                location.assign('../html/homePage.html');
            } else {
                alert(`${res.msg}`)
            }

        } else {
            alert("用户名、密码格式不正确，请重新登录")
        }
    })

};
login();
