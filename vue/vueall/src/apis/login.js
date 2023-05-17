import request from "@/tool/request";

export default {
    /**
     * 登 录
     * @param {username,pwd} params 
     * @returns 
     */
    login: params => request.post('/api/login', params),

}