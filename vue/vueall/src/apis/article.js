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

    /**
     * 根据id取得一个文章数据
     * @param {*} params 
     * @returns 
     */
    getNewsById: params => request.post('/api/getEcomNewsById', params),

    /**
     * 分页查询文章分类
     * @param {*} params 
     * @returns 
     */
    searchNewsType: params => request.post('/api/searchEcomNewstype', params),

    /**
     * 新增文章分类数据
     * @param {*} params 
     * @returns 
     */
    saveNewsType: params => request.post('/api/saveEcomNewstype', params),

    /**
     * 新增文章分类数据
     * @param {*} params 
     * @returns 
     */
    updateNewsType: params => request.post('/api/updateEcomNewstype', params),

    /**
     * 新增文章分类数据
     * @param {*} params 
     * @returns 
     */
    delNewsType: params => request.post('/api/delEcomNewstype', params),

    /**
     * 根据id取得一个文章分类数据
     * @param {*} params 
     * @returns 
     */
    getNewsTypeById: params => request.post('/api/getEcomNewstypeById', params),
}