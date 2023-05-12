import request from "@/tool/request";

export default {
    /**
     * 分页查询商品
     * @param {*} params 
     * @returns 
     */
    searchInfoProducttype: params => request.post('/api/searchInfoProducttype', params),

    /**
     * 新增商品分类
     * @param {*} params 
     * @returns 
     */
    saveInfoProducttype: params => request.post('/api/saveInfoProducttype', params),

    /**
     * 删除商品类型
     * @param {id} params 
     * @returns 
     */
    delInfoProducttype: params => request.post('/api/delInfoProducttype', params),
    
    /**
     * 修改单个商品分类
     * @param {*} params 
     * @returns 
     */
    updateInfoProducttype: params => request.post('/api/updateInfoProducttype', params),

    
}