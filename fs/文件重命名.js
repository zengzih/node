// 文件的重命名
const fs = require('fs');
const filename = './file/test.txt';
const newFileName = './file/newTest.txt';
/*
if (fs.existsSync(filename)) {
  fs.rename(filename, newFileName, function(error) {
    console.log(error);
  })
} else {
  fs.writeFile(filename, '取消绑定元素的事件处理程序和函数\n' +
    '规定从指定元素上删除的一个或多个事件处理程序。\n' +
    '\n' +
    '如果没有规定参数，unbind() 方法会删除指定元素的所有事件处理程序。', function(err) {
      console.log(err);
  })
}

// 查看文件的状态
fs.stat(newFileName, function() {
  console.log(arguments);
});
*/

fs.appendFileSync(newFileName, 'xxxx');

fs.watch(newFileName, function(event, eventName) {
})

