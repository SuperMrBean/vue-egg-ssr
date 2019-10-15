/**
 * session验证中间件
 * 如果存在session.name则已经登录；白名单可以在config.default.js里面配置
 */
module.exports = options => {
  return async function auth(ctx, next) {
    if(ctx.session.name){
      await next();
    }else{
      ctx.status = 403
      ctx.body={
        code:-1,
        message:'登录信息已过期',
        data:null
      }
    }
  };
};