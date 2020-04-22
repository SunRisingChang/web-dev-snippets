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
        description: "禁止显示所有Vue日志和警告。"
    },
    optionMergeStrategies: {
        prefix: "vueconfigoptionmergestrategies",
        body: ["Vue.config.optionMergeStrategies$0"],
        description: "为选项定义自定义合并策略。合并策略将分别在父实例和子实例上定义的该选项的值作为第一个和第二个参数。上下文Vue实例作为第三个参数传递。"
    },
    devtools: {
        prefix: "vueconfigdevtools",
        body: ["Vue.config.devtools = ${1:true}"],
        description: "配置是否允许vue-devtools检查。此选项的默认值在开发版本中为true，在生产版本中为false。您可以将其设置为true以启用对生产版本的检查"
    },
    errorHandler: {
        prefix: "vueconfigerrorhandler",
        body: [
            "Vue.config.errorHandler = function (err, vm) {\n\t${1:// handle error}\n\t$0\n}"
        ],
        description: "为组件渲染和观察者期间未捕获的错误分配处理程序。将通过错误和Vue实例调用处理程序。"
    },
    ignoredElements: {
        prefix: "vueconfigignoredelements",
        body: ["Vue.config.ignoredElements = [$0]"],
        description: "使Vue忽略在Vue之外定义的自定义元素（例如，使用Web组件API）。否则，假定您忘记注册全局组件或拼写错误的组件名称，它将引发有关Unknown自定义元素的警告。"
    },
    keyCodes: {
        prefix: "vueconfigkeycodes",
        body: ["Vue.config.keyCodes = {$0}"],
        description: "为v-on定义自定义密钥别名。"
    },
    // ------------------- 全局配置 结束 --------------------------
    // ------------------- 全局API 开始 --------------------------
    extend: {
        prefix: "vueextend",
        body: ["Vue.extend({\n\ttemplate: ${1:template}\n})"],
        description: "创建基础Vue构造函数的“子类”。参数应为包含组件选项的对象。"
    },
    nextTick: {
        prefix: "vuenexttick",
        body: ["Vue.nextTick({\n\t$1\n})"],
        description: "推迟下一个DOM更新周期后执行的回调。更改一些数据以等待DOM更新后，请立即使用它。"
    },
    set: {
        prefix: "vueset",
        body: ["Vue.set({${1:object}, ${1:key}, ${1:value})"],
        description: "在对象上设置属性。如果对象是反应式的，请确保将该属性创建为反应式属性并触发视图更新。这主要用于解决Vue无法检测到属性添加的限制。"
    },
    delete: {
        prefix: "vuedelete",
        body: ["Vue.delete(${1:object}, ${1:key})"],
        description: "删除对象的属性。如果对象是反应性的，请确保删除触发视图更新。这主要是为了解决Vue无法检测到属性删除的限制，但是您几乎不需要使用它。"
    },
    directive: {
        prefix: "vuedirective",
        body: ["Vue.directive(${1:id}, ${1:[definition]})"],
        description: "注册或检索全局指令。"
    },
    filter: {
        prefix: "vuefilter",
        body: ["Vue.filter(${1:id}, ${1:[definition]})"],
        description: "注册或检索全局过滤器"
    },
    component: {
        prefix: "vuecomponent",
        body: ["Vue.component(${1:id}, ${1:[definition]})"],
        description: "注册或检索全局组件。注册还会自动使用给定的ID设置组件名称"
    },
    use: {
        prefix: "vueuse",
        body: ["Vue.use(${1:plugin})"],
        description: "安装Vue.js插件。如果插件是对象，则必须公开安装方法。如果它本身是一个函数，它将被视为安装方法。将以Vue作为参数调用install方法"
    },
    mixin: {
        prefix: "vuemixin",
        body: ["Vue.mixin(${1:mixin})"],
        description: "全局应用mixin，这会影响以后创建的每个Vue实例。插件作者可以使用此方法将自定义行为注入组件。不建议在应用程式程式码中"
    },
    compile: {
        prefix: "vuecompile",
        body: ["Vue.compile(${1:template})"],
        description: "将模板字符串编译为渲染函数。仅在独立版本中可用。"
    },
    observable: {
        prefix: "vueobservable",
        body: ["Vue.observable(${1:Object})"],
        description: "让一个对象可响应。Vue内部会用它来处理data函数返回的对象。"
    },
    version: {
        prefix: "vueversion",
        body: ["Vue.version"],
        description: "提供串口形式的Vue安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采用不同的策略。"
    },
    // ------------------- 全局API 结束 --------------------------
    // ------------------- 数据 开始 --------------------------
    data: {
        prefix: "vuedata",
        body: ["data () {\n\treturn {\n\t\t$0\n\t}\n}"],
        description: "Vue实例的数据对象。 Vue将以递归方式将其属性转换为getter / setter，以使其“具有反应性”。该对象必须是普通对象：诸如浏览器API对象和原型属性之类的本机对象将被忽略。一条经验法则是，数据应该只是数据-不建议观察具有自身状态行为的对象。"
    },
    props: {
        prefix: "vueprops",
        body: ["props: {\n}"],
        description: "公开以接受来自父组件的数据的属性列表/哈希。它具有简单的基于数组的语法和可选的基于对象的语法，这些语法允许进行高级配置，例如类型检查，自定义验证和默认值"
    },
    propsitem: {
        prefix: "vuepropsitem",
        body: ["${1:key}:{", 'type:${2}', 'default:${3}', 'required:${4:false}', '${5:validator:function(val){}}'],
        description: "一个props单元"
    },
    propsData: {
        prefix: "vuepropsdata",
        body: ["propsData:{\n}"],
        description: "在创建实例时将道具传递给实例。这主要是为了简化单元测试"
    },
    computed: {
        prefix: "vuecomputed",
        body: ["computed: {\n\t$0\n}"],
        description: "计算的属性将被混合到Vue实例中。所有获取器和设置器的此上下文都自动绑定到Vue实例。"
    },
    methods: {
        prefix: "vuemethods",
        body: ["methods: {\n\t$0\n}"],
        description: "要混合到Vue实例中的方法。您可以直接在VM实例上访问这些方法，也可以在指令表达式中使用它们。所有方法的上下文都将自动绑定到Vue实例"
    },
    watch: {
        prefix: "vuewatch",
        body: ["watch: {\n\t$0\n}"],
        description: "一个对象，其中键是要监视的表达式，值是相应的回调。该值也可以是方法名称的字符串，也可以是包含其他选项的对象。 Vue实例将在实例化时为对象中的每个条目调用$ watch（）"
    },
    // ------------------- 数据 结束 --------------------------
    // ------------------- DOM 开始 --------------------------
    el: {
        prefix: "vueel",
        body: ["el"],
        description: "向Vue实例提供要安装的现有DOM元素。它可以是CSS选择器字符串或实际的HTMLElement。"
    },
    template: {
        prefix: "vuetemplate",
        body: ["<template>\n\t$0\n</template>"],
        description: "用作Vue实例的标记的字符串模板。模板将替换已安装的元素。除非模板中存在内容分发槽，否则将忽略已安装元素内部的任何现有标记。"
    },
    render: {
        prefix: "vuerender",
        body: ["render: function (${1:createElement}, ${1:context}) {\n\t$0\n}"],
        description: "字符串模板的替代方法，使您可以利用JavaScript的全部编程功能。渲染函数将使用createElement方法作为用于创建VNode的第一个参数。"
    },
    renderError: {
        prefix: "vuerendererror",
        body: ["renderError: function (${1:createElement}, ${1:error}) {\n\t$0\n}"],
        description: "当render函数遇到错误时，提供另外一种渲染输出。其错误将会作为第二个参数传递到renderError。这个功能配合hot-reload非常实用"
    },
    // ------------------- DOM 结束 --------------------------
    // ------------------- 生命周期钩子 开始 --------------------------
    beforeCreate: {
        prefix: "vuebeforecreate",
        body: ["beforeCreate () {\n\t$0\n}"],
        description: "在实例初始化之后，数据观察和事件/观察者设置之前同步调用。"
    },
    created: {
        prefix: "vuecreated",
        body: ["created () {\n\t$0\n}"],
        description: "创建实例后同步调用。在此阶段，实例已完成对选项的处理，这意味着已设置以下内容：数据观察，计算的属性，方法，监视/事件回调。但是，安装阶段尚未开始，并且$ el属性尚不可用"
    },
    beforeMount: {
        prefix: "vuebeforemount",
        body: ["beforeMount () {\n\t$0\n}"],
        description: "在安装开始之前立即被调用：render函数将被首次调用。"
    },
    mounted: {
        prefix: "vuemounted",
        body: ["mounted () {\n\t$0\n}"],
        description: "在实例刚刚装入后调用，其中el被新创建的vm。$ el替换。如果将根实例安装到文档中元素，则在调用安装时，vm。$ el也将是文档中。"
    },
    beforeUpdate: {
        prefix: "vuebeforeupdate",
        body: ["beforeUpdate () {\n\t$0\n}"],
        description: "在数据更改时调用，在重新渲染和修补虚拟DOM之前调用（在服务器端渲染期间不调用此钩子。）"
    },
    updated: {
        prefix: "vueupdated",
        body: ["updated () {\n\t$0\n}"],
        description: "在数据更改导致虚拟DOM被重新渲染和修补后调用（在服务器端渲染期间不调用此挂钩）。"
    },
    activated: {
        prefix: "vueactivated",
        body: ["activated () {\n\t$0\n}"],
        description: "在激活保持活动的组件时调用（在服务器端渲染期间不调用此钩子。）"
    },
    deactivated: {
        prefix: "vuedeactivated",
        body: ["deactivated () {\n\t$0\n}"],
        description: "在停用保持活动的组件时调用（在服务器端渲染期间不调用此挂钩。）"
    },
    beforeDestroy: {
        prefix: "vuebeforedestroy",
        body: ["beforeDestroy () {\n\t$0\n}"],
        description: "在销毁Vue实例之前立即调用。在此阶段，实例仍然可以正常运行（在服务器端渲染期间不会调用此钩子。）"
    },
    destroyed: {
        prefix: "vuedestroyed",
        body: ["destroyed () {\n\t$0\n}"],
        description: "在Vue实例被销毁后调用。调用此挂钩时，Vue实例的所有指令均已解除绑定，所有事件侦听器已被删除，所有子Vue实例也已被销毁（在服务器端渲染期间不会调用此挂钩）。"
    },
    errorCaptured: {
        prefix: "vueerrorcaptured",
        body: ["errorCaptured (err, vm, info) {\n\t$0\n}"],
        description: "当钩子会收到三个参数：错误对象，发生错误的组件实例以及一个包含错误源信息的字符串。此钩子可以返回false以阻止该错误继续向上传播。"
    },
    // ------------------- 生命周期钩子 结束 --------------------------
    // ------------------- 资源 开始 --------------------------
    directives: {
        prefix: "vuedirectives",
        body: ["directives: {\n\t$0\n}"],
        description: "指令的哈希值可用于Vue实例。"
    },
    filters: {
        prefix: "vuefilters",
        body: ["filters: {\n\t$0\n}"],
        description: "可供Vue实例使用的过滤器哈希。"
    },
    components: {
        prefix: "vuecomponents",
        body: ["components: {\n\t$0\n}"],
        description: "要使Vue实例可用的组件的哈希。"
    },
    // ------------------- 资源 结束 --------------------------
    // ------------------- 组合 开始 --------------------------
    parent: {
        prefix: "vueparent",
        body: ["parent"],
        description: "为要创建的实例指定父实例。在两者之间建立父子关系。"
    },
    mixins: {
        prefix: "vuemixins",
        body: ["mixins: [$0]"],
        description: "mixins选项接受一个混合对象数组。这些混合对象可以像普通实例对象一样包含实例选项，并且它们将使用Vue.extend（）中相同的选项合并逻辑与最终选项进行合并。"
    },
    extends: {
        prefix: "vueextends",
        body: ["extends"],
        description: "允许以声明方式扩展另一个组件（可以是纯选项对象或构造函数），而不必使用Vue.extend。"
    },
    provide: {
        prefix: "vueprovide",
        body: ["provide:{\n${1}}"],
        description: "这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，本身组件层次有多深，并在开始上下游关系成立的时间里始终有效。"
    },
    inject: {
        prefix: "vueinject",
        body: ["inject:[${1}]"],
        description: "这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，本身组件层次有多深，并在开始上下游关系成立的时间里始终有效。"
    },
    // ------------------- 组合 结束 --------------------------
    // ------------------- 其它 开始 --------------------------
    delimiters: {
        prefix: "vuedelimiters",
        body: ["delimiters"],
        description: "更改纯文本插值定界符。此选项仅在独立版本中可用。"
    },
    functional: {
        prefix: "vuefunctional",
        body: ["functional"],
        description: "使组件为无状态（无数据）和无实例（无此上下文）。"
    },
    model: {
        prefix: "vuemodel",
        body: ["model:{", "prop:'${1:value}'", "event: '${2:input}'", '}'],
        description: "允许一个自定义组件在使用v-model时定制道具和事件。在其他情况下，一个组件上的v-model会把值放在使用道具并把输入利用事件上，但是一些输入类型选中单选框和复选框按钮可能想使用值道具来达到不同的目的。使用模型选项可以回避这些情况产生的冲突。"
    },
    inheritAttrs: {
        prefix: "vueinheritattrs",
        body: ["inheritAttrs:${1:false}"],
        description: "默认情况下父作用域的不被认作props的属性绑定（属性绑定）将成为“回退”且作为普通的HTML属性应用在子组件的根元素上。当撰写包裹一个目标元素或另一个时组件的组件时，这可能不会总是符合预期行为。通过设置InheritAttrs到false，这些替代行为将会被掉掉。而通过（同样是2.4补充的）实例属性$ attrs可以让这些属性发挥作用，且可以通过v-bind显性的绑定到非根元素上。"
    },
    comments: {
        prefix: "vuecomments",
        body: ["comments:${1:true}"],
        description: "当设为true时，将会保留并且渲染模板中的HTML注释。替代行为是舍弃它们。"
    },
    // ------------------- 其它 结束 --------------------------
    // ------------------- vm实例属性 开始 --------------------------
    "vm.$data": {
        prefix: "vmdata",
        body: ["${1:this}.\\$data"],
        description: "Vue实例正在观察的数据对象。 Vue实例代理访问其数据对象上的属性。"
    },
    "vm.$el": {
        prefix: "vmel",
        body: ["${1:this}.\\$el"],
        description: "Vue实例正在管理的根DOM元素。"
    },
    "vm.$options": {
        prefix: "vmoptions",
        body: ["${1:this}.\\$options"],
        description: "用于当前Vue实例的实例化选项。当您要在选项中包括自定义属性时，这很有用"
    },
    "vm.$parent": {
        prefix: "vmparent",
        body: ["${1:this}.\\$parent"],
        description: "父实例（如果当前实例有一个）。"
    },
    "vm.$root": {
        prefix: "vmroot",
        body: ["${1:this}.\\$root"],
        description: "当前组件树的根Vue实例。如果当前实例没有父对象，则该值为自身。"
    },
    "vm.$children": {
        prefix: "vmchildren",
        body: ["${1:this}.\\$children"],
        description: "当前实例的直接子组件。 （请注意，没有为$ children提供订单保证，它也没有反应性。）"
    },
    "vm.$slots": {
        prefix: "vmslots",
        body: ["${1:this}.\\$slots"],
        description: "用于以编程方式访问插槽分配的内容。每个命名的插槽都有其对应的属性"
    },
    "vm.$scopedSlots": {
        prefix: "vmscopedslots",
        body: ["${1:this}.\\$scopedSlots"],
        description: "用于以编程方式访问作用域插槽。对于每个插槽（包括默认插槽），该对象均包含一个返回VNodes的对应函数。"
    },
    "vm.$refs": {
        prefix: "vmrefs",
        body: ["${1:this}.\\$refs"],
        description: "一个对象，具有已注册引用的子组件。"
    },
    "vm.$isServer": {
        prefix: "vmisserver",
        body: ["${1:this}.\\$isServer"],
        description: "当前Vue实例是否正在服务器上运行。"
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
        description: "在Vue实例上观看表达式或计算函数以了解更改。使用新值和旧值调用回调。"
    },
    "vm.$set": {
        prefix: "vmset",
        body: ["${1:this}.\\$set(${1:object}, ${1:key}, ${1:value})"],
        description: "这是全局Vue.set的别名。"
    },
    "vm.$delete": {
        prefix: "vmdelete",
        body: ["${1:this}.\\$delete(${1:object}, ${1:key})"],
        description: "这是全局Vue.delete的别名。"
    },
    // ------------------- vm数据 结束 --------------------------
    // ------------------- vm事件 开始 --------------------------
    "vm.$on": {
        prefix: "vmon",
        body: ["${1:this}.\\$on(${1:event}, ${1:callback})"],
        description: "侦听当前虚拟机上的自定义事件。可以通过vm。$ emit触发事件。回调将接收传递给这些事件触发方法的所有其他参数。"
    },
    "vm.$once": {
        prefix: "vmonce",
        body: ["${1:this}.\\$once(${1:event}, ${1:callback})"],
        description: "收听自定义事件，但仅一次。首次触发时，监听器将被删除。"
    },
    "vm.$off": {
        prefix: "vmoff",
        body: ["${1:this}.\\$off(${1:event}, ${1:callback})"],
        description: "删除事件侦听器。"
    },
    "vm.$emit": {
        prefix: "vmemit",
        body: ["${1:this}.\\$emit(${1:event}, ${1:[…args]})"],
        description: "在当前实例上触发事件。任何其他参数都将传递到侦听器的回调函数中。"
    },
    // ------------------- vm事件 结束 --------------------------
    // ------------------- vm生命周期 开始 --------------------------
    "vm.$mount": {
        prefix: "vmmount",
        body: ["${1:this}.\\$mount(${1:elementOrSelector})"],
        description: "如果Vue实例在实例化时未收到el选项，则它将处于“已卸载”状态，并且没有关联的DOM元素。 vm。$ mount（）可用于手动启动未安装的Vue实例的安装。"
    },
    "vm.$forceUpdate": {
        prefix: "vmforceupdate",
        body: ["${1:this}.\\$forceUpdate()"],
        description: "强制Vue实例重新渲染。请注意，它不会影响所有子组件，只会影响实例本身和插入了插槽内容的子组件。"
    },
    "vm.$nextTick": {
        prefix: "vmnexttick",
        body: ["${1:this}.\\$nextTick(${1:callback})"],
        description: "推迟下一个DOM更新周期后执行的回调。"
    },
    "vm.$destroy": {
        prefix: "vmdestroy",
        body: ["${1:this}.\\$destroy()"],
        description: "完全销毁虚拟机。清理其与其他现有vm的连接，解除其所有指令的绑定，关闭所有事件侦听器。"
    }
    // ------------------- vm生命周期 结束 --------------------------
};
