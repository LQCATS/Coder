<template>
    <div>
        <el-card class="box-card" style="margin: 10px 0;">
            <div style="display:flex;margin: 10px 0;">
                <div>姓名查询：</div>
                <el-input size="mini" style="width: 200px;" placeholder="请输入姓名" v-model="condition.name"></el-input>
            </div>
            <el-button type="primary" size="mini" @click="search()">查询</el-button>
        </el-card>


        <el-card class="box-card">
            <!-- 添加会员点击按钮 -->
            <div slot="header" class="clearfix">
                <el-button type="primary" @click="showEdit()">添加会员</el-button>
            </div>

            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="headImg" label="头像">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.headImg" fit="contain" :preview-src-list="[scope.row.headImg]"
                            style="width:40px;height:40px"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="tel" label="电话"></el-table-column>
                <el-table-column prop="sex" label="性别"></el-table-column>
                <el-table-column prop="age" label="年龄"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column prop="userType	" label="用户类型">
                    <template slot-scope="scope">
                        <span v-if="0 == scope.row.userType">用户</span>
                        <span v-else-if="1 == scope.row.userType">车主</span>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="showEdit(scope.row)">修改</el-button>
                        <el-button type="text" @click="doDel(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <CPaging :curPage="curPage" :total="total" @changeSize="changeSize" @search="search"></CPaging>
        </el-card>

        <!-- 新增 or 修改会员模态框 -->
        <el-dialog title="新增 or 修改会员" v-if="isShowMember" :visible.sync="isShowMember" width="50%"
            :close-on-click-modal="false">

            <el-form ref="Inform" :model="form" :rules="rules" label-width="80px" :inline="true">
                <el-form-item label="公司" prop="fkOrgId">
                    <!-- <el-input v-model="form.fkOrgId"></el-input> -->
                    <CInput v-model="form.fkOrgId"></CInput>
                </el-form-item>
                <el-form-item label="部门">
                    <el-input v-model="form.fkDeptId"></el-input>
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <!-- <el-input v-model="form.name"></el-input> -->
                    <CInput v-model="form.name"></CInput>
                </el-form-item>
                <el-form-item label="角色id">
                    <!-- <el-input v-model="form.fkRoleId"></el-input> -->
                    <CSelect v-model="form.fkRoleId" :options="options"></CSelect>
                </el-form-item>
                <el-form-item label="头像">
                    <!-- <el-input v-model="form.headImg"></el-input> -->
                    <CSUpload v-model="form.headImg"></CSUpload>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input v-model.number="form.tel"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="form.sex"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-input v-model="form.status"></el-input>
                </el-form-item>
                <el-form-item label="用户类型">
                    <CRadio v-model="form.userType" :radioData="radioData"></CRadio>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShowMember = false">取 消</el-button>
                <el-button type="primary" @click="doSave">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
const defaultForm = {
    fkOrgId: '',
    fkDeptId: '',
    name: '',
    fkRoleId: '',
    headImg: '',
    address: '',
    tel: '',
    sex: '',
    age: 0,
    status: 0,
    userType: 0
};

//自定义验证的函数
let checkName = (rule, val, callback) => {
    console.log('rule', rule);
    console.log('callback', callback);
    if (/^[a-zA-Z]+$/g.test(val)) {
        callback();
    } else {
        callback(new Error('用户名只能包含英文字母'));
    }
};

export default {
    data() {
        return {
            tableData: [],
            //分页参数
            curPage: 1,
            pageSize: 3,
            total: 0,
            condition: {
                name: '',
            },
            //新增 Or 修改需要的参数
            isShowMember: false,
            form: Object.assign({}, defaultForm),
            //表单验证
            rules: {
                //验证公司
                fkOrgId: [
                    //必须填写验证
                    { required: true, message: '请输入公司', trigger: 'blur' },
                    //长度验证
                    { min: 1, max: 5, message: '公司id必须在1到5为之间', trigger: 'blur' },
                ],
                //验证电话
                tel: [
                    { type: 'number', message: '电话必须为数字' },
                ],
                //验证名字
                name: [
                    { validator: checkName, trigger: 'blur' },
                ]
            },
            //单选框选项数组
            radioData: [
                {
                    value: '用户',
                    label: 0,
                },
                {
                    value: '车主',
                    label: 1,
                },
            ],
            //下拉框选项数组
            options: [
                {
                    value: 'f4544150-3641-11ed-b179-c14b061ea979',
                    label: '管理员',
                },
                {
                    value: 'r-2',
                    label: '仓库管理员',
                }
            ]

        }
    },
    created() {
        this.search(1);
    },
    methods: {
        //删除会员
        doDel(row) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$managers.delUmsMember({ id: row.id }).then(res => {
                    if (200 == res.code) {
                        //删除成功提示消息
                        this.$message.success('删除成功！');
                        //重新渲染页面
                        this.search();
                    } else {
                        //删除失败提示消息
                        this.$message.error('删除失败，请稍后再试！');
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        //新增 or 修改会员数据
        doSave() {
            this.$refs.Inform.validate((valid, listProp) => {
                console.log('listProp', listProp);
                if (valid) {
                    //表单验证通过
                    if (this.form.id) {
                        //修改
                        this.$managers.updateUmsMember(this.form).then(res => {
                            if (200 == res.code) {
                                //成功提示消息
                                this.$message.success('保存成功！');
                                //重新渲染页面
                                this.search();
                            } else {
                                //失败提示消息
                                this.$message.error('保存失败！');
                            }
                        })
                    } else {
                        //新增
                        this.$managers.saveUmsMember(this.form).then(res => {
                            if (200 == res.code) {
                                //成功提示消息
                                this.$message.success('保存成功！');
                                //重新渲染页面
                                this.search();
                            } else {
                                //失败提示消息
                                this.$message.error('保存失败！');
                            }
                        })
                    }

                    //关闭模态框
                    this.isShowMember = false;
                } else {
                    //表单验证失败
                    return false
                }
            })

        },
        //新增 or 修改会员
        showEdit(row) {
            if (row) {
                //修改，回显数据
                this.form = Object.assign({}, row);
                //打开模态框
                this.isShowMember = true;
            } else {
                //新增，初始化数据
                this.form = Object.assign({}, defaultForm);
                //打开模态框
                this.isShowMember = true;
            }

        },
        changeSize(size) {
            this.pageSize = size;
            this.search(1);
        },
        //分页查询
        search(page) {
            if (page) {
                this.curPage = page;
            }

            this.$managers.searchUmsMember({
                pageSize: this.pageSize,
                curPage: this.curPage,
                condition: this.condition,
            }).then(res => {
                this.tableData = res.data.rows;
                this.total = res.data.total;
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>