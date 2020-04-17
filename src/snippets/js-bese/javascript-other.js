/**
 * @Author: Sun Rising 
 * @Date: 2020-04-17 13:22:24 
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-17 13:26:06
 * @Description: 
 */
module.exports = {
  "decodeURI()": {
    prefix: 'decodeuri',
    body: 'decodeURI(${1})',
    description: 'decodeURI()'
  },
  "decodeURIComponent()": {
    prefix: 'decodeuricomponent',
    body: 'decodeURIComponent(${1})',
    description: 'decodeURIComponent()'
  },
  "encodeURI()": {
    prefix: 'encodeuri',
    body: 'encodeURI(${1})',
    description: 'encodeURI()'
  },
  "encodeURIComponent()": {
    prefix: 'encodeuricomponent',
    body: 'encodeURIComponent(${1})',
    description: 'encodeURIComponent()'
  },
  "eval()": {
    prefix: 'eval',
    body: 'eval(${1})',
    description: 'eval()'
  },
  "globalThis": {
    prefix: 'globalth',
    body: 'globalThi${1}s',
    description: 'globalThis'
  },
  "isFinite()": {
    prefix: 'isfinite',
    body: 'isFinite(${1})',
    description: 'isFinite()'
  },
  "isNaN()": {
    prefix: 'isnan',
    body: 'isNaN(${1})',
    description: 'isNaN()'
  },
  "parseFloat()": {
    prefix: 'parsefloat',
    body: 'parseFloat(${1})',
    description: 'parseFloat()'
  },
  "parseInt()": {
    prefix: 'parseint',
    body: 'parseInt(${1})',
    description: 'parseInt()'
  }
};
