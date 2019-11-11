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
  // banner图相关
  router.post('/api/banner/getList', controller.banner.getList); // 获取banner图列表
  // web
  // banner图
  router.get('/web/banner/getList', controller.banner.getList); // web获取banner图列表
  router.get('/web/list/getList', controller.list.getList); // web获取首页展示列表
  router.get('/web/list/getArticle', controller.list.getArticle); // web获取文章内容
};
