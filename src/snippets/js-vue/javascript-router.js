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
        description: "[router]The root Vue instance the router was injected into."
    },
    "router.mode": {
        prefix: "roumode",
        body: ["router.mode"],
        description: "[router]The mode the router is using."
    },
    "router.currentRoute": {
        prefix: "roucurrentroute",
        body: ["router.currentRoute"],
        description: "[router]The current route represented as a Route Object."
    },
    // ------------------ 实例属性 结束 ----------------------
    // ------------------ 实例方法 开始 ----------------------
    "router.beforeEach": {
        prefix: "roubeforeeach",
        body: [
            "router.beforeEach((to, from, next) => {\n\t${1://to and from are Route Object,next() must be called to resolve the hook}\n\t$0\n})"
        ],
        description: "[router] register global before guards"
    },
    "router.beforeResolve": {
        prefix: "roubeforeresolve",
        body: [
            "router.beforeResolve((to, from, next) => {\n\t${1://to and from are Route Object,next() must be called to resolve the hook}\n\t$0\n})"
        ],
        description: "[router] 全局解析守卫"
    },
    "router.afterEach": {
        prefix: "rouaftereach",
        body: [
            "router.afterEach( ${1:route} => {\n\t${1://these hooks do not get a next function and cannot affect the navigation}\n\t$0\n})"
        ],
        description: "[router] register global after guards"
    },
    "router.push": {
        prefix: "roupush",
        body: ["router.push(${1:path})"],
        description:
            "[router]To navigate to a different URL.(This method pushes a new entry into the history stack)"
    },
    "router.replace": {
        prefix: "roureplace",
        body: ["router.replace(${1:path})"],
        description: "[router]To replaces the current URL."
    },
    "router.go": {
        prefix: "rougo",
        body: ["router.go(${1:number})"],
        description:
            "[router]This method takes a single integer as parameter that indicates by how many steps to go forwards or go backwards in the history stack, similar to window.history.go(n)"
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
        description:
            "[router]Returns an Array of the components (definition/constructor, not instances) matched by the provided location or the current route."
    },
    "router.resolve": {
        prefix: "rouresolve",
        body: ["router.resolve(${1:path})"],
        description:
            "[router]Reverse URL resolving. Given location in form same as used in <router-link/>, returns object with the following resolved properties:"
    },
    "router.addRoutes": {
        prefix: "rouaddroutes",
        body: ["router.addRoutes(${1:routes})"],
        description:
            "动态添加更多的路由规则。参数必须是一个符合 routes 选项要求的数组。"
    },
    "router.onReady": {
        prefix: "rouonready",
        body: ["router.onReady(${1:callback},${2:errorCallback})"],
        description:
            "该方法把一个回调排队，在路由完成初始导航时调用，这意味着它可以解析所有的异步进入钩子和路由初始化相关联的异步组件。"
    },
    "router.onError": {
        prefix: "rouonerror",
        body: ["router.onError(${1:callback})"],
        description:
            "注册一个回调，该回调会在路由导航过程中出错时被调用"
    },
    // ------------------ 实例方法 结束 ----------------------
    // ------------------ vm路由对象属性 开始 ----------------------
    "$route.path": {
        prefix: "vmroupath",
        body: ["${1:this}.\\$route.path"],
        description:
            "[router]A string that equals the path of the current route, always resolved as an absolute path. "
    },
    "$route.params": {
        prefix: "vmrouparams",
        body: ["${1:this}.\\$route.params"],
        description:
            "[router]An object that contains key/value pairs of dynamic segments and star segments. If there are no params the value will be an empty object."
    },
    "$route.query": {
        prefix: "vmrouquery",
        body: ["${1:this}.\\$route.query"],
        description:
            "[router]An object that contains key/value pairs of the query string. "
    },
    "$route.hash": {
        prefix: "vmrouhash",
        body: ["${1:this}.\\$route.hash"],
        description:
            "[router]The hash of the current route (without #), if it has one. If no hash is present the value will be an empty string."
    },
    "$route.fullPath": {
        prefix: "vmroufullpath",
        body: ["${1:this}.\\$route.fullPath"],
        description: "[router]The full resolved URL including query and hash."
    },
    "$route.matched": {
        prefix: "vmroumatched",
        body: ["${1:this}.\\$route.matched"],
        description:
            "[router]An Array containing route records for all nested path segments of the current route. Route records are the copies of the objects in the routes configuration Array"
    },
    "$route.name": {
        prefix: "vmrouname",
        body: ["${1:this}.\\$route.name"],
        description: "[router]The name of the current route, if it has one."
    },
    // ------------------ vm路由对象属性 结束 ----------------------
    // ------------------ vm路由对象方法 开始 ----------------------
    "$router.push": {
        prefix: "vmroupush",
        body: ["${1:this}.\\$router.push(${1:path})"],
        description:
            "[router]To navigate to a different URL.(This method pushes a new entry into the history stack)"
    },
    "$router.go": {
        prefix: "vmrougo",
        body: ["${1:this}.\\$router.go(${1:number})"],
        description:
            "[router]This method takes a single integer as parameter that indicates by how many steps to go forwards or go backwards in the history stack, similar to window.history.go(n)"
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
        description:
            "[router]Reverse URL resolving. Given location in form same as used in <router-link/>, returns object with the following resolved properties:"
    },
    "$router.addRoutes": {
        prefix: "vmrouaddroutes",
        body: ["${1:this}.\\$router.addRoutes(${1:routes})"],
        description:
            "动态添加更多的路由规则。参数必须是一个符合 routes 选项要求的数组。"
    },
    // ------------------ vm路由对象方法 结束 ----------------------
    // ------------------ 组件内的守卫 开始 ----------------------
    beforeRouteEnter: {
        prefix: "roubeforerouteenter",
        body: [
            "beforeRouteEnter((to, from, next) => {\n\t${1://does NOT have access to `this` component instance}\n\t$0\n})"
        ],
        description:
            "[router]define beforeEnter guards directly on a route's configuration object:"
    },
    beforeRouteUpdate: {
        prefix: "roubeforerouteupdate",
        body: [
            "beforeRouteUpdate((to, from, next) => {\n\t${1://has access to `this` component instance}\n\t$0\n})"
        ],
        description:
            "[router]在当前路由改变，但是该组件被复用时调用"
    },
    beforeRouteLeave: {
        prefix: "roubeforerouteleave",
        body: [
            "beforeRouteLeave((to, from, next) => {\n\t${1://has access to `this` component instance}\n\t$0\n})"
        ],
        description:
            "[router]define beforeEnter guards directly on a route's configuration object:"
    },
    // ------------------ 组件内的守卫 结束 ----------------------
    // ------------------ 路由元素 开始 ----------------------
    routerItemm: {
        prefix: "rouitempath",
        body: ["{ path: '$1', component: ${1:2:component} }"],
        description: "[router]Basic Routes"
    },
    pathNamed: {
        prefix: "rouitempathname",
        body: ["{ path: '$1', name: '$2', component: ${1:3:component} }"],
        description: "[router]Named Routes"
    },
    pathAsync: {
        prefix: "rouitempathnameasync",
        body: [
            "{ path: '$1', name: '$2', component: resolve => require(['$3'], resolve) }"
        ],
        description: "[router] Async Component Routes"
    },
    pathChildren: {
        prefix: "rouitempathnamechildren",
        body: [
            "{ path: '$1', name: '$2', component: ${1:3:component},\n\tchildren: [\n\t\t$4\n\t]\n}"
        ],
        description: "[router]Nested Routes"
    },
    // ------------------ 路由元素 结束 ----------------------
    // ------------------ Router 构建 开始 ----------------------
    scrollBehavior: {
        prefix: "rouscrollbehavior",
        body: [
            "scrollBehavior (to, from, savedPosition){\n\t${1://return desired position}\n\t$0\n}"
        ],
        description:
            "[router]Scroll Behavior(this feature only works in HTML5 history mode)"
    },
    alias: {
        prefix: "roualias",
        body: ["alias: $0"],
        description: "[router]alias"
    },
    redirect: {
        prefix: "rouredirect",
        body: ["redirect: $0"],
        description: "[router]redirect"
    },
    meta: {
        prefix: "roumeta",
        body: ["meta: { ${1:options} }"],
        description: "[router]Route Meta Fields"
    },
    // ------------------ Router 构建 结束 ----------------------
};
