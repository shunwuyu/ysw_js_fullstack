exports.getRedirectPosts = async ctx => {
  ctx.redirect('/posts');
}

exports.getPosts = async ctx => {
  ctx.body = 'getPosts'
}