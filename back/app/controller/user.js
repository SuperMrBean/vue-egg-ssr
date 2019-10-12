'use strict';

const Controller = require('egg').Controller;

// 定义创建用户接口的请求参数规则
const registerRule = {
  password:'string',
  name:{type:'string',message:'用户名有误'},
  telephone:'number',
  email:'string'
};
class User extends Controller {
  async register(){
    const { ctx } = this
    try {
      ctx.validate(registerRule, ctx.request.body);
    } catch (error) {
      ctx.body = error
    }
  }

  async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.addName('wjw');
    ctx.body = userInfo;
  }
}

module.exports = User;
