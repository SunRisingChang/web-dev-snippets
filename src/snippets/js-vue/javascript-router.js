module.exports = {
    newrouter: {
        prefix: "newrouter",
        body: [
            "new Router({\n\tmode: '${1:history}',\n\tbase: ${1:__dirname},\n\troutes: [$0]\n})"
        ],
        description: "创建一个Vue Router对象"
    },
    // ------------------ 实例属性 开始 ----------------------
    "router.app": {
        prefix: "rouapp",
        body: ["router.app"],
        description: "路由器注入的根Vue实例。"
    },
    "router.mode": {
        prefix: "roumode",
        body: ["router.mode"],
        description: "路由器使用的模式。"
    },
    "router.currentRoute": {
        prefix: "roucurrentroute",
        body: ["router.currentRoute"],
        description: "当前路线表示为路线对象。"
    },
    // ------------------ 实例属性 结束 ----------------------
    // ------------------ 实例方法 开始 ----------------------
    "router.beforeEach": {
        prefix: "roubeforeeach",
        body: [
            "router.beforeEach((to, from, next) => {\n\t${1://to and from are Route Object,next() must be called to resolve the hook}\n\t$0\n})"
        ],
        description: " 在警卫人员之前注册全球"
    },
    "router.beforeResolve": {
        prefix: "roubeforeresolve",
        body: [
            "router.beforeResolve((to, from, next) => {\n\t${1://to and from are Route Object,next() must be called to resolve the hook}\n\t$0\n})"
        ],
        description: " 整体解析守卫"
    },
    "router.afterEach": {
        prefix: "rouaftereach",
        body: [
            "router.afterEach( ${1:route} => {\n\t${1://these hooks do not get a next function and cannot affect the navigation}\n\t$0\n})"
        ],
        description: " 在全球范围内注册后卫"
    },
    "router.push": {
        prefix: "roupush",
        body: ["router.push(${1:path})"],
        description: "导航到另一个URL。（此方法将新条目推入历史记录堆栈）"
    },
    "router.replace": {
        prefix: "roureplace",
        body: ["router.replace(${1:path})"],
        description: "用于替换当前URL。"
    },
    "router.go": {
        prefix: "rougo",
        body: ["router.go(${1:number})"],
        description: "此方法采用单个整数作为参数，该参数指示在历史记录堆栈中前进或后退多少步，类似于window.history.go（n）"
    },
    "router.back": {
        prefix: "rouback",
        body: ["router.back()"],
        description: "回退一步"
    },
    "router.forward": {
        prefix: "rouforward",
        body: ["router.forward()"],
        description: "前进一步"
    },
    "router.getMatchedComponents": {
        prefix: "rougetmatchedcomponents",
        body: ["router.getMatchedComponents(${1:path})"],
        description: "返回与提供的位置或当前路线匹配的组件（定义/构造函数，而不是实例）的数组。"
    },
    "router.resolve": {
        prefix: "rouresolve",
        body: ["router.resolve(${1:path})"],
        description: "反向URL解析。给定位置的格式与<router-link />中使用的格式相同，将返回具有以下已解析属性的对象："
    },
    "router.addRoutes": {
        prefix: "rouaddroutes",
        body: ["router.addRoutes(${1:routes})"],
        description: "动态添加更多的路由规则。参数必须是一个符合路由选项要求的数组。"
    },
    "router.onReady": {
        prefix: "rouonready",
        body: ["router.onReady(${1:callback},${2:errorCallback})"],
        description: "该方法把一个初始调度，在路由完成初始导航时调用，这意味着它可以解析所有的初始化进入钩子和路由初始化相关联的异步组件。"
    },
    "router.onError": {
        prefix: "rouonerror",
        body: ["router.onError(${1:callback})"],
        description: "注册一个名义，该干预会在路由导航过程中出错时被调用"
    },
    // ------------------ 实例方法 结束 ----------------------
    // ------------------ vm路由对象属性 开始 ----------------------
    "$route.path": {
        prefix: "vmroupath",
        body: ["${1:this}.\\$route.path"],
        description: "等于当前路径路径的字符串，始终解析为绝对路径。"
    },
    "$route.params": {
        prefix: "vmrouparams",
        body: ["${1:this}.\\$route.params"],
        description: "包含动态分段和星形分段的键/值对的对象。如果没有参数，则该值将为空对象。"
    },
    "$route.query": {
        prefix: "vmrouquery",
        body: ["${1:this}.\\$route.query"],
        description: "包含查询字符串的键/值对的对象。"
    },
    "$route.hash": {
        prefix: "vmrouhash",
        body: ["${1:this}.\\$route.hash"],
        description: "当前路由的散列（不带＃）（如果有）。如果没有哈希，则该值为空字符串。"
    },
    "$route.fullPath": {
        prefix: "vmroufullpath",
        body: ["${1:this}.\\$route.fullPath"],
        description: "完整的解析URL，包括查询和哈希。"
    },
    "$route.matched": {
        prefix: "vmroumatched",
        body: ["${1:this}.\\$route.matched"],
        description: "包含当前记录的所有嵌套路径段的记录的数组。路由记录是路由配置数组中对象的副本"
    },
    "$route.name": {
        prefix: "vmrouname",
        body: ["${1:this}.\\$route.name"],
        description: "当前路由的名称（如果有）。"
    },
    // ------------------ vm路由对象属性 结束 ----------------------
    // ------------------ vm路由对象方法 开始 ----------------------
    "$router.push": {
        prefix: "vmroupush",
        body: ["${1:this}.\\$router.push(${1:path})"],
        description: "导航到另一个URL。（此方法将新条目推入历史记录堆栈）"
    },
    "$router.go": {
        prefix: "vmrougo",
        body: ["${1:this}.\\$router.go(${1:number})"],
        description: "此方法采用单个整数作为参数，该参数指示在历史记录堆栈中前进或后退多少步，类似于window.history.go（n）"
    },
    "$router.back": {
        prefix: "vmrouback",
        body: ["${1:this}.\\$router.back()"],
        description: "回退一步"
    },
    "$router.forward": {
        prefix: "vmrouforward",
        body: ["${1:this}.\\$router.forward()"],
        description: "前进一步"
    },
    "$router.resolve": {
        prefix: "vmrouresolve",
        body: ["${1:this}.\\$router.resolve(${1:path})"],
        description: "反向URL解析。给定位置的格式与<router-link />中使用的格式相同，将返回具有以下已解析属性的对象："
    },
    "$router.addRoutes": {
        prefix: "vmrouaddroutes",
        body: ["${1:this}.\\$router.addRoutes(${1:routes})"],
        description: "动态添加更多的路由规则。参数必须是一个符合路由选项要求的数组。"
    },
    // ------------------ vm路由对象方法 结束 ----------------------
    // ------------------ 组件内的守卫 开始 ----------------------
    beforeRouteEnter: {
        prefix: "roubeforerouteenter",
        body: [
            "beforeRouteEnter((to, from, next) => {\n\t${1://does NOT have access to `this` component instance}\n\t$0\n})"
        ],
        description: "在路由的配置对象上直接定义beforeEnter防护："
    },
    beforeRouteUpdate: {
        prefix: "roubeforerouteupdate",
        body: [
            "beforeRouteUpdate((to, from, next) => {\n\t${1://has access to `this` component instance}\n\t$0\n})"
        ],
        description: "在当前路由更改，但是该组件被替换时调用"
    },
    beforeRouteLeave: {
        prefix: "roubeforerouteleave",
        body: [
            "beforeRouteLeave((to, from, next) => {\n\t${1://has access to `this` component instance}\n\t$0\n})"
        ],
        description: "在路由的配置对象上直接定义beforeEnter防护："
    },
    // ------------------ 组件内的守卫 结束 ----------------------
    // ------------------ 路由元素 开始 ----------------------
    routerItemm: {
        prefix: "rouitempath",
        body: ["{ path: '$1', component: ${1:2:component} }"],
        description: "基本路线"
    },
    pathNamed: {
        prefix: "rouitempathname",
        body: ["{ path: '$1', name: '$2', component: ${1:3:component} }"],
        description: "命名路线"
    },
    pathAsync: {
        prefix: "rouitempathnameasync",
        body: [
            "{ path: '$1', name: '$2', component: resolve => require(['$3'], resolve) }"
        ],
        description: " 异步组件路由"
    },
    pathChildren: {
        prefix: "rouitempathnamechildren",
        body: [
            "{ path: '$1', name: '$2', component: ${1:3:component},\n\tchildren: [\n\t\t$4\n\t]\n}"
        ],
        description: "嵌套路线"
    },
    // ------------------ 路由元素 结束 ----------------------
    // ------------------ Router 构建 开始 ----------------------
    scrollBehavior: {
        prefix: "rouscrollbehavior",
        body: [
            "scrollBehavior (to, from, savedPosition){\n\t${1://return desired position}\n\t$0\n}"
        ],
        description: "滚动行为（此功能仅在HTML5历史记录模式下有效）"
    },
    alias: {
        prefix: "roualias",
        body: ["alias: $0"],
        description: "别名"
    },
    redirect: {
        prefix: "rouredirect",
        body: ["redirect: $0"],
        description: "重新导向"
    },
    meta: {
        prefix: "roumeta",
        body: ["meta: { ${1:options} }"],
        description: "路由元字段"
    },
    // ------------------ Router 构建 结束 ----------------------
};
