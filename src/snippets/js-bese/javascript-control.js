module.exports = {
  if: {
    prefix: "if",
    body: ["if (${1:true}) {", "\t$2", "}"],
    description: "控制语句if"
  },
  "if … else": {
    prefix: "ife",
    body: ["if (${1:true}) {", "\t$2", "} else {", "\t$3", "}"],
    description: "控制语句if … else"
  },
  else: {
    prefix: "else",
    body: ["else {", "\t$1", "}"],
    description: "控制语句else"
  },
  "else if": {
    prefix: "elseif",
    body: ["else if (${1:true}) {", "\t$2", "}"],
    description: "控制语句else if"
  },
  for: {
    prefix: "for",
    body: [
      "for (var ${2:i} = 0; ${2:i} < ${1:array}.length; ${2:i}++) {",
      "\t${1:array}[${2:i}]$3",
      "}"
    ],
    description: "控制语句for"
  },
  "for in": {
    prefix: "forin",
    body: [
      "for (var ${1:variable} in ${2:object}) {",
      "\t${3:if (${2:object}.hasOwnProperty(${1:variable})) {",
      "\t\t$4",
      "\t\\}}",
      "}"
    ],
    description: "控制语句for"
  },
  "for of": {
    prefix: "forof",
    body: ["for (${1:variable} of ${2:iterable}) {", "\t$3", "}"],
    description: "控制语句for"
  },
  do: {
    prefix: "do",
    body: ["do {", "\t$2", "} while (${1:true});"],
    description: "控制语句do...while"
  },
  switch: {
    prefix: "switch",
    body: [
      "switch (${1:expression}) {",
      "\tcase ${2:expression}:",
      "\t\t$4",
      "\t\tbreak;$5",
      "\tdefault:",
      "\t\t$3",
      "}"
    ],
    description: "控制语句"
  },
  case: {
    prefix: "case",
    body: ["case ${1:expression}:", "\t$2", "\tbreak;"],
    description: "控制语句"
  },
  "try/catch": {
    prefix: "tc",
    body: "try {\n  ${1}\n} catch (${2:err}) {\n  ${3}\n}",
    description: "try/catch 异常处理"
  },
  "try/finally": {
    prefix: "tf",
    body: "try {\n  ${1}\n} finally {\n  ${2}\n}",
    description: "try/finally 异常处理"
  },
  "try/catch/finally": {
    prefix: "tcf",
    body: "try {\n  ${1}\n} catch (${2:err}) {\n  ${3}\n} finally {\n  ${4}\n}",
    description: "try/catch/finally 异常处理"
  },
  while: {
    prefix: "while",
    body: ["while (${1:true}) {", "\t$2", "}"],
    description: "控制语句"
  }
};
