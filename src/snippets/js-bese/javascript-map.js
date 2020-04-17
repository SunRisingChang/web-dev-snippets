/**
 * @Author: Sun Rising 
 * @Date: 2020-04-17 10:50:55 
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-17 11:25:36
 * @Description: 
 */
module.exports = {
  "Map.prototype.clear()": {
    prefix: "mapclear",
    body: '${1:map}.clear(${2})',
    description: 'Map - Map.prototype.clear()'
  },
  "Map.prototype.delete()": {
    prefix: "mapdelete",
    body: '${1:map}.delete(${2})',
    description: 'Map - Map.prototype.delete()'
  },
  "Map.prototype.entries()": {
    prefix: "mapentries",
    body: '${1:map}.entries(${2})',
    description: 'Map - Map.prototype.entries()'
  },
  "Map.prototype.forEach()": {
    prefix: "mapforeach",
    body: '${1:map}.forEach(${2})',
    description: 'Map - Map.prototype.forEach()'
  },
  "Map.prototype.get()": {
    prefix: "mapget",
    body: '${1:map}.get(${2})',
    description: 'Map - Map.prototype.get()'
  },
  "Map.prototype.has()": {
    prefix: "maphas",
    body: '${1:map}.has(${2})',
    description: 'Map - Map.prototype.has()'
  },
  "Map.prototype.keys()": {
    prefix: "mapkeys",
    body: '${1:map}.keys(${2})',
    description: 'Map - Map.prototype.keys()'
  },
  "Map.prototype.set()": {
    prefix: "mapset",
    body: '${1:map}.set(${2})',
    description: 'Map - Map.prototype.set()'
  },
  "Map.prototype.values()": {
    prefix: "mapvalues",
    body: '${1:map}.values(${2})',
    description: 'Map - Map.prototype.values()'
  }
};
