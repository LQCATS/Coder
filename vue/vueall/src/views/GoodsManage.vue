<template>
    <div>
        <el-card class="box-card">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first"></el-tab-pane>
                <el-tab-pane label="出售中商品" name="second"></el-tab-pane>
                <el-tab-pane label="仓库中商品" name="third"></el-tab-pane>
                <el-tab-pane label="已经售馨商品" name="fourth"></el-tab-pane>
                <el-tab-pane label="警戒库存" name="fifth"></el-tab-pane>
                <el-tab-pane label="商品回收站" name="sixth"></el-tab-pane>
            </el-tabs>


            <!-- 查询部分 -->
            <div style="display:flex;align-items: center">
                <div style="display:flex;align-items: center">
                    <span>商品分类：</span>
                    <CSelect v-model="goodsType" opType="goodsType"></CSelect>
                </div>
                <div style="display:flex;align-items: center;margin-left: 30px;">
                    <span>商品搜索：</span>
                    <el-input style="width:350px" placeholder="请输入商品名称，关键字，商品id" v-model="searchMsg"
                        class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </div>
            <div style="margin-top: 20px;">
                <el-button type="primary" size="mini">添加商品</el-button>
                <el-button type="success" size="mini">商品采集</el-button>
                <el-button size="mini" icon="el-icon-upload2">导出</el-button>
            </div>

            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="fkProductType" label="商品类型id"></el-table-column>
                <el-table-column prop="productName" label="商品名称"></el-table-column>
                <el-table-column prop="keyword" label="关键字"></el-table-column>
                <el-table-column prop="productDesc" label="商品简介"></el-table-column>
                <el-table-column prop="productUnit" label="商品单位"></el-table-column>
                <el-table-column prop="productImg" label="商品封面图"></el-table-column>
                <el-table-column prop="productVideo" label="商品主视频地址"></el-table-column>
                <el-table-column prop="fkPostTemplateId" label="运费模板id"></el-table-column>
                <el-table-column prop="price" label="价格"></el-table-column>
                <el-table-column prop="publishTime" label="发布时间"></el-table-column>
                <el-table-column prop="saleCount" label="销售数量"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column prop="createUser" label="创建时间"></el-table-column>
                <el-table-column prop="dr" label="是否删除"></el-table-column>
            </el-table>

            <!-- 分页 -->
            <CPaging :curPage="curPage" :pageSize="pageSize" :total="total" @search="search" @changeSize="changeSize">
                
            </CPaging>
        </el-card>

    </div>
</template>

<script>
import pageMixin from '@/mixin/pageMixin';
export default {
    mixins: [pageMixin],
    data() {
        return {
            activeName: 'first',
            goodsType: '',
            searchMsg: '',
            tableData: [],
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    created() {
        this.searchMethod = this.$goods.getAllEcomProduct;
        this.search(1);
    }
}
</script>

<style lang="scss" scoped></style>