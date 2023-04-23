import '../static/utils/auto-size';
import '../sass/register.scss';
import './header';

import { http } from '../static/utils/http';

//全局变量
//小眼睛默开关变量，默认关闭
let isEyeShow = false;
//用户名开关变量，默认失败
let isUserNameTrue = false;
//密码开关变量，默认失败
let isUserPwdTrue = false;
//确认密码开关变量，默认不一致
let isAgainPwdTrue = false;


//密码眼睛图标
import eyes from '../images/登录_10.png';
import eyesOpen from '../images/open-eye.png';

/**
 * 注册函数
 */
const register = () => {
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

    //密码正则判断
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

    //确认密码是否正确
    $('.pwdAgain input').on('blur', function () {
        //获取用户输入的密码
        let password = $('.password input').val();
        //获取用户确认密码
        let pwdAgain = $(this).val();
        console.log(password)
        //判断两次密码是否一致
        if (password == pwdAgain) {
            $(this).css({ borderColor: 'green' });
            $(this).next().css({ visibility: 'hidden' });
            //修改确认密码状态
            isAgainPwdTrue = true;

        } else {
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


    //注册按钮点击事件，将用户信息储存，跳转到登录页面
    $('#register-but').click(async function () {
        //获取用户输入的用户名
        let phone = $('.userName input').val();
        //获取用户输入的密码
        let password = $('.password input').val();
        console.log(phone, password);

        //正则验证都正确后，判断是否存在
        if (isUserNameTrue && isUserPwdTrue) {

            //判断两次密码是否一致
            if (isAgainPwdTrue) {

                //两次密码一致，向后端发送请求
                const res = await http({
                    url: '/students/register',
                    method: 'POST',
                    data: {
                        phone,
                        password
                    }
                });
                console.log(res);

                //根据后端返回信息回应用户
                if (res.code == 1) {
                    //注册成功
                    alert(`${res.msg}`);
                    location.assign('../html/login.html');
                } else {
                    //注册失败，返回失败原因
                    alert(`${res.msg}`);
                }

            } else {
                //两次密码不一致
                alert('两次密码不一致');
            }

        } else {
            //正则验证失败
            alert("输入的用户名、密码格式不正确");
        }

    })

};
register();