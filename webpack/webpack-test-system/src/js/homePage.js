import '../static/utils/auto-size';
import '../sass/homePage.scss';
import './header';

import { http } from '../static/utils/http';



/**
 * 点击公告，弹出公告弹窗
 */

$('.noticeContent').on('click', '.noticeBox', function () {
    console.log($(this));
    $('.alertBg').css({ display: 'block' });
    $('.noticeAlert').css({ display: 'block' });
    $('.noticeAlertMsg').html($(this).html())
});

/**
 * 渲染所有的试卷类型
 */
textsTypeRender();
async function textsTypeRender() {
    //向后端发送请求，获取所有试卷的类型
    const testsType = await http({
        url: '/tests/getTypes'
    });
    console.log(testsType);

    //拿到后端的数据，拼接渲染首页试卷类型的字符串，绑定类型的id
    const bannerNavHtml = testsType.data.map(item => {
        return `
        <div class="textBox" data-id=${item._id}>
                <img src=${item.icon} alt="">
                <p>${item.type}</p>
        </div> `
    }).join('');
    // console.log(bannerNavHtml);

    //渲染首页试卷类型
    $('.bannerNav').html(bannerNavHtml);
};

/**
 * 点击试卷类型跳转到试卷页面，传递typeId
 */

//点击的节点是动态渲染的，需要进行事件委托
$('.bannerNav').on('click', '.textBox', function () {
    //通过自定义属性，获取试卷的typeId
    const typeId = $(this).data('id');
    console.log(typeId);
    //跳转到试卷页面，并传递试卷类型
    location.assign(`../html/testsAll.html?typeId=${typeId}`);

});

/**
 * 公告渲染函数
 */
function noticeRender(noticeArr) {
    //遍历数组，拼接公告需要渲染的字符串
    const noticeContentHtml = noticeArr.map(item => {
        return `
        <div class="noticeBox">
            <h3>
                ${item.title}
            </h3>
            <p>
                ${item.intro}
            </p>
        </div>`
    }).join('');

    return noticeContentHtml
};

/**
 * 点击类型渲染对应的公告
 */

//默认渲染全部公告
allNotice();
async function allNotice() {
    const notice = await http({
        url: '/tests/getNotices'
    });
    const noticeHtml = noticeRender(notice.data);
    // console.log(noticeHtml)
    $('.noticeContent').html(noticeHtml);
}


//根据时间选项渲染公告
$('.noticeType').on('click', '.type', async function () {
    //点击notice的类型，增加选中的样式，其他改为未选择的样式
    $('.type').removeClass('bgbule');
    $(this).addClass('bgbule');
    //向后端请求所有公告数据
    const notice = await http({
        url: '/tests/getNotices'
    });

    //获取当前时间，筛选对应的公告
    //当前时间
    const day = new Date();

    //现在的时间戳
    const seconde = parseInt(day.getTime() / 1000);

    //一个月前的时间戳
    const oneMonthAgo = seconde - 5184000;

    //最近7天的时间戳
    const oneWeek = seconde - 604800;

    //筛选出一个月前的公告
    const oneMonthAgoNoticeArr = notice.data.filter(item => {
        const noticeTime = parseInt(new Date(item.date).getTime() / 1000);
        // console.log(noticeTime)
        return noticeTime < oneMonthAgo
    });

    //筛选出一个星期内的公告
    const oneWeekNoticeArr = notice.data.filter(item => {
        const noticeTime = parseInt(new Date(item.date).getTime() / 1000);
        // console.log(noticeTime)
        return noticeTime > oneWeek
    })
    // console.log(oneWeekNoticeArr);

    // console.log($(this).text());

    //switch匹配渲染不同的公告
    switch ($(this).text()) {
        case '全部':
            const noticeHtmlAll = noticeRender(notice.data);
            $('.noticeContent').html(noticeHtmlAll);
            break;

        case '最近':
            const noticeHtmlRecently = noticeRender(oneWeekNoticeArr);
            $('.noticeContent').html(noticeHtmlRecently);
            break;
        case '一个月前':
            const noticeHtmlPreMonth = noticeRender(oneMonthAgoNoticeArr);
            $('.noticeContent').html(noticeHtmlPreMonth);
            break;
    };

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
