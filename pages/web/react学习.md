### 1、jsx是什么
###
jsx是javaScript的一种语法扩展，他和模板语言很接近，但是它充分具备javaScript的能力。

### 2、JSX语法是如何在javaScript中生效的：认识Babel
###
jsx会被编译为React.createElement()，React.createElement()将返回一个叫作“reactElement"的对象。

### 3、什么是Babel？
### 
babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

### 4、update阶段：组件更新
###
是由父组件更新引发的子组件更新而不是父组件传递给子组件的props更新导致的更新。（判断传递过去的props与之前的是否相同）
如果父组件导致组件重新渲染，即使props没有改变，也会调用此方法（componentReceiveProps）。如果只想处理更改，请确保进行当前值与变更值比较。
### 