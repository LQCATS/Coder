import request from "@/tool/request";

export default {
    /**
     * 分页查询用户
     * @param {*} params 向后端发送请求需要传递的参数，参数类型是对象
     * @returns 用户信息
     */
    searchManagers: (params) => request.post('/api/searchUmsUser', params),
}