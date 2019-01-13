import request from '../lib/request';
import env from '../lib/env';

/**
 * 账号Api
 */
const accountApi = {
  /**
   * 列表
   */
  list: params => request.get(env.apiPath + 'account/list', params),

  /**
   * 详情
   */
  detail: id => request.get(env.apiPath + 'account/detail', { id }),

  /**
   * 新建
   */
  new: () => request.get(env.apiPath + 'account/new'),

  /**
   * 保存
   */
  save: params => request.post(env.apiPath + 'account/save', params),

  /**
   * 保存所有
   */
  saveAll: data => request.post(env.apiPath + 'account/saveAll', data)
};

export default accountApi;
