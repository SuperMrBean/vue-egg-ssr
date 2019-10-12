// app/service/user.js
const Service = require('egg').Service;

class User extends Service {
  async addUser(params) {
    const result = await this.app.mysql.insert('user', params);
    return result;
  }  
  async findUser(name) {
    const result = await this.app.mysql.get('user', { name });
    return result;
  }
}

module.exports = User;