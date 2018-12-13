const fs = require('fs');

// 创建文件夹
fs.mkdir('./mkdir2', function() {
});

// 删除文件夹
fs.rmdir('./mkdir2', function() {
});

fs.readdir('./file', (error, fileList)=> {
  fileList.forEach((file)=> {
    fs.stat('./file/' + file, (err, info)=> {
      switch (info.mode) {
        case 33206:
          console.log('文件');
          break;
        case 16822:
          console.log('文件夹');
          break;
      }
    })
  })
});