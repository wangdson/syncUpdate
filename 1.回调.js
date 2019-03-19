// 所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数

const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve(__dirname, '1.txt'),'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});

let oldObj = {
  a:1,
  b:2,
  c:false
}

let obj1 = Object.assign(oldObj,{b:3});
let obj2 = Object.assign({},oldObj,{b:3})

console.log(obj1,obj2,obj1===obj2);



// 回调问题
// 异常处理
/*
回调地狱
let fs = require('fs');
fs.readFile('template.txt','utf8',function(err,template){
fs.readFile('data.txt','utf8',function(err,data){
  console.log(template+' '+data);
})
})



*/