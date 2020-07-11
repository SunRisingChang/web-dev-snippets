module.exports = {
  "vue-templates": {
    "prefix": "vue",
    "body": [
      "<template>",
      "  <div id=\"${1:name}\">${2}</div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name: \"${1:name}\",",
      "  data() {",
      "    return {};",
      "  },",
      "  methods: {}",
      "};",
      "</script>",
      "",
      "<style lang=\"scss\" scoped>",
      "</style>"
    ],
    "description": "快速创建Vue模板"
  },
  template: {
    prefix: "template",
    body: ["<template>\n\t$0\n</template>"],
    description:
      "Vue 模板标签"
  },
  "v-text": {
    prefix: "vtext",
    body: ['v-text="${1:msg}"'],
    description:
      "更新元素的 textContent。如果要更新部分的 textContent，需要使用 {{ Mustache }} 插值。"
  },
  "v-html": {
    prefix: "vhtml",
    body: ['v-html="${1:html}"'],
    description:
      "更新元素的 innerHTML。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。"
  },
  "v-if": {
    prefix: "vif",
    body: ['v-if="${1:condition}"'],
    description:
      "根据表达式的值的 truthiness 来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 <template>，将提出它的内容作为条件块。"
  },
  "v-show": {
    prefix: "vshow",
    body: ['v-show="${1:condition}"'],
    description:
      "根据表达式之真假值，切换元素的 display CSS 属性。"
  },
  "v-else": {
    prefix: "velse",
    body: ["v-else"],
    description: "为 v-if 或者 v-else-if 添加“else 块”。"
  },
  "v-else-if": {
    prefix: "velseif",
    body: ['v-else-if="${1:condition}"'],
    description: "表示 v-if 的“else if 块”。可以链式调用。"
  },
  "v-for": {
    prefix: "vfor",
    body: ['v-for="(${1:item},index) in ${1:items}"'],
    description:
      "基于源数据多次渲染元素或模板块。"
  },
  "v-on": {
    prefix: "von",
    body: ['v-on:${1:event}="${1:handle}"'],
    description:
      "绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。"
  },
  "v-bind": {
    prefix: "vbind",
    body: ['v-bind:${1:argument}="${1:optional}"'],
    description:
      "动态地绑定一个或多个 attribute，或一个组件 prop 到表达式。"
  },
  "v-model": {
    prefix: "vmodel",
    body: ['v-model="${1:msg}"'],
    description:
      "在表单控件或者组件上创建双向绑定。"
  },
  "v-pre": {
    prefix: "vpre",
    body: ["v-pre"],
    description:
      "跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。"
  },
  "v-slot": {
    prefix: "vslot",
    body: ["v-slot"],
    description:
      "提供具名插槽或需要接收 prop 的插槽。"
  },
  "v-cloak": {
    prefix: "vcloak",
    body: ["v-cloak"],
    description:
      "这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。"
  },
  "v-once": {
    prefix: "vonce",
    body: ["v-once"],
    description:
      "只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。"
  },
  key: {
    prefix: "key",
    body: [':key="$1"'],
    description:
      "key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。"
  },
  ref: {
    prefix: "ref",
    body: ['ref="$1"'],
    description:
      "ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例"
  },
  is: {
    prefix: "is",
    body: [':is="$1"'],
    description:
      "用于动态组件且基于 DOM 内模板的限制来工作。"
  },
  "keep-alive": {
    prefix: "keepalive",
    body: ['<keep-alive include="$1">\n\t$0\n</keep-alive>'],
    description:
      "<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。当组件在<keep- alive > 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。"
  },
  component: {
    prefix: "component",
    body: ['<component :is="$1"></component>'],
    description:
      "渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。"
  },
  transition: {
    prefix: "transition",
    body: ['<transition name="$1" mode="$2">\n\t$0\n</transition>'],
    description:
      "<transition> 元素作为单个元素/组件的过渡效果。<transition> 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中。"
  },
  "transition-group": {
    prefix: "transitiongroup",
    body: ['<transition-group tag="$1" name="$2">\n\t$0\n</transition-group>'],
    description:
      "<transition-group> 元素作为多个元素/组件的过渡效果。<transition-group> 渲染一个真实的 DOM 元素。默认渲染 <span>，可以通过 tag 属性配置哪个元素应该被渲染。"
  },
  slot: {
    prefix: "slot",
    body: ['<slot name="$1">$2</slot>'],
    description:
      "渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。"
  },
  "router-link": {
    prefix: "routerlink",
    body: ['<router-link to="${1:path}"></router-link>'],
    description:
      "<router-link> 组件支持用户在具有路由功能的应用中 (点击) 导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 <a> 标签，可以通过配置 tag 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。"
  },
  "router-view": {
    prefix: "routerview",
    body: ['<router-view name="${1:path}"></router-view>'],
    description:
      "<router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件。<router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。"
  }
};
