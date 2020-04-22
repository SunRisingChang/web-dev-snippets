module.exports = {
  "Promise.all(iterable);": {
    "prefix": "proall",
    "body": [
      "Promise.all(${2})"
    ],
    "description": "Promise.all(iterable) 方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败 promise 的结果。\nPromise.all(iterable);"
  },
  "p.catch(onRejected);\n\np.catch(function(reason) {\n   // 拒绝\n});": {
    "prefix": "procatch",
    "body": [
      "${1:promise}.catch(${2})"
    ],
    "description": "catch() 方法返回一个Promise，并且处理拒绝的情况。它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。 (事实上, calling obj.catch(onRejected) 内部calls obj.then(undefined, onRejected)).\np.catch(onRejected);\n\np.catch(function(reason) {\n   // 拒绝\n});"
  },
  "p.finally(onFinally);\n\np.finally(function() {\n   // 返回状态为(resolved 或 rejected)\n});": {
    "prefix": "profinally",
    "body": [
      "${1:promise}.finally(${2})"
    ],
    "description": "返回一个设置了 finally 回调函数的Promise对象。\np.finally(onFinally);\n\np.finally(function() {\n   // 返回状态为(resolved 或 rejected)\n});"
  },
  "p.then(onFulfilled[, onRejected]);\n\np.then(value => {\n  // fulfillment\n}, reason => {\n  // rejection\n});": {
    "prefix": "prothen",
    "body": [
      "${1:promise}.then(${2})"
    ],
    "description": "then() 方法返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。\np.then(onFulfilled[, onRejected]);\n\np.then(value => {\n  // fulfillment\n}, reason => {\n  // rejection\n});"
  },
  "Promise.race(iterable);": {
    "prefix": "prorace",
    "body": [
      "Promise.race(${2})"
    ],
    "description": "Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。\nPromise.race(iterable);"
  },
  "Promise.reject(reason);": {
    "prefix": "proreject",
    "body": [
      "Promise.reject(${2})"
    ],
    "description": "Promise.reject()方法返回一个带有拒绝原因的Promise对象。\nPromise.reject(reason);"
  },
  "Promise.resolve(value);": {
    "prefix": "proresolve",
    "body": [
      "Promise.resolve(${2})"
    ],
    "description": "The source for this interactive demo is stored in a GitHub repository. If you'd like to contribute to the interactive demo project, please clone https://github.com/mdn/interactive-examples and send us a pull request.\nPromise.resolve(value);"
  }
}