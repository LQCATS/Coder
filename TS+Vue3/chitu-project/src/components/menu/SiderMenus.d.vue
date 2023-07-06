<template>
    <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline" theme="dark"
        :inline-collapsed="state.collapsed">
        <template v-for="item in menusData" :key="item.path">

            <a-menu-item v-if="!item.children" :key="item.path">
                <template #icon>
                    <CustomIcon :name="icons(item.icon)"></CustomIcon>
                </template>
                <span>{{ item.name }}</span>
            </a-menu-item>

            <a-sub-menu v-else :key="item.path + ''">
                <template #icon>
                    <CustomIcon :name="icons(item.icon)"></CustomIcon>
                </template>
                <template #title>{{ item.name }}</template>
                <ChildMenus :items="item.children"></ChildMenus>
            </a-sub-menu>

        </template>

    </a-menu>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue';
import { useGlobalStore } from "../../store/global.d";
import ChildMenus from './ChildMenus.vue';
import { CustomIcon } from '../icons/CustomIcon';

const state = reactive({
    collapsed: false,
    selectedKeys: ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
});


const globalStore: any = useGlobalStore();
onMounted(() => {
    globalStore.getMenusAsync();
});

//获取菜单数数据
const menusData = computed(() => {
    return globalStore.menusData.find((item: any) => item.children).children;
});

//处理icon的格式
const icons = (data: string) => {
    return data.replace(/-o$/, '')
        .replace(/^[a-z]/, (letter: string) => letter.toUpperCase())
        .replace(/-[a-z]/, (letter: string) => letter[1].toUpperCase())
        + 'Outlined'
}


</script>

<style scoped></style>