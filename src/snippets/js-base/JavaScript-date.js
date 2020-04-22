module.exports = {
  "Date.UTC(year,month[,date[,hrs[,min[,sec[,ms]]]]])": {
    "prefix": "datutc",
    "body": [
      "Date.UTC(${2})"
    ],
    "description": "Date.UTC() 方法接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。\nDate.UTC(year,month[,date[,hrs[,min[,sec[,ms]]]]])"
  },
  "var timeInMs = Date.now();": {
    "prefix": "datnow",
    "body": [
      "Date.now()"
    ],
    "description": "Date.now() 方法返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。\nvar timeInMs = Date.now();"
  },
  "dateObj.getDate()": {
    "prefix": "datgetdate",
    "body": [
      "${1:date}.getDate()"
    ],
    "description": "根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从1--31）。\ndateObj.getDate()"
  },
  "dateObj.getDay()": {
    "prefix": "datgetday",
    "body": [
      "${1:date}.getDay()"
    ],
    "description": "getDay() 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。对于某个月中的第几天，参考Date.prototype.getDate().\ndateObj.getDay()"
  },
  "dateObj.getFullYear()": {
    "prefix": "datgetfullyear",
    "body": [
      "${1:date}.getFullYear()"
    ],
    "description": "getFullYear() 方法根据本地时间返回指定日期的年份。\ndateObj.getFullYear()"
  },
  "dateObj.getHours()": {
    "prefix": "datgethours",
    "body": [
      "${1:date}.getHours()"
    ],
    "description": "getHours() 方法根据本地时间，返回一个指定的日期对象的小时。\ndateObj.getHours()"
  },
  "dateObj.getMilliseconds()": {
    "prefix": "datgetmilliseconds",
    "body": [
      "${1:date}.getMilliseconds()"
    ],
    "description": "getMilliseconds() 方法，根据本地时间，返回一个指定的日期对象的毫秒数。\ndateObj.getMilliseconds()"
  },
  "dateObj.getMinutes()": {
    "prefix": "datgetminutes",
    "body": [
      "${1:date}.getMinutes()"
    ],
    "description": "getMinutes() 方法根据本地时间，返回一个指定的日期对象的分钟数。\ndateObj.getMinutes()"
  },
  "dateObj.getMonth()": {
    "prefix": "datgetmonth",
    "body": [
      "${1:date}.getMonth()"
    ],
    "description": "根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）。\ndateObj.getMonth()"
  },
  "dateObj.getSeconds()": {
    "prefix": "datgetseconds",
    "body": [
      "${1:date}.getSeconds()"
    ],
    "description": "getSeconds() 方法根据本地时间，返回一个指定的日期对象的秒数。\ndateObj.getSeconds()"
  },
  "dateObj.getTime()": {
    "prefix": "datgettime",
    "body": [
      "${1:date}.getTime()"
    ],
    "description": "getTime() 方法返回一个时间的格林威治时间数值。\ndateObj.getTime()"
  },
  "dateObj.getTimezoneOffset()": {
    "prefix": "datgettimezoneoffset",
    "body": [
      "${1:date}.getTimezoneOffset()"
    ],
    "description": "getTimezoneOffset() 方法返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。\ndateObj.getTimezoneOffset()"
  },
  "dateObj.getUTCDate()": {
    "prefix": "datgetutcdate",
    "body": [
      "${1:date}.getUTCDate()"
    ],
    "description": "getUTCDate() 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天\ndateObj.getUTCDate()"
  },
  "dateObj.getUTCDay()": {
    "prefix": "datgetutcday",
    "body": [
      "${1:date}.getUTCDay()"
    ],
    "description": "getUTCDay() 方法以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。\ndateObj.getUTCDay()"
  },
  "dateObj.getUTCFullYear()": {
    "prefix": "datgetutcfullyear",
    "body": [
      "${1:date}.getUTCFullYear()"
    ],
    "description": "getUTCFullYear() 以世界时为标准，返回一个指定的日期对象的年份。\ndateObj.getUTCFullYear()"
  },
  "dateObj.getUTCHours()": {
    "prefix": "datgetutchours",
    "body": [
      "${1:date}.getUTCHours()"
    ],
    "description": "getUTCHours() 方法以世界时为标准，返回一个指定的日期对象的小时数。\ndateObj.getUTCHours()"
  },
  "dateObj.getUTCMilliseconds()": {
    "prefix": "datgetutcmilliseconds",
    "body": [
      "${1:date}.getUTCMilliseconds()"
    ],
    "description": "getUTCMilliseconds() 方法以世界时为标准，返回一个指定的日期对象的毫秒数。\ndateObj.getUTCMilliseconds()"
  },
  "dateObj.getUTCMinutes()": {
    "prefix": "datgetutcminutes",
    "body": [
      "${1:date}.getUTCMinutes()"
    ],
    "description": "getUTCMinutes() 方法以世界时为标准，返回一个指定的日期对象的分钟数。\ndateObj.getUTCMinutes()"
  },
  "dateObj.getUTCMonth()": {
    "prefix": "datgetutcmonth",
    "body": [
      "${1:date}.getUTCMonth()"
    ],
    "description": "getUTCMonth() 方法以世界时为标准，返回一个指定的日期对象的月份，它是从 0 开始计数的（0 代表一年的第一个月）。\ndateObj.getUTCMonth()"
  },
  "dateObj.getUTCSeconds()": {
    "prefix": "datgetutcseconds",
    "body": [
      "${1:date}.getUTCSeconds()"
    ],
    "description": "getUTCSeconds() 方法以世界时为标准，返回一个指定的日期对象的秒数。\ndateObj.getUTCSeconds()"
  },
  "dateObj.setDate(dayValue)": {
    "prefix": "datsetdate",
    "body": [
      "${1:date}.setDate(${2})"
    ],
    "description": "setDate() 方法根据本地时间来指定一个日期对象的天数。\ndateObj.setDate(dayValue)"
  },
  "dateObj.setFullYear(yearValue[, monthValue[, dayValue]])": {
    "prefix": "datsetfullyear",
    "body": [
      "${1:date}.setFullYear(${2})"
    ],
    "description": "setFullYear() 方法根据本地时间为一个日期对象设置年份。\ndateObj.setFullYear(yearValue[, monthValue[, dayValue]])"
  },
  "dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])": {
    "prefix": "datsethours",
    "body": [
      "${1:date}.setHours(${2})"
    ],
    "description": "setHours() 方法根据本地时间为一个日期对象设置小时数，返回从1970-01-01 00:00:00 UTC 到更新后的 日期 对象实例所表示时间的毫秒数。\ndateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])"
  },
  "dateObj.setMilliseconds(millisecondsValue)": {
    "prefix": "datsetmilliseconds",
    "body": [
      "${1:date}.setMilliseconds(${2})"
    ],
    "description": "setMilliseconds() 方法会根据本地时间设置一个日期对象的豪秒数。\ndateObj.setMilliseconds(millisecondsValue)"
  },
  "dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])": {
    "prefix": "datsetminutes",
    "body": [
      "${1:date}.setMinutes(${2})"
    ],
    "description": "setMinutes() 方法根据本地时间为一个日期对象设置分钟数。\ndateObj.setMinutes(minutesValue[, secondsValue[, msValue]])"
  },
  "dateObj.setMonth(monthValue[, dayValue])": {
    "prefix": "datsetmonth",
    "body": [
      "${1:date}.setMonth(${2})"
    ],
    "description": "setMonth() 方法根据本地时间为一个设置年份的日期对象设置月份。\ndateObj.setMonth(monthValue[, dayValue])"
  },
  "dateObj.setSeconds(secondsValue[, msValue])": {
    "prefix": "datsetseconds",
    "body": [
      "${1:date}.setSeconds(${2})"
    ],
    "description": "setSeconds() 方法根据本地时间设置一个日期对象的秒数。\ndateObj.setSeconds(secondsValue[, msValue])"
  },
  "dateObj.setTime(timeValue)": {
    "prefix": "datsettime",
    "body": [
      "${1:date}.setTime(${2})"
    ],
    "description": "setTime() 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。\ndateObj.setTime(timeValue)"
  },
  "dateObj.setUTCDate(dayValue)": {
    "prefix": "datsetutcdate",
    "body": [
      "${1:date}.setUTCDate(${2})"
    ],
    "description": "setUTCDate() 方法就是根据全球时间设置特定date对象的日期。\ndateObj.setUTCDate(dayValue)"
  },
  "dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])": {
    "prefix": "datsetutcfullyear",
    "body": [
      "${1:date}.setUTCFullYear(${2})"
    ],
    "description": "setUTCFullYear() 方法根据世界标准时间为一个具体日期设置年份。\ndateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])"
  },
  "dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])": {
    "prefix": "datsetutchours",
    "body": [
      "${1:date}.setUTCHours(${2})"
    ],
    "description": "The setUTCHours() method sets the hour for a specified date according to universal time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance.\ndateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])"
  },
  "dateObj.setUTCMilliseconds(millisecondsValue)": {
    "prefix": "datsetutcmilliseconds",
    "body": [
      "${1:date}.setUTCMilliseconds(${2})"
    ],
    "description": "setUTCMilliseconds() 方法会根据世界时来设置指定时间的毫秒数。\ndateObj.setUTCMilliseconds(millisecondsValue)"
  },
  "dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])": {
    "prefix": "datsetutcminutes",
    "body": [
      "${1:date}.setUTCMinutes(${2})"
    ],
    "description": "setUTCMinutes()方法会根据世界协调时（UTC）来设置指定日期的分钟数。\ndateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])"
  },
  "dateObj.setUTCMonth(monthValue[, dayValue])": {
    "prefix": "datsetutcmonth",
    "body": [
      "${1:date}.setUTCMonth(${2})"
    ],
    "description": "setUTCMonth()方法根据通用的时间来设置一个准确的月份\ndateObj.setUTCMonth(monthValue[, dayValue])"
  },
  "dateObj.setUTCSeconds(secondsValue[, msValue])": {
    "prefix": "datsetutcseconds",
    "body": [
      "${1:date}.setUTCSeconds(${2})"
    ],
    "description": "此 setUTCSeconds() 方法为一个依据国际通用时间的特定日期设置秒数。\ndateObj.setUTCSeconds(secondsValue[, msValue])"
  },
  "dateObj.toDateString()": {
    "prefix": "dattodatestring",
    "body": [
      "${1:date}.toDateString()"
    ],
    "description": "toDateString() 方法以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。\ndateObj.toDateString()"
  },
  "dateObj.toISOString()": {
    "prefix": "dattoisostring",
    "body": [
      "${1:date}.toISOString()"
    ],
    "description": "toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。\ndateObj.toISOString()"
  },
  "dateObj.toJSON()": {
    "prefix": "dattojson",
    "body": [
      "${1:date}.toJSON()"
    ],
    "description": "toJSON() 方法返回 Date 对象的字符串形式。\ndateObj.toJSON()"
  },
  "dateObj.toLocaleDateString([locales [, options]])": {
    "prefix": "dattolocaledatestring",
    "body": [
      "${1:date}.toLocaleDateString(${2})"
    ],
    "description": "toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。\ndateObj.toLocaleDateString([locales [, options]])"
  },
  "dateObj.toLocaleString([locales [, options]])": {
    "prefix": "dattolocalestring",
    "body": [
      "${1:date}.toLocaleString(${2})"
    ],
    "description": "toLocaleString() 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。\ndateObj.toLocaleString([locales [, options]])"
  },
  "dateObj.toLocaleTimeString([locales [, options]])": {
    "prefix": "dattolocaletimestring",
    "body": [
      "${1:date}.toLocaleTimeString(${2})"
    ],
    "description": "The toLocaleTimeString() 方法返回该日期对象时间部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。\ndateObj.toLocaleTimeString([locales [, options]])"
  },
  "dateObj.toSource()\nDate.toSource()": {
    "prefix": "dattosource",
    "body": [
      "${1:date}.toSource(${2})"
    ],
    "description": "toSource() 返回表示源代码的字符串。\ndateObj.toSource()\nDate.toSource()"
  },
  "dateObj.toString()": {
    "prefix": "dattostring",
    "body": [
      "${1:date}.toString()"
    ],
    "description": "toString() 方法返回一个字符串，表示该Date对象。\ndateObj.toString()"
  },
  "dateObj.toTimeString()": {
    "prefix": "dattotimestring",
    "body": [
      "${1:date}.toTimeString()"
    ],
    "description": "toTimeString() 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。\ndateObj.toTimeString()"
  },
  "dateObj.toUTCString()": {
    "prefix": "dattoutcstring",
    "body": [
      "${1:date}.toUTCString()"
    ],
    "description": "toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区。\ndateObj.toUTCString()"
  },
  "dateObj.valueOf()": {
    "prefix": "datvalueof",
    "body": [
      "${1:date}.valueOf()"
    ],
    "description": "valueOf() 方法返回一个 Date 对象的原始值。\ndateObj.valueOf()"
  }
}