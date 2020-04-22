module.exports = {
  "Math.abs(x);": {
    "prefix": "matabs",
    "body": [
      "Math.abs(${2})"
    ],
    "description": "Math.abs(x) 函数返回指定数字 “x“ 的绝对值。如下：\nMath.abs(x);"
  },
  "Math.acos(x)": {
    "prefix": "matacos",
    "body": [
      "Math.acos(${2})"
    ],
    "description": "Math.acos() 返回一个数的反余弦值（单位为弧度），即：\nMath.acos(x)"
  },
  "Math.acosh(x)": {
    "prefix": "matbc",
    "body": [
      "Math.acosh(${2})"
    ],
    "description": "Math.acosh()返回一个数字的反双曲余弦值，即：\nMath.acosh(x)"
  },
  "Math.asin(x)": {
    "prefix": "matasin",
    "body": [
      "Math.asin(${2})"
    ],
    "description": "Math.asin() 方法返回一个数值的反正弦（单位为弧度），即：\nMath.asin(x)"
  },
  "Math.asinh(x)": {
    "prefix": "matasinh",
    "body": [
      "Math.asinh(${2})"
    ],
    "description": "Math.asinh() 返回一个数值的反双曲正弦值，即：\nMath.asinh(x)"
  },
  "Math.atan(x)": {
    "prefix": "matatan",
    "body": [
      "Math.atan(${2})"
    ],
    "description": "Math.atan() 函数返回一个数值的反正切（以弧度为单位），即：\nMath.atan(x)"
  },
  "Math.atan2(y, x)": {
    "prefix": "matatan2",
    "body": [
      "Math.atan2(${2})"
    ],
    "description": "Math.atan2() 返回从原点(0,0)到(x,y)点的线段与x轴正方向之间的平面角度(弧度值)，也就是Math.atan2(y,x)\nMath.atan2(y, x)"
  },
  "Math.atanh(x)": {
    "prefix": "matatanh",
    "body": [
      "Math.atanh(${2})"
    ],
    "description": "Math.atanh() 函数返回一个数值反双曲正切值, 即：\nMath.atanh(x)"
  },
  "Math.cbrt(x)": {
    "prefix": "matcbrt",
    "body": [
      "Math.cbrt(${2})"
    ],
    "description": "Math.cbrt() 函数返回任意数字的立方根.\nMath.cbrt(x)"
  },
  "Math.ceil(x)": {
    "prefix": "matceil",
    "body": [
      "Math.ceil(${2})"
    ],
    "description": "Math.ceil() 函数返回大于或等于一个给定数字的最小整数。\nMath.ceil(x)"
  },
  "Math.clz32 (x)": {
    "prefix": "matclz32",
    "body": [
      "Math.clz32(${2})"
    ],
    "description": "Math.clz32() 函数返回一个数字在转换成 32 无符号整形数字的二进制形式后, 开头的 0 的个数, 比如 1000000 转换成 32 位无符号整形数字的二进制形式后是 00000000000011110100001001000000, 开头的 0 的个数是 12 个, 则 Math.clz32(1000000) 返回 12.\nMath.clz32 (x)"
  },
  "Math.cos(x)": {
    "prefix": "matcos",
    "body": [
      "Math.cos(${2})"
    ],
    "description": "Math.cos() 函数返回一个数值的余弦值。\nMath.cos(x)"
  },
  "Math.cosh(x)": {
    "prefix": "matcosh",
    "body": [
      "Math.cosh(${2})"
    ],
    "description": "Math.cosh() 函数返回数值的双曲余弦函数, 可用 constant e 表示:\nMath.cosh(x)"
  },
  "Math.exp(x)": {
    "prefix": "matexp",
    "body": [
      "Math.exp(${2})"
    ],
    "description": "Math.exp() 函数返回 ex，x 表示参数，e 是欧拉常数（Euler's constant），自然对数的底数。\nMath.exp(x)"
  },
  "Math.expm1(x)": {
    "prefix": "matexpm1",
    "body": [
      "Math.expm1(${2})"
    ],
    "description": "Math.expm1() 函数返回 Ex - 1, 其中 x 是该函数的参数, E 是自然对数的底数 2.718281828459045.\nMath.expm1(x)"
  },
  "Math.floor(x)": {
    "prefix": "matfloor",
    "body": [
      "Math.floor(${2})"
    ],
    "description": "Math.floor() 返回小于或等于一个给定数字的最大整数。\nMath.floor(x)"
  },
  "Math.fround(doubleFloat)": {
    "prefix": "matfround",
    "body": [
      "Math.fround(${2})"
    ],
    "description": "Math.fround() 可以将任意的数字转换为离它最近的单精度浮点数形式的数字。\nMath.fround(doubleFloat)"
  },
  "Math.hypot([value1[,value2, ...]])": {
    "prefix": "mathypot",
    "body": [
      "Math.hypot(${2})"
    ],
    "description": "Math.hypot() 函数返回它的所有参数的平方和的平方根，即：\nMath.hypot([value1[,value2, ...]])"
  },
  "var product = Math.imul(a, b)": {
    "prefix": "matimul",
    "body": [
      "Math.imul(${2})"
    ],
    "description": "类似 C 语言 32 位整数相乘的结果。\nvar product = Math.imul(a, b)"
  },
  "Math.log(x)": {
    "prefix": "matlog",
    "body": [
      "Math.log(${2})"
    ],
    "description": "\nMath.log(x)"
  },
  "Math.log10(x)": {
    "prefix": "matlog10",
    "body": [
      "Math.log10(${2})"
    ],
    "description": "Math.log10() 函数返回一个数字以 10 为底的对数.\nMath.log10(x)"
  },
  "Math.log1p(x)": {
    "prefix": "matlog1p",
    "body": [
      "Math.log1p(${2})"
    ],
    "description": "Math.log1p() 函数返回一个数字加1后的自然对数 (底为 E), 既log(x+1).\nMath.log1p(x)"
  },
  "Math.log2(x)": {
    "prefix": "matlog2",
    "body": [
      "Math.log2(${2})"
    ],
    "description": "Math.log2() 函数返回一个数字以 2 为底的对数.\nMath.log2(x)"
  },
  "Math.max(value1[,value2, ...])": {
    "prefix": "matmax",
    "body": [
      "Math.max(${2})"
    ],
    "description": "Math.max() 函数返回一组数中的最大值。\nMath.max(value1[,value2, ...])"
  },
  "Math.min([value1[,value2, ...]])": {
    "prefix": "matmin",
    "body": [
      "Math.min(${2})"
    ],
    "description": "Math.min() 返回零个或更多个数值的最小值。\nMath.min([value1[,value2, ...]])"
  },
  "Math.pow(base, exponent)": {
    "prefix": "matpow",
    "body": [
      "Math.pow(${2})"
    ],
    "description": "Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 baseexponent。\nMath.pow(base, exponent)"
  },
  "Math.random()": {
    "prefix": "matrandom",
    "body": [
      "Math.random()"
    ],
    "description": "\nMath.random()"
  },
  "Math.round(x)": {
    "prefix": "matround",
    "body": [
      "Math.round(${2})"
    ],
    "description": "Math.round() 函数返回一个数字四舍五入后最接近的整数。\nMath.round(x)"
  },
  "Math.sign(x);": {
    "prefix": "matsign",
    "body": [
      "Math.sign(${2})"
    ],
    "description": "Math.sign() 函数返回一个数字的符号, 指示数字是正数，负数还是零。\nMath.sign(x);"
  },
  "Math.sin(x)": {
    "prefix": "matsin",
    "body": [
      "Math.sin(${2})"
    ],
    "description": "Math.sin() 函数返回一个数值的正弦值。\nMath.sin(x)"
  },
  "Math.sinh(x)": {
    "prefix": "matsinh",
    "body": [
      "Math.sinh(${2})"
    ],
    "description": "Math.sinh() 函数返回一个数字(单位为角度)的双曲正弦值.\nMath.sinh(x)"
  },
  "Math.sqrt(x)": {
    "prefix": "matsqrt",
    "body": [
      "Math.sqrt(${2})"
    ],
    "description": "Math.sqrt() 函数返回一个数的平方根，即：\nMath.sqrt(x)"
  },
  "Math.tan(x)": {
    "prefix": "mattan",
    "body": [
      "Math.tan(${2})"
    ],
    "description": "Math.tan() 方法返回一个数值的正切值。\nMath.tan(x)"
  },
  "Math.tanh(x)": {
    "prefix": "mattanh",
    "body": [
      "Math.tanh(${2})"
    ],
    "description": "Math.tanh() 函数将会返回一个数的双曲正切函数值，计算如下:\nMath.tanh(x)"
  },
  "Math.trunc(value)": {
    "prefix": "mattrunc",
    "body": [
      "Math.trunc(${2})"
    ],
    "description": "Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分。\nMath.trunc(value)"
  }
}