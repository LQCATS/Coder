// import React, { useEffect } from 'react'
import React, { forwardRef, useImperativeHandle, useState, memo } from 'react'
import { Modal, Form, Input } from 'antd';


const AddRoles = (props, ref) => {
    console.log('角色新增');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addRoleObj, setAddRoleObj] = useState({});

    useImperativeHandle(ref, () => {
        // 返回给父组件的数据或方法
        return {
            showModal
        }
    })

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        //向父组件传递新增的角色对象
        props.getAddRole(addRoleObj);
        //关闭对话框
        setIsModalOpen(false);

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    //表单输入框值改变时触发的函数
    const onValuesChange = (_, allValues) => {
        //将修改后的值设置到addRoleObj中
        setAddRoleObj(allValues);
    }

    return (
        <>
            <Modal title="新增角色" open={isModalOpen} okText='确定' cancelText='取消' onOk={handleOk} onCancel={handleCancel} maskClosable={false}>
                <Form
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onValuesChange={onValuesChange}
                >
                    <Form.Item
                        label="角色名称"
                        name="name"
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
    );
}

export default memo(forwardRef(AddRoles));