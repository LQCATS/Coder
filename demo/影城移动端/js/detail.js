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



/**
 * 主函数
 * 
 */
function detailMain() {

    // console.log(nowPlaying);
    // console.log(upComing);

    filmReader(fromType === '1' ? nowPlaying : upComing);

    //排片信息渲染
    cinemaReader(opera);
};
detailMain();



/**
 * 找到页面渲染信息电影id在数据库里对应的对象
 * @returns 返回找到的电影对象
 */
function findCheckMovieObj(moviesArr) {
    //在数组里找到对应电影对象
    const choiceMovieObj = moviesArr.filter(elemt => elemt.id == choiceMovieId)[0];
    return choiceMovieObj
}




/**
 * 影片详情渲染
 * 
 */
function filmReader(moviesArr) {
    const choiceMovieObj = findCheckMovieObj(moviesArr);
    // console.log(choiceMovieObj)
    //渲染头部背景图片
    const choiceMovieSrc = choiceMovieObj.imgSrc;
    $('.big-img').css('backgroundImage', `url(${choiceMovieSrc})`);

    // //渲染小图
    // $('.sml-img img').attr('src',`${choiceMovieSrc}`)

    // //渲染电影名字
    // $('.movie-message h4').text(choiceMovieObj.title.split(' ')[0])

    // //渲染电影类型
    // $(".movie-message p:nth-child(2) em").text(choiceMovieObj.movieType)

    // //电影时长
    // $(".movie-message p:nth-child(3) em").text(choiceMovieObj.duration)

    // //电影评分
    // $(".movie-message p:nth-child(4) em").text(choiceMovieObj.score)

    //渲染header的信息盒子
    const messageHtml = `
        <div class="sml-img">
            <img src="${choiceMovieSrc}" alt="">
        </div>
        <div class="movie-message">
            <h4>${choiceMovieObj.title.split(' ')[0]}</h4>
            <p><span>类型</span><em>${choiceMovieObj.movieType}</em></p>
            <p><span>片长</span><em>${choiceMovieObj.duration}</em></p>
            <p><span>评分</span><em>${choiceMovieObj.score}</em></p>
        </div>
    `
    $('.message-box').html(messageHtml)

    // //电影简介
    $('.item1 p').text(choiceMovieObj.desc)
};




/**
 * 影片对应的影院信息渲染
 */

function cinemaReader(cinemaArr) {
    //筛选出满足条件的影院返回新的数组
    const cinemaIsHaveArr = cinemaArr.filter(elemt => elemt.movies.includes(choiceMovieId))
    // console.log(cinemaIsHaveArr)

    const cinemaIsHaveMessage = cinemaIsHaveArr.map(elemt => {
        return `
            <div class="text">
                <h4 data-id="${elemt.id}">${elemt.name}</h4>
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

    if (cinemaIsHaveArr[0]) {
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