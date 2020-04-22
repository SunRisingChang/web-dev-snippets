module.exports = {
  "sab.slice()\nsab.slice(begin)\nsab.slice(begin, end)": {
    "prefix": "shaslice",
    "body": [
      "${1:sharedarraybuffer}.slice(${2})"
    ],
    "description": "SharedArrayBuffer.prototype.slice() 方法返回一个新的SharedArrayBuffer 副本，其内容是该SharedArrayBuffer的字节从begin开始(包含begin)，直到end结束(不包含end)。如果begin或end是负的，它指的是从数组末尾开始的索引。此方法与 Array.prototype.slice() 具有相同的算法。\nsab.slice()\nsab.slice(begin)\nsab.slice(begin, end)"
  }
}