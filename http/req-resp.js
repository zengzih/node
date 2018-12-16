const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const rootPath = path.resolve(__dirname, '../');
console.log(rootPath);
const server = http.createServer();

const getResponseContent = (type)=> {
  return fs.readFileSync(path.join(rootPath, '/page/' + type + '.html')).toString();
};

server.on('request', (request, response)=> {
  const reqUrl = url.parse(request.url);
  let content = '';
  switch (reqUrl.pathname) {
    case '/user':
      content = getResponseContent('user');
      break;
    case '/index':
      content = getResponseContent('index');
      break;
    default:
      content = getResponseContent('other');
      break;
  }
  const json = {
    success: 'true',
    msg: '成功',
    data: [
      { name: 'shz', age: 10 },
      { name: 'sg', age: 30 },
      { name: 'wer', age: 50 }
    ]
  };
  response.writeHead(200, '', {
    'content-type': 'application/json'
  });
  response.write('success_jsonpCallback(' + JSON.stringify(json) + ')');
});

server.listen(8088, 'localhost');