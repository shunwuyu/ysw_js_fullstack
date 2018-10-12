const router = require('koa-router')();
const controller = require('../controller/c-posts');
router.get('/', controller.getRedirectPosts);
router.get('/posts', controller.getPosts);
router.get('/create', controller.getCreate);
router.post('/create', controller.postCreate);
module.exports = router