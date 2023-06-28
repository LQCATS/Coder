import React, { useRef, useEffect } from 'react'

//引入antd
import { Space, Table, Button, Divider, message, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
//引入子组件
import AddRoles from './components/AddRoles';
import UpdateRole from './components/UpdateRole';
//引入接口
import { addRolesAPI, delRolesAPI, updateRolesAPI } from '../../../apis/rolesAPI';
import { useDispatch, useSelector } from 'react-redux';
import { getRolesAsync } from '../../../store/roles/actions';

const RolesPage = () => {
    //表格每列渲染的数组
    const columns = [
        {
            title: '角色名称',
            dataIndex: 'name',
        },
        {
            title: '身份验证用户',
            dataIndex: 'authUser',
        },
        {
            title: '角色创建时间',
            dataIndex: 'createTime',
        },
        {
            title: '修改时间',
            dataIndex: 'authTime',
        },
        // {
        //     title: '菜单',
        //     dataIndex: 'menus',
        // },
        {
            title: '操作',
            dataIndex: '_id',
            align: 'center',
            render: (value, record) => (
                <Space>
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
                    <Button type="dashed" size='small' icon={<EditOutlined />} onClick={() => {
                        //通过ref获取子组件的方法，并传参给子组件，显示修改框,并传入要修改的数据
                        updateRef.current.showUpdateModal(record);
                    }}>修改</Button>
                </Space>
            ),
        },
    ];

    //设置，表格初始数据
    // const [rolesData, setRolesData] = useState([]);

    //组件中获取仓库数据
    const roles = useSelector(state => state.roles);

    const dispatch = useDispatch();

    //挂载后触发生命周期函数,获取数据
    useEffect(() => {
        getRolesList();
        // eslint-disable-next-line
    }, []);

    //调接口获取数据
    const getRolesList = async () => {
        // const res = await getRolesIdAPI({ parentId: 0 });
        // // setRolesData(res.data);
        // dispatch({ type: 'defRoles', payload: res.data });
        dispatch(getRolesAsync());
    };

    //删除--------------------------------------------------------
    //删除角色
    const delRoles = async (id) => {
        // setRolesData(rolesData.filter(item => item._id !== id));
        //调取接口删除
        let res = await delRolesAPI({ id });
        if (res.code) {
            //删除成功重新渲染页面
            getRolesList();
            //提示用户删除信息
            message.success('删除成功');
        }
    };

    //气泡弹框确认按钮触发事件
    const confirm = (id) => {
        //调用删除方法
        delRoles(id);
    };

    //气泡按钮取消触发事件
    const cancel = (e) => {
        console.log(e);
        message.error('取消删除');
    };


    //新增-----------------------------------------------
    //获取新增的角色
    const getAddRole = async (roleData) => {
        let res = await addRolesAPI(roleData);
        if (res.code) {
            //调取接口新增成功，重新渲染页面
            getRolesList();
        }
    };

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
    };

    //修改角色
    //绑定子组件ref
    const updateRef = useRef();
    //子组件给父组件传参，修改父组件的数据
    const updateRoleOne = async (updateOne) => {
        // setRolesData(rolesData.map(item => {
        //     if (item._id === updateOne._id) {
        //         return {
        //             ...updateOne
        //         }
        //     }
        //     return item
        // }))

        //调取接口修改数据
        let res = await updateRolesAPI(updateOne);
        // console.log(res);
        if (res.code) {
            //修改成功，重新渲染页面
            getRolesList();
        }
    };

    //页面渲染
    return (
        <>
            {/* <Button type='primary' onClick={() => showAddFa()}>新增角色</Button> */}
            <Button type='primary' onClick={showAddRole}>新增角色</Button>
            <Divider />
            <Table columns={columns} dataSource={roles} rowKey='_id' />
            {/* 新增角色 */}
            {/* <AddRoles getAddRole={getAddRole} showAddRole={showAddRole} ></AddRoles> */}
            <AddRoles getAddRole={getAddRole} ref={addRef} ></AddRoles>
            {/* 修改角色 */}
            <UpdateRole ref={updateRef} updateRoleOne={updateRoleOne}></UpdateRole>
        </>

    )
}

export default RolesPage