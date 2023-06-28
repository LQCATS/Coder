import { useDispatch, useSelector } from "react-redux";
import { getGoodsTypeAPI } from "../apis/goodsAPI";
import { SET_GOODSTYPES } from "../store/actionsType";

const useTypeRequest = () => {
    const dispatch = useDispatch();
    // const { type } = useSelector(state => state);
    const type = useSelector(state => state.type);

    const getGoodsTypeList = async (id = 0) => {
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


    return { type, getGoodsTypeList }
};

export default useTypeRequest;