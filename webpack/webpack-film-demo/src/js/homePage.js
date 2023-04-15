//首页的js文件如果要验证token 则引入auth.js
import '../static/util/auth' //执行auth.js中的代码


import '../sass/homePage.scss';
// import { ajax } from '../static/util/ajax';

//引入封装的http函数，向后端请求数据
import { http } from '../static/util/http';





/**
 * 主函数
 */
function main() {
    //渲染正在热映的电影
    // $('#hot-playing').html(readerHomepage(nowPlaying, 1));
    getMovies();
    //渲染即将上映的电影
    // $('#play-soon').html(readerHomepage(upComing, 2));
    getUpcomingMovies();
    // footerRender('ft-items', 1);
    headerReader();
};
main();


/**
 * ajax获取正在热映的电影数据，并渲染数据
 */
async function getMovies() {

    // //原生ajax
    // ajax({
    //     url: 'http://127.0.0.1:3000/movies/findAll',
    //     method: 'GET',
    //     success(res) {
    //         console.log(res);
    //         $('#hot-playing').html(readerHomepage(res.data, 1));

    //     }
    // })

    // //jquery封装的ajax请求技术
    // $.ajax({
    //     url: 'http://127.0.0.1:3000/movies/findAll',
    //     method: 'GET',
    //     dataType: 'json',
    //     success(res) {
    //         console.log(res);
    //         $('#hot-playing').html(readerHomepage(res.data));
    //     }, error(err) {
    //         console.log(err);

    //         if (err.status == 404) {
    //             $('html').html(err.responseText);

    //         } else if (err == 401) {
    //             location.assign('../html/login.html');

    //         } else if (err == 500) {
    //             $('html').html('服务器错误500')
    //         }

    //     }
    // })

    //异步编程async和await搭配promise
    const res = await http({
        url: 'movies/findAll',
    });
    $('#hot-playing').html(readerHomepage(res.data));
}

/**
 * ajax获取正在热映的数据，并渲染在页面
 */
async function getUpcomingMovies() {
    // $.ajax({
    //     url: 'http://127.0.0.1:3000/upcoming/getAllMovies',
    //     method: 'GET',
    //     dataType: 'json',
    //     success(res) {
    //         console.log(res);
    //         $('#play-soon').html(readerHomepage(res.data, 2));
    //     }, error(err) {
    //         console.log(err);

    //         if (err.status == 404) {
    //             $('html').html(err.responseText);

    //         } else if (err == 401) {
    //             location.assign('../html/login.html');

    //         } else if (err == 500) {
    //             $('html').html('服务器错误500')
    //         }

    //     }
    // })

    //异步编程async和await搭配promise
    const res = await http({
        url: 'upcoming/getAllMovies',
    });
    $('#play-soon').html(readerHomepage(res.data, 2));
}


/**
 * 首页电影渲染函数
 * @returns 正在热映内容和即将上映内容的字符串
 */
function readerHomepage(movieData, type) {
    let moviesTotal = movieData.map(elemt => {
        return `
            <div class="card" data-id="${elemt._id}" data-type="${type}">
                <img src="${elemt.imgSrc ? elemt.imgSrc : elemt.posterSrc}" alt="">
                <h4>${elemt.title}</h4>
            </div>
        `
    }).join('');

    return moviesTotal
};



/**
 * 点击电影图片跳转影片详情页
 * 
 */
$('main').on('click', '.card', function () {
    let moviesId = $(this).data('id');
    let type = $(this).data('type');
    location.href = `./detail.html?type=${type}&id=${moviesId}`;
})


/**
 * 底部按钮切换渲染
 */
import home from '../images/footer_nav_01_normal.png';
import homeChoose from '../images/footer_nav_01_select.png';

import film from '../images/footer_nav_02_normal.png';
import filmChoose from '../images/footer_nav_02_select.png';

import movie from '../images/footer_nav_03_normal.png';
import movieChoose from '../images/footer_nav_03_select.png';

import my from '../images/footer_nav_04_normal.png';
import myChoose from '../images/footer_nav_04_select.png';


//底部数据
let tabbarLists = [
    { id: 1, title: '首页', imgSrc: home, imgSrcCheck: homeChoose, isChoose: true },
    { id: 2, title: '影院', imgSrc: film, imgSrcCheck: filmChoose, isChoose: false },
    { id: 3, title: '影片', imgSrc: movie, imgSrcCheck: movieChoose, isChoose: false },
    { id: 4, title: '我的', imgSrc: my, imgSrcCheck: myChoose, isChoose: false }
];

/**
 * 底部渲染函数
 */

function footerReader() {
    let footerHtml = tabbarLists.map(item => {
        return `
            <div class="ft-item thaeter" data-id="${item.id}">
                <img src="${item.isChoose ? item.imgSrcCheck : item.imgSrc}" alt="">
                <span class="${item.isChoose ? 'ft-click' : ''}">${item.title}</span>
            </div>
        `
    }).join(' ');
    $('.ft-items').html(footerHtml);
};
footerReader();

/**
 * 点击底部图片切换事件
 */
$('.ft-items').on('click', '.ft-item', function () {
    //获取当前点击标签的自定义属性id值
    let _id = $(this).data('id');
    //遍历数据数组，找到被选中的对象
    tabbarLists.forEach(item => {
        //每次循环先默认全部不选中
        item.isChoose = false;

        if (item.id === _id) {
            item.isChoose = true;
        }
    });
    footerReader();
});


/**
 * 头部登录信息渲染
 */
async function headerReader() {
    // //获取本地登录的信息
    // let userLoginSucced = JSON.parse(localStorage.getItem('loginUser') || '[]');

    // if (userLoginSucced[0]) {
    //     $('.title-box span').text(`您好，${userLoginSucced[0].userName}${userLoginSucced[0].gender}！`)

    // } else {
    //     $('.title-box span').text('您好，请登录！')
    // }

    const res = await http({
        url: 'users/getUserInfo'
    })
    console.log(res)

    if (res.data._id) {
        $('.title-box span').text(`您好，${res.data.userName}`)

    } else {
        $('.title-box span').text('您好，请登录！')
    }

};