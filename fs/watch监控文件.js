const fs = require('fs');
const filedir = './file';
const path = require('path');
fs.watch(filedir, (ev, file) =>{
  // file就是变化的文件
   const result = [];
   let content = '';
   fs.readdir(filedir, (er, fileList)=> {
      fileList.forEach(f=> {
        var info = fs.statSync(path.join(filedir, f));
        if (info.mode == 33188) {
          result.push(path.join(filedir, f));
        }
      });
      console.log(result);
      result.forEach(file=> {
        content += (fs.readFileSync(file)).toString() + '\n';
      });
      fs.writeFileSync('./build/merge.js', content);
   })
})