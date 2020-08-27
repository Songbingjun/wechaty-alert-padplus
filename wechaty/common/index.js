const api = require('../proxy/api');
const lib = require('../lib');
const {FileBox} = require('file-box');
const path = require('path')
// 添加定时提醒
// async function addSchedule(that,obj) {
//   try {
//     let scheduleObj = await api.setSchedule(obj)
//     let nickName = scheduleObj.subscribe
//     let time = scheduleObj.time
//     let Rule1 = scheduleObj.isLoop ? time : new Date(time)
//     let content = scheduleObj.content
//     let contact = await that.Contact.find({ name: nickName })
//     let _id = scheduleObj._id
//     lib.setSchedule(Rule1, async() => {
//       console.log('你的专属提醒开启啦！')
//       await lib.delay(10000)
//       await contact.say(content)
//       if (!scheduleObj.isLoop) {
//           api.updateSchedule(_id)
//       }
//     })
//     return true
//   } catch (error) {
//     console.log('设置定时任务失败',error)
//     return false
//   }
// }

module.exports = {};



