<template>
    <div>
        <el-card class="box-card">

            <!-- 添加字典点击按钮 -->
            <div slot="header" class="clearfix">
                <el-button type="primary" @click="showAddDictionary()">添加字典</el-button>
            </div>

            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" width="100" label="序号"></el-table-column>
                <el-table-column prop="code" label="字典code"></el-table-column>
                <el-table-column prop="name" label="字典名称"></el-table-column>
                <el-table-column prop="codeType" label="字典类型"></el-table-column>
                <el-table-column prop="val" label="字典值"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="showAddDictionary(scope.row)">修改</el-button>
                        <el-button type="text" @click="doDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <el-pagination @size-change="changeSize" @current-change="search" :current-page="curPage"
                :page-sizes="[3, 5, 10, 15]" :page-size="pageSize" layout="->,total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>

            <!-- 添加字典模态框 -->
            <el-dialog title="添加 or 修改" :visible.sync="isShowAddDictionary" width="50%" :close-on-click-modal="false">

                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="字典code">
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    <el-form-item label="字典名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="字典类型">
                        <el-input v-model="form.codeType"></el-input>
                    </el-form-item>
                    <el-form-item label="字典值">
                        <el-input v-model="form.val"></el-input>
                    </el-form-item>

                </el-form>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="isShowAddDictionary = false">取 消</el-button>
                    <el-button type="primary" @click="doSave()">确 定</el-button>
                </span>
            </el-dialog>

        </el-card>
    </div>
</template>

<script>
const defaultForm = {
    code: '',
    name: '',
    codeType: '',
    val: '',
    dr: 0,
};

export default {
    data() {
        return {
            //分页部分需要的参数
            tableData: [],
            curPage: 1,
            pageSize: 3,
            total: 0,
            //添加字典模态框是否显示
            isShowAddDictionary: false,
            //添加字典模态框内表单的数据
            form: Object.assign({}, defaultForm),
        }
    },
    methods: {
        //删除字典数据，用饿了么的方法
        doDelete(row) {

            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //点击确定后删除数据
                this.$dictionary.delDictionary({ id: row.id }).then(res => {
                    if (200 == res.code) {
                        //删除成功的消息提示
                        this.$message.success('恭喜你，删除成功！');

                        //重新请求数据渲染页面
                        this.search();
                    } else {
                        // 删除失败的消息提示
                        this.$message.success('删除失败，请稍后再试！');
                    }
                }).catch(err => {
                    console.log(err);
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        //新增字典
        doSave() {
            //处理参数

            //向后端请求
            if (this.form.id) {
                //有id是修改数据
                this.$dictionary.updateDictionary(this.form).then(res => {
                    if (200 == res.code) {
                        //修改成功的消息提示
                        this.$message.success('恭喜你，修改成功！');

                        //关闭模态框
                        this.isShowAddDictionary = false;

                        //重新请求数据渲染页面
                        this.search();
                    } else {
                        //修改失败的消息提示
                        this.$message.error('修改失败，请稍后重试！')
                    }
                }).catch(err => {
                    console.log(err);
                })
            } else {
                //没有id是增加数据
                this.$dictionary.saveDictionary(this.form).then(res => {
                    if (200 == res.code) {
                        //添加成功的消息提示
                        this.$message.success('恭喜你，添加成功！');

                        //关闭模态框
                        this.isShowAddDictionary = false;

                        //重新请求数据渲染页面
                        this.search();
                    } else {
                        //添加失败的消息提示
                        this.$message.error('添加失败，请稍后重试！')
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
            //关闭模态框
            this.isShowAddDictionary = false;


        },
        //点击显示添加和修改的模态框
        showAddDictionary(row) {
            //显示模态框
            this.isShowAddDictionary = true;

            if (row) {
                //如果有参数的话，是修改数据
                this.form = Object.assign({}, row);
            } else {
                //没有参数是新增数据
                this.form = Object.assign({}, defaultForm);
            }
        },
        //点击修改每页的size
        changeSize(size) {
            this.pageSize = size;
            this.search(1);

        },
        //向后端发送查询请求，渲染页面
        search(page) {
            //处理参数
            if (page) {
                this.curPage = page;
            }
            //发送请求
            this.$dictionary.searchDictionary({
                pageSize: this.pageSize,
                curPage: this.curPage,
            }).then(res => {
                console.log(res);
                this.tableData = res.data.rows;
                this.total = res.data.total;

            }).catch(err => {
                console.log(err);
            })
        },
    },
    created() {
        this.search(1);
    }
}
</script>

<style lang="scss" scoped></style>