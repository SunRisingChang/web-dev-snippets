module.exports = {
  "Object.assign(target, ...sources)": {
    prefix: "objass",
    body: "Object.assign($0, $1);$2",
    description:
      "Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象"
  },
  "Object.prototype": {
    prefix: "objpro",
    body: "Object.prototype=$0",
    description:
      "Object.prototype 属性表示 Object 的原型对象,可以为所有 Object 类型的对象添加属性。"
  },
  "Object.create(proto, [propertiesObject])": {
    prefix: "objpro",
    body: "Object.prototype=$0",
    description:
      "Object.prototype 属性表示 Object 的原型对象,可以为所有 Object 类型的对象添加属性。"
  }
};
