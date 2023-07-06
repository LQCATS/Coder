<template>
    <h1>登录</h1>
    <router-link to="/home">去首页</router-link>
    <button @click="doHome">去首页</button>
    <br>
    <br>
    <a-Button type="dashed" @click="login">登录</a-Button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { loginAPI } from '../apis/usersAPI';

const router = useRouter();
const route = useRoute();

const doHome = () => {
    router.push('/home');
}

//点击按钮，登录
const login = async () => {
    //调用登录接口
    const res = await loginAPI({
        username: 'bobo',
        password: '1234qwer'
    });
    //将数据保存在本地产储存
    localStorage.Token = res.data.token;
    localStorage.User = JSON.stringify(res.data.user);
    //跳转页面到home
    router.push('/home');
}
</script>

<style scoped></style>