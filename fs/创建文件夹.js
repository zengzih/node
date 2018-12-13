const fs = require('fs');

/*// 创建文件夹
fs.mkdir('./mkdir2', function() {
});

// 删除文件夹
fs.rmdir('./mkdir2', function() {
});*/

function filePath() {
  fs.readdir('./file',(error, fileList)=> {
    fileList.forEach(file=> {
      fs.stat('./file' + file , (err, info)=> {
        switch (info.name) {
          case 33206:
            console.log('文件：' + info.name);
            break;
          case 16822:
            filePath();
        }
      })
    })
  })
}

fs.readdir('./file', (error, fileList)=> {
  fileList.forEach((file)=> {
    fs.stat('./file/' + file, (err, info)=> {
      switch (info.mode) {
        case 33188:
          console.log('文件');
          break;
        case 16877:
          console.log('文件夹:' + JSON.stringify(info));
          break;
      }
    })
  })
});