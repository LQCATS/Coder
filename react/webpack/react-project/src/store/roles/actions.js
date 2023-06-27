import { getRolesIdAPI } from "../../apis/rolesAPI"
import { SET_ROLES } from "../actionsType";

export const getRolesAsync = () => {
    return async (dispatch) => {
        //调接口获取所有的角色信息
        const res = await getRolesIdAPI({ parentId: 0 });
        //将数据设置到状态机里面
        dispatch({ type: SET_ROLES, payload: res.data })
    }
}