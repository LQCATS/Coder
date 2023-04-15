import '../sass/detail.scss';

import { http } from '../static/util/http'

//全局变量
const parseSearch = (searchStr) => {
    if (!searchStr || searchStr.length <= 1) {
        return {};
    }

    const paramStr = searchStr.substring(1);
    const paramStrSpitArr = paramStr.split('&');
    const params = {};
    for (let i = 0; i < paramStrSpitArr.length; i++) {
        const tempStr = paramStrSpitArr[i];

        const tempStrSplitArr = tempStr.split('=');
        params[tempStrSplitArr[0]] = tempStrSplitArr[1];
    }

    return params;
}

//从网页地址获得电影id
const parseResult = parseSearch(location.search);

const fromType = parseResult.type;
const choiceMovieId = parseResult.id;
// const choiceMovieId = location.search.slice(4);
console.log(fromType, choiceMovieId)



/**
 * 主函数
 * 
 */
function detailMain() {

    // console.log(nowPlaying);
    // console.log(upComing);

    // filmReader(fromType === '1' ? nowPlaying : upComing);
    getMovies();
    getUpcomingMovies();

    //排片信息渲染
    getOperas();
    // cinemaReader(opera);
};
detailMain();

/**
 * ajax获取正在热映的数据，并渲染在页面
 */
async function getMovies() {
    // $.ajax({
    //     url: 'http://127.0.0.1:3000/movies/findAll',
    //     method: 'GET',
    //     dataType: 'json',
    //     success(res) {
    //         console.log(res);
    //         filmReader1(res.data);
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

    const res = await http({
        url: 'movies/findAll',
    });
    filmReader1(res.data);
}

/**
 * ajax获取即将上映的数据，并渲染在页面
 */
async function getUpcomingMovies() {
    // $.ajax({
    //     url: 'http://127.0.0.1:3000/upcoming/getAllMovies',
    //     method: 'GET',
    //     dataType: 'json',
    //     success(res) {
    //         console.log(res);
    //         filmReader2(res.data);
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



    const res = await http({
        url: 'upcoming/getAllMovies'
    });
    filmReader2(res.data);
}


/**
 * 找到页面渲染信息电影id在数据库里对应的对象
 * @returns 返回找到的电影对象
 */
function findCheckMovieObj(moviesArr) {
    //在数组里找到对应电影对象
    const choiceMovieObj = moviesArr.find(elemt => elemt._id == choiceMovieId);
    return choiceMovieObj
}




/**
 * 正在热映影片详情渲染
 * 
 */
function filmReader1(moviesArr) {
    const choiceMovieObj = findCheckMovieObj(moviesArr);
    console.log(choiceMovieObj)
    //渲染头部背景图片
    if (choiceMovieObj) {
        const choiceMovieSrc = choiceMovieObj.imgSrc;
        $('.big-img').css('backgroundImage', `url(${choiceMovieSrc})`);

        //渲染header的信息盒子
        const messageHtml = `
            <div class="sml-img">
                <img src="${choiceMovieSrc}" alt="">
            </div>
            <div class="movie-message">
                <h4>${choiceMovieObj.title.split(' ')[0]}</h4>
                <p><span>类型</span><em>${choiceMovieObj.movieType.name}</em></p>
                <p><span>片长</span><em>${choiceMovieObj.duration}</em></p>
                <p><span>评分</span><em>${choiceMovieObj.score}</em></p>
            </div>
        `
        $('.message-box').html(messageHtml)

        // //电影简介
        $('.item1 p').text(choiceMovieObj.desc)
    }

};

/**
 * 即将上映影片详情渲染
 * 
 */
function filmReader2(moviesArr) {
    const choiceMovieObj = findCheckMovieObj(moviesArr);
    console.log(choiceMovieObj)
    //渲染头部背景图片
    if (choiceMovieObj) {
        const choiceMovieSrc = choiceMovieObj.posterSrc;
        $('.big-img').css('backgroundImage', `url(${choiceMovieSrc})`);

        //渲染header的信息盒子
        const messageHtml = `
            <div class="sml-img">
                <img src="${choiceMovieSrc}" alt="">
            </div>
            <div class="movie-message">
                <h4>${choiceMovieObj.title.split(' ')[0]}</h4>
                <p><span>片长</span><em>${choiceMovieObj.duration}</em></p>
            </div>
        `
        $('.message-box').html(messageHtml)

        //电影简介
        // $('.item1 p').text(choiceMovieObj.desc)
    }
};



