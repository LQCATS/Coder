//全局变量
let theaters = document.querySelector(".list-choices");
let theaterId = 0;
/**
 * 主程序
 */
function main() {
    theaterReader(opera);
};
main();

/**
 * 影城数据渲染,自定义属性theaterId可以得到影院id
 */

function theaterReader(arr) {
    let theaterStr = "";
    arr.forEach(element => {
        theaterStr += `
        <div class="list-choice">
            <div class="choice-theater">
                <p>
                    ${element.name}
                </p>
                <p>
                    ${element.address}
                </p>
                <span>改签</span>
                <span>打折卡</span>
            </div>
            <div class="price">
                <div>
                    <span>
                        ￥
                        <span>23</span>
                        <span>起</span>
                    </span>
                    <span class="bgcolor" theaterId="${element.id}">选座购票</span> 
                </div>
                <p>
                    <span>24km</span>
                </p>
            </div>
    </div>`;

    });
    theaters.innerHTML = theaterStr;
};

/**
 * 选座购票跳转事件
 */

theaters.onclick = function (event) {
    let element = event.target;
    if (element.className === "bgcolor") {
        let theaterId = element.getAttribute("theaterId");
        location.href = `../html/theater-detail.html?id=${theaterId}`;
    };
};
