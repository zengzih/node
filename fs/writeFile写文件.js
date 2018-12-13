const fs = require('fs');
/*
* fs.writeFile(filename, data, [options], callback)
*  异步的将数据写入一个文件，如果文件不存在则新建文件，如果原先文件存在，会被替换，
*  data可以是一个string，也可以是一个原生的buffer
*
*  fs.writeFileSync(filename, data, [options]) // 同步 没有callback
*
*  fs.appendFile(filename, data, [options], callback)
*  异步的将数据添加到一个文件的尾部，如果文件不存在，会创建一个新的文件，
*  data可以是一个string，也可以是原生的buffer
*
*  fs.appendFileSync(filename, data, [options]) // 同步 无callback
* */
/*

// 将 helloggggggg 写入到 appendFile.txt，会覆盖原本的内容
var filename = 'appendFile.txt';
fs.writeFile(filename, 'helloggggggg', function() {
  console.log(arguments);
});

// 将 appendFile 追加到 appendFile.txt 末尾
fs.appendFile(filename, 'appendFile', function() {
  console.log(arguments);
});*/


/*// 判断文件是否存在
const filename = 'appendFile.txt';
fs.exists(__filename, function(isExists) { // isExists: bool
  if (isExists) {
    // 将 appendFile 追加到 appendFile.txt 末尾
    fs.appendFile(filename, 'appendFile', function(err) {
      if (err) {
        console.log('出错了');
      } else {
        console.log('创建新文件成功')
      }
    });
  } else {
    // 将 helloggggggg 写入到 appendFile.txt，会覆盖原本的内容
    fs.writeFile(filename, 'helloggggggg', function(err) {
      if (err) {
        console.log('新的内容追加失败');
      } else {
        console.log('新内容追加成功');
      }
    });
  }
});*/




// 同步模式
const filename = 'file/appendFileSync.txt';
console.log(fs.writeFileSync(filename, '添加内容'));
if (!fs.existsSync(filename)) {
  fs.writeFileSync(filename, '添加内容')
} else {
  fs.appendFileSync(filename, '追加内容')
}

