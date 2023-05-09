<template>
    <div>
        <el-container>
            
            <el-container>
                <!-- 头部导航 -->
                <!-- <el-header style="display: flex;justify-content: space-between;">
                    
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">设置</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">管理权限</a></el-breadcrumb-item>
                        <el-breadcrumb-item>权限规则</el-breadcrumb-item>
                    </el-breadcrumb>
                    
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
                </el-header> -->


                <el-main>
                    <!-- 页签 -->
                    <el-tag v-for="tag in tags" :key="tag.name" closable disable-transitions :type="tag.type">
                        {{ tag.name }}
                    </el-tag>

                    <!-- content,订单页面content头部筛选单选框 -->
                    <el-card class="box-card">
                        <div class="searchBox" style="display: flex;">
                            <div style="display: flex;align-items: center; margin-right: 10px;">
                                <div style="margin-right: 10px;">菜单名称</div>
                                <el-input placeholder="请输入菜单名称" style="width: 300px;"></el-input>

                            </div>
                            <div style="display: flex;align-items: center;">
                                <div style="margin-right: 10px;">状态</div>
                                <el-select v-model="statusVal" placeholder="菜单状态" style="margin-right: 10px;">
                                    <el-option v-for="item in status" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>

                            <el-button type="primary" icon="el-icon-search"
                                style="background-color: #1890ff;border-color: #dbdbdb;color: #fff;">搜索</el-button>
                            <el-button type="primary" icon="el-icon-refresh"
                                style="background-color: #fff;border-color: #dbdbdb;color: #666;">重置</el-button>

                        </div>
                        <div style="margin: 10px 0 10px 0;">
                            <el-button icon="el-icon-plus" type="primary" plain>新增</el-button>
                            <el-button icon="el-icon-sort" type="info" plain>展开/折叠</el-button>

                        </div>
                        <!-- 底部表格 -->
                        <el-table :data="tableData" style="width: 100%">

                            <el-table-column prop="menuName" label="菜单名称"></el-table-column>
                            <el-table-column prop="icon" label="图标"></el-table-column>
                            <el-table-column prop="sort" label="排序"></el-table-column>
                            <el-table-column prop="permission" label="权限标识"></el-table-column>
                            <el-table-column prop="componentPath" label="组件路径"></el-table-column>
                            <el-table-column prop="status" label="状态">
                                <el-button type="primary" plain >显示</el-button>
                            </el-table-column>
                            <el-table-column prop="startTime" label="创建时间"></el-table-column>
                            <el-table-column prop="type" label="类型">
                                <el-button type="success" plain >目录</el-button>
                            </el-table-column>
                            <el-table-column fixed="right" label="操作">
                                <el-button icon="el-icon-edit" type="text">修改</el-button>
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
                { name: '权限规则', type: 'power' },

            ],
            radio1: '',
            radio2: '',
            radio3: '',
            date: '',
            orderNum: '',
            tableData: [
                {
                    menuName: '运营',
                    icon: '',
                    sort: '1',
                    permission: '',
                    componentPath: '/dashboard',
                    status: '',
                    startTime: '2023-05-07',
                    type: '',
                },
                {
                    menuName: '运营',
                    icon: '',
                    sort: '1',
                    permission: '',
                    componentPath: '/dashboard',
                    status: '',
                    startTime: '2023-05-07',
                    type: '',
                },
                {
                    menuName: '运营',
                    icon: '',
                    sort: '1',
                    permission: '',
                    componentPath: '/dashboard',
                    status: '',
                    startTime: '2023-05-07',
                    type: '',
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
                label: '目录'
            }, {
                value: '选项2',
                label: '菜单'
            }, {
                value: '选项3',
                label: '按钮'
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