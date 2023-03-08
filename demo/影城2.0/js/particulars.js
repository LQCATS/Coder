//全局变量
//得到电影的id
let herfStr = location.search;
let movieId = herfStr.substring(4);

//banner部分全局变量
//电影图片
let filmImg = document.querySelector(".img");
//电影名字h4
let filmTitle1 = document.querySelector(".message h4");
//电影名字h5
let filmTitle2 = document.querySelector(".message h5");
//电影类型
let type = document.querySelector(".message p:nth-child(3)");
//电影时间长度
let time = document.querySelector(".message p:nth-child(4) span:last-child");
//电影评分
let mark = document.querySelector(".evaluate div span");

//content部分全局变量
//电影名字
let name1 = document.querySelector(".content-left>p span");
//电影简介
let introduce = document.querySelector(".brief p");
//演职人员
let actors = document.querySelector(".actor-items");
//热门短评
let shortComment = document.querySelector(".short-comment-users");

//跳转页面到选座
let submitElem = document.querySelector(".message button");



/**
 * 主程序
 */

function main() {
    movieReader(nowPlaying);
    movieReader(upComing);
    jumpClick();
};
main();
/**
 * 电影详情页渲染
 */

function movieReader(arr) {
    //全局变量里面获得点击电影的id
    //在数据库找到对应的电影
   
    arr.forEach(element => {
        if (element.id === movieId) {
            //电影图片字符串
            filmImg.innerHTML = `<img src="${element.imgSrc}" alt="">`;
            //电影名字
            let title = element.title;
            //电影名字字符串转成数组
            let titelArr = title.split(" ");
            filmTitle1.innerText = `${titelArr[0]}`;
            filmTitle2.innerText = `${titelArr[1]}`;
            name1.innerText = `${titelArr[0]}`;

            //电影类型
            let str1 = "";
            let typeArr = element.movieType.split(" ");
            let typeArr1 = typeArr.slice(0, typeArr.length - 1);
            typeArr1.forEach(element2 => {
                str1 += `<span>${element2}</span>`;
            });
            type.innerHTML = str1;

            //电影总时长
            time.innerText = `${element.duration}`;
            //电影评分
            mark.innerText = `${element.score}`;
            //电影简介
            introduce.innerText = `${element.desc}`;
            //导演
            let str2 = "";
            let actorArr = element.actors.split("/");
            actorArr.forEach(element3 => {
                str2 += `
                <div class="actor-item">
                    <img src="" alt="">
                    <p>${element3}</p>
                </div>`;
            });
            actors.innerHTML = str2;
            //短评
            let str3 ="";
            let commentArr = element.comments;
            commentArr.forEach(element4 => {
                str3 += `
                <div class="short-comment-user">
                    <img src="../影城img/avator02.png" alt="">
                    <div>
                        <h4>Hp</h4>
                        <h5>
                            23小时前
                            <i class="fa fa-star star-yellow"></i>
                            <i class="fa fa-star star-yellow"></i>
                            <i class="fa fa-star star-yellow"></i>
                            <i class="fa fa-star star-yellow"></i>
                            <i class="fa fa-star-half-full star-yellow"></i>
                            <i class="fa fa-thumbs-up"></i>
                            <span>158</span>
                        </h5>
                        <p>
                            ${element4}
                        </p>
                    </div>
                </div>`
            });
            shortComment.innerHTML = str3;
        }
    });



};

/**
 * 特惠购票跳转页面
 */
function jumpClick() {
    submitElem.onclick = function () {
        location.href = `../html/choose-seat.html?id=${movieId}`;
    };
};

