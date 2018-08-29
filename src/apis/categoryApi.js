import request from '../lib/request';
import env from '../lib/env';

/**
 * 分类Api
 */
const categoryApi = {

    /**
     * 列表
     * @returns {*}
     */
    list: () => request.get(env.apiPath + '/category/list'),

    /**
     * 保存所有
     * @param params
     * @returns {*}
     */
    saveAll: (params) => request.post(env.apiPath + '/category/saveAll', params)

};

export default categoryApi;
