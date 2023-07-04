import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './slice/global';


export const store = configureStore({
    reducer: {
        global: globalReducer
    }
});

// RootState 就是对仓库中整个 state 对象进行类型约束
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;