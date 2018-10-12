const checkLogin = require('../middlewares/check.js').checkLogin;
const userModel = require('../lib/mysql.js');
const moment = require('moment');
exports.getRedirectPosts = async ctx => {
  ctx.redirect('/posts');
}

exports.getPosts = async ctx => {
  ctx.body = 'getPosts'
}

exports.getCreate = async ctx => {
  // await checkLogin(ctx);
  await ctx.render('create', {
    session: ctx.session
  })
}

exports.postCreate = async ctx => {
  let { title, content } = ctx.request.body,
  id = ctx.session.id,
  name = ctx.session.user,
  time = moment().format('YYYY-MM-DD HH:mm:ss'),
  avatar;
  // 1. 用户 session  user avatar 
  // 2. insertPost 
  await userModel.findUserData(ctx.session.user)
  .then(res => {
    avatar = res[0]['avatar'];
  })
  console.log([name, title, content, content, id, time, avatar]);
  console.log('------------------------');
  await userModel.insertPost([name, title, content, content, id, time, avatar])
  .then(() => {
    ctx.body = {
      code: 200,
      message: '发表文章成功'
    }
  }).catch(() => {
    ctx.body={
      code: 500,
      message: '发表文章失败'
    }
  })
}