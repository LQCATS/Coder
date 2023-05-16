<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div style="margin-bottom: 20px;display: flex;align-items: center;">
                    <div>id查询：</div>
                    <el-input placeholder="请输入id" class="input-with-select" style="width: 50%" v-model.trim="id">
                        <el-button slot="append" icon="el-icon-search" @click="getNewsById"></el-button>
                    </el-input>

                </div>
                <el-button type="primary" @click="showArticle()">添加文章</el-button>
            </div>

            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="title" label="标题">
                </el-table-column>
                <el-table-column prop="authName" label="作者">
                </el-table-column>
                <el-table-column prop="newsType" label="文章类型">
                </el-table-column>
                <el-table-column prop="coverImg" label="文章封面图">
                </el-table-column>
                <el-table-column prop="newIntro" label="简介">
                </el-table-column>
                <el-table-column prop="content" label="内容">
                </el-table-column>
                <el-table-column prop="isHot" label="是否热门">
                    <template slot-scope="scope">
                        <span v-if="scope.row.isHot == 'N'">否</span>
                        <span v-else-if="scope.row.isHot == 'Y'">是</span>
                    </template>
                </el-table-column>
                <el-table-column prop="dr" label="是否删除">
                    <template slot-scope="scope">
                        <span v-if="scope.row.dr == 0">否</span>
                        <span v-else-if="scope.row.dr == 1">是</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="showArticle(scope.row)">修改</el-button>
                        <el-button type="text" @click="doDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>


            <!-- 分页 -->
            <el-pagination @size-change="changeSize" @current-change="search" :current-page="curPage"
                :page-sizes="[3, 5, 10, 15]" :page-size="pageSize" layout="->,total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </el-card>

        <!-- 新增或者修改文章 -->
        <el-dialog title="添加 or 修改" :visible.sync="isShowAddArticle" width="50%" :close-on-click-modal="false">

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="form.authName"></el-input>
                </el-form-item>
                <el-form-item label="文章类型">
                    <el-input v-model="form.newsType"></el-input>
                </el-form-item>
                <el-form-item label="文章封面图">
                    <el-input v-model="form.coverImg"></el-input>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input v-model="form.newIntro"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input v-model="form.content"></el-input>
                </el-form-item>
                <el-form-item label="是否热门">
                    <el-radio-group v-model="form.isHot">
                        <el-radio label="Y">是</el-radio>
                        <el-radio label="N">不是</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否删除">
                    <el-radio-group v-model="form.dr">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="0">不是</el-radio>
                    </el-radio-group>
                </el-form-item>


            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="isShowAddArticle = false">取 消</el-button>
                <el-button type="primary" @click="doSave()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

const defaultForm = {
    title: '',
    authName: '',
    newsType: '',
    coverImg: '',
    newIntro: '',
    content: '',
    isHot: 'Y',
    dr: 1
};

export default {
    data() {
        return {
            tableData: [],
            curPage: 1,
            pageSize: 3,
            total: 0,
            //添加文章模态框
            isShowAddArticle: false,
            //添加文章表单对象
            form: Object.assign({}, defaultForm),
            //id查询
            id: '',
        }
    },
    methods: {
        //根据id查询一条文章数据
        getNewsById() {
            this.$article.getNewsById({ id: this.id }).then(res => {
                if (200 == res.code) {
                    this.$message.success('查询成功！');
                    this.tableData = [res.data];
                    this.total = this.tableData.length;
                } else {
                    this.$message.error('查询失败，请稍后重试！')
                }
            }).catch(err => {
                console.log(err);
            })
        },
        //删除文章
        doDelete(row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //参数处理

                //点击确定按钮调用接口删除数据
                this.$article.delNews({ id: row.id }).then(res => {
                    if (200 == res.code) {
                        //删除成功提示消息
                        this.$message.success('删除成功！');
                        //重新渲染页面
                        this.search();
                    } else {
                        //删除失败提示消息
                        this.$message.error('删除失败！');
                    }
                }).catch(err => {
                    console.log(err);
                })

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除',
                });
            });
        },
        //保存修改或者新增的文章数据
        doSave() {
            //处理参数
            //发送请求
            if (this.form.id) {
                //存在id是修改文章
                this.$article.updateNews(this.form).then(res => {
                    if (200 == res.code) {
                        //提示发送成功信息
                        this.$message.success('恭喜你，保存成功！');

                        //发送请求重新渲染页面
                        this.search();
                    } else {
                        //提示失败消息
                        this.$message.error('保存失败，请稍后重试！');
                    }
                }).catch(err => {
                    console.log(err);
                })
            } else {
                //没有id是新增文章
                this.$article.saveNews(this.form).then(res => {
                    if (200 == res.code) {
                        //提示发送成功信息
                        this.$message.success('恭喜你，保存成功！');

                        //发送请求重新渲染页面
                        this.search();
                    } else {
                        //提示失败消息
                        this.$message.error('保存失败，请稍后重试！');
                    }
                }).catch(err => {
                    console.log(err);
                })
            }



            //关闭模态框
            this.isShowAddArticle = false;

        },
        //点击新增or修改文章模态框显示
        showArticle(row) {
            this.isShowAddArticle = true;
            if (row) {
                this.form = Object.assign({}, row);
            } else {
                this.form = Object.assign({}, defaultForm);
            }
        },
        //修改每页显示数据个数
        changeSize(size) {
            this.pageSize = size;
        },
        search(page) {
            //参数处理
            if (page) {
                this.curPage = page;
            }

            //接口请求
            this.$article.searchNews({
                curPage: this.curPage,
                pageSize: this.pageSize,
            }).then(res => {
                this.tableData = res.data.rows;
                this.total = res.data.total;
            }).catch(err => {
                console.log(err);
            })
        }
    },
    created() {
        this.search(1);
    },
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    padding: 0px 10px 0 0;
    box-sizing: border-box;
}
</style>