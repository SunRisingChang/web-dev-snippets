module.exports = {
  "String.fromCharCode(num1, ..., numN)": {
    "prefix": "strfromcharcode",
    "body": [
      "String.fromCharCode(${2})"
    ],
    "description": "静态 String.fromCharCode() 方法返回由指定的UTF-16代码单元序列创建的字符串。\nString.fromCharCode(num1, ..., numN)"
  },
  "String.fromCodePoint(num1[, ...[, numN]])": {
    "prefix": "strfromcodepoint",
    "body": [
      "String.fromCodePoint(${2})"
    ],
    "description": "String.fromCodePoint() 静态方法返回使用指定的代码点序列创建的字符串。\nString.fromCodePoint(num1[, ...[, numN]])"
  },
  "str.charAt(index)": {
    "prefix": "strcharat",
    "body": [
      "${1:string}.charAt(${2})"
    ],
    "description": "charAt() 方法从一个字符串中返回指定的字符。\nstr.charAt(index)"
  },
  "str.charCodeAt(index)": {
    "prefix": "strcharcodeat",
    "body": [
      "${1:string}.charCodeAt(${2})"
    ],
    "description": "charCodeAt() 方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元 (在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，UTF-16 编码单元匹配 Unicode 编码单元。但在——例如 Unicode 编码单元 > 0x10000 的这种——不能被一个 UTF-16 编码单元单独表示的情况下，只能匹配 Unicode 代理对的第一个编码单元) 。如果你想要整个代码点的值，使用 codePointAt()。\nstr.charCodeAt(index)"
  },
  "str.codePointAt(pos)": {
    "prefix": "strcodepointat",
    "body": [
      "${1:string}.codePointAt(${2})"
    ],
    "description": "codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。\nstr.codePointAt(pos)"
  },
  "str.concat(string2, string3[, ..., stringN])": {
    "prefix": "strconcat",
    "body": [
      "${1:string}.concat(${2})"
    ],
    "description": "concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。\nstr.concat(string2, string3[, ..., stringN])"
  },
  "str.endsWith(searchString[, length])": {
    "prefix": "strendswith",
    "body": [
      "${1:string}.endsWith(${2})"
    ],
    "description": "endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。\nstr.endsWith(searchString[, length])"
  },
  "str.includes(searchString[, position])": {
    "prefix": "strincludes",
    "body": [
      "${1:string}.includes(${2})"
    ],
    "description": "includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。\nstr.includes(searchString[, position])"
  },
  "str.indexOf(searchValue [, fromIndex])": {
    "prefix": "strindexof",
    "body": [
      "${1:string}.indexOf(${2})"
    ],
    "description": "indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。\nstr.indexOf(searchValue [, fromIndex])"
  },
  "str.lastIndexOf(searchValue[, fromIndex])": {
    "prefix": "strlastindexof",
    "body": [
      "${1:string}.lastIndexOf(${2})"
    ],
    "description": "\nstr.lastIndexOf(searchValue[, fromIndex])"
  },
  "referenceStr.localeCompare(compareString[, locales[, options]])": {
    "prefix": "strlocalecompare",
    "body": [
      "${1:string}.localeCompare(${2})"
    ],
    "description": "localeCompare() 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。\nreferenceStr.localeCompare(compareString[, locales[, options]])"
  },
  "str.match(regexp)": {
    "prefix": "strmatch",
    "body": [
      "${1:string}.match(${2})"
    ],
    "description": "match() 方法检索返回一个字符串匹配正则表达式的的结果。\nstr.match(regexp)"
  },
  "str.matchAll(regexp)": {
    "prefix": "strmatchall",
    "body": [
      "${1:string}.matchAll(${2})"
    ],
    "description": "matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。\nstr.matchAll(regexp)"
  },
  "str.normalize([form])": {
    "prefix": "strnormalize",
    "body": [
      "${1:string}.normalize(${2})"
    ],
    "description": "normalize() 方法会按照指定的一种 Unicode 正规形式将当前字符串正规化。（如果该值不是字符串，则首先将其转换为一个字符串）。\nstr.normalize([form])"
  },
  "str.padEnd(targetLength [, padString])": {
    "prefix": "strpadend",
    "body": [
      "${1:string}.padEnd(${2})"
    ],
    "description": "padEnd()  方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。\nstr.padEnd(targetLength [, padString])"
  },
  "str.padStart(targetLength [, padString])": {
    "prefix": "strpadstart",
    "body": [
      "${1:string}.padStart(${2})"
    ],
    "description": "padStart() 方法用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。\nstr.padStart(targetLength [, padString])"
  },
  "/** \n * str: String\n * count: Number\n */\n\nlet resultString = str.repeat(count);": {
    "prefix": "strrepeat",
    "body": [
      "${1:string}.repeat(${2})"
    ],
    "description": "\n/** \n * str: String\n * count: Number\n */\n\nlet resultString = str.repeat(count);"
  },
  "str.replace(regexp|substr, newSubStr|function)": {
    "prefix": "strreplace",
    "body": [
      "${1:string}.replace(${2})"
    ],
    "description": "replace() 方法返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。\nstr.replace(regexp|substr, newSubStr|function)"
  },
  "str.search(regexp)": {
    "prefix": "strsearch",
    "body": [
      "${1:string}.search(${2})"
    ],
    "description": "search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。\nstr.search(regexp)"
  },
  "str.slice(beginIndex[, endIndex])": {
    "prefix": "strslice",
    "body": [
      "${1:string}.slice(${2})"
    ],
    "description": "slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。\nstr.slice(beginIndex[, endIndex])"
  },
  "str.split([separator[, limit]])": {
    "prefix": "strsplit",
    "body": [
      "${1:string}.split(${2})"
    ],
    "description": "split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。\nstr.split([separator[, limit]])"
  },
  "str.startsWith(searchString[, position])": {
    "prefix": "strstartswith",
    "body": [
      "${1:string}.startsWith(${2})"
    ],
    "description": "startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。\nstr.startsWith(searchString[, position])"
  },
  "str.substring(indexStart[, indexEnd])": {
    "prefix": "strsubstring",
    "body": [
      "${1:string}.substring(${2})"
    ],
    "description": "substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。\nstr.substring(indexStart[, indexEnd])"
  },
  "str.toLocaleLowerCase()\nstr.toLocaleLowerCase(locale) \nstr.toLocaleLowerCase([locale, locale, ...])": {
    "prefix": "strtolocalelowercase",
    "body": [
      "${1:string}.toLocaleLowerCase(${2})"
    ],
    "description": "toLocaleLowerCase()方法根据任何指定区域语言环境设置的大小写映射，返回调用字符串被转换为小写的格式。\nstr.toLocaleLowerCase()\nstr.toLocaleLowerCase(locale) \nstr.toLocaleLowerCase([locale, locale, ...])"
  },
  "str.toLocaleUpperCase()\nstr.toLocaleUpperCase(locale) \nstr.toLocaleUpperCase([locale, locale, ...])": {
    "prefix": "strtolocaleuppercase",
    "body": [
      "${1:string}.toLocaleUpperCase(${2})"
    ],
    "description": "The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.\nstr.toLocaleUpperCase()\nstr.toLocaleUpperCase(locale) \nstr.toLocaleUpperCase([locale, locale, ...])"
  },
  "str.toLowerCase()": {
    "prefix": "strtolowercase",
    "body": [
      "${1:string}.toLowerCase()"
    ],
    "description": "toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。\nstr.toLowerCase()"
  },
  "str.toString()": {
    "prefix": "strtostring",
    "body": [
      "${1:string}.toString()"
    ],
    "description": "toString() 方法返回指定对象的字符串形式。\nstr.toString()"
  },
  "str.toUpperCase()": {
    "prefix": "strtouppercase",
    "body": [
      "${1:string}.toUpperCase()"
    ],
    "description": "The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).\nstr.toUpperCase()"
  },
  "str.trim()": {
    "prefix": "strtrim",
    "body": [
      "${1:string}.trim()"
    ],
    "description": "trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）。\nstr.trim()"
  },
  "str.trimEnd();\nstr.trimRight();": {
    "prefix": "strtrimright",
    "body": [
      "${1:string}.trimEnd(${2})"
    ],
    "description": "trimEnd() 方法从一个字符串的末端移除空白字符。trimRight() 是这个方法的别名。\nstr.trimEnd();\nstr.trimRight();"
  },
  "str.trimStart();\nstr.trimLeft();": {
    "prefix": "strtrimleft",
    "body": [
      "${1:string}.trimStart(${2})"
    ],
    "description": "The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request.\nstr.trimStart();\nstr.trimLeft();"
  },
  "str.valueOf()": {
    "prefix": "strvalueof",
    "body": [
      "${1:string}.valueOf()"
    ],
    "description": "The valueOf() method returns the primitive value of a String object.\nstr.valueOf()"
  },
  "String.raw(callSite, ...substitutions)\n\nString.raw`templateString`": {
    "prefix": "strraw",
    "body": [
      "String.raw(${2})"
    ],
    "description": "String.raw() 是一个模板字符串的标签函数，它的作用类似于 Python 中的字符串前缀 r 和 C# 中的字符串前缀 @（还是有点区别的，详见隔壁 Chromium 那边的这个 issue），是用来获取一个模板字符串的原始字符串的，比如说，占位符（例如 ${foo}）会被处理为它所代表的其他字符串，而转义字符（例如 \\n）不会。\nString.raw(callSite, ...substitutions)\n\nString.raw`templateString`"
  }
}