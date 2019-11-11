'use strict';

const Controller = require('egg').Controller;

class Banner extends Controller {
  async getList() {
    const { ctx } = this;
    const { type, size, index } = ctx.params;
    const data = {};
    data.list = await ctx.service.list.findByType(type, size, index);
    data.total = await ctx.service.list.findByTypeCount(type);
    ctx.body = {
      code: 200,
      message: '查询成功',
      data
    };
  }
  async getArticle() {
    const { ctx } = this;
    const { id } = ctx.params;
    const data = await ctx.service.list.findById(id);
    ctx.body = {
      code: 200,
      message: '查询成功',
      data
    };
  }
}

module.exports = Banner;
