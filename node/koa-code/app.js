const Koa = require('./lib/application');
const app = new Koa();
app.use((ctx) => {
  ctx.body = 'hello world';
})
// app.on('error', this.onerror);
app.listen(1234);