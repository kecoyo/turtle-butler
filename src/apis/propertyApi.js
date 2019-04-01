import request from '../lib/request';

/**
 * 属性Api
 */
const propertyApi = {
  /**
   * 列表
   */
  list: params => request.get('/property/list', params)
};

export default propertyApi;
