
import React, { useEffect, useRef } from 'react'
//引入antd
import { Table, Space, Button, Image, Divider, Popconfirm, Pagination, Input, Select, } from 'antd';
//引入api
import { deleteGoodsAPI } from '../../../apis/goodsAPI';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGoodsAsync, searchGoodsAsync } from '../../../store/goods/actions';

const options = [
    {
        value: 'name',
        label: '商品名称',
    },
    {
        value: 'title',
        label: '商品简介',
    },
];

const GoodsList = () => {
    const columns = [
        {
            title: '商品名称',
            dataIndex: 'name'
        },
        {
            title: '商品图片',
            dataIndex: 'imgSrc',
            width: 90,
            render: (value, record) => (
                <Image
                    width={30}
                    height={30}
                    src={value}
                    fallback="data:image/png;base64,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"
                />
            )
        },
        {
            title: '商品价格',
            dataIndex: 'price',
            width: 100
        },
        {
            title: '商品简介',
            dataIndex: 'title',
            ellipsis: true
        },
        {
            title: '商品详情',
            dataIndex: 'msg',
            ellipsis: true
        },
        {
            title: '分类名称',
            dataIndex: ['type', 'name'],
            width: 100
        },
        {
            title: '操作',
            dataIndex: '_id',
            render: (value, record) => (
                <Space>
                    {/* 动态路由传参 */}
                    <Link to={`/update/goods/${value}`}>修改</Link>
                    {/* state传参 */}
                    <Link to='/update/goods' state={{ id: value }}>修改</Link>
                    <Popconfirm
                        title="删除信息提示"
                        description="点击确定将永久删除该用户，确定继续操作吗？"
                        onConfirm={() => delGoods(value)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button danger type='dashed'>删除</Button>
                    </Popconfirm>
                </Space>
            )
        }
    ];
    const navigate = useNavigate();

    //状态机获取商品列表和总条数
    const goods = useSelector(state => state.goods);
    const dispatch = useDispatch();
    //分页需要的数据
    const pageData = useRef({
        pageSize: 3,
        currentPage: 1
    });
    //搜索需要的数据
    const search = useRef({
        searchType: 'name',
        searchData: ''
    });

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };

    //渲染页面-------------------------------------------------------------------------------
    //获取数据，渲染table
    useEffect(() => {
        getGoodsList();
        // eslint-disable-next-line
    }, []);

    const getGoodsList = async () => {
        dispatch(getGoodsAsync(pageData.current));
    }


    //删除商品-------------------------------------------------------------------------------
    const delGoods = async (id) => {
        const res = await deleteGoodsAPI({ id });
        // console.log(res);
        if (res.code) {
            //重新渲染页面
            getGoodsList();
        }
    }
    //分页------------------------------------------------------------------------------------
    const doSearch = () => {
        //调接口查询数据(状态机)
        dispatch(searchGoodsAsync({
            ...search.current,
            ...pageData.current
        }));
    }

    const onChange = (currentPage, pageSize) => {
        // console.log(currentPage, pageSize);
        //设置分页查询的参数
        pageData.current = {
            currentPage,
            pageSize
        }
        if (search.current.searchData) {
            //搜索的input框有内容，调用搜索事件
            doSearch();
        } else {
            //获取全部数据重新渲染页面
            getGoodsList();
        }

    }

    //搜索输入框回车触发的事件
    const onPressEnter = (e) => {
        //将需要搜索的内容全局保存
        search.current.searchData = e.target.value;
        //调接口查询数据(状态机)
        doSearch();

    }
    //搜索下拉框切换事件
    const searchChange = (e) => {
        search.current.searchType = e;
    }

    return (
        <div>
            <Space>
                <Space.Compact>
                    <Select defaultValue="商品名称" options={options} onChange={searchChange} />
                    <Input onPressEnter={onPressEnter} />
                </Space.Compact>

                <Button type='primary' onClick={() => {
                    navigate('/add/goods')
                }}>新增商品</Button>
            </Space>
            <Divider></Divider>
            <Table
                columns={columns}
                dataSource={goods.goodsList}
                rowKey='_id'
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                pagination={false}></Table>

            <div style={{ marginTop: '50px' }}>
                <Pagination
                    total={goods.total}
                    showSizeChanger
                    showQuickJumper
                    current={pageData.current.currentPage}
                    pageSize={pageData.current.pageSize}
                    pageSizeOptions={[3, 5, 7, 10]}
                    showTotal={(total) => `共 ${total} 条`}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default GoodsList;