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
   * 账号详情
   * @param id
   * @returns {*}
   */
  detail: id => request.get(env.apiPath + 'category/detail', { id }),

  /**
   * 获取新账号
   * @returns {*}
   */
  new: () => request.get(env.apiPath + 'category/new'),

  /**
   * 保存账号
   * @param data {name, icon}
   * @returns {*}
   */
  save: data => request.post(env.apiPath + 'category/save', data),

  /**
   * 保存所有账号
   * @param params
   * @returns {*}
   */
  saveAll: params => request.post(env.apiPath + 'category/saveAll', params)
};

export default categoryApi;
