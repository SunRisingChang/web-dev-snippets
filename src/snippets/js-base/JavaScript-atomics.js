module.exports = {
  "Atomics.add(typedArray, index, value)": {
    "prefix": "atoadd",
    "body": [
      "Atomics.add(${2})"
    ],
    "description": "Atomics.add() 静态方法会将给定的值加到数组里的某个特定位置上，并返回该位置的旧值。此原子操作保证在写上修改的值之前不会发生其他写操作。\nAtomics.add(typedArray, index, value)"
  },
  "Atomics.and(typedArray, index, value)": {
    "prefix": "atoand",
    "body": [
      "Atomics.and(${2})"
    ],
    "description": "Atomics.and() 静态方法会将给定的值与数组上的值进行按位与操作，并将结果赋值给数组，然后返回数组该位置上的旧值。此原子操作保证在写上修改的值之前不会发生其他写操作。\nAtomics.and(typedArray, index, value)"
  },
  "Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)": {
    "prefix": "atocompareexchange",
    "body": [
      "Atomics.compareExchange(${2})"
    ],
    "description": "Atomics.compareExchange() 静态方法会在数组的值与期望值相等的时候，将给定的替换值替换掉数组上的值，然后返回旧值。此原子操作保证在写上修改的值之前不会发生其他写操作。\nAtomics.compareExchange(typedArray, index, expectedValue, replacementValue)"
  },
  "Atomics.exchange(typedArray, index, value)": {
    "prefix": "atoexchange",
    "body": [
      "Atomics.exchange(${2})"
    ],
    "description": "Atomics.exchange() 静态方法会用给定的值替换掉数组上的值，然后返回数组的旧值。此原子操作保证在写上修改的值之前不会发生其他写操作。\nAtomics.exchange(typedArray, index, value)"
  },
  "Atomics.isLockFree(size)": {
    "prefix": "atoislockfree",
    "body": [
      "Atomics.isLockFree(${2})"
    ],
    "description": "静态方法 Atomics.isLockFree() 用于校验是否能够使用原子操作的TypedArray的标准字节长度之一. 若该字节长度为可处理的TypedArray标准字节长度之一则返回  true.  TypedArray的标准字节长度参见 BYTES_PER_ELEMENT\nAtomics.isLockFree(size)"
  },
  "Atomics.load(typedArray, index)": {
    "prefix": "atoload",
    "body": [
      "Atomics.load(${2})"
    ],
    "description": "静态方法 Atomics.load() 返回一个数组当中给定位置的值。\nAtomics.load(typedArray, index)"
  },
  "Atomics.notify(typedArray, index, count)": {
    "prefix": "atonotify",
    "body": [
      "Atomics.notify(${2})"
    ],
    "description": "静态方法 Atomics.notify() 提醒一些在等待队列中休眠的代理。\nAtomics.notify(typedArray, index, count)"
  },
  "Atomics.or(typedArray, index, value)": {
    "prefix": "atoor",
    "body": [
      "Atomics.or(${2})"
    ],
    "description": "静态方法 Atomics.or() 用数组中指定位置的值进行一次按位或运算，并返回未计算时数组中指定位置处的值。这个atomic操作保证了在修改后的值被写回之前没有其它的写入操作发生。\nAtomics.or(typedArray, index, value)"
  },
  "Atomics.store(typedArray, index, value)": {
    "prefix": "atostore",
    "body": [
      "Atomics.store(${2})"
    ],
    "description": "静态的Atomics.store（）方法将给定的值存储在数组中的指定位置，并返回该值。.\nAtomics.store(typedArray, index, value)"
  },
  "Atomics.sub(typedArray, index, value)": {
    "prefix": "atosub",
    "body": [
      "Atomics.sub(${2})"
    ],
    "description": "The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request.\nAtomics.sub(typedArray, index, value)"
  },
  "Atomics.wait(typedArray, index, value[, timeout])": {
    "prefix": "atowait",
    "body": [
      "Atomics.wait(${2})"
    ],
    "description": "静态方法 Atomics.wait() 确保了一个在 Int32Array 数组中给定位置的值没有发生变化、仍然是给定的值时进程将会睡眠，直到被唤醒或超时。该方法返回一个字符串，值为\"ok\", \"not-equal\", 或 \"timed-out\" 之一。\nAtomics.wait(typedArray, index, value[, timeout])"
  },
  "Atomics.xor(typedArray, index, value)": {
    "prefix": "atoxor",
    "body": [
      "Atomics.xor(${2})"
    ],
    "description": "The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request.\nAtomics.xor(typedArray, index, value)"
  }
}