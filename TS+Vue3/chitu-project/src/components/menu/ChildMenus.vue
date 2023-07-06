<template>
    <template v-for="item in items" :key="item.path">

        <a-menu-item v-if="!item.children" :key="item.path">{{ item.name }}</a-menu-item>

        <a-sub-menu v-else :key="item.path + ''" :title="item.name">
            <ChildMenus :items="item.children"></ChildMenus>
        </a-sub-menu>
    </template>
</template>

<script setup lang="ts">
import ChildMenus from './ChildMenus.vue'
//接受父组件传递的参数
defineProps<{
    items: any
}>()
</script>

<style scoped></style>