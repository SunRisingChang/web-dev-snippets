module.exports = {
  "func.apply(thisArg, [argsArray])": {
    "prefix": "funapply",
    "body": [
      "${1:function}.apply(${2})"
    ],
    "description": "apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。\nfunc.apply(thisArg, [argsArray])"
  },
  "function.bind(thisArg[, arg1[, arg2[, ...]]])": {
    "prefix": "funbind",
    "body": [
      "${1:function}.bind(${2})"
    ],
    "description": "bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。\nfunction.bind(thisArg[, arg1[, arg2[, ...]]])"
  },
  "function.call(thisArg, arg1, arg2, ...)": {
    "prefix": "funcall",
    "body": [
      "${1:function}.call(${2})"
    ],
    "description": "call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。\nfunction.call(thisArg, arg1, arg2, ...)"
  },
  "function.toString()": {
    "prefix": "funtostring",
    "body": [
      "${1:function}.toString()"
    ],
    "description": "toString() 方法返回一个表示当前函数源代码的字符串。\nfunction.toString()"
  }
}