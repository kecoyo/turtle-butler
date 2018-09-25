/**
 * 开发环境
 */
const devServer = 'http://localhost:8701';
const development = {
    wwwPath: `${devServer}/`,
    apiPath: `${devServer}/api/`,
    iconUrl: `${devServer}/icons/`
};

/**
 * 开发环境
 */
const prodServer = 'https://butler.kecoyo.com';
const production = {
    wwwPath: `${prodServer}/`,
    apiPath: `${prodServer}/api/`,
    iconUrl: `${prodServer}/icons/`
};

export default production;
