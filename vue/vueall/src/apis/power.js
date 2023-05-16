import request from "@/tool/request";

export default {
    /**
     * 分页查询权限
     * @param {*} params 
     * @returns 
     */
    searchSysPrivilege: params => request.post('/api/searchSysPrivilege', params),

    /**
     * 新增权限
     * @param {*} params 
     * @returns 
     */
    saveSysPrivilege: params => request.post('/api/saveSysPrivilege', params),

    /**
     * 修改单个权限数据
     * @param {*} params 
     * @returns 
     */
    updateSysPrivilege: params => request.post('/api/updateSysPrivilege', params),

    /**
     * 删除权限
     * @param {*} params 
     * @returns 
     */
    delSysPrivilege: params => request.post('/api/delSysPrivilege', params),
}