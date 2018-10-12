let arr = [2, 3, 1, 4, 6];

function mergeSort(arr) {
  return main(arr);
  function main(arr) {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(main(left), main(right));
  }
  function merge(left, right) {
    console.log(left, right);
    // 最简单 两数相比，swap 
    // 四个数 [排好序的左边]  [排好序的右边]
    // 八个数 i  j 两个计数器
    // a[i]  b[j]
    // c[a[i]-b[j] >= 0?b[j++]: a[i++]]
    // i, j 各自数组的边界 
    let il = rl = 0,
      result = [];
    while(il < left.length && rl < right.length) {
      if (left[il] < right[rl]) {
        result.push(left[il++]);
      } else {
        result.push(right[rl++]);
      }
    }
    
    return result.concat(left.slice(il)).concat(right.slice(rl));
  }
}

arr = mergeSort(arr);
console.log(arr);

let result = 0;
for(let i = 1; i < arr.length; i++) {
  let diff = arr[i] - arr[i-1];
  if (result < diff) {
    result = diff;
  }
} 
console.log(result);