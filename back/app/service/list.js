// app/service/user.js
'use strict';
const Service = require('egg').Service;

class Banner extends Service {
  async findAll() {
    const result = await this.app.mysql.query('select * from list');
    return result;
  }
  async findByType(type, size, index) {
    const result = await this.app.mysql.select('list', {
      where: type === 'all' ? { } : { type }, // WHERE 条件
      orders: [[ 'update_time', 'desc' ]], // 排序方式
      limit: Number(size), // 返回数据量
      offset: Number(size) * Number(index) - Number(size) // 数据偏移量
    });
    return result;
  }
  async findByTypeCount(type) {
    let result;
    if (type === 'all') {
      result = await this.app.mysql.count('list', {});
    } else {
      result = await this.app.mysql.count('list', { type });
    }
    return result;
  }
  async findById(id) {
    const result = await this.app.mysql.get('list', { id });
    return result;
  }
}

module.exports = Banner;
