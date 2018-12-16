const http = require('http');

const server = http.createServer();

server.on('error', (error)=> {
  console.log(error);
});

server.on('listening', (msg)=> {
  console.log('---listening---');
});

server.on('request', (req, res)=> {
  res.setHeader('miaov', 'leo'); // 设置头部信息header
  res.writeHead(200, 'miaov', {
    'content-type': 'text/plain;charset=utf-8' // 设置输出的header，内容类型为 文本
  }); // 设置输出的header
  res.write('<h2>HELLO</h2> ');
  res.end();
})

server.listen(3000, 'localhost');