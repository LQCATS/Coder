<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <!-- logo图片 -->
                <div class="log">
                    <img src="@/assets/resource/images/logo.png" alt="">
                </div>

                <!-- 侧边栏导航区域，elementUi -->
                <el-row class="tac">
                    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="rgb(48, 65, 86)"
                        text-color="#fff" active-text-color="#ffd04b" style="box-sizing: border-box;border: 0px;">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span>订单</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">订单</el-menu-item>
                            </el-menu-item-group>

                        </el-submenu>
                    </el-menu>

                </el-row>
            </el-aside>
            <el-container>
                <!-- 头部导航 -->
                <el-header style="display: flex;justify-content: space-between;">
                    <!-- 左边 -->
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">订单</a></el-breadcrumb-item>
                        <el-breadcrumb-item>订单</el-breadcrumb-item>
                    </el-breadcrumb>
                    <!-- 右边 -->
                    <div style="display: flex;align-items: flex-end;">
                        <span class="el-icon-search" style="margin-right: 20px;"></span>
                        <span class="el-icon-full-screen" style="margin-right: 20px;"></span>
                        <span class="el-icon-bell" style="margin-right: 20px;"></span>
                        <el-col style="width: 100px;">

                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link" style="color: #666;">
                                    demo<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>主页</el-dropdown-item>
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                    <el-dropdown-item>布局设置</el-dropdown-item>
                                    <el-dropdown-item>退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                    </div>
                </el-header>
                <el-main>
                    <!-- 页签 -->
                    <el-tag v-for="tag in tags" :key="tag.name" closable disable-transitions :type="tag.type">
                        {{ tag.name }}
                    </el-tag>

                    <!-- content,订单页面content头部筛选单选框 -->
                    <el-card class="box-card">
                        <div style="margin-top: 20px" class="radio_box">
                            <div class="radioTitle">订单类型：</div>
                            <el-radio-group v-model="radio1" size="medium">
                                <el-radio-button label="全部"></el-radio-button>
                                <el-radio-button label="商城订单"></el-radio-button>
                                <el-radio-button label="视频号订单"></el-radio-button>
                            </el-radio-group>
                        </div>
                        <div style="margin-top: 20px" class="radio_box">
                            <div class="radioTitle">订单状态：</div>
                            <el-radio-group v-model="radio2" size="medium">
                                <el-radio-button label="全部"></el-radio-button>
                                <el-radio-button label="未支付"></el-radio-button>
                                <el-radio-button label="未发货"></el-radio-button>
                                <el-radio-button label="待收货"></el-radio-button>
                                <el-radio-button label="待评价"></el-radio-button>
                                <el-radio-button label="交易完成"></el-radio-button>
                                <el-radio-button label="待核销"></el-radio-button>
                                <el-radio-button label="退款中"></el-radio-button>
                                <el-radio-button label="已退款"></el-radio-button>
                                <el-radio-button label="已删除"></el-radio-button>
                            </el-radio-group>
                        </div>
                        <div style="margin-top: 20px" class="radio_box">
                            <div class="radioTitle">时间选择：</div>
                            <el-radio-group v-model="radio3" size="medium">
                                <el-radio-button label="全部"></el-radio-button>
                                <el-radio-button label="今天"></el-radio-button>
                                <el-radio-button label="昨天"></el-radio-button>
                                <el-radio-button label="最近7"></el-radio-button>
                                <el-radio-button label="天最近30天"></el-radio-button>
                                <el-radio-button label="本月"></el-radio-button>
                                <el-radio-button label="本年"></el-radio-button>

                            </el-radio-group>
                            <div class="block" style="align-self: flex-start;">
                                <el-date-picker v-model="date" type="monthrange" range-separator="-"
                                    start-placeholder="开始月份" end-placeholder="结束月份">
                                </el-date-picker>
                            </div>
                        </div>

                        <div style="margin-top: 15px;" class="inputBox">
                            <div class="inputTitle">订单号：</div>
                            <el-input placeholder="请输入订单号" v-model="orderNum" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>

                        <el-button class="exportBtn">导出</el-button>

                    </el-card>

                    <!-- 底部表格 -->
                    <el-card class="box-card" style="margin-top: 20px;">
                        <el-table :data="tableData" style="width: 100%">

                            <el-table-column prop="orderNum" label="订单号"></el-table-column>
                            <el-table-column prop="orderType" label="订单类型"></el-table-column>
                            <el-table-column prop="consignee" label="收货人"></el-table-column>
                            <el-table-column prop="goodsMsg" label="商品信息"></el-table-column>
                            <el-table-column prop="actualPayment" label="实际支付"></el-table-column>
                            <el-table-column prop="PaymentMethod" label="支付方式"></el-table-column>
                            <el-table-column prop="orderStatus" label="订单状态"></el-table-column>
                            <el-table-column prop="OrderTime" label="下单时间"></el-table-column>
                            <el-table-column fixed="right" label="操作">
                                <template>
                                    <el-button type="text" size="small">
                                        <el-col>
                                            <el-dropdown trigger="click">
                                                <span class="el-dropdown-link">
                                                    更多<i class="el-icon-arrow-down el-icon--right"></i>
                                                </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>订单详情</el-dropdown-item>
                                                    <el-dropdown-item>订单记录</el-dropdown-item>
                                                    <el-dropdown-item>订单备注</el-dropdown-item>
                                                    <el-dropdown-item>打印小票</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </el-col>
                                    </el-button>
                                </template>


                            </el-table-column>
                        </el-table>
                    </el-card>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: [
                { name: '主页', type: '' },
                { name: '订单', type: 'order' },

            ],
            radio1: '',
            radio2: '',
            radio3: '',
            date: '',
            orderNum: '',
            tableData: [{
                orderNum: 1,
                orderType: '商城订单',
                consignee: '张三',
                goodsMsg: '鱼竿',
                actualPayment: 999.99,
                PaymentMethod: '微信支付',
                orderStatus: '未完成',
                OrderTime: "2023-05-07"
            },
            {
                orderNum: 1,
                orderType: '商城订单',
                consignee: '张三',
                goodsMsg: '鱼竿',
                actualPayment: 999.99,
                PaymentMethod: '微信支付',
                orderStatus: '未完成',
                OrderTime: "2023-05-07"
            },
            {
                orderNum: 1,
                orderType: '商城订单',
                consignee: '张三',
                goodsMsg: '鱼竿',
                actualPayment: 999.99,
                PaymentMethod: '微信支付',
                orderStatus: '未完成',
                OrderTime: "2023-05-07"
            },
            {
                orderNum: 1,
                orderType: '商城订单',
                consignee: '张三',
                goodsMsg: '鱼竿',
                actualPayment: 999.99,
                PaymentMethod: '微信支付',
                orderStatus: '未完成',
                OrderTime: "2023-05-07"
            },
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
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

.el-main {
    background-color: #E9EEF3;
    color: #333;
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
    padding: 10px 20px;
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