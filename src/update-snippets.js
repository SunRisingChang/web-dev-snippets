/**
 * @Author: Sun Rising
 * @Date: 2020-02-17 16:25:28
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2020-04-22 11:46:26
 * @Description: 更新js代码段爬虫
 */
const fs = require('fs');
const chalk = require("chalk");
const request = require("request");
const cheerio = require('cheerio');

const base_url = "http://developer.mozilla.org"
const js_url = "/zh-CN/docs/Web/JavaScript";

// 不拉取的js对象
const blacklist = ['Proxy']

// 更新Js代码段
async function updateSnippets() {
    let htmlTagNameReg = /[a-z0-9A-Z]*$/
    let javaScriptObjectHtml = await getHttpBody(base_url + js_url)
    const $_j_s_o_h = cheerio.load(javaScriptObjectHtml);
    let a_tags_jsoh = $_j_s_o_h("summary:contains('内置对象')+ol>li:not(:has(span))>a")
    let a_tag_jsoh_array = Array.from(a_tags_jsoh);
    for (const a_tag_jsoh of a_tag_jsoh_array) {
        // js 内置方法数组
        let javaScriptObjectArray = {};
        let htmlTagUrl = a_tag_jsoh.attribs.href
        let htmlTagNameO = htmlTagNameReg.exec(htmlTagUrl)[0]
        if (blacklist.includes(htmlTagNameO)) continue;
        // 获取内置对象方法列表
        let javaScriptFunHtml = await getHttpBody(base_url + htmlTagUrl)
        const $_j_s_f_h = cheerio.load(javaScriptFunHtml);
        let a_tags_jsfh = $_j_s_f_h("li[data-default-state='open']>a:contains('方法')+ol>li:not(:has(span))>a")
        let a_tag_jsfh_array = Array.from(a_tags_jsfh);
        for (const a_tag_jsfh of a_tag_jsfh_array) {
            let htmlTagUrl = a_tag_jsfh.attribs.href
            let htmlTagNameF = htmlTagNameReg.exec(htmlTagUrl)[0]
            if (htmlTagUrl.includes('@')) continue;
            let objectDetailsFunHtml = await getHttpBody(base_url + htmlTagUrl);
            const $_j_s_d_h = cheerio.load(objectDetailsFunHtml)
            // 是否汉化
            let isHanHua = $_j_s_d_h('#wikiArticle>h2:contains(Syntax)').length == 0;
            let desc = $_j_s_d_h("#wikiArticle>p").eq(0)
            let fun = $_j_s_d_h(`#wikiArticle>h2:contains(${isHanHua ? '语法' : 'Syntax'})+pre`).eq(0)

            let title = fun.text().trim();
            let prefix = ((htmlTagNameO.length > 3 ? htmlTagNameO.substring(0, 3) : htmlTagNameO) + htmlTagNameF).toLocaleLowerCase().trim();
            let body = getSnippetBody(fun.text().trim(), htmlTagNameO)
            let description = desc.text().trim() + '\n' + title
            if (body) {
                javaScriptObjectArray[title] = {
                    prefix: prefix,
                    body: [body],
                    description: description
                }
                console.log(chalk.white.bold(`${htmlTagNameO}-->${htmlTagNameF}--> OK!`));
            }
        }
        if (Object.keys(javaScriptObjectArray).length == 0) continue;
        let fileUrl = `./src/snippets/js-base/JavaScript-${htmlTagNameO.toLocaleLowerCase()}.js`
        writeFile(fileUrl, javaScriptObjectArray);
    }
}

// 写入文件
function writeFile(file, content) {
    let fileHead = 'module.exports = '
    fs.writeFile(file, fileHead + JSON.stringify(content, null, 2), (error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(chalk.green.bold(`${file} Update Done!`));
    })
}

// 获取连接的html
function getHttpBody(url) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'GET',
            proxy: 'http://127.0.0.1:10809',
            headers: {
                "Connection": "keep-alive",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
            }
        }, (error, response) => {
            if (error !== null) reject(error)
            resolve(response.body)
        });
    });
}

// 获取代码体
function getSnippetBody(fun, obj) {
    if (!fun) return ''
    let snippetBodyReg = /([a-zA-z]*)(\.[a-z0-9A-z\s]*\()([\s\S]*)(\))/
    let snippetBodyRegArray = snippetBodyReg.exec(fun);
    let body1 = /^[A-Z].*$/.test(snippetBodyRegArray[1]) ? snippetBodyRegArray[1] : "${1:" + obj.toLocaleLowerCase() + "}"
    let body2 = snippetBodyRegArray[2].replace(/\s/g, '')
    let body3 = snippetBodyRegArray[3].trim().length > 0 ? '${2}' : ''
    let body4 = snippetBodyRegArray[4].replace(/\s/g, '')
    return body1 + body2 + body3 + body4;
}

updateSnippets()
