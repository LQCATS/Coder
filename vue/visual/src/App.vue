<template>
  <div>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  created() {
    var ratioX = window.innerWidth / 1920; //此处的宽高根据自己屏幕的比例修改即可
    var ratioY = window.innerHeight / 1080;
    document.body.style.transform = "scale(" + ratioX + "," + ratioY + ")";
    document.body.style.transformOrigin = "left top";
    document.body.style.backgroundSize = "100% 100%";
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}


</style>
