module.exports = {
  "wm.delete(key);": {
    "prefix": "weadelete",
    "body": [
      "${1:weakmap}.delete(${2})"
    ],
    "description": "delete() 方法可以从一个 WeakMap 对象中删除指定的元素。\nwm.delete(key);"
  },
  "wm.get(key);": {
    "prefix": "weaget",
    "body": [
      "${1:weakmap}.get(${2})"
    ],
    "description": "get() 方法返回  WeakMap 指定的元素。\nwm.get(key);"
  },
  "wm.has(key);": {
    "prefix": "weahas",
    "body": [
      "${1:weakmap}.has(${2})"
    ],
    "description": "has() 方法根据WeakMap对象的元素中是否存在key键返回一个boolean值。\nwm.has(key);"
  },
  "wm.set(key, value);": {
    "prefix": "weaset",
    "body": [
      "${1:weakmap}.set(${2})"
    ],
    "description": "set() 方法根据指定的key和value在 WeakMap对象中添加新/更新元素。\nwm.set(key, value);"
  }
}