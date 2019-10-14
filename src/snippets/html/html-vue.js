module.exports = {
  "V-templates": {
    prefix: "V",
    body: [
      "<template>\n\t<div id='${1:id}'>\n\t\t$0\n\t</div>\n</template>\n\n<script>\nexport default {\n\tname: '${1:id:name}'\n\n}\n</script>\n\n<style scoped>\n\n</style>"
    ],
    description: "Quickly generate vue component templates"
  },
  template: {
    prefix: "template",
    body: ["<template>\n\t$0\n</template>"],
    description:
      "A string template to be used as the markup for the Vue instance. The template will replace the mounted element. Any existing markup inside the mounted element will be ignored, unless content distribution slots are present in the template"
  },
  "v-text": {
    prefix: "vText",
    body: ['v-text="${1:msg}"'],
    description:
      "Updates the element’s textContent. If you need to update the part of textContent, you should use {{ Mustache }} interpolations."
  },
  "v-html": {
    prefix: "vHtml",
    body: ['v-html="${1:html}"'],
    description:
      "Updates the element’s innerHTML. (Note that the contents are inserted as plain HTML - they will not be compiled as Vue templates.) "
  },
  "v-if": {
    prefix: "vIf",
    body: ['v-if="${1:condition}"'],
    description:
      "Conditionally render the element based on the truthy-ness of the expression value. "
  },
  "v-show": {
    prefix: "vShow",
    body: ['v-show="${1:condition}"'],
    description:
      "Toggle’s the element’s display CSS property based on the truthy-ness of the expression value."
  },
  "v-else": {
    prefix: "vElse",
    body: ["v-else"],
    description: "Denote the “else block” for v-if or a v-if/v-else-if chain."
  },
  "v-else-if": {
    prefix: "vElseIf",
    body: ['v-else-if="${1:condition}"'],
    description: "Denote the “else block” for v-if or a v-if/v-else-if chain."
  },
  "v-for": {
    prefix: "vFor",
    body: ['v-for="(${1:item},index) in ${1:items}"'],
    description:
      "Render the element or template block multiple times based on the source data. "
  },
  "v-on": {
    prefix: "vOn",
    body: ['v-on:${1:event}="${1:handle}"'],
    description:
      "Attaches an event listener to the element. The event type is denoted by the argument. "
  },
  "v-bind": {
    prefix: "vBind",
    body: ['v-bind:${1:argument}="${1:optional}"'],
    description:
      "Dynamically bind one or more attributes, or a component prop to an expression."
  },
  "v-model": {
    prefix: "vModel",
    body: ['v-model="${1:msg}"'],
    description:
      "Create a two-way binding on a form input element or a component. "
  },
  "v-pre": {
    prefix: "vPre",
    body: ["v-pre"],
    description:
      "Skip compilation for this element and all its children. You can use this for displaying raw mustache tags. "
  },
  "v-cloak": {
    prefix: "vCloak",
    body: ["v-cloak"],
    description:
      "This directive will remain on the element until the associated Vue instance finishes compilation."
  },
  "v-once": {
    prefix: "vOnce",
    body: ["v-once"],
    description:
      "Render the element and component once only. On subsequent re-renders, the element/component and all its children will be treated as static content and skipped. This can be used to optimize update performance."
  },
  key: {
    prefix: "key",
    body: ['key="$1"'],
    description:
      "The key special attribute is primarily used as a hint for Vue’s virtual DOM algorithm to identify VNodes when diffing the new list of nodes against the old list. "
  },
  ref: {
    prefix: "ref",
    body: ['ref="$1"'],
    description:
      "ref is used to register a reference to an element or a child component."
  },
  slotName: {
    prefix: "slotName",
    body: ['<slot name="$1"></slot>'],
    description:
      "Used on content inserted into child components to indicate which named slot the content belongs to."
  },
  slot: {
    prefix: "slot",
    body: ['slot="$1"'],
    description:
      "Used on content inserted into child components to indicate which named slot the content belongs to."
  },
  "keep-alive": {
    prefix: "keepAlive",
    body: ['<keep-alive include="$1">\n\t$0\n</keep-alive>'],
    description:
      "When wrapped around a dynamic component, <keep-alive> caches the inactive component instances without destroying them. "
  },
  transition: {
    prefix: "transition",
    body: ['<transition name="$1" mode="$2">\n\t$0\n</transition>'],
    description:
      "<transition> serve as transition effects for single element/component. "
  },
  "transition-group": {
    prefix: "transitionGroup",
    body: ['<transition-group tag="$1" name="$2">\n\t$0\n</transition-group>'],
    description:
      " <transition-group> serve as transition effects for multiple elements/components"
  },
  "router-link": {
    prefix: "router-link",
    body: ['<router-link to="${1:path}"></router-link>'],
    description:
      "[router]<router-link> is the component for enabling user navigation in a router-enabled app. "
  },
  "router-view": {
    prefix: "router-view",
    body: ['<router-view name="${1:path}"></router-view>'],
    description:
      "[router]The <router-view> component is a functional component that renders the matched component for the given path. "
  }
};
