// 订阅事件实现了一个事件与多个回调函数的关联

let fs = require('fs');
let EventEmitter = require('events');
let eve = new EventEmitter();
let html = {};
eve.on('ready',function(key,value){
  html[key] = value;
  if(Object.keys(html).length==2){
    console.log(html);
  }
});
function render(){
  fs.readFile('1.txt','utf8',function(err,template){
    eve.emit('ready','template',template);
  })
  fs.readFile('2.txt','utf8',function(err,data){
    eve.emit('ready','data',data);
  })
}
render();