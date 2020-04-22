module.exports = {
  "ArrayBuffer.isView(value)": {
    "prefix": "arrisview",
    "body": [
      "ArrayBuffer.isView(${2})"
    ],
    "description": "ArrayBuffer.isView() 方法用来判断传入的参数值是否是一种 ArrayBuffer 视图（view），比如类型化数组对象（typed array objects）或者数据视图（ DataView）。\nArrayBuffer.isView(value)"
  },
  "arraybuffer.slice(begin[, end])": {
    "prefix": "arrslice",
    "body": [
      "${1:arraybuffer}.slice(${2})"
    ],
    "description": "slice()方法返回一个新的 ArrayBuffer ，它的内容是这个ArrayBuffer的字节副本，从begin（包括），到end（不包括）。\narraybuffer.slice(begin[, end])"
  }
}