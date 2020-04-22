module.exports = {
  "dataview.getBigInt64(byteOffset [, littleEndian])": {
    "prefix": "datgetbigint64",
    "body": [
      "${1:dataview}.getBigInt64(${2})"
    ],
    "description": "getBigInt64() 方法从 DataView开始获取一个指定偏移量的有符号64位整数 (long long) 。\ndataview.getBigInt64(byteOffset [, littleEndian])"
  },
  "dataview.getBigUint64(byteOffset [, littleEndian])": {
    "prefix": "datgetbiguint64",
    "body": [
      "${1:dataview}.getBigUint64(${2})"
    ],
    "description": "getBigUint64()方法，从DataView的指定偏移量位置获取一个无符号64位整数(unsigned long long)。\ndataview.getBigUint64(byteOffset [, littleEndian])"
  },
  "dataview.getFloat32(byteOffset [, littleEndian])": {
    "prefix": "datgetfloat32",
    "body": [
      "${1:dataview}.getFloat32(${2})"
    ],
    "description": "getFloat32()方法从相对于DataView 的起始位置偏移 n 个字节处获取一个32-bit浮点数(单精度浮点数，4个字节).\ndataview.getFloat32(byteOffset [, littleEndian])"
  },
  "dataview.getFloat64(byteOffset [, littleEndian])": {
    "prefix": "datgetfloat64",
    "body": [
      "${1:dataview}.getFloat64(${2})"
    ],
    "description": "getFloat64()方法从DataView相对于起始位置偏移 n 个字节处开始，获取一个64-bit数(双精度浮点型，8个字节).\ndataview.getFloat64(byteOffset [, littleEndian])"
  },
  "dataview.getInt16(byteOffset [, littleEndian])": {
    "prefix": "datgetint16",
    "body": [
      "${1:dataview}.getInt16(${2})"
    ],
    "description": "getInt16()方法从DataView相对于起始位置偏移 n 个字节处开始，获取一个16-bit数(短整型，2个字节).\ndataview.getInt16(byteOffset [, littleEndian])"
  },
  "dataview.getInt32(byteOffset [, littleEndian])": {
    "prefix": "datgetint32",
    "body": [
      "${1:dataview}.getInt32(${2})"
    ],
    "description": "getInt32()方法从DataView相对于起始位置偏移 n 个字节处开始，获取一个32-bit数(长整型，4个字节).\ndataview.getInt32(byteOffset [, littleEndian])"
  },
  "dataview.getInt8(byteOffset)": {
    "prefix": "datgetint8",
    "body": [
      "${1:dataview}.getInt8(${2})"
    ],
    "description": "getInt8()方法从DataView相对于起始位置偏移 n 个字节处开始，获取一个有符号的 8-bit 整数(一个字节)。\ndataview.getInt8(byteOffset)"
  },
  "dataview.getUint16(byteOffset [, littleEndian])": {
    "prefix": "datgetuint16",
    "body": [
      "${1:dataview}.getUint16(${2})"
    ],
    "description": "getUint16()方法从DataView相对于起始位置偏移 n 个字节处开始，获取一个16-bit数(无符号短整型，2个字节).\ndataview.getUint16(byteOffset [, littleEndian])"
  },
  "dataview.getUint32(byteOffset [, littleEndian])": {
    "prefix": "datgetuint32",
    "body": [
      "${1:dataview}.getUint32(${2})"
    ],
    "description": "getUint32()方法从DataView相对于起始位置偏移 n 个字节处开始，获取一个32-bit数(无符号长整型，4个字节).\ndataview.getUint32(byteOffset [, littleEndian])"
  },
  "dataview.getUint8(byteOffset)": {
    "prefix": "datgetuint8",
    "body": [
      "${1:dataview}.getUint8(${2})"
    ],
    "description": "getUint8()方法从DataView相对于起始位置偏移 n 个字节处开始，获取一个无符号的8-bit整数(一个字节).\ndataview.getUint8(byteOffset)"
  },
  "dataview.setBigInt64(byteOffset, value [, littleEndian])": {
    "prefix": "datsetbigint64",
    "body": [
      "${1:dataview}.setBigInt64(${2})"
    ],
    "description": "setBigInt64()方法在距DataView 的起始位置的指定字节偏移处存储一个带符号的64位整数（long long类型）值。\ndataview.setBigInt64(byteOffset, value [, littleEndian])"
  },
  "dataview.setBigUint64(byteOffset, value [, littleEndian])": {
    "prefix": "datsetbiguint64",
    "body": [
      "${1:dataview}.setBigUint64(${2})"
    ],
    "description": "setBigUint64() 方法在距DataView 的起始位置的指定字节偏移处存储一个无符号的64位整数（unsigned  long long类型）值。\ndataview.setBigUint64(byteOffset, value [, littleEndian])"
  },
  "dataview.setFloat32(byteOffset, value [, littleEndian])": {
    "prefix": "datsetfloat32",
    "body": [
      "${1:dataview}.setFloat32(${2})"
    ],
    "description": "setFloat32()从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(浮点型).\ndataview.setFloat32(byteOffset, value [, littleEndian])"
  },
  "dataview.setFloat64(byteOffset, value [, littleEndian])": {
    "prefix": "datsetfloat64",
    "body": [
      "${1:dataview}.setFloat64(${2})"
    ],
    "description": "setFloat64()从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个64-bit数(双精度浮点型).\ndataview.setFloat64(byteOffset, value [, littleEndian])"
  },
  "dataview.setInt16(byteOffset, value [, littleEndian])": {
    "prefix": "datsetint16",
    "body": [
      "${1:dataview}.setInt16(${2})"
    ],
    "description": "setInt16()从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个16-bit数(短整型).\ndataview.setInt16(byteOffset, value [, littleEndian])"
  },
  "dataview.setInt32(byteOffset, value [, littleEndian])": {
    "prefix": "datsetint32",
    "body": [
      "${1:dataview}.setInt32(${2})"
    ],
    "description": "setInt32()从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(长整型).\ndataview.setInt32(byteOffset, value [, littleEndian])"
  },
  "dataview.setInt8(byteOffset, value)": {
    "prefix": "datsetint8",
    "body": [
      "${1:dataview}.setInt8(${2})"
    ],
    "description": "setInt8()从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个8-bit数(一个字节).\ndataview.setInt8(byteOffset, value)"
  },
  "dataview.setUint16(byteOffset, value [, littleEndian])": {
    "prefix": "datsetuint16",
    "body": [
      "${1:dataview}.setUint16(${2})"
    ],
    "description": "setUint16()从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个16-bit数(无符号短整型).\ndataview.setUint16(byteOffset, value [, littleEndian])"
  },
  "dataview.setUint32(byteOffset, value [, littleEndian])": {
    "prefix": "datsetuint32",
    "body": [
      "${1:dataview}.setUint32(${2})"
    ],
    "description": "setUint32()从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(无符号长整型).\ndataview.setUint32(byteOffset, value [, littleEndian])"
  },
  "dataview.setUint8(byteOffset, value)": {
    "prefix": "datsetuint8",
    "body": [
      "${1:dataview}.setUint8(${2})"
    ],
    "description": "setUint8()从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个8-bit数(无符号字节).\ndataview.setUint8(byteOffset, value)"
  }
}