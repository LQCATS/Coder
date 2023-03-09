//全局变量
//获得传参
let movieMessage = decodeURIComponent(location.search);
let movieMessageArr = movieMessage.split(";");
//获得电影id
let moviesId = movieMessageArr[0].substring(4);
//获得电影票总价格
let totalPrice = movieMessageArr[1].substring(6);
//获得座位信息
let seats = movieMessageArr[2].substring(6);

//电影图片biaoqian
let imgMovie = document.querySelector("tbody tr td img");
//电影名字
let moviesNameElem = document.querySelector("tbody tr td div h4");
//座位信息
let seatMessageElem = document.querySelector("tbody tr td div span");
//总价格
let totalPriceElem = document.querySelector("tbody tr td:nth-child(2");


/**
 * 主程序
 */
function main() {
    payMessageReader(nowPlaying);
    payMessageReader(upComing);
};
main();

/**
 * 电影信息渲染
 */
function payMessageReader(arr) {
    for (let i = 0; i < arr.length; i++) {
        //在数据库循环找到对应的电影数据
        if (arr[i].id === moviesId) {
            //渲染电影图片
            imgMovie.src = `${arr[i].imgSrc}`;
            //渲染电影名字
            moviesNameElem.innerText = `《${arr[i].title.split(" ")[0]}》`;
            //渲染座位
            seatMessageElem.innerText = seats;
            //渲染总价格
            totalPriceElem.innerText = `￥${totalPrice}`;
            break;
        };
    }
};