const http = require('http');
const fs = require('fs');
// 创建一个web 服务器
const server = http.createServer((req, res) => {
  // 怎么得到index.html? 
  if (req.url == '/') {
    // http 响应头
    const indexFile = fs.createReadStream('./index.html');
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf8'
    })
    indexFile.pipe(res)
  } else if (req. url == '/info') {
    // api 后端
    const info = {
      "name": "曾凯",
      "desc": "身骑白马"
    };
    // 200 http 状态码， content-type 文件格式 返回结浏览器
    // 如何去解析这一次的请求的到达 
    res.writeHead(
      200, {
        'Content-Type': 'text/plain;charset=utf8'
      }
    )
    res.end(JSON.stringify(info));
  }
  // res.end('hello world, 你要的反正不是首页');
})

server.listen(8081);