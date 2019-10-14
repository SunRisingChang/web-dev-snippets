module.exports = {
  "Basic: Layout el-row": {
    prefix: "elrow",
    body: [
      "<el-row>",
      '\t<el-col :span="${1:12}">${3}</el-col>',
      '\t<el-col :span="${2:12}">${4}</el-col>',
      "</el-row>",
      "${5}"
    ],
    description: "Element UI <el-row> with <el-col>"
  },
  "Basic: Layout el-col": {
    prefix: "elcol",
    body: ['<el-col :span="${1}">${2}</el-col>', "${3}"],
    description: "Element UI <el-col>"
  },
  "Basic: Container el-container": {
    prefix: "elcon",
    body: [
      "<el-container>",
      '\t<el-aside width="${1:200px}">',
      "\t\t${2:<!-- Aside content -->}",
      "\t</el-aside>",
      "\t<el-container>",
      '\t\t<el-header height="$3">',
      "\t\t\t${4:<!-- Header content -->}",
      "\t\t</el-header>",
      '\t\t<el-main height="$5">',
      "\t\t\t${6:<!-- Main content -->}",
      "\t\t</el-main>",
      "\t</el-container>",
      "</el-container>",
      "${7}"
    ],
    description: "Element UI <el-container>"
  },
  "Basic: Container el-header": {
    prefix: "elhe",
    body: [
      '<el-header height="$1">',
      "\t${2:<!-- Header content -->}",
      "</el-header>",
      "${3}"
    ],
    description: "Element UI <el-header>"
  },
  "Basic: Container el-aside": {
    prefix: "elas",
    body: [
      '<el-aside width="${1:200px}">',
      "\t${2:<!-- Aside content -->}",
      "</el-aside>",
      "${3}"
    ],
    description: "Element UI <el-aside>"
  },
  "Basic: Container el-main": {
    prefix: "elma",
    body: [
      '<el-main height="${1}">',
      "\t${2:<!-- Main content -->}",
      "</el-main>",
      "${3}"
    ],
    description: "Element UI <el-main>"
  },
  "Basic: Container el-footer": {
    prefix: "elfo",
    body: [
      '<el-footer height="${1}">',
      "\t${2:<!-- Footer content -->}",
      "</el-footer>",
      "${3}"
    ],
    description: "Element UI <el-footer>"
  },
  "Basic: Color blue": {
    prefix: "elcb",
    body: ["#409EFF"],
    description: "Element UI Color Blue"
  },
  "Basic: Color danger": {
    prefix: "elcd",
    body: ["#F56C6C"],
    description: "Element UI Color Danger"
  },
  "Basic: Color info": {
    prefix: "elci",
    body: ["#909399"],
    description: "Element UI Color Info"
  },
  "Basic: Color success": {
    prefix: "elcs",
    body: ["#67C23A"],
    description: "Element UI Color Success"
  },
  "Basic: Color waring": {
    prefix: "elcw",
    body: ["#E6A23C"],
    description: "Element UI Color Waring"
  },
  "Basic: Typography": {
    prefix: "eltypo",
    body: [
      'font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;'
    ],
    description: "Element UI Font-family"
  },
  "Basic: el-button": {
    prefix: "elb",
    body: ['<el-button type="${1:text}" @click="$2"></el-button>', "${3}"],
    description: "Element UI <el-button>"
  },
  "Form: Radio": {
    prefix: "elr",
    body: ['<el-radio v-model="${1}" label="${2}">$3</el-radio>', "${4}"],
    description: "Element UI <el-radio>"
  },
  "Form: Radio Group": {
    prefix: "elrg",
    body: [
      '<el-radio-group v-model="$1">',
      '\t<el-radio v-for="${2:item} in ${3:items}" :key="${2:item}.${4:key}" :label="${2:item}.${5:label}">',
      "\t\t{{${2:item}.${6:title}}}",
      "\t</el-radio>",
      "</el-radio-group>",
      "${7}"
    ],
    description: "Element UI <el-radio-group> with <el-radio>"
  },
  "Form: Checkbox": {
    prefix: "elc",
    body: ['<el-checkbox v-model="${1}" label="${2}">$3</el-checkbox>', "${4}"],
    description: "Element UI <el-checkbox>"
  },
  "Form: Checkbox Group": {
    prefix: "elcg",
    body: [
      '<el-checkbox-group v-model="$1">',
      '\t<el-checkbox v-for="${2:item} in ${3:items}" :key="${2:item}.${4:key}" :label="${2:item}.${5:label}"></el-checkbox>',
      "</el-checkbox-group>",
      "${6}"
    ],
    description: "Element UI <el-checkbox-group> with <el-checkbox>"
  },
  "Form: Input": {
    prefix: "eli",
    body: ['<el-input v-model="$1" placeholder="$2"></el-input>', "${3}"],
    description: "Element UI <el-input>"
  },
  "Form: Textarea": {
    prefix: "elit",
    body: [
      '<el-input type="textarea" :rows="${1:2}" v-model="$2" placeholder="$3"></el-input>',
      "${4}"
    ],
    description: 'Element UI <el-input type="textarea">'
  },
  "Form: InputNumber": {
    prefix: "elin",
    body: [
      '<el-input-number v-model="$1" :min="${2:1}" :max="${3:10}" label="$4"></el-input-number>',
      "${5}"
    ],
    description: "Element UI <el-input-number>"
  },
  "Form: Select": {
    prefix: "elsel",
    body: [
      '<el-select v-model="$1" placeholder="$2">',
      '\t<el-option v-for="${3:item} in ${4:options}"',
      '\t\t:key="${3:item}.${5:value}"',
      '\t\t:label="${3:item}.${6:label}"',
      '\t\t:value="${3:item}.${5:value}">',
      "\t</el-option>",
      "</el-select>",
      "${7}"
    ],
    description: "Element UI <el-select>"
  },
  "Form: Select Option": {
    prefix: "elop",
    body: ['<el-option :label="$1" :value="$2"></el-option>', "${3}"],
    description: "Element UI <el-option>"
  },
  "Form: Cascader": {
    prefix: "elca",
    body: [
      '<el-cascader :options="${1:options}" v-model="${2:selectedOptions}" @change="${2:handleChange}">',
      "</el-cascader>",
      "${3}"
    ],
    description: "Element UI <el-cascader>"
  },
  "Form: Switch": {
    prefix: "elsw",
    body: [
      '<el-switch v-model="$1" active-text="$2" inactive-text="$3">',
      "</el-switch>",
      "${4}"
    ],
    description: "Element UI <el-switch>"
  },
  "Form: TimePicker": {
    prefix: "eltp",
    body: [
      '<el-time-picker v-model="$1"',
      '\t:picker-options="{',
      "\t\tselectableRange: '${2:18:30:00} - ${3:20:30:00}'",
      '\t}"',
      '\tplaceholder="${4:任意时间点}">',
      "</el-time-picker>",
      "${5}"
    ],
    description: "Element UI <el-time-picker>"
  },
  "Form: TimeSelector": {
    prefix: "elts",
    body: [
      '<el-time-select v-model="$1" :picker-options="$2" placeholder="${3:选择时间}">',
      "</el-time-select>",
      "${4}"
    ],
    description: "Element UI <el-time-picker>"
  },
  "Form: DatePicker": {
    prefix: "eldp",
    body: [
      '<el-date-picker v-model="$1" type="date" placeholder="${2:选择日期时间}">',
      "</el-date-picker>",
      "${3}"
    ],
    description: "Element UI <el-date-picker>"
  },
  "Form: DateTimePicker": {
    prefix: "eldtp",
    body: [
      '<el-date-picker type="datetime" v-model="$1" placeholder="${2:选择日期时间}">',
      "</el-date-picker>",
      "${3}"
    ],
    description: 'Element UI <el-date-picker type="datetime">'
  },
  "Form: Upload": {
    prefix: "elu",
    body: [
      "<el-upload",
      '\taction="$1"',
      '\t:on-remove="$2"',
      "\tmultiple",
      '\t:limit="${3:5}"',
      '\t:on-exceed="$4"',
      '\t:file-list="$5">',
      '\t<el-button size="small" type="primary">${6:点击上传}</el-button>',
      '\t<div slot="tip" class="el-upload__tip">${7:只能上传jpg/png文件，且不超过500kb}</div>',
      "</el-upload>",
      "${8}"
    ],
    description: "Element UI <el-upload>"
  },
  "Form: Rate": {
    prefix: "elra",
    body: ['<el-rate v-model="$1"></el-rate>', "${2}"],
    description: "Element UI <el-rate>"
  },
  "Form: ColorPicker": {
    prefix: "elcp",
    body: ['<el-color-picker v-model="$1"></el-color-picker>', "${2}"],
    description: "Element UI <el-color-picker>"
  },
  "Form: Transfer": {
    prefix: "eltr",
    body: ['<el-transfer v-model="$1" :data="$2"></el-transfer>', "${3}"],
    description: "Element UI <el-transfer>"
  },
  "Form: Form": {
    prefix: "elf",
    body: [
      '<el-form :model="${1:form}" ref="${1:form}" label-width="80px">',
      '\t<el-form-item label="$2">',
      '\t\t<el-input v-model="${1:form}.${3}"></el-input>',
      "\t</el-form-item>",
      "\t<el-form-item>",
      '\t\t<el-button type="primary" @click="onSubmit">${4:立即创建}</el-button>',
      "\t\t<el-button>${5:取消}</el-button>",
      "\t</el-form-item>",
      "</el-form>",
      "${6}"
    ],
    description: "Element UI <el-form>"
  },
  "Form: Form Item": {
    prefix: "elfi",
    body: ['<el-form-item label="$1">', "\t$2", "</el-form-item>", "${3}"],
    description: "Element UI <el-form-item>"
  },
  "Data: Table": {
    prefix: "elta",
    body: [
      '<el-table :data="$1">',
      '\t<el-table-column v-for="${2:col} in ${3:columns}"',
      '\t\t:prop="${2:col}.${4:id}"',
      '\t\t:key="${2:col}.${4:id}"',
      '\t\t:label="${2:col}.${5:label}"',
      '\t\t:width="${2:col}.${6:width}">',
      "\t</el-table-column>",
      "</el-table>",
      "${7}"
    ],
    description: "Element UI <el-table>"
  },
  "Data: Table Column": {
    prefix: "eltac",
    body: [
      "<el-table-column",
      '\t:prop="${1:col}.${2:id}"',
      '\t:label="${1:col}.${3:label}"',
      '\t:width="${1:col}.${4:width}">',
      "</el-table-column>",
      "${5}"
    ],
    description: "Element UI <el-table-column>"
  },
  "Data: Tag": {
    prefix: "eltag",
    body: [
      '<el-tag type="${1|danger,info,success,warning|}" closable>$2</el-tag>',
      "${3}"
    ],
    description: "Element UI <el-tag>"
  },
  "Data: Progress": {
    prefix: "elpr",
    body: [
      '<el-progress type="${1|line,circle|}" :percentage="$2" :status="$3"></el-progress>',
      "${4}"
    ],
    description: "Element UI <el-progress>"
  },
  "Data: Tree": {
    prefix: "eltree",
    body: [
      '<el-tree :data="$1" :props="$2" @node-click="$3"></el-tree>',
      "${4}"
    ],
    description: "Element UI <el-tree>"
  },
  "Data: Pagination": {
    prefix: "elpa",
    body: [
      "<el-pagination",
      '\t@size-change="${1:sizeChange}"',
      '\t@current-change="${2:currentChange}"',
      '\t:current-page="${3:currentPage}"',
      '\t:page-sizes="${4:[20, 40, 80, 100]}"',
      '\t:page-size="${5:pageSize}"',
      '\tlayout="total, sizes, prev, pager, next, jumper"',
      '\t:total="${6:totalNum}" background>',
      "</el-pagination>",
      "${7}"
    ],
    description: "Element UI <el-pagination>"
  },
  "Data: Badge": {
    prefix: "elba",
    body: ['<el-badge :value="$1">', "\t$2", "</el-badge>", "${3}"],
    description: "Element UI <el-badge>"
  },
  "Notice: Alert": {
    prefix: "elal",
    body: [
      '<el-alert :title="$1" type="${2|info,success,warning,error|}" show-icon></el-alert>',
      "${3}"
    ],
    description: "Element UI <el-alert>"
  },
  "Notice: Loading": {
    prefix: "elloads",
    body: [
      'element-loading-text="${1:拼命加载中}"',
      'element-loading-spinner="${2:el-icon-loading}"',
      'element-loading-background="${3:rgba(0, 0, 0, 0.8)}"',
      "${4}"
    ],
    description: "Element UI loading options"
  },
  "Notice: Message": {
    prefix: "elme",
    body: [
      "this.\\$message({",
      "\tmessage: '$1',",
      "\ttype: '${2|info,success,warning,error|}',",
      "\tshowClose: ${3:true},",
      "});",
      "${4}"
    ],
    description: "Element UI $message"
  },
  "Notice: Messagebox": {
    prefix: "elmebox",
    body: [
      "this.\\$msgbox({",
      "\ttitle: '$1',",
      "\tmessage: '${2}',",
      "\tshowCancelButton: true,",
      "\tconfirmButtonText: '${3:确定}',",
      "\tcancelButtonText: '${4:取消}',",
      "\tbeforeClose: (action, instance, done) => {",
      "\t\t${5}",
      "\t}).then(action => {",
      "\t\t${6}",
      "\t});",
      "});",
      "${7}"
    ],
    description: "Element UI $msgbox"
  },
  "Notice: Messagebox Alert": {
    prefix: "elmeal",
    body: [
      "this.\\$alert('${1:内容}', '${2:标题}', {",
      "\tconfirmButtonText: '${3:确定}',",
      "\tcallback: action => {",
      "\t\t${4}",
      "\t}",
      "});",
      "${5}"
    ],
    description: "Element UI $alert"
  },
  "Notice: Messagebox Confirm": {
    prefix: "elmecon",
    body: [
      "this.\\$confirm('${1:内容}', '${2:标题}', {",
      "\tconfirmButtonText: '${3:确定}',",
      "\tcancelButtonText: '${4:取消}',",
      "\ttype: '${5|success,info,warning,erro|}',",
      "\tcallback: action => {",
      "\t\t${6}",
      "\t}",
      "});",
      "${7}"
    ],
    description: "Element UI $confirm"
  },
  "Notice: Messagebox Prompt": {
    prefix: "elmepro",
    body: [
      "this.\\$prompt('${1:内容}', '${2:标题}', {",
      "\tconfirmButtonText: '${3:确定}',",
      "\tcancelButtonText: '${4:取消}',",
      "\tinputPattern: '${5}',",
      "\tinputErrorMessage: '${6}',",
      "\tcallback: action => {",
      "\t\t${7}",
      "\t}",
      "});",
      "${8}"
    ],
    description: "Element UI $prompt"
  },
  "Notice: Notification": {
    prefix: "elnoti",
    body: [
      "this.\\$notify({",
      "\ttitle: '${1}',",
      "\tmessage: '${2}',",
      "\ttype: '${3|info,success,warning,error|}',",
      "\tduration: '${4|4500, 0|}',",
      "\tposition: '${5|top-right,top-left,bottom-right,bottom-left|}'",
      "});",
      "${6}"
    ],
    description: "Element UI $notify"
  },
  "Navigation: NavMenu Menu": {
    prefix: "elmen",
    body: [
      '<el-menu mode="${1:horizontal}" :default-active="$2" @select="$3">',
      '\t<el-submenu v-for="(${4:submenus}, ${5:index}) in ${6:menus}"',
      '\t\t:index="${5:index} + 1"',
      '\t\t:key="${4:submenus}.${5:key}">',
      '\t\t<template slot="title">${4:submenus}.${6:title}</template>',
      '\t\t<el-menu-item v-for="(${7:item}, ${8:subIndex}) in ${4:submenus}"',
      "\t\t\t:index=\"(${5:index} + 1) + '-' + (${8:subIndex} + 1)\">",
      "\t\t\t\t{{${7:item}.${9:title}}}",
      "\t\t</el-menu-item>",
      "\t</el-submenu>",
      "</el-menu>",
      "${10}"
    ],
    description: "Element UI <el-menu> with <el-submenu> and <el-menu-item>"
  },
  "Navigation: NavMenu subMenu": {
    prefix: "elsubmen",
    body: [
      '<el-submenu :index="$1">',
      '\t<template slot="title">$2</template>',
      '\t<el-menu-item v-for="(${3:item}, ${4:subIndex}) in $5"',
      '\t\t:index="${4:subIndex} + 1"',
      '\t\t:key="${5:item}.${6:key}">>',
      "\t\t\t{{${3:item}.$7}}",
      "\t</el-menu-item>",
      "</el-submenu>",
      "${8}"
    ],
    description: "Element UI <el-submenu> with <el-menu-item>"
  },
  "Navigation: NavMenu Menu Item": {
    prefix: "elmeni",
    body: ['<el-menu-item :index="$1">$2</el-menu-item>', "${3}"],
    description: "Element UI <el-menu-item>"
  },
  "Navigation: Tabs": {
    prefix: "eltabs",
    body: [
      '<el-tabs v-model="$1"',
      '\ttype="${2:card}">',
      '\t<el-tab-pane v-for="${3:item} in items"',
      '\t\t:key="${3:item}.${4:key}"',
      '\t\t:label = "${3:item}.${5:label}"',
      '\t\t:name="${3:item}.${6:id}">',
      "\t\t$7",
      "\t</el-tab-pane>",
      "</el-tabs>",
      "${8}"
    ],
    description: "Element UI <el-tabs> with <el-tab-pane>"
  },
  "Navigation: Tabs tab pane": {
    prefix: "eltabp",
    body: [
      '<el-tab-pane :label="$1" :name="$2">',
      "\t$3",
      "</el-tab-pane>",
      "${4}"
    ],
    description: "Element UI <el-tab-pane>"
  },
  "Navigation: Breadcrumb": {
    prefix: "elbr",
    body: [
      '<el-breadcrumb separator-class="${1:el-icon-arrow-right}">',
      "\t<el-breadcrumb-item :to=\"{ path: '$2', name: '$3' }\">$4</el-breadcrumb-item>",
      "\t<el-breadcrumb-item :to=\"{ path: '$5', name: '$6' }\">$7</el-breadcrumb-item>",
      "</el-breadcrumb>",
      "${8}"
    ],
    description: "Element UI <el-breadcrumb>"
  },
  "Navigation: Breadcrumb Item": {
    prefix: "elbri",
    body: [
      "<el-breadcrumb-item :to=\"{ path: '$1', name: '$2' }\">$3</el-breadcrumb-item>",
      "${4}"
    ],
    description: "Element UI <el-breadcrumb-item>"
  },
  "Navigation: Dropdown": {
    prefix: "eldr",
    body: [
      '<el-dropdown trigger="${1:click}" @command="$2">',
      "\t<span>",
      '\t\t<i class="el-icon-arrow-down el-icon--right"></i>',
      "\t</span>",
      '\t<el-dropdown-menu slot="dropdown">',
      '\t\t<el-dropdown-item v-for="${3:item} in ${4:items}"',
      '\t\t\t:key="${3:item}.${5:key}" :command="${3:item}.${6:command}">',
      "\t\t\t{{${3:item}.${7:title}}}",
      "\t\t</el-dropdown-item>",
      "\t</el-dropdown-menu>",
      "</el-dropdown>",
      "${8}"
    ],
    description: "Element UI <el-dropdown> with <el-dropdown-item>"
  },
  "Navigation: Dropdown Item": {
    prefix: "eldri",
    body: ['<el-dropdown-item :command="$1">$2</el-dropdown-item>', "${3}"],
    description: "Element UI <el-dropdown-item>"
  },
  "Navigation: Steps": {
    prefix: "elsts",
    body: [
      '<el-steps :active="$1">',
      '\t<el-step v-for="${2:item} in ${3:items}"',
      '\t\t:key="${2:item}.${4:key}"',
      '\t\t:title="${2:item}.${5:title}"',
      '\t\t:description="${2:item}.${6:description}"',
      '\t\t:icon="${2:item}.${7:icon}">',
      "\t</el-step>",
      "</el-steps>",
      "${8}"
    ],
    description: "Element UI <el-steps> with <el-step>"
  },
  "Navigation: Steps Step": {
    prefix: "elst",
    body: [
      '<el-step :title="$1" :description="$2" :icon="$3"></el-step>',
      "${4}"
    ],
    description: "Element UI <el-step>"
  },
  "Others: Dialog": {
    prefix: "eldi",
    body: [
      "<el-dialog",
      '\ttitle="$1"',
      '\t:visible.sync="$2"',
      '\twidth="${3:30%}"',
      '\t@close="$4">',
      "\t$5",
      '\t<span slot="footer">',
      '\t\t<el-button @click="$2 = false">取 消</el-button>',
      '\t\t<el-button type="primary" @click="$6">确 定</el-button>',
      "\t</span>",
      "</el-dialog>",
      "${7}"
    ],
    description: "Element UI <el-dialog>"
  },
  "Others: Tooltip": {
    prefix: "elto",
    body: [
      '<el-tooltip content="$1" placement="$2" effect="${3:dark}">',
      "\t${4:<!-- content to trigger tooltip here -->}",
      "</el-tooltip>",
      "${5}"
    ],
    description: "Element UI <el-tooltip>"
  },
  "Others: Popover": {
    prefix: "elpop",
    body: [
      "<el-popover",
      '\t:ref="$1"',
      '\tplacement="$2"',
      '\t:title="$3"',
      '\twidth="$4"',
      '\ttrigger="${5:click}"',
      '\tcontent="$6">',
      '\t${7: <!-- <el-button slot="reference">content</el-button> -->}',
      "</el-popover>",
      "${8}"
    ],
    description: "Element UI <el-popover>"
  },
  "Others: Card": {
    prefix: "elcard",
    body: [
      "<el-card :body-style=\"${1:{ padding: '0px' }}\">",
      '\t<div slot="header">',
      "\t\t<span>${2:<!-- card title -->}</span>",
      "\t</div>",
      "\t${3:<!-- card body -->}",
      "</el-card>",
      "${4}"
    ],
    description: "Element UI <el-card>"
  },
  "Others: Carousel": {
    prefix: "elcaro",
    body: [
      '<el-carousel trigger="${1:hover}" height="${2:150px}">',
      '\t<el-carousel-item v-for="${3:item} in ${4:items}" :key="${3:item}.${5:key}">',
      "\t\t${6:<!-- content -->}",
      "\t</el-carousel-item>",
      "</el-carousel>",
      "${7}"
    ],
    description: "Element UI <el-carousel> with <el-carousel-item>"
  },
  "Others: Carousel Item": {
    prefix: "elcaroi",
    body: [
      "<el-carousel-item>",
      "\t${1:<!-- content -->}",
      "</el-carousel-item>",
      "${2}"
    ],
    description: "Element UI <el-carousel-item>"
  },
  "Others: Collapse": {
    prefix: "elcolla",
    body: [
      '<el-collapse v-model="${1:activeNames}" :accordion="${2:false}" @change="$3">',
      '\t<el-collapse-item v-for="${4:item} in ${5:items}"',
      '\t\t:key="${4:item}.${6:id}"',
      '\t\t:title="${4:item}.${7:title}"',
      '\t\t:name="${4:item}.${6:id}">',
      "\t\t${8:<!-- content -->}",
      "\t</el-collapse-item>",
      "</el-collapse>",
      "${9}"
    ],
    description: "Element UI <el-collapse> with <el-collapse-item>"
  },
  "Others: Collapse Item": {
    prefix: "elcollai",
    body: [
      '<el-collapse-item :title="$1" :name="$2">',
      "\t${3:<!-- content -->}",
      "</el-collapse-item>",
      "${4}"
    ],
    description: "Element UI <el-collapse-item>"
  }
};
