module.exports = {
    newvue: {
        prefix: "newvue",
        body: ["new Vue({",
            "router: ${1:VueRouter},",
            "store: ${2:Vuex},",
            "i18n: ${3:VueI18n},",
            "render: h => h(${4:App})",
            "}).\\$mount('#app')"],
        description: "创建Vue对象"
    },
    // ------------------- 全局配置 开始 --------------------------
    VueConfigSilent: {
        prefix: "vueconfigsilent",
        body: ["Vue.config.silent = ${1:true}"],
        description: "Suppress all Vue logs and warnings."
    },
    optionMergeStrategies: {
        prefix: "vueconfigoptionmergestrategies",
        body: ["Vue.config.optionMergeStrategies$0"],
        description:
            "Define custom merging strategies for options.The merge strategy receives the value of that option defined on the parent and child instances as the first and second arguments, respectively. The context Vue instance is passed as the third argument."
    },
    devtools: {
        prefix: "vueconfigdevtools",
        body: ["Vue.config.devtools = ${1:true}"],
        description:
            "Configure whether to allow vue-devtools inspection. This option’s default value is true in development builds and false in production builds. You can set it to true to enable inspection for production builds"
    },
    errorHandler: {
        prefix: "vueconfigerrorhandler",
        body: [
            "Vue.config.errorHandler = function (err, vm) {\n\t${1:// handle error}\n\t$0\n}"
        ],
        description:
            "Assign a handler for uncaught errors during component render and watchers. The handler gets called with the error and the Vue instance."
    },
    ignoredElements: {
        prefix: "vueconfigignoredelements",
        body: ["Vue.config.ignoredElements = [$0]"],
        description:
            "Make Vue ignore custom elements defined outside of Vue (e.g., using the Web Components APIs). Otherwise, it will throw a warning about an Unknown custom element, assuming that you forgot to register a global component or misspelled a component name."
    },
    keyCodes: {
        prefix: "vueconfigkeycodes",
        body: ["Vue.config.keyCodes = {$0}"],
        description: "Define custom key alias(es) for v-on."
    },
    // ------------------- 全局配置 结束 --------------------------
    // ------------------- 全局API 开始 --------------------------
    extend: {
        prefix: "vueextend",
        body: ["Vue.extend({\n\ttemplate: ${1:template}\n})"],
        description:
            "Create a “subclass” of the base Vue constructor. The argument should be an object containing component options."
    },
    nextTick: {
        prefix: "vuenexttick",
        body: ["Vue.nextTick({\n\t$1\n})"],
        description:
            "Defer the callback to be executed after the next DOM update cycle. Use it immediately after you’ve changed some data to wait for the DOM update."
    },
    set: {
        prefix: "vueset",
        body: ["Vue.set({${1:object}, ${1:key}, ${1:value})"],
        description:
            "Set a property on an object. If the object is reactive, ensure the property is created as a reactive property and trigger view updates. This is primarily used to get around the limitation that Vue cannot detect property additions."
    },
    delete: {
        prefix: "vuedelete",
        body: ["Vue.delete(${1:object}, ${1:key})"],
        description:
            "Delete a property on an object. If the object is reactive, ensure the deletion triggers view updates. This is primarily used to get around the limitation that Vue cannot detect property deletions, but you should rarely need to use it."
    },
    directive: {
        prefix: "vuedirective",
        body: ["Vue.directive(${1:id}, ${1:[definition]})"],
        description: "Register or retrieve a global directive."
    },
    filter: {
        prefix: "vuefilter",
        body: ["Vue.filter(${1:id}, ${1:[definition]})"],
        description: "Register or retrieve a global filter"
    },
    component: {
        prefix: "vuecomponent",
        body: ["Vue.component(${1:id}, ${1:[definition]})"],
        description:
            "Register or retrieve a global component. Registration also automatically sets the component’s name with the given id"
    },
    use: {
        prefix: "vueuse",
        body: ["Vue.use(${1:plugin})"],
        description:
            "Install a Vue.js plugin. If the plugin is an Object, it must expose an install method. If it is a function itself, it will be treated as the install method. The install method will be called with Vue as the argument"
    },
    mixin: {
        prefix: "vuemixin",
        body: ["Vue.mixin(${1:mixin})"],
        description:
            "Apply a mixin globally, which affects every Vue instance created afterwards. This can be used by plugin authors to inject custom behavior into components. Not recommended in application code"
    },
    compile: {
        prefix: "vuecompile",
        body: ["Vue.compile(${1:template})"],
        description:
            "Compiles a template string into a render function. Only available in the standalone build."
    },
    observable: {
        prefix: "vueobservable",
        body: ["Vue.observable(${1:Object})"],
        description: "让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。"
    },
    version: {
        prefix: "vueversion",
        body: ["Vue.version"],
        description:
            "提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。"
    },
    // ------------------- 全局API 结束 --------------------------
    // ------------------- 数据 开始 --------------------------
    data: {
        prefix: "vuedata",
        body: ["data () {\n\treturn {\n\t\t$0\n\t}\n}"],
        description:
            "The data object for the Vue instance. Vue will recursively convert its properties into getter/setters to make it “reactive”. The object must be plain: native objects such as browser API objects and prototype properties are ignored. A rule of thumb is that data should just be data - it is not recommended to observe objects with its own stateful behavior."
    },
    props: {
        prefix: "vueprops",
        body: ["props: {\n}"],
        description:
            "A list/hash of attributes that are exposed to accept data from the parent component. It has a simple Array-based syntax and an alternative Object-based syntax that allows advanced configurations such as type checking, custom validation and default values"
    },
    propsitem: {
        prefix: "vuepropsitem",
        body: ["${1:key}:{", 'type:${2}', 'default:${3}', 'required:${4:false}', '${5:validator:function(val){}}'],
        description:
            "一个props单元"
    },
    propsData: {
        prefix: "vuepropsdata",
        body: ["propsData:{\n}"],
        description:
            "Pass props to an instance during its creation. This is primarily intended to make unit testing easier"
    },
    computed: {
        prefix: "vuecomputed",
        body: ["computed: {\n\t$0\n}"],
        description:
            "Computed properties to be mixed into the Vue instance. All getters and setters have their this context automatically bound to the Vue instance."
    },
    methods: {
        prefix: "vuemethods",
        body: ["methods: {\n\t$0\n}"],
        description:
            "Methods to be mixed into the Vue instance. You can access these methods directly on the VM instance, or use them in directive expressions. All methods will have their this context automatically bound to the Vue instance"
    },
    watch: {
        prefix: "vuewatch",
        body: ["watch: {\n\t$0\n}"],
        description:
            "An object where keys are expressions to watch and values are the corresponding callbacks. The value can also be a string of a method name, or an Object that contains additional options. The Vue instance will call $watch() for each entry in the object at instantiation"
    },
    // ------------------- 数据 结束 --------------------------
    // ------------------- DOM 开始 --------------------------
    el: {
        prefix: "vueel",
        body: ["el"],
        description:
            "Provide the Vue instance an existing DOM element to mount on. It can be a CSS selector string or an actual HTMLElement."
    },
    template: {
        prefix: "vuetemplate",
        body: ["<template>\n\t$0\n</template>"],
        description:
            "A string template to be used as the markup for the Vue instance. The template will replace the mounted element. Any existing markup inside the mounted element will be ignored, unless content distribution slots are present in the template"
    },
    render: {
        prefix: "vuerender",
        body: ["render: function (${1:createElement}, ${1:context}) {\n\t$0\n}"],
        description:
            "An alternative to string templates allowing you to leverage the full programmatic power of JavaScript. The render function receives a createElement method as it’s first argument used to create VNodes."
    },
    renderError: {
        prefix: "vuerendererror",
        body: ["renderError: function (${1:createElement}, ${1:error}) {\n\t$0\n}"],
        description:
            "当 render 函数遭遇错误时，提供另外一种渲染输出。其错误将会作为第二个参数传递到 renderError。这个功能配合 hot-reload 非常实用"
    },
    // ------------------- DOM 结束 --------------------------
    // ------------------- 生命周期钩子 开始 --------------------------
    beforeCreate: {
        prefix: "vuebeforecreate",
        body: ["beforeCreate () {\n\t$0\n}"],
        description:
            "Called synchronously after the instance has just been initialized, before data observation and event/watcher setup."
    },
    created: {
        prefix: "vuecreated",
        body: ["created () {\n\t$0\n}"],
        description:
            "Called synchronously after the instance is created. At this stage, the instance has finished processing the options which means the following have been set up: data observation, computed properties, methods, watch/event callbacks. However, the mounting phase has not been started, and the $el property will not be available yet"
    },
    beforeMount: {
        prefix: "vuebeforemount",
        body: ["beforeMount () {\n\t$0\n}"],
        description:
            "Called right before the mounting begins: the render function is about to be called for the first time."
    },
    mounted: {
        prefix: "vuemounted",
        body: ["mounted () {\n\t$0\n}"],
        description:
            "Called after the instance has just been mounted where el is replaced by the newly created vm.$el. If the root instance is mounted to an in-document element, vm.$el will also be in-document when mounted is called."
    },
    beforeUpdate: {
        prefix: "vuebeforeupdate",
        body: ["beforeUpdate () {\n\t$0\n}"],
        description:
            "Called when the data changes, before the virtual DOM is re-rendered and patched.(This hook is not called during server-side rendering.)"
    },
    updated: {
        prefix: "vueupdated",
        body: ["updated () {\n\t$0\n}"],
        description:
            "Called after a data change causes the virtual DOM to be re-rendered and patched.(This hook is not called during server-side rendering.)"
    },
    activated: {
        prefix: "vueactivated",
        body: ["activated () {\n\t$0\n}"],
        description:
            "Called when a kept-alive component is activated.(This hook is not called during server-side rendering.)"
    },
    deactivated: {
        prefix: "vuedeactivated",
        body: ["deactivated () {\n\t$0\n}"],
        description:
            "Called when a kept-alive component is deactivated.(This hook is not called during server-side rendering.)"
    },
    beforeDestroy: {
        prefix: "vuebeforedestroy",
        body: ["beforeDestroy () {\n\t$0\n}"],
        description:
            "Called right before a Vue instance is destroyed. At this stage the instance is still fully functional.(This hook is not called during server-side rendering.)"
    },
    destroyed: {
        prefix: "vuedestroyed",
        body: ["destroyed () {\n\t$0\n}"],
        description:
            "Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed.(This hook is not called during server-side rendering.)"
    },
    errorCaptured: {
        prefix: "vueerrorcaptured",
        body: ["errorCaptured (err, vm, info) {\n\t$0\n}"],
        description:
            "当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。"
    },
    // ------------------- 生命周期钩子 结束 --------------------------
    // ------------------- 资源 开始 --------------------------
    directives: {
        prefix: "vuedirectives",
        body: ["directives: {\n\t$0\n}"],
        description:
            "A hash of directives to be made available to the Vue instance."
    },
    filters: {
        prefix: "vuefilters",
        body: ["filters: {\n\t$0\n}"],
        description: "A hash of filters to be made available to the Vue instance."
    },
    components: {
        prefix: "vuecomponents",
        body: ["components: {\n\t$0\n}"],
        description:
            "A hash of components to be made available to the Vue instance."
    },
    // ------------------- 资源 结束 --------------------------
    // ------------------- 组合 开始 --------------------------
    parent: {
        prefix: "vueparent",
        body: ["parent"],
        description:
            "Specify the parent instance for the instance to be created. Establishes a parent-child relationship between the two. "
    },
    mixins: {
        prefix: "vuemixins",
        body: ["mixins: [$0]"],
        description:
            "The mixins option accepts an array of mixin objects. These mixin objects can contain instance options just like normal instance objects, and they will be merged against the eventual options using the same option merging logic in Vue.extend()."
    },
    extends: {
        prefix: "vueextends",
        body: ["extends"],
        description:
            "Allows declaratively extending another component (could be either a plain options object or a constructor) without having to use Vue.extend. "
    },
    provide: {
        prefix: "vueprovide",
        body: ["provide:{\n${1}}"],
        description:
            "这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。"
    },
    inject: {
        prefix: "vueinject",
        body: ["inject:[${1}]"],
        description:
            "这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。"
    },
    // ------------------- 组合 结束 --------------------------
    // ------------------- 其它 开始 --------------------------
    delimiters: {
        prefix: "vuedelimiters",
        body: ["delimiters"],
        description:
            "Change the plain text interpolation delimiters. This option is only available in the standalone build."
    },
    functional: {
        prefix: "vuefunctional",
        body: ["functional"],
        description:
            "Causes a component to be stateless (no data) and instanceless (no this context)."
    },
    model: {
        prefix: "vuemodel",
        body: ["model:{", "prop:'${1:value}'", "event: '${2:input}'", '}'],
        description:
            "允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突。"
    },
    inheritAttrs: {
        prefix: "vueinheritattrs",
        body: ["inheritAttrs:${1:false}"],
        description:
            "默认情况下父作用域的不被认作 props 的 attribute 绑定 (attribute bindings) 将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。通过设置 inheritAttrs 到 false，这些默认行为将会被去掉。而通过 (同样是 2.4 新增的) 实例属性 $attrs 可以让这些 attribute 生效，且可以通过 v-bind 显性的绑定到非根元素上。"
    },
    comments: {
        prefix: "vuecomments",
        body: ["comments:${1:true}"],
        description:
            "当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。"
    },
    // ------------------- 其它 结束 --------------------------
    // ------------------- vm实例属性 开始 --------------------------
    "vm.$data": {
        prefix: "vmdata",
        body: ["${1:this}.\\$data"],
        description:
            "The data object that the Vue instance is observing. The Vue instance proxies access to the properties on its data object."
    },
    "vm.$el": {
        prefix: "vmel",
        body: ["${1:this}.\\$el"],
        description: "The root DOM element that the Vue instance is managing."
    },
    "vm.$options": {
        prefix: "vmoptions",
        body: ["${1:this}.\\$options"],
        description:
            "The instantiation options used for the current Vue instance. This is useful when you want to include custom properties in the options"
    },
    "vm.$parent": {
        prefix: "vmparent",
        body: ["${1:this}.\\$parent"],
        description: "The parent instance, if the current instance has one."
    },
    "vm.$root": {
        prefix: "vmroot",
        body: ["${1:this}.\\$root"],
        description:
            "The root Vue instance of the current component tree. If the current instance has no parents this value will be itself."
    },
    "vm.$children": {
        prefix: "vmchildren",
        body: ["${1:this}.\\$children"],
        description:
            "The direct child components of the current instance. (Note there’s no order guarantee for $children, and it is not reactive.)"
    },
    "vm.$slots": {
        prefix: "vmslots",
        body: ["${1:this}.\\$slots"],
        description:
            "Used to programmatically access content distributed by slots. Each named slot has its own corresponding property"
    },
    "vm.$scopedSlots": {
        prefix: "vmscopedslots",
        body: ["${1:this}.\\$scopedSlots"],
        description:
            "Used to programmatically access scoped slots. For each slot, including the default one, the object contains a corresponding function that returns VNodes."
    },
    "vm.$refs": {
        prefix: "vmrefs",
        body: ["${1:this}.\\$refs"],
        description:
            "An object that holds child components that have ref registered."
    },
    "vm.$isServer": {
        prefix: "vmisserver",
        body: ["${1:this}.\\$isServer"],
        description: "Whether the current Vue instance is running on the server."
    },
    "vm.$attrs": {
        prefix: "vmattrs",
        body: ["${1:this}.\\$attrs"],
        description: '包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。'
    },
    "vm.$listeners": {
        prefix: "vmlisteners",
        body: ["${1:this}.\\$listeners"],
        description: '包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。'
    },
    // ------------------- vm实例属性 结束 --------------------------
    // ------------------- vm数据 开始 --------------------------
    "vm.$watch": {
        prefix: "vmwatch",
        body: [
            "${1:this}.\\$watch(${1:expOrFn}, ${1:callback}, { ${1:options} }$0)"
        ],
        description:
            "Watch an expression or a computed function on the Vue instance for changes. The callback gets called with the new value and the old value. "
    },
    "vm.$set": {
        prefix: "vmset",
        body: ["${1:this}.\\$set(${1:object}, ${1:key}, ${1:value})"],
        description: "This is the alias of the global Vue.set."
    },
    "vm.$delete": {
        prefix: "vmdelete",
        body: ["${1:this}.\\$delete(${1:object}, ${1:key})"],
        description: "This is the alias of the global Vue.delete."
    },
    // ------------------- vm数据 结束 --------------------------
    // ------------------- vm事件 开始 --------------------------
    "vm.$on": {
        prefix: "vmon",
        body: ["${1:this}.\\$on(${1:event}, ${1:callback})"],
        description:
            "Listen for a custom event on the current vm. Events can be triggered by vm.$emit. The callback will receive all the additional arguments passed into these event-triggering methods."
    },
    "vm.$once": {
        prefix: "vmonce",
        body: ["${1:this}.\\$once(${1:event}, ${1:callback})"],
        description:
            "Listen for a custom event, but only once. The listener will be removed once it triggers for the first time."
    },
    "vm.$off": {
        prefix: "vmoff",
        body: ["${1:this}.\\$off(${1:event}, ${1:callback})"],
        description: "Remove event listener(s)."
    },
    "vm.$emit": {
        prefix: "vmemit",
        body: ["${1:this}.\\$emit(${1:event}, ${1:[…args]})"],
        description:
            "Trigger an event on the current instance. Any additional arguments will be passed into the listener’s callback function."
    },
    // ------------------- vm事件 结束 --------------------------
    // ------------------- vm生命周期 开始 --------------------------
    "vm.$mount": {
        prefix: "vmmount",
        body: ["${1:this}.\\$mount(${1:elementOrSelector})"],
        description:
            "If a Vue instance didn’t receive the el option at instantiation, it will be in “unmounted” state, without an associated DOM element. vm.$mount() can be used to manually start the mounting of an unmounted Vue instance."
    },
    "vm.$forceUpdate": {
        prefix: "vmforceupdate",
        body: ["${1:this}.\\$forceUpdate()"],
        description:
            "Force the Vue instance to re-render. Note it does not affect all child components, only the instance itself and child components with inserted slot content."
    },
    "vm.$nextTick": {
        prefix: "vmnexttick",
        body: ["${1:this}.\\$nextTick(${1:callback})"],
        description:
            "Defer the callback to be executed after the next DOM update cycle. "
    },
    "vm.$destroy": {
        prefix: "vmdestroy",
        body: ["${1:this}.\\$destroy()"],
        description:
            "Completely destroy a vm. Clean up its connections with other existing vms, unbind all its directives, turn off all event listeners."
    }
    // ------------------- vm生命周期 结束 --------------------------
};
