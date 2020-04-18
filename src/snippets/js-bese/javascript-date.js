/**
 * @Author: Sun Rising 
 * @Date: 2020-04-17 10:50:55 
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-18 08:32:32
 * @Description: 
 */
module.exports = {
  "Date.UTC()": {
    prefix: "dateutc",
    body: "Date.UTC(${1})",
    description: 'Date - Date.UTC()'
  },
  "Date.now()": {
    prefix: "datenow",
    body: "Date.now(${1})",
    description: 'Date - Date.now()'
  },
  "Date.parse()": {
    prefix: "dateparse",
    body: "Date.parse(${1})",
    description: 'Date - Date.parse()'
  },
  "Date.prototype.getDate()": {
    prefix: "dategetdate",
    body: "${1:date}.getDate(${2})",
    description: 'Date - Date.prototype.getDate()'
  },
  "Date.prototype.getDay()": {
    prefix: "dategetday",
    body: "${1:date}.getDay(${2})",
    description: 'Date - Date.prototype.getDay()'
  },
  "Date.prototype.getFullYear()": {
    prefix: "dategetfullyear",
    body: "${1:date}.getFullYear(${2})",
    description: 'Date - Date.prototype.getFullYear()'
  },
  "Date.prototype.getHours()": {
    prefix: "dategethours",
    body: "${1:date}.getHours(${2})",
    description: 'Date - Date.prototype.getHours()'
  },
  "Date.prototype.getMilliseconds()": {
    prefix: "dategetmilliseconds",
    body: "${1:date}.getMilliseconds(${2})",
    description: 'Date - Date.prototype.getMilliseconds()'
  },
  "Date.prototype.getMinutes()": {
    prefix: "dategetminutes",
    body: "${1:date}.getMinutes(${2})",
    description: 'Date - Date.prototype.getMinutes()'
  },
  "Date.prototype.getMonth()": {
    prefix: "dategetmonth",
    body: "${1:date}.getMonth(${2})",
    description: 'Date - Date.prototype.getMonth()'
  },
  "Date.prototype.getSeconds()": {
    prefix: "dategetseconds",
    body: "${1:date}.getSeconds(${2})",
    description: 'Date - Date.prototype.getSeconds()'
  },
  "Date.prototype.getTime()": {
    prefix: "dategettime",
    body: "${1:date}.getTime(${2})",
    description: 'Date - Date.prototype.getTime()'
  },
  "Date.prototype.getTimezoneOffset()": {
    prefix: "dategettimezoneoffset",
    body: "${1:date}.getTimezoneOffset(${2})",
    description: 'Date - Date.prototype.getTimezoneOffset()'
  },
  "Date.prototype.getUTCDate()": {
    prefix: "dategetutcdate",
    body: "${1:date}.getUTCDate(${2})",
    description: 'Date - Date.prototype.getUTCDate()'
  },
  "Date.prototype.getUTCDay()": {
    prefix: "dategetutcday",
    body: "${1:date}.getUTCDay(${2})",
    description: 'Date - Date.prototype.getUTCDay()'
  },
  "Date.prototype.getUTCFullYear()": {
    prefix: "dategetutcfullyear",
    body: "${1:date}.getUTCFullYear(${2})",
    description: 'Date - Date.prototype.getUTCFullYear()'
  },
  "Date.prototype.getUTCHours()": {
    prefix: "dategetutchours",
    body: "${1:date}.getUTCHours(${2})",
    description: 'Date - Date.prototype.getUTCHours()'
  },
  "Date.prototype.getUTCMilliseconds()": {
    prefix: "dategetutcmilliseconds",
    body: "${1:date}.getUTCMilliseconds(${2})",
    description: 'Date - Date.prototype.getUTCMilliseconds()'
  },
  "Date.prototype.getUTCMinutes()": {
    prefix: "dategetutcminutes",
    body: "${1:date}.getUTCMinutes(${2})",
    description: 'Date - Date.prototype.getUTCMinutes()'
  },
  "Date.prototype.getUTCMonth()": {
    prefix: "dategetutcmonth",
    body: "${1:date}.getUTCMonth(${2})",
    description: 'Date - Date.prototype.getUTCMonth()'
  },
  "Date.prototype.getUTCSeconds()": {
    prefix: "dategetutcseconds",
    body: "${1:date}.getUTCSeconds(${2})",
    description: 'Date - Date.prototype.getUTCSeconds()'
  },
  "Date.prototype.setDate()": {
    prefix: "datesetdate",
    body: "${1:date}.setDate(${2})",
    description: 'Date - Date.prototype.setDate()'
  },
  "Date.prototype.setFullYear()": {
    prefix: "datesetfullyear",
    body: "${1:date}.setFullYear(${2})",
    description: 'Date - Date.prototype.setFullYear()'
  },
  "Date.prototype.setHours()": {
    prefix: "datesethours",
    body: "${1:date}.setHours(${2})",
    description: 'Date - Date.prototype.setHours()'
  },
  "Date.prototype.setMilliseconds()": {
    prefix: "datesetmilliseconds",
    body: "${1:date}.setMilliseconds(${2})",
    description: 'Date - Date.prototype.setMilliseconds()'
  },
  "Date.prototype.setMinutes()": {
    prefix: "datesetminutes",
    body: "${1:date}.setMinutes(${2})",
    description: 'Date - Date.prototype.setMinutes()'
  },
  "Date.prototype.setMonth()": {
    prefix: "datesetmonth",
    body: "${1:date}.setMonth(${2})",
    description: 'Date - Date.prototype.setMonth()'
  },
  "Date.prototype.setSeconds()": {
    prefix: "datesetseconds",
    body: "${1:date}.setSeconds(${2})",
    description: 'Date - Date.prototype.setSeconds()'
  },
  "Date.prototype.setTime()": {
    prefix: "datesettime",
    body: "${1:date}.setTime(${2})",
    description: 'Date - Date.prototype.setTime()'
  },
  "Date.prototype.setUTCDate()": {
    prefix: "datesetutcdate",
    body: "${1:date}.setUTCDate(${2})",
    description: 'Date - Date.prototype.setUTCDate()'
  },
  "Date.prototype.setUTCFullYear()": {
    prefix: "datesetutcfullyear",
    body: "${1:date}.setUTCFullYear(${2})",
    description: 'Date - Date.prototype.setUTCFullYear()'
  },
  "Date.prototype.setUTCHours()": {
    prefix: "datesetutchours",
    body: "${1:date}.setUTCHours(${2})",
    description: 'Date - Date.prototype.setUTCHours()'
  },
  "Date.prototype.setUTCMilliseconds()": {
    prefix: "datesetutcmilliseconds",
    body: "${1:date}.setUTCMilliseconds(${2})",
    description: 'Date - Date.prototype.setUTCMilliseconds()'
  },
  "Date.prototype.setUTCMinutes()": {
    prefix: "datesetutcminutes",
    body: "${1:date}.setUTCMinutes(${2})",
    description: 'Date - Date.prototype.setUTCMinutes()'
  },
  "Date.prototype.setUTCMonth()": {
    prefix: "datesetutcmonth",
    body: "${1:date}.setUTCMonth(${2})",
    description: 'Date - Date.prototype.setUTCMonth()'
  },
  "Date.prototype.setUTCSeconds()": {
    prefix: "datesetutcseconds",
    body: "${1:date}.setUTCSeconds(${2})",
    description: 'Date - Date.prototype.setUTCSeconds()'
  },
  "Date.prototype.toDateString()": {
    prefix: "datetodatestring",
    body: "${1:date}.toDateString(${2})",
    description: 'Date - Date.prototype.toDateString()'
  },
  "Date.prototype.toISOString()": {
    prefix: "datetoisostring",
    body: "${1:date}.toISOString(${2})",
    description: 'Date - Date.prototype.toISOString()'
  },
  "Date.prototype.toJSON()": {
    prefix: "datetojson",
    body: "${1:date}.toJSON(${2})",
    description: 'Date - Date.prototype.toJSON()'
  },
  "Date.prototype.toLocaleDateString()": {
    prefix: "datetolocaledatestring",
    body: "${1:date}.toLocaleDateString(${2})",
    description: 'Date - Date.prototype.toLocaleDateString()'
  },
  "Date.prototype.toLocaleString()": {
    prefix: "datetolocalestring",
    body: "${1:date}.toLocaleString(${2})",
    description: 'Date - Date.prototype.toLocaleString()'
  },
  "Date.prototype.toLocaleTimeString()": {
    prefix: "datetolocaletimestring",
    body: "${1:date}.toLocaleTimeString(${2})",
    description: 'Date - Date.prototype.toLocaleTimeString()'
  },
  "Date.prototype.toSource()": {
    prefix: "datetosource",
    body: "${1:date}.toSource(${2})",
    description: 'Date - Date.prototype.toSource()'
  },
  "Date.prototype.toString()": {
    prefix: "datetostring",
    body: "${1:date}.toString(${2})",
    description: 'Date - Date.prototype.toString()'
  },
  "Date.prototype.toTimeString()": {
    prefix: "datetotimestring",
    body: "${1:date}.toTimeString(${2})",
    description: 'Date - Date.prototype.toTimeString()'
  },
  "Date.prototype.toUTCString()": {
    prefix: "datetoutcstring",
    body: "${1:date}.toUTCString(${2})",
    description: 'Date - Date.prototype.toUTCString()'
  },
  "Date.prototype.valueOf()": {
    prefix: "datevalueof",
    body: "${1:date}.valueOf(${2})",
    description: 'Date - Date.prototype.valueOf()'
  }
};
