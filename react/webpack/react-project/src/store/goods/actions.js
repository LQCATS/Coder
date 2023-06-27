import { findGoodsByNameAPI, getGoodsAPI } from "../../apis/goodsAPI"

export const getGoodsAsync = (pageData) => {
    return async (dispatch) => {
        const res = await getGoodsAPI(pageData);
        if (res.code) {
            dispatch({
                type: 'setGoods',
                payload: {
                    goodsList: res.data,
                    total: res.total
                }
            })
        }
    }
}

export const searchGoodsAsync = (params) => {
    return async (dispatch) => {
        const res = await findGoodsByNameAPI(params);
        if (res.code) {
            dispatch({
                type: 'setGoods',
                payload: {
                    goodsList: res.data,
                    total: res.total
                }
            })
        }
    }
}