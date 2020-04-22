module.exports = {
  "bool.toString()": {
    "prefix": "bootostring",
    "body": [
      "${1:boolean}.toString()"
    ],
    "description": "toString() 方法返回指定的布尔对象的字符串形式。\nbool.toString()"
  },
  "bool.valueOf()": {
    "prefix": "boovalueof",
    "body": [
      "${1:boolean}.valueOf()"
    ],
    "description": "valueOf() 方法返回一个Boolean对象的原始值。\nbool.valueOf()"
  }
}