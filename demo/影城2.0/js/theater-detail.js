//全局变量
//banner

//得到传参电影院的id
let theaterUrl = location.search;
let theaterIdNum = theaterUrl.substring(4) - 0;


//影院图片
let theaterImg = document.querySelector(".img");
//影院名字
let theaterName = document.querySelector(".message h4");
//影院地址
let theaterAddress = document.querySelector(".message h5");
//影院电话
let theaterPhone = document.querySelector(".message h5:nth-child(3)");
//conten 部分影院的名字
let theaterName2 =document.querySelector(".content-center>p span");
//影院有的所有电影
let moviesAll = document.querySelector(".movies");
//跳转页面
let seatJumpFather = document.querySelector("tbody");
//所有点击标签组成的数组
let seatJumArr = document.querySelectorAll("tbody tr td:last-child p");


//选中电影名字标签
let chooseName = document.querySelector(".movies-message h4 span:nth-child(1)");
//电影评分
let chooseGrade = document.querySelector(".movies-message h4 span:nth-child(2)");
//时长
let timeAll = document.querySelector(".movies-message p span:nth-child(2)");
//类型
let chooseType = document.querySelector(".movies-message p span:nth-child(4)");
//主演
let chooseActor = document.querySelector(".movies-message p span:nth-child(6)");

/**
 * 主程序
 */
function main() {
    theaterReader(opera,nowPlaying);
    readers(nowPlaying);
};
main();


/**
 * 影院详情渲染
 */
function theaterReader(arr,arr2) {
    
    arr.forEach(element => {
        //遍历数组找到对应的影院对象
        if (element.id === theaterIdNum) {
            //渲染影院图片
            theaterImg.innerHTML = `<img src="${element.img_src}" alt="">` 
            //影院名字
            theaterName.innerText = `${element.name}`;
            theaterName2.innerText = `${element.name}`;
            //影院地址
            theaterAddress.innerText = `${element.address}`;
            //影院电话
            theaterPhone.innerText = `${element.phone}`;
            //每个影院有的电影id数组
            let moviesIdArr = element.movies;
            let moviesStr = "";
            arr2.forEach(element2 => {
                let id2 = element2.id;
                if (moviesIdArr.indexOf(id2) != -1) {
                    moviesStr += `
                    <div class="movies-item">
                        <img src="${element2.imgSrc}" alt="" data-id="${id2}" class="film-image">
                    </div>`
                }
            });
            moviesAll.innerHTML = moviesStr;
        }
    });
};

/**
 * 点击电影图片信息渲染到下面的信息盒子里面
 */
function readers(arr) {
    //委托点击事件给父盒子
    let imgfatherElem = document.querySelector(".movies");
    imgfatherElem.onclick = function (event) {
        let element = event.target;
        if (element.className === "film-image") {
            let moviesId = element.getAttribute("data-id");
            for (let i = 0; i < arr.length; i++ ) {
                if (moviesId == arr[i].id) {
                    //渲染电影名字
                    chooseName.innerText = arr[i].title.split(" ")[0];
                    //渲染评分
                    chooseGrade.innerText = arr[i].score;
                    //渲染时长
                    timeAll.innerText = arr[i].duration;
                    //类型
                    chooseType.innerText = arr[i].movieType;
                    //主演
                    chooseActor.innerText = arr[i].actors;
                    break;
                }
            }
        }
        
    };
};


/**
 * 跳转页面到选座页面
 */

//委托事件给tbody
seatJumpFather.onclick = function (event) {
    let element = event.target;
    seatJumArr.forEach(element2 => {
        if (element2 === element) {
            location.href = `../html/choose-seat.html?id2=${theaterIdNum}`;
        }
    });
};
