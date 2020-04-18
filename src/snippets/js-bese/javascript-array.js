/**
 * @Author: Sun Rising 
 * @Date: 2020-04-16 13:29:08 
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-18 08:31:05
 * @Description: 
 */
module.exports = {
  "Array.from(arrayLike[, mapFn[, thisArg]])": {
    prefix: "arrfro",
    body: "Array.from($1)",
    description:
      "Array.from() 方法有一个可选参数 mapFn，让你可以在最后生成的数组上再执行一次 map 方法后再返回。也就是说 Array.from(obj, mapFn, thisArg) 就相当于 Array.from(obj).map(mapFn, thisArg), 除非创建的不是可用的中间数组。 这对一些数组的子类,如  typed arrays 来说很重要, 因为中间数组的值在调用 map() 时需要是适当的类型。"
  },
  "Array.isArray(obj)": {
    prefix: "arris",
    body: "Array.isArray($1)",
    description: "如果对象是 Array ，则返回true，否则为false。"
  },
  "Array.of(element0[, element1[, ...[, elementN]]])": {
    prefix: "arrof",
    body: "Array.of($1)",
    description: "任意个参数，将按顺序成为返回数组中的元素。"
  },
  "Array.concat(value1[, value2[, ...[, valueN]]])": {
    prefix: "arrcon",
    body: "$1.concat($2)",
    description:
      "concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。"
  },
  "Array.copyWithin(target[, start[, end]])": {
    prefix: "arrcopy",
    body: "$1.copyWithin($2)",
    description:
      "copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。"
  },
  "Array.entries()": {
    prefix: "arrent",
    body: "$1.entries($2)",
    description: "一个新的 Array 迭代器对象。"
  },
  "Array.every(callback[, thisArg])": {
    prefix: "arreve",
    body: "$1.every(value=>{$2})",
    description: "every() 方法测试数组的所有元素是否都通过了指定函数的测试。"
  },
  "Array.fill(value[, start[, end]])": {
    prefix: "arrfill",
    body: "$1.fill($2)",
    description:
      "fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。"
  },
  "Array.filter(callback(element[, index[, array]])[, thisArg])": {
    prefix: "arrfilt",
    body: "$1.filter(value=>{$2})",
    description:
      "filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 "
  },
  "Array.find(callback[, thisArg])": {
    prefix: "arrfind",
    body: "$1.find(value=>{$2})",
    description:
      "find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。"
  },
  "Array.findIndex(callback[, thisArg])": {
    prefix: "arrfindin",
    body: "$1.findIndex(value=>{$2})",
    description:
      "findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。"
  },
  "Array.flat([depth])": {
    prefix: "arrflat",
    body: "$1.flat({$2})",
    description:
      "flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。flat() 方法会移除数组中的空项。"
  },
  "Array.flatMap(function callback(currentValue[, index[, array]]) {}[, thisArg])": {
    prefix: "arrflatmap",
    body: "$1.flatMap({$2})",
    description:
      "flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。"
  },
  "Array.forEach(callback[, thisArg, index])": {
    prefix: "arrfore",
    body: "$1.forEach((value,index)=>{$2})",
    description:
      "find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。"
  },
  "Array.includes(searchElement)": {
    prefix: "arrincl",
    body: "$1.includes($2)",
    description:
      "includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。"
  },
  "Array.indexOf(searchElement)": {
    prefix: "arrindexof",
    body: "$1.indexOf($2)",
    description:
      "indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。"
  },
  "Array.join(separator)": {
    prefix: "arrjoin",
    body: "$1.join($2)",
    description:
      "join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。"
  },
  "Array.keys()": {
    prefix: "arrkey",
    body: "$1.keys()",
    description: "keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。"
  },
  "Array.lastIndexOf(searchElement[, fromIndex = arr.length - 1])": {
    prefix: "arrlastin",
    body: "$1.lastIndexOf($2)",
    description:
      "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。"
  },
  "Array.map(callback(currentValue[, index[, array]]))": {
    prefix: "arrmap",
    body: "$1.map($2)",
    description:
      "map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。"
  },
  "Array.pop()": {
    prefix: "arrpop",
    body: "$1.pop()",
    description:
      "pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。"
  },
  "Array.push(element1, ..., elementN)": {
    prefix: "arrpush",
    body: "$1.push($2)",
    description:
      "push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。"
  },
  "Array.reduce(callback[initialValue])": {
    prefix: "arrredu",
    body: "$1.reduce($2)",
    description:
      "reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。"
  },
  "Array.reduceRight(callback[, initialValue])": {
    prefix: "arrredu",
    body: "$1.reduceRight($2)",
    description:
      "reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。"
  },
  "Array.reverse()": {
    prefix: "arrrev",
    body: "$1.reverse()",
    description: "reverse() 方法将数组中元素的位置颠倒。"
  },
  "Array.shift()": {
    prefix: "arrshift",
    body: "$1.shift()",
    description:
      "shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。"
  },
  "Array.slice(begin, end)": {
    prefix: "arrslice",
    body: "$1.slice($2,$3)",
    description:
      "slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变。"
  },
  "Array.some(callback[element[, index[, array]]), thisArg])": {
    prefix: "arrsome",
    body: "$1.some($2)",
    description:
      "some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试。"
  },
  "Array.sort([compareFunction])": {
    prefix: "arrsort",
    body: "$1.sort($2)",
    description:
      "sort() 方法用原地算法对数组的元素进行排序，并返回数组。排序算法现在是稳定的。默认排序顺序是根据字符串Unicode码点。"
  },
  "Array.splice(start[, deleteCount[, item1[, item2[, ...]]]])": {
    prefix: "arrsplice",
    body: "$1.splice($1,$2)",
    description:
      "splice()方法通过删除现有元素和/或添加新元素来修改数组,并以数组返回原数组中被修改的内容。"
  },
  "Array.toLocaleString([locales[,options]])": {
    prefix: "arrtolo",
    body: "$1.toLocaleString($2)",
    description:
      "toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ','）隔开。"
  },
  "Array.toString()": {
    prefix: "arrtostring",
    body: "$1.toString()",
    description: "toString() 返回一个字符串，表示指定的数组及其元素。"
  },
  "Array.unshift(element1, ..., elementN)": {
    prefix: "arrunsh",
    body: "$1.unshift($2)",
    description:
      "unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。"
  },
  "Array.values()": {
    prefix: "arrvalu",
    body: "$1.values()",
    description:
      "values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。"
  }
};
