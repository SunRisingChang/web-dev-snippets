module.exports = {
  "new Promise": {
    "prefix": "newpromise",
    "body": [
      "new Promise((resolve,reject)=>{${1}})"
    ],
    "description": "创建Promise对象"
  }
}