import React, { useEffect, useRef, useState } from 'react';

//引入后端请求函数
import { delUserAPI, getUsersAPI } from '../../../apis/usersAPI';

//引入子组件
import UsersAdd from './components/UsersAdd';

//引入antd
import { Button, Space, Table, message, Popconfirm, Divider } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const Users = () => {
    const columns = [
        {
            title: '用户名称',
            dataIndex: 'account'
        },
        {
            title: '用户邮箱',
            dataIndex: 'email'
        },
        {
            title: '角色名称',
            dataIndex: ['role', 'name']
        },
        {
            title: '操作',
            dataIndex: '_id',
            render: (value, record) => (
                <Space>
                    <Button type="dashed" size='small' icon={<EditOutlined />} >修改</Button>

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
            ),
        }
    ];
    const [usersData, setUsersData] = useState([]);
    // console.log(usersData);

    //挂载后触发生命周期函数
    useEffect(() => {
        getUsers();
    }, []);

    //获取用户数据,渲染页面
    const getUsers = async () => {
        const res = await getUsersAPI();
        console.log(res);
        if (res.code) {
            setUsersData(res.data);
        }

    }

    //删除用户数据,并重新渲染页面
    const delUser = async (id) => {
        //调接口删除用户
        const res = await delUserAPI({ id });
        console.log(res);
        if (res.data) {
            //删除成功重新渲染页面
            getUsers();
            //提示用户删除信息
            message.success('删除成功');
        }
    };

    //气泡弹框确认按钮触发事件
    const confirm = (id) => {
        //调用删除方法
        delUser(id);
    };

    //气泡按钮取消触发事件
    const cancel = (e) => {
        console.log(e);
        message.error('取消删除');
    };

    // 新增功能-------------------------------------------------------
    const addRef = useRef();
    const addUser = () => {
        addRef.current.showAdd();
    }

    return (
        <div>
            <Button onClick={addUser}>新增用户</Button>
            <Divider></Divider>
            <Table columns={columns} dataSource={usersData} rowKey='_id'></Table>
            {/* 新增角色 */}
            <UsersAdd ref={addRef}></UsersAdd>
        </div>
    )
}

export default Users