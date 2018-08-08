import request from '../lib/request';
import env from '../lib/env';

/**
 * 分类Api
 */
const categoryApi = {

    /**
     * 列表
     */
    list: () => request.get(env.apiPath + '/category/list'),

};

export default categoryApi;
