//前端代码
//引入封装的请求函数
import { http } from '../static/util/http';

renderOrders()
async function renderOrders() {
    //后端获取该用户所有订单数据
    const ordersData = await http({
        url: 'orders/getUserOrders'
    });
    console.log(ordersData);

    //获得订单数组
    const ordersArr = ordersData.data;
    console.log(ordersArr)

    //遍历数组，渲染页面
    const orderHtml = ordersArr.map(item => {
        return `
        <li>
            <p>电影名:${item.movieId.title}</p>
            <p>影院名:${item.operaId.name}</p>
            <p>订单编号:${item._id}</p>
            <button data-orderId="">查看详情</button>
        </li>`
    }).join('');
    console.log(orderHtml);
    $('.allOrders').html(orderHtml)

}