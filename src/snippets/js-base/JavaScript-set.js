module.exports = {
  "mySet.add(value);": {
    "prefix": "setadd",
    "body": [
      "${1:set}.add(${2})"
    ],
    "description": "add() 方法用来向一个 Set 对象的末尾添加一个指定的值。\nmySet.add(value);"
  },
  "mySet.clear();": {
    "prefix": "setclear",
    "body": [
      "${1:set}.clear()"
    ],
    "description": "clear() 方法用来清空一个 Set 对象中的所有元素。\nmySet.clear();"
  },
  "mySet.delete(value);": {
    "prefix": "setdelete",
    "body": [
      "${1:set}.delete(${2})"
    ],
    "description": "delete() 方法可以从一个 Set 对象中删除指定的元素。\nmySet.delete(value);"
  },
  "mySet.entries()": {
    "prefix": "setentries",
    "body": [
      "${1:set}.entries()"
    ],
    "description": "entries() 方法返回一个新的迭代器对象 ，这个对象的元素是类似 [value, value] 形式的数组，value 是集合对象中的每个元素，迭代器对象元素的顺序即集合对象中元素插入的顺序。由于集合对象不像 Map 对象那样拥有 key，然而，为了与 Map 对象的 API 形式保持一致，故使得每一个 entry 的 key 和 value 都拥有相同的值，因而最终返回一个 [value, value] 形式的数组。\nmySet.entries()"
  },
  "mySet.forEach(callback[, thisArg])": {
    "prefix": "setforeach",
    "body": [
      "${1:set}.forEach(${2})"
    ],
    "description": "forEach 方法会根据集合中元素的插入顺序，依次执行提供的回调函数。\nmySet.forEach(callback[, thisArg])"
  },
  "mySet.has(value);": {
    "prefix": "sethas",
    "body": [
      "${1:set}.has(${2})"
    ],
    "description": "has() 方法返回一个布尔值来指示对应的值value是否存在Set对象中。\nmySet.has(value);"
  },
  "mySet.values();": {
    "prefix": "setvalues",
    "body": [
      "${1:set}.values()"
    ],
    "description": "values() 方法返回一个 Iterator  对象，该对象按照原Set 对象元素的插入顺序返回其所有元素。\nmySet.values();"
  }
}