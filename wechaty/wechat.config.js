module.exports = {
  AUTOREPLY: false, // 是否设置机器人自动回复，默认关闭 false  开启为 true
  WECHATYTOKEN: 'your token', // 必填，wechaty token
  /**
   * 每日说定时任务（支持多人）
   * name:要发送好友的昵称 （注：不是微信号！不是微信号！不是微信号！）
   * alias:要发送好友的备注（防止昵称带表情特殊字符）
   * date:每天定时的发送时间，案例中代表每天早上8点钟 (多个好友不要设置相同时间！不要设置相同时间！不要设置相同时间！)
   */
  BUDDYLIST: [
    {name:'微信机器人',alias:'微信机器人',date:'0 0/1 * * * *'},
  ],

  /**
   * 群定时任务列表（支持多群配置）
   * roomName: 群名
   * date:每天定时的发送时间，案例中代表每天早上7点30分，具体规则见‘wechaty/lib/index.js’(多个群不要设置相同时间！不要设置相同时间！不要设置相同时间！)
   */
  ROOMLIST: [
    {roomName:'欧气集团',date:'0 0/1 * * * *'},
  ],
   /**
    * 自动添加好友关键词，留空代表同意任何好友请求 
    */
  ACCEPTFRIEND: [],
  /**
   * 好友进群通知，可配置多个
   */
  ROOMJOINLIST: [{name:'',welcome:'有什么问题都可以群里提出，大家都是很热情的'}],
}