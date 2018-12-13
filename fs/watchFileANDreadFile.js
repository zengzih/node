// 使用watch来监控文件的改变
// 文件的读取
const fs = require('fs');
const filename = './file/test.txt';
fs.readFile('', function(err, data) {
  if (err) {
    console.log('文件读取失败');
  } else {
    console.log(data.toString());
  }
});

// 删除文件
fs.unlink(filename, function(err) {
  if (err) {
    console.log('删除失败');
  } else {
    console.log('删除成功');
  }
});
