// app/service/user.js
const Service = require('egg').Service;

class User extends Service {
  async addName(name) {
    const user = `你好,${name}`;
    return user;
  }
}

module.exports = User;