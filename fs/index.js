const fs = require('fs');

/*
* fs.open(path, flags [mode], callback)
*   path: 要打开文件的路径
*   flags: 打开文件的方式 读/写
*   mode: 设置文件模式（文件权限： 读(4)  写(2)  执行(1)）
*   callback: 回调函数，文件打开后调用
*     error: 文件打开失败的错误信息，如果成功error为null
*     fd: 打开文件的标识，和定时器的句柄很像
* */

// 异步（默认）
fs.open('../file.txt', 'r', function(error, fd) {
  console.log(error);
  console.log(fd);
});

// 同步（阻塞）  fd: fd/error
const fd = fs.openSync('../file.txt', 'r');
