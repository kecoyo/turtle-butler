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
  list: () => request.get(env.apiPath + 'category/list'),

  /**
   * 保存所有
   * @param params
   * @returns {*}
   */
  saveAll: params => request.post(env.apiPath + 'category/saveAll', params),

  /**
   * 新建
   * @param data
   * @returns {*}
   */
  new: () => request.get(env.apiPath + 'category/new'),

  /**
   * 加载
   * @param id
   * @returns {*}
   */
  load: id => request.get(env.apiPath + 'category/load', { id }),

  /**
   * 保存
   * @param data {name, icon}
   * @returns {*}
   */
  save: data => request.post(env.apiPath + 'category/save', data),

  /**
   * 加载
   * @param id
   * @returns {*}
   */
  delete: id => request.get(env.apiPath + 'category/delete', { id })
};

export default categoryApi;
