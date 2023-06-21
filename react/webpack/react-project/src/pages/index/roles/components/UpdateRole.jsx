import React, { forwardRef, useEffect, useImperativeHandle } from 'react'
import { Modal, Form, Input } from 'antd';
import { useState } from 'react';
import { useForm } from 'antd/es/form/Form';


const UpdateRole = (props, ref) => {
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const { updateObj, getUpdateObj } = props;

    let data = { ...updateObj };
    //设置form的初始值
    const [form] = useForm();

    useEffect(() => {
        form.setFieldsValue({ ...updateObj })
    })

    useImperativeHandle(ref, () => {
        // 返回给父组件的数据或方法
        return {
            showUpdateModal,
        }
    })

    const showUpdateModal = () => {
        setIsUpdateOpen(true);
    };
    const handleOk = () => {

        //向父组件传递修改数据
        getUpdateObj(data)
        //关闭对话框
        setIsUpdateOpen(false);
    };
    const handleCancel = () => {
        setIsUpdateOpen(false);
    };

    //表单输入框值改变时触发的函数
    const onValuesChange = (_, allValues) => {
        //将修改后的值设置到newObj中
        // setNewObj({...allValues});
        // console.log('newObj',newObj);
        data = { ...data, ...allValues }
        console.log(data);
    }

    return (
        <>
            <Modal title="修改角色" open={isUpdateOpen} okText='确定' cancelText='取消' onOk={handleOk} onCancel={handleCancel} maskClosable={false}>
                <Form
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onValuesChange={onValuesChange}
                    form={form}
                >
                    <Form.Item
                        label="角色名称"
                        name="role"
                        rules={[
                            {
                                required: true,
                                message: '请输入角色名称！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="创建时间"
                        name="createTime"
                        rules={[
                            {
                                required: true,
                                message: '请输入创建时间！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                </Form>
            </Modal>
        </>
    )
}

export default forwardRef(UpdateRole)