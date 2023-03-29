var express = require('express');
var router = express.Router();

const order = [
    {
        id: 1, name: "普通订单", state: "已完成", price: 1200
    },
    {
        id: 2, name: "普通订单", state: "已完成", price: 1000
    },
    {
        id: 3, name: "拼团订单", state: "未支付", price: 899
    },
    {
        id: 4, name: "秒杀订单", state: "已超时", price: 1240
    }
]
/* GET users listing. */
//二级路由映射

// 1.查询所有订单
router.get('/', function (req, res, next) {
    //将订单的id从小到大排序
    order.sort((a, b) => a.id - b.id);
    //修改订单得id值
    order.forEach((item, index) => {
        item.id = index + 1;
    })
    res.send(order);
});

// 2.根据订单类型查询订单，前端传递【1代表普通订单、2代表拼团订单、3代表秒杀订单】
router.get('/findByName', function (req, res, next) {
    //获取前端传递的参数，name=1
    let { name } = req.query;
    // console.log(name);

    switch (name) {
        case '1':
            name = '普通订单';
            const order1 = order.filter(item => item.name == name);
            res.send(order1);
            break;
        case '2':
            name = '拼团订单';
            const order2 = order.filter(item => item.name == name);
            res.send(order2);
            break;
        case '3':
            name = '秒杀订单';
            const order3 = order.filter(item => item.name == name);
            res.send(order3);
            break;
    }

})

// 3.根据支付状态查询订单，前端传递【1代表已完成、2代表未支付、3代表已超时】
router.get('/findByState', function (req, res, next) {
    //获取前端传递的参数，state=1
    let { state } = req.query;
    console.log(state);

    switch (state) {
        case '1':
            state = '已完成';
            const order1 = order.filter(item => item.state == state);
            res.send(order1);
            break;
        case '2':
            state = '未支付';
            const order2 = order.filter(item => item.state == state);
            res.send(order2);
            break;
        case '3':
            state = '已超时';
            const order3 = order.filter(item => item.state == state);
            res.send(order3);
            break;
    }

})

// 4.添加一个订单，编号默认自增长（唯一性）
router.get('/add', function (req, res, next) {
    //获取前端传递的参数，一个订单信息
    const params = req.query;
    //给订单自增加id,先将订单的id从小到大排序
    order.sort((a, b) => a.id - b.id);
    //讲获得得参数添加到订单里面
    order.push(params);
    //修改订单得id值
    order.forEach((item, index) => {
        item.id = index + 1;
    })
    res.send({
        code: 1,
        message: '添加成功'
    })
})

// 5.排序订单，根据价格排序订单，前端传递【1正序、2倒序】
router.get('/sort', function (req, res, next) {
    //获取前端传递的参数，一个订单信息
    const { sort } = req.query;
    if (sort == 1) {
        order.sort((a, b) => a.price - b.price)
        res.send(order)
    } else {
        order.sort((a, b) => b.price - a.price)
        res.send(order)
    }
})

// 6.删除订单，前端传递订单编号
router.get('/delete', function (req, res, next) {
    //获取前端传递的参数，id
    const { id } = req.query;
    if (id) {
        //找到id在数据中对应得下标
        const index = order.findIndex(item => item.id == id);
        //利用数组api删除订单
        order.splice(index, 1)
        res.send({
            code: 1,
            message: '删除成功'
        })
    } else {
        res.send({
            code: 0,
            message: '必须传递id'
        })
    }
})



// 7.修改订单，允许前端修改订单状态，其他字段不能修改 ?id=1&state=2
router.get('/change', function (req, res, next) {
    //获取前端传递的参数id=1,state=2
    //state  1表示未支付，2表示已完成，3表示已超时
    let { id, state } = req.query;
    console.log(typeof state)
    switch (state) {
        case '1':
            state = '未支付';
            const changegood1 = order.find(item => item.id == id);
            changegood1.state = state;
            res.send({
                code: 1,
                message: '修改成功'
            })
            break;
        case '2':
            state = '已完成';
            const changegood2 = order.find(item => item.id == id);
            changegood2.state = state;
            res.send({
                code: 1,
                message: '修改成功'
            })
            break;
        case '3':
            state = '已超时';
            const changegood3 = order.find(item => item.id == id);
            changegood3.state = state;
            res.send({
                code: 1,
                message: '修改成功'
            })
            break;
    }

})


// 8.统计每一种订单（订单名字）有多少个
router.get('/total', function (req, res, next) {
    const map = new Map();
    order.forEach(item => {
        if (map.has(item.name)) {
            map.set(item.name, map.get(item.name) + 1);
        } else {
            map.set(item.name, 1);
        }
    })
    const result = Array.from(map);
    console.log(result)

    const total = result.map(item => {
        return `${item[0]}:${item[1]}`
    }).join('/');
    res.send(total);
})

module.exports = router;
