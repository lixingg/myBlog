## webpack 专栏

### 1. webpack 是什么
-    webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，
        它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
-    webpack 是一个开源的 JavaScript 模块打包器(module bundler)。

### 2. webpack 安装
```bash
    npm install webpack webpack-cli -D
```

### 3. webpack 配置
-    entry：入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图(dependency graph)的开始。
-    output：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist
-    module：module 属性告诉 webpack 去处理那些不同类型的模块。
-    plugins：plugins 属性用于配置插件。
-    mode：mode 属性用于指定当前的构建环境是：production、development 或者是 none。
-    resolve：resolve 属性用于配置 webpack 如何寻找模块所对应的文件。
-    devServer：devServer 属性用于配置开发服务器(dev server)

### 4. webpack 构建流程
-    初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
-    开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
-    确定入口：根据配置中的 entry 找出所有的入口文件；
-    编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，
     再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
-    完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容； 
-    输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，
     再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
-    输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

### 5. webpack 热更新原理
-    WDS(webpack-dev-server) 和 dev-server 中的 webpack-dev-middleware 一起使用，
    webpack-dev-server 会创建两个服务：
    1. 静态文件服务器，用于服务 webpack 输出的文件；
    2. 虚拟的 Node.js 服务，用于接收来自浏览器发来的请求并返回页面和数据。
-    WDS 和 dev-server 之间使用 websocket 通信。
-    WDS 服务器与浏览器建立 websocket 连接后，会将 webpack 编译过程中打包生成的资源映射信息发送给浏览器
-    浏览器根据 websocket 接收到的消息确定需要从 WDS 服务器下载的资源，
    然后通过 xhr 请求获取这些资源。
-    在 webpack 编译过程中，每当检测到一个文件变化，就会重新触发 webpack 编译，
    并把编译后的资源发送给 WDS 服务器，最后通知浏览器刷新页面。
-    WDS 服务器收到资源后，通知浏览器对页面进行刷新，实现页面无刷新的更新。
-    WDS 服务器和浏览器之间建立的长连接，会持续的保持通信状态，当检测到文件变化时，会向浏览器推送
    "hash"、"ok" 等事件，告诉浏览器有文件变化了。
-    浏览器收到 OK 事件后，会向 WDS 发起 xhr 请求获取变化的文件清单，
    然后通过 xhr 请求获取变化的文件内容，最后将文件内容注入到页面上，实现无刷新的更新。

### 6. webpack 优化
-    缩小文件的搜索范围；
  -    使用 Tree Shaking；
  -    使用 Scope Hoisting；
  -   使用动态 Polyfill；
  -    使用 Code Splitting；
  -    使用 Module Federation；
  -    使用 SplitChunksPlugin；
  -    使用 HappyPack；
  -    使用 DLLPlugin；
-    使用缓存；
-   使用多线程打包；
-    使用压缩工具；
-    使用 SourceMap；
-    使用体积分析工具；
-    使用性能分析工具；
-    使用性能监控工具；
-    使用性能优化工具；
-    使用性能优化插件；
-    使用性能优化 loader；
-    使用性能优化库；
-    使用性能优化框架；

### 7. webpack 原理
-    webpack 的核心是它的打包能力，打包的过程包括：
  -    确定入口文件；
  -    递归解析入口文件，找到所有依赖的模块；
  -    根据模块之间的依赖关系，生成模块的依赖关系图；
  -    根据模块的依赖关系图，生成打包后的文件。
-    webpack 的打包过程是一个递归的过程，递归的深度取决于入口文件的复杂度。
-    webpack 的打包过程是一个从上到下的过程，从入口文件开始，逐层向下解析依赖的模块，直到解析到所有的模块为止。
-    webpack 的打包过程是一个从下到上的过程，从所有的模块开始，逐层向上生成打包后的文件，直到生成入口文件
-    webpack 的打包过程是一个从左到右的过程，从入口文件开始，逐层向右解析依赖的模块，直到解析到所有的模块为止。
-    webpack 的打包过程是一个从右到左的过程，从所有的模块开始，逐层向左生成打包后的文件，直到生成入口文件
-    webpack 的打包过程是一个从右到左的过程，从所有的模块开始，逐层向左解析依赖的模块，直到解析到所有的模块为止。

### 8. webpack 实战

### 9. webpack 面试题
 

### 10. webpack 周边工具

### 11. webpack 源码解析

### 12. webpack 实战进阶

### 13. webpack 原理进阶

### 14. webpack 实战高级

### 15. webpack 原理高级

### 16. webpack 实战高级

