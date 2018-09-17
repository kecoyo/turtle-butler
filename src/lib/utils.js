const utils = {
    isSuccess(result) {
        return result && result.code && result.code == '1';
    },
    // 用Promise封装小程序的其他API
    promisify(api) {
        return (options, ...params) => {
            return new Promise((resolve, reject) => {
                api(Object.assign({}, options, {success: resolve, fail: reject}), ...params);
            });
        };
    },
    showLoading() {
        wx.showLoading({
            title: '数据加载中',
            icon: 'loading'
        });
    },
    hideLoading() {
        wx.hideLoading();
    },
    showToast(title, icon) {
        return new Promise((resolve, reject) => {
            wx.showToast({
                title: title || 'undefined',
                icon: icon || 'none',
                duration: 2000,
                success: (res) => {
                    setTimeout(() => {
                        resolve(res);
                    }, 2000);
                },
                fail: () => {
                    reject(new Error('Error: wx.showToast'));
                }
            });
        });
    },
    showSuccess(title) {
        return utils.showToast(title, 'success');
    },
    html2Escape(sHtml) {
        return sHtml.replace(/[<>&"]/g, function (c) {
            return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c];
        });
    },
    escape2Html(str) {
        var arrEntities = {'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"'};
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
            return arrEntities[t];
        });
    },
    px2rem(px) {
        return (750 / wx.getSystemInfoSync().screenWidth) * px;
    },
    rem2px(rem) {
        return (wx.getSystemInfoSync().screenWidth / 750) * rem;
    },
    // 获取上一级页面
    getParentPage($this) {
        let pages = $this.getCurrentPages();
        if (pages.length > 1) {
            return pages[pages.length - 2];
        }
        return null;
    },
    // 页面跳转
    navigateTo(url) {
        wx.navigateTo({
            url
        });
    },
    // 页面跳转
    navigateBack() {
        wx.navigateBack();
    },
    setNavigationBarTitle(title) {
        wx.setNavigationBarTitle({
            title
        });
    }
};

export default utils;
