import wepy from 'wepy';

const apiUrl = wepy.$appConfig.baseUrl + '/butler';

const request = {
  get(url, params, config) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: apiUrl + url,
        data: params,
        header: {
          'Content-Type': 'application/json',
        },
        success: (res) => {
          let { data, statusCode } = res;
          if (statusCode === 200) {
            resolve(data);
          } else {
            reject(new Error('Error: ' + statusCode));
          }
        },
        fail: (err) => {
          reject(new Error('Error: ' + JSON.stringify(err)));
        },
        ...config,
      });
    });
  },

  post(url, data, config) {
    return new Promise((resolve, reject) => {
      wx.request({
        method: 'POST',
        url: apiUrl + url,
        data: data,
        header: {
          'Content-Type': 'application/json',
        },
        success: (res) => {
          let { data, statusCode } = res;
          if (statusCode === 200) {
            resolve(data);
          } else {
            reject(new Error('Error: ' + statusCode));
          }
        },
        fail: (err) => {
          reject(new Error('Error: ' + JSON.stringify(err)));
        },
        ...config,
      });
    });
  },
  uploadFile(url, name, filePath) {
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: apiUrl + url,
        name,
        filePath,
        header: {},
        success: (res) => resolve(JSON.parse(res.data)),
        fail: (err) => reject(err),
      });
    });
  },
};

export default request;
