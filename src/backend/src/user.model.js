const Waterline = require("waterline")
module.exports = Waterline.Collection.extend({
  identity: 'user',
  tableName: 'user',
  connection: 'mysql',
  schema: true,
  migrate: 'safe',
  attributes: {
    // 用户名
    username: {
      type:'string'
    },
    //密码
    password: {
      type:'string',     
      required: true
    },
    //昵称
    nickName: {
      type:'string',     
      required: true
    },
    //角色
    role: {
      model: 'role'
    }
  }
});

