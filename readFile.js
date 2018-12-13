let fs = require('fs');
let filePath = 'file.txt';
const data = fs.readFile(filePath, function(error, data) {
    if (error) {
        console.log(error);
        return;
    }
    callbackFn(data)
});
console.log('----------文件读取完毕----------');

function callbackFn(data) {
    console.log(data.toString());
    fs.writeFile('createFile.txt', data.toString(), (error) => {
        if (error) {
            return console.log(err);
        }
        console.log("文件创建完毕");
    })
}


