module.exports = {
  "ws.add(value);": {
    "prefix": "weaadd",
    "body": [
      "${1:weakset}.add(${2})"
    ],
    "description": "add() 方法在 WeakSet 对象的最后一个元素后添加新的对象。\nws.add(value);"
  },
  "ws.delete(value);": {
    "prefix": "weadelete",
    "body": [
      "${1:weakset}.delete(${2})"
    ],
    "description": "delete() 方法从 WeakSet 对象中移除指定的元素。\nws.delete(value);"
  },
  "ws.has(value);": {
    "prefix": "weahas",
    "body": [
      "${1:weakset}.has(${2})"
    ],
    "description": "has() 方法根据 WeakSet 是否存在相应对象返回布尔值。\nws.has(value);"
  }
}