## React专栏
### 1、React是什么?
<pre>
    react是facebook开源的一个js库，用于构建用户界面。
</pre>

### 2、jsx是什么

jsx是javaScript的一种语法扩展，他和模板语言很接近，但是它充分具备javaScript的能力。

### 3、JSX语法是如何在javaScript中生效的：认识Babel

jsx会被编译为React.createElement()，React.createElement()将返回一个叫作“reactElement"的对象。

### 4、什么是Babel？

babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

### 5、update阶段：组件更新

是由父组件更新引发的子组件更新而不是父组件传递给子组件的props更新导致的更新。（判断传递过去的props与之前的是否相同）
如果父组件导致组件重新渲染，即使props没有改变，也会调用此方法（componentReceiveProps）。如果只想处理更改，请确保进行当前值与变更值比较。

### 6、React 创建虚拟DOM方法
-  1.第一种 createElement 写法
```jsx
const vm = React.createElement('h1', {id: 'title'}, 'hello world');
```
-  2.第二种 jsx 写法
```jsx
const vm = <h1 id='title'>hello world</h1>;
```

### 7、React 虚拟DOM 渲染

```jsx
import React from "react";
import ReactDOM from "react-dom";
const vm = <h1 id='title'>hello world</h1>;
//  通过ReactDOM.render()方法将虚拟DOM渲染到页面中
ReactDOM.render(vm, document.getElementById('root'));
```

### 8、什么是虚拟DOM
```text
1.虚拟DOM的本质是Object类型的对象（一般对象）

2.虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多属性。

3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上。
```

### 9、JSX语法规则
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

### 10、使用 jsx 动态创建虚拟DOM
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

### 11、模块与组件、模块化与组件化的理解
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

