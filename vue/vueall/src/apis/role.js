import request from "@/tool/request";

export default {
    /**
     * 取得所有角色数据
     * @param {*} params 
     * @returns 
     */
    getAllUmsRole: params => request.post('/api/getAllUmsRole', params),

    /**
     * 查询所有菜单
     * @param {*} params 
     * @returns 
     */
    getAllMenu: params => request.post('/api/getAllMenu', params),

    /**
     * 保存角色权限
     * @param {*} params 
     * @returns 
     */
    saveRolePrivilege: params => request.post('/api/saveRolePrivilege', params),

    /**
     * 根据角色id取得所有权限数据
     * @param {*} params 
     * @returns 
     */
    getAllSysRolePrivilege: params => request.post('/api/getAllSysRolePrivilege', params),

}