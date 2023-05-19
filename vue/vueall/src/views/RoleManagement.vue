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
                            style="background-color: #fff;border-color: #dbdbdb;color: #666;"
                            @click="doReset">重置</el-button>
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
                                <el-button type="primary" size="mini" circle icon="el-icon-star-off"
                                    @click="showVote(scope.row)"></el-button>
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


                <!-- 授权面板 -->
                <el-dialog title="授权面板" v-if="isShowVote" :visible.sync="isShowVote" width="50%"
                    :close-on-click-modal="false">

                    <div style="height: 300px;overflow-y: auto;">
                        <el-tree ref="menuTree" :data="treeData" show-checkbox node-key="id"
                            :default-expanded-keys="defaultExpand" :default-checked-keys="defaultSelect"
                            :props="defaultProps">
                        </el-tree>
                    </div>


                    <span slot="footer" class="dialog-footer">
                        <el-button @click="isShowVote = false">取 消</el-button>
                        <el-button type="primary" @click="saveVote">确 定</el-button>
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
            condition: {
                name: '',
            },
            defaultForm: {
                code: '',
                name: '',
                status: '',
            },
            //树形模态框显示隐藏控制变量
            isShowVote: false,
            //树形需要的参数
            treeData: [],
            defaultProps: {
                children: 'children',
                label: 'name'
            },
            //当前行的角色对象
            selectRow: {},
            //默认选中的权限id数组
            defaultSelect: [],
            //默认展开的权限id数组
            defaultExpand: [],


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
        },
        //显示授权面板的模态框
        async showVote(row) {

            let menuRes = await this.$role.getAllMenu();
            //设置树形菜单的数据
            this.treeData = menuRes.data;
            //在data中保存当前选中的角色数据
            this.selectRow = row;


            let selectRes = await this.$role.getAllSysRolePrivilege({
                condition: {
                    fkRoleId: row.id
                }
            });
            // console.log('selectRes', selectRes);

            this.defaultSelect = selectRes.data.rows.map(item => item.fkPrivilegeId);
            this.defaultExpand = selectRes.data.rows.map(item => item.fkPrivilegeId);

            //显示授权面板模态框
            this.isShowVote = true;
        },
        saveVote() {
            //获取选中的菜单数组
            let tempArr = this.$refs.menuTree.getCheckedNodes();
            // console.log(tempArr);
            //获取选中的菜单的id,放到新的数组里面
            let listVote = [];
            for (let item of tempArr) {
                if (!item.children) {
                    //二级菜单
                    listVote.push(item.id);
                }
            };
            //调用接口保存角色权限
            this.$role.saveRolePrivilege({
                roleId: this.selectRow.id,
                listVote: listVote,
            }).then(res => {
                if (200 == res.code) {
                    this.isShowVote = false;
                    //保存成功提示消息
                    this.$message.success('保存成功！');
                } else {
                    //保存失败提示消息
                    this.$message.error('保存失败！');
                }
            });
        },

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