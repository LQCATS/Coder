import '../sass/endTest.scss';
import '../static/utils/auto-size';

import { getUrlData } from '../static/utils/getUrlData';
import { http } from '../static/utils/http';
import { countdownRender } from '../static/utils/countdownRender';

const { testId, typeId } = getUrlData();

/**
 * 渲染页面
 */
getTestedDataRender();
async function getTestedDataRender() {
    //学生信息
    const studentMsg = await http({
        url: '/students/getStudentInfo',
        method: 'POST',
    });
    // console.log(studentMsg);

    //渲染学生头像
    $('.icon img').attr('src', `http://127.0.0.1:8888/images/${studentMsg.data.avatar}`)
    //渲染学生姓名
    $('.name').text(studentMsg.data.name);

    //获取试卷信息
    const testedMsgData = await http({
        url: '/tests/getTestdeOne',
        data: {
            testId
        }
    });
    const [testedMsg] = testedMsgData;
    console.log(testedMsg);

    //渲染分数
    $('.score').html(`${testedMsg.score}<span>分</span>`);

    //渲染正确率
    $('.true h1').text(testedMsg.accuracy);

    //渲染答题时间
    const time = testedMsg.durations;
    // console.log(durations);
    const durations = countdownRender(time);
    $('.duration h1').text(durations);

}

/**
 * 点击返回首页
 */
$('.return').on('click', function () {
    location.assign('../html/homePage.html');
});

/**
 * 点击跳转查看解析页面
 */

$('.analysis').on('click', function () {
    location.assign(`../html/analysis.html?testId=${testId}&typeId=${typeId}`);
})