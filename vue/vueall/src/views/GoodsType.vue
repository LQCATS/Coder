<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-button type="primary" @click="showAddGoodsType()">添加商品分类</el-button>
            </div>
            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="序号">
                </el-table-column>
                <el-table-column prop="typeName" label="分类名称">
                </el-table-column>
                <el-table-column prop="parentId" label="父节点id">
                </el-table-column>
                <el-table-column prop="icon" label="图标">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.icon" fit="contain" :preview-src-list="[scope.row.icon]"
                            style="width:40px;height:40px"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="sortNum" label="排序">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="doDeleteGoodsType(scope.row)">删除</el-button>
                        <el-button type="text" @click="showAddGoodsType(scope.row)">修改</el-button>
                    </template>
                </el-table-column>

            </el-table>

            <!-- 分页 -->
            <el-pagination @size-change="changeSize" @current-change="search"
                layout="->,total, sizes, prev, pager, next, jumper" :page-sizes="[3, 5, 10, 15]" :page-size="pageSize"
                :total="total" :current-page="curPage">
            </el-pagination>
        </el-card>

        <!-- 新增商品分类模态框 -->
        <el-dialog title="新增 or 修改" :visible.sync="isShowAddGoodsType" width="50%" :close-on-click-modal="false">

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="类型名称">
                    <el-input v-model="form.typeName"></el-input>
                </el-form-item>
                <el-form-item label="父节点id">
                    <el-input v-model="form.parentId"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <!-- <el-input v-model="form.icon"></el-input> -->
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
                    <el-radio-group v-model="form.status">
                        <el-radio :label="0">上架</el-radio>
                        <el-radio :label="1">下架</el-radio>
                    </el-radio-group>
                </el-form-item>

            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="isShowAddGoodsType = false">取 消</el-button>
                <el-button type="primary" @click="doAddGoodsType">保 存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

const defaultForm = {
    typeName: '',
    parentId: '',
    icon: '',
    sortNum: '',
    status: 0
};
export default {
    data() {
        return {
            form: Object.assign({}, defaultForm),
            isShowAddGoodsType: false,
            tableData: [],
            curPage: 1,
            pageSize: 3,
            total: 0,
            imageUrl: '',
        }
    },
    methods: {
        //图片上传后的回调函数
        uploadSuccess(res, file) {
            this.imageUrl = res.imgUrl;
            //将上传成功的图片地址赋值给form对象中的icon，便于在点击保存按钮时能够更新图片地址
            this.form.icon = res.imgUrl;
        },
        //图片上传之前的回调函数,该函数可以返回一个boolean类型的值，返回true时上传继续，返回false时会中止上传动作
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
        //点击删除该商品分类
        doDeleteGoodsType(row) {

            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {

                this.$goods.delInfoProducttype({ id: row.id }).then(res => {
                    if (200 == res.code) {
                        //删除成功提示消息
                        this.$message.success('删除成功！');
                        //请求数据，重新渲染页面
                        this.search();
                    } else {
                        //删除失败提示信息
                        this.$message.error('删除失败，请稍后重试！');
                    }
                }).catch(err => {
                    console.log(err);
                });


            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

            console.log(row);

        },
        //点击保存添加数据，或者修改数据到数据库
        doAddGoodsType() {
            //处理参数
            console.log(this.form);
            delete this.form.parentTypeName;
            //向后端发送请求
            if (this.form.id) {
                //数据有id代表修改数据
                this.$goods.updateInfoProducttype(this.form).then(res => {
                    if (200 == res.code) {
                        //添加成功提示消息
                        this.$message.success('保存成功！');
                        //关闭模态框
                        this.isShowAddGoodsType = false;
                        //请求数据，重新渲染
                        this.search(1);
                    } else {
                        //添加失败提示消息
                        this.$message.error('保存失败，请稍后重试！')
                    }
                }).catch(err => {
                    console.log(err);
                });
            } else {
                //数据没有id是新增的数据
                this.$goods.saveInfoProducttype(this.form).then(res => {
                    if (200 == res.code) {
                        //添加成功提示消息
                        this.$message.success('保存成功！')
                        //关闭模态框
                        this.isShowAddGoodsType = false;
                        //请求数据，重新渲染
                        this.search(1);
                    } else {
                        //添加失败提示消息
                        this.$message.error('保存失败，请稍后重试！')
                    }
                }).catch(err => {
                    console.log(err);
                });
            }



        },
        //点击显示新增或者修改商品类型模态框
        showAddGoodsType(row) {
            this.isShowAddGoodsType = true;
            if (row) {
                //修改时设置成当前行的头像地址，用于回显图片
                this.imageUrl = row.icon;

                //传参时修改数据，需要回显数据
                this.form = Object.assign({}, row);
            } else {
                //新增时清空图片地址，显示加号
                this.imageUrl = '';

                //不传参是新增数据，初始化表单
                this.form = Object.assign({}, defaultForm);
            }


        },
        search(page) {
            if (page) {
                this.curPage = page;
            }

            //分页查询
            this.$goods.searchInfoProducttype({
                pageSize: this.pageSize,
                curPage: this.curPage,
            }).then(res => {
                console.log(res);
                this.tableData = res.data.rows;
                this.total = res.data.total;

            })
        },
        changeSize(size) {
            this.pageSize = size;
            this.search(1);
        },

    },
    created() {
        this.search(1);
    }
}
</script>

<style lang="scss" scoped>
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