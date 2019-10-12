'use strict';

const Controller = require('egg').Controller;

// 定义创建用户接口的请求参数规则
const registerRule = {
  password:'string' || 'number',
  name:'string' || '',
  telephone:'number' || 'number',
  email:'string'
};
class User extends Controller {
  async register(){
    const { ctx } = this
    console.log(typeof ctx.request.body.telephone)
    ctx.validate(registerRule, ctx.request.body);
  }

  async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.addName('wjw');
    ctx.body = userInfo;
  }
}

module.exports = User;
