import React, { useRef, useState } from 'react'

//引入antd
import { Space, Table, Button, Divider } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
//引入子组件
import AddRoles from './components/AddRoles';
import UpdateRole from './components/UpdateRole';

const RolesPage = () => {
    //表格每列渲染的数组
    const columns = [
        {
            title: '角色名称',
            dataIndex: 'role',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <Space>
                    <Button type="dashed" size='small' icon={<DeleteOutlined />} onClick={() => {
                        delRoles(record._id);
                    }}>删除</Button>
                    <Button type="dashed" size='small' icon={<EditOutlined />} onClick={() => {
                        //显示修改框
                        showUpdateRole();
                        //传递需要修改的对象
                        setUpdateObj(record);
                    }}>修改</Button>
                </Space>
            ),
        },
    ];

    //设置，表格初始数据
    const [rolesData, setRolesData] = useState([
        { _id: 1, role: '管理员', createTime: '2020' },
        { _id: 2, role: '管理员', createTime: '2021' },
        { _id: 3, role: '管理员', createTime: '2022' },
        { _id: 4, role: '管理员', createTime: '2023' },
    ]);

    //删除角色
    const delRoles = (id) => {
        setRolesData(rolesData.filter(item => item._id !== id));
    }

    //获取新增的角色
    const getAddRole = (roleData) => {
        console.log(roleData);
        setRolesData(
            [
                ...rolesData,
                {
                    _id: rolesData[rolesData.length - 1]._id + 1,
                    ...roleData
                }
            ]
        )
    }

    // let showAddFa;
    // //打开新增角色对话框
    // const showAddRole = (showAdd) => {
    //     showAddFa = showAdd;
    //     // console.log(showAddFa);
    // }
    // 新增角色
    const addRef = useRef();
    const showAddRole = () => {
        addRef.current.showModal()

    }

    //修改角色
    const updateRef = useRef();
    const showUpdateRole = () => {
        updateRef.current.showUpdateModal();
    };
    //传递数据给子组件回显数据
    const [updateObj, setUpdateObj] = useState({});
    const getUpdateObj = (obj) => {
        console.log('obj', obj);
        setRolesData(rolesData.map(item => {
            if (item._id === obj._id) {
                return obj
            }
            return item
        }))

    }

    //页面渲染
    return (
        <>
            {/* <Button type='primary' onClick={() => showAddFa()}>新增角色</Button> */}
            <Button type='primary' onClick={showAddRole}>新增角色</Button>
            <Divider />
            <Table columns={columns} dataSource={rolesData} rowKey='_id' />
            {/* 新增角色 */}
            {/* <AddRoles getAddRole={getAddRole} showAddRole={showAddRole} ></AddRoles> */}
            <AddRoles getAddRole={getAddRole} ref={addRef} ></AddRoles>
            {/* 修改角色 */}
            <UpdateRole ref={updateRef} updateObj={updateObj} getUpdateObj={getUpdateObj}></UpdateRole>
        </>

    )
}

export default RolesPage