/**
 * ajax获取该电影对应的影院数据，并渲染在页面
 */
async function getOperas() {
    // $.ajax({
    //     // url: `http://127.0.0.1:3000/operas/getOperasByMovies?movieId=${choiceMovieId}`,
    //     url: `http://127.0.0.1:3000/operas/getOperasByMovies`,
    //     method: 'GET',
    //     dataType: 'json',
    //     data: {
    //         movieId: choiceMovieId
    //     },//data对象的传递方式，不需要考虑传递方式是get还是post，jQuery已经封装好了方法
    //     success(res) {
    //         console.log(res);
    //         cinemaReader(res.data);
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
    const res = await http({
        url: 'operas/getOperasByMovies',
        data: {
            movieId: choiceMovieId
        },
    });
    cinemaReader(res.data)
}


/**
 * 影片对应的影院信息渲染
 */

function cinemaReader(cinemaArr) {
    //筛选出满足条件的影院返回新的数组
    // const cinemaIsHaveArr = cinemaArr.filter(elemt => elemt.movies.includes(choiceMovieId))
    // console.log(cinemaIsHaveArr)

    const cinemaIsHaveMessage = cinemaArr.map(elemt => {
        return `
            <div class="text">
                <h4 data-id="${elemt._id}">${elemt.name}</h4>
                <p class="map"> <img src="${elemt.img_src}" alt="">
                    ${elemt.address}</p>
                <h5>英文 2D • ￥30.00</h5>
                <ul>
                    <li class="li-3">
                        11:00
                    </li>
                    <li class="li-1">
                        11:00
                    </li>
                    <li class="li-2">
                        11:00
                    </li>
                    <li class="li-2">
                        11:00
                    </li>
                    <li class="li-2">
                        11:00
                    </li>
                    <li class="li-2">
                        11:00
                    </li>
                    <li class="li-2">
                        11:00
                    </li>
                </ul>
            </div>`
    }).join(' ');

    if (cinemaIsHaveMessage) {
        $('.item2').append(cinemaIsHaveMessage);
    } else {
        $('.item2').html('<div style="color:red;text-align:center;">暂无影院放映</div>');
    }

};

/**
 * 排片和简介切换
 */

//点击排片按钮
$('.film-schedule').click(function () {
    $('.item2').show();
    $('.item1').hide();
    $(this).css('borderBottom', '0.08rem solid #4073ff');
    $('.brief').css('borderBottom', 'none');
})

//点击简介按钮
$('.brief').click(function () {
    $('.item1').show();
    $('.item2').hide();
    $(this).css('borderBottom', '0.08rem solid #4073ff');
    $('.film-schedule').css('borderBottom', 'none');
})

/**
 * 跳转地图页面
 */

//信息是渲染的需要事件委托
$('.item2').on('click', '.map', function () {
    location.assign(`./map.html?address=${$(this).text()}`)
})

/**
 * 视频
 */
//获取video标签，使用原生的方法，不要是用jQuery
const videoElem = document.querySelector('.video');

//进入页面视频播放时间
let continueTime = localStorage.getItem('videoCurrentTime') || '0';
//~~将字符串转为数字（原理：一个~将原字符串隐式转换为负数再-1）
videoElem.currentTime = ~~continueTime;

//离开详情页面触发事件
window.onunload = function () {
    //获取视频当前播放的时间
    let videoCurrentTime = videoElem.currentTime;
    //将当前时间储存在本地
    localStorage.setItem('videoCurrentTime', videoCurrentTime);
}


/**
 * 跳转选座页面
 */


//影院选中开关变量，默认不选中
let isCinemaChoice = false;

let cinemaId;
//委托事件给main，点击影院名字颜色变蓝
$('main').on('click', '.text h4', function () {
    $('.text h4').css('color', '#333');
    $(this).css('color', '#4073ff');
    cinemaId = $(this).data('id');
    isCinemaChoice = true;

})



//选座按钮点击事件
$('#toseat').click(function () {
    //选择了影院才跳转
    if (isCinemaChoice) {
        location.assign(`./seats.html?movieId=${choiceMovieId}&cinemaId=${cinemaId}`);
    } else {
        alert('请选择影院');
    }
})