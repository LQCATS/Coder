import { get, post } from '@/utils/request';

//获取菜单数据
export const getMenuAPI = params => get('/menu', params);

//新增菜单
export const addMenuAPI = params => post('/menu', params);