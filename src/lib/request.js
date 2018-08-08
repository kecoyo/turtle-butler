const request = {

    get(url, params, config) {
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                data: params,
                header: {
                    'Content-Type': 'application/json'
                },
                success: function (res) {
                    resolve(res.data);
                },
                ...config
            });
        });
    },

    post(url, data, config) {
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                data: data,
                header: {
                    'Content-Type': 'application/json'
                },
                success: function (res) {
                    resolve(res.data);
                },
                ...config
            });
        });
    }

};

export default request;
