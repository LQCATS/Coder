<template>
    <h1>父组件</h1>
    <Child name="张三" :age="20" :gender="gender" @getChildData="getChildData"></Child>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue'

const gender = ref('男');
const getChildData = (data: string) => {
    console.log('子组件传递数据', data);

}
</script>

<style scoped></style>