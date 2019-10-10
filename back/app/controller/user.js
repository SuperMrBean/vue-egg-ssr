'use strict';

const Controller = require('egg').Controller;

class User extends Controller {
  async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.addName('wjw');
    ctx.body = userInfo;
  }
}

module.exports = User;
