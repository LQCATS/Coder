import React, { Component, createRef } from 'react'

export default class AllCouponComponents extends Component {
    state = {
        list: [
            {
                useTime: '30天',
                _id: "63bd14c40d58511b7c6b6b18",
                title: "测试优惠券",
                receiveType: "商品券",
                price: 30,
                state: false,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                "useTime": '730天',
                _id: "63ec3510aac28814ac2068ef",
                title: "跨店优惠券",
                receiveType: '通用券',
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                useTime: '730天',
                _id: "6408742473fc62162ce86053",
                title: "跨店优惠券",
                receiveType: "商品券",
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                useTime: '30天',
                _id: "63bd14c40d58511b7c6b6b14",
                title: "跨店优惠券",
                receiveType: "商品券",
                price: 30,
                state: false,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                "useTime": '730天',
                _id: "63ec3510aac28814ac2068e5",
                title: "跨店优惠券",
                receiveType: '通用券',
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                useTime: '730天',
                _id: "6408742473fc62162ce86056",
                title: "新人优惠券",
                receiveType: "商品券",
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                useTime: '730天',
                _id: "6408742473fc62162ce86057",
                title: "测试优惠券",
                receiveType: "商品券",
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            }
        ],
        isSearch: false,
        pageSize: 3,
        curPage: 1
    }
    searchValue = createRef();
    selectValue = createRef();
    del = (id) => {
        this.setState({
            list: this.state.list.filter(item => item._id != id),
        })
    }
    changeCurPage = (curPage) => {
        this.setState({
            curPage: curPage
        })
    }
    //改变pagesize，onchange事件获取下拉框的值，并获取第一页的数据
    changeSize = () => {
        this.setState({
            pageSize: this.selectValue.current.value - 0,
            curPage: 1
        })
    }
    //渲染表格，isSearch=true点击搜索按钮，isSearch=false，没有点击搜索按钮，查询全部数据
    get searchByName() {
        const { list, isSearch, curPage, pageSize } = this.state;
        switch (isSearch) {
            //点击搜索按钮
            case true:
                const inputValue = this.searchValue.current.value;
                if (inputValue) {

                    //筛选出所有满足条件的数据
                    let filterList = list.filter(item => item.title.includes(inputValue));

                    //截取当前页数据
                    return filterList.slice((curPage - 1) * pageSize, curPage * pageSize);
                }
            //没有点击搜索按钮，查询全部数据
            case false:
                //当前页数据
                return list.slice((curPage - 1) * pageSize, curPage * pageSize);
        }
    }
    //计算总页数,isSearch=true点击搜索按钮，isSearch=false，没有点击搜索按钮，查询全部数据
    get totalPage() {
        const { list, isSearch, curPage, pageSize } = this.state;

        switch (isSearch) {
            //点击搜索按钮 
            case true:
                const inputValue = this.searchValue.current.value;
                if (inputValue) {
                    let filterList = list.filter(item => item.title.includes(inputValue));
                    return Math.ceil(filterList.length / pageSize);
                }
                return Math.ceil(list.length / pageSize);

            case false:
                return Math.ceil(list.length / pageSize);
        }
    }
    //计算总页数的数组，比如共3页，arr=[1,2,3]
    get page() {
        let arr = []
        for (let i = 1; i <= this.totalPage; i++) {
            arr.push(i)
        }
        return arr
    }
    render() {
        return (
            <>
                {/* header */}
                <div className='header'>
                    <h3>优惠券页面</h3>
                </div>

                {/* tabs */}
                <div className='tabs_warp'>
                    <div className='active'>优惠券列表</div>
                    <div>领取记录</div>
                    <div>额外扩展</div>
                </div>

                {/* search */}
                <div className='serach_warp'>
                    <div>
                        <select name="" id="">
                            <option value="">请选择搜素的数据</option>
                        </select>
                        <input type="text" placeholder='请输入搜索的值' ref={this.searchValue} />
                        <button className='search_btn' onClick={() => {
                            this.setState({
                                isSearch: true
                            })
                        }}>搜索</button>
                    </div>
                </div>

                {/* table */}
                <div className='table_warp'>
                    <button className='add_btn'>新增</button>
                    <table>
                        <thead>
                            <tr>
                                <th>编号</th>
                                <th>优惠券名称</th>
                                <th>优惠券图片</th>
                                <th>优惠券类型</th>
                                <th>面值</th>
                                <th>使用时间</th>
                                <th>是否开启</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.searchByName.map(item => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.title}</td>
                                            <td>
                                                <img src={item.imgSrc} alt="" />
                                            </td>
                                            <td>{item.receiveType}</td>
                                            <td>{item.price}</td>
                                            <td>{item.useTime}</td>
                                            <td>{item.state ? '开启' : '关闭'}</td>
                                            <td className='btn_td'>
                                                <button onClick={() => this.del(item._id)}>删除</button>
                                                <button>修改</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                {/* pagesize */}
                <div className='page_warp'>

                    <div>
                        第{this.state.curPage}页/共{this.totalPage}页
                    </div>

                    <select ref={this.selectValue} onChange={this.changeSize}>
                        <option value="3">3条/每页</option>
                        <option value="4">4条/每页</option>
                    </select>

                    {
                        this.page.map(item => {
                            return <div className='btn' onClick={() => this.changeCurPage(item)} key={item}>{item}</div>
                        })
                    }

                </div>


            </>
        )
    }
}
