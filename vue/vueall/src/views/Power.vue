<template>
    <div>
        <el-container>

            <el-container>
                <el-main>


                    <!-- content,订单页面content头部筛选单选框 -->
                    <el-card class="box-card">
                        <div class="searchBox" style="display: flex;">
                            <div style="display: flex;align-items: center; margin-right: 10px;">
                                <div style="margin-right: 10px;">菜单名称</div>
                                <el-input placeholder="请输入菜单名称" style="width: 300px;" v-model="condition.name"></el-input>

                            </div>

                            <el-button type="primary" icon="el-icon-search"
                                style="background-color: #1890ff;border-color: #dbdbdb;color: #fff;"
                                @click="search(1)">搜索</el-button>
                            <el-button type="primary" icon="el-icon-refresh"
                                style="background-color: #fff;border-color: #dbdbdb;color: #666;"
                                @click="doRest">重置</el-button>

                        </div>
                        <div style="margin: 10px 0 10px 0;">
                            <el-button icon="el-icon-plus" type="primary" plain @click="showEdit()">新增</el-button>
                            <el-button icon="el-icon-sort" type="info" plain>展开/折叠</el-button>

                        </div>
                        <!-- 底部表格 -->
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column type="index" width="50" label='序号'></el-table-column>
                            <el-table-column prop="id" label="ID"></el-table-column>
                            <el-table-column prop="parentName" label="父节点"></el-table-column>
                            <el-table-column prop="name" label="名称"></el-table-column>
                            <el-table-column prop="path" label="路由路径"></el-table-column>
                            <el-table-column prop="component" label="组件路径"></el-table-column>
                            <el-table-column prop="icon" label="图标">
                                <template slot-scope="scope">
                                    <i :class="scope.row.icon"></i>
                                </template>
                            </el-table-column>
                            <el-table-column prop="privilegeType" label="权限类型"></el-table-column>
                            <el-table-column prop="level" label="层次"></el-table-column>
                            <el-table-column label="操作" width="150">
                                <template slot-scope="scope">
                                    <el-button type="primary" size="mini" circle icon="el-icon-edit"
                                        @click="showEdit(scope.row)"></el-button>
                                    <el-button type="primary" size="mini" circle icon="el-icon-delete"
                                        @click="doDel(scope.row)"></el-button>
                                    
                                </template>
                            </el-table-column>
                        </el-table>

                        <!-- 分页 -->
                        <CPaging :curPage="curPage" :total="total" @changeSize="changeSize" @search="search"></CPaging>
                    </el-card>

                    <!-- 添加 or 修改 权限 -->
                    <el-dialog title=" 添加 or 修改 权限" :visible.sync="isShowAdd" width="50%" :close-on-click-modal="false">

                        <el-form ref="inForm" :model="form" label-width="80px" :inline="true">
                            <el-form-item label="父节点id">
                                <CSelect v-model="form.fkPerentId" opType="defFirstMenu"></CSelect>
                            </el-form-item>
                            <el-form-item label="权限名称" prop="name">
                                <CInput v-model="form.name"></CInput>
                            </el-form-item>
                            <el-form-item label="路由路径">
                                <CInput v-model="form.path"></CInput>
                            </el-form-item>
                            <el-form-item label="组件路径">
                                <CInput v-model="form.component"></CInput>
                            </el-form-item>
                            <el-form-item label="图标">
                                <CInput v-model="form.icon"></CInput>
                            </el-form-item>
                            <el-form-item label="权限类型">
                                <CSelect v-model="form.privilegeType" opType="privilegeType"></CSelect>
                            </el-form-item>
                            <el-form-item label="层级">
                                <CSelect v-model="form.level" opType="menuLeve"></CSelect>
                            </el-form-item>

                        </el-form>

                        <span slot="footer" class="dialog-footer">
                            <el-button @click="isShowAdd = false">取 消</el-button>
                            <el-button type="primary" @click="doSave">确 定</el-button>
                        </span>
                    </el-dialog>

                    


                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

import pageMixin from '@/mixin/pageMixin';
export default {
    mixins: [pageMixin],
    data() {
        return {
            condition: {
                name: ''
            },
            defaultForm: {
                fkPerentId: '',
                name: '',
                path: '',
                privilegeType: '',
                level: 0,
                dr: 0,
            },
            

        };
    },
    methods: {
        //重置
        doRest() {
            this.condition.name = '';
            this.search(1);
        },
        
    },
    created() {
        this.searchMethod = this.$power.searchSysPrivilege;
        this.saveMethod = this.$power.saveSysPrivilege;
        this.updateMethod = this.$power.updateSysPrivilege;
        this.delMethod = this.$power.delSysPrivilege;
        this.getByIdMethod = this.$power.getSysPrivilegeById;
        this.search(1);
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
    padding: 0 20px;
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