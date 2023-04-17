/**
 * 点击头部菜单显示一级模态框
 */

$('.menu').on('click', function () {
    //如果用户登录显示登录的菜单,通过本地储存的token来判断
    const token = localStorage.getItem('token') || [];
    // console.log(typeof token)

    if (typeof token == 'string') {
        //token的类型是string表示存在token，显示已登录的模态框
        $('.headerLoginNav').show();
    } else {
        //token不是string表示没有登陆，显示没有登录的模态框
        $('.headerNav').show();
    }
});

/**
 * 点击关闭模态框
 */

$('.close').on('click', function () {
    $(this).parent().hide();
    $('.alertBg').hide();
});

/**
 * 点击排行榜弹出二级模态框
 */

$('.rankList').on('click', function () {
    $('.headerSecondNav').show();
});

/**
 * 点击退出登录，清除token信息
 */
$('.loginOut').on('click', function () {
    localStorage.removeItem('token');
    $('.headerLoginNav').hide();
});