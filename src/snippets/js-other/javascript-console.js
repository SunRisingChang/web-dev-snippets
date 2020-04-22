module.exports = {
  "console.assert()": {
    prefix: "assert",
    body:
      "console.assert(${1:assertion}, ${2:obj1|msg [, obj2|subst1, ..., objN|substN]})",
    description:
      "assertion : 一个布尔表达式。如果assertion为假，消息将会被输出到控制台之中。\r\n obj1 ... objN : 被用来输出的Javascript对象列表，最后输出的字符串是各个对象依次拼接的结果。\r\n msg : 一个包含零个或多个子串的Javascript字符串。\r\n subst1 ... substN : 各个消息作为字串的Javascript对象。这个参数可以让你能够控制输出的格式。"
  },
  "console.log()": {
    prefix: "log",
    body: "console.log($1);$0",
    description: "向 Web 控制台输出一条消息"
  },
  "console.warn()": {
    prefix: "warn",
    body: "console.warn($1);$0",
    description: "向控制台输出警告信息"
  },
  "console.error()": {
    prefix: "error",
    body: "console.error($1);$0",
    description: "向控制台输出错误信息"
  }
};
