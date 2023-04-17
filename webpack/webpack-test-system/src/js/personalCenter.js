import '../static/utils/auto-size';
import '../sass/personalCenter.scss';
import './header';

import { http } from '../static/utils/http';

//用于接收文件上传成功后的文件名，我需要这个名字来修改数据库的中头像地址
let imgName = '';

/**
 * 通过token获取用户信息渲染页面
 */
userRender();
async function userRender() {
    //向后端发送请求获取学生信息
    const res = await http({
        url: '/students/getStudentInfo',
        method: 'POST'
    })
    console.log(res);

    //渲染头像
    $('.userImg img').attr('src', `http://127.0.0.1:8888/images/${res.data.avatar}`);

    //渲染用户名
    $('.userBox p').text(`${res.data.phone}`);

    //渲染姓名
    $('.userName input').val(`${res.data.name}`);

    //渲染性别
    switch (res.data.gender) {
        case '男':
            $('#man').prop('checked', true);
            break;
        case '女':
            $('#woman').prop('checked', true);
            break;
    }
};


/**
 * 上传文件点击事件
 */

//通过点击图片触发文件input的点击事件
$('.userImg').on('click', function () {
    $('input[type=file]').click();
});
//input点击事件触发后，触发文件变化事件
$('input[type=file]').on('change', function () {
    //查看input的所有属性
    // console.dir(this);
    //查看input对应的文件信息,files是一个类数组的数据
    // console.dir(this.files[0]);

    //1.获取文件数据
    const filesInfo = this.files[0];

    //2.通过formdata构造函数对文件数据进行格式转换，转换为二进制流
    const fd = new FormData();
    //file对应filesUntils的key
    fd.append('file', filesInfo);
    // console.log(fd)

    //获取本地的用户token
    const token = localStorage.getItem('token');
    $.ajax({
        url: 'http://127.0.0.1:8888/students/fileUp',
        method: 'POST', //文件上传必须是POST请求
        data: fd,//传入二进制流的fd对象
        headers: {
            Authorization: 'Bearer ' + token
        },
        //禁止jqueryajax对传输的数据格式进行内部处理
        contentType: false,
        processData: false,
        success(res) {
            console.log(res);
            //头像回显
            $('.userImg img').attr('src', res.data.imgSrc);
            //拿到头像的文件名
            imgName = res.data.imgTitle;
        }
    })

});




/**
 * 点击保存按钮修改用户信息
 */

$('.save').on('click', async function () {
    //获取用户输入的姓名
    const name = $('.userName input').val();
    console.log(name)

    //用户选择的性别单选框信息
    const gender = $('input[name=gender]:checked').parent().text();
    console.log(gender);

    const res = await http({
        url: '/students/changeStudentInfo',
        method: 'POST',
        data: {
            avatar: imgName,
            name,
            gender
        }
    });
    console.log(res)

    location.assign('../html/homePage.html')
    

});

