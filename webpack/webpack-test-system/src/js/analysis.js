import '../static/utils/auto-size';
import '../sass/analysis.scss';

//引入收藏小心心图片
import { starChoose } from '../images/Tests/test-star2.png';
//引入收藏小心心图片
import { star } from '../images/Tests/test-star.png';
import { getUrlData } from '../static/utils/getUrlData';
import { http } from '../static/utils/http';
import { countdownRender } from '../static/utils/countdownRender';

const { testId, typeId } = getUrlData();
console.log(testId);

//当前显示的题目在数组中对应的下标，默认渲染第一道题
let checkIndex = 0;
//每个选项前面的字母
let optionLetter = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
}

/**
 * 获取后端数据，渲染页面
 * 1.渲染倒计时
 * 2.渲染考题
 * 3.切换题目
 */
getTestData();
async function getTestData() {
    //获取试卷信息
    const testArr = await http({
        url: '/tests/getTestById',
        data: {
            testId
        }
    });
    console.log(testArr);


    //后端返回的数据是数组，解构赋值将数据转换成对象
    const [test] = testArr.data
    console.log(test);

    //渲染试卷的标题
    $('.msgBox p').text(test.title)

    //渲染倒计时


    //渲染题目
    testRender(test);

    //点击切换上一题
    $('.previous').on('click', function () {
        if (checkIndex > 0) {
            checkIndex--
            testRender(test);
        }
    });

    //点击切换下一题
    $('.next').on('click', function () {

        if (checkIndex < test.exerciseId.length - 1) {
            checkIndex++;
            testRender(test);
        }
    });


};

getTestedData();
async function getTestedData() {
    //获取试卷信息
    const testArr = await http({
        url: '/tests/getTestdeOne',
        data: {
            testId
        }
    });
    console.log(testArr);


    //后端返回的数据是数组，解构赋值将数据转换成对象
    const [test] = testArr
    console.log(test);

    //渲染考生答案
    testedRender(test);





};






/**
 * 试卷题目渲染函数
 */
function testRender(data) {
    // console.log(data.exerciseId[checkIndex]);
    const questionData = data.exerciseId[checkIndex];
    //渲染题目类型和名字
    $('.title p').text(`${checkIndex + 1}、${questionData.topics}`);
    $('.questionType').text(questionData.type == 0 ? '单选' : '多选')

    //选项的字符串拼接
    const optionHtml = questionData.options.map((item, index) => {
        if (questionData.type == 0) {
            return `
            <div><input type="radio" name="option" id="option${optionLetter[index]}" value="${index}"><label for="option${optionLetter[index]}">${optionLetter[index]}:${item}</label></div>
            `
        } else if (questionData.type == 1) {
            return `
            <div><input type="checkbox" name="option" id="option${optionLetter[index]}" value="${index}"><label for="option${optionLetter[index]}">${optionLetter[index]}:${item}</label></div>
            `
        }
    }).join('');
    // console.log(optionHtml)
    //渲染选项
    $('.option').html(optionHtml);
    //渲染当前题目序号
    $('.atPresent').text(checkIndex + 1);
    //渲染题目总数
    $('.allQuestionsNUm').text(data.exerciseId.length);

    //渲染正确答案
    //渲染正确答案
    const answer = questionData.answer.map(i => {
        return `
        ${optionLetter[i]}`
    });
    $('.answer h1').text(`正确答案：${answer}`);

};


/**
 * 考完后的信息渲染
 */

function testedRender(data) {
    // console.log(data.exerciseId[checkIndex]);
    // const questionData = data.exerciseId[checkIndex];

    //渲染总成绩
    $('.garde').text(data.score)

    //渲染考试时长
    const time = countdownRender(data.durations);
    $('.time').text(time);

    //渲染考生答案
    if (data.answers.length != 0) {
        const answer = data.answers.map(i => {
            return `
        ${optionLetter[i]}`
        });
        $('.answer h2').html(`考生答案：<span>${answer}</span>`);
    } else {
        $('.answer h2').html('考生答案：无')
    }



}

/**
 * 答题提示
 */

const resultStudent = $('.answer h2').text().substring(5);
const resultRight = $('.answer h1').text().substring(5);

if (resultStudent == resultRight) {
    $('.img').css({ backgroundColor: 'green' });
    $('.result p').css({ color: 'green' });
    $('.result p').text('答对了');
}

/**
 * 点击返回试卷中心
 */

$('.returnTestAll').on('click', function () {
    location.assign(`../html/testsAll.html?typeId=${typeId}&testId=${testId}`);
});