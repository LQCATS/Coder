//全局变量
//0表示占位，1表示空座位，2表示已购买，3表示已选中
let seatArr = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
];

//所有座位
let seats = document.querySelector(".seat-row");
//票务信息
let ticket = document.querySelector(".user-seats");

let show1 = document.querySelector(".max-seat");
let show2 = document.querySelector(".choice-seat");

//价格
let priceTotal = document.querySelector(".price span span");

//输入电话号码
let telphone = document.querySelector(".seat-message>input");
//确认选座
let  buttonEle = document.querySelector(".seat-message>button");




/**
 * 主程序
 */
function main() {
    seatReader(seatArr);
    seatClick(seatArr);
};
main();


/**
 * 选座位事件
 */
function seatClick(arr) {
    seats.onclick = function (event) {
        let element = event.target;
        let sum2 = bg3Sum(arr);
        switch (element.className) {
            case "bg1":
                if (sum2 < 5) {
                    //将未选中状态改为已选中状态，找到自定义的data属性确定点击位置
                    let seatPlace = element.getAttribute("data");
                    //将得到的坐标转换成数组，下标0是第几排，下标1是第几个
                    let seatPlaceArr = seatPlace.split("-");

                    arr[seatPlaceArr[0]][seatPlaceArr[1]] = 3;
                    // show1.style.display = "none";
                    // show2.style.display = "block";
                    seatReader(arr);


                } else {
                    alert("最多选择5个座位");
                };


                break;

            case "bg3":

                //将未选座位变为已选状态,找到当前点击座位序号
                let seatPlace2 = element.getAttribute("data");
                //拆分数据
                let seatPlaceArr2 = seatPlace2.split("-")
                arr[seatPlaceArr2[0]][seatPlaceArr2[1]] = 1
                //渲染页面

                seatReader(arr);

                break;
        }

        if (sum2 = 0) {
            show1.style.display = "block";
            show2.style.display = "none";
        } else {

            show1.style.display = "none";
            show2.style.display = "block";
        }
       
    };
};

/**
 * 已选座位总数
 */
function bg3Sum(arr) {
    let sum = 0;
    arr.forEach(value => {
        value.forEach(i => {
            if (i === 3) {
                sum++
            };
        });
    });
    return sum;
};



/**
 * 座位渲染
 */
function seatReader(arr) {
    //拼接座位节点字符串
    let str1 = "";
    // //拼接票务节点字符串
    let str2 = "";
    arr.forEach((element, index) => {
        str1 += `
        <div class="row row${index + 1}">
            <div>${index + 1}</div>
            <ul>`
        element.forEach((element2, index2) => {
            switch (element2) {
                case 0:
                    str1 += `<li></li>`
                    break;
                case 1:
                    str1 += `<li class="bg1" data="${index}-${index2}"></li>`
                    break;
                case 2:
                    str1 += `<li class="bg2" data="${index}-${index2}"></li>`
                    break;
                case 3:
                    str1 += `<li class="bg3" data="${index}-${index2}"></li>`
                    str2 += `
                    <div class="user-seat">
                        ${index}排${index2}座
                    </div>`
                    break;
            }
        })
        str1 += `</ul>
        </div>`
    });
    seats.innerHTML = str1;
    ticket.innerHTML = str2;
    //选中座位数量
     let num = bg3Sum(arr);
     //一张电影票的价格
     let price = document.querySelector(".message>p:last-child span:nth-child(1)").innerText;
     //总价格
     priceTotal.innerHTML = `￥${price * num}`;
};

/**
 * 跳转支付页面
 */

buttonEle.onclick = function() {
    //判断号码是否复合要求
    let regExp = /^13[0-9]{9}$/;
    console.log(regExp.test(telphone.value))
    
};