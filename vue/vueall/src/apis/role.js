import request from "@/tool/request";

export default {
    /**
     * 取得所有角色数据
     * @param {*} params 
     * @returns 
     */
    getAllUmsRole: params => request.post('/api/getAllUmsRole', params),

}