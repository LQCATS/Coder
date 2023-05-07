<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <!-- logo图片 -->
                <div class="log">
                    <img src="@/assets/resource/images/logo.png" alt="">
                </div>

                <!-- 侧边栏导航区域，elementUi -->
                <el-row class="tac">
                    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="rgb(48, 65, 86)"
                        text-color="#fff" active-text-color="#ffd04b" style="box-sizing: border-box;border: 0px;">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>管理权限</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">角色管理</el-menu-item>
                                <el-menu-item index="1-2">管理员列表</el-menu-item>
                                <el-menu-item index="1-3">权限规则</el-menu-item>
                            </el-menu-item-group>

                        </el-submenu>
                    </el-menu>

                </el-row>
            </el-aside>
            <el-container>
                <!-- 头部导航 -->
                <el-header style="display: flex;justify-content: space-between;">
                    <!-- 左边 -->
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">设置</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">管理权限</a></el-breadcrumb-item>
                        <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
                    </el-breadcrumb>
                    <!-- 右边 -->
                    <div style="display: flex;align-items: flex-end;">
                        <span class="el-icon-search" style="margin-right: 20px;"></span>
                        <span class="el-icon-full-screen" style="margin-right: 20px;"></span>
                        <span class="el-icon-bell" style="margin-right: 20px;"></span>
                        <el-col style="width: 100px;">

                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link" style="color: #666;">
                                    demo<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>主页</el-dropdown-item>
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                    <el-dropdown-item>布局设置</el-dropdown-item>
                                    <el-dropdown-item>退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                    </div>
                </el-header>


                <el-main>
                    <!-- 页签 -->
                    <el-tag v-for="tag in tags" :key="tag.name" closable disable-transitions :type="tag.type">
                        {{ tag.name }}
                    </el-tag>

                    <!-- content,订单页面content头部筛选单选框 -->
                    <el-card class="box-card">
                        <div class="searchBox">
                            <el-select v-model="optionsVal" placeholder="身份" style="margin-right: 10px;">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select v-model="statusVal" placeholder="状态" style="margin-right: 10px;">
                                <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                            <el-input placeholder="姓名或者账号" style="width: 300px;"></el-input>
                            <el-button type="primary" style="margin-left: 20px;">查询</el-button>

                        </div>
                        <div style="margin: 10px 0 10px 0;">
                            <el-button type="primary" style="margin-left: 20px;margin-left: 10px;">添加管理员</el-button>

                        </div>
                        <!-- 底部表格 -->
                        <el-table :data="tableData" style="width: 100%">

                            <el-table-column prop="ID" label="ID"></el-table-column>
                            <el-table-column prop="name" label="姓名"></el-table-column>
                            <el-table-column prop="accountNumber" label="账号"></el-table-column>
                            <el-table-column prop="phone" label="手机号"></el-table-column>
                            <el-table-column prop="identity" label="身份"></el-table-column>
                            <el-table-column prop="lastTime" label="最后登陆时间"></el-table-column>
                            <el-table-column prop="LastIP" label="最后登录IP"></el-table-column>
                            <el-table-column prop="status" label="状态"></el-table-column>
                            <el-table-column prop="textMessage" label="是否接收短信"></el-table-column>
                            <el-table-column prop="delete" label="删除标记"></el-table-column>
                            <el-table-column fixed="right" label="操作">
                                <el-button type="text">编辑</el-button>
                            </el-table-column>
                        </el-table>
                    </el-card>


                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

    data() {
        return {
            tags: [
                { name: '主页', type: '' },
                { name: '管理员列表', type: 'managers' },

            ],
            radio1: '',
            radio2: '',
            radio3: '',
            date: '',
            orderNum: '',
            tableData: [
                {
                    ID: 1,
                    name: '张三',
                    accountNumber: '1111',
                    phone: '133333',
                    identity: '超级管理员',
                    lastTime: '2023-05-07',
                    LastIP: '',
                    status: '',
                    textMessage: false,
                    delete: '否'
                },
                {
                    ID: 1,
                    name: '张三',
                    accountNumber: '1111',
                    phone: '133333',
                    identity: '超级管理员',
                    lastTime: '2023-05-07',
                    LastIP: '',
                    status: '',
                    textMessage: false,
                    delete: '否'
                },
                {
                    ID: 1,
                    name: '张三',
                    accountNumber: '1111',
                    phone: '133333',
                    identity: '超级管理员',
                    lastTime: '2023-05-07',
                    LastIP: '',
                    status: '',
                    textMessage: false,
                    delete: '否'
                },



            ],
            options: [{
                value: '选项1',
                label: '超级管理员'
            }, {
                value: '选项2',
                label: '演示站'
            }, {
                value: '选项3',
                label: '核销员'
            }, {
                value: '选项4',
                label: '速度大师的撒'
            }],
            optionsVal: '',
            status: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '显示'
            }, {
                value: '选项3',
                label: '不显示'
            }],
            statusVal: '',
        };
    },
}

</script>

<style lang="scss" scoped>
.searchBox {
    width: 100%;
    padding: 10px;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    width: 15vw;
    height: 100vh;
    background-color: rgb(48, 65, 86);
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
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

.el-tag {
    background-color: #fff;
    color: #333;
    margin-right: 10px;
}

.el-main {
    padding: 10px 20px;
    background-color: #f5f5f5;
}

.box-card {
    margin-top: 10px;
}

.radio_box {
    display: flex;
    align-items: center;

    .radioTitle {
        font-weight: 700;
    }
}

.block {
    box-sizing: border-box;
    margin-left: 20px;
}

.el-input__inner {
    height: 35px;
    line-height: 35px;
}

.inputTitle {
    font-weight: 700;
    width: 80px;
}

.inputBox {
    display: flex;
    align-items: center;

}

.el-input {
    width: 500px;
}

.exportBtn {
    width: 70px;
    margin-left: 80px;
    margin-top: 20px;
}

::v-deep .el-card__body {
    padding: 0 0 10px 20px;
}
</style>