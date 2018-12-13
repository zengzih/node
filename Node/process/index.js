/*
* process是一个全局对象
*
* */

// console.log(process); // global.process

// 默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
/*process.stdin.resume();

// 用于监听用户的输入数据
process.stdin.on('data', function(datas) {
  console.log('---用户输入了----:' + datas);
});*/

// 实现登录
let username = '';
let users={
  "admin":"123",
  "user1":"321",
  "user2":"213"
};
process.stdout.write('请输入用户名');
process.stdin.on('data', input=> {
  input = input.toString().trim();
  if (!username) {
    if (Object.keys(users).indexOf(input) == -1) {
      process.stdout.write('用户名不存在'+ '\n');
      process.stdout.write('请输入用户名:');
      username = '';
    } else {
      process.stdout.write('请输入密码：');
      username = input;
    }
  } else {
    if (input == users[username]) {
      console.log('-----登录成功----');
    } else {
      process.stdout.write('请输入密码' + '\n')
    }
  }
})
