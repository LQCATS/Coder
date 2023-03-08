//构建座位数据
let seatArr = [
    //0表示占位  1未选座位 2表示已选座位 3不可选座位
    [1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 1, 2, 0, 3, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 3, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 3, 1, 1, 1]
]
//获取父标签
let content = document.querySelector(".content")
let ticket = document.querySelector(".ticket")

/**
 * 主函数
 */
function main() {
    render(seatArr);
    clickSeat();
}

main()

/**
 * 选座事件
  */
function clickSeat() {
    //事件委托给静态父标签
    content.onclick = function (event) {
        // console.log(event.target);
        let element = event.target
        switch (element.className) {
            case "tab bg1":
                // console.log(element);
                //先判断当前座位一共选中个数,超出5个不能选座
                let num = getSum(seatArr)
                if (num < 5) {
                    //将未选座位变为已选状态,找到当前点击座位序号
                    let data = element.getAttribute("data");
                    //拆分数据
                    let arr = data.split("-")
                    // console.log(arr);
                    seatArr[arr[0]][arr[1]] = 2
                    // console.log(seatArr);
                    //渲染页面
                    render(seatArr)
                }else{
                    alert("只能选5个座位")
                }

                break;
            case "tab bg2":
                //将未选座位变为已选状态,找到当前点击座位序号
                let data2 = element.getAttribute("data");
                //拆分数据
                let arr2 = data2.split("-")
                seatArr[arr2[0]][arr2[1]] = 1
                //渲染页面
                render(seatArr)
                break;
        }
    }
}

/**
 * 已选座位总数
  */
function getSum(arr) {
    //已选座位总数
    let sum = 0
    arr.forEach(value => {
        console.log(value);
        value.forEach(v => {
            if (v == 2) {
                sum++
            }
        })
    })
    console.log(sum);
    return sum
}

/**
 * 渲染函数
  */

function render(arr) {
    //str用于拼接座位节点字符串
    let str = "";
    //str2用于拼接票务节点字符串
    let str2 = ""
    arr.forEach((value, index) => {
        // console.log(value);
        str += `
        <div class="item">
        <div class="line-num">${index + 1}</div>
        <div class="group">`

        //座位对应凭借
        value.forEach((value2, index2) => {
            // console.log(value2);
            //判断当前座位状态,生成对应类名的字符串
            switch (value2) {
                case 0:
                    str += `<span class="tab"></span>`
                    break;
                case 1:
                    str += `<span class="tab bg1" data="${index}-${index2}"></span>`
                    break;
                case 2:
                    str += `<span class="tab bg2"  data="${index}-${index2}"></span>`
                    //票务拼接
                    str2 += `<div class="one">${index + 1}排${index2 + 1}座</div>`
                    break;
                case 3:
                    str += `<span class="tab bg3"></span>`
                    break;
            }
        })

        str += ` 
        </div>
    </div>
        `
    });
    // console.log(str);
    // console.log(str2);
    //座位渲染
    content.innerHTML = str
    //渲染票务
    ticket.innerHTML = str2
}