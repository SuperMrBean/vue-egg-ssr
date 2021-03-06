/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570611298429_4335';

  // add your middleware config here
  config.middleware = [
    'params',
    'errorHandler',
    'auth'
  ];

  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/api'
  };

  // session验证白名单
  config.auth = {
    ignore: [ '/api/user/login', '/api/user/register', '/web' ]
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [ 'http://127.0.0.1:3000' ] // 配置白名单
  };

  config.cors = {
    // origin: '*',//允许所有跨域访问，注释掉则允许上面 白名单 访问
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '!Aa123949007', // 本地
      // password: 'jiege123',// 生产
      // 数据库名
      database: 'web'
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  };

  // session配置
  config.session = {
    key: 'TOKEN',
    maxAge: 0.1 * 3600 * 1000, // 6分钟
    httpOnly: true,
    encrypt: true
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
