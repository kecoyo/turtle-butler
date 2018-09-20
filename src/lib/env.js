/**
 * 开发环境
 */
const devServer = 'http://localhost:8701/';
const development = {
    devServer,
    apiPath: `${devServer}api/`,
    iconUrl: `${devServer}icons/`
};

/**
 * 开发环境
 */
const prodServer = 'https://butler.kecoyo.com/';
const production = {
    devServer,
    apiPath: `${prodServer}api/`,
    iconUrl: `${prodServer}icons/`
};

export default production;
