import { SET_ROLES } from "../actionsType";

//初始化状态机的数据
const initRoles = [];


//形参state的初始化时获取初始化的数据
export const rolesReducer = (state = initRoles, action) => {
    //在 rolesReducer 函数中，我们需要根据用户不同的操作，来判断，当前应该返回什么数据到仓库中去
    // console.log(action);
    switch (action.type) {
        //网络请求获取所有角色
        case SET_ROLES:
            return action.payload
        default:
            return state;
    }
}