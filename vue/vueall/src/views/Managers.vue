<template>
    <div>


        <el-container>
            <el-main>
                

                <!-- content,订单页面content头部筛选单选框 -->
                <el-card class="box-card">
                    <div class="searchBox">

                        <el-input placeholder="身份Id" v-model="condition.fkRoleId" class="input-with-select"
                            style="width: 200px;margin-right: 20px;">
                            <el-button slot="append" icon="el-icon-search" @click="search(1)"></el-button>
                        </el-input>

                        <el-input placeholder="姓名或者账号" style="width: 300px;" v-model="condition.magagersName"></el-input>
                        <el-button type="primary" style="margin-left: 10px;" @click="search(1)" size="mini">查询</el-button>
                        <el-button type="info" plain icon="el-icon-refresh" @click="doReset" size="mini">重置</el-button>
                        <div style="margin-top: 20px;">
                            <el-radio-group v-model.number="condition.managersStatus" size="medium" @change="search(1)">
                                <el-radio-button label="">全部状态</el-radio-button>
                                <el-radio-button label="0">已失效</el-radio-button>
                                <el-radio-button label="1">已生效</el-radio-button>
                            </el-radio-group>
                        </div>

                    </div>
                </el-card>

                <!-- 底部表格 -->
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <el-button type="primary" @click="showAdd">添加管理员</el-button>
                    </div>

                    <el-table :data="tableData" style="width: 100%">
                        <!-- <el-table-column type="index" width="80" label="ID"></el-table-column> -->
                        <el-table-column prop="fkRoleId" label="ID"></el-table-column>
                        <el-table-column prop="name" label="姓名"></el-table-column>
                        <el-table-column prop="headImg" label="头像">
                            <template slot-scope="scope">
                                <div style="width: 80px;height: 80px;">
                                    <el-image :src="scope.row.headImg" fit="contain"
                                        :preview-src-list="[scope.row.headImg]">
                                    </el-image>
                                </div>

                            </template>
                        </el-table-column>

                        <el-table-column prop="accountNumber" label="账号"></el-table-column>
                        <el-table-column prop="mobile" label="手机号"></el-table-column>
                        <el-table-column prop="identity" label="身份"></el-table-column>
                        <el-table-column prop="lastTime" label="最后登陆时间"></el-table-column>
                        <el-table-column prop="LastIP" label="最后登录IP"></el-table-column>
                        <el-table-column prop="status" label="状态"></el-table-column>
                        <el-table-column prop="textMessage" label="是否接收短信"></el-table-column>
                        <el-table-column prop="dr" label="删除标记"></el-table-column>
                        <el-table-column fixed="right" label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" @click="doDetele(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                    <el-pagination @size-change="changeSize" @current-change="search"
                        layout="->,total, sizes, prev, pager, next, jumper" :page-sizes="[3, 5, 10, 15]"
                        :page-size="pageSize" :total="total" :current-page="curPage">
                    </el-pagination>
                </el-card>


            </el-main>
        </el-container>

        <!-- 添加管理员模态框 -->
        <el-dialog title="添加管理员" :visible.sync="isShowAdd" width="50%" :close-on-click-madel="false">

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="角色">
                    <el-select v-model="form.fkRoleId" clearable placeholder="请选择">
                        <el-option label="管理员" value="f4544150-3641-11ed-b179-c14b061ea979"></el-option>
                        <el-option label="仓库管理员" value="r-2"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="微信">
                    <el-input v-model="form.openid"></el-input>
                </el-form-item>

                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input v-model="form.pwd" :show-password="true"></el-input>
                </el-form-item>

                <el-form-item label="手机">
                    <el-input v-model="form.mobile"></el-input>
                </el-form-item>

                <el-form-item label="头像">
                    <el-input v-model="form.headImg"></el-input>
                </el-form-item>

                <el-form-item label="部门id">
                    <el-input v-model="form.dept"></el-input>
                </el-form-item>

                <el-form-item label="状态">
                    <el-radio-group v-model="form.status" size="small">
                        <el-radio :label="0" border>正常</el-radio>
                        <el-radio :label="1" border>永久锁定</el-radio>
                        <el-radio :label="2" border>临时锁定</el-radio>
                    </el-radio-group>
                </el-form-item>


            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="isShowAdd = false" size="mini">取 消</el-button>
                <el-button type="primary" @click="doSave" size="mini">保 存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// import axios from 'axios';
import managers from '@/apis/managers';


export default {

    data() {
        return {
            //添加管理员表单绑定额数据
            form: {
                fkRoleId: '',
                openid: '',
                name: '',
                pwd: '',
                mobile: '',
                headImg: '',
                dept: '',
                status: 0,
                dr: 0
            },
            //添加管理员模态框是否显示变量
            isShowAdd: false,
            condition: {
                managersStatus: '',
                magagersName: '',
                fkRoleId: '',
            },
            statusVal: '',
            pageSize: 5,
            curPage: 1,
            total: 0,
            tags: [
                { name: '主页', type: '' },
                { name: '管理员列表', type: 'managers' },

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
                label: '全部'
            }, {
                value: '选项2',
                label: '显示'
            }, {
                value: '选项3',
                label: '不显示'
            }],

        };
    },
    methods: {
        doDetele(row) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //调用接口删除数据
                this.$managers.delUser({
                    id: row.id
                }).then(res => {
                    if (200 == res.code) {
                        //删除成功提示消息
                        this.$message.success('删除成功！');
                        //重新渲染页面
                        this.search();
                    } else {
                        //删除失败信息
                        this.$message.error('删除失败,请稍后重试！');
                    }
                }).catch(err => {
                    //后端操作失败
                    this.$messaga.error('服务器错误！');
                });

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除！'
                });
            });
        },
        //保存form中新增的管理员数据
        doSave() {
            this.$managers.saveUser(this.form).then(res => {
                if (200 == res.code) {
                    //保存成功的情况
                    this.$message.success('保存成功');

                    //关闭模态框
                    this.isShowAdd = false;

                    //刷新列表数据
                    this.search(1);
                } else {
                    //保存失败的情况
                    this.$message.error('保存失败')
                }
            })
        },
        //添加管理员模态框
        showAdd() {
            this.isShowAdd = true;
        },
        search(page) {
            //参数处理
            if (page) {
                this.curPage = page;
            }
            //分页查询用户接口
            managers.searchManagers({
                pageSize: this.pageSize,
                curPage: this.curPage,
                condition: {
                    fkRoleId: this.condition.fkRoleId,
                    name: this.condition.magagersName,
                    status: this.condition.managersStatus,
                }

            }).then(res => {
                console.log('managersRes', res);

                this.tableData = res.data.rows;
                this.total = res.data.total;
            })
        },
        doReset() {
            this.condition.fkRoleId = '';
            this.condition.magagersName = '';
            this.condition.managersStatus = '';
            this.search(1);
        },
        // doSearch() {
        //     this.curPage = 1;
        //     this.search();
        // },
        changeSize(pageSize) {
            //确定参数
            this.pageSize = pageSize;
            this.curPage = 1;
            //发送请求
            this.search();
        },
        // changePage(cuePage) {
        //     //确定参数
        //     this.curPage = cuePage;
        //     //发送请求
        //     this.search();

        // }

    },
    created() {
        console.log('managers', "created");
        this.search(1);
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