const path = require('path');
const express = require('express');
const session = require('express-session');
// session 存储放在内存, mongodb 放在数据库
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const config = require('config-lite')(__dirname)
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 静态服务器
// public/ 
// 分布式的， 不只一台服务器，
app.use(express.static(path.join(__dirname, 'public')));




app.listen(config.port, () => {
  console.log(`listen on port ${config.port}`);
});