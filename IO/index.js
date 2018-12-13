let username = '';
let userInfo = {
  admin: '123',
};

process.stdout.write('输入用户名');

process.stdin.on('data',(datas)=> {
  const data = datas.toString().trim();
  if (!username) {
    if (Object.keys(userInfo).indexOf(data) == -1) {
      process.stdout.write('用户名有误，请输入用户名');
      username = '';
    } else {
      username = data;
      process.stdout.write('请输入密码:')
    }
  } else {
    if (userInfo[username] !== data) {
      process.stdout.write('密码有误');
    } else {
      process.stdout.write('登陆成功');
    }
  }
})