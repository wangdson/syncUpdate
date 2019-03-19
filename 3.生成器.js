/*
当你在执行一个函数的时候，你可以在某个点暂停函数的执行，并且做一些其他工作，
然后再返回这个函数继续执行， 甚至是携带一些新的值，然后继续执行。

需要手动执行next 方法 

*/

function* foo () {
    var index = 0;
    while (index < 2) {
      yield index++; //暂停函数执行，并执行yield后的操作
    }
  }
  var bar =  foo(); // 返回的其实是一个迭代器
  
  console.log(bar.next());    // { value: 0, done: false }
  console.log(bar.next());    // { value: 1, done: false }
  console.log(bar.next());    // { value: undefined, done: true }




//  co是一个为Node.js和浏览器打造的基于生成器的流程控制工具，借助于Promise，你可以使用更加优雅的方式编写非阻塞代码
let fs = require('fs');
// let co =require('co');
function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, data) {
      if (err)
        reject(err);
      else
        resolve(data);
    })
  })
}
function *read() {
  let template = yield readFile('1.txt');
  let data = yield readFile('2.txt');
  return template + '+' + data;
}
co(read).then(function (data) {
  console.log(data);
}, function (err) {
  console.log(err);
});

function co(gen) {
  let it = gen();
  return new Promise(function (resolve, reject) {
    !function next(lastVal) {
      let {value, done} = it.next(lastVal);
      if (done) {
        resolve(value);
      } else {
        value.then(next, reason => reject(reason));
      }
    }();
  });
}

