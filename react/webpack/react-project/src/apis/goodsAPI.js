import { get, post } from '../utils/request';

//查询商品分类
export const getGoodsAPI = params => get('/categroy/findCategroy', params);

//添加分类信息
export const addGoodsAPI = params => post('/categroy/addCategroy', params);

//修改分类信息
export const updateGoodsAPI = params => post('/categroy/updateCateGroy', params);

//删除分类信息
export const delGoodsAPI = params => post('/categroy/deleteCateGroy', params);