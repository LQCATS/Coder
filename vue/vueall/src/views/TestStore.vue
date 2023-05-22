<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>count: {{ $store.state.count }}</div>
        <div>userName: {{ $store.state.userName }}</div>
        <div>isBoy: {{ $store.state.isBoy }}</div>
        <div>curTime: {{ $store.state.curTime }}</div>
        <div>objUser: {{ $store.state.objUser }}</div>
        <div>listUser: {{ $store.state.listUser }}</div>
        <div>getName: {{ $store.getters.getName }}</div>
        <div>setName: {{ $store.getters.setName }}</div>
        <div>
            mutations:
            <button @click="countAdd">count++</button>
        </div>
        <div>
            actions:
            <button @click="setTime">设置当前时间</button>
        </div>
        <div>
            <h1>子仓库数据显示</h1>
            <div>
                loginUser: {{ $store.state.user.loginUser }}
            </div>
            <div>
                GET_LOGIN_USERNAME: {{ $store.getters['user/GET_LOGIN_USERNAME'] }}
            </div>
            <div>
                <button @click="ageAdd">加2岁</button>
            </div>
            <div>
                <button @click="hobbyAdd_1">加跳舞</button>
            </div>
        </div>

        <div>
            <h1>主仓库辅助函数</h1>
            <div>getName: {{ getName }}</div>
            <div>setName: {{ setName }}</div>
        </div>

        <div>
            <h1>子仓库辅助函数</h1>
            <div>GET_LOGIN_USERNAME: {{ GET_LOGIN_USERNAME }}</div>
            <div>
                <button @click="userAgeAdd">子仓辅助函数加5岁</button>
            </div>
            <div>
                <button @click="userHobbyAdd">子仓辅助函数加跑步</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, createNamespacedHelpers } from 'vuex';
let { mapGetters: mapUserGetters, mapActions: mapUserActions, mapMutations: mapUserMutations } = createNamespacedHelpers('user');
export default {
    data() {
        return {
            msg: '测试状态机',
        }
    },
    computed: {
        ...mapGetters(['getName', 'setName']),
        ...mapUserGetters(['GET_LOGIN_USERNAME']),

    },
    created() {
        console.log('this', this.$store);
    },
    methods: {
        ...mapActions(['setCurTime']),
        ...mapMutations(['CURTIME']),
        //子仓库辅助函数mutations和actions
        ...mapUserActions(['hobbyAdd']),
        ...mapUserMutations(['AGE_ADD']),
        countAdd() {
            // this.$store.commit('CURTIME', 1);
            this.CURTIME(1);
        },
        setTime() {
            // this.$store.dispatch('setCurTime', new Date().getTime());
            this.setCurTime(new Date().getTime())
        },
        ageAdd() {
            this.$store.commit('user/AGE_ADD', 2);
        },
        hobbyAdd_1() {
            this.$store.dispatch('user/hobbyAdd', '跳舞');
        },
        userHobbyAdd() {
            this.hobbyAdd('跑步');
        },
        userAgeAdd() {
            this.AGE_ADD(5);
        }
    }
}
</script>

<style lang="scss" scoped></style>