'use strict';

const Controller = require('egg').Controller;

// 定义创建用户接口的请求参数规则
const registerRule = {
  password:'string' || 'number',
  name:'string' || 'number',
  telephone:'string' || 'number',
  email:'string' || 'number'
};
class User extends Controller {
  async register(){
    const { ctx } = this
    const {name,telephone,password,email} = ctx.params
    if(name && telephone && password && email){
      const data = await ctx.service.user.findUser(name)
      if(data){
        ctx.response.status = 403
        throw new Error('用户名已存在')
      }
    }else{
      ctx.response.status = 422
      throw new Error('缺少必要参数')
    }
    await ctx.service.user.addUser({name,telephone,password,email,password:ctx.helper.md5(password)});
    ctx.body = {
      code:200,
      message:'创建用户成功',
      data:null
    }
  }

  async login(){
    const { ctx } = this
    // ctx.session = {a:123}
    ctx.body = {
      code:200,
      data:ctx.session
    }
  }

  async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.addName('wjw');
    ctx.body = userInfo;
  }
}

module.exports = User;
