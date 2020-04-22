module.exports = {
  "BigInt.asIntN(width, bigint);": {
    "prefix": "bigasintn",
    "body": [
      "BigInt.asIntN(${2})"
    ],
    "description": "BigInt.asIntN 静态方法将 BigInt 值转换为一个 -2width-1 与 2width-1-1 之间的有符号整数。\nBigInt.asIntN(width, bigint);"
  },
  "BigInt.asUintN(width, bigint);": {
    "prefix": "bigasuintn",
    "body": [
      "BigInt.asUintN(${2})"
    ],
    "description": "BigInt.asUintN 静态方法将 BigInt 转换为一个 0 和 2width-1 之间的无符号整数。\nBigInt.asUintN(width, bigint);"
  },
  "bigIntObj.toLocaleString([locales [, options]])": {
    "prefix": "bigtolocalestring",
    "body": [
      "${1:bigint}.toLocaleString(${2})"
    ],
    "description": "toLocaleString() 方法返回一个字符串，该字符串具有此 BigInt 的 language-sensitive 表达形式。\nbigIntObj.toLocaleString([locales [, options]])"
  },
  "bigIntObj.toString([radix])": {
    "prefix": "bigtostring",
    "body": [
      "${1:bigint}.toString(${2})"
    ],
    "description": "toString() 方法返回一个字符串，表示指定 BigInt 对象。 后面的 \"n\" 不是字符串的一部分。\nbigIntObj.toString([radix])"
  },
  "bigIntObj.valueOf()": {
    "prefix": "bigvalueof",
    "body": [
      "${1:bigint}.valueOf()"
    ],
    "description": "valueOf() 方法返回 BigInt 对象包装的原始值。\nbigIntObj.valueOf()"
  }
}