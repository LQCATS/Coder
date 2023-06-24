import React, { forwardRef, useImperativeHandle } from 'react'
import { Modal, Form, Input } from 'antd';
import { useState } from 'react';


const UpdateRole = (props, ref) => {
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [updateRole, setUpdateRole] = useState({});

    useImperativeHandle(ref, () => {
        // 返回给父组件的数据或方法
        return {
            showUpdateModal,
        }
    });

    //显示对话框
    const showUpdateModal = (data) => {
        //将父组件传递的对象设置到子组件中
        setUpdateRole(data);
        //打开对话
        setIsUpdateOpen(true);
    };

    //点击确定
    const handleOk = () => {
        //向父组件传递需要修改的数据
        props.updateRoleOne(updateRole);
        //关闭对话框
        setIsUpdateOpen(false);
    };

    //点击取消
    const handleCancel = () => {
        setIsUpdateOpen(false);
    };

    //表单输入框值改变时触发的函数
    const onValuesChange = (_, allValues) => {
        setUpdateRole({
            ...updateRole,
            ...allValues,
            id: updateRole._id
        })
    };

    return (
        <>
            <Modal title="修改角色" open={isUpdateOpen} okText='确定' cancelText='取消' onOk={handleOk} onCancel={handleCancel} maskClosable={false} destroyOnClose={true}>
                <Form
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onValuesChange={onValuesChange}
                    initialValues={updateRole}
                    preserve={false}
                >
                    <Form.Item label="修改的用户" name="authUser"
                        rules={[
                            {
                                required: true,
                                message: '请输入角色名称！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="修改时间" name="authTime"
                        rules={[
                            {
                                required: true,
                                message: '请输入创建时间！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="菜单" name="menus">
                        <Input />
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}

export default forwardRef(UpdateRole)