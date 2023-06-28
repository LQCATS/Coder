import { getUsersAPI } from "../../apis/usersAPI";

export const getUsersAsync = () => {
    return async (dispatch) => {
        const res = await getUsersAPI();
        // console.log(res);
        if (res.code) {
            // setUsersData(res.data);
            dispatch({ type: 'setUsers', payload: res.data });
        }
    }
}