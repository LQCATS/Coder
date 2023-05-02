<template>
  <div class="container">
    <NavMenu></NavMenu>
    <div class="content">
      <NavBread></NavBread>
      <!-- <NavTab></NavTab> -->

      <div class="tab_warp">
        <div class="tab_item" :class="{ tab_active: curPos == 0 }" @click="changeTab(0, 'GroupGoods')">拼团商品</div>
        <div class="tab_item" v-bind:class="{ tab_active: curPos == 1 }" @click="changeTab(1, 'GroupList')">拼团列表</div>
        <div class="tab_item" :class="{ tab_active: curPos == 2 }" @click="changeTab(2)">订单</div>
        <div class="tab_item" :class="{ tab_active: curPos == 3 }" @click="changeTab(3, 'StyleSwitch')">style样式</div>
        <div class="tab_item" :class="{ tab_active: curPos == 4 }" @click="changeTab(4, 'WatchDemo')">watchDemo</div>
        <div class="tab_item" :class="{ tab_active: curPos == 5 }" @click="changeTab(5, 'DataWatch')">DataWatch</div>
        <div class="tab_item" :class="{ tab_active: curPos == 6 }" @click="changeTab(6, 'DemoWatch')">DemoWatch</div>
        <div class="tab_item" :class="{ tab_active: curPos == 7 }" @click="changeTab(7, 'AddGoods')">AddGoods</div>
        <div class="tab_item" :class="{ tab_active: curPos == 8 }" @click="changeTab(8, 'Article')">文章分类</div>
      </div>


      <GroupGoods v-if="curPage == 'GroupGoods'" @jumpPage="goPage" v-bind:obj="objGoods"></GroupGoods>
      <StyleSwitch v-else-if="curPage == 'StyleSwitch'"></StyleSwitch>
      <GroupList v-else-if="curPage == 'GroupList'"></GroupList>
      <WatchDemo v-else-if="curPage == 'WatchDemo'"></WatchDemo>
      <DataWatch v-else-if="curPage == 'DataWatch'"></DataWatch>
      <DemoWatch v-else-if="curPage == 'DemoWatch'"></DemoWatch>
      <AddGoods @saveData="saveGoodsData" v-else-if="curPage == 'AddGoods'"></AddGoods>
      <Article v-else-if="curPage == 'Article'"></Article>
      <ClassSwitch v-else></ClassSwitch>


      <!-- <GroupGoods v-show="curPage == 'GroupGoods'"></GroupGoods>
      <StyleSwitch v-show="curPage == 'StyleSwitch'"></StyleSwitch>
      <ClassSwitch v-show="curPage == 'ClassSwitch'"></ClassSwitch> -->
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
// import NavTab from "@/components/NavTab.vue";
import NavBread from '@/components/NavBread';
import GroupGoods from '@/pages/GroupGoods';
import ClassSwitch from "./pages/ClassSwitch.vue";
import StyleSwitch from "./pages/StyleSwitch.vue";
import GroupList from "./pages/GroupList.vue";
import WatchDemo from "./pages/WatchDemo.vue";
import DataWatch from "./pages/DataWatch.vue";
import DemoWatch from "./pages/DemoWatch.vue";
import AddGoods from "./pages/AddGoods.vue";
import Article from "./pages/Article.vue";

export default {
  name: 'App',
  components: {
    NavMenu,
    // NavTab,
    NavBread,
    GroupGoods,
    ClassSwitch,
    StyleSwitch,
    GroupList,
    WatchDemo,
    DataWatch,
    DemoWatch,
    AddGoods,
    Article
  },
  data() {
    return {
      curPos: 8,
      curPage: 'Article',
      objGoods: null
    }
  },
  methods: {
    changeTab(pos, pageName) {
      this.curPos = pos;
      this.curPage = pageName;
    },
    goPage(pos, pageName) {
      console.log(pos, pageName);
      this.changeTab(pos, pageName)
    },
    saveGoodsData(objGoods) {
      this.objGoods = objGoods;
      console.log("saveGoodsData方法", objGoods, this.objGoods);
    }
  },
  
}
</script>
<style lang="scss" src="@/assets/css/common.scss"></style>
<style lang="scss" scoped>
.nav_tool {
  width: 100%;
  height: 50px;
  background: #fff;
  line-height: 50px;

  .nav_tool_item {
    margin-left: 30px;
  }
}

.tab_warp {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;

  .tab_item {
    width: 85px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: #fff;
    margin-left: 20px;
  }
}

.tab_active {
  color: #1890ff;
}


.tab_item {
  text-align: center;
  width: 70px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  background: #fff;
  margin-left: 20px;
  cursor: pointer;
}

.tab_warp {
  width: 85vw;
  height: 50px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
}
</style>
