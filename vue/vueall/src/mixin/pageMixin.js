export default {
    data() {
        return {
            tableData: [],
            //分页参数
            curPage: 1,
            pageSize: 3,
            total: 0,
            isShowAdd: false,

            form: {},

            //定义查询方法
            searchMethod: null,
            //定义新增的方法
            saveMethod: null,
            //定义修改的方法
            updateMethod: null,
            //定义删除的方法
            delMethod: null,
            //定义根据id查询数据的方法
            getByIdMethod: null,

        }
    },
    methods: {
        //分页查询
        search(page) {
            if (page) {
                this.curPage = page;
            }

            this.searchMethod({
                pageSize: this.pageSize,
                curPage: this.curPage,
                condition: this.condition,
            }).then(res => {
                this.tableData = res.data.rows;
                this.total = res.data.total;
            }).catch(err => {
                console.log(err);
            });
        },
        //修改pagesize查询
        changeSize(size) {
            this.pageSize = size;
            this.search(1);
        },
        //新增 or 修改模态框
        showEdit(row) {
            //打开模态框
            this.isShowAdd = true;
            if (row) {
                this.getByIdMethod({ 
                    id: row.id 
                }).then(res => {
                    //修改，回显数据
                    console.log('res',res);
                    this.form = Object.assign({}, res.data);
                })
            } else {
                //新增，初始化数据
                this.form = Object.assign({}, this.defaultForm);
            }

        },
        //新增 or 修改
        doSave() {

            //表单验证通过
            if (this.form.id) {
                //修改
                this.updateMethod(this.form).then(res => {
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
                this.saveMethod(this.form).then(res => {
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
            this.isShowAdd = false;
        },
        //删除
        doDel(row) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.delMethod({ id: row.id }).then(res => {
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
    }
}
