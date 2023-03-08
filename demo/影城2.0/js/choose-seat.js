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
let captchaArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "q", "w", "e", "r", "t", "y", "u", "i", "o", "a", "s", "d"];

//所有座位
let seats = document.querySelector(".seat-row");
//票务信息
let ticket = document.querySelector(".user-seats");

let show1 = document.querySelector(".max-seat");
let show2 = document.querySelector(".choice-seat");

//价格
let priceTotal = document.querySelector(".price span span");



//获得电影id
let choiceId = location.search.substring(4);

//渲染电影信息的变量
let movieImg = document.querySelector(".message-movie img");
let movieName = document.querySelector(".message-movie div h4");
let movieTypes = document.querySelector(".message-movie div p:nth-child(2)");
let movieTime = document.querySelector(".message-movie div p:nth-child(3)");
//验证码
let captchaMoive = document.querySelector(".code span");
//填写验证码
let captchaInput = document.querySelector(".code input");
//输入电话号码
let telphone = document.querySelector(".seat-message>input");
//确认选座
let buttonEle = document.querySelector(".seat-message>button");
//验证码整个盒子
let codeElem = document.querySelector(".code");







/**
 * 主程序
 */
function main() {
    seatReader(seatArr);
    seatClick(seatArr);
    movieReader(nowPlaying);
    jumpPay(captchaArr);
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
 * 电影信息渲染
 */
function movieReader(arr) {
    //遍历数组找到对应的电影信息
    arr.forEach(element => {
        if (element.id === choiceId) {
            //渲染图片
            movieImg.src = element.imgSrc;
            //渲染名字
            movieName.innerText = element.title.split(" ")[0];
            //渲染电影类型
            let typeArr1 = element.movieType.split(" ");
            let typeArr2 = typeArr1.slice(0, typeArr1.length - 1);
            let str = "类型："
            typeArr2.forEach(element2 => {
                str += `<span>${element2}</span>`
            })
            movieTypes.innerHTML = str;
            //电影时长
            movieTime.innerHTML = ` 时长： <span>${element.duration}</span>`;
        }
    });
};
/**
 * 跳转支付页面
 */

function jumpPay(arr) {
    //电话号码验证规则
    let regExp = /^13[0-9]{9}$/;
    //随机生成四位数的验证码
    let str = "";
    for (let j = 1; j <= 4; j++) {
        let i = parseInt(Math.random() * arr.length);
        str += arr[i];
    };
    //点击验证码
    captchaMoive.onclick = function () {
        captchaMoive.innerText = str;
    }

    //电话号码失去焦点触发事件
    let verifyResult = {
        isTelTrue: false,
        isCaptchaTrue: false,
    };
    telphone.onblur = function () {
        //判断电话格式是否正确
        let phoneTrue = regExp.test(telphone.value);
        if (phoneTrue) {
            telphone.style.border = "1px solid green";

            verifyResult.isTelTrue = true;
        } else {
            telphone.style.border = "1px solid red";
            verifyResult.isTelTrue = false;
        }

        if (verifyResult.isTelTrue && verifyResult.isCaptchaTrue) {
            buttonEle.style.backgroundColor = '#f99135';
        } else {
            buttonEle.style.backgroundColor = '#dedede';
        }
    };

    //验证码输入框失去焦点事件
    captchaInput.onblur = function () {
        if (captchaInput.value == str) {
            codeElem.style.border = "1px solid green";
            verifyResult.isCaptchaTrue = true;
        } else {
            codeElem.style.border = "1px solid red";
            verifyResult.isCaptchaTrue = false;
        }

        if (verifyResult.isTelTrue && verifyResult.isCaptchaTrue) {
            buttonEle.style.backgroundColor = '#f99135';
        } else {
            buttonEle.style.backgroundColor = '#dedede';
        }
    };

    //密码和验证码都正确可以跳转支付页面
    buttonEle.onclick = function () {
        //判断号码和验证码是否复合要求

        if (verifyResult.isTelTrue && verifyResult.isCaptchaTrue) {
            location.href = `../html/pay.html?id=${choiceId}`
        }
    };


    
}

const renderTimer = () => {
    // 获取到倒计时节点
    // let node = document.getElementById();
    let currTimeSecond = 70;

    let timerId = setInterval(() => {
        const minute = String(parseInt(currTimeSecond / 60)).padStart(2, '0');
        const second = String(parseInt(currTimeSecond % 60)).padStart(2, '0');

        // node.innerText = `${minute}分钟${second}秒`;
        console.log(`${minute}分钟${second}秒`);

        currTimeSecond--;

        if (currTimeSecond < 0) {
            clearInterval(timerId);
        }
    }, 1000);
};

renderTimer();