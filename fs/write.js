/*const fs = require('fs');
fs.open('test.txt', 'r+', function(err, fd) {
  /!*
  * fs.write(fd, buffer, offset, length, position, callback)
  * fd: 打开的文件
  * buffer: 要写入的数据
  * *!/
  if(!err) {
    const bf = new Buffer('12300');
    // 从0读取到4结束，读取buffer里面的内容，并将内容填充到test.txt中，从0开始填充
    fs.write(fd, bf, 0, 4, 0, function() {
      console.log(arguments);
    })
  } else {
    console.log(err);
  }
});*/

// 第二种写数据的方式
const fs = require('fs');
fs.open('test.txt', 'r+', function(err, fd) {
  if(!err) {
    // 从0读取到4结束，读取buffer里面的内容，并将内容填充到test.txt中，从0开始填充
    fs.write(fd, '112300', 0, 'utf-8')

    // 关闭
    fs.close(fd, (error ,fd)=> {
    })
  } else {
    console.log(err);
  }
});
