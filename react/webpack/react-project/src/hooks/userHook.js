import { useDispatch, useSelector } from "react-redux";
import { getUsersAPI } from "../apis/usersAPI";

const useRequest = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const getUsers = async () => {

        try {
            const res = await getUsersAPI();
            if (res.code) {
                dispatch({ type: 'setUsers', payload: res.data });
            }
        } catch (error) {
            console.log("err", error)
        }

    }

    return { getUsers, users }
}

export default useRequest;