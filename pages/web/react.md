## React专栏
### 1、React是什么?
<pre>
    react是facebook开源的一个js库，用于构建用户界面。
</pre>
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

### 5、React 创建虚拟DOM方法
###
-  1.第一种 createElement 写法
```jsx
const vm = React.createElement('h1', {id: 'title'}, 'hello world');
```
-  2.第二种 jsx 写法
```jsx
const vm = <h1 id='title'>hello world</h1>;
```
### 6、React 虚拟DOM 渲染
###

```jsx
import React from "react";
import ReactDOM from "react-dom";
const vm = <h1 id='title'>hello world</h1>;
//  通过ReactDOM.render()方法将虚拟DOM渲染到页面中
ReactDOM.render(vm, document.getElementById('root'));
```

### 7、什么是虚拟DOM
###
```text
1.虚拟DOM的本质是Object类型的对象（一般对象）

2.虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多属性。

3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上。
```

### 8、JSX语法规则
###
```text
1.定义虚拟DOM时，不要写引号。

2.标签中混入JS表达式时要用{}。
  一定注意区分：【js语句（代码）】 与 【JS表达式】
  (1).表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
      (1).a
      (2).a+b
      (3).demo(1)
      (4).arr.map()
      (5).function test(){}
  (2).语句（代码）：
      (1).if(){}
      (2).for(){}
      (3).switch(){case:xx}

3.样式的类名指定不要用class，要用className。

4.内联样式，要用style={{key:value}}的形式去写。

5.只有一个根标签。

6.标签必须闭合。

7.标签首字母
    (1).若小写字母开头，则将标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
    (2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。
    
```
```jsx
// 1.定义虚拟DOM时，不要写引号。
const vm = '<h1>hello world</h1>'; // 错误
// 2.标签中混入JS表达式时要用{}。
const vm = <h1>{1 + 2}</h1>;
// 3.样式的类名指定不要用class，要用className。
const vm = <h1 className='title'></h1>;
//     4.内联样式，要用style={{key:value}}的形式去写。
const vm = <h1 style={{color: 'red', fontSize: '20px'}}></h1>;
//     5.虚拟DOM只有一个根标签。使用 div标签 或者 <Fragment></Fragment> 或者 <></>包裹
const vm = <div><h1>hello world</h1><span>hahaha</span></div>;
//     6.标签必须闭合。
const vm = <h1>hello world</h1>;
//     7.标签首字母
//     (1).若小写字母开头，则将标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
//     (2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。
<MyComponent/>  // 当作组件渲染 没有就报错
<myComponent/>  // 转为html元素 没有该标签就报错

```

### 9、使用 jsx 动态创建虚拟DOM
###
```jsx

const myId = 'aTgU1E'; // 动态id
const myData = 'Hello, world!'; // 动态文字
const list = ['a','b','c'] // 动态列表
// 1.创建虚拟DOM
const VDOM = (
    <div>
        <h1 className="title" id={myId.toLowerCase()}>
            <span style={{color: 'white', fontSize: '29px'}}>{myData.toLowerCase()}</span>
        </h1>
        <ul>
        {
           /* 一定注意区分：【js语句（代码）】 与 【JS表达式】
            (1).表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
            (1).a
            (2).a+b
            (3).demo(1)
            (4).arr.map()
            (5).function test(){}
            (2).语句（代码）：
            (1).if(){}
            (2).for(){}
            (3).switch(){case:xx}*/
            list.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        }
        </ul>
    </div>
)

// 2.渲染虚拟DOM到页面
ReactDOM.render(VDOM, document.getElementById('test'))
```

### 10、模块与组件、模块化与组件化的理解
###
#### 1.模块
```text
1.理解：向外提供特定功能的js程序，一般就是一个js文件。
2.为什么：js文件很多很杂，为了方便开发，进行模块化编码。
3.作用：复用js，简化js的编写，提高js运行效率。
```

#### 2.组件
```text
1.理解：用来实现局部功能效果的代码和资源的集合（html/css/js/image等等）。
2.为什么：一个界面的功能很复杂，需要编写大量的代码。
3.作用：复用编码，简化项目编码，提高运行效率。
```

#### 3.模块化
```text
当应用的js都以模块来编写的，这个应用就是一个模块化的应用。
```

#### 4.组件化
```text
当应用是以多组件的方式实现，这个应用就是一个组件化的应用。
```

### 11、React 面向组件编程
###
#### 1.基本理解和使用
##### 1.使用React开发者工具调试
```text
1.安装React开发者工具
2.打开Chrome设置
3.点击扩展程序
4.打开开发者模式
5.点击加载已解压的扩展程序，找到并选中react开发者工具
6.点击确定
7.重启chrome浏览器
8.在chrome中访问网页
9.点击F12打开开发者工具，点击“应用”->“检查”->“React”

```
如果应用商店打不开 可以点击 [React Developer Tools](https://www.crx4chrome.com/crx/3068/) 