module.exports = {
  async: {
    prefix: "async",
    body: "async",
    description: "方法同步，方法中有await时使用"
  },
  await: {
    prefix: "await",
    body: "await",
    description: "承诺等待"
  },
  length: {
    prefix: "length",
    body: "length",
    description: "长度"
  },
  prototype: {
    prefix: "prototype",
    body: "prototype",
    description: "原型"
  },
  const: {
    prefix: "const",
    body: "const",
    description: "常量"
  },
  height: {
    prefix: "height",
    body: "height",
    description: "高度"
  },
  string: {
    prefix: "string",
    body: "String",
    description: "[TypeScript基础类型]String"
  },
  symbol: {
    prefix: "symbol",
    body: "Symbol('${1:name}')",
    description: "[TypeScript基础类型]Symbol"
  },
  boolean: {
    prefix: "boolean",
    body: "Boolean",
    description: "[TypeScript基础类型]Boolean"
  },
  number: {
    prefix: "number",
    body: "Number",
    description: "[TypeScript基础类型]Number"
  },
  object: {
    prefix: "object",
    body: "Object",
    description: "[TypeScript基础类型]Object"
  },
  array: {
    prefix: "array",
    body: "Array",
    description: "[TypeScript基础类型]Array"
  },
  date: {
    prefix: "date",
    body: "Date",
    description: "[TypeScript基础类型]Date"
  },
  extends: {
    prefix: "extends",
    body: "extends",
    description: "继承"
  },
  typeof: {
    prefix: "typeof",
    body: "typeof",
    description: "typeof操作符返回一个字符串，表示未经计算的操作数的类型。"
  },
  instanceof: {
    prefix: "instanceof",
    body: "instanceof",
    description:
      "instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象的原型链中的任何位置"
  },
  then: {
    prefix: "then",
    body: "then",
    description: "承诺成功。"
  },
  catch: {
    prefix: "catch",
    body: "catch",
    description: "承诺失败。"
  }
};
