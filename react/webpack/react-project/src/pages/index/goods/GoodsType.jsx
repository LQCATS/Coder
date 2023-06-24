import React, { useEffect, useState, useRef } from 'react'
//引入antd
import { Button, Divider, Space, Table, message, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
//引入api
import { addGoodsAPI, delGoodsAPI, getGoodsAPI, updateGoodsAPI } from '../../../apis/goodsAPI';
//引入子组件
import TypeAdd from './components/goodsType/TypeAdd';
import TypeUpdate from './components/goodsType/TypeUpdate';

const GoodsType = () => {
    const columns = [
        {
            title: '名称',
            dataIndex: 'name'
        },
        {
            title: '父级id',
            dataIndex: 'parentId'
        },
        {
            title: '类型',
            dataIndex: 'type'
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
                        onConfirm={(e) => confirm(value)}
                        onCancel={cancel}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button danger size='small' icon={<DeleteOutlined />} >删除</Button>
                    </Popconfirm>

                </Space>
            )
        },
    ];
    const [goodsTypeData, setGoodsTypeData] = useState();

    //挂载后触发生命周期函数,获取分类数据
    useEffect(() => {
        getGoodsList();
    }, [])

    //调接口获取分类数据
    const getGoodsList = async () => {
        const res = await getGoodsAPI({ parentId: 0 });
        setGoodsTypeData(res.data.data);
        // console.log(res);
    }

    // 新增功能-------------------------------------------------------
    const addRef = useRef();
    const addGoods = () => {
        addRef.current.showAdd();
    }
    //调接口新增用户，并获取子组件的传参
    const addGoodsData = async (addData) => {
        console.log('addData', addData);
        let res = await addGoodsAPI(addData);
        console.log(res);
        if (res.code) {
            //调取接口新增成功，重新渲染页面
            getGoodsList();
        }
    }
    //删除-----------------------------------------------------------
    const delGoodsType = async (id) => {
        //调接口删除用户
        const res = await delGoodsAPI({ id });
        console.log(res);
        if (res.code) {
            //删除成功重新渲染页面
            getGoodsList();
            //提示用户删除信息
            message.success('删除成功');
        }
    };

    //气泡弹框确认按钮触发事件
    const confirm = (id) => {
        //调用删除方法
        delGoodsType(id);
    };

    //气泡按钮取消触发事件
    const cancel = (e) => {
        console.log(e);
        message.error('取消删除');
    };

    //修改-----------------------------------------------------------
    const updateRef = useRef();
    //获取子组件传递的修改数据，调用接口进行修改
    const doUpdateType = async (updateData) => {
        //修改信息
        let res = await updateGoodsAPI(updateData);
        console.log("updateData", updateData);
        console.log("updateData", res);
        if (res.code) {
            //修改成功，重新渲染页面
            getGoodsList();
        }
    }

    return (
        <div>
            <Button onClick={addGoods}>新增分类</Button>
            <Divider></Divider>
            <Table columns={columns} dataSource={goodsTypeData} rowKey='_id'></Table>
            {/* 新增分类 */}
            <TypeAdd ref={addRef} addGoodsData={addGoodsData}></TypeAdd>
            {/* 修改分类 */}
            <TypeUpdate ref={updateRef} doUpdateType={doUpdateType}></TypeUpdate>
        </div>
    )
}

export default GoodsType