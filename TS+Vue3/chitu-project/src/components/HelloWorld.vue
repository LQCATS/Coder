<template>
	<div>{{ num }}</div>
	<div>{{ student.name }}</div>
	<div>{{ student.age }}</div>
	<button @click="change">按钮</button>
	<div>{{ result }}</div>
	<button @click='result = 200'>修改</button>
	<Father></Father>
</template>

<script setup lang="ts">
import { reactive, ref, computed, watch, watchEffect, onMounted } from 'vue';

import Father from './Father.vue';

onMounted(() => {

})

const num = ref(0);

const student = reactive({
	name: 'zhangsan',
	age: 20
})

const change = () => {
	num.value++;
	student.name = 'lisi';
	student.age++;
}

// const result = computed(() => {
// 	return num.value + 100
// })

const result = computed({
	get() {
		return num.value + 100;
	},
	set(value) {
		return num.value = value - 100;
	}
})

watch(() => num.value, (newValue, oldValue) => {
	console.log(newValue, oldValue);
}, {
	deep: true,
	immediate: true
})

watchEffect(() => {
	console.log('watchEffect', num.value, student.name);

})

</script>

<style scoped></style>