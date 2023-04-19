import '../sass/startTest.scss';
import '../static/utils/auto-size';

//引入http请求数据函数
import { http } from '../static/utils/http';
//引入截取网页传参工具
import { getUrlData } from '../static/utils/getUrlData';

//获取网页传参数据
const { testId, typeId } = getUrlData();

//获取用户token
const token = localStorage.getItem('token');

/**
 * 向后端请求数据，渲染页面
 */
startTestRender();
async function startTestRender() {
    //发送请求通过试卷id获取试卷的信息
    const startTest = await http({
        url: '/tests/getTestById',
        data: {
            testId
        }
    });
    console.log(startTest);

    const contentTestHtml = startTest.data.map(item => {
        return `
        <div class="title">${item.title}</div>
        <div class="testMsgBox testMsg">
            <div class="msgTitle">试卷信息</div>
            <p>考试类型：<span>${item.typeId.type}</span></p>
            <p>考试时间：<span>${item['start-time']} ~ ${item['end-time']}</span></p>
            <p>答卷时间：<span>${item.durations}分钟</span></p>
            <p>考试方式：<span>线上</span></p>
        </div>
        `
    });
    //渲染试卷信息
    $('.content').append(contentTestHtml);

    //通过token获取学生信息
    const studentsMsg = await http({
        url: '/students/getStudentInfo',
        method: 'POST'
    });
    console.log(studentsMsg.data);

    const contentStudentHtml = `
        <div class="testMsgBox studentMsg">
            <div class="msgTitle">考生信息</div>
            <p>姓名：<span>${studentsMsg.data.name}</span></p>
            <p>证件号码：<span>3423445234634451231</span></p>
            <p>部门：<span>信息中心</span></p>
        </div>
        <button>开始答题</button>
        <div class="return">返回上一步</div>`

    //渲染学生信息
    $('.content').append(contentStudentHtml);
};

/**
 * 点击事件，返回上一页，开始答题
 */

//返回上一页
$('.content').on('click', '.return', function () {
    //调用window的history方法返回到历史的上一页
    history.go(-1)
});

//跳转到开始答题
$('.content').on('click', 'button', function () {
    location.assign(`../html/tests.html?testId=${testId}&typeId=${typeId}`)
});
