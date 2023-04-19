import { http } from '../static/utils/http';

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

/**
 * 点击收藏夹，跳转收藏夹页面
 */
$('.colloct').on('click', function () {
    location.assign('../html/collect.html');
})

/**
 * 点击错题本跳转错题本页面
 */

$('.error').on('click', function () {
    location.assign('../html/errorBook.html');
});

/**
 * 点击考试进入考试页面
 */
$('.test').on('click', function () {
    location.assign('../html/testsAll.html');
});


/**
 * 已考玩试卷排序，渲染二级模态框
 */
testedRender();
async function testedRender() {
    //向后端发送请求，获取该学生已经考完了的试卷
    const tested = await http({
        url: '/tests/getTestedsByStudentsId'
    });
    console.log(tested);

    //判断该学生是否存在考完了的试卷
    if (tested.data.length > 0) {
        const sortTestedArr = tested.data.sort((a, b) => b.score - a.score)
        const tableHtml = sortTestedArr.map((item, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${item.testId.title}</td>
                <td>${item.score}</td>
            </tr>`
        });
        //渲染该学生试卷排行信息
        $('table').append(tableHtml);

    } else {
        const tableHtml = `
        <tr>
            <td>没有考试信息</td>
        </tr>`
        //渲染该学生已经考完了的试卷信息
        $('table').append(tableHtml);
    }
}
