import request from '../lib/request';
import env from '../lib/env';

/**
 * 属性Api
 */
const propertyApi = {

    /**
     * 列表
     */
    list: (params) => request.get(env.apiPath + 'property/list', params),

};

export default propertyApi;
