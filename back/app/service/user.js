// app/service/user.js
const Service = require('egg').Service;

class User extends Service {
  async addUser(params) {
    const result = await this.app.mysql.insert('user', params);
    return result;
  }  
  async findUserByName(name){
    const result = await this.app.mysql.get('user', {name});
    return result;
  }
  async findUser(params) {
    const result = await this.app.mysql.get('user', params);
    return result;
  }
}

module.exports = User;