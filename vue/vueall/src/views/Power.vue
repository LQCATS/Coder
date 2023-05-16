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
                            <!-- <div style="display: flex;align-items: center;">
                                <div style="margin-right: 10px;">状态</div>
                                <el-select v-model="statusVal" placeholder="菜单状态" style="margin-right: 10px;">
                                    <el-option v-for="item in status" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div> -->

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

                            <el-table-column prop="name" label="权限名称"></el-table-column>
                            <el-table-column prop="icon" label="权限图标"></el-table-column>
                            <el-table-column prop="sortNum" label="排序"></el-table-column>
                            <el-table-column prop="permission" label="权限标识"></el-table-column>
                            <el-table-column prop="path" label="组件路径"></el-table-column>
                            <el-table-column prop="privilegeType" label="类型"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="primary" size="mini" @click="showEdit(scope.row)">修改</el-button>
                                    <el-button type="primary" size="mini" @click="doDel(scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                        <!-- 分页 -->
                        <CPaging :curPage="curPage" :total="total" @changeSize="changeSize" @search="search"></CPaging>
                    </el-card>

                    <!-- 添加 or 修改 权限 -->
                    <el-dialog title=" 添加 or 修改 权限" :visible.sync="isShowEdit" width="50%" :close-on-click-modal="false">

                        <el-form ref="inForm" :model="form" label-width="80px" :inline="true" :rules="rules">
                            <el-form-item label="父节点id">
                                <el-input v-model="form.fkPerentId"></el-input>
                                <!-- <CInput v-model="form.fkPerentId"></CInput> -->
                            </el-form-item>
                            <el-form-item label="权限名称" prop="name">
                                <!-- <CInput v-model="form.name"></CInput> -->
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="路径">
                                <!-- <CInput v-model="form.path"></CInput> -->
                                <el-input v-model="form.path"></el-input>
                            </el-form-item>
                            <el-form-item label="权限类型">
                                <!-- <CInput v-model="form.privilegeType"></CInput> -->
                                <el-input v-model="form.privilegeType"></el-input>
                            </el-form-item>
                            <el-form-item label="层级">
                                <!-- <CInput v-model="form.level"></CInput> -->
                                <el-input v-model="form.level"></el-input>
                            </el-form-item>
                            <el-form-item label="是否删除">
                                <!-- <CInput v-model="form.dr"></CInput> -->
                                <el-input v-model="form.dr"></el-input>
                            </el-form-item>
                        </el-form>

                        <span slot="footer" class="dialog-footer">
                            <el-button @click="isShowEdit = false">取 消</el-button>
                            <el-button type="primary" @click="doSave">确 定</el-button>
                        </span>
                    </el-dialog>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
const defaultForm = {
    fkPerentId: '',
    name: '',
    path: '',
    privilegeType: '',
    level: 0,
    dr: 0,
};
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
            tableData: [],
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
            //分页参数
            curPage: 1,
            pageSize: 3,
            total: 0,
            condition: {
                name: ''
            },
            //新增的参数
            isShowEdit: false,
            form: Object.assign({}, defaultForm),
            rules: {
                //验证名字
                name: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        //删除
        doDel(row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$power.delSysPrivilege({ id: row.id }).then(res => {
                    if (200 == res.code) {
                        this.$message.success('删除成功！');
                        this.search();
                    } else {
                        this.$message.error('删除失败！');
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        //保存数据
        doSave() {
            this.$refs.inForm.validate((valid, listProp) => {
                if (valid) {
                    if (this.form.id) {
                        this.$power.updateSysPrivilege(this.form).then(res => {
                            if (200 == res.code) {
                                //修改成功提示消息
                                this.$message.success('保存成功！');
                                //重新渲染页面
                                this.search();
                            } else {
                                //修改失败消息
                                this.$message.error('保存失败，请稍后重试！')
                            }
                        })
                    } else {
                        this.$power.saveSysPrivilege(this.form).then(res => {
                            if (200 == res.code) {
                                //修改成功提示消息
                                this.$message.success('保存成功！');
                                //重新渲染页面
                                this.search();
                            } else {
                                //修改失败消息
                                this.$message.error('保存失败，请稍后重试！')
                            }
                        })
                    }
                    //关闭模态框
                    this.isShowEdit = false;
                } else {
                    return false
                }
            })

        },
        //修改 or 新增 模态框数据回显or初始化
        showEdit(row) {
            // console.log(row);
            if (row) {
                //修改，回显数据
                this.form = Object.assign({}, row);
            } else {
                //新增，初始化数据
                this.form = Object.assign({}, defaultForm);
            }
            //打开模态框
            this.isShowEdit = true;

        },
        //重置
        doRest() {
            this.condition.name = '';
            this.search(1);
        },
        //根据pagesize查询
        changeSize(size) {
            this.pageSize = size;
            this.search(1);
        },
        //分页查询
        search(page) {
            //参数处理
            if (page) {
                this.curPage = page;
            }
            //发送请求
            this.$power.searchSysPrivilege({
                curPage: this.curPage,
                pageSize: this.pageSize,
                condition: this.condition,
            }).then(res => {
                if (200 == res.code) {
                    //查询成功
                    this.tableData = res.data.rows;
                    this.total = res.data.total;
                } else {
                    //查询失败
                    this.$message.error('查询失败');
                }
            }).catch(err => {
                console.log(err);
            })
        },

    },
    created() {
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