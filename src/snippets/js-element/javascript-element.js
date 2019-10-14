module.exports = {
  message: {
    prefix: "elmessage",
    body: [
      "this.\\$message({",
      "\tmessage: '${1:text}',",
      "\ttype: '${2:info}'",
      "});"
    ],
    description: "message"
  },
  "msgbox-alert": {
    prefix: "elalert",
    body: [
      "this.\\$alert('${1:content}', '${2:title}', {",
      "\tconfirmButtonText: '${3:confirm}',",
      "\tcallback: ${4:action} => {",
      "\t\t",
      "\t}",
      "});"
    ],
    description: "alert"
  },
  "msgbox-confirm": {
    prefix: "elconfirm",
    body: [
      "this.\\$confirm('${1:content}', '${2:title}', {",
      "\tconfirmButtonText: '${3:confirm}',",
      "\tcancelButtonText: '${4:cancel}',",
      "\ttype: '${5:warning}'",
      "}).then(() => {",
      "\t",
      "}).catch(() => {});"
    ],
    description: "confirm"
  },
  "msgbox-prompt": {
    prefix: "elprompt",
    body: [
      "this.\\$prompt('${1:content}', '${2:title}', {",
      "\tconfirmButtonText: '${3:confirm}',",
      "\tcancelButtonText: '${4:cancel}',",
      "\tinputPattern: /${5:regExp}/,",
      "\tinputErrorMessage: '${6:errormsg}'",
      "}).then(({ value }) => {",
      "\t",
      "}).catch(() => {});"
    ],
    description: "prompt"
  },
  msgbox: {
    prefix: "elbox",
    body: [
      "this.\\$msgbox({",
      "\ttitle: '${1:title}',",
      "\tmessage: '${2:string|VNode}',",
      "\tshowCancelButton: ${3:true},",
      "\tconfirmButtonText: '${4:confirm}',",
      "\tcancelButtonText: '${5:cancel}',",
      "\tbeforeClose: (action, instance, done) => {}",
      "}).then(action => {",
      "\t",
      "});"
    ],
    description: "msgbox"
  },
  notification: {
    prefix: "elnotify",
    body: [
      "this.\\$notify({",
      "\ttitle: '${1:title}',",
      "\tmessage: '${2:string|VNode}'",
      "});"
    ],
    description: "notify"
  }
};
