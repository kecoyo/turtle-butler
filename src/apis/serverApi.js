import request from '../lib/request';

/**
 * serverApi
 */
const serverApi = {
  /**
   * 图标列表
   * @returns {*}
   */
  iconList: () => request.get('icon/list')
};

export default serverApi;
