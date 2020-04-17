/**
 * @Author: Sun Rising 
 * @Date: 2020-04-17 10:50:55 
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-17 11:38:20
 * @Description: 
 */
module.exports = {
  "Number.isFinite()": {
    prefix: 'numisfinite',
    body: 'Number.isFinite(${1})',
    description: 'Number - Number.isFinite()'
  },
  "Number.isInteger()": {
    prefix: 'numisinteger',
    body: 'Number.isInteger(${1})',
    description: 'Number - Number.isInteger()'
  },
  "Number.isNaN()": {
    prefix: 'numisnan',
    body: 'Number.isNaN(${1})',
    description: 'Number - Number.isNaN()'
  },
  "Number.isSafeInteger()": {
    prefix: 'numissafeinteger',
    body: 'Number.isSafeInteger(${1})',
    description: 'Number - Number.isSafeInteger()'
  },
  "Number.parseFloat()": {
    prefix: 'numparsefloat',
    body: 'Number.parseFloat(${1})',
    description: 'Number - Number.parseFloat()'
  },
  "Number.parseInt()": {
    prefix: 'numparseint',
    body: 'Number.parseInt(${1})',
    description: 'Number - Number.parseInt()'
  },
  "Number.prototype.toExponential()": {
    prefix: 'numtoexponential',
    body: '${1:number}.toExponential(${2})',
    description: 'Number - Number.prototype.toExponential()'
  },
  "Number.prototype.toFixed()": {
    prefix: 'numtofixed',
    body: '${1:number}.toFixed(${2})',
    description: 'Number - Number.prototype.toFixed()'
  },
  "Number.prototype.toLocaleString()": {
    prefix: 'numtolocalestring',
    body: '${1:number}.toLocaleString(${2})',
    description: 'Number - Number.prototype.toLocaleString()'
  },
  "Number.prototype.toPrecision()": {
    prefix: 'numtoprecision',
    body: '${1:number}.toPrecision(${2})',
    description: 'Number - Number.prototype.toPrecision()'
  },
  "Number.prototype.toSource()": {
    prefix: 'numtosource',
    body: '${1:number}.toSource(${2})',
    description: 'Number - Number.prototype.toSource()'
  },
  "Number.prototype.toString()": {
    prefix: 'numtostring',
    body: '${1:number}.toString(${2})',
    description: 'Number - Number.prototype.toString()'
  },
  "Number.prototype.valueOf()": {
    prefix: 'numvalueof',
    body: '${1:number}.valueOf(${2})',
    description: 'Number - Number.prototype.valueOf()'
  }
};
