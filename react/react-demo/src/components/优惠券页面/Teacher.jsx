import React, { Component, createRef } from 'react'

export default class Teacher extends Component {
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
        pageSize: 3,
        curPage: 1,
        inputValue: '',
    }
    searchValue = createRef();
    del = (id) => {
        this.setState({
            list: this.state.list.filter(item => item._id != id),
        })
    }
    changeCurPage = (cur) => {
        this.setState({
            curPage: cur
        })
    }
    //搜索
    get searchCoupon() {
        const { list, inputValue } = this.state;
        return list.filter(item => item.title.includes(inputValue));
    }
    //分页
    get paging() {
        const { list, curPage, pageSize } = this.state;
        return this.searchCoupon.slice((curPage - 1) * pageSize, curPage * pageSize);
    }
    //获取总页数
    get totalPage() {
        const { list, pageSize } = this.state;
        return Math.ceil(this.searchCoupon.length / pageSize);
    }
    //渲染分页按钮
    get allPageBtn() {
        const { list, curPage } = this.state;
        let btnArr = [];
        for (let i = 1; i <= this.totalPage; i++) {
            btnArr.push(<div className={i == curPage ? 'btn_active' : 'btn'} onClick={() => this.changeCurPage(i)} key={i}>{i}</div>)
        }
        return btnArr;
    }
    render() {
        const { list, curPage, pageSize } = this.state;
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
                                inputValue: this.searchValue.current.value
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
                                this.paging.map(item => {
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
                        第{curPage}页/共{this.totalPage}页
                    </div>

                    <select onChange={(event) => {
                        this.setState({
                            pageSize: event.target.value,
                            curPage: 1
                        })
                    }}>
                        <option value="3">3条/每页</option>
                        <option value="5">5条/每页</option>
                        <option value="7">7条/每页</option>
                    </select>

                    {
                        this.allPageBtn
                    }

                </div>


            </>
        )
    }
}
