/**
 * @Author: Sun Rising
 * @Date: 2020-02-17 16:25:28
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-18 21:31:58
 * @Description: 更新html-base代码段
 */
const fs = require('fs');
const chalk = require("chalk");
const request = require("request");
const cheerio = require('cheerio')

const base_url = "https://developer.mozilla.org"

let htmlBaseSnippets = require('./snippets/html/html-bese');
let htmlBaseSnippetsFile = './src/snippets/html/html-bese.js';
const snippets_html = base_url + "/zh-CN/docs/Web/HTML";

// 获取连接内容
function getHttpBody(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response) => {
            if (error !== null) reject(error)
            resolve(response.body)
        });
    });
}

async function resolveHtmlSnippets(html) {
    const $ = cheerio.load(html)
    let aTags = $("summary:contains('HTML elements')+ol>li:not(+span)>a")
    let aTagArray = Array.from(aTags);
    let newTags = []
    for (const aTag of aTagArray) {
        let htmlTagNameReg = /[a-zA-Z]*$/
        let htmlTagUrl = aTag.attribs.href
        let htmlTagName = htmlTagNameReg.exec(htmlTagUrl)[0]
        let htmlTagTitle = aTag.attribs.title
        if (htmlBaseSnippets.hasOwnProperty(htmlTagName)) {
            htmlBaseSnippets[htmlTagName].description = htmlTagTitle
        }
        newTags.push(htmlTagName)
    }
    // 删除过时的标签
    let currTags = Object.keys(htmlBaseSnippets)
    for (const tag of currTags) {
        if (!newTags.includes(tag))
            console.log("过时标签 " + tag);
    }
    return htmlBaseSnippets;
}

function writeFile(file, content) {
    let fileHead = 'module.exports = '
    fs.writeFile(file, fileHead + JSON.stringify(content, null, 2), (error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(chalk.bgGreen.white(`${file} Update Done!`));
    })
}


(async () => {
    try {
        // html-base
        let html_html = await getHttpBody(snippets_html)
        let html_str = await resolveHtmlSnippets(html_html)
        // writeFile(htmlBaseSnippetsFile, html_str)
    } catch (error) {
        console.log(error);
    }
})()
