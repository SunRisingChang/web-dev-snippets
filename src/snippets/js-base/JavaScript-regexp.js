module.exports = {
  "regexObj.exec(str)": {
    "prefix": "regexec",
    "body": [
      "${1:regexp}.exec(${2})"
    ],
    "description": "exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。\nregexObj.exec(str)"
  },
  "regexObj.test(str)": {
    "prefix": "regtest",
    "body": [
      "${1:regexp}.test(${2})"
    ],
    "description": "test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。\nregexObj.test(str)"
  },
  "regexObj.toString()": {
    "prefix": "regtostring",
    "body": [
      "${1:regexp}.toString()"
    ],
    "description": "toString() 返回一个表示该正则表达式的字符串。\nregexObj.toString()"
  }
}