import request from "@/tool/request";

export default {
    /**
     * 分页查询字典
     * @param {*} params 
     * @returns 
     */
    searchDictionary: params => request.post('/api/searchSysDef', params),

    /**
     * 新增字典
     * @param {*} params 
     * @returns 
     */
    saveDictionary: params => request.post('/api/saveSysDef', params),

    /**
     * 删除字典
     * @param {*} params 
     * @returns 
     */
    delDictionary: params => request.post('/api/delSysDef', params),

    /**
     * 修改单个字典
     * @param {*} params 
     * @returns 
     */
    updateDictionary: params => request.post('/api/updateSysDef', params),
}