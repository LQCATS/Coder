import React, { useEffect, useRef } from 'react'
//引入antd
import { Button, Divider, Space, Table, message, Popconfirm, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
//引入api
import { addGoodsTypeAPI, delGoodsAPI, updateGoodsTypeAPI } from '../../../apis/goodsAPI';
//引入子组件
import TypeAdd from './components/goodsType/TypeAdd';
import TypeUpdate from './components/goodsType/TypeUpdate';
import { useDispatch, useSelector } from 'react-redux';
import { getGoodsTypeAsync } from '../../../store/goodsType/actions';

const GoodsType = () => {
    const columns = [
        {
            title: '名称',
            dataIndex: 'name'
        },
        {
            title: '类型',
            dataIndex: 'type',
            render: (value, record) => {
                if (value === '一级分类') {
                    return <Tag color="red">{value}</Tag>
                } else {
                    return <Tag color="blue">{value}</Tag>
                }
            },
            onCell: (record, rowIndex) => {
                if (!record.children) {
                    return {
                        style: { paddingLeft: '50px' }
                    }
                }
            }
        },
        {
            title: '操作',
            dataIndex: '_id',
            render: (value, record) => (
                <Space>
                    <Button type="dashed" size='small' icon={<EditOutlined />} onClick={() => {
                        updateRef.current.openUpdate(record);
                    }}>修改</Button>
                    <Popconfirm
                        title="删除信息提示"
                        description="点击确定将永久删除该用户，确定继续操作吗？"
                        onConfirm={() => delGoodsType(value)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button danger size='small' icon={<DeleteOutlined />} >删除</Button>
                    </Popconfirm>

                </Space>
            )
        },
    ];
    // const [goodsTypeData, setGoodsTypeData] = useState();
    //获取状态机的数据
    const { type } = useSelector(state => state);
    const dispatch = useDispatch();

    //挂载后触发生命周期函数,获取分类数据
    useEffect(() => {
        getGoodsTypeList();
        // eslint-disable-next-line
    }, []);

    //渲染页面表格----------------------------------------------------------
    //调接口获取分类数据
    const getGoodsTypeList = async (id = 0) => {
        // const res = await getGoodsTypeAPI({ parentId: id });
        // // console.log(res.data.data);
        // if (0 === id) {
        //     setGoodsTypeData(res.data.data.map(item => {
        //         return {
        //             ...item,
        //             children: []
        //         };
        //     }));
        // } else {
        //     setGoodsTypeData(goodsTypeData.map(item => {
        //         if (id === item._id) {
        //             return {
        //                 ...item,
        //                 children: res.data.data
        //             };
        //         }
        //         return item;
        //     }))
        // }
        //调用状态机的异步方法
        dispatch(getGoodsTypeAsync(id, type));
    }

    //展开一级分类触发的事件
    const onExpand = (expanded, record) => {
        // console.log(expanded, record);
        if (expanded) {
            getGoodsTypeList(record._id);
        }
    }

    // 新增功能------------------------------------------------------------
    const addRef = useRef();
    const addGoods = () => {
        addRef.current.showAdd();
    }
    //调接口新增用户，并获取子组件的传参
    const addGoodsData = async (addData) => {
        // console.log('addData', addData);
        let res = await addGoodsTypeAPI(addData);
        // console.log(res);
        if (res.code) {
            //调取接口新增成功，重新渲染页面
            getGoodsTypeList();
        }
    }
    //删除----------------------------------------------------------------
    //气泡弹框确认按钮触发事件
    const delGoodsType = async (id) => {
        //调接口删除用户
        const res = await delGoodsAPI({ id });
        console.log(res);
        if (res.code) {
            //删除成功重新渲染页面
            getGoodsTypeList();
            //提示用户删除信息
            message.success('删除成功');
        }
    };



    //修改---------------------------------------------------------------
    const updateRef = useRef();
    //获取子组件传递的修改数据，调用接口进行修改
    const doUpdateType = async (updateData) => {
        //修改信息
        let res = await updateGoodsTypeAPI(updateData);
        console.log("updateData", updateData);
        console.log("updateData", res);
        if (res.code) {
            //修改成功，重新渲染页面
            getGoodsTypeList();
        }
    }

    return (
        <div>
            <Button onClick={addGoods}>新增分类</Button>
            <Divider></Divider>
            <Table columns={columns} dataSource={type} rowKey='_id' expandable={{ onExpand }}></Table>
            {/* 新增分类 */}
            <TypeAdd ref={addRef} addGoodsData={addGoodsData}></TypeAdd>
            {/* 修改分类 */}
            <TypeUpdate ref={updateRef} doUpdateType={doUpdateType}></TypeUpdate>
        </div>
    )
}

export default GoodsType