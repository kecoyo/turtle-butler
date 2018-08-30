const utils = {
    isSuccess(result) {
        return result && result.code && result.code == '1';
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
        wx.showToast({
            icon: icon || 'none',
            title: title ? title.toString() : '',
            duration: 2000
        });
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
    }
};

export default utils;
