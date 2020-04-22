module.exports = {
  "gen.next(value)": {
    "prefix": "gennext",
    "body": [
      "${1:generator}.next(${2})"
    ],
    "description": "next() 方法返回一个包含属性 done 和 value 的对象。该方法也可以通过接受一个参数用以向生成器传值。\ngen.next(value)"
  },
  "gen.return(value)": {
    "prefix": "genreturn",
    "body": [
      "${1:generator}.return(${2})"
    ],
    "description": "return() 方法返回给定的值并结束生成器。\ngen.return(value)"
  },
  "gen.throw(exception)": {
    "prefix": "genthrow",
    "body": [
      "${1:generator}.throw(${2})"
    ],
    "description": "throw() 方法用来向生成器抛出异常，并恢复生成器的执行，返回带有 done 及 value 两个属性的对象。\ngen.throw(exception)"
  }
}