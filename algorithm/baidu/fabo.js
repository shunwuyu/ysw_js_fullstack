// 1,1,2,3,5,8,13,21,34,55,89  

// f(n) = f(n-1) + f(n-2)

// 递归的次数， 吓死人， 通过for 或while 来代替递归
// 递归使用时， 注意优化

// let count = 0;

// function fabo(n) {
//   count++;
//   if (n == 1 || n == 2) {
//     return 1;
//   }
//   return fabo(n - 1) + fabo(n - 2);
// }

// console.log(fabo(20), count);

let count = 0;

function fn(n) {
  let cache = {};
  function _fn(n) {
    if (cache[n]) {
      return cache[n];
    }
    count++;
    if (n == 1 || n == 2) {
      return 1;
    }

    let prev = _fn(n-1);
    cache[n - 1] = prev;
    let next = _fn(n-2);
    cache[n - 2] = next;
    return prev + next;
  }
  return _fn(n);
}

console.log(fn(20), count);