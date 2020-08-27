const config = require('../wechat.config.js');

//机器人实例化
let bot;
const item = config.ROOMLIST;

/**
 * 登录成功监听事件
 * @param {*} user 登录用户
 */
async function onLogin(user) {
  console.log(`微信机器人${user}登录了`);
  setTimeout(async ()=>{
    bot = this;
  }, 4000)
}

module.exports = onLogin;

