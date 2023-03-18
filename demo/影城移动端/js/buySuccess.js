/**
 * 电影和影院信息渲染
 */

//获取网页传参信息
const parseSearch = (searchStr) => {
    if (!searchStr || searchStr.length <= 1) {
        //如果截取的信息没有或只有一个？
        return {};
    }

    //截取的信息存在且长度不为1
    //去掉？
    const paramStr = searchStr.substring(1);
    //将字符串以&转为数组
    const paramStrSpitArr = paramStr.split('&');
    //定义参数对象
    const params = {};

    //循环数组拆分键值对
    for (let i = 0; i < paramStrSpitArr.length; i++) {
        const tempStr = paramStrSpitArr[i];

        const tempStrSplitArr = tempStr.split('=');

        params[tempStrSplitArr[0]] = tempStrSplitArr[1];
    }

    return params;

}

//获取电影id和影院id
const parseResult = parseSearch(location.search);

const choiceMovieId = parseResult.movieId;
const choiceCinemaId = parseResult.cinemaId;

function movieNameReader(moviesArr, cinemaArr) {
    let movieName = '';
    let movieImg = '';
    moviesArr.forEach(moiveItem => {
        if (choiceMovieId == moiveItem.id) {
            movieName += `<h4>${moiveItem.title.split(' ')[0]}</h4>`;
            movieImg += `<img src="${moiveItem.imgSrc}" alt="">`;
        }
    })
    let cinemaName = '';
    cinemaArr.forEach(cinemaItem => {
        if (choiceCinemaId == cinemaItem.id) {
            cinemaName += `<p>${cinemaItem.name} • 英文 2D </p>`
        }
    })

    $('.text').append(movieName + cinemaName);
    $('.image').html(movieImg);
}

movieNameReader(nowPlaying, opera);

/**
 * 座位信息渲染
 */

//在本地储存拿到座位信息
let seatChoose = JSON.parse(localStorage.getItem('seatChoose') || '[]');

let seats = seatChoose.map(item => {
    return `
        <li>
            ${item.title}
        </li>
    `
}).join(' ');

$('.seat-message ul').html(seats);
$('.seats-total').text(`${seatChoose.length}`)



/**
 * 二维码
 */

jQuery(function () {
    jQuery("#output").qrcode({
        render: 'canvas',
        text: 'https://www.woniuxy.com',
        width: 50,
        height: 50,

    });
});

/**
 * 返回首页
 */

$('.footer button').click(function () {
    location.assign('./homePage.html')
})