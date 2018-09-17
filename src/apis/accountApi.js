import request from '../lib/request';
import env from '../lib/env';

/**
 * 账号Api
 */
const accountApi = {

    /**
     * 列表
     */
    list: (params) => request.get(env.apiPath + 'account/list', params),

    /**
     * 保存所有
     * @param params
     * @returns {*}
     */
    saveAll: (params) => request.post(env.apiPath + 'account/saveAll', params),

    /**
     * 详情
     */
    detail: (params) => request.get(env.apiPath + 'account/detail', params),

    /**
     * 保存
     */
    save: (params) => request.post(env.apiPath + 'account/save', params),

};

export default accountApi;
