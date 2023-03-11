//全局变量
//获得传参
let movieMessage = decodeURIComponent(location.search);
let movieMessageArr = movieMessage.split(";");
//获得电影id
let moviesId = movieMessageArr[0].substring(4);
//获得电影票总价格
let totalPrice = movieMessageArr[1].substring(6);
//获得座位信息
let seats = movieMessageArr[2].substring(7);


//电影名字标签
let moviesName = document.querySelector("tbody tr td:nth-child(1)");
//座位信息标签
let seatMessage = document.querySelector("tbody tr td:nth-child(4)");
//总价格标签
let totalPriceElem = document.querySelector(".payment p span:nth-child(2)");

//支付方式标签
let payMethodElem = document.querySelector(".pay-method");
//支付宝
let zhifubaoElem = document.querySelector(".pay-box1");
//微信
let weixinElem = document.querySelector(".pay-box2");
//银联
let yinlianElem = document.querySelector(".pay-box3");

//倒计时分钟标签
let minuteElem = document.querySelector(".timer div p span:nth-child(2)");
//倒计时秒标签
let secondElem = document.querySelector(".timer div p span:nth-child(4)");

//跳转页面
let paySuccessJumpElem = document.querySelector(".payment button");



/**
 * 主程序
 */
function main() {
    payMessageReader(nowPlaying);
    payMessageReader(upComing);
    payClick();
    timerReader();
};
main();

/**
 * 倒计时渲染
 */

function timerReader() {
    //倒计时换算成总秒数
    let totalTime = 829;
    // let totalTime = 63;

    let timers = setInterval(() => {
        let minute = String(parseInt(totalTime / 60)).padStart(2, "0");
        let second = String(parseInt(totalTime % 60)).padStart(2, "0");
        minuteElem.innerText = minute;
        secondElem.innerText = second;
        totalTime--
        if (totalTime < 0) {
            clearInterval(timers);
            timers = null;
        }
    }, 1000);
};
/**
 * 电影信息渲染
 */

function payMessageReader(arr) {
    for (let i = 0; i < arr.length; i++) {
        //在数据库循环找到对应的电影数据
        if (arr[i].id === moviesId) {
            //渲染电影名字
            moviesName.innerText = `《${arr[i].title.split(" ")[0]}》`;
            //渲染座位
            seatMessage.innerHTML = `
            <span>4号厅</span>
            <span>${seats}</span>`;
            //渲染总价格
            totalPriceElem.innerText = totalPrice;
            break;
        };
    }
};

/**
 * 点击支付方式选择事件
 */
function payClick() {
    //委托事件个父级pay-method
    payMethodElem.onclick = function (event) {
        let element = event.target;
        if (element.className === "pay-box pay-box1") {
            //支付宝边框变色其他不变
            element.style.border = "2px solid #f99135";
            weixinElem.style.border = "2px solid #dbdbdb";
            yinlianElem.style.border = "2px solid #dbdbdb";

        } else if (element.className === "pay-box pay-box2") {
            //微信边框变色，其他不变
            element.style.border = "2px solid #f99135";
            zhifubaoElem.style.border = "2px solid #dbdbdb";
            yinlianElem.style.border = "2px solid #dbdbdb";

        } else if (element.className === "pay-box pay-box3") {
            //银联边框变色，其他不变
            element.style.border = "2px solid #f99135";
            zhifubaoElem.style.border = "2px solid #dbdbdb";
            weixinElem.style.border = "2px solid #dbdbdb";
        }
    };
};

/**
 * 跳转到支付成功页面
 */
paySuccessJumpElem.onclick = () =>{
    location.href = `../html/paySuccess.html?id=${moviesId};total=${totalPrice};seats=${seats}`
};