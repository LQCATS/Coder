<template>
    <div>
        <el-container>
            <el-main>
                <!-- content,订单页面content头部筛选单选框 -->
                <el-card class="box-card">
                    <div class="searchBox">
                        <el-input placeholder="请输入角色昵称" style="width: 300px;" v-model.trim="condition.name"></el-input>

                        <el-button type="primary" style="margin-left: 20px;" @click="search(1)">查询</el-button>
                        <el-button type="primary" icon="el-icon-refresh"
                            style="background-color: #fff;border-color: #dbdbdb;color: #666;" @click="doReset">重置</el-button>
                    </div>
                    <div style="margin: 10px 0 10px 0;">
                        <el-button type="primary" style="margin-left: 20px;margin-left: 10px;"
                            @click="showEdit()">添加角色</el-button>
                    </div>
                    <!-- 底部表格 -->
                    <el-table :data="tableData" style="width: 100%">

                        <el-table-column prop="code" label="角色编号"></el-table-column>
                        <el-table-column prop="name" label="角色昵称"></el-table-column>
                        <el-table-column prop="status" label="状态"></el-table-column>
                        <el-table-column fixed="right" label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" @click="showEdit(scope.row)">编辑</el-button>
                                <el-button type="text" @click="doDel(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                    <!-- 分页 -->
                    <CPaging :curPage="curPage" :pageSize="pageSize" :total="total" @changeSize="changeSize"
                        @search="search"></CPaging>
                </el-card>
                <!-- 新增 or 修改模态框 -->
                <el-dialog title="新增 or 修改会员" v-if="isShowAdd" :visible.sync="isShowAdd" width="50%"
                    :close-on-click-modal="false">

                    <el-form ref="Inform" :model="form" label-width="80px" :inline="true">
                        <el-form-item label="角色编号">
                            <CInput v-model="form.code"></CInput>
                        </el-form-item>
                        <el-form-item label="角色昵称">
                            <CInput v-model="form.name"></CInput>
                        </el-form-item>
                        <el-form-item label="状态">
                            <CInput v-model="form.status"></CInput>
                        </el-form-item>
                    </el-form>

                    <span slot="footer" class="dialog-footer">
                        <el-button @click="isShowAdd = false">取 消</el-button>
                        <el-button type="primary" @click="doSave">确 定</el-button>
                    </span>
                </el-dialog>

            </el-main>
        </el-container>

    </div>
</template>

<script>
import pageMixin from '@/mixin/pageMixin';
export default {
    mixins: [pageMixin],
    data() {
        return {
            radio1: '',
            radio2: '',
            radio3: '',
            date: '',
            orderNum: '',
            condition: {
                name: '',
            },
            defaultForm: {
                code: '',
                name: '',
                status: '',
            }

        };
    },

    created() {
        this.searchMethod = this.$managers.searchUmsRole;
        this.saveMethod = this.$managers.saveUmsRole;
        this.updateMethod = this.$managers.updateUmsRole;
        this.delMethod = this.$managers.delUmsRole;
        this.search(1);
    },
    methods: {
        //新增 or 修改会员
        showEdit(row) {
            if (row) {
                //修改，回显数据
                this.form = Object.assign({}, row);
                //打开模态框
                this.isShowAdd = true;
            } else {
                //新增，初始化数据
                this.form = Object.assign({}, this.defaultForm);
                //打开模态框
                this.isShowAdd = true;
            }

        },
        //重置
        doReset() {
            this.condition.name = '';
            this.search(1);
        }
        
    }
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