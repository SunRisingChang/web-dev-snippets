module.exports = {
  "e.toString();": {
    "prefix": "inttostring",
    "body": [
      "${1:internalerror}.toString()"
    ],
    "description": "toString() 方法返回一个指定的错误对象（Error object）的字符串表示。\ne.toString();"
  }
}