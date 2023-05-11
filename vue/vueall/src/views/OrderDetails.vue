<template>
    <div>

        <el-card class="box-card" style="margin-top: 20px;">
            <el-descriptions class="margin-top" title="订单信息" :column="2" size="small" border>

                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-s-order"></i>
                        订单号
                    </template>
                    {{ objOrder.orderNo }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-mobile-phone"></i>
                        订单类型
                    </template>
                    {{ objOrder.orderType | ctOrderType }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-user"></i>
                        收货人
                    </template>
                    {{ objOrder.reciveUserName }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-tickets"></i>
                        商品信息
                    </template>
                    {{ objOrder.productNum }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-office-building"></i>
                        实际支付
                    </template>
                    {{ objOrder.payTotal }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-office-building"></i>
                        支付方式
                    </template>
                    {{ objOrder.payType | ctPayType }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-office-building"></i>
                        订单状态
                    </template>
                    {{ objOrder.status | ctOrderStatus }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-office-building"></i>
                        下单时间
                    </template>
                    {{ objOrder.orderTime | formatDate }}
                </el-descriptions-item>
            </el-descriptions>
        </el-card>


    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            objOrder: {},
        }
    },
    created() {
        console.log(this.$route.query.id);

        //问好传参和query传参获取参数
        this.$order.getOrderById(this.$route.query).then(res => {
            this.objOrder = res.data;
        })

        //params传参，和动态路由传参
        // this.$order.getOrderById(this.$route.params).then(res => {
        //     this.objOrder = res.data;
        // })

        //动态路由通过配置props传参
        // this.$order.getOrderById({ id: this.id }).then(res => {
        //     this.objOrder = res.data;
        // })
    }

}
</script>

<style lang="scss" scoped></style>