module.exports = {
  "Array.from(arrayLike[, mapFn[, thisArg]])": {
    "prefix": "arrfrom",
    "body": [
      "Array.from(${2})"
    ],
    "description": "Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。\nArray.from(arrayLike[, mapFn[, thisArg]])"
  },
  "Array.isArray(obj)": {
    "prefix": "arrisarray",
    "body": [
      "Array.isArray(${2})"
    ],
    "description": "Array.isArray() 用于确定传递的值是否是一个 Array。\nArray.isArray(obj)"
  },
  "Array.of(element0[, element1[, ...[, elementN]]])": {
    "prefix": "arrof",
    "body": [
      "Array.of(${2})"
    ],
    "description": "Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。\nArray.of(element0[, element1[, ...[, elementN]]])"
  },
  "var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])": {
    "prefix": "arrconcat",
    "body": [
      "${1:array}.concat(${2})"
    ],
    "description": "concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。\nvar new_array = old_array.concat(value1[, value2[, ...[, valueN]]])"
  },
  "arr.copyWithin(target[, start[, end]])": {
    "prefix": "arrcopywithin",
    "body": [
      "${1:array}.copyWithin(${2})"
    ],
    "description": "The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request.\narr.copyWithin(target[, start[, end]])"
  },
  "arr.entries()": {
    "prefix": "arrentries",
    "body": [
      "${1:array}.entries()"
    ],
    "description": "entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。\narr.entries()"
  },
  "arr.every(callback[, thisArg])": {
    "prefix": "arrevery",
    "body": [
      "${1:array}.every(${2})"
    ],
    "description": "every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。\narr.every(callback[, thisArg])"
  },
  "arr.fill(value[, start[, end]])": {
    "prefix": "arrfill",
    "body": [
      "${1:array}.fill(${2})"
    ],
    "description": "fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。\narr.fill(value[, start[, end]])"
  },
  "var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])": {
    "prefix": "arrfilter",
    "body": [
      "${1:array}.filter(${2})"
    ],
    "description": "filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。\nvar newArray = arr.filter(callback(element[, index[, array]])[, thisArg])"
  },
  "arr.find(callback[, thisArg])": {
    "prefix": "arrfind",
    "body": [
      "${1:array}.find(${2})"
    ],
    "description": "find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。\narr.find(callback[, thisArg])"
  },
  "arr.findIndex(callback[, thisArg])": {
    "prefix": "arrfindindex",
    "body": [
      "${1:array}.findIndex(${2})"
    ],
    "description": "findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。\narr.findIndex(callback[, thisArg])"
  },
  "var newArray = arr.flat([depth])": {
    "prefix": "arrflat",
    "body": [
      "${1:array}.flat(${2})"
    ],
    "description": "flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。\nvar newArray = arr.flat([depth])"
  },
  "var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {\n    // return element for new_array\n}[, thisArg])": {
    "prefix": "arrflatmap",
    "body": [
      "${1:array}.flatMap(${2})"
    ],
    "description": "flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。\nvar new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {\n    // return element for new_array\n}[, thisArg])"
  },
  "arr.forEach(callback(currentValue [, index [, array]])[, thisArg])": {
    "prefix": "arrforeach",
    "body": [
      "${1:array}.forEach(${2})"
    ],
    "description": "forEach() 方法对数组的每个元素执行一次给定的函数。\narr.forEach(callback(currentValue [, index [, array]])[, thisArg])"
  },
  "arr.includes(valueToFind[, fromIndex])": {
    "prefix": "arrincludes",
    "body": [
      "${1:array}.includes(${2})"
    ],
    "description": "includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。\narr.includes(valueToFind[, fromIndex])"
  },
  "arr.indexOf(searchElement[, fromIndex])": {
    "prefix": "arrindexof",
    "body": [
      "${1:array}.indexOf(${2})"
    ],
    "description": "indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。\narr.indexOf(searchElement[, fromIndex])"
  },
  "arr.join([separator])": {
    "prefix": "arrjoin",
    "body": [
      "${1:array}.join(${2})"
    ],
    "description": "join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。\narr.join([separator])"
  },
  "arr.keys()": {
    "prefix": "arrkeys",
    "body": [
      "${1:array}.keys()"
    ],
    "description": "keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。\narr.keys()"
  },
  "arr.lastIndexOf(searchElement[, fromIndex])": {
    "prefix": "arrlastindexof",
    "body": [
      "${1:array}.lastIndexOf(${2})"
    ],
    "description": "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。\narr.lastIndexOf(searchElement[, fromIndex])"
  },
  "var new_array = arr.map(function callback(currentValue[, index[, array]]) {\n // Return element for new_array \n}[, thisArg])": {
    "prefix": "arrmap",
    "body": [
      "${1:array}.map(${2})"
    ],
    "description": "map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一次提供的函数后的返回值。\nvar new_array = arr.map(function callback(currentValue[, index[, array]]) {\n // Return element for new_array \n}[, thisArg])"
  },
  "arr.pop()": {
    "prefix": "arrpop",
    "body": [
      "${1:array}.pop()"
    ],
    "description": "pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。\narr.pop()"
  },
  "arr.push(element1, ..., elementN)": {
    "prefix": "arrpush",
    "body": [
      "${1:array}.push(${2})"
    ],
    "description": "push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。\narr.push(element1, ..., elementN)"
  },
  "arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])": {
    "prefix": "arrreduce",
    "body": [
      "${1:array}.reduce(${2})"
    ],
    "description": "reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。\narr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])"
  },
  "arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])": {
    "prefix": "arrreduceright",
    "body": [
      "${1:array}.reduceRight(${2})"
    ],
    "description": "reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。\narr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])"
  },
  "arr.reverse()": {
    "prefix": "arrreverse",
    "body": [
      "${1:array}.reverse()"
    ],
    "description": "reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。\narr.reverse()"
  },
  "arr.shift()": {
    "prefix": "arrshift",
    "body": [
      "${1:array}.shift()"
    ],
    "description": "shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。\narr.shift()"
  },
  "arr.slice([begin[, end]])": {
    "prefix": "arrslice",
    "body": [
      "${1:array}.slice(${2})"
    ],
    "description": "slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。\narr.slice([begin[, end]])"
  },
  "arr.some(callback(element[, index[, array]])[, thisArg])": {
    "prefix": "arrsome",
    "body": [
      "${1:array}.some(${2})"
    ],
    "description": "some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。\narr.some(callback(element[, index[, array]])[, thisArg])"
  },
  "arr.sort([compareFunction])": {
    "prefix": "arrsort",
    "body": [
      "${1:array}.sort(${2})"
    ],
    "description": "sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的\narr.sort([compareFunction])"
  },
  "array.splice(start[, deleteCount[, item1[, item2[, ...]]]])": {
    "prefix": "arrsplice",
    "body": [
      "${1:array}.splice(${2})"
    ],
    "description": "splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。\narray.splice(start[, deleteCount[, item1[, item2[, ...]]]])"
  },
  "arr.toLocaleString([locales[,options]]);": {
    "prefix": "arrtolocalestring",
    "body": [
      "${1:array}.toLocaleString(${2})"
    ],
    "description": "toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 \",\"）隔开。\narr.toLocaleString([locales[,options]]);"
  },
  "arr.toString()": {
    "prefix": "arrtostring",
    "body": [
      "${1:array}.toString()"
    ],
    "description": "toString() 返回一个字符串，表示指定的数组及其元素。\narr.toString()"
  },
  "arr.unshift(element1, ..., elementN)": {
    "prefix": "arrunshift",
    "body": [
      "${1:array}.unshift(${2})"
    ],
    "description": "unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。\narr.unshift(element1, ..., elementN)"
  },
  "arr.values()": {
    "prefix": "arrvalues",
    "body": [
      "${1:array}.values()"
    ],
    "description": "values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值\narr.values()"
  }
}