// es6 模块化语法 module  
// js 变量或常量， 它的类型由值决定
// var a = 1;
// a = "str"
// const  b = 123;
const testDrive = () => {
  // 用办置的来自微信的api了
  // 原生的api 大部的小程序是html5
  //  webview nativeview
  //  wx 
  // 性能上比原生的慢一些， 
  wx.showToast({
    title: '暂不支持'
  })
}
export default testDrive