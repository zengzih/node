const fs = require('fs');
const path = require('path');
const filePath = path.resolve('./file');

/*function getFilePath(filePath) {
  fs.readdir(filePath, (err, files)=> {
    if (err) {
      console.log(err);
    } else {
      files.forEach(file=> {
        const fileDir = path.join(filePath, file);
        fs.stat(fileDir, (err, stats)=> {
          console.dir(stats);
          if (err) {
            console.log('获取文件'+stats+'失败');
          } else {
            const isFile = stats.isFile(); // 是文件
            const isDir = stats.isDirectory(); // 是文件夹
            if (isFile) {
              console.log(fileDir)
            }
            if (isDir) {
              getFilePath(fileDir); // 递归，如果是文件，就继续遍历改文件夹下的文件
            }
          }
        })
      })
    }
  })
}
getFilePath(filePath);*/

const result = [];
function getFilePath(filePath) {
  fs.readdir(filePath, (err, files)=> {
    files.forEach(file=> {
      const fileDir = path.join(filePath, file);
      fs.stat(fileDir, (err, info)=> {
        if(!err) {
          if (info.isFile()) {
            result.push(fileDir);
          }
          if (info.isDirectory()) {
            getFilePath(fileDir);
          }
        }
      })
    })
    console.log(result);
  })
}
getFilePath(filePath);

