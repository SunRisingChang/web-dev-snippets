module.exports = {
  alert: {
    prefix: "alert",
    body: "alert($1);$0",
    description: "弹出提示信息。"
  },
  getElementsByClassName: {
    prefix: "getbycname",
    body: "getElementsByClassName(${1:'${2:className}'})$3",
    description: "通过ClassName 获取 DOM 结构"
  },
  getElementsByName: {
    prefix: "getbyname",
    body: "getElementsByName(${1:'${2:name}'})$3",
    description: "通过 Name 获取 DOM 结构"
  },
  getElementsByTagName: {
    prefix: "getbytname",
    body: "getElementsByTagName(${1:'${2:tagName}'})$3",
    description: "通过TagName获取DOM结构"
  },
  getElementById: {
    prefix: "getbyid",
    body: "getElementById(${1:'${2:id}'})$3",
    description: "通过Id获取DOM结构"
  },
  querySelector: {
    prefix: "querysel",
    body: "querySelector(${1:'${2:query}'})$3",
    description:
      "方法返回文档中匹配指定 CSS 选择器的一个元素。注意： querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。"
  },
  querySelectorAll: {
    prefix: "querysall",
    body: "querySelectorAll(${1:'${2:query}'})$3",
    description: "方法返回文档中匹配指定 CSS 选择器的一个元素"
  },
  setinterval: {
    prefix: "setint",
    body: ["setInterval(${2: ()=> {", "\t$3", "\\}}, ${1:10});"],
    description:
      "setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。"
  },
  setTimeout: {
    prefix: "settimeout",
    body: ["setTimeout(${2:function () {", "\t$3", "\\}}, ${1:10});"],
    description: "setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。"
  }
};
