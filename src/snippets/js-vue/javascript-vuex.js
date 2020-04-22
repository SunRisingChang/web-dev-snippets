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
        description: "如果希望模块更加独立或可重用，则可以使用命名空间：true将其标记为命名空间。注册模块后，将根据模块在其上注册的路径自动为其所有的获取，操作和突变命名空间"
    },
    state: {
        prefix: "vxstate",
        body: ["state: {\n\t$0\n}"],
        description: "应用程序级别状态"
    },
    mutations: {
        prefix: "vxmutations",
        body: ["mutations: {\n\t$0\n}"],
        description: "在Vuex商店中实际更改状态的唯一方法"
    },
    actions: {
        prefix: "vxactions",
        body: ["actions: {\n\t$0\n}"],
        description: "操作提交突变，它可以包含任意异步操作"
    },
    getters: {
        prefix: "vxgetters",
        body: ["getters: {\n\t$0\n}"],
        description: "商店的计算属性"
    },
    modules: {
        prefix: "vxmodules",
        body: ["modules: {\n\t$0\n}"],
        description: "存储模块"
    },
    plugins: {
        prefix: "vxplugins",
        body: ["plugins: [\n\t$0\n]"],
        description: "商店插件"
    },
    strict: {
        prefix: "vxstrict",
        body: ["strict: ${1:true}"],
        description: "严格存储"
    },
    devtools: {
        prefix: "vxdevtools",
        body: ["devtools: ${1:true}"],
        description: "商店devtools"
    },
    // ------------------ 构造器选项 结束 ----------------------
    // ------------------ 实例方法 开始 ----------------------
    "store.commit": {
        prefix: "vxstorecommit",
        body: ["store.commit('${1:MUTATIONS}', ${1:payload})"],
        description: "提交突变"
    },
    "store.dispatch": {
        prefix: "vxstoredispatch",
        body: ["store.dispatch('${1:action}', ${1:payload})"],
        description: "调度一个动作。"
    },
    "store.replaceState": {
        prefix: "vxstorereplacestate",
        body: ["store.replaceState(${1:state})"],
        description: "替换存储的根状态。仅将其用于状态水合/时间旅行目的。"
    },
    "store.watch": {
        prefix: "vxstorewatch",
        body: ["store.watch(${1:getter}, ${1:handler})"],
        description: "被动地观察getter函数的返回值，并在值更改时调用回调。"
    },
    "store.subscribe": {
        prefix: "vxstoresubscribe",
        body: ["store.subscribe(${1:handler})"],
        description: "订阅存储突变。每次突变后都会调用处理程序，并接收突变描述符和突变后状态作为参数："
    },
    "store.registerModule": {
        prefix: "vxstoreregistermodule",
        body: ["store.registerModule(${1:string}, ${1:Module})"],
        description: "注册动态模块"
    },
    "store.unregisterModule": {
        prefix: "vxstoreunregistermodule",
        body: ["store.unregisterModule(${1:string})"],
        description: "注销动态模块"
    },
    "store.hotUpdate": {
        prefix: "vxstorehotupdate",
        body: ["store.hotUpdate({$0})"],
        description: "热插拔新动作和突变。"
    },
    // ------------------ 实例方法 结束 ----------------------
    // ------------------ 组件绑定的辅助函数 开始 ----------------------
    mapState: {
        prefix: "vxmapstate",
        body: ["mapState('${1:modulePath}', ${1:[]|{\\}})"],
        description: "创建组件计算的选项，这些选项返回Vuex存储的子树。"
    },
    mapGetters: {
        prefix: "vxmapgetters",
        body: ["mapGetters('${1:modulePath}', ${1:[]|{\\}})"],
        description: "创建组件计算的选项，这些选项返回吸气剂的评估值。"
    },
    mapActions: {
        prefix: "vxmapactions",
        body: ["mapActions('${1:modulePath}', ${1:[]|{\\}})"],
        description: "创建分派动作的组件方法选项。"
    },
    mapMutations: {
        prefix: "vxmapmutations",
        body: ["mapMutations('${1:modulePath}', ${1:[]|{\\}})"],
        description: "创建提交突变的组件方法选项"
    },
    // ------------------ 组件绑定的辅助函数 结束 ----------------------
    // ------------------ vm实例属性 开始 ----------------------
    "$store.getters": {
        prefix: "vmvxgetters",
        body: ["${1:this}.\\$store.getters"],
        description: "商店的计算属性"
    },
    "$store.state": {
        prefix: "vmvxstate",
        body: ["${1:this}.\\$store.state"],
        description: "应用程序级别状态"
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
        description: "提交突变"
    },
    "$store.dispatch": {
        prefix: "vmvxdispatch",
        body: ["${1:this}.\\$store.dispatch('${1:action}', ${1:payload})"],
        description: "调度一个动作。"
    },
    // ------------------ vm实例方法 结束 ----------------------
};
