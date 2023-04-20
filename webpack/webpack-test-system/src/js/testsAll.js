import '../sass/testsAll.scss';
import '../static/utils/auto-size';

import './header';

//引入获取路劲传参的工具函数
import { getUrlData } from '../static/utils/getUrlData';
//引入向后端发送请求的工具函数
import { http } from '../static/utils/http';
//引入时钟小图片
import clock from '../images/Tests/clock.png';
//引入正在考试的图片
import testsDoingImg from '../images/考试_03.png';
//引入已经考完的图片
import testedImg from '../images/考试_12.png';

//获取考试类型的id
const typeId = getUrlData().typeId;
console.log(typeId);

/**
 * 渲染正在考试的页面数据
 */
testsDoingRender();
async function testsDoingRender() {
    if (typeId) {
        //向后端发送请求，通过typeId获取试卷信息
        const testsData = await http({
            url: '/tests/getIdByType',
            data: {
                typeId
            }
        });
        console.log(testsData);

        //渲染正在进行考试的页面
        const testsHtml = testsData.data.map(item => {
            return `
            <div class="testBox">
                <img src=${testsDoingImg} alt="">
                <div class="msg">
                    <div class="testType">
                        <h3>${item.title}</h3>
                        <div class="testStatus">可参加</div>
                    </div>
                    <p>${item['start-time']}~${item['end-time']}</p>
                    <div class="duration">
                        <img src=${clock} alt="">
                        <span>限时${item.durations}分钟</span>
                    </div>
                </div>
                <div class="button" data-id=${item._id}>进入</div>
            </div>`
        }).join('');

        $('.testsDoing').append(testsHtml);
    } else {
        //向后端发送请求，获取试卷信息
        const testsData = await http({
            url: '/tests/findAllTests',
        });
        console.log(testsData);

        //渲染正在进行考试的页面
        const testsHtml = testsData.data.map(item => {
            return `
            <div class="testBox">
                <img src=${testsDoingImg} alt="">
                <div class="msg">
                    <div class="testType">
                        <h3>${item.title}</h3>
                        <div class="testStatus">可参加</div>
                    </div>
                    <p>${item['start-time']}~${item['end-time']}</p>
                    <div class="duration">
                        <img src=${clock} alt="">
                        <span>限时${item.durations}分钟</span>
                    </div>
                </div>
                <div class="button" data-id=${item._id}>进入</div>
            </div>`
        }).join('');

        $('.testsDoing').append(testsHtml);
    }
};

/**
 * 渲染该学生已经考完了的页面数据
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
        const testedHtml = tested.data.map(item => {
            return `
                <div class="testBox">
                    <img src=${testedImg} alt="">
                    <div class="msg">
                        <div class="testType">
                            <h3>${item.testId.title}</h3>
                            <div class="testStatus">已完成</div>
                        </div>
                        <p>${item.testId['start-time']}~${item.testId['end-time']}</p>
                        <div class="duration">
                            <img src=${clock} alt="">
                            <span>限时${item.testId.durations}分钟</span>
                        </div>
                    </div>
                    <div class="button" data-id=${item.testId._id} data-type=${item.typeId}>查看</div>
                </div>`
        });
        //渲染该学生已经考完了的试卷信息
        $('.tested').append(testedHtml);

    } else {
        const testedHtml = `
            <div class="testBox">
                该学生没有完成的试卷
            </div>`
        //渲染该学生已经考完了的试卷信息
        $('.tested').append(testedHtml);
    }




};

/**
 * 点击进入试卷页面
 */
$('.testsDoing').on('click', '.button', function () {
    // console.log($(this));
    //获取自定义属性，试卷id
    const testId = $(this).data('id');
    console.log(testId);
    //跳转到开始考试页面
    location.assign(`../html/startTest.html?testId=${testId}&typeId=${typeId}`)
});

/**
 * 查看解析
 */

$('.tested').on('click', '.button', function () {
    // console.log($(this));
    //获取自定义属性，试卷id
    const testId2 = $(this).data('id');
    console.log(testId2);
    //获取试卷类型的type
    const typeId2 = $(this).data('type');
    console.log(typeId2);
    //跳转到解析页面
    location.assign(`../html/analysis.html?testId=${testId2}&typeId=${typeId2}`);
});

