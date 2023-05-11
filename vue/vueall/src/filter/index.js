import Vue from "vue";
import code from "@/config/code";

//转换数据，订单类型
Vue.filter('ctOrderType', val => {
    return code.orderType[val];
});

//转换数据，订单状态
Vue.filter('ctOrderStatus', val => {
    return code.orderStatus[val];
})

//数据转化，支付方式
Vue.filter('ctPayType', val => {
    return code.payType[val];
})

//数据转化，时间格式
Vue.filter('formatDate', val => {
    if (!val) {
        return val
    }
    let dateArr = val.split(' ');
    if (dateArr && 2 == dateArr.length) {
        return dateArr[0];
    } else {
        return val;
    }
})