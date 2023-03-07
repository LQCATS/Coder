

let banner = [
    { id: 1, imgSrc: "../影城img/slider01.png" },
    { id: 2, imgSrc: "../影城img/slider02.png" },
    { id: 3, imgSrc: "../影城img/slider03.png" },
    { id: 4, imgSrc: "../影城img/slider04.png" }
];

//全局变量
//banner
let ulElem = document.querySelector(".list");
let bigImgElem = document.querySelector(".big-img");
let showIndex = 0;

//正在热映全局变量
let hotMoviesElem = document.querySelector(".hot-playing-items");
let spanElem = document.querySelector("#hot-num");

//即将上映全局变量
let soonMoviesElem = document.querySelector(".coming-soon-items");
let soonSpanElem = document.querySelector("#soon-num");

//选择影院
let select1 = document.querySelector("#theatre");
let select2 = document.querySelector("#film");
let select3 = document.querySelector("#time");

/** 
 * 主程序
 */

function main() {
    //banner
    reader(banner);
    clickLi(banner);
    change(banner);
    autoPlay(banner);
    //选择影院
    theatreReader(opera);
    //选择电影
    filmReader(nowPlaying);
    //选择时间
    timeReader();
    //正在热映
    hotReader(nowPlaying);
    //即将上映
    soonReader(upComing);
    

};


main();


/**
 * banner部分
 */

/**
 * 间隔定时器
 */
function autoPlay(arr) {
    timer = setInterval(() => {
        if (showIndex === arr.length - 1) {
            showIndex = 0;
        } else {
            showIndex++
        }
        reader(arr);
    }, 2000);

};

/**
 * 左右切换图片事件
 */

function change(arr) {
    let left = document.querySelector(".fa-chevron-left");
    let right = document.querySelector(".fa-chevron-right");
    //左点击切换上一张图片
    left.onclick = function () {
        //找到对应的图片下标
        if (showIndex === 0) {
            showIndex = arr.length - 1;
        } else {
            showIndex--;
        }
        //渲染图片
        reader(arr);
        //清除间隔定时器
        clearInterval(timer)
        //调用自动轮播
        autoPlay(arr);

    };

    //右点击切换下一张图片
    right.onclick = function () {
        if (showIndex === arr.length - 1) {
            showIndex = 0;
        } else {
            showIndex++;
        }
        //渲染图片
        reader(arr);
        //清除间隔定时器
        clearInterval(timer)
        //调用自动轮播
        autoPlay(arr);
    };

};

/**
 * li切换图片事件
 */
function clickLi(arr) {
    ulElem.onclick = function (event) {
        let element = event.target;
        if (element != "list") {
            showIndex = element.getAttribute("index") - 0;
        }
        reader(arr);
        //清除间隔定时器
        clearInterval(timer)
        //调用自动轮播
        autoPlay(arr);
    }

};


/**
 * banner渲染
 */
function reader(arr) {
    //小li
    ulElem.innerHTML = "";
    arr.forEach((element, index) => {
        let newLi = document.createElement("li");
        newLi.setAttribute("index", index);
        if (showIndex === index) {
            newLi.style.backgroundColor = "#f99135";
        }
        ulElem.appendChild(newLi);
    })
    //渲染banner图片
    bigImgElem.src = arr[showIndex].imgSrc;

};

/**
 * 选择影院渲染
 */
function theatreReader(arr) {
    let str = `<option value="">选择影院</option>`;
    arr.forEach(value => {
        str += `<option value="${value.movies}">${value.name}</option>`;
    });
    select1.innerHTML = str; 
};

/**
 * 选择电影渲染
 */
function filmReader(arr) {
    let val = select1.value;
    //得到影院对应电影的id数组
    let newArr = val.split(",");
    
    //选择的电影
    let str = `<option value="">选择电影</option>`;
    arr.forEach(value => {
        //查找遍历正在热播电影id是不是在影院的电影id数组里面
        let isHave = newArr.includes(value.id);
        if (isHave) {
            str += `<option value="${value.release}">${value.title}</option>`
        }
       
    });
    select2.innerHTML = str;
}

/**
 * 选择时间渲染
 */
function timeReader() {
    let val = select2.value;
    //得到电影对应的时间数组
    let newArr = val.split(" ");
    //选择的时间
    let str = `<option value="">选择时间</option>`;
    newArr.forEach(value => {
       str +=  `<option value="">${value}</option>`
    });
    select3.innerHTML = str;

};

/**
 * 影院改变事件
 */
select1.onchange = function () {
    
    //选择电影
    filmReader(nowPlaying);
    //选择时间
    timeReader();
};

select2.onchange = function () {
    //选择时间
    timeReader();
};

/**
 * 正在热映
 */

//正在热映总数
spanElem.innerText = `(${nowPlaying.length}部)`;



/**
 * 正在热映渲染
 */

function hotReader(arr) {
    let str = "";
    arr.forEach((element, index) => {
        str += `
        <div class="hot-playing-item content-item">
            <img src="${element.imgSrc}" alt="">
            <div class="movie-name">
                <p>${element.title}</p>
                <span>${element.score}</span>
            </div>
            <div class="hover">
                立即购票
            </div>
        </div>`
    })
    //渲染到页面上
    hotMoviesElem.innerHTML = str;
};


//即将上映总数
soonSpanElem.innerText = `(${upComing.length}部)`;

/**
 * 即将上映渲染
 */
function soonReader(arr) {
    let str = "";
    arr.forEach((element, index) => {
        str += `
        <div class="coming-soon-item content-item">
            <img src="${element.imgSrc}" alt="">
            <div class="movie-name">
                <p>${element.title}</p>
            </div>
            <p>${element.release}</p>
            <div class="hover">
                <span>预告片</span>
                <span>预售</span>
            </div>
        </div>`
    })
    //渲染到页面上
    soonMoviesElem.innerHTML = str;
};




