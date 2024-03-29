import '../css/seats.css';

import { http } from '../static/util/http';

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


// var seats = [
//     [{ id: 1, seat: 'kx' }, { id: 2, seat: 'kx' }, { id: 3, seat: 'kx' }, { id: 4, seat: 'kx' }, { id: 5, seat: 'kx' }, { id: 6, seat: 'kx' }],
//     [{ id: 7, seat: 'kx' }, { id: 8, seat: 'kx' }, { id: 9, seat: 'kx' }, { id: 10, seat: 'kx' }, { id: 11, seat: 'kx' }, { id: 12, seat: 'kx' }],
//     [{ id: 13, seat: 'kx' }, { id: 14, seat: 'kx' }, { id: 15, seat: 'kx' }, { id: 16, seat: 'kx' }, { id: 17, seat: 'kx' }, { id: 18, seat: 'kx' }],
//     [{ id: 19, seat: 'kx' }, { id: 20, seat: 'kx' }, { id: 21, seat: 'kx' }, { id: 22, seat: 'kx' }, { id: 23, seat: 'kx' }, { id: 24, seat: 'kx' }],
//     [{ id: 25, seat: 'ys' }, { id: 26, seat: 'ys' }, { id: 27, seat: 'ys' }, { id: 28, seat: 'kx' }, { id: 29, seat: 'kx' }, { id: 30, seat: 'kx' }],
//     [{ id: 31, seat: 'ys' }, { id: 32, seat: 'ys' }, { id: 33, seat: 'ys' }, { id: 34, seat: 'kx' }, { id: 35, seat: 'kx' }, { id: 36, seat: 'kx' }],
// ]

// // 将所有的座位信息存储在本地
// localStorage.setItem('seats',JSON.stringify(seats))


//取出所有的座位信息
let seats = JSON.parse(localStorage.getItem('seats') || '[]');

//座位行数对应的字母
let seatRow = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
}

/**
 * 座位渲染函数
 */

seatsReader()
function seatsReader() {
    let seatHtml = seats.map((item, idx) => {
        return `
            <dl class="row">
                ${item.map((seat, index) => {
            return `
                        <dd data-id="${seat.id}">
                            <div class="${seat.seat}">${seatRow[idx]}${index + 1}</div>
                        </dd>
                    `
        }).join(' ')}
             </dl>  
            `
    }).join(' ');

    $('.seat').html(seatHtml)
}

/**
 * 座位点击事件
 */


//选择已选座位的信息
let seatChoose = [];
//电影单价
let Price = 30;

//座位是动态渲染的，需要将事件委托给父盒子
$('.seat').on('click', 'dd', function () {

    //遍历二维数组找到点击得座位信息，二维数组需要双重遍历
    seats.forEach(item => {

        item.forEach(seat => {
            //触发事件点击的dd标签 在座位数组里面对应的信息
            if ($(this).data('id') === seat.id) {

                if (seat.seat === 'kx') {
                    //点击kx可选座位变成yx已选座位
                    seat.seat = 'yx';
                    //将选择的座位信息储存起来,trim()api是去掉首尾空格
                    seatChoose.push({
                        id: $(this).data('id'),
                        title: $(this).text().trim(),
                    })

                } else if (seat.seat === 'yx') {
                    //点击yx座位变成kx
                    seat.seat = 'kx';
                    //将取消选作的座位信息从seatChoose中删除,等价于筛选出seatChoose中不是点击的id
                    seatChoose = seatChoose.filter(newSeat => $(this).data('id') != newSeat.id)
                }

                console.log(seatChoose)
                //将选择的座位信息储存在本地
                localStorage.setItem('seatChoose', JSON.stringify(seatChoose));

            }
        })
    })
    seatsReader()


    // 遍历已选座位的数组渲染购票信息
    let selectedHtml = seatChoose.map(item => {
        return `
        <ol>
           ${item.title}
        </ol>
    `
    }).join(' ')

    
    $('.selected').html(selectedHtml)
    $('.allprice p').text(`￥${Price * seatChoose.length}`)

})

/**
 * 电影和影院信息渲染
 */

//获取电影id和影院id
const parseResult = parseSearch(location.search);

const choiceMovieId = parseResult.movieId;
const choiceCinemaId = parseResult.cinemaId;

movieNameReader();

async function movieNameReader() {
    const moviesRes = await http({
        url: 'movies/findAll',
    })
    const moviesArr = moviesRes.data;
    console.log(moviesArr)

    let movieName = '';
    moviesArr.forEach(moiveItem => {
        if (choiceMovieId == moiveItem._id) {
            movieName += `<h3>${moiveItem.title.split(' ')[0]}</h3>`
        }
    })

    const cinemaRes = await http({
        url: 'operas/getAllOperas',
    })
    const cinemaArr = cinemaRes.data;
    console.log(cinemaArr)

    let cinemaName = '';
    cinemaArr.forEach(cinemaItem => {
        if (choiceCinemaId == cinemaItem._id) {
            cinemaName += `<p>${cinemaItem.name} • 2020-04-16 星期一 19：00 </p>`
        }
    })

    $('.content').html(movieName + cinemaName)
}


/**
 * 点击立即购票跳转页面
 */
//点击立即购票跳转到订单页面
$('.buy').click(async function () {
    //遍历座位数组，将yx的改为ys
    seats.forEach(item => {
        item.forEach(seat => {
            if (seat.seat === 'yx') {
                seat.seat = 'ys'
            }
        })
    })

    //将最新的座位数据转换成JSON字符串储存在本地
    localStorage.setItem('seats', JSON.stringify(seats))

    const addSeatsOrder = await http({
        url: 'orders/addOrder',
        method: 'POST',
        data: {
            movieId: choiceMovieId,
            operaId: choiceCinemaId,
            seats: JSON.stringify(seatChoose),//如果数据中涉及到数组以及对象的传递时需要转成json字符串
            totalPrice: Price * seatChoose.length 

        }
    })
    //跳转到订单页面,传递参数为订单id
    location.assign(`./buySuccess.html?orderId=${addSeatsOrder.data._id}`)

})





