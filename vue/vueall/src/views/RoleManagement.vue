<template>
    <div>
        <el-container>
            <el-main>

                <!-- content,订单页面content头部筛选单选框 -->
                <el-card class="box-card">
                    <div class="searchBox">
                        <el-input placeholder="请输入角色昵称" style="width: 300px;"></el-input>
                        <el-button type="primary" style="margin-left: 20px;">查询</el-button>
                        <el-button type="primary" icon="el-icon-refresh"
                            style="background-color: #fff;border-color: #dbdbdb;color: #666;">重置</el-button>
                    </div>
                    <div style="margin: 10px 0 10px 0;">
                        <el-button type="primary" style="margin-left: 20px;margin-left: 10px;">添加角色</el-button>

                    </div>
                    <!-- 底部表格 -->
                    <el-table :data="tableData" style="width: 100%">

                        <el-table-column prop="code" label="角色编号"></el-table-column>
                        <el-table-column prop="name" label="角色昵称"></el-table-column>
                        <el-table-column prop="status" label="状态"></el-table-column>
                        <el-table-column fixed="right" label="操作">
                            <el-button type="text">编辑</el-button>
                        </el-table-column>
                    </el-table>

                    <!-- 分页 -->
                    <el-pagination @size-change="changeSize" @current-change="search" :current-page="curPage"
                        :page-sizes="[3, 5, 10, 15]" :page-size="pageSize"
                        layout="->,total, sizes, prev, pager, next, jumper" :total="total">
                    </el-pagination>
                </el-card>


            </el-main>
        </el-container>

    </div>
</template>

<script>
export default {

    data() {
        return {
            radio1: '',
            radio2: '',
            radio3: '',
            date: '',
            orderNum: '',
            tableData: [],
            curPage: 1,
            pageSize: 3,
            total: 0,
        };
    },
    methods: {
        changeSize(size) {
            this.pageSize = size;
            this.search(1);
        },
        search(page) {
            //参数处理
            if (page) {
                this.curPage = page;
            }
            //请求接口
            this.$managers.searchUmsRole({
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