import '../sass/testsAll.scss';
import '../static/utils/auto-size';

import './header';

//引入获取路劲传参的工具函数
import { getUrlData } from '../static/utils/getUrlData';
//引入向后端发送请求的工具函数
import { http } from '../static/utils/http';

//获取考试类型的id
const typeId = getUrlData().typeId;
console.log(typeId);

/**
 * 渲染页面数据
 */
testsAllRender();
async function testsAllRender() {
    //向后端发送请求，通过typeId获取试卷信息
    const testsData = await http({
        url: '/tests/getIdByType',
        data: {
            typeId
        }
    });
    console.log(testsData);

    //渲染页面
    const testsHtml = testsData.data.map(item =>{
        return `
            <div class="testBox">
                <img src="../images/考试_03.png" alt="">
                <div class="msg">
                    <div class="testType">
                        <h3>${item.title}</h3>
                        <div class="testStatus">可参加</div>
                    </div>
                    <p>2022-03-31 09:48~2022-04-03 09:48</p>
                    <div class="duration">
                        <img src="../images/Tests/clock.png" alt="">
                        <span>限时60分钟</span>
                    </div>
                </div>
                <div class="button" data-id=${item._id}>进入</div>
            </div>`
    }).join('');

    $('.testsDoing').append(testsHtml)
};

/**
 * 点击进入试卷页面
 */
$('.testsDoing').on('click','.button',function () {
    // console.log($(this));
    //获取自定义属性，试卷id
    const testId = $(this).data('id');
    console.log(testId);
    //跳转到开始考试页面
    location.assign(`../html/startTest.html?testId=${testId}`)
});

