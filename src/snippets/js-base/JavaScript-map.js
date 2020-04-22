module.exports = {
  "myMap.clear();": {
    "prefix": "mapclear",
    "body": [
      "${1:map}.clear()"
    ],
    "description": "clear()方法会移除Map对象中的所有元素。\nmyMap.clear();"
  },
  "myMap.delete(key);": {
    "prefix": "mapdelete",
    "body": [
      "${1:map}.delete(${2})"
    ],
    "description": "delete() 方法用于移除 Map 对象中指定的元素。\nmyMap.delete(key);"
  },
  "myMap.entries()": {
    "prefix": "mapentries",
    "body": [
      "${1:map}.entries()"
    ],
    "description": "entries() 方法返回一个新的包含 [key, value] 对的 Iterator 对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同。\nmyMap.entries()"
  },
  "myMap.forEach(callback[, thisArg])": {
    "prefix": "mapforeach",
    "body": [
      "${1:map}.forEach(${2})"
    ],
    "description": "forEach() 方法将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数。\nmyMap.forEach(callback[, thisArg])"
  },
  "myMap.get(key);": {
    "prefix": "mapget",
    "body": [
      "${1:map}.get(${2})"
    ],
    "description": "get() 方法返回某个 Map 对象中的一个指定元素。\nmyMap.get(key);"
  },
  "myMap.has(key);": {
    "prefix": "maphas",
    "body": [
      "${1:map}.has(${2})"
    ],
    "description": "方法has() 返回一个bool值，用来表明map 中是否存在指定元素.\nmyMap.has(key);"
  },
  "myMap.keys()": {
    "prefix": "mapkeys",
    "body": [
      "${1:map}.keys()"
    ],
    "description": "keys() 返回一个新的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的key值。\nmyMap.keys()"
  },
  "myMap.set(key, value);": {
    "prefix": "mapset",
    "body": [
      "${1:map}.set(${2})"
    ],
    "description": "\nmyMap.set(key, value);"
  },
  "myMap.values()": {
    "prefix": "mapvalues",
    "body": [
      "${1:map}.values()"
    ],
    "description": "一个新的 Map 可迭代对象.\nmyMap.values()"
  }
}