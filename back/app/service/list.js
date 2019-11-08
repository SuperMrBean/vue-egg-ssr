// app/service/user.js
'use strict';
const Service = require('egg').Service;

class Banner extends Service {
  async findAll() {
    const result = await this.app.mysql.query('select * from list');
    return result;
  }
  async findByType(type) {
    const result = await this.app.mysql.select('list', {
      where: { type }, // WHERE 条件
      orders: [[ 'update_time', 'desc' ]], // 排序方式
      limit: 6, // 返回数据量
      offset: 0 // 数据偏移量
    });
    console.log(result);
    return result;
  }
}

module.exports = Banner;
