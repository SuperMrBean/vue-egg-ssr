'use strict';

const Controller = require('egg').Controller;

class User extends Controller {
  async info() {
    const { ctx } = this;
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };
  }
}

module.exports = User;
