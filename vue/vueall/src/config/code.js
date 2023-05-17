export default {
    orderType: {
        '0': '商城订单',
        '1': '视频号订单',
    },
    orderStatus: {
        '0': '未支付',
        '1': '未发货',
        '2': '待收货',
        '3': '待评价',
        '4': '交易完成',
        '5': '待核销',
        '6': '退款中',
        '7': '已退款',
        '8': '已删除',
    },
    payType: {
        '0': '微信',
        '1': '支付宝',
        '2': '余额支付',
    },
    userStatus: [
        { label: '正常', value: 0 },
        { label: '长久锁定', value: 1 },
        { label: '临时锁定', value: 2 },
    ],
    privilegeType: [
        { label: '一级菜单', value: 'fristMenu' },
        { label: '二级菜单', value: 'secondMenu' },
    ],
    menuLeve: [
        { label: '一级', value: 1 },
        { label: '二级', value: 2 },
    ]
}