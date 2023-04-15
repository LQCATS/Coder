import { http } from '../static/util/http';


//用于接收文件上传成功后的文件名，我需要这个名字来修改数据库的中头像地址
let imgName = '';

//每次进到用户个人中心的时候都需要动态渲染头像以及其他的对应信息
userRender()
async function userRender() {
    const user = await http({
        url: 'users/getUserInfo',
    });
    console.log(user);
    $('img').attr('src',`http://127.0.0.1:3000/images/${user.data.img}`);
}
//上传文件，上传文件触发事件
$('input').on('change', function () {
    //查看input的所有属性
    console.dir(this);
    //查看input对应的文件信息,files是一个类数组的数据
    console.dir(this.files[0]);

    //1.获取文件数据
    const filesInfo = this.files[0];

    //2.通过formdata构造函数对文件数据进行格式转换，转换为二进制流
    const fd = new FormData();
    //file对应filesUntils的key
    fd.append('file', filesInfo);
    console.log(fd)

    const token = localStorage.getItem('token');
    $.ajax({
        url: 'http://127.0.0.1:3000/files/fileUp',
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
            $('img').attr('src', res.data.imgSrc);
            //拿到头像的文件名
            imgName = res.data.imgTitle;
        }
    })
})

//点击按钮确认修改，将数据保存在数据库中
$('button').on('click', async function () {
    if (imgName) {
        console.log(imgName);
        const res = await http({
            url: 'users/changeUserInfo',
            method: 'POST',
            data: {
                img: imgName,
                age: 22
            }
        })

        if (res.code == 1) {
            alert('修改成功')
        } else {
            alert('修改失败')
        }

    } else {
        alert('请选择图片')
    }
})