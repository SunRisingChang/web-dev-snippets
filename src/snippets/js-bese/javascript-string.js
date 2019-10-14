module.exports = {
  "String.fromCharCode(num1, ..., numN) ": {
    prefix: "strfromcharcode",
    body: "${1:str}.fromCharCode($2)",
    description:
      "静态 String.fromCharCode() 方法返回使用指定的Unicode值序列创建的字符串。"
  },
  "String.fromCodePoint(num1[, ...[, numN]])": {
    prefix: "strfromcodepoint",
    body: "${1:str}.fromCodePoint($2)",
    description:
      "String.fromCodePoint() 静态方法返回使用指定的代码点序列创建的字符串。"
  },
  "String.charAt(index)": {
    prefix: "strcharat",
    body: "${1:str}.charAt($2)",
    description: "charAt() 方法从一个字符串中返回指定的字符。"
  },
  "String.charCodeAt(index)": {
    prefix: "strcharcodeat",
    body: "${1:str}.charCodeAt($2)",
    description:
      "charCodeAt() 方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元 (在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，UTF-16 编码单元匹配 Unicode 编码单元。但在——例如 Unicode 编码单元 > 0x10000 的这种——不能被一个 UTF-16 编码单元单独表示的情况下，只能匹配 Unicode 代理对的第一个编码单元) 。如果你想要整个代码点的值，使用 codePointAt()。"
  },
  "String.codePointAt(pos)": {
    prefix: "strcodepointat",
    body: "${1:str}.codePointAt($2)",
    description: "codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。"
  },
  "String.concat(string2, string3[, ..., stringN])": {
    prefix: "strconcat",
    body: "${1:str}.concat($2)",
    description:
      "concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。"
  },
  "String.endsWith(searchString [, position]);": {
    prefix: "strendswith",
    body: "${1:str}.endsWith($2)",
    description:
      "endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。"
  },
  "String.includes(searchString[, position])": {
    prefix: "strincludes",
    body: "${1:str}.includes($2)",
    description:
      "includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。"
  },
  "String.indexOf(searchValue[, fromIndex])": {
    prefix: "strindexof",
    body: "${1:str}.indexOf($2)",
    description:
      "indexOf() 方法返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。如果未找到该值，则返回- 1。"
  },
  "String.lastIndexOf(searchValue[, fromIndex])": {
    prefix: "strlastindexof",
    body: "${1:str}.lastIndexOf($2)",
    description:
      "lastIndexOf() 方法返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始。"
  },
  "String.localeCompare(compareString[, locales[, options]])": {
    prefix: "strlocalecompare",
    body: "${1:str}.localeCompare($2)",
    description:
      "localeCompare() 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。"
  },
  "String.match(regexp);": {
    prefix: "strmatch",
    body: "${1:str}.match($2)",
    description: "当一个字符串与一个正则表达式匹配时， match()方法检索匹配项。"
  },
  "String.normalize([form]);": {
    prefix: "strnormalize",
    body: "${1:str}.normalize($2)",
    description:
      "normalize() 方法会按照指定的一种 Unicode 正规形式将当前字符串正规化."
  },
  "String.padEnd(targetLength [, padString])": {
    prefix: "strpadend",
    body: "${1:str}.padEnd($2)",
    description:
      "padEnd()  方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。"
  },
  "String.padStart(targetLength [, padString])": {
    prefix: "strpadstart",
    body: "${1:str}.padStart($2)",
    description:
      "padStart() 方法用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。"
  },
  "String.repeat(count)": {
    prefix: "strrepeat",
    body: "${1:str}.repeat($2)",
    description:
      "repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。"
  },
  "String.replace(regexp|substr, newSubStr|function)": {
    prefix: "strreplace",
    body: "${1:str}.replace($2)",
    description:
      "replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个正则表达式, 替换值可以是一个字符串或者一个每次匹配都要调用的函数。"
  },
  "String.search(regexp)": {
    prefix: "strsearch",
    body: "${1:str}.search($2)",
    description: "search() 方法执行正则表达式和 String对象之间的一个搜索匹配。"
  },
  "String.slice(beginSlice[, endSlice])": {
    prefix: "strslice",
    body: "${1:str}.slice($2)",
    description: "slice() 方法提取一个字符串的一部分，并返回一新的字符串。"
  },
  "String.split([separator[, limit]])": {
    prefix: "strsplit",
    body: "${1:str}.split($2)",
    description:
      "split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。 "
  },
  "String.startsWith(searchString [, position]);": {
    prefix: "strstartswith",
    body: "${1:str}.startsWith($2)",
    description:
      "startsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 true 或 false。"
  },
  "String.substring(indexStart[, indexEnd])": {
    prefix: "strsubstring",
    body: "${1:str}.substring($2)",
    description:
      "substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。"
  },
  "String.toLocaleLowerCase()": {
    prefix: "strtolocalelowercase",
    body: "${1:str}.toLocaleLowerCase()",
    description:
      "toLocaleLowerCase()方法根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值。"
  },
  "String.toLocaleUpperCase()": {
    prefix: "strtolocaleuppercase",
    body: "${1:str}.toLocaleUpperCase()",
    description:
      "toLocaleUpperCase() 使用本地化（locale-specific）的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串。"
  },
  "String.toLowerCase()": {
    prefix: "strtolowercase",
    body: "${1:str}.toLowerCase()",
    description: "toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。"
  },
  "String.toString()": {
    prefix: "strtostring",
    body: "${1:str}.toString()",
    description: "toString() 方法返回指定对象的字符串形式。"
  },
  "String.toUpperCase()": {
    prefix: "strtouppercase",
    body: "${1:str}.toUpperCase()",
    description: "toUpperCase() 将调用该方法的字符串值转换为大写形式，并返回。"
  },
  "String.trim()": {
    prefix: "strtrim",
    body: "${1:str}.trim()",
    description:
      "trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。"
  },
  "String.valueOf()": {
    prefix: "strvalueof",
    body: "${1:str}.valueOf()",
    description: "valueOf() 方法返回一个String对象的原始值（primitive value）。"
  }
};
