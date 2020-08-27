// bot.js 开始
const { Wechaty } = require('wechaty');
const { PuppetPadplus } = require('wechaty-puppet-padplus');
const onScan = require('./wechaty/listeners/on-scan')
const onLogin = require('./wechaty/listeners/on-login')
const onLogout = require('./wechaty/listeners/on-logout')
const onFriend = require('./wechaty/listeners/on-friend')
const onRoomjoin = require('./wechaty/listeners/on-roomjoin')
const onMessage = require('./wechaty/listeners/on-message')
const { WECHATYTOKEN } = require('./wechaty/wechat.config')
const { ROOMLIST } = require('./wechaty/wechat.config');
const { BUDDYLIST } = require('./wechaty/wechat.config');

const puppet = new PuppetPadplus({
    token: WECHATYTOKEN
})

const bot = new Wechaty({ name: 'WechatEveryDay', puppet })


bot.on('scan', onScan)
    .on('login', onLogin)
    .on('message', onMessage)
    .on('logout', onLogout)
    .on('friendship', onFriend)
    .on('room-join', onRoomjoin)


bot.start()
    .then(() => {
        console.log('开始登陆微信');
    })
    .catch(async function (e) {
        console.log(`初始化失败: ${e}.`)
        await bot.stop()
        process.exit(1)
    });
// bot.js 结束
const Koa = require("koa")
const Router = require("koa-router")
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()
app.use(bodyParser())


app.use(router.routes())
app.use(router.allowedMethods())

//监听端口
app.listen(15999);


/**
 * 接受消息并发送到微信群(限1个)
 * 群名：配置文件中 ROOMLIST 数组中属性 roomName
 * 没有返回信息
 */
router.get('/api/pushMessage', async (ctx) =>{
    try {
        const param = ctx.query.message;
        console.log("群名: "+ ROOMLIST[0].roomName);
        //根据群名获取Room对象
        const room = await bot.Room.find({ topic : ROOMLIST[0].roomName});
        if(room == null || room == undefined){
            console.log('群名不存在，请重新设置');
            return
        }
        console.log("发送的消息为："+ param);

        await room.say(param);
    }catch (e) {
        console.log(e);
        console.log('请求报错，请检查！');
    }
})

/**
 * 向指定好友发送指定消息 (限1个)
 * 好友：配置文件中
 * 没有返回信息
 */
router.get('/api/pushInfo', async (ctx) =>{
    try {
        const param = ctx.query.message;
        console.log("好友: "+ BUDDYLIST[0].name);
        const contact = await bot.Contact.find({ name : BUDDYLIST[0].name});
        if(contact == null || contact == undefined){
            console.log('好友不存在，请重新设置');
            return
        }
        console.log("发送的消息为："+ param);
        await contact.say(param);
    }catch (e) {
        console.log(e);
        console.log('请求报错，请检查！');
    }
})


module.exports = app