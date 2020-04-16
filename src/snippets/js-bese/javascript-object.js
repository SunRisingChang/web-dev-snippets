/**
 * @Author: Sun Rising 
 * @Date: 2020-04-16 13:40:36 
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-16 14:07:13
 * @Description: 
 */
module.exports = {
  "Object.prototype": {
    prefix: "objpro",
    body: "Object.prototype=$0",
    description:
      "Object.prototype 属性表示 Object 的原型对象,可以为所有 Object 类型的对象添加属性。"
  },
  "Object.assign(target, ...sources)": {
    prefix: "objassign",
    body: "Object.assign(${1},${2})",
    description: "Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。"
  },
  "Object.create(proto[, propertiesObject])": {
    prefix: "objcreate",
    body: "Object.create(${1})",
    description: "Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。"
  },
  "Object.defineProperties(obj, props)": {
    prefix: "objdefineproperties",
    body: "Object.defineProperties(${1},${2})",
    description: "Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。"
  },
  "Object.defineProperty(obj, prop, descriptor)": {
    prefix: "objdefineproperty",
    body: "Object.defineProperty(${1},${2},${3})",
    description: "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。"
  },
  "Object.entries(obj)": {
    prefix: "objentries",
    body: "Object.entries(${1})",
    description: "Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。"
  },
  "Object.freeze(obj)": {
    prefix: "objfreeze",
    body: "Object.freeze(${1})",
    description: "Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。"
  },
  "Object.fromEntries(iterable)": {
    prefix: "objfromentries",
    body: "Object.fromEntries(${1})",
    description: "Object.fromEntries() 方法把键值对列表转换为一个对象。"
  },
  "Object.getOwnPropertyDescriptor(obj, prop)": {
    prefix: "objgetownpropertydescriptor",
    body: "Object.getOwnPropertyDescriptor(${1},${2})",
    description: "Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。"
  },
  "Object.getOwnPropertyDescriptors(obj)": {
    prefix: "objgetownpropertydescriptors",
    body: "Object.getOwnPropertyDescriptors(${1})",
    description: "Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。"
  },
  "Object.getOwnPropertyNames(obj)": {
    prefix: "objgetownpropertynames",
    body: "Object.getOwnPropertyNames(${1})",
    description: "Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。"
  },
  "Object.getOwnPropertySymbols(obj)": {
    prefix: "objgetownpropertysymbols",
    body: "Object.getOwnPropertySymbols(${1})",
    description: "Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组。"
  },
  "Object.getPrototypeOf(object)": {
    prefix: "objgetprototypeof",
    body: "Object.getPrototypeOf(${1})",
    description: "Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。"
  },
  "Object.is(value1, value2)": {
    prefix: "objis",
    body: "Object.is(${1},${2})",
    description: "Object.is() 方法判断两个值是否是相同的值。"
  },
  "Object.isExtensible()": {
    prefix: "objisextensible",
    body: "Object.isExtensible(${1})",
    description: ""
  },
  "Object.isFrozen()": {
    prefix: "objisfrozen",
    body: "Object.isFrozen(${1})",
    description: ""
  },
  "Object.isSealed()": {
    prefix: "objissealed",
    body: "Object.isSealed(${1})",
    description: ""
  },
  "Object.keys()": {
    prefix: "objkeys",
    body: "Object.keys(${1})",
    description: ""
  },
  "Object.preventExtensions()": {
    prefix: "objpreventextensions",
    body: "Object.preventExtensions(${1})",
    description: ""
  },
  "Object.prototype.hasOwnProperty()": {
    prefix: "objhasownproperty",
    body: "Object.prototype.hasOwnProperty(${1})",
    description: ""
  },
  "Object.prototype.isPrototypeOf()": {
    prefix: "objisprototypeof",
    body: "Object.prototype.isPrototypeOf(${1})",
    description: ""
  },
  "Object.prototype.propertyIsEnumerable()": {
    prefix: "objpropertyisenumerable",
    body: "Object.prototype.propertyIsEnumerable(${1})",
    description: ""
  },
  "Object.prototype.toLocaleString()": {
    prefix: "objtolocalestring",
    body: "Object.prototype.toLocaleString(${1})",
    description: ""
  },
  "Object.prototype.toString()": {
    prefix: "objtostring",
    body: "Object.prototype.toString(${1})",
    description: ""
  },
  "Object.prototype.valueOf()": {
    prefix: "objvalueof",
    body: "Object.prototype.valueOf(${1})",
    description: ""
  },
  "Object.prototype.watch()": {
    prefix: "objwatch",
    body: "Object.prototype.watch(${1})",
    description: ""
  },
  "Object.seal()": {
    prefix: "objseal",
    body: "Object.seal(${1})",
    description: ""
  },
  "Object.setPrototypeOf()": {
    prefix: "objsetprototypeof",
    body: "Object.setPrototypeOf(${1})",
    description: ""
  },
  "Object.values()": {
    prefix: "objvalues",
    body: "Object.values(${1})",
    description: ""
  }
};