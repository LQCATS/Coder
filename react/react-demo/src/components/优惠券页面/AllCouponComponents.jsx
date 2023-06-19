import React, { Component, createRef } from 'react';
import events from './events';

export default class AllCouponComponents extends Component {
    state = {
        list: [
            {
                useTime: '30天',
                id: 1,
                title: "测试优惠券",
                receiveType: "商品券",
                price: 30,
                state: false,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                "useTime": '730天',
                id: 2,
                title: "跨店优惠券",
                receiveType: '通用券',
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                useTime: '730天',
                id: 3,
                title: "跨店优惠券",
                receiveType: "商品券",
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                useTime: '30天',
                id: 4,
                title: "跨店优惠券",
                receiveType: "商品券",
                price: 30,
                state: false,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                "useTime": '730天',
                id: 5,
                title: "跨店优惠券",
                receiveType: '通用券',
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                useTime: '730天',
                id: 6,
                title: "新人优惠券",
                receiveType: "商品券",
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                useTime: '730天',
                id: 7,
                title: "测试优惠券",
                receiveType: "商品券",
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            }
        ],
        isSearch: false,
        pageSize: 3,
        curPage: 1,
        newId: 8
    }
    searchValue = createRef();
    selectValue = createRef();
    del = (id) => {
        this.setState({
            list: this.state.list.filter(item => item.id != id),
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
    componentDidMount() {
        //接受到添加的优惠券，添加到数组中
        events.addListener('addCoupon', (addObj) => {
            // const { list } = this.state;
            // console.log(111, this.state.list)
            // addObj['id'] = list[list.length - 1].id + 1
            // this.setState({
            //     list: [
            //         ...list,
            //         addObj
            //     ]
            // })
            const { list, newId } = this.state;
            this.setState({
                list: [
                    ...list,
                    {
                        id: newId,
                        ...addObj

                    }
                ],
                newId: newId + 1
            })
        });
        //接收到要修改的优惠券，修改数组,修改数组一般使用map，toSpliced是新增的api，不能使用时就用map
        events.addListener('editCoupon', (editObj) => {
            const { list } = this.state;
            let index = list.findIndex(item => item.id == editObj.id);
            if (-1 != index) {
                this.setState({
                    list: list.toSpliced(index, 1, editObj)
                })
            }

        })
    }
    render() {
        const { showAdd, showEdit } = this.props;

        return (

            <div className='content_warp' >
                {/* header */}
                <div className='header' >
                    <h3>优惠券页面</h3>
                </div>

                {/* tabs */}
                <div className='tabs_warp' >
                    <div className='active'>优惠券列表</div>
                    <div>领取记录</div>
                    <div>额外扩展</div>
                </div >

                {/* search */}
                <div className='serach_warp' >
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
                </div >

                {/* table */}
                <div className='table_warp' >
                    <button className='add_btn' onClick={() => {
                        showAdd(true)
                    }}>新增</button>
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
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>
                                                <img src={item.imgSrc} alt="" />
                                            </td>
                                            <td>{item.receiveType}</td>
                                            <td>{item.price}</td>
                                            <td>{item.useTime}</td>
                                            <td>{item.state ? '开启' : '关闭'}</td>
                                            <td className='btn_td'>
                                                <button onClick={() => this.del(item.id)}>删除</button>
                                                <button onClick={() => {
                                                    //显示修改模态框
                                                    showEdit(true);
                                                    //传递需要修改的item
                                                    events.emit('getNeedChangeItem', item);
                                                }}>修改</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div >

                {/* pagesize */}
                <div className='page_warp' >

                    <div>
                        第{this.state.curPage}页/共{this.totalPage}页
                    </div>

                    <select ref={this.selectValue} onChange={this.changeSize}>
                        <option value="3">3条/每页</option>
                        <option value="4">5条/每页</option>
                        <option value="7">7条/每页</option>
                    </select>

                    {
                        this.page.map(item => {
                            return <div className={item == this.state.curPage ? 'btn_active' : 'btn'} onClick={() => this.changeCurPage(item)} key={item}>{item}</div>
                        })
                    }

                </div>


            </div >
        )
    }
}
