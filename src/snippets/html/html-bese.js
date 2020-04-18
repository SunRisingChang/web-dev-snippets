module.exports = {
  "doctype": {
    "prefix": "doctype",
    "body": [
      "<!DOCTYPE HTML>",
      "$1"
    ],
    "description": "HTML - HTML5 文件声明头。"
  },
  "a": {
    "prefix": "a",
    "body": "<a href=\"$1\">$2</a>$3",
    "description": "HTML <a> 元素（或称锚元素）可以创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。"
  },
  "abbr": {
    "prefix": "abbr",
    "body": "<abbr title=\"$1\">$2</abbr>$3",
    "description": "HTML 缩写元素（<abbr>）用于展示缩写，并且可以通过可选的 title 属性提供完整的描述。"
  },
  "address": {
    "prefix": "address",
    "body": [
      "<address>",
      "$1",
      "</address>"
    ],
    "description": "HTML <address> 元素 表示其中的 HTML 提供了某个人或某个组织（等等）的联系信息。"
  },
  "area": {
    "prefix": "area",
    "body": "<area shape=\"$1\" coords=\"$2\" href=\"$3\" alt=\"$4\">$5",
    "description": "Technical review completed. Editorial review completed."
  },
  "article": {
    "prefix": "article",
    "body": [
      "<article>",
      "\t$1",
      "</article>"
    ],
    "description": "HTML <article>元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。​​"
  },
  "aside": {
    "prefix": "aside",
    "body": [
      "<aside>",
      "\t$1",
      "</aside>$2"
    ],
    "description": "HTML <aside> 元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。"
  },
  "audio": {
    "prefix": "audio",
    "body": [
      "<audio controls>",
      "\t$1",
      "</audio>"
    ],
    "description": "HTML <audio> 元素用于在文档中表示音频内容。 <audio> 元素可以包含多个音频资源， 这些音频资源可以使用 src 属性或者<source> 元素来进行描述； 浏览器将会选择最合适的一个来使用。对于不支持<audio>元素的浏览器，<audio>元素也可以作为浏览器不识别的内容加入到文档中。"
  },
  "b": {
    "prefix": "b",
    "body": "<b>$1</b>$2",
    "description": "HTML提醒注意（Bring Attention To）元素（<b>）用于吸引读者的注意到该元素的内容上（如果没有另加特别强调）。这个元素过去被认为是粗体（Boldface）元素，并且大多数浏览器仍然将文字显示为粗体。尽管如此，你不应将 <b> 元素用于显示粗体文字；替代方案是使用 CSS font-weight 属性来创建粗体文字。"
  },
  "base": {
    "prefix": "base",
    "body": "<base href=\"$1\" target=\"$2\">$3",
    "description": "HTML <base> 元素 指定用于一个文档中包含的所有相对 URL 的根 URL。一份中只能有一个 <base> 元素。"
  },
  "bdi": {
    "prefix": "bdi",
    "body": "<bdi>$1</bdi>$2",
    "description": ""
  },
  "bdo": {
    "prefix": "bdo",
    "body": [
      "<bdo dir=\"$1\">",
      "$2",
      "</bdo>"
    ],
    "description": "<bdo> 元素 (HTML双向覆盖元素)用于覆盖当前文本的朝向，它使得字符按给定的方向排列。"
  },
  "blockquote": {
    "prefix": "blockquote",
    "body": [
      "<blockquote cite=\"$2\">",
      "\t$1",
      "</blockquote>"
    ],
    "description": "HTML <blockquote> 元素（或者 HTML 块级引用元素），代表其中的文字是引用内容。通常在渲染时，这部分的内容会有一定的缩进（注 中说明了如何更改）。若引文来源于网络，则可以将原内容的出处 URL 地址设置到 cite 特性上，若要以文本的形式告知读者引文的出处时，可以通过 <cite> 元素。"
  },
  "body": {
    "prefix": "body",
    "body": [
      "<body>",
      "\t$1",
      "</body>"
    ],
    "description": "HTML body 元素表示文档的内容。document.body 属性提供了可以轻松访问文档的 body 元素的脚本。"
  },
  "br": {
    "prefix": "br",
    "body": "<br>",
    "description": "HTML <br> 元素在文本中生成一个换行（回车）符号。此元素在写诗和地址时很有用，这些地方的换行都非常重要。"
  },
  "button": {
    "prefix": "button",
    "body": "<button type=\"$1\">$2</button>$3",
    "description": "HTML <button> 元素表示一个可点击的按钮，可以用在表单或文档其它需要使用简单标准按钮的地方。"
  },
  "canvas": {
    "prefix": "canvas",
    "body": "<canvas id=\"$1\">$2</canvas>$3",
    "description": "<canvas>元素可被用来通过JavaScript（Canvas API 或 WebGL API）绘制图形及图形动画。"
  },
  "caption": {
    "prefix": "caption",
    "body": "<caption>$1</caption>$2",
    "description": "HTML <caption> 元素 (or HTML 表格标题元素) 展示一个表格的标题， 它常常作为 <table> 的第一个子元素出现，同时显示在表格内容的最前面，但是，它同样可以被CSS样式化，所以，它同样可以出现在任何一个一个相对于表格的做任意位置。"
  },
  "cite": {
    "prefix": "cite",
    "body": "<cite>$1</cite>$2",
    "description": "HTML引用（ Citation）标签 (<cite>) 表示一个作品的引用，且必须包含作品的标题。这个引用可能是一个根据适当的上下文约定关联引用的元数据的缩写。"
  },
  "code": {
    "prefix": "code",
    "body": "<code>$1</code>$2",
    "description": "HTML <code> 元素呈现一段计算机代码. 默认情况下, 它以浏览器的默认等宽字体显示."
  },
  "col": {
    "prefix": "col",
    "body": "<col>$2",
    "description": "HTML <col> 元素 定义表格中的列，并用于定义所有公共单元格上的公共语义。它通常位于<colgroup>元素内。"
  },
  "colgroup": {
    "prefix": "colgroup",
    "body": [
      "<colgroup>",
      "\t$1",
      "</colgroup>"
    ],
    "description": "HTML 中的 表格列组（Column Group <colgroup>） 标签用来定义表中的一组列表。"
  },
  "command": {
    "prefix": "command",
    "body": "<command>$1</command>$2",
    "description": "command元素用来表示一个用户可以调用的命令."
  },
  "datalist": {
    "prefix": "datalist",
    "body": [
      "<datalist>",
      "\t$1",
      "</datalist>"
    ],
    "description": "HTML <datalist>元素包含了一组<option>元素，这些元素表示其它表单控件可选值."
  },
  "dd": {
    "prefix": "dd",
    "body": "<dd>$1</dd>$2",
    "description": "HTML <dd> 元素（HTML 描述元素）用来指明一个描述列表  (<dl>) 元素中一个术语的描述。这个元素只能作为描述列表元素的子元素出现，并且必须跟着一个 <dt> 元素。"
  },
  "del": {
    "prefix": "del",
    "body": "<del>$1</del>$2",
    "description": "HTML的<del>标签表示一些被从文档中删除的文字内容。比如可以在需要显示修改记录或者源代码差异的情况使用这个标签。<ins>标签的作用恰恰于此相反：表示文档中添加的内容。"
  },
  "details": {
    "prefix": "details",
    "body": [
      "<details>",
      "\t$1",
      "</details>"
    ],
    "description": "HTML <details>元素可创建一个挂件，仅在被切换成展开状态时，它才会显示内含的信息。"
  },
  "dialog": {
    "prefix": "dialog",
    "body": "<dialog>$1</dialog>$2",
    "description": "HTML <dialog> 元素表示一个对话框或其他交互式组件，例如一个检查器或者窗口。"
  },
  "dfn": {
    "prefix": "dfn",
    "body": "<dfn>$1</dfn>$2",
    "description": "HTML 定义元素 (<dfn>) 表示术语的一个定义。"
  },
  "div": {
    "prefix": "div",
    "body": [
      "<div>",
      "\t$1",
      "</div>"
    ],
    "description": "HTML <div> 元素 (或 HTML 文档分区元素) 是一个通用型的流内容容器，在不使用CSS的情况下，其对内容或布局没有任何影响。"
  },
  "dl": {
    "prefix": "dl",
    "body": [
      "<dl>",
      "\t$1",
      "</dl>"
    ],
    "description": "HTML <dl> 元素 （或 HTML 描述列表元素）是一个包含术语定义以及描述的列表，通常用于展示词汇表或者元数据 (键-值对列表)。"
  },
  "dt": {
    "prefix": "dt",
    "body": "<dt>$1</dt>$2",
    "description": "HTML <dt> 元素 （或 HTML 术语定义元素）用于在一个定义列表中声明一个术语。该元素仅能作为 <dl> 的子元素出现。通常在该元素后面会跟着 <dd> 元素， 然而，多个连续出现的 <dt> 元素都将由出现在它们后面的第一个 <dd> 元素定义。"
  },
  "em": {
    "prefix": "em",
    "body": "<em>$1</em>$2",
    "description": "HTML 着重元素 (<em>) 标记出需要用户着重阅读的内容， <em> 元素是可以嵌套的，嵌套层次越深，则其包含的内容被认定为越需要着重阅读。"
  },
  "embed": {
    "prefix": "embed",
    "body": "<embed src=\"$1\">$2",
    "description": "HTML <embed> 元素将外部内容嵌入文档中的指定位置。此内容由外部应用程序或其他交互式内容源（如浏览器插件）提供。"
  },
  "fieldset": {
    "prefix": "fieldset",
    "body": [
      "<fieldset>",
      "\t$1",
      "</fieldset>"
    ],
    "description": ""
  },
  "figcaption": {
    "prefix": "figcaption",
    "body": "<figcaption>$1</figcaption>$2",
    "description": "HTML <figcaption> 元素 是与其相关联的图片的说明/标题，用?于描述其父节点 <figure> 元素里的其他数据。这意味着 <figcaption> 在<figure> 块里是第一个或最后一个。同时 HTML Figcaption 元素是可选的；如果没有该元素，这个父节点的图片只是会没有说明/标题。"
  },
  "figure": {
    "prefix": "figure",
    "body": [
      "<figure>",
      "\t$1",
      "</figure>"
    ],
    "description": "HTML <figure> 元素代表一段独立的内容, 经常与说明（caption） <figcaption> 配合使用, 并且作为一个独立的引用单元。当它属于主内容流（main flow）时，它的位置独立于主体。这个标签经常是在主文中引用的图片，插图，表格，代码段等等，当这部分转移到附录中或者其他页面时不会影响到主体。"
  },
  "footer": {
    "prefix": "footer",
    "body": [
      "<footer>",
      "\t$1",
      "</footer>"
    ],
    "description": "HTML <footer> 元素表示最近一个章节内容或者根节点（sectioning root ）元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。"
  },
  "form": {
    "prefix": "form",
    "body": [
      "<form>",
      "\t$1",
      "</form>"
    ],
    "description": "HTML <form> 元素表示了文档中的一个区域，此区域包含有交互控制元件，用来向 Web 服务器提交信息。"
  },
  "h1": {
    "prefix": "h1",
    "body": "<h1>$1</h1>$2",
    "description": "HTML - Defines header 1"
  },
  "h2": {
    "prefix": "h2",
    "body": "<h2>$1</h2>$2",
    "description": "HTML - Defines header 2"
  },
  "h3": {
    "prefix": "h3",
    "body": "<h3>$1</h3>$2",
    "description": "HTML - Defines header 3"
  },
  "h4": {
    "prefix": "h4",
    "body": "<h4>$1</h4>$2",
    "description": "HTML - Defines header 4"
  },
  "h5": {
    "prefix": "h5",
    "body": "<h5>$1</h5>$2",
    "description": "HTML - Defines header 5"
  },
  "h6": {
    "prefix": "h6",
    "body": "<h6>$1</h6>$2",
    "description": "HTML - Defines header 6"
  },
  "head": {
    "prefix": "head",
    "body": [
      "<head>",
      "\t$1",
      "</head>"
    ],
    "description": "HTML head 元素 规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。"
  },
  "header": {
    "prefix": "header",
    "body": [
      "<header>",
      "\t$1",
      "</header>"
    ],
    "description": "HTML <header> 元素用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等。"
  },
  "hgroup": {
    "prefix": "hgroup",
    "body": [
      "<hgroup>",
      "\t$1",
      "</hgroup>"
    ],
    "description": "Its text for the outline algorithm is the text of the first HTML Heading Element of highest rank (i.e., the first <h1>, <h2>, <h3>, <h4>, <h5> or <h6> with the smallest number among its descendants) and the rank is the rank of this very same HTML Heading Element."
  },
  "hr": {
    "prefix": "hr",
    "body": "<hr>",
    "description": "HTML <hr> 元素表示段落级元素之间的主题转换（例如，一个故事中的场景的改变，或一个章节的主题的改变）。在HTML的早期版本中，它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但目前被定义为语义上的，而不是表现层面上。"
  },
  "html": {
    "prefix": "html",
    "body": [
      "<html>",
      "\t$1",
      "</html>"
    ],
    "description": "HTML <html> 元素 表示一个HTML文档的根（顶级元素），所以它也被称为根元素。所有其他元素必须是此元素的后代。"
  },
  "html5": {
    "prefix": "html5",
    "body": [
      "<!DOCTYPE html>",
      "<html lang=\"$1en\">",
      "\t<head>",
      "\t\t<title>$2</title>",
      "\t\t<meta charset=\"UTF-8\">",
      "\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
      "\t\t<link href=\"$3css/style.css\" rel=\"stylesheet\">",
      "\t</head>",
      "\t<body>",
      "\t$4",
      "\t</body>",
      "</html>"
    ],
    "description": "HTML - Defines a template for a html5 document"
  },
  "i": {
    "prefix": "i",
    "body": "<i>$1</i>$2",
    "description": "HTML元素 <i> 用于表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示。"
  },
  "iframe": {
    "prefix": "iframe",
    "body": "<iframe src=\"$1\">$2</iframe>$3",
    "description": "browsing context"
  },
  "img": {
    "prefix": "img",
    "body": "<img src=\"$1\" alt=\"$2\">$3",
    "description": "HTML <img> 元素将一份图像嵌入文档。"
  },
  "Input": {
    "prefix": "input",
    "body": "<input type=\"$1\" name=\"$2\" value=\"$3\">$4",
    "description": "HTML <input> 元素用于为基于Web的表单创建交互式控件，以便接受来自用户的数据; 可以使用各种类型的输入数据和控件小部件，具体取决于设备和user agent。"
  },
  "ins": {
    "prefix": "ins",
    "body": "<ins>$1</ins>$2",
    "description": ""
  },
  "keygen": {
    "prefix": "keygen",
    "body": "<keygen name=\"$1\">$2",
    "description": "HTML <keygen> 元素是为了方便生成密钥材料和提交作为 HTML form 的一部分的公钥.这种机制被用于设计基于 Web 的证书管理系统。按照预想，<keygen> 元素将用于 HTML 表单与其他的所需信息一起构造一个证书请求，该处理的结果将是一个带有签名的证书。"
  },
  "kbd": {
    "prefix": "kbd",
    "body": "<kbd>$1</kbd>$2",
    "description": "HTML键盘输入元素(<kbd>) 用于表示用户输入，它将产生一个行内元素，以浏览器的默认monospace字体显示。"
  },
  "label": {
    "prefix": "label",
    "body": "<label for=\"$1\">$2</label>$3",
    "description": "Editorial review completed."
  },
  "legend": {
    "prefix": "legend",
    "body": "<legend>$1</legend>$2",
    "description": "HTML的元素（也称为HTML的域说明元素（or HMTL\n  Legend Field Element））代表一个用于表示它的父元素<fieldset>的内容的标题。"
  },
  "li": {
    "prefix": "li",
    "body": "<li>$1</li>$2",
    "description": "HTML <li> 元素 （或称 HTML 列表条目元素） 用于表示列表里的条目。它必须包含在一个父元素里：一个有序列表(<ol>)，一个无序列表(<ul>)，或者一个菜单 (<menu>)。在菜单或者无序列表里，列表条目通常用点排列显示；在有序列表里，列表条目通常在左边显示按升序排列的计数，例如数字或者字母。"
  },
  "link": {
    "prefix": "link",
    "body": "<link rel=\"$1\" type=\"$2\" href=\"$3\">$4",
    "description": "HTML外部资源链接元素 (<link>) 规定了当前文档与外部资源的关系。该元素最常用于链接样式表，此外也可以被用来创建站点图标(比如PC端的“favicon”图标和移动设备上用以显示在主屏幕的图标) 。"
  },
  "main": {
    "prefix": "main",
    "body": [
      "<main>",
      "\t$1",
      "</main>"
    ],
    "description": "HTML <main> 元素呈现了文档的 <body> 或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。"
  },
  "map": {
    "prefix": "map",
    "body": [
      "<map name=\"$1\">",
      "\t$2",
      "</map>"
    ],
    "description": "HTML <map> 属性 与 <area> 属性一起使用来定义一个图像映射(一个可点击的链接区域)."
  },
  "mark": {
    "prefix": "mark",
    "body": "<mark>$1</mark>$2",
    "description": "HTML标记文本元素()表示为引用或符号目的而标记或突出显示的文本，这是由于标记的段落在封闭上下文中的相关性或重要性造成的。"
  },
  "menu": {
    "prefix": "menu",
    "body": [
      "<menu>",
      "\t$1",
      "</menu>"
    ],
    "description": "HTML <menu> 元素呈现了一组用户可执行或激活的命令。这既包含了可能出现在屏幕顶端的列表菜单，也包含了那些隐藏在按钮之下、当点击按钮后显示出来的文本菜单。"
  },
  "menuitem": {
    "prefix": "menuitem",
    "body": "<menuitem>$1</menuitem>$2",
    "description": "用户可以通过HTML <menuitem> 元素生成一个弹出式菜单。这包括上下文菜单，以及按钮可能附带的菜单。"
  },
  "meta": {
    "prefix": "meta",
    "body": "<meta name=\"$1\" content=\"$2\">$3",
    "description": "//注意！本页面英文原文已经大部分更新，请有时间的开发者帮忙本地化校对！（2020.3.17）"
  },
  "meter": {
    "prefix": "meter",
    "body": "<meter value=\"$1\">$2</meter>$3",
    "description": "HTML <meter>元素用来显示已知范围的标量值或者分数值。"
  },
  "nav": {
    "prefix": "nav",
    "body": [
      "<nav>",
      "\t$1",
      "</nav>"
    ],
    "description": "HTML <nav>元素表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。"
  },
  "noscript": {
    "prefix": "noscript",
    "body": [
      "<noscript>",
      "$1",
      "</noscript>"
    ],
    "description": "如果页面上的脚本类型不受支持或者当前在浏览器中关闭了脚本，则在 HTML <noscript> 元素中定义脚本未被执行时的替代内容。"
  },
  "object": {
    "prefix": "object",
    "body": "<object width=\"$1\" height=\"$2\" data=\"$3\">$4</object>$5",
    "description": ""
  },
  "ol": {
    "prefix": "ol",
    "body": [
      "<ol>",
      "\t$1",
      "</ol>"
    ],
    "description": "HTML <ol> 元素 表示多个有序列表项，通常渲染为有带编号的列表。"
  },
  "optgroup": {
    "prefix": "optgroup",
    "body": [
      "<optgroup>",
      "\t$1",
      "</optgroup>"
    ],
    "description": "在一个web表单中, HTML元素 <optgroup> 会创建包含在一个 <select> 元素中的一组选项"
  },
  "option": {
    "prefix": "option",
    "body": "<option value=\"$1\">$2</option>$3",
    "description": "在web表单中,  HTML元素 <option>  用于定义在<select>,  <optgroup> 或<datalist> 元素中包含的项。<option> 可以在弹出窗口和 html 文档中的其他项目列表中表示菜单项。"
  },
  "output": {
    "prefix": "output",
    "body": "<output name=\"$1\" for=\"$2\">$3</output>$4",
    "description": "HTML <output> 标签表示计算或用户操作的结果。"
  },
  "p": {
    "prefix": "p",
    "body": "<p>$1</p>$2",
    "description": "HTML <p>元素（或者说 HTML 段落元素）表示文本的一个段落。该元素通常表现为一整块与相邻文本分离的文本，或以垂直的空白隔离或以首行缩进。另外，<p> 是块级元素。"
  },
  "param": {
    "prefix": "param",
    "body": "<param name=\"$1\" value=\"$2\">$3",
    "description": "HTML <param>元素为<object>元素定义参数"
  },
  "pre": {
    "prefix": "pre",
    "body": [
      "<pre>$1</pre>"
    ],
    "description": "HTML <pre> 元素表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。(紧跟在 <pre> 开始标签后的换行符也会被省略)"
  },
  "progress": {
    "prefix": "progress",
    "body": "<progress value=\"$1\" max=\"$2\">$3</progress>$4",
    "description": "HTML中的progress (<progress>) 元素用来显示一项任务的完成进度.虽然规范中没有规定该元素具体如何显示,浏览器开发商可以自己决定,但通常情况下,该元素都显示为一个进度条形式."
  },
  "q": {
    "prefix": "q",
    "body": "<q>$1</q>$2",
    "description": "HTML引用标签 (<q>)表示一个封闭的并且是短的行内引用的文本. 这个标签是用来引用短的文本，所以请不要引入换行符; 对于长的文本的引用请使用 <blockquote> 替代."
  },
  "rp": {
    "prefix": "rp",
    "body": "<rp>$1</rp>$2",
    "description": "HTML <rp> 元素用于为那些不能使用 <ruby> 元素展示 ruby 注解的浏览器，提供随后的圆括号。"
  },
  "rt": {
    "prefix": "rt",
    "body": "<rt>$1</rt>$2",
    "description": "HTML Ruby 文本 (<rt>) 元素包含字符的发音，字符在 ruby 注解中出现，它用于描述东亚字符的发音。这个元素始终在 <ruby> 元素中使用。"
  },
  "ruby": {
    "prefix": "ruby",
    "body": [
      "<ruby>",
      "$1",
      "</ruby>"
    ],
    "description": "HTML <ruby> 元素 被用来展示东亚文字注音或字符注释。"
  },
  "s": {
    "prefix": "s",
    "body": "<s>$1</s>$2",
    "description": "HTML <s> 元素 使用删除线来渲染文本。使用 <s> 元素来表示不再相关，或者不再准确的事情。但是当表示文档编辑时，不提倡使用 <s> ；为此，提倡使用 <del> 和 <ins> 元素。"
  },
  "samp": {
    "prefix": "samp",
    "body": "<samp>$1</samp>$2",
    "description": "<samp> 元素用于标识计算机程序输出，通常使用浏览器缺省的 monotype 字体（例如 Lucida Console）。"
  },
  "script": {
    "prefix": "script",
    "body": [
      "<script>",
      "\t$1",
      "</script>"
    ],
    "description": "HTML <script> 元素用于嵌入或引用可执行脚本。"
  },
  "section": {
    "prefix": "section",
    "body": [
      "<section>",
      "\t$1",
      "</section>"
    ],
    "description": "HTML <section>元素表示一个包含在HTML文档中的独立部分，它没有更具体的语义元素来表示，一般来说会有包含一个标题。"
  },
  "select": {
    "prefix": "select",
    "body": [
      "<select>",
      "\t$1",
      "</select>"
    ],
    "description": "HTML <select> 元素表示一个控件，提供一个选项菜单："
  },
  "small": {
    "prefix": "small",
    "body": "<small>$1</small>$2",
    "description": "HTML 中的元素將使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)。在HTML5中，除了它的样式含义，这个元素被重新定义为表示边注释和附属细则，包括版权和法律文本。"
  },
  "source": {
    "prefix": "source",
    "body": "<source src=\"$1\" type=\"$2\">$3",
    "description": "HTML <source> 元素为 <picture>, <audio> 或者 <video> 元素指定多个媒体资源。这是一个空元素。它通常用于以不同浏览器支持的多种格式提供相同的媒体内容。"
  },
  "span": {
    "prefix": "span",
    "body": "<span>$1</span>$2",
    "description": ""
  },
  "strong": {
    "prefix": "strong",
    "body": "<strong>$1</strong>$2",
    "description": "Strong 元素 (<strong>)表示文本十分重要，一般用粗体显示。"
  },
  "style": {
    "prefix": "style",
    "body": [
      "<style>",
      "$1",
      "</style>"
    ],
    "description": "HTML的<style>元素包含文档的样式信息或者文档的部分内容。默认情况下，该标签的样式信息通常是CSS的格式。"
  },
  "sub": {
    "prefix": "sub",
    "body": "<sub>$1</sub>$2",
    "description": "HTML <sub> 元素定义了一个文本区域，出于排版的原因，与主要的文本相比，应该展示得更低并且更小。"
  },
  "sup": {
    "prefix": "sup",
    "body": "<sup>$1</sup>$2",
    "description": "HTML <sup> 元素定义了一个文本区域，出于排版的原因，与主要的文本相比，应该展示得更高并且更小。"
  },
  "summary": {
    "prefix": "summary",
    "body": "<summary>$1</summary>$2",
    "description": "HTML <summary> 元素 用作 一个<details>元素的一个内容的摘要，标题或图例。"
  },
  "table": {
    "prefix": "table",
    "body": [
      "<table>",
      "\t$1",
      "</table>"
    ],
    "description": "HTML的 table 元素表示表格数据 — 即通过二维数据表表示的信息。"
  },
  "tbody": {
    "prefix": "tbody",
    "body": [
      "<tbody>",
      "\t$1",
      "</tbody>"
    ],
    "description": "The HTML Table Body element (<tbody>) encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>)."
  },
  "td": {
    "prefix": "td",
    "body": "<td>$1</td>$2",
    "description": "HTML <td> 元素 定义了一个包含数据的表格单元格。It participates in the table model."
  },
  "textarea": {
    "prefix": "textarea",
    "body": "<textarea rows=\"$1\" cols=\"$2\">$3</textarea>$4",
    "description": "HTML <textarea> 元素表示一个多行纯文本编辑控件。"
  },
  "tfoot": {
    "prefix": "tfoot",
    "body": [
      "<tfoot>",
      "\t$1",
      "</tfoot>"
    ],
    "description": "HTML 元素<tfoot>  定义了一组表格中各列的汇总行。"
  },
  "thead": {
    "prefix": "thead",
    "body": [
      "<thead>",
      "$1",
      "</thead>"
    ],
    "description": "HTML的<thead>元素定义了一组定义表格的列头的行。"
  },
  "th": {
    "prefix": "th",
    "body": "<th>$1</th>$2",
    "description": "HTML <th> 元素 scope and headers 属性"
  },
  "time": {
    "prefix": "time",
    "body": "<time datetime=\"$1\">$2</time>$3",
    "description": "HTML time 标签(<time>) 用来表示24小时制时间或者公历日期，若表示日期则也可包含时间和时区。"
  },
  "title": {
    "prefix": "title",
    "body": "<title>$1</title>$2",
    "description": "HTML <title> 元素 定义文档的标题，显示在浏览器的标题栏或标签页上。它只应该包含文本，若是包含有标签，则它包含的任何标签都将被忽略。"
  },
  "tr": {
    "prefix": "tr",
    "body": "<tr>$1</tr>$2",
    "description": "HTML <tr> 元素定义表格中的行。 Those can be a mix of <td> and <th> elements."
  },
  "track": {
    "prefix": "track",
    "body": "<track src=\"$1\" kind=\"$2\" srclang=\"$3\" label=\"$4\">$5",
    "description": "HTML <track> 元素 被当作媒体元素—<audio> 和 <video>的子元素来使用。它允许指定时序文本字幕（或者基于时间的数据），例如自动处理字幕。字幕格式有 WebVTT 格式（.vtt格式文件）— Web 视频文本字幕格式，以及指时序文本标记语言（TTML）格式。"
  },
  "u": {
    "prefix": "u",
    "body": "<u>$1</u>$2",
    "description": "The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request."
  },
  "ul": {
    "prefix": "ul",
    "body": [
      "<ul>",
      "\t$1",
      "</ul>"
    ],
    "description": "Editorial review completed."
  },
  "var": {
    "prefix": "var",
    "body": "<var>$1</var>$2",
    "description": "<var> 标签表示变量的名称，或者由用户提供的值。"
  },
  "video": {
    "prefix": "video",
    "body": [
      "<video width=\"$1\" height=\"$2\" controls>",
      "\t$3",
      "</video>"
    ],
    "description": "HTML <video> 元素 用于在HTML或者XHTML文档中嵌入媒体播放器，用于支持文档内的视频播放。"
  },
  "data": {
    "prefix": "data",
    "body": [
      "<data value=\"$1\">",
      "\t$2",
      "</data>"
    ],
    "description": "HTML <data> 元素将一个指定内容和机器可读的翻译联系在一起。但是，如果内容是与时间或者日期相关的，则一定要使用 <time>。"
  },
  "picture": {
    "prefix": "picture",
    "body": [
      "<picture>",
      "\t$1",
      "</picture>"
    ],
    "description": "HTML <picture> 元素通过包含零或多个 <source> 元素和一个 <img> 元素来为不同的显示/设备场景提供图像版本。浏览器会选择最匹配的子 <source> 元素，如果没有匹配的，就选择 <img> 元素的 src 属性中的URL。然后，所选图像呈现在<img>元素占据的空间中。"
  },
  "rb": {
    "prefix": "rb",
    "body": [
      "<rb>",
      "\t$1",
      "</rb>"
    ],
    "description": "HTML Ruby Base（<rb>）元素用于分隔<ruby>注释的基本文本组件（即正在注释的文本）。一个<rb>元素应该包装基本文本的每个单独的原子段。"
  },
  "rtc": {
    "prefix": "rtc",
    "body": [
      "<rtc>",
      "\t$1",
      "</rtc>"
    ],
    "description": "HTML <rtc> 元素包含文字的语义注解，它们在 <rb> 元素中展示。<rb> 元素可以拥有发音 (<rt>) 和语义(<rtc>) 注解。"
  },
  "slot": {
    "prefix": "slot",
    "body": [
      "<slot name=\"$1\">",
      "\t$2",
      "</slot>"
    ],
    "description": "HTML  <slot>  元素 ，作为 Web Components 技术套件的一部分，是"
  },
  "template": {
    "prefix": "template",
    "body": [
      "<template>",
      "\t$1",
      "</template>"
    ],
    "description": "HTML内容模板（<template>）元素是一种用于保存客户端内容机制，该内容在加载页面时不会呈现，但随后可以(原文为 may be)在运行时使用JavaScript实例化。"
  },
  "wbr": {
    "prefix": "wbr",
    "body": [
      "<wbr>"
    ],
    "description": "HTML <wbr> 元素  — 一个文本中的位置，其中浏览器可以选择来换行，虽然它的换行规则可能不会在这里换行。"
  }
}