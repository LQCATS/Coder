<template>
    <div>
        <el-main>
            <!-- content,订单页面content头部筛选单选框 -->
            <el-card class="box-card">
                <div style="margin-top: 20px" class="radio_box">
                    <div class="radioTitle">订单类型：</div>
                    <el-radio-group v-model="condition.orderType" size="medium" @change="search(1)">
                        <el-radio-button label="">全部</el-radio-button>
                        <el-radio-button label="0">商城订单</el-radio-button>
                        <el-radio-button label="1">视频号订单</el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px" class="radio_box">
                    <div class="radioTitle">订单状态：</div>
                    <el-radio-group v-model="condition.orderStatus" size="medium" @change="search(1)">
                        <el-radio-button label="">全部</el-radio-button>
                        <el-radio-button :label="Number(key)" v-for="(status, key) in orderStatusCode">{{ status
                        }}</el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px" class="radio_box">
                    <div class="radioTitle">时间选择：</div>
                    <el-radio-group v-model="condition.orderTime" size="medium" @change="search(1)">
                        <el-radio-button label="">全部</el-radio-button>
                        <el-radio-button label="1">今天</el-radio-button>
                        <el-radio-button label="2">昨天</el-radio-button>
                    </el-radio-group>

                    <el-date-picker v-model="condition.orderDate" type="date" placeholder="选择日期" style="margin-left:20px;"
                        size="mini" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" @change="search(1)">
                    </el-date-picker>
                </div>

                <div style="margin-top: 15px;" class="inputBox">
                    <div class="inputTitle">订单号：</div>
                    <el-input placeholder="请输入订单号" v-model="orderNo" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search" @click="search(1)"></el-button>
                    </el-input>
                </div>

                <el-button class="exportBtn">导出</el-button>

            </el-card>

            <!-- 底部表格 -->
            <el-card class="box-card" style="margin-top: 20px;">
                <el-table :data="tableData" style="width: 100%">

                    <el-table-column prop="orderNo" label="订单号" width="120"></el-table-column>
                    <el-table-column prop="orderType" label="订单类型">
                        <template slot-scope="scope">
                            {{ scope.row.orderType | ctOrderType }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="reciveUserName" label="收货人"></el-table-column>
                    <el-table-column prop="productNum" label="商品信息"></el-table-column>
                    <el-table-column prop="payTotal" label="实际支付"></el-table-column>
                    <el-table-column prop="payType" label="支付方式">
                        <template slot-scope="scope">
                            {{ scope.row.payType | ctPayType }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="订单状态">
                        <template slot-scope="scope">
                            {{ scope.row.status | ctOrderStatus }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="orderTime" label="下单时间">
                        <template slot-scope="scope">
                            {{ scope.row.orderTime | formatDate }}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" fixed="right">

                        <template slot-scope="scope">
                            <!-- <el-button type="text" v-if="scope.row.status == 1" @click="showSend(scope.row)">发货</el-button>
                            <el-button type="text" v-else-if="scope.row.status == 5"
                                @click="showVerification(scope.row)">核销</el-button>
                            <el-button type="text" @click="goDetails(scope.row)">详情</el-button> -->


                            <el-dropdown trigger="click" style="margin-left:5px" @command="cmd => doCmd(cmd, scope.row)">
                                <span class="el-dropdown-link">
                                    更多<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="detail">订单详情</el-dropdown-item>

                                    <el-dropdown-item command="send" v-if="scope.row.status == 1">发货</el-dropdown-item>

                                    <el-dropdown-item command="verification"
                                        v-else-if="scope.row.status == 5">核销</el-dropdown-item>

                                    <el-dropdown-item>打印小票</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </template>

                    </el-table-column>

                </el-table>

                <!-- 分页 -->
                <!-- <el-pagination @size-change="changeSize" @current-change="search"
                    layout="->,total, sizes, prev, pager, next, jumper" :page-sizes="[3, 5, 10, 15]" :page-size="pageSize"
                    :total="total" :current-page="curPage">
                </el-pagination> -->
                <CPaging :curPage="curPage" :total="total" @changeSize="changeSize" @search="search"></CPaging>


                <!-- 发货模态框 -->
                <el-dialog title="提示" :visible.sync="isShowSend" width="50%" :close-on-click-modal="false">
                    <div>
                        <el-descriptions class="margin-top" title="订单信息" :column="3" size="small" border>

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
                                <el-tag size="small">{{ objOrder.productNum }}</el-tag>
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
                        <el-descriptions class="margin-top" title="发货信息" :column="3" size="small" border
                            style="margin-top: 30px;">
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-document"></i>
                                    快递编号
                                </template>
                                <el-input v-model="postNo"></el-input>
                            </el-descriptions-item>
                        </el-descriptions>
                    </div>
                    <span slot="footer">
                        <el-button @click="isShowSend = false">取 消</el-button>
                        <el-button type="primary" @click="doSend">发 货</el-button>
                    </span>
                </el-dialog>

                <!-- 核销模态框 -->
                <el-dialog title="提示" :visible.sync="isShowVerification" width="50%" :close-on-click-modal="false">
                    <div>
                        <el-descriptions class="margin-top" title="订单信息" :column="3" size="small" border>

                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-s-order"></i>
                                    订单号
                                </template>
                                {{ objVerification.orderNo }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-mobile-phone"></i>
                                    订单类型
                                </template>
                                {{ objVerification.orderType | ctOrderType }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-user"></i>
                                    收货人
                                </template>
                                {{ objVerification.reciveUserName }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-tickets"></i>
                                    商品信息
                                </template>
                                <el-tag size="small">{{ objVerification.productNum }}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-office-building"></i>
                                    实际支付
                                </template>
                                {{ objVerification.payTotal }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-office-building"></i>
                                    支付方式
                                </template>
                                {{ objVerification.payType | ctPayType }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-office-building"></i>
                                    订单状态
                                </template>
                                {{ objVerification.status | ctOrderStatus }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-office-building"></i>
                                    下单时间
                                </template>
                                {{ objVerification.orderTime | formatDate }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-document"></i>
                                    快递编号
                                </template>
                                {{ objVerification.postNo }}
                            </el-descriptions-item>
                        </el-descriptions>

                    </div>
                    <span slot="footer">
                        <el-button @click="isShowSend = false">取 消</el-button>
                        <el-button type="primary" @click="doVerification">核 销</el-button>
                    </span>
                </el-dialog>




            </el-card>

        </el-main>

    </div>
</template>

<script>
// import axios from 'axios';
import order from '@/apis/order';
import tool from '@/tool/tool';
import code from '@/config/code';

export default {
    data() {
        return {
            //是否显示核销框
            isShowVerification: false,
            //用于接受点击核销按钮要传递的数据，最后在模态框中显示出来
            objVerification: {},
            //绑定的快递编号，点击发货传递数据，后端修改数据
            postNo: '',
            //是否显示发货对话框(模态框)
            isShowSend: false,
            //用于接收点击发货按钮时传递的行数据，最后在模态框中显示出来
            objOrder: {},
            orderStatusCode: code.orderStatus,
            curPage: 1,
            pageSize: 3,
            total: 0,


            condition: {
                orderType: '',
                orderStatus: '',
                orderTime: '',
                orderDate: '',
            },
            orderNo: '',

            tableData: []
        };
    },
    methods: {
        //
        doCmd(cmd, row) {
            if ('detail' == cmd) {
                this.goDetails(row);
            } else if ('send' == cmd) {
                this.showVerification(row);
            } else if ('verification' == cmd) {
                this.showSend(row);
            }
        },
        //跳转订单详情页面,?传参
        goDetails(row) {
            console.log('goDetails', row.id);
            this.$router.push({
                path: `/layout/orderDetails?id=${row.id}`,
            })
        },

        //跳转订单详情页面，query传参
        // goDetails(row) {
        //     console.log('goDetails', row.id);
        //     this.$router.push({
        //         path: '/layout/orderDetails',
        //         query: {
        //             id: row.id
        //         }
        //     })
        // },

        //跳转订单详情页面，params传参
        // goDetails(row) {
        //     console.log('goDetails', row.id);
        //     this.$router.push({
        //         name: 'OrderDetails',
        //         params: {
        //             id: row.id
        //         }
        //     })
        // },

        //跳转订单详情页面，动态路由传参
        // goDetails(row) {
        //     console.log('goDetails', row.id);
        //     this.$router.push({
        //         path: `/layout/orderDetails/${row.id}`
        //     })
        // },

        //响应对话框核销按钮单击事件
        doVerification() {
            //组织接口需要传递的参数
            let params = {
                id: this.objVerification.id,
                status: 4,
            };

            //调用接口，根据订单id修改订单状态
            order.updateOrder(params).then(res => {
                if (200 == res.code) {
                    //修改成功，给用户的提示信息
                    this.$message.success('恭喜你，核销成功！');

                    //关闭核销模态框
                    this.isShowVerification = false;

                    //重新请求数据，渲染页面
                    this.search();

                } else {
                    //修改失败，给用户的提示信息
                    this.$message.error('核销失败，请稍后重试！')
                }
            }).catch(err => {
                console.log('doVerification', err);
            })
        },
        //核销框显示，并将核销信息保存在data中
        showVerification(verificationObj) {
            //点击核销按钮传递对应订单的数据保存在data中
            this.objVerification = verificationObj;

            //修改核销模态框的状态，将其显示出来
            this.isShowVerification = true;

        },
        //响应对话框中的发货按钮单击事件
        doSend() {

            //组织接口需要传递的参数
            let params = {
                id: this.objOrder.id,
                postNo: this.postNo,
                status: 2,
            };

            //调用接口，根据订单id修改快递编号和订单状态
            order.updateOrder(params).then(res => {
                if (200 == res.code) {
                    //发货成功提示用户
                    this.$message.success('恭喜你，发货成功！');

                    //点击发货修关闭发货的模态框
                    this.isShowSend = false;

                    //重新发送请求，渲染页面
                    this.search();

                } else {
                    //发货失败提示用户
                    this.$message.error('发货失败，请稍后重试！');
                }
            }).catch(err => {
                console.log('doSend', err);
            })
        },
        //发货模态框显示,并将订单信息保存在data中
        showSend(sendObj) {
            this.isShowSend = true;
            this.objOrder = sendObj;

        },
        //向后端发送请求的函数
        search(page) {
            if (page) {
                this.curPage = page;
            }

            //时间参数处理
            let temp = '';
            if (this.condition.orderDate) {
                temp = this.condition.orderDate + ' 11:11:11';
            } else {
                if ('1' == this.condition.orderTime) {
                    //查询今天的订单
                    temp = tool.getNow() + ' 11:11:11';
                } else if ('2' == this.condition.orderTime) {
                    //查询昨天的订单
                    temp = tool.getYesteday() + ' 11:11:11';
                }
            };
            //调取分页查询接口
            order.searchOrder({
                curPage: this.curPage,
                pageSize: this.pageSize,
                condition: {
                    orderType: this.condition.orderType,
                    status: this.condition.orderStatus,
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
        changeSize(pageSize) {
            console.log('pageSize', pageSize);

            this.pageSize = pageSize;
            // this.curPage = 1;
            //请求数据，渲染页面
            this.search(1);
        },
        // changePage(curPage) {
        //     console.log('curPage', curPage);

        //     this.curPage = curPage;
        //     //请求数据，渲染页面
        //     this.search();
        // }

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