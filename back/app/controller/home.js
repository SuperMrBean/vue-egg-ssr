'use strict';

const Controller = require('egg').Controller;

class Home extends Controller {
  async index() {
    const { ctx,app } = this;
    const userInfo = await app.mysql.get('user', { id: 1 });
    ctx.body = userInfo;
  }
}

module.exports = Home;
