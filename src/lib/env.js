/**
 * 开发环境
 */
const devServer = 'http://localhost:8360';
const development = {
  wwwPath: `${devServer}/`,
  apiPath: `${devServer}/api/`,
  iconUrl: `${devServer}/`
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

export default development;
