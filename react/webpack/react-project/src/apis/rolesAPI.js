import { get, post } from '../utils/request';
//查询所有角色
export const getRolesIdAPI = params => get('/roles/findRoles', params);
//添加
export const addRolesAPI = params => post('/roles/addRoles', params);

//修改
export const updateRolesAPI = params => post('/roles/addAuth', params);

//删除
export const delRolesAPI = params => post('/roles/deleteRoles', params);