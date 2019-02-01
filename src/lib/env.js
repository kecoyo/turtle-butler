/**
 * 开发环境
 */
const devServer = 'http://localhost:8360';
const development = {
  serverUrl: `${devServer}/`,
  apiUrl: `${devServer}/api/`
};

/**
 * 开发环境
 */
const prodServer = 'https://zaifumo.kecoyo.com';
const production = {
  serverUrl: `${prodServer}/`,
  apiUrl: `${prodServer}/api/`
};

export default production;
