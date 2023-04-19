import '../sass/tests.scss';
import '../static/utils/auto-size';

//引入收藏小心心图片
import { starChoose } from '../images/Tests/test-star2.png';
//引入收藏小心心图片
import { star } from '../images/Tests/test-star.png';
//引入工具函数获取试卷id
import { getUrlData } from '../static/utils/getUrlData';
//引入请求数据函数
import { http } from '../static/utils/http';

//获取试卷id
const { testId, typeId } = getUrlData();
// console.log(testId);

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

    // 获取学生收藏数据
    const getCollectByStuIdRes = await http({
        url: '/tests/getCollectByStuId',
        data: {
            testId,
        }
    });
    // console.log(getCollectByStuIdRes);


    // 学生收藏的题目id数组
    const studentCollectQuestionArr = getCollectByStuIdRes.data.map(item => item.exerciseId);//收藏题目的所有信息
    const studentCollectQuestionIdArr = studentCollectQuestionArr.map(item => item._id);
    // const studentCollectQuestionIdArr = ['62a19d4fcc260000f20007ad', '62a19d4fcc260000f20007ae', '62a19d4fcc260000f20007b0'];
    // console.log(studentCollectQuestionIdArr);

    //后端返回的数据是数组，解构赋值将数据转换成对象
    const [test] = testArr.data
    console.log(test);

    //渲染试卷的标题
    $('.msgBox p').text(test.title)

    //渲染倒计时
    countdownRender(test.durations * 60);

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

    //获取学生答案，储存在本地
    $('.option').on('change', 'input', function () {
        // console.log(checkIndex);
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

    localStorage.setItem('studentAnswerArr', JSON.stringify(studentAnswerArr));
    localStorage.setItem('examQuestionArr', JSON.stringify(test.exerciseId));
    localStorage.setItem('studentCollectQuestionIdArr', JSON.stringify(studentCollectQuestionIdArr));

    //渲染所有问题的模态框
    allQuestionRender(test.exerciseId, [], studentCollectQuestionIdArr);

    //点击答题卡题目，页面渲染对应的题目
    $('.allChoice').on('click', 'li', function () {
        console.log($(this).text());
        checkIndex = $(this).text() - 1;
        testRender(test);
    });


    //点击收藏按钮收藏题目
    $('.collectStatus').on('click', async function () {
        //获取收藏按钮绑定的题目id
        const exerciseId = $(this).data('id');
        //向后端发送请求

        const getCollectRes = await http({
            url: '/tests/addCollectOrDelet',
            method: 'POST',
            data: {
                exerciseId,
            }
        });
        console.log(getCollectRes);


        // 获取学生收藏数据
        const getCollectByStuIdRes = await http({
            url: '/tests/getCollectByStuId',
            data: {
                testId,
            }
        });
        console.log(getCollectByStuIdRes);


        // 学生收藏的题目id数组
        const studentCollectQuestionArr = getCollectByStuIdRes.data.map(item => item.exerciseId);//收藏题目的所有信息
        const studentCollectQuestionIdArr = studentCollectQuestionArr.map(item => item._id);
        // const studentCollectQuestionIdArr = ['62a19d4fcc260000f20007ad', '62a19d4fcc260000f20007ae', '62a19d4fcc260000f20007b0'];
        console.log(studentCollectQuestionIdArr);
        localStorage.setItem('studentCollectQuestionIdArr', JSON.stringify(studentCollectQuestionIdArr));



        if (getCollectRes.msg == '收藏成功') {

            testRender(test);
        } else if (getCollectRes.msg == '删除成功') {

            testRender(test);
        }

    });

    //点击提交试卷弹出信息提示框
    $('.submit').on('click', function () {
        $('.alertBg').css({ visibility: 'visible' });
        //从本地取出考试答案
        const studentAnswerArr = JSON.parse(localStorage.getItem('studentAnswerArr'));
        // console.log(studentAnswerArr);
        if (studentAnswerArr.includes(null) || studentAnswerArr.includes(undefined)) {
            $('.alert p').text('有试题未完成，是否现在交卷？');
        } else {
            if (studentAnswerArr.length < test.exerciseId.length) {
                $('.alert p').text('有试题未完成，是否现在交卷？');
            } else {
                $('.alert p').text('考试已完成，是否现在交卷？');
            }
        }
    });

    //点击关闭考试信息弹窗提醒
    $('.btn button:first-child').on('click', function () {
        $('.alertBg').css({ visibility: 'hidden' });
    });

    //点击确认提交按钮，保存数据，跳转页面
    $('.btn button:nth-child(2)').on('click', async function () {
        //从本地取出考试答案
        const studentAnswerArr = JSON.parse(localStorage.getItem('studentAnswerArr'));

        //算考试总成绩
        let totalScore = 0;//总成绩
        let getTotalScore = 0;//得到的总成绩

        test.exerciseId.forEach((item, index) => {
            totalScore += item.score;
            if (studentAnswerArr[index]) {
                if (studentAnswerArr[index].join() == item.answer.join()) {
                    getTotalScore += item.score;
                }
            }
        })
        // console.log(getTotalScore);
        // console.log(totalScore);

        //向后端发送请求，添加到已考试卷
        //需要传递的参数testId, typeId, answers, score, durations, accuracy
        const accuracy = (getTotalScore / totalScore) * 100 + '%';//准确率
        // console.log(accurac);
        const durationsArr = $('.countdown').text().split(':');
        const timeNow = (durationsArr[0] - 0) * 3600 + (durationsArr[1] - 0) * 60 + (durationsArr[2] - 0)
        const durations = test.durations * 60 - timeNow;
        // console.log(durations);
        const answers = localStorage.getItem('studentAnswerArr');
        console.log(answers);

        const addTestedRes = await http({
            url: '/tests/addTested',
            method: 'POST',
            data: {
                testId,
                typeId,
                answers,
                score: getTotalScore,
                durations,
                accuracy
            }
        });
        console.log(addTestedRes);

        //跳转到结束考试界面
        location.assign(`../html/endTest.html?testId=${testId}&typeId=${typeId}`)
    })



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
    const studentCollectQuestionIdArr = localStorage.getItem('studentCollectQuestionIdArr');
    const isCollect = studentCollectQuestionIdArr.includes(data.exerciseId[checkIndex]._id);
    // console.log(isCollect);
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

    //渲染左下角的收藏图片
    $('.star').attr('src', `${isCollect ? starChoose : star}`);
    //渲染左下角的收藏按钮
    $('.orange').css({ color: isCollect ? '#fe8545' : '#333' });
    //给收藏按钮绑定题目的_id
    $('.collectStatus').data('id', data.exerciseId[checkIndex]._id);
};

/**
 * 点击所有题目，显示所有题目弹框
 */
$('.showOut').on('click', function () {
    const examQuestionArr = JSON.parse(localStorage.getItem('examQuestionArr') || '[]');
    const studentAnswerArr = JSON.parse(localStorage.getItem('studentAnswerArr') || '[]');
    const studentCollectQuestionIdArr = JSON.parse(localStorage.getItem('studentCollectQuestionIdArr') || '[]');

    allQuestionRender(examQuestionArr, studentAnswerArr, studentCollectQuestionIdArr);

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

/**
 * 
 * @param {*} examQuestionArr 题目数据
 * @param {*} answerListArr 学生选择答案列表
 * @param {*} studentCollectQuestionIdArr 学生收藏考试题目id列表
 */


function allQuestionRender(examQuestionArr, answerListArr = [], studentCollectQuestionIdArr = []) {


    let radioHtml = '';//单选题的字符串
    let radioNum = 0;//单选题数量
    let radioScore = 0;//单选题总分数
    let checkboxHtml = '';//多选题的字符串
    let checkboxNum = 0;//多选题数量
    let checkboxScore = 0;//多选题总分数

    //遍历数组判断type拼接对应的字符串
    examQuestionArr.forEach((item, index) => {
        const answerList = answerListArr[index];
        const isChooseAnswer = answerList && answerList.length;
        const isCollect = studentCollectQuestionIdArr.includes(item._id);

        // bgc
        if (item.type == 0) {
            radioHtml += `<li class='${isChooseAnswer ? 'bgc' : ''}' data-index=${index} data-score=${item.score}>${index + 1}${isCollect ? '<div class="collectIcon"></div>' : ''}</li>`;
            radioNum++
            radioScore += item.score
        } else if (item.type == 1) {
            checkboxHtml += `<li class='${isChooseAnswer ? 'bgc' : ''}' data-index=${index} data-score=${item.score}>${index + 1}${isCollect ? '<div class="collectIcon"></div>' : ''}</li>`;
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
 * 点击返回上一页
 */

$('.msgBox').on('click', function () {
    history.go(-1);
});







