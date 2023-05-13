import request from "@/tool/request";

export default {
    /**
     * 分页查询文章
     * @param {*} params 
     * @returns 
     */
    searchNews: params => request.post('/api/searchEcomNews', params),

    /**
     * 新增文章数据
     * @param {*} params 
     * @returns 
     */
    saveNews: params => request.post('/api/saveEcomNews', params),

    /**
     * 删除文章
     * @param {*} params 
     * @returns 
     */
    delNews: params => request.post('/api/delEcomNews', params),

    /**
     * 修改单个文章数据
     * @param {*} params 
     * @returns 
     */
    updateNews: params => request.post('/api/updateEcomNews', params),
}