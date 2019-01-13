import request from '../lib/request';
import env from '../lib/env';

/**
 * 文件Api
 */
const fileApi = {
  /**
   * 上传图片
   * @param filePath
   * @returns {*}
   */
  upload: filePath => request.uploadFile(env.apiPath + 'file/upload', 'file', filePath)
};

export default fileApi;
