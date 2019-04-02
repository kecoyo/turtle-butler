import request from '../lib/request';

/**
 * 账号Api
 */
const accountApi = {
  /**
   * 列表
   */
  list: params => request.get('/account/list', params),

  /**
   * 详情
   */
  detail: id => request.get('/account/detail', { id }),

  /**
   * 新建
   */
  new: () => request.get('/account/new'),

  /**
   * 保存
   */
  save: params => request.post('/account/save', params),

  /**
   * 保存所有
   */
  saveAll: data => request.post('/account/saveAll', data),

  uploadPicture: filePath => request.uploadFile('/account/uploadPicture', 'file', filePath)
};

export default accountApi;
