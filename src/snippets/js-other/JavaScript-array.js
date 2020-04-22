module.exports = {
  "arr.forEach(callback(currentValue [, index [, array]])[, thisArg])": {
    "prefix": "arrforeach",
    "body": [
      "${1:array}.forEach((value,index)=>{${2}})"
    ],
    "description": "forEach() 方法对数组的每个元素执行一次给定的函数。\narr.forEach(callback(currentValue [, index [, array]])[, thisArg])"
  }
}