### 12、React 面向组件编程
#### 1.基本理解和使用
-  1.使用React开发者工具调试
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
- 如果应用商店打不开 可以点击 [React Developer Tools](https://www.crx4chrome.com/crx/3068/) 

#### 2.效果
-   1.函数式组件：用函数定义的组件（适用于【简单组件】的定义）
```jsx
// 1.创建函数式组件（注意：组件名必须首字母大写）
function MyComponent() {
    console.log(this); // 此处的this是undefined，因为babel编译后开启了严格模式（严格模式下，this指向undefined而不是window）
    return <h2>我是用函数定义的组件（适用于【简单组件】的定义）</h2>
}
// 2.渲染组件到页面（注意：此处是函数名，不是调用函数，使用闭合标签形式）
ReactDOM.render(<MyComponent/>, document.getElementById('test'))
/*
* 执行了ReactDOM.render(<MyComponent/>, document.getElementById('test'))之后，发生了什么？
* 1.React解析组件标签，找到了MyComponent组件
* 2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中
* */
```

-   2.类式组件：用类定义的组件（适用于【复杂组件】的定义）
```js
/********** 回顾类的知识 ***********/
/**
 * 总结：
 *   1.类中的构造器不是必须写的，要对实例进行一些初始化的操作，如添加指定属性时才写
 *   2.如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的
 *   3.类中所定义的方法，都是放在了类的原型对象上，供实例去使用
 * */
// 1.创建一个Person类
class Person {
    // 构造器方法
    constructor(name, age) {
        // 构造器中的this是谁？ ---> 类的实例对象
        this.name = name;
        this.age = age;
    }
    // 一般方法
    speak() {
        // speak方法放在了哪里？ ---> 类的原型对象上，供实例使用
        // 通过Person实例调用speak时，speak中的this就是Person实例
        console.log(`我叫${this.name},我${this.age}岁了`);
    }
}
// 创建一个Person的实例对象
const p1 = new Person('tom', 18);
p1.speak();

// 2.类的继承
//创建一个Student类，继承于Person类
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // 调用父类的constructor(name, age)
        this.grade = grade;
    }
    // 重写从父类继承过来的方法
    speak() {
        console.log(`我叫${this.name},我${this.age}岁了，我正在读${this.grade}`);
    }
    study(){
        // study方法放在了哪里？ ---> 类的原型对象上，供实例使用
        // 通过Student实例调用study时，study中的this就是Student实例
        console.log('我很努力的学习中')
    }
}
const s1 = new Student('tom', 18, 3);
s1.speak();
```
```jsx
/********** 创建React类式组件 ***********/
// 创建一个类 继承React.Component
class MyComponent extends React.Component {
    // 必须要有render ,必需要有返回值
    render() {
        // render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
        // render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象
        console.log('render中的this:', this);
        return <h2>我是用类定义的组件（适用于【复杂组件】的定义）</h2>
    }
}
// 2.渲染组件到页面
ReactDOM.render(<MyComponent/>, document.getElementById('test'))
/**
 * 执行了ReactDOM.render(<MyComponent/>, document.getElementById('test'))后，发生了什么？
 * 1.React解析组件标签，找到了MyComponent组件
 * 2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法
 * 3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中
 * */
```

### 13、 组件实例的三大核心属性
#### 1.state
> 组件的状态，组件内部使用，外部不能访问
##### 1.state标准写法
```jsx
/****** 借助构造器初始化状态 *******/
// 1.创建组件
class Weather extends React.Component {
    // 构造器调用了几次？ -- 1次
    constructor(props) {
        super(props);
        // 初始化状态
        this.state = {isHot: false, wind: '微风'};
        this.changeWeather = this.changeWeather.bind(this);
    }
    // render 调用了几次？ -- 1+n次 1是初始化的那次，n是状态更新的次数
    render() {
        // 读取状态
        const {isHot, wind} = this.state;
        return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h1>
    }
    // changeWeather 调用了几次？ -- 点几次调用几次
    changeWeather() {
        // changeWeather放在哪里？—— Weather的原型对象上，供实例使用
        // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
        // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined

        // 获取原来的isHot值（读取状态）
        const isHot = this.state.isHot;
        // 修改状态
        // 严重注意：状态(state)必须通过setState()来更新，且更新是一种合并，不是替换。
        this.setState({isHot: !isHot});
        console.log(this);
    }
}

// 2.渲染组件到页面
ReactDOM.render(<Weather/>, document.getElementById('test'));
```
```html
<-- 原生事件绑定三种形式 -->
<body>
<button id="btn1">btn1</button>
<button id="btn2">btn2</button>
<!-- onclick 小写-->
<button id="btn3" onclick="demo()">btn3</button>

<script type="text/javascript">
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    btn1.addEventListener('click',
        () => {alert('btn1')}
    );
    btn2.onclick = () => {alert('btn2')};
    function demo(){
        alert('btn3')
    }
    
</script>
</body>
```
```js
/*********** 类中方法 this指向 ***********/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        // speak方法放在了哪里？—— Person的原型对象上，供实例使用
        // 通过Person实例调用speak时，speak中的this就是Person实例
        console.log(this);
    }

    dance = () => {
        console.log(this);
    }
}

const p1 = new Person('Tom', 18);
p1.speak(); // 此处的this是p1
const speak = p1.speak; // 类中的方法开启了严格模式
speak(); // 此处的this是undefined 
const dance = p1.dance; // 箭头函数中的this永远指向函数声明时所在作用域下的this
dance(); // 此处的this是p1 

/**
 * 局部严格模式
 */
function demo1() {
    'use strict'
    console.log(this);
}

function demo2() {
    console.log(this);
}

demo1(); // undefined
demo2(); // window
```

```jsx
/******* React 事件绑定 *********/
class MyComponent extends React.Component {
    // 注意: class 中定义函数, 一定要写 binding, 或者在构造器中 bind(this)
    constructor(props) {
        super(props);
        // 第一种方法 ：1.在构造器中 bind(this) 这样实例中就有了该方法
        // 绑定的方法名可以修改      bind前面的方法名要与定义的方法名保持一致
        this.handleClick1 = this.handleClick.bind(this); // 必须绑定this
    }
    // 该方法没在组件实例上，而是放在了原型对象上，供实例使用
    handleClick() {
        // 1.通过bind 方法将this指向组件实例 就可以获取到this 中的属性和方法: state props ...
        // 2.handleClick放在了哪里？—— MyComponent的原型对象上，供实例使用
        // 3.通过MyComponent实例调用handleClick时，handleClick中的this就是MyComponent实例
        // 4.类中的方法默认开启了局部的严格模式，所以handleClick中的this为undefined
        console.log('this is:', this);
    }

    render() {
        // 注意：事件用小驼峰式写法 onClick
        return (
            // 第二种方法： 2.在render中 bind(this) 或者 使用构造器中挂载实例上的方法
            <button onClick={this.handleClick.bind(this) || this.handleClick1}>
                Click me
            </button>
        );
    }
}
```

##### 2.state 的简写方式
```js
/******* 类实例中添加属性  *********/
class Car{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    // 类中可以直接写赋值语句，如下代码的含义是：给Car的实例对象添加一个属性，名为
    // year,值为2022
    year = 2022;
}

const c1 = new Car('BYD',1000000);
console.log(c1.name,c1.price,c1.year);  

```
```jsx
/******* React类组件简写形式  *********/
class MyComponent extends React.Component{
    // 添加 state 属性
    //  初始化状态
    state ={
        isHost:true,
        wind:'微风'
    }
    // 用箭头函数解决this指向问题
    // 自定义方法---要用赋值语句的形式+箭头函数
    handleClick = () => {
        console.log(this);
    }
    
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent/>,document.getElementById('example'));
```

##### 3. 理解
```text
1. state是组件对象最重要的属性，值是对象（可以包含多个key-value的组合）

2. 组件被称为“状态机”，通过更新组件的state来更新对应的页面显示（重新渲染组件）
```

##### 4.强烈注意
```text
1. 组件中render方法中的this为组件实例对象

2. 组件自定义的方法中this为undefined，如何解决？
    - 强制绑定this:  
        - 方式1: 通过函数对象的bind()
        - 方式2: 通过箭头函数
    - 利用箭头函数:
        - 箭头函数中的this就是定义时所在的对象
        
3. 状态数据，不能直接修改或更新
    - 错误写法: this.state.comment = 'xxxx';
    - 正确写法: this.setState({comment:'xxxx'})
```

#### 2.props
##### 1. 理解
```text
```

