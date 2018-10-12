const userModel = require('../lib/mysql.js');
const fs = require('fs');
const md5 = require('md5');
const moment = require('moment');

exports.getSignup = async ctx =>  {
  await ctx.render('signup', {
    session: ctx.session
  });
}

exports.postSignup = async ctx => {
  
  let { name, password, repeatpass, avatar } = ctx.request.body;
  console.log(avatar);
  // console.log(name, password, repeatpass, avatar);
  await userModel.findDataByName(name)
    .then( async (result) => {
      console.log(result);
      if (result.length) {
        try {
          throw Error('用户已经存在');
        } catch(e) {
          console.log(e);
        }
        ctx.body = {
          code: 500,
          message: '用户存在'
        }
      } else if (password !== repeatpass || password === '') {
        ctx.body = {
          code: 500,
          message: '两次输入的密码不一致'
        }
      } else {
        let base64Data = avatar.replace(/^data:image\/\w+;base64,/, ""),
        dataBuffer = new Buffer(base64Data, 'base64'),
        getName = Number(Math.random().toString().substr(3)).toString(36)
        + Date.now(),
        upload = await new Promise((resolve, reject) => {
          fs.writeFile('./public/images/' + getName + '.png', dataBuffer, err => {
            if (err) {
              throw err;
              reject(false);
            }
            resolve(true);
            console.log('头像上传成功');
          });
        });
        if (upload) {
          await userModel.insertData([name, md5(password), getName + '.png', moment().format('YYYY-MM-DD HH:mm:ss')])
            .then(res => {
              ctx.body = {
                code:  200,
                message: '注册成功'
              }
            })
        } else {
          ctx.body = {
            code: 500,
            message: '头像上传失败'
          }
        }
      }
    })
}