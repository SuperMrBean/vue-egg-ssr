'use strict';

const Controller = require('egg').Controller;

class Banner extends Controller {
  async getList() {
    const { ctx } = this;
    const { type } = ctx.params;
    const data = await ctx.service.list.findByType(type);
    ctx.body = {
      code: 200,
      message: '查询成功',
      data
    };
  }
}

module.exports = Banner;
