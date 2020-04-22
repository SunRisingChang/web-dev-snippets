module.exports = {
  "Object.assign(target, ...sources)": {
    "prefix": "objassign",
    "body": [
      "Object.assign(${2})"
    ],
    "description": "Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。\nObject.assign(target, ...sources)"
  },
  "Object.create(proto[, propertiesObject])": {
    "prefix": "objcreate",
    "body": [
      "Object.create(${2})"
    ],
    "description": "Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 （请打开浏览器控制台以查看运行结果。）\nObject.create(proto[, propertiesObject])"
  },
  "Object.defineProperties(obj, props)": {
    "prefix": "objdefineproperties",
    "body": [
      "Object.defineProperties(${2})"
    ],
    "description": "Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。\nObject.defineProperties(obj, props)"
  },
  "Object.defineProperty(obj, prop, descriptor)": {
    "prefix": "objdefineproperty",
    "body": [
      "Object.defineProperty(${2})"
    ],
    "description": "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。\nObject.defineProperty(obj, prop, descriptor)"
  },
  "Object.entries(obj)": {
    "prefix": "objentries",
    "body": [
      "Object.entries(${2})"
    ],
    "description": "The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request.\nObject.entries(obj)"
  },
  "Object.freeze(obj)": {
    "prefix": "objfreeze",
    "body": [
      "Object.freeze(${2})"
    ],
    "description": "Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。\nObject.freeze(obj)"
  },
  "Object.fromEntries(iterable);": {
    "prefix": "objfromentries",
    "body": [
      "Object.fromEntries(${2})"
    ],
    "description": "Object.fromEntries() 方法把键值对列表转换为一个对象。\nObject.fromEntries(iterable);"
  },
  "Object.getOwnPropertyDescriptor(obj, prop)": {
    "prefix": "objgetownpropertydescriptor",
    "body": [
      "Object.getOwnPropertyDescriptor(${2})"
    ],
    "description": "Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）\nObject.getOwnPropertyDescriptor(obj, prop)"
  },
  "Object.getOwnPropertyDescriptors(obj)": {
    "prefix": "objgetownpropertydescriptors",
    "body": [
      "Object.getOwnPropertyDescriptors(${2})"
    ],
    "description": "Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。\nObject.getOwnPropertyDescriptors(obj)"
  },
  "Object.getOwnPropertyNames(obj)": {
    "prefix": "objgetownpropertynames",
    "body": [
      "Object.getOwnPropertyNames(${2})"
    ],
    "description": "Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。\nObject.getOwnPropertyNames(obj)"
  },
  "Object.getOwnPropertySymbols(obj)": {
    "prefix": "objgetownpropertysymbols",
    "body": [
      "Object.getOwnPropertySymbols(${2})"
    ],
    "description": "Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组。\nObject.getOwnPropertySymbols(obj)"
  },
  "Object.getPrototypeOf(object)": {
    "prefix": "objgetprototypeof",
    "body": [
      "Object.getPrototypeOf(${2})"
    ],
    "description": "Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。\nObject.getPrototypeOf(object)"
  },
  "Object.is(value1, value2);": {
    "prefix": "objis",
    "body": [
      "Object.is(${2})"
    ],
    "description": "Object.is() 方法判断两个值是否是相同的值。\nObject.is(value1, value2);"
  },
  "Object.isExtensible(obj)": {
    "prefix": "objisextensible",
    "body": [
      "Object.isExtensible(${2})"
    ],
    "description": "Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。\nObject.isExtensible(obj)"
  },
  "Object.isFrozen(obj)": {
    "prefix": "objisfrozen",
    "body": [
      "Object.isFrozen(${2})"
    ],
    "description": "Object.isFrozen()方法判断一个对象是否被冻结。\nObject.isFrozen(obj)"
  },
  "Object.isSealed(obj)": {
    "prefix": "objissealed",
    "body": [
      "Object.isSealed(${2})"
    ],
    "description": "Object.isSealed() 方法判断一个对象是否被密封。\nObject.isSealed(obj)"
  },
  "Object.keys(obj)": {
    "prefix": "objkeys",
    "body": [
      "Object.keys(${2})"
    ],
    "description": "Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。\nObject.keys(obj)"
  },
  "Object.preventExtensions(obj)": {
    "prefix": "objpreventextensions",
    "body": [
      "Object.preventExtensions(${2})"
    ],
    "description": "Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。\nObject.preventExtensions(obj)"
  },
  "obj.hasOwnProperty(prop)": {
    "prefix": "objhasownproperty",
    "body": [
      "${1:object}.hasOwnProperty(${2})"
    ],
    "description": "hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。\nobj.hasOwnProperty(prop)"
  },
  "prototypeObj.isPrototypeOf(object)": {
    "prefix": "objisprototypeof",
    "body": [
      "${1:object}.isPrototypeOf(${2})"
    ],
    "description": "isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。\nprototypeObj.isPrototypeOf(object)"
  },
  "obj.propertyIsEnumerable(prop)": {
    "prefix": "objpropertyisenumerable",
    "body": [
      "${1:object}.propertyIsEnumerable(${2})"
    ],
    "description": "propertyIsEnumerable() 方法返回一个布尔值，表示指定的属性是否可枚举。\nobj.propertyIsEnumerable(prop)"
  },
  "obj.toLocaleString();": {
    "prefix": "objtolocalestring",
    "body": [
      "${1:object}.toLocaleString()"
    ],
    "description": "toLocaleString() 方法返回一个该对象的字符串表示。此方法被用于派生对象为了特定语言环境的目的（locale-specific purposes）而重载使用。\nobj.toLocaleString();"
  },
  "obj.toString()": {
    "prefix": "objtostring",
    "body": [
      "${1:object}.toString()"
    ],
    "description": "toString() 方法返回一个表示该对象的字符串。\nobj.toString()"
  },
  "object.valueOf()": {
    "prefix": "objvalueof",
    "body": [
      "${1:object}.valueOf()"
    ],
    "description": "valueOf() 方法返回指定对象的原始值。\nobject.valueOf()"
  },
  "Object.seal(obj)": {
    "prefix": "objseal",
    "body": [
      "Object.seal(${2})"
    ],
    "description": "The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request.\nObject.seal(obj)"
  },
  "Object.setPrototypeOf(obj, prototype)": {
    "prefix": "objsetprototypeof",
    "body": [
      "Object.setPrototypeOf(${2})"
    ],
    "description": "如果对象的[[Prototype]]被修改成不可扩展(通过 Object.isExtensible()查看)，就会抛出 TypeError异常。如果prototype参数不是一个对象或者null(例如，数字，字符串，boolean，或者 undefined)，则什么都不做。否则，该方法将obj的[[Prototype]]修改为新的值。\nObject.setPrototypeOf(obj, prototype)"
  },
  "Object.values(obj)": {
    "prefix": "objvalues",
    "body": [
      "Object.values(${2})"
    ],
    "description": "Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。\nObject.values(obj)"
  }
}