const QrcodeTerminal = require('qrcode-terminal')
const { ScanStatus } = require('wechaty-puppet')
/**
 * 扫描登录，显示二维码
 */
async function onScan (qrcode, status){
  if (status === ScanStatus.Waiting) {
    QrcodeTerminal.generate(qrcode, {
      small: true
    })
  }
}

module.exports = onScan