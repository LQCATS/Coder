import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
    // *模块名
    name: 'global',
    //*模块中的数据
    initialState: {
        menuData: []
    },
    //*修改数据的方法
    reducers: {
        setMenus(state, action) {
            // action.payload 用于接收外部传递的数据
            state.menuData = action.payload;
        }
    }
});

export const { setMenus } = globalSlice.actions;

export default globalSlice.reducer;