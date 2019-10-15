'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/', controller.home.index);
  // user 用户相关
  router.post('/api/user/info', controller.user.info); // 获取用户信息
  router.post('/api/user/register', controller.user.register); // 用户注册
  router.post('/api/user/login', controller.user.login); // 用户登录
};
