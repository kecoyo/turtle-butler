const utils = {
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
            title: title || '',
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
    }
};

export default utils;
