import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// 引入角色的 reducer
import { rolesReducer } from './roles/reducer';
import { typeReducer } from './goodsType/reducer';
import { goodsReducer } from './goods/reducer';
import { usersReducer } from './users/reducer';

//合并reducer
const allReducer = combineReducers({
    roles: rolesReducer,
    type: typeReducer,
    goods: goodsReducer,
    users: usersReducer,
})

//将reduce放进状态机中
const store = legacy_createStore(allReducer, applyMiddleware(thunk));

export default store;