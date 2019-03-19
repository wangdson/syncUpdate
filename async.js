// 使用async关键字，你可以轻松地达成之前使用生成器和co函数所做到的工作
/*
内置执行器
更好的语义
更广的适用性

*/

let fs = require('fs');
function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err)
        reject(err);
      else
        resolve(data);
    })
  })
}

async function read() {
  let template = await readFile('1.txt');
  let data = await readFile('2.txt');
  return template + '+' + data;
}
let result = read();
result.then(data=>console.log(data));

// async function say(){
//   let result = await read();
//   console.log(result);
// }
// say();


// async 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里

/*
async function read() {
  let template = await readFile('1.txt');
  let data = await readFile('2.txt');
  return template + '+' + data;
}

// 等同于
function read(){
  return co(function*() {
    let template = yield readFile('1..txt');
    let data = yield readFile('2.txt');
    return template + '+' + data;
  });
}


*/