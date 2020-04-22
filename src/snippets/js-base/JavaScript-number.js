module.exports = {
  "Number.isFinite(value)": {
    "prefix": "numisfinite",
    "body": [
      "Number.isFinite(${2})"
    ],
    "description": "Number.isFinite() 方法用来检测传入的参数是否是一个有穷数（finite number）。\nNumber.isFinite(value)"
  },
  "Number.isInteger(value)": {
    "prefix": "numisinteger",
    "body": [
      "Number.isInteger(${2})"
    ],
    "description": "Number.isInteger() 方法用来判断给定的参数是否为整数。\nNumber.isInteger(value)"
  },
  "Number.isNaN(value)": {
    "prefix": "numisnan",
    "body": [
      "Number.isNaN(${2})"
    ],
    "description": "Number.isNaN() 方法确定传递的值是否为 NaN，并且检查其类型是否为 Number。它是原来的全局 isNaN() 的更稳妥的版本。\nNumber.isNaN(value)"
  },
  "Number.isSafeInteger(testValue)": {
    "prefix": "numissafeinteger",
    "body": [
      "Number.isSafeInteger(${2})"
    ],
    "description": "Number.isSafeInteger() 方法用来判断传入的参数值是否是一个“安全整数”（safe integer）。\nNumber.isSafeInteger(testValue)"
  },
  "Number.parseFloat(string)": {
    "prefix": "numparsefloat",
    "body": [
      "Number.parseFloat(${2})"
    ],
    "description": "Number.parseFloat() 方法可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同，并且处于 ECMAScript 6 规范中（用于全局变量的模块化）。\nNumber.parseFloat(string)"
  },
  "Number.parseInt(string[, radix])": {
    "prefix": "numparseint",
    "body": [
      "Number.parseInt(${2})"
    ],
    "description": "Number.parseInt() 方法依据指定基数 [ 参数 radix 的值]，把字符串 [ 参数 string 的值] 解析成整数。\nNumber.parseInt(string[, radix])"
  },
  "numObj.toExponential(fractionDigits)": {
    "prefix": "numtoexponential",
    "body": [
      "${1:number}.toExponential(${2})"
    ],
    "description": "toExponential() 方法以指数表示法返回该数值字符串表示形式。\nnumObj.toExponential(fractionDigits)"
  },
  "numObj.toFixed(digits)": {
    "prefix": "numtofixed",
    "body": [
      "${1:number}.toFixed(${2})"
    ],
    "description": "toFixed() 方法使用定点表示法来格式化一个数值。\nnumObj.toFixed(digits)"
  },
  "numObj.toLocaleString([locales [, options]])": {
    "prefix": "numtolocalestring",
    "body": [
      "${1:number}.toLocaleString(${2})"
    ],
    "description": "toLocaleString() 方法返回这个数字在特定语言环境下的表示字符串。\nnumObj.toLocaleString([locales [, options]])"
  },
  "numObj.toPrecision(precision)": {
    "prefix": "numtoprecision",
    "body": [
      "${1:number}.toPrecision(${2})"
    ],
    "description": "toPrecision() 方法以指定的精度返回该数值对象的字符串表示。\nnumObj.toPrecision(precision)"
  },
  "numObj.toString([radix])": {
    "prefix": "numtostring",
    "body": [
      "${1:number}.toString(${2})"
    ],
    "description": "toString() 方法返回指定 Number 对象的字符串表示形式。\nnumObj.toString([radix])"
  },
  "numObj.valueOf()": {
    "prefix": "numvalueof",
    "body": [
      "${1:number}.valueOf()"
    ],
    "description": "valueOf() 方法返回一个被 Number 对象包装的原始值。\nnumObj.valueOf()"
  }
}