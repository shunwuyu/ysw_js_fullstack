// function binary_search(arr) {
//   var low = 0,
//     high = arr.length - 1;
  
//   while(low < high) {
//     var mid = parseInt((hight + low) / 2);
//     if (key == arr[mid]) {
//       return mid;
//     } else if (key > arr[mid]) {
//       low = mid + 1;
//     } else if (key < arr[mid]) {
//       high = mid - 1;
//     } else {
//       return -1;
//     }
//   }
// }
// var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
// var result = binary_search(arr, 10);
// console.log(result);

// 递归版本
function binary_search(arr, low, high, key) {
  if (low > high) {
    return -1;
  }

  var mid = Math.floor((high + low) / 2);
  if (arr[mid] == key) {
    return mid;
  } else if (arr[mid] > key) {
    high = mid - 1;
    return binary_search(arr, low, high, key);
  } else if (arr[mid] < key) {
    low = mid + 1;
    return binary_search(arr, low, high, key);
  }
}
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binary_search(arr, 0 , 13, 10);