import { useDispatch, useSelector } from "react-redux";
import { getRolesIdAPI } from "../apis/rolesAPI";

const useRolesRequest = () => {
    const dispatch = useDispatch();
    const roles = useSelector(state => state.roles);

    const getRolesList = async () => {
        const res = await getRolesIdAPI({ parentId: 0 });
        dispatch({ type: 'defRoles', payload: res.data });
    };

    return { roles, getRolesList }
};

export default useRolesRequest;