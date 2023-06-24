import React, { forwardRef, useState, useImperativeHandle } from 'react'
//引入antd
import { Form, Input, Modal } from 'antd';

const TypeUpdate = (props, ref) => {

    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [updateType, setUpdateType] = useState({});
    const [form] = Form.useForm();

    //关闭模态框
    const closeUpdate = () => {
        setIsShowUpdate(false);
    };

    //点击确认按钮
    const doOk = () => {
        //传递修改后的数据
        props.doUpdateType(updateType);
        //关闭模态框
        closeUpdate();
    };

    //打开模态框
    const openUpdate = (typeData) => {
        //回显数据,设置表单默认值
        // console.log(typeData);
        form.setFieldsValue({
            name: typeData.name,
            parentId: typeData.parentId,
            type: typeData.type
        });
        //保存父组件传递的需要修改的数据
        setUpdateType(typeData);
        //打开模态框
        setIsShowUpdate(true);
    };

    //通过ref向父组件传递方法，打开修改对话框
    useImperativeHandle(ref, () => {
        return {
            openUpdate
        }
    });

    //获取修改的数据
    const onValuesChange = (_, values) => {
        // console.log(values);
        setUpdateType({
            ...updateType,
            ...values,
            id: updateType._id
        })
    };

    return (
        <div>
            <Modal title='修改用户' open={isShowUpdate} onCancel={closeUpdate} onOk={doOk}>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} form={form} onValuesChange={onValuesChange}>
                    <Form.Item label='名称' name='name'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='父级id' name="parentId">
                        <Input />
                    </Form.Item>
                    <Form.Item label='类型' name="type">
                        <Input />
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    )
}

export default forwardRef(TypeUpdate);