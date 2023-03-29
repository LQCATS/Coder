var express = require('express');
var router = express.Router();

let movies = [
    { id: 1, title: '流浪地球2', msg: '科幻片' },
    { id: 2, title: '长津湖', msg: '战争片' },
    { id: 3, title: '速度与激情', msg: '动作片' },
]

/* GET users listing. */
//二级路由映射
router.get('/', function (req, res, next) {
    movies.sort((a,b) => a.id - b.id);

    movies.forEach((item, index) => {
        item.id = index + 1;
    })

    res.send(movies);
});

router.get('/findById', function (req, res, next) {
    //用nodejs封装好的代码结构得到参数id
    const {id} = req.query;
    console.log(id)
    //在数据中筛选出对应id的电影
    const temp = movies.filter(item => item.id == id);
    res.send(temp);
});

router.get('/add', function (req, res, next) {
    //用nodejs封装好的代码得到参数是一个对象
    const params = req.query;
    //给得到的参数添加一个id，放进数据中
    movies.sort((a,b) => a.id - b.id);
    
    // params.id = movies[movies.length - 1].id + 1;

    movies.push(params)

    movies.forEach((item, index) => {
        item.id = index + 1;
    })
    
    res.send({
        code: 1,
        msg: '添加成功'
    });
});

router.get('/delete', function (req, res, next) {
    //用nodejs封装好的代码得到参数是一个对象
    //参数传递过来是id
    const {id} = req.query;
    //得到id找到对应的数据删除
    if (id) {
        const index = movies.findIndex(item => item.id == id)
        movies.splice(index,1)

        res.send({
            code: 1,
            msg: '删除成功'
        })
    } else {
        res.send({
            code: 0,
            msg: '必须传递id'
        })
    }
});


module.exports = router;
