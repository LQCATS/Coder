import { useDispatch, useSelector } from "react-redux";
import { findGoodsByNameAPI, getGoodsAPI } from "../apis/goodsAPI";

const useGoodsRequest = () => {
    const goods = useSelector(state => state.goods);
    const dispatch = useDispatch();

    const getGoodsList = async (pageData) => {
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

    const searchGoods = async (params) => {
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

    return { goods, getGoodsList,searchGoods};
};

export default useGoodsRequest;