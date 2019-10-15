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
      const data = await ctx.service.user.findUserByName(name)
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
    const { name, password } = ctx.params
    if(name && password){
      const data = await ctx.service.user.findUser({ name, password:ctx.helper.md5(password) })
      if(data){
        ctx.session = {name:data.name}
        ctx.body = {
          code:200,
          message:'登录成功',
          data:null
        }
      }else{
        ctx.response.status = 403
        throw new Error('账号或密码错误')
      }
    }else{
      ctx.response.status = 422
      throw new Error('缺少必要参数')
    }
  }

  async info() {
    const { ctx } = this;
    const {id,name,telephone,email,role,create_time,update_time} = await ctx.service.user.findUserByName(ctx.session.name)
    ctx.body = {
      code:200,
      message:'查询成功',
      data:{
        id,
        name,
        telephone,
        email,
        role,
        create_time,
        update_time
      }
    }
  }
}

module.exports = User;
