
<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div style="margin-bottom: 20px;display: flex;align-items: center;">
                    <div>id查询：</div>
                    <el-input placeholder="请输入id" class="input-with-select" style="width: 50%" v-model.trim="id">
                        <el-button slot="append" icon="el-icon-search" @click="getNewsTypeById"></el-button>
                    </el-input>

                </div>
                <el-button type="primary" @click="showArticleType()">添加文章分类</el-button>
            </div>

            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="typeName" label="分类名称">
                </el-table-column>
                <el-table-column prop="typeIcon" label="分类图标">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.typeIcon" fit="contain" :preview-src-list="[scope.row.typeIcon]" style="width:40px;height:40px"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="sortNum" label="排序">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.status == 0">显示</span>
                        <span v-else-if="scope.row.status == 1">不显示</span>
                    </template>
                </el-table-column>
                <el-table-column prop="dr" label="状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.dr == 0">未删除</span>
                        <span v-else-if="scope.row.dr == 1">已删除</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="showArticleType(scope.row)">修改</el-button>
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

        <!-- 新增或者修改文章分类 -->
        <el-dialog title="添加 or 修改" :visible.sync="isShowAddArticleType" width="50%" :close-on-click-modal="false">

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="分类名称">
                    <el-input v-model="form.typeName"></el-input>
                </el-form-item>
                <el-form-item label="分类图标">
                    <el-upload class="avatar-uploader" action="http://127.0.0.1:3000/api/uploadImg" :show-file-list="false"
                        :on-success="uploadSuccess" :before-upload="beforeUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input v-model="form.sortNum"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model.number="form.status">
                        <el-radio :label="1">不显示</el-radio>
                        <el-radio :label="0">显示</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否删除">
                    <el-radio-group v-model="form.dr">
                        <el-radio :label="1">已删除</el-radio>
                        <el-radio :label="0">未删除</el-radio>
                    </el-radio-group>
                </el-form-item>


            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="isShowAddArticleType = false">取 消</el-button>
                <el-button type="primary" @click="doSave()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

const defaultForm = {
    typeName: '',
    typeIcon: '',
    sortNum: '',
    status: 1,
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
            isShowAddArticleType: false,
            //添加文章表单对象
            form: Object.assign({}, defaultForm),
            //id查询
            id: '',
            //图片上传
            imageUrl: '',
        }
    },
    methods: {
        //上传图片后函数
        uploadSuccess(res, file) {
            this.imageUrl = res.imgUrl;
            //点击保存将值赋给form中的数据
            this.form.typeIcon = res.imgUrl;
        },

        //上传图片前函数
        beforeUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },

        //根据id查询一条文章数据
        getNewsTypeById() {
            this.$article.getNewsTypeById({ id: this.id }).then(res => {
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
                this.$article.delNewsType({ id: row.id }).then(res => {
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
                this.$article.updateNewsType(this.form).then(res => {
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
                this.$article.saveNewsType(this.form).then(res => {
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
            this.isShowAddArticleType = false;

        },
        //点击新增or修改文章分类模态框显示
        showArticleType(row) {
            this.isShowAddArticleType = true;
            if (row) {
                //有参数是需要回显数据
                this.form = Object.assign({}, row);
                this.imageUrl = row.typeIcon;
            } else {
                //没有参数不需要回显数据
                this.imageUrl = '';
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
            this.$article.searchNewsType({
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

::v-deep .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

::v-deep .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
}

.avatar {
    width: 78px;
    height: 78px;
    display: block;
}
</style>