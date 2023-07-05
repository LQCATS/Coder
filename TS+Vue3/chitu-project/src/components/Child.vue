<template>
    <h1>子组件</h1>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ gender }}</h2>
    <button @click="giveData">传参</button>
</template>

<script setup lang="ts">
defineProps<{
    name: string,
    age: number,
    gender: string
}>();

const emit = defineEmits(['getChildData']);

const giveData = () => {
    emit('getChildData', 'hello');
};


</script>

<style scoped></style>