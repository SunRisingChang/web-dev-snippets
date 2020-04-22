module.exports = {
  "Symbol.for(key);": {
    "prefix": "symfor",
    "body": [
      "Symbol.for(${2})"
    ],
    "description": "Symbol.for(key) 方法会根据给定的键 key，来从运行时的 symbol 注册表中找到对应的 symbol，如果找到了，则返回它，否则，新建一个与该键关联的 symbol，并放入全局 symbol 注册表中。\nSymbol.for(key);"
  },
  "Symbol.keyFor(sym);": {
    "prefix": "symkeyfor",
    "body": [
      "Symbol.keyFor(${2})"
    ],
    "description": "Symbol.keyFor(sym) 方法用来获取 symbol 注册表中与某个 symbol 关联的键。\nSymbol.keyFor(sym);"
  },
  "Symbol.toSource()\n\nvar sym = Symbol()\nsym.toSource()": {
    "prefix": "symtosource",
    "body": [
      "Symbol.toSource(${2})"
    ],
    "description": "toSource() 方法返回代表该对象源码的字符串。\nSymbol.toSource()\n\nvar sym = Symbol()\nsym.toSource()"
  },
  "symbol.toString();": {
    "prefix": "symtostring",
    "body": [
      "${1:symbol}.toString()"
    ],
    "description": "toString() 方法返回当前 symbol 对象的字符串表示。\nsymbol.toString();"
  },
  "symbol.valueOf();": {
    "prefix": "symvalueof",
    "body": [
      "${1:symbol}.valueOf()"
    ],
    "description": "valueOf() 方法返回当前 symbol 对象所包含的 symbol 原始值。\nsymbol.valueOf();"
  }
}