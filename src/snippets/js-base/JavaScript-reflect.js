module.exports = {
  "Reflect.apply(target, thisArgument, argumentsList)": {
    "prefix": "refapply",
    "body": [
      "Reflect.apply(${2})"
    ],
    "description": "静态方法 Reflect.apply() 通过指定的参数列表发起对目标(target)函数的调用。\nReflect.apply(target, thisArgument, argumentsList)"
  },
  "Reflect.construct(target, argumentsList[, newTarget])": {
    "prefix": "refconstruct",
    "body": [
      "Reflect.construct(${2})"
    ],
    "description": "Reflect.construct() 方法的行为有点像 new 操作符 构造函数 ， 相当于运行 new target(...args).\nReflect.construct(target, argumentsList[, newTarget])"
  },
  "Reflect.defineProperty(target, propertyKey, attributes)": {
    "prefix": "refdefineproperty",
    "body": [
      "Reflect.defineProperty(${2})"
    ],
    "description": "静态方法 Reflect.defineProperty() 基本等同于 Object.defineProperty() 方法，唯一不同是返回 Boolean 值。\nReflect.defineProperty(target, propertyKey, attributes)"
  },
  "Reflect.deleteProperty(target, propertyKey)": {
    "prefix": "refdeleteproperty",
    "body": [
      "Reflect.deleteProperty(${2})"
    ],
    "description": "静态方法 Reflect.deleteProperty() 允许用于删除属性。它很像 delete operator ，但它是一个函数。\nReflect.deleteProperty(target, propertyKey)"
  },
  "Reflect.get(target, propertyKey[, receiver])": {
    "prefix": "refget",
    "body": [
      "Reflect.get(${2})"
    ],
    "description": "Reflect.get()方法与从 对象 (target[propertyKey]) 中读取属性类似，但它是通过一个函数执行来操作的。\nReflect.get(target, propertyKey[, receiver])"
  },
  "Reflect.getOwnPropertyDescriptor(target, propertyKey)": {
    "prefix": "refgetownpropertydescriptor",
    "body": [
      "Reflect.getOwnPropertyDescriptor(${2})"
    ],
    "description": "静态方法 Reflect.getOwnPropertyDescriptor() 与 Object.getOwnPropertyDescriptor() 方法相似。如果在对象中存在，则返回给定的属性的属性描述符。否则返回 undefined。\nReflect.getOwnPropertyDescriptor(target, propertyKey)"
  },
  "Reflect.getPrototypeOf(target)": {
    "prefix": "refgetprototypeof",
    "body": [
      "Reflect.getPrototypeOf(${2})"
    ],
    "description": "静态方法 Reflect.getPrototypeOf() 与 Object.getPrototypeOf() 方法几乎是一样的。都是返回指定对象的原型（即内部的 [[Prototype]] 属性的值）。\nReflect.getPrototypeOf(target)"
  },
  "Reflect.isExtensible(target)": {
    "prefix": "refisextensible",
    "body": [
      "Reflect.isExtensible(${2})"
    ],
    "description": "静态方法 Reflect.isExtensible() 判断一个对象是否可扩展 （即是否能够添加新的属性）。与它 Object.isExtensible() 方法相似，但有一些不同，详情可见 differences。\nReflect.isExtensible(target)"
  },
  "Reflect.ownKeys(target)": {
    "prefix": "refownkeys",
    "body": [
      "Reflect.ownKeys(${2})"
    ],
    "description": "静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。\nReflect.ownKeys(target)"
  },
  "Reflect.preventExtensions(target)": {
    "prefix": "refpreventextensions",
    "body": [
      "Reflect.preventExtensions(${2})"
    ],
    "description": "静态方法 Reflect.preventExtensions() 方法阻止新属性添加到对象 (例如：防止将来对对象的扩展被添加到对象中)。该方法与 Object.preventExtensions()相似，但有一些不同点。详情可见 differences。\nReflect.preventExtensions(target)"
  },
  "Reflect.set(target, propertyKey, value[, receiver])": {
    "prefix": "refset",
    "body": [
      "Reflect.set(${2})"
    ],
    "description": "静态方法 Reflect.set() 工作方式就像在一个对象上设置一个属性。\nReflect.set(target, propertyKey, value[, receiver])"
  },
  "Reflect.setPrototypeOf(target, prototype)": {
    "prefix": "refsetprototypeof",
    "body": [
      "Reflect.setPrototypeOf(${2})"
    ],
    "description": "除了返回类型以外，静态方法 Reflect.setPrototypeOf() 与 Object.setPrototypeOf() 方法是一样的。它可设置对象的原型（即内部的 [[Prototype]] 属性）为另一个对象或 null，如果操作成功返回 true，否则返回 false。\nReflect.setPrototypeOf(target, prototype)"
  }
}