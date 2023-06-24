import React, { forwardRef, useState, useImperativeHandle } from 'react'
//引入antd
import { Modal, Form, Input } from 'antd';

const TypeAdd = (props, ref) => {
    const [isShowAdd, setIsShowAdd] = useState(false);//对话框显示和隐藏变量
    const [addGoods, setAddGoods] = useState({});//新增的数据
    //点击取消关闭对话框
    const onCancel = () => {
        setIsShowAdd(false);
    };

    //点击确定
    const onOk = () => {
        //给父组件传递需要新增的用户
        props.addGoodsData(addGoods);
        //关闭模态框
        onCancel();
    };

    //打开模态框
    const showAdd = () => {
        //打开模态框
        setIsShowAdd(true);
    };

    //向父组件传递方法，点击打开对话框
    useImperativeHandle(ref, () => {
        return {
            showAdd
        }
    })

    //获取表单的值
    const onValuesChange = (_, values) => {
        //获取新增的用户数据
        setAddGoods(values);
        console.log(addGoods);
    }

    return (
        <div>
            <Modal title='新增用户' open={isShowAdd} okText='确认' cancelText='取消' onCancel={onCancel} onOk={onOk}>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 16 }} onValuesChange={onValuesChange}>
                    <Form.Item label='名称' name='name'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='父级id' name='parentId'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='类型' name='type'>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default forwardRef(TypeAdd);