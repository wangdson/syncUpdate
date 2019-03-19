function gen(length, resolve) {
  let count = 0;
  let values = [];
  return function(i, value) {
      values[i] = value;
      if (++count === length) {
          console.log(values);
          resolve(values);
      }
  }
}

var done = gen(3,(data)=>{
  console.log(data);
})

done(0,1);
done(1,2);
done(2,3);