// app/service/user.js
'use strict';
const Service = require('egg').Service;

class Banner extends Service {
  async findAll() {
    const result = await this.app.mysql.query('select * from banner');
    return result;
  }
}

module.exports = Banner;
