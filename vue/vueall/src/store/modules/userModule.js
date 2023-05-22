export default {
    //定义子仓库必须写的属性，且为true
    namespaced: true,
    state: {
        loginUser: {
            id: 1,
            age: 18,
            name: '老刘',
            hobby: ['唱歌']
        }
    },
    getters: {
        GET_LOGIN_USERNAME(state) {
            return state.loginUser.name;
        }
    },
    mutations: {
        AGE_ADD(state, val) {
            state.loginUser.age = state.loginUser.age + val;
        }
    },
    actions: {
        hobbyAdd(context, val) {
            context.state.loginUser.hobby.push(val);
        }
    }
}