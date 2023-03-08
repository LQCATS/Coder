//全局变量
//banner
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

/**
 * 主程序
 */
function main() {
    theaterReader(opera,nowPlaying);
};
main();


/**
 * 影院详情渲染
 */
function theaterReader(arr,arr2) {
    //得到传参电影院的id
    let theaterUrl = location.search;
    let theaterIdNum = theaterUrl.substring(4) - 0;
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
                        <img src="${element2.imgSrc}" alt="">
                    </div>`
                }
            });
            moviesAll.innerHTML = moviesStr;
            
        }
    });
};

/**
 * 跳转页面到选座页面
 */

//委托事件给tbody
seatJumpFather.onclick = function (event) {
    let element = event.target;
    seatJumArr.forEach(element2 => {
        if (element2 === element) {
            location.href = `../html/choose-seat.html?price=26.9`;
        }
    });
};
