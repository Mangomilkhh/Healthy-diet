// 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init({
//     env: 'mp-407ff36a-90c3-47f8-b439-b4919f0ef8e9' //云开发环境ID
// })

'use strict';
const nodemailer = require('nodemailer')

// 创建一个SMTP客户端配置  smtp为发送邮件服务器
var config = {
  host: 'smtp.qq.com', // 网易163邮箱是 smtp.163.com
  port: 465,           // 网易邮箱端口是 25
  auth: {
    user: '908046710@qq.com',    // 邮箱账号
    pass: 'vvxipcsgpkhhbdfa'   // 邮箱的授权码
  }
};

exports.main = async (event, context) => {
	//event为客户端上传的参数
  let transporter = nodemailer.createTransport(config);
  const content = event.content
  // const from_name = event.from_name
  // 创建一个邮件对象
  var mail = {
    // 发件人
    from: '用户反馈<908046710@qq.com>',
    // 主题
    subject: '抗炎小程序用户反馈',
    // 收件人
    to: 'liyongxian2000@gmail.com',
		//  gil.zhang.dev@outlook.com  
    // 邮件内容，text或者html格式
    text: content
  };
  const info = await transporter.sendMail(mail)
  return info
}