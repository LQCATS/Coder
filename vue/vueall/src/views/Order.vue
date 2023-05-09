<template>
    <div>

        <!-- 头部导航 -->
        <!-- <el-header style="display: flex;justify-content: space-between;">
                    
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">订单</a></el-breadcrumb-item>
                        <el-breadcrumb-item>订单</el-breadcrumb-item>
                    </el-breadcrumb>
                    
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
                </el-header> -->
        <el-main>
            <!-- 页签 -->
            <el-tag v-for="tag in tags" :key="tag.name" closable disable-transitions :type="tag.type">
                {{ tag.name }}
            </el-tag>

            <!-- content,订单页面content头部筛选单选框 -->
            <el-card class="box-card">
                <div style="margin-top: 20px" class="radio_box">
                    <div class="radioTitle">订单类型：</div>
                    <el-radio-group v-model="orderType" size="medium" @change="doSearch">
                        <el-radio-button label="">全部</el-radio-button>
                        <el-radio-button label="0">商城订单</el-radio-button>
                        <el-radio-button label="1">视频号订单</el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px" class="radio_box">
                    <div class="radioTitle">订单状态：</div>
                    <el-radio-group v-model="orderStatus" size="medium" @change="doSearch">
                        <el-radio-button label="">全部</el-radio-button>
                        <el-radio-button label="0">未支付</el-radio-button>
                        <el-radio-button label="1">未发货</el-radio-button>
                        <el-radio-button label="2">待收货</el-radio-button>
                        <el-radio-button label="3">待评价</el-radio-button>
                        <el-radio-button label="4">交易完成</el-radio-button>
                        <el-radio-button label="5">待核销</el-radio-button>
                        <el-radio-button label="6">退款中</el-radio-button>
                        <el-radio-button label="7">已退款</el-radio-button>
                        <el-radio-button label="8">已删除</el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px" class="radio_box">
                    <div class="radioTitle">时间选择：</div>
                    <el-radio-group v-model="orderTime" size="medium" @change="doSearch">
                        <el-radio-button label="">全部</el-radio-button>
                        <el-radio-button label="1">今天</el-radio-button>
                        <el-radio-button label="2">昨天</el-radio-button>
                        <!-- <el-radio-button label="3">最近7天</el-radio-button>
                        <el-radio-button label="4">天最近30天</el-radio-button>
                        <el-radio-button label="5">本月</el-radio-button>
                        <el-radio-button label="6">本年</el-radio-button> -->
                    </el-radio-group>

                    <el-date-picker v-model="orderDate" type="date" placeholder="选择日期" style="margin-left:20px;"
                        size="mini"  format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" @change="doSearch">
                    </el-date-picker>
                </div>

                <div style="margin-top: 15px;" class="inputBox">
                    <div class="inputTitle">订单号：</div>
                    <el-input placeholder="请输入订单号" v-model="orderNo" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search" @click="doSearch"></el-button>
                    </el-input>
                </div>

                <el-button class="exportBtn">导出</el-button>

            </el-card>

            <!-- 底部表格 -->
            <el-card class="box-card" style="margin-top: 20px;">
                <el-table :data="tableData" style="width: 100%">

                    <el-table-column prop="orderNo" label="订单号" width="120"></el-table-column>
                    <el-table-column prop="orderType" label="订单类型"></el-table-column>
                    <el-table-column prop="reciveUserName" label="收货人"></el-table-column>
                    <el-table-column prop="goodsMsg" label="商品信息"></el-table-column>
                    <el-table-column prop="payTotal" label="实际支付"></el-table-column>
                    <el-table-column prop="PaymentMethod" label="支付方式"></el-table-column>
                    <el-table-column prop="status" label="订单状态"></el-table-column>
                    <el-table-column prop="orderTime" label="下单时间"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="180">
                        <template>
                            <div style="position:relative;z-index:99999">
                                <el-dropdown trigger="click" :hide-on-click="false">
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
                            </div>

                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination @size-change="changeSize" @current-change="changePage"
                    layout="->,total, sizes, prev, pager, next, jumper" :page-sizes="[3, 5, 10, 15]" :page-size="pageSize"
                    :total="total" :current-page="curPage">
                </el-pagination>
            </el-card>

        </el-main>

    </div>
</template>

<script>
// import axios from 'axios';
import order from '@/apis/order';
import tool from '@/tool/tool';

export default {
    data() {
        return {
            curPage: 1,
            pageSize: 3,
            total: 0,

            tags: [
                { name: '主页', type: '' },
                { name: '订单', type: 'order' },

            ],
            orderType: '',
            orderStatus: '',
            orderTime: '',
            orderDate: '',
            date: '',
            orderNo: '',
            tableData: []
        };
    },
    methods: {
        //向后端发送请求的函数
        search() {

            //时间参数处理
            let temp = '';
            if (this.orderDate) {
                temp = this.orderDate + ' 11:11:11';
            } else {
                if ('1' == this.orderTime) {
                    //查询今天的订单
                    temp = tool.getNow() + ' 11:11:11';
                } else if ('2' == this.orderTime) {
                    //查询昨天的订单
                    temp = tool.getYesteday() + ' 11:11:11';
                }
            };
            //调取分页查询接口
            order.searchOrder({
                curPage: this.curPage,
                pageSize: this.pageSize,
                condition: {
                    orderType: this.orderType,
                    status: this.orderStatus,
                    orderTime: temp,
                    orderNo: this.orderNo,
                }
            }).then(res => {
                this.tableData = res.data.rows;
                this.total = res.data.total;
            }).catch(err => {
                console.log('err', err);
            })
        },
        doSearch() {
            this.curPage = 1;
            this.search();
        },
        changeSize(pageSize) {
            console.log('pageSize', pageSize);

            this.pageSize = pageSize;
            this.curPage = 1;
            //请求数据，渲染页面
            this.search();
        },
        changePage(curPage) {
            console.log('curPage', curPage);

            this.curPage = curPage;
            //请求数据，渲染页面
            this.search();
        }

    },
    async created() {
        //异步请求
        this.search();
        // let promise = axios({
        //     url: 'http://127.0.0.1:3000/api/searchEcomOrder',
        //     method: 'POST',
        //     data: {}
        // })

        // promise.then(res => {
        //     console.log('res', res);
        //     this.tableData = res.data.data.rows;
        // }).catch(err => {
        //     console.log('err', err);
        // })
    },

}
</script>

<style lang="scss" scoped>
.el-icon-arrow-down {
    font-size: 12px;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}



.el-main {
    background-color: #E9EEF3;
    color: #333;
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