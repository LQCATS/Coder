<template>
    <div>
        <el-input v-model="curVal" @focus="showListDept" readonly></el-input>
        <el-dialog title="提示" :visible.sync="isShowDept" width="30%" :modal="false" :close-on-click-modal="false">
            <el-card class="listWarp">
                <el-table @row-dblclick="rowDBClick" @selection-change="rowSelect" :data="listData" stripe
                    style="width: 100%;" max-height="420px" height="420px">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column type="index" label="序号" width="50">
                    </el-table-column>
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column prop="cname" label="名称"></el-table-column>
                    <el-table-column prop="orgType" label="类型"></el-table-column>
                    <el-table-column prop="level" label="层级"></el-table-column>
                </el-table>
                <CPaging :curPage="curPage" :total="total" @changeSize="changeSize" @search="search"></CPaging>
            </el-card>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number],
            default: ""
        }
    },
    data() {
        return {
            isShowDept: false,
            curVal: "",
            curPage: 1,
            total: 0,
            pageSize: 20,
            listData: []
        }
    },
    watch: {
        value: {
            handler(nv, ov) {
                this.curVal = nv;
                this.search();
            },
            immediate: true
        }
    },
    methods: {
        rowDBClick(row) {
            console.log(row, 444)
            this.isShowDept = false;
            this.curVal = row.cname;
            this.$emit("input", row.id);
        },
        rowSelect(row) {
            if (row.length == 1) {
                this.isShowDept = false;
                this.curVal = row[0].cname;
                this.$emit("input", row[0].id);
            }
        },
        showListDept() {
            this.isShowDept = true;
            this.search();
        },
        changeSize(size) {
            this.pageSize = size;
            this.curPage = 1;
            this.search();
        },
        search() {
            this.$managers.searchUmsOrg({
                curPage: this.curPage,
                pageSize: this.pageSize
            }).then(res => {
                this.listData = res.data.rows;
                this.total = res.data.total;

                let curDept = this.listData.find(item => item.id == this.curVal);
                if (curDept) {
                    this.curVal = curDept.cname;
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>