import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
//引入antd
import { Form, Input, Modal, Select } from 'antd';
//引入接口
import { getRolesIdAPI } from '../../../../apis/rolesAPI';

const UsersUpdate = (props, ref) => {

    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [rolesList, setRolesList] = useState([]);
    const [updateUser, setUpdateUser] = useState({});
    const [form] = Form.useForm();

    //生命周期函数，获取角色id
    useEffect(() => {
        if (isShowUpdate) {
            getRolesId();
        }
    }, [isShowUpdate]);

    //关闭模态框
    const closeUpdate = () => {
        setIsShowUpdate(false);
    };

    //点击确认按钮
    const doOk = () => {
        //传递修改后的数据
        props.doUpdateUser(updateUser);
        //关闭模态框
        closeUpdate();
    }

    //打开模态框
    const openUpdate = (userData) => {
        //回显数据,设置表单默认值
        // console.log(userData);
        form.setFieldsValue({
            account: userData.account,
            email: userData.email,
            role: userData.role._id
        });
        //保存父组件传递的需要修改的数据
        setUpdateUser(userData);
        //打开模态框
        setIsShowUpdate(true);
    };

    //通过ref向父组件传递方法，打开修改对话框
    useImperativeHandle(ref, () => {
        return {
            openUpdate
        }
    });

    //获取角色id，后端请求
    const getRolesId = async () => {
        let res = await getRolesIdAPI();
        if (res.code) {
            setRolesList(res.data);
        }
    }

    //获取修改的数据
    const onValuesChange = (_, values) => {
        setUpdateUser({
            ...updateUser,
            ...values
        });
    }

    return (
        <div>
            <Modal title='修改用户' open={isShowUpdate} onCancel={closeUpdate} onOk={doOk}>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} form={form} onValuesChange={onValuesChange}>
                    <Form.Item label='用户名字' name='account'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='用户邮箱' name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label='角色' name="role">
                        <Select options={rolesList} fieldNames={{ label: 'name', value: '_id' }}></Select>
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    )
}

export default forwardRef(UsersUpdate);