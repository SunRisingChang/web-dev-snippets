module.exports = {
  "new Proxy()": {
    prefix: 'newproxy',
    body: 'new Proxy(${1:object}, ${2:option})',
    description: `创建Proxy对象。
    new Proxy(target, {
      apply: function(target, thisArg, argumentsList) {},
      ...
    });`
  },
  "handler.apply()": {
    prefix: 'proapply',
    body: 'apply: function(target, thisArg, argumentsList) {${1}}',
    description: `handler.apply() 方法用于拦截函数的调用。
    var p = new Proxy(target, {
      apply: function(target, thisArg, argumentsList) {
      }
    });`
  },
  "handler.construct()": {
    prefix: 'proconstruct',
    body: 'construct: function(target, argumentsList, newTarget) {${1}}',
    description: `handler.construct() 方法用于拦截new 操作符. 为了使new操作符在生成的Proxy对象上生效，用于初始化代理的目标对象自身必须具有[[Construct]]内部方法（即 new target 必须是有效的）。
    var p = new Proxy(target, {
      construct: function(target, argumentsList, newTarget) {
      }
    });`
  },
  "handler.defineProperty()": {
    prefix: 'prodefineproperty',
    body: 'defineProperty: function(target, property, descriptor) {${1}}',
    description: `handler.defineProperty() 用于拦截对对象的 Object.defineProperty() 操作。
    var p = new Proxy(target, {
      defineProperty: function(target, property, descriptor) {
      }
    });`
  },
  "handler.deleteProperty()": {
    prefix: 'prodeleteproperty',
    body: 'deleteProperty: function(target, property) {${1}}',
    description: `handler.deleteProperty() 方法用于拦截对对象属性的 delete 操作。
    var p = new Proxy(target, {
      deleteProperty: function(target, property) {
      }
    });`
  },
  "handler.get()": {
    prefix: 'proget',
    body: 'get: function(target, property, receiver) {${1}}',
    description: `handler.get() 方法用于拦截对象的读取属性操作。
    var p = new Proxy(target, {
      get: function(target, property, receiver) {
      }
    });`
  },
  "handler.getOwnPropertyDescriptor()": {
    prefix: 'progetownpropertydescriptor',
    body: 'getOwnPropertyDescriptor: function(target, prop) {${1}}',
    description: `handler.getOwnPropertyDescriptor() 方法是 Object.getOwnPropertyDescriptor()  的钩子。
    var p = new Proxy(target, {
      getOwnPropertyDescriptor: function(target, prop) {
      }
    });`
  },
  "handler.getPrototypeOf()": {
    prefix: 'progetprototypeof',
    body: 'getPrototypeOf(target) {${1}}',
    description: `handler.getPrototypeOf() 是一个代理（Proxy）方法，当读取代理对象的原型时，该方法就会被调用。
    const p = new Proxy(obj, {
      getPrototypeOf(target) {
      ...
      }
    });`
  },
  "handler.has()": {
    prefix: 'prohas',
    body: 'has: function(target, prop) {${1}}',
    description: `handler.has() 方法是针对 in 操作符的代理方法。
    var p = new Proxy(target, {
      has: function(target, prop) {
      }
    });`
  },
  "handler.isExtensible()": {
    prefix: 'proisextensible',
    body: 'isExtensible: function(target) {${1}}',
    description: `handler.isExtensible() 方法用于拦截对对象的Object.isExtensible()。
    var p = new Proxy(target, {
      isExtensible: function(target) {
      }
    });`
  },
  "handler.ownKeys()": {
    prefix: 'proownkeys',
    body: 'ownKeys: function(target) {${1}}',
    description: `handler.ownKeys() 方法用于拦截 Reflect.ownKeys().
    var p = new Proxy(target, {
      ownKeys: function(target) {
      }
    });`
  },
  "handler.preventExtensions()": {
    prefix: 'propreventextensions',
    body: 'preventExtensions: function(target) {${1}}',
    description: `handler.preventExtensions() 方法用于设置对Object.preventExtensions()的拦截
    var p = new Proxy(target, {
      preventExtensions: function(target) {
      }
    });`
  },
  "handler.set()": {
    prefix: 'proset',
    body: 'set: function(target, property, value, receiver) {${1}}',
    description: `handler.set() 方法是设置属性值操作的捕获器。
    const p = new Proxy(target, {
      set: function(target, property, value, receiver) {
      }
    });`
  },
  "handler.setPrototypeOf()": {
    prefix: 'prosetprototypeof',
    body: 'setPrototypeOf: function(target, prototype) {${1}}',
    description: `handler.setPrototypeOf() 方法主要用来拦截 Object.setPrototypeOf().
    var p = new Proxy(target, {
      setPrototypeOf: function(target, prototype) {
      }
    });`
  }
};
