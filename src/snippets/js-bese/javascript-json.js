/**
 * @Author: Sun Rising 
 * @Date: 2020-04-17 10:50:55 
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-18 08:33:07
 * @Description: 
 */
module.exports = {
  "JSON.parse(text[, reviver])": {
    prefix: "jsonpar",
    body: "JSON.parse($1)",
    description:
      "JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的reviver函数用以在返回之前对所得到的对象执行变换(操作)。"
  },
  "JSON.stringify(value[, replacer [, space]])": {
    prefix: "jsonstr",
    body: "JSON.stringify($1);$0",
    description:
      "JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串，如果指定了replacer是一个函数，则可以替换值，或者如果指定了replacer是一个数组，可选的仅包括指定的属性。"
  }
};
