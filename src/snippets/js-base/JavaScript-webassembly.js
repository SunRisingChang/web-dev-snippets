module.exports = {
  "Promise<WebAssembly.Module> WebAssembly.compile(bufferSource);": {
    "prefix": "webcompile",
    "body": [
      "WebAssembly.compile(${2})"
    ],
    "description": "WebAssembly.compile() 方法编译WebAssembly二进制代码到一个WebAssembly.Module 对象。如果在实例化之前有必要去编译一个模块，那么这个方法是有用的（否则，将会使用WebAssembly.instantiate() 方法）\nPromise<WebAssembly.Module> WebAssembly.compile(bufferSource);"
  },
  "Promise<WebAssembly.Module> WebAssembly.compileStreaming(source);": {
    "prefix": "webcompilestreaming",
    "body": [
      "WebAssembly.compileStreaming(${2})"
    ],
    "description": "WebAssembly.compileStreaming() 方法用来从一个流式源中直接编译一个 WebAssembly.Module。当模块需要在被实例化前被编译时，这个方法会很有用。如果要从流式源实例化一个模块应采用 WebAssembly.instantiateStreaming() 方法。\nPromise<WebAssembly.Module> WebAssembly.compileStreaming(source);"
  },
  "Promise<ResultObject> WebAssembly.instantiateStreaming(source, importObject);": {
    "prefix": "webinstantiatestreaming",
    "body": [
      "WebAssembly.instantiateStreaming(${2})"
    ],
    "description": "WebAssembly.instantiateStreaming() 方法直接从流式底层源编译和实例化WebAssembly模块。这是加载wasm代码一种非常有效的优化方式。\nPromise<ResultObject> WebAssembly.instantiateStreaming(source, importObject);"
  },
  "WebAssembly.validate(bufferSource);": {
    "prefix": "webvalidate",
    "body": [
      "WebAssembly.validate(${2})"
    ],
    "description": "WebAssembly.validate() 方法用于验证包含 WebAssembly 二进制码的一个 typed array 是否合法，返回 true 如果这些字节能构成一个合法的 wasm 模块，否则返回 false。\nWebAssembly.validate(bufferSource);"
  }
}