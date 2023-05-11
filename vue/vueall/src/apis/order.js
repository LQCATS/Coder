import request from "@/tool/request";

export default {
    /**
     * 分页查询电商订单
     * @param {*} params 向后端发送请求需要传递的参数，参数类型是对象
     * @returns 返回请求的结果
     */
    // searchOrder(params) {
    //     return request.post('/api/searchEcomOrder', params);
    // },
    //*只有一个返回值的简写方式
    searchOrder: params => request.post('/api/searchEcomOrder', params),

    /**
     * 根据用户id，修改单个电商订单数据
     * @param {*} params 向后端发送请求需要传递的参数，参数类型是对象
     * @returns 返回请求的结果
     */
    updateOrder: params => request.post('/api/updateEcomOrder', params),

    /**
     * 根据id取得一个电商订单数据
     * @param {id} params 
     * @returns 
     */
    getOrderById: params => request.post('/api/getEcomOrderById', params),

}