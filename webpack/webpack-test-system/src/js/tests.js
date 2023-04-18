import '../sass/tests.scss';
import '../static/utils/auto-size';

//引入工具函数获取试卷id
import { getUrlData } from '../static/utils/getUrlData';
//引入请求数据函数
import { http } from '../static/utils/http';

//获取试卷id
const { testId } = getUrlData();
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
//学生的答案
let studentAnswerArr = [];

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
    //后端返回的数据是数组，解构赋值将数据转换成对象
    const [test] = testArr.data
    console.log(test);

    //渲染试卷的标题
    $('.msgBox p').text(test.title)

    //渲染倒计时
    countdownRender(test.durations * 60);

    //渲染题目
    testRender(test)

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

    //获取学生答案，储存在本地
    $('.option').on('change', 'input', function () {
        console.log(checkIndex);
        //学生选择的答案
        let answerChecked = [];
        //先获取学生答案
        $('input:checked').each((index, item) => {
            // console.log(index, item.value);
            answerChecked.push(item.value)
        });
        //当前页面的下标时和所有数据库的下标顺序对应，将当前页面的数据放在对应下标里
        studentAnswerArr[checkIndex] = answerChecked;
        // console.log(studentAnswerArr);

        //将学生答案储存在本地
        localStorage.setItem('studentAnswerArr', JSON.stringify(studentAnswerArr));
    })

    //渲染所有问题的模态框
    allQuestionRender(test.exerciseId);



};

/**
 * 倒计时渲染函数，传参总秒数
 */

function countdownRender(totalTime) {
    let timer = setInterval(() => {
        let hour = 0;//时
        let minute = 0;//分
        let second = totalTime;//秒
        if (second > 60) {
            //如果秒数大于60，将秒速换成整数
            //获取分钟，秒数除以60取整，得到整除分钟
            minute = parseInt(second / 60);
            //获取秒数，秒数60取余，得到整数秒数
            second = parseInt(second % 60);
            //如果分钟数大于60，将分钟数换成整数
            if (minute > 60) {
                //获取小时，分钟除以60取整，得到整数小时
                hour = parseInt(minute / 60);
                //获取分钟，分钟60取余，得到整数分钟
                minute = parseInt(minute % 60);
            }
        }
        hour = String(hour).padStart(2, '0');
        minute = String(minute).padStart(2, '0');
        second = String(second).padStart(2, '0');

        //获取页面节点渲染页面倒计时
        $('.countdown').text(`${hour}:${minute}:${second}`);

        //每一秒总时间减少一秒
        totalTime--
        if (totalTime < 0) {
            clearInterval(timer);
            timer = null;
        }
    }, 1000);
}

/**
 * 试卷题目渲染函数
 */
function testRender(data) {
    // console.log(data.exerciseId[checkIndex]);
    const questionData = data.exerciseId[checkIndex];
    //渲染题目类型和名字
    $('.title p').text(questionData.topics);
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
    $('.allQuestionsNUm').text(data.exerciseId.length)
};

/**
 * 点击所有题目，显示所有题目弹框
 */
$('.showOut').on('click', function () {
    $('.allQuestionBg').css({ display: 'block' })
});

/**
 * 点击，隐藏所有题目弹窗
 */
$('.choiceHead').on('click', function () {
    $('.allQuestionBg').css({ display: 'none' })
});

/**
 * 渲染所有题目模态框的信息的函数
 */

function allQuestionRender(data) {
    let radioHtml = '';//单选题的字符串
    let radioNum = 0;//单选题数量
    let radioScore = 0;//单选题总分数
    let checkboxHtml = '';//多选题的字符串
    let checkboxNum = 0;//多选题数量
    let checkboxScore = 0;//多选题总分数

    //遍历数组判断type拼接对应的字符串
    data.forEach((item, index) => {
        if (item.type == 0) {
            radioHtml += `<li class=${index} data-index=${index} data-score=${item.score}>${index + 1}</li>`;
            radioNum++
            radioScore += item.score
        } else if (item.type == 1) {
            checkboxHtml += `<li data-index=${index} data-score=${item.score}>${index + 1}</li>`;
            checkboxNum++
            checkboxScore += item.score
        }
    })
    //渲染单选题
    $('#radioBox').html(radioHtml);
    $('.radioNum').text(`单选题（共${radioNum}题，合计${radioScore}分）`);
    //渲染多选题
    $('#checkbox').html(checkboxHtml);
    $('.checkboxNum').text(`多选题（共${checkboxNum}题，合计${checkboxScore}分）`);



};

/**
 * 获取学生的答案，渲染已回答的背景颜色
 */

studentAnswerArr.forEach((item,index) => {
    if (item) {
        
    }
})


