import '../static/utils/auto-size';
import '../sass/errorBook.scss';

import { http } from '../static/utils/http';
import deleteImg from '../images/错题本2_05.png'
import jiexiImg from '../images/错题本2_03.png'

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
 * 根据学生token请求该学生错误的所有题目
 */

getCollectAllBystudent();
async function getCollectAllBystudent() {
    const allErrorMsg = await http({
        url: '/tests/allErrorByStudentId'
    });
    console.log(allErrorMsg);

    const allErrorArr = allErrorMsg.data;
    console.log(allErrorArr);

    //渲染所有题目
    testRender(allErrorArr);

    //点击切换上一题
    $('.previous').on('click', function () {
        if (checkIndex > 0) {
            checkIndex--
            testRender(allErrorArr);
        }
    });

    //点击切换下一题
    $('.next').on('click', function () {

        if (checkIndex < allErrorArr.length - 1) {
            checkIndex++;
            testRender(allErrorArr);
        }
    });


    //点击删除，删除收藏的题目
    $('.delete1').on('click', async function () {
        // console.log($(this).data('id'));
        const exerciseId = $(this).data('id');
        const deleteMsg = await http({
            url: '/tests/deleteError',
            method: 'POST',
            data: {
                exerciseId
            }
        });
        console.log(deleteMsg);

        const allErrorMsgDetleteAfter = await http({
            url: '/tests/allErrorByStudentId'
        });
        const allErrorMsgDetleteAfterArr = allErrorMsgDetleteAfter.data;
        console.log(allErrorMsgDetleteAfterArr);
        testRender(allErrorMsgDetleteAfterArr);
    });



    //点击重新复习，回到第一题
    $('.returnFrist').on('click', function () {
        checkIndex = 0;
        testRender(allErrorArr);
    })

    //点击返回首页
    $('.returnPrevious').on('click', function () {
        location.assign('../html/homePage.html');
    })

}



/**
 * 试卷题目渲染函数
 */
function testRender(data) {
    // console.log(data.exerciseId[checkIndex]);
    const questionData = data[checkIndex].exerciseId;

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
    $('.allQuestionsNum').text(data.length);

    //渲染正确答案
    const answer = questionData.answer.map(i => {
        return `
        ${optionLetter[i]}`
    });
    $('.answer h1').text(`正确答案：${answer}`);

    //渲染删除和解析按钮
    $('.delete1').html(`<img src=${deleteImg} alt="">
    <span>删除</span>`);
    $('.analysis').html(`<img src=${jiexiImg} alt="">
    <span>解析</span>`)

    //给收藏按钮绑定题目的_id
    $('.delete').data('id', questionData._id);


};


