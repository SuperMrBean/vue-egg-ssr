'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/', controller.home.index);
  // user 用户相关
  router.get('/api/user/info', controller.user.info);
  router.post('/api/user/register', controller.user.register);
};
