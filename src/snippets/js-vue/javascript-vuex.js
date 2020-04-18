module.exports = {
    newvuex: {
        prefix: "newvuex",
        body: [
            "new Vuex.Store({\n\tstrict: process.env.NODE_ENV !== 'production',\n\t$0\n})"
        ],
        description: "创建Vuex对象"
    },
    // ------------------ 构造器选项 开始 ----------------------
    namespaced: {
        prefix: "vxnamespaced",
        body: ["namespaced: true"],
        description:
            "[vuex]If you want your modules to be more self-contained or reusable, you can mark it as namespaced with namespaced: true. When the module is registered, all of its getters, actions and mutations will be automatically namespaced based on the path the module is registered at"
    },
    state: {
        prefix: "vxstate",
        body: ["state: {\n\t$0\n}"],
        description: "[vuex]The application level state"
    },
    mutations: {
        prefix: "vxmutations",
        body: ["mutations: {\n\t$0\n}"],
        description: "[vuex]The only way to actually change state in a Vuex store"
    },
    actions: {
        prefix: "vxactions",
        body: ["actions: {\n\t$0\n}"],
        description:
            "[vuex]actions commit mutations,it can contain arbitrary asynchronous operations"
    },
    getters: {
        prefix: "vxgetters",
        body: ["getters: {\n\t$0\n}"],
        description: "[vuex]computed properties for stores"
    },
    modules: {
        prefix: "vxmodules",
        body: ["modules: {\n\t$0\n}"],
        description: "[vuex]store modules"
    },
    plugins: {
        prefix: "vxplugins",
        body: ["plugins: [\n\t$0\n]"],
        description: "[vuex]store plugins"
    },
    strict: {
        prefix: "vxstrict",
        body: ["strict: ${1:true}"],
        description: "[vuex]store strict"
    },
    devtools: {
        prefix: "vxdevtools",
        body: ["devtools: ${1:true}"],
        description: "[vuex]store devtools"
    },
    // ------------------ 构造器选项 结束 ----------------------
    // ------------------ 实例方法 开始 ----------------------
    "store.commit": {
        prefix: "vxstorecommit",
        body: ["store.commit('${1:MUTATIONS}', ${1:payload})"],
        description: "[vuex]Commit a mutation"
    },
    "store.dispatch": {
        prefix: "vxstoredispatch",
        body: ["store.dispatch('${1:action}', ${1:payload})"],
        description: "[vuex]Dispatch an action."
    },
    "store.replaceState": {
        prefix: "vxstorereplacestate",
        body: ["store.replaceState(${1:state})"],
        description:
            "[vuex]Replace the store's root state. Use this only for state hydration / time-travel purposes."
    },
    "store.watch": {
        prefix: "vxstorewatch",
        body: ["store.watch(${1:getter}, ${1:handler})"],
        description:
            "[vuex]Reactively watch a getter function's return value, and call the callback when the value changes. "
    },
    "store.subscribe": {
        prefix: "vxstoresubscribe",
        body: ["store.subscribe(${1:handler})"],
        description:
            "[vuex]Subscribe to store mutations. The handler is called after every mutation and receives the mutation descriptor and post-mutation state as arguments:"
    },
    "store.registerModule": {
        prefix: "vxstoreregistermodule",
        body: ["store.registerModule(${1:string}, ${1:Module})"],
        description: "[vuex]Register a dynamic module"
    },
    "store.unregisterModule": {
        prefix: "vxstoreunregistermodule",
        body: ["store.unregisterModule(${1:string})"],
        description: "[vuex]Unregister a dynamic module"
    },
    "store.hotUpdate": {
        prefix: "vxstorehotupdate",
        body: ["store.hotUpdate({$0})"],
        description: "[vuex]Hot swap new actions and mutations. "
    },
    // ------------------ 实例方法 结束 ----------------------
    // ------------------ 组件绑定的辅助函数 开始 ----------------------
    mapState: {
        prefix: "vxmapstate",
        body: ["mapState('${1:modulePath}', ${1:[]|{\\}})"],
        description:
            "[vuex]Create component computed options that return the sub tree of the Vuex store. "
    },
    mapGetters: {
        prefix: "vxmapgetters",
        body: ["mapGetters('${1:modulePath}', ${1:[]|{\\}})"],
        description:
            "[vuex]Create component computed options that return the evaluated value of a getter."
    },
    mapActions: {
        prefix: "vxmapactions",
        body: ["mapActions('${1:modulePath}', ${1:[]|{\\}})"],
        description:
            "[vuex]Create component methods options that dispatch an action."
    },
    mapMutations: {
        prefix: "vxmapmutations",
        body: ["mapMutations('${1:modulePath}', ${1:[]|{\\}})"],
        description: "[vuex]Create component methods options that commit a mutation"
    },
    // ------------------ 组件绑定的辅助函数 结束 ----------------------
    // ------------------ vm实例属性 开始 ----------------------
    "$store.getters": {
        prefix: "vmvxgetters",
        body: ["${1:this}.\\$store.getters"],
        description: "[vuex]computed properties for stores"
    },
    "$store.state": {
        prefix: "vmvxstate",
        body: ["${1:this}.\\$store.state"],
        description: "[vuex]The application level state"
    },
    // ------------------ vm实例属性 结束 ----------------------
    // ------------------ vm实例方法 开始 ----------------------
    $store: {
        prefix: "vmvxstore",
        body: ["${1:this}.\\$store"],
        description: "[router]$store"
    },
    "$store.commit": {
        prefix: "vmvxcommit",
        body: ["${1:this}.\\$store.commit('${1:MUTATIONS}', ${1:payload})"],
        description: "[vuex]Commit a mutation"
    },
    "$store.dispatch": {
        prefix: "vmvxdispatch",
        body: ["${1:this}.\\$store.dispatch('${1:action}', ${1:payload})"],
        description: "[vuex]Dispatch an action."
    },
    // ------------------ vm实例方法 结束 ----------------------
};
