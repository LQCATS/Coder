/**
 * 登录函数
 */
const login = () => {
    //用户名正则判断
    //找到输入用户名标签
    $('.login-user input').blur(() => {
        //用户名输入的正则表达式
        const reUser = /^1[3|5|8][0-9]{9}$/;
        //input失去焦点的时候验证
        const isTrueUser = reUser.test($('.login-user input').val());
        if (isTrueUser) {
            //符合正则，input边框变成绿色
            $('.login-user input').css({borderColor:'green'});
            $('.login-user p:nth-child(3)').text('')

        } else {
            //不符合正则，input边框变成红色，提示信息
            $('.login-user input').css({borderColor:'red'});
            $('.login-user p:nth-child(3)').text('请输入正确格式的手机号码')
            $('.login-user p:nth-child(3)').css('color','red')
        }
    })

    //登录密码正则判断
    //找到输入密码标签
    $('.login-pwd input').blur(() => {
        //密码的正则表达式
        const rePwd = /^[A-Z][A-Za-z0-9]{5,15}$/;
        // console.log(rePwd.test("L123456"))
        //input失去焦点的时候验证
        const isTruePwd = rePwd.test($('.login-pwd input').val());
        if (isTruePwd) {
            //符合正则，input边框变成绿色
            $('.login-pwd input').css({borderColor:'green'});
            $('.login-pwd p:nth-child(3)').text('')

        } else {
            //不符合正则，input边框变成红色，提示信息
            $('.login-pwd input').css({borderColor:'red'});
            $('.login-pwd p:nth-child(3)').text('6~16位，首字符大写，只支持数字和字母！')
            $('.login-pwd p:nth-child(3)').css('color','red')
        }
    })

};
login();