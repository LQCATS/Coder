//全局变量
//小眼睛默开关变量，默认关闭
let isEyeShow = false;
//正则用户名开关变量，默认失败
let isUserNameTrue = false;
//正则密码开关变量，默认失败
let isUserPwdTrue = false;

/**
 * 登录函数
 */
const login = () => {
    //用户名正则判断
    //找到输入用户名标签
    $('.login-user input').blur(function () {
        //用户名输入的正则表达式
        const reUser = /^1[3-8]\d{9}$/;
        //input失去焦点的时候验证
        const isTrueUser = reUser.test($(this).val());
        if (isTrueUser) {
            //符合正则，input边框变成绿色
            $(this).css({ borderColor: 'green' });
            $(this).next().hide();
            isUserNameTrue = true;

        } else {
            //不符合正则，input边框变成红色，提示信息
            $(this).css({ borderColor: 'red' });
            $(this).next().show();
        }
    })

    //登录密码正则判断
    //找到输入密码标签
    $('.login-pwd input').blur(function () {
        //密码的正则表达式
        const rePwd = /^[A-Z][A-Za-z0-9]{5,15}$/;
        //input失去焦点的时候验证
        const isTruePwd = rePwd.test($(this).val());
        if (isTruePwd) {
            //符合正则，input边框变成绿色
            $(this).css({ borderColor: 'green' });
            $(this).next().hide();
            isUserPwdTrue = true;

        } else {
            //不符合正则，input边框变成红色，提示信息
            $(this).css({ borderColor: 'red' });
            $(this).next().show();
        }
    })

    //密码隐藏显示
    $('.eye').click(function () {
        if (isEyeShow) {
            isEyeShow = false;
            $(this).css('backgroundImage', 'url(../images/eye.png)')
            $(this).prev().prev().attr('type', 'password')
        } else {
            isEyeShow = true;
            $(this).css('backgroundImage', 'url(../images/eye_open.png)')
            $(this).prev().prev().attr('type', 'text')
        }
    })

    //登录按钮点击事件，登录成功跳转到首页
    $('#login-but').click(function () {
        //获取用户的用户名
        let userName = $('.login-user input').val();
        //获取用户的密码
        let password = $('.login-pwd input').val();

        //获取存储的用户信息数组
        let userLists = JSON.parse(localStorage.getItem('users') || '[]');

        //所有正则都正确，再判断用户登录账号和密码是不是本地储存的
        if (isUserNameTrue && isUserPwdTrue) {
            let usersHave = userLists.find(item => {
                return userName === item.userName && password === item.password
            })

            if (usersHave) {
                //登录成功，跳转页面，将登录信息储存在本地
                let gender = usersHave.gender ? '先生' : '女士';
                let hobbies = usersHave.hobbies;
                let loginUser = [{
                    userName,
                    password,
                    gender,
                    hobbies
                }];
                localStorage.setItem('loginUser',JSON.stringify(loginUser))
                location.assign('./homePage.html')
            } else {
                alert('用户名、密码错误')
            }
        } else {
            alert("用户名、密码格式不正确，请重新登录")
        }
    })





};
login();