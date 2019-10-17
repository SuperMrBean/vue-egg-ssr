'use strict';

const Controller = require('egg').Controller;

class Banner extends Controller {
  async getList() {
    const { ctx } = this;
    const data = await ctx.service.banner.findAll()
    ctx.body = {
      code:200,
      message:'查询成功',
      data
    }
  }
}

module.exports = Banner;
