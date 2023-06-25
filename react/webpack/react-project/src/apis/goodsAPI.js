import { get, post } from '../utils/request';

//查询商品分类
export const getGoodsTypeAPI = params => get('/categroy/findCategroy', params);

//添加分类信息
export const addGoodsTypeAPI = params => post('/categroy/addCategroy', params);

//修改分类信息
export const updateGoodsAPI = params => post('/categroy/updateCateGroy', params);

//删除分类信息
export const delGoodsAPI = params => post('/categroy/deleteCateGroy', params);

//级联分类数据
export const findAllCategroyAPI = params => get('/categroy/findAllCategroy', params);


//---------------------------------------------------------------------------------
//获取商品信息
export const getGoodsAPI = params => get('/goods/findGoods', params);

//商品添加
export const addGoodsAPI = params => post('/goods/addGoods', params);
