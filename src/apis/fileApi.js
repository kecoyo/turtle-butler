import request from '../lib/request';

/**
 * 文件Api
 */
const fileApi = {
  /**
   * 上传图片
   * @param filePath
   * @returns {*}
   */
  upload: filePath => request.uploadFile('/file/upload', 'file', filePath)
};

export default fileApi;
