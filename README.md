# Web-Dev-Snippets

>这是一个 VSCode 的扩展插件，包含前端开发中常见的代码片段.

- Vue2
- Vue Router
- Vuex
- JavaScript ES5/ES6

## Using

#### Vue2-HTML

```
vtext             -->     v-text="${1:msg}"
routerview        -->     <router-view name="${1:path}"></router-view>
routerlink        -->     <router-link to="${1:path}"></router-link>
slot              -->     <slot name="$1">$2</slot>
transitiongroup   -->     <transition-group tag="$1" name="$2">\n\t$0\n</transition-group>
key               -->     :key="$1"'
...
```

#### Vue2-Javascript

```
vueconfigsilent   -->     Vue.config.silent = ${1:true}
vuenexttick       -->     Vue.nextTick({\n\t$1\n})
vueset            -->     Vue.set({${1:object}, ${1:key}, ${1:value})
vuemounted        -->     mounted () {\n\t$0\n}
vuedata           -->     data () {\n\treturn {\n\t\t$0\n\t}\n}
vueprops          -->     props: {\n}
...
```

#### Vue Router

```
roumode           -->     router.mode
roupush           -->     router.push(${1:path})
rougo             -->     router.go(${1:number})
rouaddroutes      -->     router.addRoutes(${1:routes})
vmrouquery        -->     ${1:this}.\\$route.query
rouitempathname   -->     { path: '$1', name: '$2', component: ${1:3:component} }
rouitempath       -->     { path: '$1', component: ${1:2:component} }
...
```

#### Vuex

```
vxstate           -->     state: {\n\t$0\n}
vxmutations       -->     mutations: {\n\t$0\n}
vxstorecommit     -->     store.commit('${1:MUTATIONS}', ${1:payload})
vxstoredispatch   -->     store.dispatch('${1:action}', ${1:payload})
vxmapgetters      -->     mapGetters('${1:modulePath}', ${1:[]|{\\}})
vmvxgetters       -->     ${1:this}.\\$store.getters
vmvxcommit        -->     ${1:this}.\\$store.commit('${1:MUTATIONS}', ${1:payload})
...
```

#### JavaScript ES5/ES6

> ES5 的语法提示同步于 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript , 出发提示的规律 [对象的前三位]+方法名

```
arrfrom       -->     Array.from(${2})
arrconcat           -->    ${1:array}.concat(${2})
datgetdate    -->     ${1:date}.getDate()
datgethours       -->     ${1:date}.getHours()
numisfinite        -->     Number.isFinite(${2})
numisnan      -->     Number.isNaN(${2})
proall -->     Promise.all(${2})
procatch    -->     ${1:promise}.catch(${2})
...
```