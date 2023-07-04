import { useDispatch, useSelector } from 'react-redux';
import { getMenusAPI } from '../apis/usersAPI';
import { RootState } from "../store";
import { setMenus } from '../store/slice/global';

const useRequest = () => {
    const dispatch = useDispatch();
    // 获取状态机中的路由数据
    const menusData = useSelector((state: RootState) => state.global.menuData);

    //获取菜单数据
    const getMenusDataAsync = async () => {
        //获取用户的姓名
        const { username } = JSON.parse(localStorage.User || '{}');
        //调取接口获取菜单数据
        const res = await getMenusAPI(username);
        //调用dispatch方法，触发setMenus方法，修改menusData的值
        dispatch(setMenus(res));
    }

    return { getMenusDataAsync, menusData };
};

export default useRequest;