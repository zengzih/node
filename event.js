let events = require('events');
// 创建EventEmitter对象
let eventEmitter = new events.EventEmitter();

// 创建事件处理程序
let eventHandler = () => {
    console.log('----链接成功------');

    //触发data_received事件
    eventEmitter.emit('data_received');
}

// 绑定connection事件程序
eventEmitter.on('connection', eventHandler);

eventEmitter.on('data_received', () => {
    console.log('-----数据接收成功------');
})

eventEmitter.emit('connection');

console.log('--------程序执行完毕----------');