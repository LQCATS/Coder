import { getGoodsTypeAPI } from "../../apis/goodsAPI"
import { SET_GOODSTYPES } from "../actionsType";

export const getGoodsTypeAsync = (id, type) => {
    return async (dispatch) => {
        const res = await getGoodsTypeAPI({ parentId: id });
        if (0 === id) {
            dispatch({
                type: SET_GOODSTYPES, payload: res.data.data.map(item => {
                    return {
                        ...item,
                        children: []
                    };
                })
            })
        } else {
            dispatch({
                type: SET_GOODSTYPES, payload: type.map(item => {
                    if (id === item._id) {
                        return {
                            ...item,
                            children: res.data.data
                        };
                    }
                    return item;
                })
            })
        }
    }
}