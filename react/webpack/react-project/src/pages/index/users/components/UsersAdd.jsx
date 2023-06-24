import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
//引入antd
import { Modal, Form, Input, Select } from 'antd'
//引入apis
import { getRolesIdAPI } from '../../../../apis/rolesAPI';

const UsersAdd = (props, ref) => {
    const [isShowAdd, setIsShowAdd] = useState(false);//对话框显示和隐藏变量
    const [addUser, setAddUser] = useState({});//新增的用户数据
    const [rolesOptions, setRolesOptions] = useState([]);//角色id数组

    //生命周期函数
    useEffect(() => {
        if (isShowAdd) {
            //打开对话框时获取所有角色id
            getRolesId();
        }
    }, [isShowAdd])

    //点击取消关闭对话框
    const onCancel = () => {
        setIsShowAdd(false);
    }

    //点击确定
    const onOk = () => {
        //给父组件传递需要新增的用户
        props.addUserData(addUser);
        //关闭模态框
        onCancel();
    }

    //打开模态框
    const showAdd = () => {
        //打开模态框
        setIsShowAdd(true);
    }
    //向父组件传递方法，点击打开对话框
    useImperativeHandle(ref, () => {
        return {
            showAdd
        }
    })

    //获取表单的值
    const onValuesChange = (_, values) => {
        //获取新增的用户数据
        setAddUser(values);
        // console.log(addUser);
    }

    //获取所有角色id
    const getRolesId = async () => {
        const res = await getRolesIdAPI();
        // console.log(res);
        if (res.code) {
            setRolesOptions(res.data);
        }
    }

    return (
        <div>
            <Modal title='新增用户' open={isShowAdd} okText='确认' cancelText='取消' onCancel={onCancel} onOk={onOk}>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 16 }} onValuesChange={onValuesChange}>
                    <Form.Item label='用户名字' name='account'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='密码' name='password'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='邮件' name='email'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='角色id' name='role'>
                        <Select options={rolesOptions} fieldNames={{ label: 'name', value: '_id' }}></Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default forwardRef(UsersAdd);