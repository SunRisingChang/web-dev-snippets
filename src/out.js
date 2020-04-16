let fs = require("fs");

/**
 * 获取符合要求的文件列表
 * @param {*} path 查找的根路径
 * @param {*} filesList 存放路径的容器
 * @param {*} reg 放入容器的正则表达式，匹配文件名称
 */
function readFileList(path, filesList, reg) {
  let files = fs.readdirSync(path);
  files.forEach(item => {
    let stat = fs.statSync(path + "/" + item);
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + "/" + item + "/", filesList, reg);
    } else {
      if (item.match(reg))
        filesList.push({
          path: path,
          filename: item
        });
    }
  });
}

/**
 * 写入文件
 * @param {*} path 文件路径
 * @param {*} languageId 语言id
 * @param {*} file_obj 写入对象
 */
function writeFile(path, languageId, file_obj) {
  let write_path = path + "/" + languageId + ".json";
  let writeFile = fs.writeFileSync(
    write_path,
    JSON.stringify(file_obj, null, 2),
    "utf8"
  );
  if (writeFile) {
    console.log("文件 " + write_path + " 写入失败! " + writeFile);
    return;
  }
  console.log("文件 " + write_path + " 写入成功! ");
}

/**
 * 整合输入
 * @param {*} languageId 语言id
 * @param {*} reg 正则表达式
 */
function out(languageId, reg) {
  let file_list = [];
  let file_obj = {};
  readFileList("src/snippets", file_list, reg);
  file_list.forEach(value => {
    let res = require("." + value.path.substring(3) + "/" + value.filename);
    file_obj = Object.assign(file_obj, res);
  });
  writeFile("snippets", languageId, file_obj);
}

out("javascript", /^javascript-.*/i);
out("html", /^html-.*/i);
