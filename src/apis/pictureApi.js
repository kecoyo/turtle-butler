import request from '../lib/request';
import env from '../lib/env';

/**
 * pictureApi
 */
const pictureApi = {

    /**
     * 上传图片
     * @param filePath
     * @returns {*}
     */
    upload: (filePath) => request.uploadFile(env.apiPath + 'account/uploadImage', 'file', filePath)

};

export default pictureApi;
