module.exports = {
  "TypedArray.from(source[, mapFn[, thisArg]])": {
    "prefix": "flofrom",
    "body": [
      "TypedArray.from(${2})"
    ],
    "description": "TypedArray.from() 方法 从一个类数组或者可迭代对象中创建一个新类型数组。 这个方法和 Array.from() 类似。\nTypedArray.from(source[, mapFn[, thisArg]])"
  },
  "typedarray.copyWithin(target, start[, end = this.length])": {
    "prefix": "flocopywithin",
    "body": [
      "${1:float64array}.copyWithin(${2})"
    ],
    "description": "copyWithin() 方法将数组中元素的序列复制到以 target 起始的位置。拷贝的副本取自第二个参数（start）和第三个参数 （end）的下标位置。end 参数是可选的，默认为数组长度。该方法与 Array.prototype.copyWithin 的算法相同。 TypedArray 指的是这里的 类型化数组类型 之一。\ntypedarray.copyWithin(target, start[, end = this.length])"
  },
  "arr.entries()": {
    "prefix": "floentries",
    "body": [
      "${1:float64array}.entries()"
    ],
    "description": "The entries()返回新的Array Iterator对象，包含数组每个下标处的键值对。\narr.entries()"
  },
  "typedarray.every(callback[, thisArg])": {
    "prefix": "floevery",
    "body": [
      "${1:float64array}.every(${2})"
    ],
    "description": "every() 方法测试类型化数组的所有元素是否都能够通过由提供函数实现的测试。这个方法的算法与 Array.prototype.every()相同。 TypedArray 是这里的 类型化数组类型 之一。\ntypedarray.every(callback[, thisArg])"
  },
  "typedarray.fill(value[, start = 0[, end = this.length]])": {
    "prefix": "flofill",
    "body": [
      "${1:float64array}.fill(${2})"
    ],
    "description": "fill() 方法将类型化数组中的从起始索引到终止索引内的全部元素。这个方法的算法和 Array.prototype.fill() 相同。 TypedArray 是这里的类型化数组类型之一。\ntypedarray.fill(value[, start = 0[, end = this.length]])"
  },
  "typedarray.filter(callback[, thisArg])": {
    "prefix": "flofilter",
    "body": [
      "${1:float64array}.filter(${2})"
    ],
    "description": "filter()创建新的类型化数组，含有所有通过了测试的元素，测试由提供的函数实现。这个方法的算法和 Array.prototype.filter()相同。 TypedArray 是这里的 类型化数组类型 之一。\ntypedarray.filter(callback[, thisArg])"
  },
  "typedarray.find(callback[, thisArg])": {
    "prefix": "flofind",
    "body": [
      "${1:float64array}.find(${2})"
    ],
    "description": "如果某个元素满足所提供的测试函数，find()方法返回类型化数组中的 值。否则返回undefined 。 TypedArray 是这里的 类型化数组类型 之一。\ntypedarray.find(callback[, thisArg])"
  },
  "typedarray.findIndex(callback[, thisArg])": {
    "prefix": "flofindindex",
    "body": [
      "${1:float64array}.findIndex(${2})"
    ],
    "description": "如果某个元素满足所提供的测试函数，findIndex()方法返回类型化数组中的 下标。否则返回 -1。 TypedArray 是这里的 类型化数组类型 之一。\ntypedarray.findIndex(callback[, thisArg])"
  },
  "typedarray.forEach(callback[, thisArg])": {
    "prefix": "floforeach",
    "body": [
      "${1:float64array}.forEach(${2})"
    ],
    "description": "forEach()方法对类型化数组的每个元素调用提供的函数。 这个方法的算法和 Array.prototype.forEach()相同。 TypedArray 是这里的 类型化数组类型 之一。\ntypedarray.forEach(callback[, thisArg])"
  },
  "typedarray.includes(searchElement[, fromIndex]);": {
    "prefix": "floincludes",
    "body": [
      "${1:float64array}.includes(${2})"
    ],
    "description": "includes()方法判断类型化数组中是否含有特定元素，并相应返回true 或者false ，这个方法的算法和Array.prototype.includes()相同。 TypedArray 是这里的 类型化数组 之一。\ntypedarray.includes(searchElement[, fromIndex]);"
  },
  "typedarray.indexOf(searchElement[, fromIndex = 0])": {
    "prefix": "floindexof",
    "body": [
      "${1:float64array}.indexOf(${2})"
    ],
    "description": "indexOf() 方法返回在类型数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。 方法具有与 Array.prototype.indexOf() 相同的算法。 TypedArray是这里的类型化数组类型之一。\ntypedarray.indexOf(searchElement[, fromIndex = 0])"
  },
  "typedarray.join([separator = ',']);": {
    "prefix": "flojoin",
    "body": [
      "${1:float64array}.join(${2})"
    ],
    "description": "join()方法将数组中所有元素连接为一个字符串。这个方法的算法和Array.prototype.join()相同。 TypedArray 是这里的 类型化数组 之一。\ntypedarray.join([separator = ',']);"
  },
  "arr.keys()": {
    "prefix": "flokeys",
    "body": [
      "${1:float64array}.keys()"
    ],
    "description": "keys()方法返回新的 Array Iterator 对象，包含数组中每个下标的键。\narr.keys()"
  },
  "typedarray.lastIndexOf(searchElement[, fromIndex = typedarray.length])": {
    "prefix": "flolastindexof",
    "body": [
      "${1:float64array}.lastIndexOf(${2})"
    ],
    "description": "lastIndexOf() 方法返回在类型数组中可以找到给定元素的最后一个索引，如果不存在，则返回-1。 方法具有与 Array.prototype.lastIndexOf() 相同的算法。 TypedArray是这里的类型化数组类型之一。\ntypedarray.lastIndexOf(searchElement[, fromIndex = typedarray.length])"
  },
  "typedarray.map(callback[, thisArg])": {
    "prefix": "flomap",
    "body": [
      "${1:float64array}.map(${2})"
    ],
    "description": "map()方法对类型化数组的每个元素调用提供的函数，并使用结果来创建新的类型化数组。 这个方法的算法和 Array.prototype.map()相同。 TypedArray 是这里的 类型化数组类型 之一。\ntypedarray.map(callback[, thisArg])"
  },
  "typedarray.reduce(callback[, initialValue])": {
    "prefix": "floreduce",
    "body": [
      "${1:float64array}.reduce(${2})"
    ],
    "description": "reduce() 方法接受一个函数作为参数，这个函数作为一个累加器，从左到右遍历整个类型数组，最后返回一个单一的值. 这个方法和Array.prototype.reduce()使用了同样的算法. TypedArray 是一个 类型数组.\ntypedarray.reduce(callback[, initialValue])"
  },
  "typedarray.reduceRight(callback[, initialValue])": {
    "prefix": "floreduceright",
    "body": [
      "${1:float64array}.reduceRight(${2})"
    ],
    "description": "reduceRight()在累加器和类型化数组的每个元素上（从右到左）调用函数，使其归约为单一的值。这个方法的算法和 Array.prototype.reduceRight()相同。 TypedArray 是这里的类型化数组类型 之一。\ntypedarray.reduceRight(callback[, initialValue])"
  },
  "typedarray.reverse();": {
    "prefix": "floreverse",
    "body": [
      "${1:float64array}.reverse()"
    ],
    "description": "reverse()方法原地翻转类型化数组。类型化数组的第一个元素变为最后一个，最后一个变为第一个。这个方法的算法和Array.prototype.reverse()相同。 TypedArray 是这里的 类型化数组类型 之一。\ntypedarray.reverse();"
  },
  "typedarray.set(array[, offset])\ntypedarray.set(typedarray[, offset])": {
    "prefix": "floset",
    "body": [
      "${1:float64array}.set(${2})"
    ],
    "description": "set() 方法用于从指定数组中读取值，并将其存储在类型化数组中。\ntypedarray.set(array[, offset])\ntypedarray.set(typedarray[, offset])"
  },
  "typedarray.slice([begin[, end]])": {
    "prefix": "floslice",
    "body": [
      "${1:float64array}.slice(${2})"
    ],
    "description": "slice()方法将一个typed array的一部分浅拷贝到一个新的typed array对象中并返回。此方法采用与 Array.prototype.slice()相同的算法。TypedArray指 typed array types中的一员 .\ntypedarray.slice([begin[, end]])"
  },
  "typedarray.some(callback[, thisArg])": {
    "prefix": "flosome",
    "body": [
      "${1:float64array}.some(${2})"
    ],
    "description": "这个 some() 方法检测 TypedArray 的一些元素是否通过所提供函数的测试. 这个方法和 Array.prototype.some() 相同. TypedArray 是 typed array types 之一.\ntypedarray.some(callback[, thisArg])"
  },
  "typedarray.sort([compareFunction])": {
    "prefix": "flosort",
    "body": [
      "${1:float64array}.sort(${2})"
    ],
    "description": "sort()方法原地排序类型化数组的元素，并且返回类型化数组。这个方法的算法和Array.prototype.sort()相同。 TypedArray 是这里的 类型化数组类型 之一。\ntypedarray.sort([compareFunction])"
  },
  "typedarray.toLocaleString([locales [, options]]);": {
    "prefix": "flotolocalestring",
    "body": [
      "${1:float64array}.toLocaleString(${2})"
    ],
    "description": "toLocaleString()方法返回一个字符串，表明该类型化数组的元素。这些元素被转化为字符串并由一个区域设置指定的分隔符（例如逗号 “,”）分隔。这个方法与Array.prototype.toLocaleString()拥有相同的算法。同时，由于类型化数组的元素都是数，将每个元素转化为字符串的算法与Number.prototype.toLocaleString()是相同的。（类型化数组）的是typed array types中的其中一个。\ntypedarray.toLocaleString([locales [, options]]);"
  },
  "typedarray.toString()": {
    "prefix": "flotostring",
    "body": [
      "${1:float64array}.toString()"
    ],
    "description": "toString()方法返回一个表示指定数组及其元素的字符串。这个方法的算法和Array.prototype.toString()一样。TypedArray 在这是typed array types 之一。\ntypedarray.toString()"
  },
  "arr.values()": {
    "prefix": "flovalues",
    "body": [
      "${1:float64array}.values()"
    ],
    "description": "values()返回新的 Array Iterator 对象，包含数组中每个下标处的值。\narr.values()"
  }
}