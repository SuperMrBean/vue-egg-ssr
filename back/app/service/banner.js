// app/service/user.js
const Service = require('egg').Service;

class Banner extends Service {
  async findAll(name){
    const result = await this.app.mysql.query('select * from banner');
    return result;
  }
}

module.exports = Banner;