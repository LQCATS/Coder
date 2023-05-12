<template>
    <div>
        <el-container>
            <el-aside width="200px" style="position:fixed;z-index: 999;">
                <!-- logo图片 -->
                <div class="log">
                    <img src="@/assets/resource/images/logo.png" alt="">
                </div>

                <!-- 侧边栏导航区域，elementUi -->
                <el-row class="tac">
                    <el-menu router default-active="2" class="el-menu-vertical-demo" background-color="rgb(48, 65, 86)"
                        text-color="#fff" active-text-color="#ffd04b" style="box-sizing: border-box;border: 0px;">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>订单</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/layout/order">订单</el-menu-item>
                            </el-menu-item-group>


                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>管理权限</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/layout/roleManagement">角色管理</el-menu-item>
                                <el-menu-item index="/layout/managers">管理员列表</el-menu-item>
                                <el-menu-item index="/layout/power">权限规则</el-menu-item>
                            </el-menu-item-group>

                        </el-submenu>

                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>商品</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/layout/goodsType">商品分类</el-menu-item>
                            </el-menu-item-group>

                        </el-submenu>

                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>系统管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/layout/dictionary">字典管理</el-menu-item>
                            </el-menu-item-group>

                        </el-submenu>

                    </el-menu>

                </el-row>
            </el-aside>
            <el-container style="margin-left: 200px;">
                <!-- 头部导航 -->
                <el-header style="display: flex;justify-content: space-between;">
                    <!-- 左边 -->
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">{{ $route.name }}</a></el-breadcrumb-item>
                        <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
                    </el-breadcrumb>
                    <!-- 右边 -->
                    <div style="display: flex;align-items: flex-end;">
                        <span class="el-icon-search" style="margin-right: 20px;"></span>
                        <span class="el-icon-full-screen" style="margin-right: 20px;"></span>
                        <span class="el-icon-bell" style="margin-right: 20px;"></span>
                        <el-col style="width: 100px;">

                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link" style="color: #666;cursor: pointer;">
                                    demo<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>主页</el-dropdown-item>
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                    <el-dropdown-item>布局设置</el-dropdown-item>
                                    <el-dropdown-item>
                                        <router-link to="/login" active-class="active" class="logout">退出</router-link>

                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                    </div>
                </el-header>
                <el-main>
                    <!-- 路由出口 -->
                    <KeepAlive>
                        <router-view></router-view>
                    </KeepAlive>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logout {
    color: #333;
    text-decoration: none;
}

.active {
    color: #333;
    text-decoration: none;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    width: 15vw;
    height: 100vh;
    background-color: rgb(48, 65, 86);
}

.log {
    width: 100%;
    margin: 20px 0;

    img {
        width: 100%;
    }

}

.el-header {
    display: flex;
    align-items: center;
}

.el-main {
    padding: 10px 20px;
    background-color: #f5f5f5;
}
</style>