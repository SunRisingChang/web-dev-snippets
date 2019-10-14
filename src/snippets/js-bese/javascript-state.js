module.exports = {
  "export module": {
    prefix: "modex",
    body: "module.exports = ${1:name};",
    description: "[Nodejs]模块暴露接口"
  },
  "new Promise": {
    prefix: "newprom",
    body: ["new Promise((resolve, reject)=> {", "\t$1", "});$0"],
    description:
      "对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 Promise 这个名字的由来，它的英语意思就是「承诺」，表示其他手段无法改变。"
  },
  "CommonJS require": {
    prefix: "require",
    body: "const ${1:module} = require('${1:module}');",
    description: "导入文件到对象"
  },
  Class: {
    prefix: "class",
    body: [
      "class ${1:ClassName} {",
      "\tconstructor($2) {",
      "\t\t$3",
      "\t}",
      "}"
    ],
    description: "创建Class类对象"
  },
  "export function": {
    prefix: "expfun",
    body: [
      "exports.${1:functionName} = function ($2) {",
      "\t${3:// body...}",
      "};"
    ],
    description: "[ES6]对外接口"
  },
  "class constructor (ES6)": {
    prefix: "constructor",
    body: "constructor(${1:arguments}) {\n\tsuper(${1:arguments});${0}\n}",
    description: "[ES6]Class构造函数"
  },
  "export default (ES6)": {
    prefix: "expd",
    body: "export default ${1:member};",
    description: "[ES6]对外接口"
  }
};
