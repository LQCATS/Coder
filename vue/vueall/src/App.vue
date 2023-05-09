<template>
  <div id="app">
    <!-- <Login></Login>
    <Order></Order>
    <RoleManagement></RoleManagement>
    <Managers></Managers>
    <Power></Power> -->
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from '@/views/Login.vue';
import Order from '@/views/Order.vue';
import RoleManagement from '@/views/RoleManagement.vue';
import Managers from '@/views/Managers.vue';
import Power from '@/views/Power.vue';

export default {
  components: {
    Login,
    Order,
    RoleManagement,
    Managers,
    Power
  }
}

</script>
<style lang="scss">
@import url('@/assets/resource/css/common.scss');
</style>
