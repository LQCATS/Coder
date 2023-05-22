<template>
    <div>
        <el-menu router default-active="2" class="el-menu-vertical-demo" background-color="rgb(48, 65, 86)"
            text-color="#fff" active-text-color="#ffd04b" style="box-sizing: border-box;border: 0px;" :unique-opened="true">

            <el-submenu :index="first.id" v-for="first in listMenu">
                <template slot="title">
                    <i :class="first.icon"></i>
                    <span>{{ first.name }}</span>
                </template>
                <!-- <el-menu-item-group> -->
                <el-menu-item v-for="second in first.children" :index="second.path">{{ second.name
                }}</el-menu-item>
                <!-- </el-menu-item-group> -->
            </el-submenu>

            <!-- <el-submenu index="1">
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

                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>内容</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/layout/article">文章管理</el-menu-item>
                                <el-menu-item index="/layout/articleType">文章分类</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                        <el-submenu index="6">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>会员</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/layout/member">会员管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu> -->

        </el-menu>
    </div>
</template>

<script>
import sessionTool from '@/tool/sessionTool';
import {mapMutations} from 'vuex';
export default {
    data() {
        return {
            listMenu: [],
        }
    },
    watch: {
        $route(nv,ov) {
            // console.log('nv,ov',nv,ov);
            this.PUSH_TAB({
                name: nv.meta.tabName,
                path: nv.path,
            });
        }
    },
    created() {
        this.listMenu = sessionTool.getSysMenu();
    },
    methods: {
        ...mapMutations(['PUSH_TAB']),
    }
}
</script>

<style lang="scss" scoped></style>