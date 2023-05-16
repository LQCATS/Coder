import request from "@/tool/request";

export default {
    /**
     * 分页查询用户
     * @param {*} params 向后端发送请求需要传递的参数，参数类型是对象
     * @returns 用户信息
     */
    searchManagers: (params) => request.post('/api/searchUmsUser', params),

    /**
     * 新增用户数据
     * @param {*} params 
     * @returns 
     */
    saveUser: params => request.post('/api/saveUmsUser', params),

    /**
     * 删除用户
     * @param {id} params 
     * @returns 
     */
    delUser: params => request.post('/api/delUmsUser', params),

    /**
     * 分页查询角色数据
     * @param {*} params 
     * @returns 
     */
    searchUmsRole: params => request.post('/api/searchUmsRole', params),

    /**
     * 分页查询会员
     * @param {*} params 
     * @returns 
     */
    searchUmsMember: params => request.post('/api/searchUmsMember', params),

    /**
     * 新增会员数据
     * @param {*} params 
     * @returns 
     */
    saveUmsMember: params => request.post('/api/saveUmsMember', params),

    /**
     * 修改单个会员数据
     * @param {*} params 
     * @returns 
     */
    updateUmsMember: params => request.post('/api/updateUmsMember', params),

    /**
     * 删除会员
     * @param {*} params 
     * @returns 
     */
    delUmsMember: params => request.post('/api/delUmsMember', params),

}