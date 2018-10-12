const userModel = require('../lib/mysql.js');
const md5 = require('md5');
const checkNotLogin = require('../middlewares/check.js').checkNotLogin;

exports.getSignin = async ctx => {
  await checkNotLogin(ctx);
  await ctx.render('signin', {
    session: ctx.session
  });
}

exports.postSignin = async ctx => {
   console.log(ctx.request.body);
  //  "name=ysw&password=123456"
  let { name, password } = ctx.request.body;
  await userModel.findDataByName(name)
  .then(result => {
    let res = result;
    if (res.length && name === res[0]['name'] && md5(password) === res[0]['pass']) {
      ctx.session = {
        user: res[0]['name'],
        id: res[0]['id']
      }

      ctx.body = {
        code: 200,
        message: '登录成功'
      }
      console.log(ctx.session.id);
      console.log(ctx.session);
      console.log('登录成功');
    } else {
      ctx.body = {
        code: 500,
        message: '用户名或密码错误'
      }
      console.log('用户名或密码错误');
    }
  })
}