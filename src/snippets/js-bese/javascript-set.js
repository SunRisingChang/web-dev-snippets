/**
 * @Author: Sun Rising 
 * @Date: 2020-04-17 13:11:41 
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-17 13:14:21
 * @Description: 
 */
module.exports = {
  "Set.prototype.add()": {
    prefix: 'setadd',
    body: '${1:set}.add(${2})',
    description: 'Set - Set.prototype.add()'
  },
  "Set.prototype.clear()": {
    prefix: 'setclear',
    body: '${1:set}.clear(${2})',
    description: 'Set - Set.prototype.clear()'
  },
  "Set.prototype.delete()": {
    prefix: 'setdelete',
    body: '${1:set}.delete(${2})',
    description: 'Set - Set.prototype.delete()'
  },
  "Set.prototype.entries()": {
    prefix: 'setentries',
    body: '${1:set}.entries(${2})',
    description: 'Set - Set.prototype.entries()'
  },
  "Set.prototype.forEach()": {
    prefix: 'setforEach',
    body: '${1:set}.forEach(${2})',
    description: 'Set - Set.prototype.forEach()'
  },
  "Set.prototype.has()": {
    prefix: 'sethas',
    body: '${1:set}.has(${2})',
    description: 'Set - Set.prototype.has()'
  },
  "Set.prototype.values()": {
    prefix: 'setvalues',
    body: '${1:set}.values(${2})',
    description: 'Set - Set.prototype.values()'
  },
};
