import request from '../lib/request';
import env from '../lib/env';

/**
 * 账号Api
 */
const accountApi = {

    /**
     * 账号列表
     */
    list: (params) => request.get(env.apiPath + '/account/list', params),

    /**
     * 账号列表
     */
    detail: (params) => request.get(env.apiPath + '/account/detail', params),

};

export default accountApi;
