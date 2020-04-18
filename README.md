# Web-Dev-Snippets

>这是一个 VSCode 的扩展插件，包含前端开发中常见的代码片段.

- HTML
- Vue2
- Vue Router
- Vuex
- Element UI
- JavaScript ES5/ES6 (部分)

## Using

#### HTML

```
abbr      -->     <abbr title="$1">$2</abbr>$3
a         -->     <a href="$1">$2</a>$3
button    -->     <button type="$1">$2</button>$3
...
```

#### Vue2

```
vtext     -->     v-text="${1:msg}"
slotname  -->     <slot name="$1"></slot>'
keepalive -->     <keep-alive include="$1">\n\t$0\n</keep-alive>
vueconf   -->     Vue.config.devtools = ${1:true}
vuenext   -->     Vue.nextTick({\n\t$1\n})
vmrefs    -->     ${1:this}.\\$refs
...
```

#### Vue Router

```
roupush -->  router.push(${1:path})
roubef  -->  router.beforeEach((to, from, next) => {\n\t${1://to and from are Route Object,next() must be called to resolve the hook}\n\t$0\n})
vmroufullpath --> ${1:this}.\\$route.fullPath
```

#### Vuex

```
vxstate     -->    state: {\n\t$0\n}
vxstoreco   -->    store.commit('${1:MUTATIONS}', ${1:payload})
vxmapstate  -->    mapState('${1:modulePath}', ${1:[]|{\\}})
...
```

#### Element UI

```
elmessage  -->    "this.\\$message({",
      "\tmessage: '${1:text}',",
      "\ttype: '${2:info}'",
      "});"

elalert    -->    "this.\\$alert('${1:content}', '${2:title}', {",
      "\tconfirmButtonText: '${3:confirm}',",
      "\tcallback: ${4:action} => {",
      "\t\t",
      "\t}",
      "});"

elnotify   -->    "this.\\$notify({",
      "\ttitle: '${1:title}',",
      "\tmessage: '${2:string|VNode}'",
      "});"
```

#### JavaScript ES5/ES6

```
arrcopy       -->     $1.copyWithin($2)
log           -->     console.log($1);$0
dategetday    -->     ${1:date}.getDay(${2})
jsonpar       -->     JSON.parse($1)
maphas        -->     ${1:map}.has(${2})
mathceil      -->     Math.ceil(${1})
numparsefloat -->     Number.parseFloat(${1})
objentries    -->     Object.entries(${1})
...
```