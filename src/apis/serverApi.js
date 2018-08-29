import request from '../lib/request';
import env from '../lib/env';

/**
 * serverApi
 */
const serverApi = {

    /**
     * 图标列表
     * @returns {*}
     */
    iconList: () => request.get(env.apiPath + '/icon/list'),

};

export default serverApi;
