let ulElem = document.querySelector("ul")
let inputElem = document.querySelector("input")
let buttonElem = document.querySelector("button")

let choiceId = 0 ;
/**
 * 主程序 
   */
function main() {
    // console.log(1233);
    renderUl();
    //li点击事件
    choiceLi();
    jump();

}
/**
 * 页面跳转 */
function jump() {
    buttonElem.onclick = function () {
        //判定当前是否选中商品，选中之后跳转
        if(choiceId == 0){
            alert("请选择商品")
        }else{
           location.href = `./success.html?id=${choiceId}`
        // location.assign("./success.html")
        }
    }
}
/**
 *  li点击数据关联功能
 * */
function choiceLi() {
    //委托给父标签绑定事件
    ulElem.onclick=function (event) {
        // console.log(event.target);
        let element=event.target
        if(element.className !="list"){
            console.log(element);
            console.log(element.innerText);
            //将选中标签内容赋值给input的value
            inputElem.value = element.innerText
            //隐藏ul列表
            ulElem.style.display = "none"
            //将选中标签身上的data-id给全局变量
            choiceId = element.getAttribute("data-id")
            console.log(choiceId);
        }
    }
}

/**
 * 数据回显渲染 */  
function renderUl() {
    let inputEle = document.querySelector("input")
    inputEle.oninput= function () {
        // console.log(inputEle.value);
        //用户输入数据
        let val = inputEle.value
        //将数据和数据库商品名进行比对

        let str = ""
        goods.forEach(element => {
            //以什么开头查询
            // if(element.name.startsWith(val)){
            //     console.log(element);
            // }
            //模糊匹配
            if(element.name.indexOf(val)!=-1){
                str += `<li data-id=${element.id}>${element.name}</li>`
            }
            // console.log(str);
        });
        //将数据渲染到页面列表中
        ulElem.innerHTML = str
        //更改ul的css属性值
        ulElem.style.display = "block"
    }
}

main()