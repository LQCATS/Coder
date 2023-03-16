//全局变量
//小眼睛默开关变量，默认关闭
let isEyeShow = false;
//用户名开关变量，默认失败
let isUserNameTrue = false;
//密码开关变量，默认失败
let isUserPwdTrue = false;

/**
 * 注册函数
 */
const register = () => {
    //用户名正则判断
    //找到输入用户名标签
    $('.register-user input').blur(function () {
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

    //密码正则判断
    //找到输入密码标签
    $('.register-pwd input').next().hide();
    $('.register-pwd input').blur(function () {
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


    
    //注册按钮点击事件，将用户信息储存，跳转到登录页面
    $('#register-but').click(function () {
        //获取用户输入的用户名
        let userName = $('.register-user input').val();
        //获取用户输入的密码
        let password = $('.register-pwd input').val();
        //获取用户的性别
        let gender = $('[name=gender]:checked').val();
        //获取用户的爱好
        let hobbies = [];
        let chooseHobbies = $('[name=hobby]:checked').each((i, m) => {
            hobbies.push(m.value)
        });

        //获取储存的信息,将信息转为对象数组
        let userLists = JSON.parse(localStorage.getItem('users') || '[]');
        // console.log(localStorage.getItem('users'))

        //正则验证都正确后，判断是否存在
        if (isUserNameTrue && isUserPwdTrue) {
            //开关变量，默认用户名没有注册过
            let isHave = false;
            userLists.filter(item => {
                if (item.userName === userName) {
                    //用户名已注册
                    isHave = true;
                }
            })

            if (isHave) {
                alert("用户名已存在，请重新注册")
            } else {
                //用户名不存在，注册成功，将数据添加进用户数据数组里面
                userLists.push({
                    id: userLists[userLists.length - 1] ? userLists[userLists.length - 1].id + 1 : 1,
                    userName,
                    password,
                    gender,
                    hobbies
                });
                //将新的用户数据数组转化成JSON字符串存储在本地
                localStorage.setItem('users',JSON.stringify(userLists))
                //注册成功跳转登录页面
                location.assign('./login.html')
            }

        } else {
            alert("输入的用户名、密码格式不正确")
        }

    })

};
register();