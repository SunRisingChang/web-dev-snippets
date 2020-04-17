/**
 * @Author: Sun Rising 
 * @Date: 2020-04-17 10:50:55 
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-17 13:09:42
 * @Description: 
 */
module.exports = {
  "Promise.all()": {
    prefix: 'promall',
    body: 'Promise.all(${1})',
    description: 'Promise - Promise.all()'
  },
  "Promise.allSettled()": {
    prefix: 'promallSettled',
    body: 'Promise.allSettled(${1})',
    description: 'Promise - Promise.allSettled()'
  },
  "Promise.race()": {
    prefix: 'promrace',
    body: 'Promise.race(${1})',
    description: 'Promise - Promise.race()'
  },
  "Promise.reject()": {
    prefix: 'promreject',
    body: 'Promise.reject(${1})',
    description: 'Promise - Promise.reject()'
  },
  "Promise.resolve()": {
    prefix: 'promresolve',
    body: 'Promise.resolve(${1})',
    description: 'Promise - Promise.resolve()'
  },
  "Promise.prototype.catch()": {
    prefix: 'promcatch',
    body: '${1:promise}.catch(${2})',
    description: 'Promise - Promise.prototype.catch()'
  },
  "Promise.prototype.finally()": {
    prefix: 'promfinally',
    body: '${1:promise}.finally(${2})',
    description: 'Promise - Promise.prototype.finally()'
  },
  "Promise.prototype.then()": {
    prefix: 'promthen',
    body: '${1:promise}.then(${2})',
    description: 'Promise - Promise.prototype.then()'
  },
};
