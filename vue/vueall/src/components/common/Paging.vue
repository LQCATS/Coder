<template>
    <div>
        <el-pagination @size-change="changeSize" @current-change="search" :current-page="curPage" :page-sizes="pageSizes"
            :page-size="pageSize" layout="->,total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: {
        curPage: {
            type: Number,
            default: 1,
        },
        pageSize: {
            type: Number,
            default: 3,
        },
        total: {
            type: Number,
            default: 0,
        },
        pageSizes: {
            type: Array,
            default: () => {
                return [3, 5, 10, 15]
            },
        }

    },
    methods: {
        changeSize(size) {
            this.$emit('changeSize', size);
        },
        search(page) {
            this.$emit('search', page);
        },

    }
}
</script>

<style lang="scss" scoped></style>