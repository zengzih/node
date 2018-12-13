const fs = require('fs');

fs.open('../file.txt', 'r', (error, fd)=> {
  if (error) {
    console.log('文件打开失败')
  } else {
    /*
    * 读取文件
    * fs.read(fd, buffer, offset, length, position, callback)
    * fd: 通过open方法成功打开一个文件返回的编号
    * buffer: buffer对象
    * offset: 偏移量(将读取到的内容填充到buffer内，从第几位开始)
    * position: 从文件里面的第几位开始读取，值可以为null
    * */
    const bf = new Buffer(10);
    /*
    * bfLength: 读取的文件的长度
    * buffer: buffer对象，和bf一样
    * */
    // 默认异步，有同步方法，和openSync同理
    fs.read(fd, bf, 0, null, null, function(erorr, bfLength, buffer) {
      console.log(bf);
    });
  }
})