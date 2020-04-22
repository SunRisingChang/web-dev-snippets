module.exports = {
  "Intl.getCanonicalLocales(locales)": {
    "prefix": "colgetcanonicallocales",
    "body": [
      "Intl.getCanonicalLocales(${2})"
    ],
    "description": "Intl.getCanonicalLocales() 方法返回一个数组，数组包含规范的区域语言代码，重复的元素将会被去除，每一个元素都会被验证为格式有效的区域语言代码。\nIntl.getCanonicalLocales(locales)"
  }
}