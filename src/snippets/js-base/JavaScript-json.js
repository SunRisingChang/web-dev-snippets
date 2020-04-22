module.exports = {
  "JSON.parse(text[, reviver])": {
    "prefix": "jsoparse",
    "body": [
      "JSON.parse(${2})"
    ],
    "description": "JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)。\nJSON.parse(text[, reviver])"
  },
  "JSON.stringify(value[, replacer [, space]])": {
    "prefix": "jsostringify",
    "body": [
      "JSON.stringify(${2})"
    ],
    "description": "JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串，如果指定了 replacer 是一个函数，则可以选择性地替换值，或者如果指定了 replacer 是一个数组，则可选择性地仅包含数组指定的属性。\nJSON.stringify(value[, replacer [, space]])"
  }
}