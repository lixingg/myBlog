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

- 1.第一种 createElement 写法

```jsx
const vm = React.createElement('h1', {id: 'title'}, 'hello world');
```

- 2.第二种 jsx 写法

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
const list = ['a', 'b', 'c'] // 动态列表
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

- 1.使用React开发者工具调试

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

- 1.函数式组件：用函数定义的组件（适用于【简单组件】的定义）

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

- 2.类式组件：用类定义的组件（适用于【复杂组件】的定义）

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

    study() {
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

#### 1.三大属性 -- state

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
            () => {
                alert('btn1')
            }
    );
    btn2.onclick = () => {
        alert('btn2')
    };

    function demo() {
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
class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // 类中可以直接写赋值语句，如下代码的含义是：给Car的实例对象添加一个属性，名为
    // year,值为2022
    year = 2022;
    // 类添加属性
    static type = 'car';

    // 类添加方法
    static getType() {
        return 'car';
    }
}

const c1 = new Car('BYD', 1000000);
console.log(c1.name, c1.price, c1.year);

```

```jsx
/******* React类组件简写形式  *********/
class MyComponent extends React.Component {
    // 添加 state 属性
    //  初始化状态
    state = {
        isHost: true,
        wind: '微风'
    }
    // 用箭头函数解决this指向问题
    // 自定义方法---要用赋值语句的形式+箭头函数
    handleClick = () => {
        console.log(this);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('example'));
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

#### 2.三大属性 -- props

##### 1. 理解

```text
1. 每个组件对象都会有props(properties的简写)属性

2. 组件标签的所有属性都保存在props中
```

- **1.props的基本使用**

```jsx
class MyComponent extends React.Component {
    render() {
        const {name, age, gender} = this.props;
        return (
            <div>
                <h2>姓名：{name}</h2>
                <h2>年龄：{age}</h2>
                <h2>性别：{gender}</h2>
            </div>
        )
    }
}

// age={18} 使用这种方式 传递的数值为 number 或者动态参数传递
ReactDOM.render(<MyComponent name="Tom" age={18} gender="male"/>, document.getElementById('example'));
```

- **2.批量传递props**

```jsx
class MyComponent extends React.Component {
    render() {
        //注意： props 是只读的 ，不允许修改
        // this.props.name = 'Jack'; // 此行代码会报错，因为props是只读的
        const {name, age, gender} = this.props;
        return (
            <div>
                <h2>姓名：{name}</h2>
                <h2>年龄：{age}</h2>
                <h2>性别：{gender}</h2>
            </div>
        )
    }
}

// 对标签属性进行类型、必要性的限制（设置props属性的类型及必要性）
MyComponent.propTypes = { // PropTypes 来自 prop-types库
    name: PropTypes.string.isRequired, // 限制name必传，且为字符串
    age: PropTypes.number, // 限制age为数值
    gender: PropTypes.string,// 限制gender为字符串
    speak: PropTypes.func, // 限制speak为函数
}
// 指定默认标签属性值（设置props默认值）
MyComponent.defaultProps = {
    age: 18,
    gender: 'male',
}

function speak() {
    console.log('speak');
}

const p = {name: "Tom", age: 18, gender: "male", speak};
// {...p} 并非对象的扩展运算符（克隆对象），而是React提供的新属性，用于批量传递props
ReactDOM.render(<MyComponent {...p}/>, document.getElementById('example'));

```

```js
/*********** 回顾展开运算符的使用 ************/
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
console.log(...arr1); // 数组展开： 1 3 5 7 9
console.log([...arr1, ...arr2]); //数组合并： [1,3,5,7,9,2,4,6,8,10]

// 在函数中使用
function sum(...numbers) { // ...numbers 表示将传入的参数以数组的形式接收
    return numbers.reduce((preValue, currentValue) => {
        return preValue + currentValue;
    })
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// 构造字面量对象时使用展开语法
let person = {name: "Tom", age: 18};
let person2 = {...person}; // 克隆对象
console.log(...person) // 展开对象报错 TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function

// 对象合并 后面相同属性覆盖前面的
let person3 = {...person, name: "Jack", address: "No.1 Road"}
console.log(person3); // {name: "Jack", age: 18, address: "No.1 Road"}};
```

- **3.props的简写方式**

```jsx
// 通过类关键字 static 将 添加类的静态属性和方法放在类里面维护，结构更清晰
class MyComponent extends React.Component {
    // 对标签属性进行类型、必要性的限制（设置props属性的类型及必要性）
    static propTypes = { // PropTypes 来自 prop-types库
        name: PropTypes.string.isRequired, // 限制name必传，且为字符串
        age: PropTypes.number, // 限制age为数值
        gender: PropTypes.string,// 限制gender为字符串
        speak: PropTypes.func, // 限制speak为函数
    }
// 指定默认标签属性值（设置props默认值）
    static defaultProps = {
        age: 18,
        gender: 'male',
    }

    render() {
        const {name, age, gender} = this.props;
        return (
            <div>
                <h2>姓名：{name}</h2>
                <h2>年龄：{age}</h2>
                <h2>性别：{gender}</h2>
            </div>
        )
    }
}


function speak() {
    console.log('speak');
}

const p = {name: "Tom", age: 18, gender: "male", speak};
ReactDOM.render(<MyComponent {...p}/>, document.getElementById('example'));
```

- **4.类式组件中的构造器与props**

```jsx
class MyComponent extends React.Component {
    constructor(props) {
        // 构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
        // console.log(props);
        super(props);
        console.log('constructor', this.props); // 通过实例获取props
        console.log('constructor', props); // 通过接收参数获取props
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.string,
        speak: PropTypes.func,
    }
    static defaultProps = {
        age: 18,
        gender: 'male',
    }

    render() {
        const {name, age, gender} = this.props;
        return (
            <div>
                <h2>姓名：{name}</h2>
                <h2>年龄：{age}</h2>
                <h2>性别：{gender}</h2>
            </div>
        )
    }
}

const p = {name: "Tom", age: 18, gender: "male"};
ReactDOM.render(<MyComponent {...p}/>, document.getElementById('example'));
```

- **5.函数组件使用props**

```jsx
// 创建函数式组件 只能使用props (在hooks函数没有诞生之前 state,refs不能用 )
function MyComponent(props) {
    const {name, age, gender} = props;
    return (
        <div>
            <h2>姓名：{name}</h2>
            <h2>年龄：{age}</h2>
            <h2>性别：{gender}</h2>
        </div>
    )
}

// 只能通过这种形式对props进行类型、必要性的限制
MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    gender: PropTypes.string,
    speak: PropTypes.func,
}

MyComponent.defaultProps = {
    age: 18,
    gender: 'male',
}
const p = {name: "Tom", age: 18, gender: "male"};
ReactDOM.render(<MyComponent {...p}/>, document.getElementById('example'));
```

##### 2.作用

```text
1. 通过标签属性从组件外向组件内传递变化的数据

2.注意：组件内部不能修改props数据
```

##### 3.编码操作

- **1.内部读取某个属性值**

```jsx
this.props.name
```

- **2.对props中的属性值进行类型、必要性的限制**

```jsx
// 第一种方式（Reactv15.5开始已弃用）
MyComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    speak: React.PropTypes.func,
}

// 第二种（新）：
// 使用prop-types库进行限制（需要引入prop-types库）
MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    speak: PropTypes.func,
}

// static propTypes = {
//     name:PropTypes.string.isRequired,
//     age:PropTypes.number,
//     speak:PropTypes.func,
// }
```

- **3.指定默认标签属性值**

```jsx
MyComponent.defaultProps = {
    name: '老刘',
    age: 18,
}
```

- **4.通过标签属性传递函数类型的props给组件，并使用**

```jsx
<MyComponent speak={(name) => alert(`你好${name}`)}/>
```

- **5.扩展属性：将对象的所有属性通过props传递**

```jsx
<MyComponent {...person}/>
```

- **6.组件类的构造函数**

```text
constructor(props) {
    // 构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
    // console.log(props);
    super(props);
    console.log('constructor',this.props); // 通过实例获取props
    console.log('constructor',props); // 通过接收参数获取props
}

```

#### 3.三大属性 -- refs

##### 1.理解

```text
1.组件内的标签可以定义ref属性来标识自己
2.ref属性值可以是：
    - 字符串：'xxx'，通过this.refs.xxx来访问组件实例对象（不推荐）
    - 回调函数：function(c){this.refs = c;}
    - createRef()创建的容器对象：React.createRef().current
2.通过this.refs.xxx来访问组件标签实例对象
```

##### 2.编码

- **1.字符串形式的refs**

```jsx
<input ref="input1"/>
```

- **2.回调函数形式的refs**

```jsx
<input ref={(c) => {
    this.input1 = c;
    console.log(c)
}}/>
```

- **3.createRef()形式的refs**

```jsx
<input ref={this.myRef}/>
```

##### 3.案例

- **1.字符串形式的refs**

```jsx
// 创建类组件 使用 字符串形式的ref（效率不高，不推荐使用）
class MyComponent extends React.Component {
    // 展示左侧输入框的数据
    showData = () => {
        const {input1} = this.refs;
        console.log(input1.value);
    }

    render() {
        return (
            <div>
                <input ref="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;
                <button onClick={this.showData}>点我提示左侧数据</button>
            </div>
        )
    }
}

// 渲染
ReactDOM.render(<MyComponent/>, document.getElementById('test'));
```

- **2.回调函数形式的refs**

```jsx
// 创建类组件 使用 回调函数形式的ref
class MyComponent extends React.Component {
    // 展示左侧输入框的数据
    showData = () => {
        const {input1} = this;
        console.log(input1.value);
    }
    // ref通过以class绑定函数形式定义的回调函数
    saveInput = (c) => {
        this.input1 = c;
    }

    render() {
        return (
            <div>
                {/*ref回调函数是以内联函数形式定义的，组件更新的时候会被调用两次 ，第一次c是null ，第二次是节点*/}
                <input ref={(c) => {
                    this.input1 = c;
                    console.log(c)
                }} type="text" placeholder="点击按钮提示数据"/>&nbsp;
                {/*ref回调函数是以class的绑定函数的形式定义的，组件更新的时候不会被调用，但是与内联相比区别不大可以忽略*/}
                <input ref={this.saveInput1} type="text" placeholder="点击按钮提示数据1"/>&nbsp;
                <button onClick={this.showData}>点我提示左侧数据</button>
                <button onClick={this.showData}>点我提示左侧数据1</button>
            </div>
        )
    }
}

// 渲染
ReactDOM.render(<MyComponent/>, document.getElementById('test'));
```

- **3.createRef()形式的refs**

```jsx
// 创建类组件 使用 createRef
class MyComponent extends React.Component {
    /**
     * 推荐使用
     * 创建ref容器
     * React.createRef 调用后可以返回一个容器，这个容器可以存储被ref所标识的节点，该容器是“专人专用”的
     * */
    myRef = React.createRef();
    btnRef = React.createRef();
    // 展示左侧输入框的数据
    showData = () => {
        console.log(this.myRef); // { current: input元素 }
        console.log(this.myRef.current.value);
    }

    render() {
        return (
            <div>
                <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>
                <button ref={this.btnRef} onClick={this.showData}>点我提示左侧数据</button>
            </div>)
    }
}

// 渲染
ReactDOM.render(<MyComponent/>, document.getElementById('test'))
```

##### 4.事件处理

- **1.通过onXxx属性指定事件处理函数（注意大小写）**

- **（a）React使用的是自定义（合成）事件，而不是使用的原生DOM事件 -- 为了更好的兼容性**

- **（b）React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）-- 为了高效**

- **2.通过event.target得到发生事件的DOM元素对象 -- 不要过度的使用Ref**

```jsx
// 创建类组件
class Demo extends React.Component {
    // 创建ref容器
    myRef = React.createRef();
    // 创建点击事件 发生事件的事件源是按钮 不是输入框 不能通过event 获取到输入框的数据 只能通过ref获取
    showData = () => {
        alert(this.myRef.current.value);
    }
    // 创建失去焦点事件  发生事件的事件源是输入框 可以通过event 获取到输入框的数据
    showData2 = (event) => {
        alert(event.target.value);
    }

    render() {
        return (
            <div>
                <input ref={this.myRef} onBlur={this.showData} type="text" placeholder="点击按钮提示数据"/>
                <button onClick={this.showData}>点我提示左侧数据</button>
                <input onBlur={this.showData2} type="text" placeholder="点击按钮提示数据"/>
            </div>
        )
    }
}
```

### 14.收集表单数据

#### 1.理解

- **1.包含表单的组件分类：**

- **（1）受控组件**

- **表单项输入的数据，实时同步到state中**

```jsx
/********* 受控组件 （推荐使用）*********/
// 受控组件： 表单内输入类的dom 随着输入将输入值维护到state中， 需要的时候从state中取(通过事件绑定修改状态 类似于vue的双向数据绑定）
// 创建一个登录组件
class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    // 保存用户名到状态中
    saveUsername = (event) => {
        this.setState({username: event.target.value})
    }
    // 保存密码到状态中
    savePassword = (event) => {
        this.setState({password: event.target.value})
    }
    // 表单提交的回调
    handleSubmit = (event) => {
        event.preventDefault(); // 阻止表单提交默认行为（跳转页面）
        const {username, password} = this.state;
        alert(`你输入的用户名是：${username}，你输入的密码是：${password}`);
    }

    render() {
        return (
            <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                用户名：<input onChange={this.saveUsername} type="text" name="username"/>
                密码：<input onChange={this.savePassword} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

// 渲染组件到页面
ReactDOM.render(<Login/>, document.getElementById('test'))
````

- **（2）非受控组件**

- **表单项输入的数据，不会自动同步到state中**

```jsx
/********* 非受控组件 *********/
// 非受控组件： 表单内输入类的dom 输入的值现用现取就是非受控组件（通过ref来获取）
// 创建一个登录组件
class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault(); // 阻止表单提交默认行为（跳转页面）
        const {username, password} = this;
        alert(`你输入的用户名是：${username.value},你输入的密码是：${password.value}`);
    }

    render() {
        return (
            <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
                用户名：<input ref={c => this.username = c} type="text" name="username"/>
                密码：<input ref={c => this.password = c} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

// 渲染组件
ReactDOM.render(<Login/>, document.getElementById('test'));
```

### 15.高阶函数柯里化

- **（1）高阶函数**

- **如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。**

- **1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。**

- **2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。**

- **常见的高阶函数有：Promise、setTimeout、arr.map()等等**

```js
// 高阶函数
function fn(a, b, c) {
    return b();
}

fn(10, () => {
    alert(100)
}, 20); // 100

```

- **（2）柯里化**

- **通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。**

```js
// 柯里化函数
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

// 调用柯里化函数
console.log(sum(1)(2)(3)); // 6
```

```jsx
/********* 柯里化 ***********/
// 创建登录表单组件
class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    // 定义高阶函数 保存表单数据到状态中 （柯里化）
    saveFormData = (dataType) => {
        return (e) => {
            this.setState({[dataType]: e.target.value})
        }
    }

    // 表单提交的回调
    handleSubmit = (event) => {
        event.preventDefault(); // 阻止表单提交默认行为（跳转页面）
        const {username, password} = this.state;
        alert(`你输入的用户名是：${username}，你输入的密码是：${password}`);
    }

    render() {
        return (
            <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                {/*onChange 调用的是 this.saveFormData的返回值且返回值必须为回调函数 作为 onChange 的回调 */}
                用户名：<input onChange={this.saveFormData('username')} type="text" name="username"/>
                密码：<input onChange={this.saveFormData('password')} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

// 渲染组件到页面
ReactDOM.render(<Login/>, document.getElementById('test'))
```

```jsx
/************* 非柯里化 ***************/
// 创建登录表单组件
class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    // 保存表单数据到状态中 （非柯里化）
    saveFormData = (dataType, e) => {
        this.setState({[dataType]: e.target.value})
    }

    // 表单提交的回调
    handleSubmit = (event) => {
        event.preventDefault(); // 阻止表单提交默认行为（跳转页面）
        const {username, password} = this.state;
        alert(`你输入的用户名是：${username}，你输入的密码是：${password}`);
    }

    render() {
        return (
            <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                {/*给onChange 一个回调函数 作为 onChange 的回调，当react调用回调时会调用里面的saveFormData，将参数传过去 */}
                用户名：<input onChange={(event) => this.saveFormData('username', event)} type="text" name="username"/>
                密码：<input onChange={(event) => this.saveFormData('password', event)} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

// 渲染组件到页面
ReactDOM.render(<Login/>, document.getElementById('test'))
```

### 16.组件的生命周期

- **1.组件生命周期使用**
-

```jsx
// 创建一个类组件
// 生命周期回调函数 《====》 生命周期钩子函数 《====》 生命周期函数 《====》 生命周期钩子
class Life extends React.Component {
    state = {opacity: 1}
    death = () => {
        // 卸载组件
        ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }

    // 组件将要挂载
    componentWillMount() {
        console.log('componentWillMount');
    }

    // 组件挂载完毕
    componentDidMount() {
        this.timer = setInterval(() => {
            // 获取原来的状态
            let {opacity} = this.state
            opacity -= 0.1
            if (opacity <= 0) {
                opacity = 1
            }
            // 更新状态
            this.setState({opacity})
        }, 200)
        console.log('componentDidMount');
    }

    // 控制组件更新的“阀门”
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true
    }

    // 组件将要更新

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    // 组件更新完毕
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    // 组件将要卸载
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // render 调用时机：
    // 1. 初始化渲染 2. 状态更新之后
    render() {
        console.log('render');
        return (
            <div>
                <h2>React学不会怎么办？</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        )
    }

}

// 渲染组件到页面
ReactDOM.render(<Life/>, document.getElementById('test'))
```

- **2.生命周期(旧)**
- ***初始化阶段：由ReactDOM.render()触发---初次渲染***
- 1.constructor() // 构造器
- 2.componentWillMount() // 即将挂载
- 3.render() // 渲染
- 4.componentDidMount() =====> 常用 // 挂载之后
    - 一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
- ***更新阶段：由组件内部this.setSate()或父组件重新render触发***
- 1.shouldComponentUpdate() // 控制组件更新的“阀门”
- 2.componentWillUpdate() // 组件将要更新
- 3.render() =====> 必须使用的一个 // 渲染
- 4.componentDidUpdate() // 组件更新完毕
- ***卸载组件：由ReactDOM.unmountComponentAtNode()触发***
- 1.componentWillUnmount() =====> 常用 // 组件将要卸载
    - 一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
-
-  <img src="/web/react-life.png">

```jsx
/*********** 组件初始化创建生命周期的执行 到setState修改状态值 及 强制更新的生命周期 看上图流程************/
class Count extends React.Component {
    // 构造器
    constructor(props) {
        console.log('Count---constructor');
        super(props)
        this.state = {count: 0}
    }

    // 组件将要挂载
    componentWillMount() {
        console.log('Count---componentWillMount');
    }

    // 组件挂载完毕
    componentDidMount() {
        console.log('Count---componentDidMount');
    }

    // 组件更新阀门
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Count---shouldComponentUpdate');
        return true;
    }

    // 组件将要更新
    componentWillUpdate() {
        console.log('Count---componentWillUpdate');
    }

    // 组件更新完毕
    componentDidUpdate() {
        console.log('Count---componentDidUpdate');
    }

    // 组件将要卸载
    componentWillUnmount() {
        console.log('Count---componentWillUnmount');
    }

    // 加1按钮的回调
    add = () => {
        const {count} = this.state
        this.setState({count: count + 1})
    }
    // 强制更新按钮的回调
    force = () => {
        this.forceUpdate()
    }

    render() {
        console.log('Count---render');
        const {count} = this.state
        return (
            <div>
                <h2>当前求和为：{count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
            </div>
        )
    }
}

ReactDOM.render(<Count count={100}/>, document.getElementById('test'))
```

```jsx
/*********** 父组件render触发子组件更新 ************/
class A extends React.Component {
    state = {carName: '奔驰'}
    changeCar = () => {
        this.setState({carName: '奥拓'})
    }

    render() {
        return (
            <div>
                <div>我是A组件</div>
                <button onClick={this.changeCar}>换车</button>
                <B carName={this.state.carName}/>
            </div>
        )
    }
}

class B extends React.Component {
    // 组件将要接收新的props（初始化第一次传递的props不会被调用）
    componentWillReceiveProps(props) {
        console.log('B---componentWillReceiveProps', props);
    }

    // 组件是否应该更新
    shouldComponentUpdate() {
        console.log('B---shouldComponentUpdate');
        return true
    }

    // 组件将要更新
    componentWillUpdate() {
        console.log('B---componentWillUpdate');
    }

    // 组件更新完毕
    componentDidUpdate() {
        console.log('B---componentDidUpdate');
    }

    render() {
        return (
            <div>我是B组件，接收到的车是：{this.props.carName}</div>
        )
    }
}

ReactDOM.render(<A/>, document.getElementById('test'))
```

- **3.生命周期（新）**
-  <img src="/web/react-life-new.png">
- **4.生命周期的三个阶段（新）**
- ***初始化阶段：由ReactDOM.render()触发---初次渲染***
- 1.constructor // 构造器
- 2.getDerivedStateFromProps //
- 3.render //
- 4.componentDidMount
- ***更新阶段：由组件内部this.setSate()或父组件重新render触发***
- 1.getDerivedStateFromProps
- 2.shouldComponentUpdate
- 3.render
- 4.getSnapshotBeforeUpdate
- 5.componentDidUpdate
- ***卸载组件：由ReactDOM.unmountComponentAtNode()触发***
- 1.componentWillUnmount

```jsx
// 创建组件
class Count extends React.Component {
    /**
     * 1.初始化阶段：由ReactDOM.render()触发---初次渲染
     *     1.constructor
     *     2.getDerivedStateFromProps （一般不用）
     *     3.render
     *     4.componentDidMount ======> 常用
     *          一般做初始化操作，例如：开启定时器、发送网络请求、订阅消息
     * 2.更新阶段：由组件内部this.setSate()或父组件重新render触发
     *     1.getDerivedStateFromProps
     *     2.shouldComponentUpdate
     *     3.render
     *     4.getSnapshotBeforeUpdate （一般不用）
     *     5.componentDidUpdate
     * 3.卸载组件：由ReactDOM.unmountComponentAtNode()触发
     *     1.componentWillUnmount =====> 常用
     *          一般做收尾工作，例如：关闭定时器、取消订阅消息
     * */

    // 构造器
    constructor(props) {
        console.log('Count---constructor');
        super(props);
        // 初始化状态
        this.state = {count: 0}
    }

    // 加1按钮的回调
    add = () => {
        // 获取原装态
        const {count} = this.state
        // 更新状态
        this.setState({count: count + 1})
    }
    //  使用 static 注册事件 从props中衍生state 
    //  getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它
    //  应该返回一个对象来更新 state，如果返回 null 则不更新任何内容。
    //  如果返回是 porps 
    //  那么 state 将会被覆盖 触发setState方法 不会触发render方法
    static getDerivedStateFromProps(props, state) {
        console.log('Count---getDerivedStateFromProps', props, state);
        return null
    }

    // 
    componentDidMount() {
        console.log('Count---componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('Count---shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('Count---getSnapshotBeforeUpdate');
        return 'hahha'
    }

    componentDidUpdate(preProps, preState, snapshotValue) {
        console.log('Count---componentDidUpdate', preProps, preState, snapshotValue);
    }

    componentWillUnmount() {
        console.log('Count---componentWillUnmount');
    }

    render() {
        console.log('Count---render');
        return (<div>
            <h2>当前求和为{this.state.count} </h2>
            <button onClick={this.add}>加</button>
            <button onClick={this.death}>卸载组件</button>
            <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
        </div>)
    }
}

// 渲染组件到页面
ReactDOM.render(<Count/>, document.getElementById('test'))
```

```jsx
/*********** getSnapshotBeforeUpdate演示 **************/

class NewList extends React.Component {
    state = {newArr: []}

    componentDidMount() {
        setInterval(() => {
            const {newArr} = this.state
            const news = "新闻" + (newArr.length + 1)
            this.setState({newArr: [news, ...newArr]})
        }, 1000)
    }

    // 获取组件更新前的快照
    getSnapshotBeforeUpdate(oldProps, oldState) { // oldProps, oldState 表示更新前的props和state
        console.log('Count---getSnapshotBeforeUpdate');
        return this.refs.list.scrollHeight;
    }

    // 更新完成后的操作
    // previousProps 表示更新前的props
    // previousState 表示更新前的state
    // snapshot 表示 getSnapshotBeforeUpdate 返回的快照值
    componentDidUpdate(previousProps, previousState, snapshot) {
        console.log('Count---componentDidUpdate', previousProps, previousState, snapshot);
// 获取现在的滚动高度 - 快照 就是 当前的滚动高度 - 更新前的快照
        this.refs.list.scrollTop += this.refs.list.scrollHeight - snapshot;
    }

    render() {
        return (<div className="list" ref="list">
            {
                this.state.newArr.map((item, index) => {
                    return <div className="news" key={index}>{item}</div>
                })
            }
        </div>)
    }
}

// 渲染组件到页面
ReactDOM.render(<NewList/>, document.getElementById('test'))
```

- **4.重要的钩子**
- ***1.render 初始化渲染或更新渲染调用***
- ***2.componentDidMount：开启监听，发送ajax请求***
- ***3.componentWillUnmount：做一些收尾工作，如：清除定时器***

- **5.即将废弃的钩子**
- ***1.componentWillMount：组件挂载前调用***
- ***2.componentWillReceiveProps：props发生变化时调用***
- ***3.componentWillUpdate：更新渲染调用***
- ***现在使用会出现警告，下个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用**

### 17.Diffing 算法

#### 1.验证Diffing算法

```jsx
// 只有span 里面的内容发生了改变 其他的节点都复用了 没有改变
class Time extends React.Component {
    state = {date: new Date()}

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h1>Hello,World!</h1>
                {/*输入内容不变*/}
                <input type="text"/>
                <span>
                        {/*输入内容在变*/}
                    现在是：{this.state.date.toTimeString()}
                    {/*输入内容不变*/}
                    <input type="text"/>
                 </span>
            </div>
        )
    }
}

//渲染组件到页面
ReactDOM.render(<Time/>, document.getElementById('test'))
```

#### 2.key的作用

```jsx
/**
 * 经典面试题
 * 1.react/vue中的key有什么作用？（key的内部原理是什么）
 * 2.为什么遍历列表时，key最好不要用index?
 *
 * 1.虚拟DOM中key的作用：
 *      1.简单的说：key是虚拟DOM对象的标识，在更新显示时key起着极其重要的作用。
 *      2.详细的说：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】,
 *          随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
 *              a.旧虚拟DOM中找到了与新虚拟DOM相同的key：
 *                  (1).若虚拟DOM中内容没变,直接使用之前的真实DOM！
 *                  (2).若虚拟DOM中内容变了,则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
 *              b.旧虚拟DOM中未找到与新虚拟DOM相同的key
 *                  根据数据创建新的真实DOM，随后渲染到到页面。
 * 2.用index作为key可能会引发的问题：
 *      1.若对数据进行：逆序添加、逆序删除等破坏顺序操作:
 *          会产生没有必要的真实DOM更新 ==> 界面效果没问题,但效率低。
 *      2.如果结构中还包含输入类的DOM：
 *          会产生错误DOM更新 ==> 界面有问题。
 * 3.开发中如何选择key?:
 *      1.最好使用每条数据的唯一标识作为key,比如id、手机号、身份证号、学号等唯一值。
 *      2.如果确定只是简单的展示数据，用index也是可以的。
 */

/**--------------------------------------------------**/

/**
 * 慢动作回放 ------- 使用index作为key
 *
 * 1.初始数据：
 *      const data = [
 *          {id:'001',name:'小张',age:18},
 *          {id:'002',name:'小李',age:19}
 *      ]
 * 2.初始的虚拟DOM：
 *      <div id="test">
 *          <div>小张---18---<button>删除</button></div>
 *          <div>小李---19---<button>删除</button></div>
 *      </div>
 * 3.更新数据：
 *      const data = [
 *          {id:'001',name:'小张',age:18}
 *          {id:'002',name:'小李',age:19}
 *          {id:'003',name:'小王',age:20}
 *      ]
 * 4.更新后的虚拟DOM：
 *      <div id="test">
 *          <div>小张---18---<button>删除</button></div>
 *          <div>小李---19---<button>删除</button></div>
 *          <div>小王---20---<button>删除</button></div>
 *      </div>
 * 5.对比更新前后的虚拟DOM：
 *      (1).初始数据时，<div>的key为001、002，
 *          更新后的数据时，<div>的key为001、003，
 *          此时，我们可以发现key为002的<div>被新虚拟DOM覆盖了。
 *      (2).初始数据时，<div>的key为001、002，
 *          更新后的数据时，<div>的key为001、002，
 *          此时，我们可以发现key为003的<div>被新虚拟DOM覆盖了。
 *      (3).原因：
 *          (1).初始数据时，<div>的key为001、002，
 *              更新后的数据时，<div>的key为001、003，
 *              此时，我们发现key为002的<div>的元素被新虚拟DOM覆盖了。

 * 慢动作回放 ------- 使用id作为key
 * 1.初始的虚拟DOM：
 *      <div id="test">
 *          <div key="001">小张---18---<button>删除</button></div>
 *          <div key="002">小李---19---<button>删除</button></div>
 *          <div key="003">小王---20---<button>删除</button></div>
 *      </div>
 * 2.更新后的虚拟DOM：
 *      <div id="test">
 *          <div key="001">小张---18---<button>删除</button></div>
 *          <div key="003">小王---20---<button>删除</button></div>
 *          <div key="004">小赵---21---<button>删除</button></div>
 *      </div>
 * 3.初始的虚拟DOM的key为001、002、003，
 *      更新后的虚拟DOM的key为001、003、004，
 *      此时，我们发现key为002的<div>的元素被新虚拟DOM覆盖了。
 * 4.原因：
 *      (1).初始的虚拟DOM的key为001、002、003，
 *          更新后的虚拟DOM的key为001、003、004，
 *          此时，我们发现key为002的<div>的元素被新虚拟DOM覆盖了。
 */

class Person extends React.Component {

    state = {
        persons: [
            {id: '001', name: '小张', age: 18},
            {id: '002', name: '小李', age: 19},
            {id: '003', name: '小王', age: 20}
        ]
    }

    //删除操作
    deletePerson = (index) => {
        //获取原数组
        const {persons} = this.state
        //删除
        persons.splice(index, 1)
        //更新状态
        this.setState({persons})
    }

    // 慢动作回放
    addPerson = () => {
        const {persons} = this.state
        const person = {id: '004', name: '小刘', age: 20}
        persons.unshift(person)
        this.setState({persons})
    }

    render() {
        return (
            <div>
                <h2>人员列表</h2>
                <button onClick={this.addPerson}>添加小刘</button>
                <ul>
                    {
                        this.state.persons.map((personObj, index) => {
                            return (
                                <li key={index}>
                                    {personObj.name}---{personObj.age}
                                    <input type="text"/>
                                    <button onClick={() => {
                                        this.deletePerson(index)
                                    }}>删除
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<PersonList/>, document.getElementById('test'))
```

### 18.React应用（基于React脚手架）

#### 1.使用 create-react-app 创建项目

```text
第一种方法：

全局安装React脚手架

npm install -g create-react-app

创建项目

create-react-app my-app

进入项目文件夹

cd my-app

启动项目

npm start
```

```text
第二种方法：

使用 npx 安装

npx create-react-app my-app

进入项目文件夹

cd my-app

启动项目 

npm start
```

#### 2.React 脚手架项目解构

- **node_modules**：存放项目依赖的包
- **public ------ 静态资源文件**：
- &emsp;&emsp; **favicon.ico**：页签图标
- &emsp;&emsp; **index.html**：主页面
- &emsp;&emsp; **logo192.png**：logo图
- &emsp;&emsp; **logo512.png**：logo图
- &emsp;&emsp; **manifest.json**：应用加壳的配置文件
- &emsp;&emsp; **robots.txt**：爬虫协议文件
- **src ------ 源码文件**：
- &emsp;&emsp; **App.css**：App组件的样式
- &emsp;&emsp; **App.js**：App组件
- &emsp;&emsp; **App.test.js**：用于给App做测试
- &emsp;&emsp; **index.css**：为根组件配置样式
- &emsp;&emsp; **index.js**：入口文件
- &emsp;&emsp; **logo.svg**：logo图
- &emsp;&emsp; **reportWebVitals.js**：页面性能分析文件（需要 web-vitals库的支持）
- &emsp;&emsp; **setupTests.js**：jest测试的配置文件（需要 jest-dom库的支持）

- **.gitignore**：git版本管制忽略的配置
- **package.json**：应用包配置文件
- **package-lock.json**：包版本控制文件
- **README.md**：应用描述说明的readme文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <!--   %PUBLIC_URL% 代表public文件夹的路径    -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
    <!--       开启理想视口，用于做移动端网页的适配-->
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!--       用于配置浏览器页签 + 地址栏的颜色（仅支持安卓手机浏览器）-->
    <meta name="theme-color" content="#000000"/>
    <meta
            name="description"
            content="Web site created using create-react-app"
    />
    <!--       用于指定网页添加到手机主屏幕后的图标（适用于ios）-->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
    <!-- 应用加壳时的配置文件 （H5app）-->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
    <title>React App</title>
</head>
<body>
<!--若浏览器不支持js则展示标签中的内容-->
<noscript>You need to enable JavaScript to run this app.</noscript>
<!-- 项目容器 根节点-->
<div id="root"></div>
</body>
</html>
```

#### 3.创建组件

- **webstorm快捷方式**
-
    - &emsp;&emsp;**创建类组件**： rcc
    - &emsp;&emsp;**创建函数组件**： rcf

- **vscode快捷方式 ----- 需要安装插件（ES7 React/Redux/GraphQL/React-Native snippets）**
-
    - &emsp;&emsp;**创建类组件**： rcc
    - &emsp;&emsp;**创建函数组件**： rfc

#### 4.功能界面的组件化编码流程

- **1.拆分组件：拆分界面抽取组件**
- **2.实现静态组件：使用组件实现静态页面**
- **3.实现动态组件：**
-
    - 1.动态显示初始化数据
        - 1.数据类型
        - 2.数据名称
        - 3.保存在哪个组件
    - 2.交互（从绑定事件监听开始）

#### 5.组件拆分及使用

- 1.拆分组件、实现静态组件，注意：className不能写成class ,style={{}}不能写成style={}
- 2.动态初始化列表，将数据放在哪个组件的state中？
-
    - 1.某个组件使用：放在自身的state中
    - 2.某些组件使用：放在他们共同的父组件state中（官方称：状态提升）
- 3.关于父子之间通信：
-
    - 1.【父组件】给【子组件】传递数据：通过props传递
    - 2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
- 4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
- 5.状态在哪里，操作状态的代码就应该写在哪里

### 19.React 脚手架配置代理

#### 1.方法一：

- 在package.json中配置代理
- 优点：配置简单，前端请求资源时可以不加任何前缀。
- 缺点：不能配置多个代理
- 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000服务器 （优先匹配前端资源）

```json lines
{
  "name": "react_staging",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.2",
    "nanoid": "^5.0.7",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:4000"
  // 配置代理 （要求只能是字符串 且只能配置一个代理 局限性很大一般不在这里配置）
}
```

#### 2.方法二：

- 在src文件夹下创建setupProxy.js （src/setupProxy.js）并配置代理。
  (先下载 [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) 插件 不然页面打不开)(推荐)
- 有点：可以配置多个代理，可以灵活的控制请求是否走代理
- 缺点：配置繁琐，前端请求资源时，必须加前缀 （/api/xxx）

```bash
npm install --save-dev http-proxy-middleware
```

```js
// 老版本写法
// const proxy = require('http-proxy-middleware'); 
/*module.exports = function(app) {
  app.use(
          createProxyMiddleware('/api',{
            target: 'http://localhost:4000', // 设置你想要请求的接口的地址
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }),
          createProxyMiddleware('/api1',{
            target: 'http://localhost:4001', // 设置你想要请求的接口的地址
            changeOrigin: true,
            pathRewrite: {
              '^/api1': ''
            }
          })
  )
};*/

// 新版本写法
const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        // 这里的 /api 是你的应用在代理到目标服务器之前的前缀
        // 例如，如果你的应用是 /api/users，那么这里的 /api 就是你的应用的前缀
        // 遇见 /api 开头的请求，就会触发该代理配置
        '/api',
        createProxyMiddleware({
            // 请求转发给谁
            target: 'http://localhost:5000',
            // 控制服务器收到请求头中Host字段的值 （默认 false ,一般我们给他改成true）
            // true 时 Host字段的值会被修改为目标服务器的主机名 （例如：localhost:5000）
            // false 时 Host字段的值不会被修改 （例如：localhost:3000）
            changeOrigin: true,
            //重写请求路径（去除请求前缀，保证交给后台服务器的是正常请求地址）
            pathRewrite: {'^/api': ''}
        })
    )
    app.use(
        '/api1',
        createProxyMiddleware({
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api1': ''}
        })
    )
};
```

- 3.使用axios发送请求

```jsx
import React, {Component} from 'react';
import axios from "axios";

class Index extends Component {
    sendMessage = () => {
        // 先去3000 服务器下寻找接口 如果没有再通过代理转发4000端口请求
        axios.get("http://localhost:3000/api/user").then(res => {
            console.log(res);
        })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log("请求完成");
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.sendMessage}>发送请求</button>
            </div>
        );
    }
}

export default Index;
```

### 20、消息订阅与发布机制

- 1.工具库 PubSubJS （适用于任意组件通信）
- 2.安装

```bash
npm install pubsub-js --save
```

- 3.使用

```jsx
// A组件 先订阅消息
import PubSub from 'pubsub-js'

let subId = PubSub.subscribe('delete', function (msg, data) { // 订阅消息
    console.log(msg, data)
})


PubSub.unsubscribe(subId) // 取消订阅 要在组件销毁前取消订阅（componentWillUnmount）
```

```jsx
// B组件 再发布消息
import PubSub from 'pubsub-js'

PubSub.publish('delete', data) // 发布消息

```

### 21、fetch 发送网络请求 （关注分离的设计思想）

- 注意：除了 ajax (XMLHttpRequest(封装的请求 jquery、axios、zepto))之外，还可以使用浏览器（window）自带函数fetch发送网络请求。
- fetch：原生函数，不再使用 XMLHttpRequest 对象发送请求。
- fetch：兼容性不高（老版本浏览器不支持），使用率的较低，了解即可。

```js
// 发送网络请求 --- 使用fetch发送
fetch('http://localhost:3000/api/user').then(res => {
    return res.json()
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// 使用 async await 优化请求
const getData = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/user')
        const data = await res.json()
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

```

### 22、React 路由

#### 1、对SPA（单页面应用）的理解，以及SPA的优缺点

- 单页面应用（single page web application，SPA）
- 单页面应用：整个应用只有一个完整的页面。
- 点击页面中的链接不会刷新页面，只会做页面的局部更新。
- 数据需要通过 ajax 请求获取，并在前端异步展现。

#### 2. 路由的理解

- **1. 什么是路由**
- 1.一个路由就是一个映射关系（key:value）
- 2.key为路径，value可能是function或component
- **2. 路由分类**
- ***1.后端路由***
    - 1.理解：value 是 function,用来处理客户端提交的请求。
    - 2.注册路由：router.get(path,function(req,res))
    - 3.工作过程：当node接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应数据。
- ***2.前端路由***
    - 1.浏览器端路由，value是component，用于展示页面内容。
    - 2.注册路由：\<Route path="/test" component={Test} />
    - 3.工作过程：当浏览器的路径变成/test时，当前路由组件就会变为Test组件。

#### 3. React-Router-dom

- **1. 理解**
- 1.一个基于React的前端路由库
- 2.包含：多个路由组件、路由链接组件
- **2. 相关API**
- ***1. 内置组件***
-
    -
        1. \<BrowserRouter>
    -
        2. \<HashRouter>
    -
        3. \<Route>
    -
        4. \<Redirect>
    -
        5. \<Link>
    -
        6. \<NavLink>
    -
        7. \<Switch>
- ***2. 其他***
-
    -
        1. withRouter 对象
    -
        2. match 对象
    -
        3. history 对象

- **3.安装：**

```bash
npm i react-router-dom
```

- **4.基本使用：**
- ***1. 明确好界面中的导航区、展示区***
- ***2. 导航区的a标签改为Link标签***
-
    - \<Link to="/xxxx">Demo\</Link>
- ***3. 展示区写Route标签进行路径的匹配***
-
    - \<Route path="/xxxx" component={Demo} />
- ***4. \<App/> 的最外层包裹一个 \<BrowserRouter /> 或 \<HashRouter />***

```jsx
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

export default function App() {
    return (
        <div>
            {/*  react-router 6.0版本不再支持activeClassName写法 ，需要使用className动态样式写法 */}
            <NavLink activeClassName={'自定义高亮颜色类'} to="/">首页</NavLink>
            <NavLink activeClassName={'自定义高亮颜色类'} to="/list">列表页</NavLink>

            <Route path="/" component={Home}/>
            <Route path="/list" component={List}/>
        </div>
    )
}

```

```jsx
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

export default function App() {
    const getActiveClass = ({isActive}) => {
        return isActive ? '自定义高亮颜色类' : ''
    }
    return (
        <div>
            {/*  className动态样式写法 */}
            <NavLink className={getActiveClass} to="/">首页</NavLink>
            <NavLink className={getActiveClass} to="/list">列表页</NavLink>

            <Route path="/" component={Home}/>
            <Route path="/list" component={List}/>
        </div>
    )
}
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
```

- **5. 路由组件和一般组件**
- ***1. 写法不同：***
- 一般组件：\<Demo/>
- 路由组件：\<Route path="/demo" component={Demo} />
- ***2. 存放位置不同：***
- 一般组件：components
- 路由组件：pages
- ***3. 接收到的props不同：***
- 一般组件：写组件标签时传递了什么，就能收到什么
- 路由组件：接收到三个固定的属性
    - history
    -
        - go: ƒ go(n)
        - goBack: ƒ goBack()
        - goForward: ƒ goForward()
        - push: ƒ push(path, state)
        - replace: ƒ replace(path, state)
    - location
    -
        - pathname: "/about"
        - search: ""
        - state: undefined
    - match
    -
        - params: {}
        - path: "/about"
        - url: "/about"

- **6. NavLink 与封装 NavLink**
- ***1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名***（react-router 6.0版本以后不再支持这种写法）
- ***2.标签体内容是一个特殊的标签属性***
- ***3.通过this.props.children可以获取标签体内容***

```jsx
// 封装NavLink
import {NavLink} from "react-router-dom"

class MyNavLink extends Component {
    getActiveClass = ({isActive}) => {
        return isActive ? 'navLink activeNavLink' : 'navLink'
    }

    render() {
        return (
            <NavLink className={this.getActiveClass} {...this.props} />
        );
    }
}

export default MyNavLink;
```

- **7. Switch的使用**
- ***1.通常情况下，path和component是一一对应的关系***
- ***2.Switch可以提高路由匹配效率（单一匹配）***(当路由path匹配到时，Switch会停止匹配)

```jsx
// Switch react-router 6.0版本不在支持 
import React, {Component} from 'react';
import Nav from "./Nav"
import {Route, Switch} from "react-router-dom"

class Layout extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Switch>
                    <Route path="/home" element={<h1>Home</h1>}/>
                    {/*用 Switch 组件包裹只渲染 第一个匹配到的about组件 ，如果不包裹 全部匹配一边 影响效率*/}
                    <Route path="/about" element={<h1>About</h1>}/>
                    <Route path="/about" element={<h1>About1</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Layout;
```

```jsx
// react-router 6.0版本使用Routes 取代 Switch
import React, {Component} from 'react';
import Nav from "./Nav"
import {Routes, Route, Switch} from "react-router-dom"

class Layout extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Routes>
                    <Route path="/home" element={<h1>Home</h1>}/>
                    <Route path="/about" element={<h1>About</h1>}/>
                    <Route path="/about" element={<h1>About1</h1>}/>
                </Routes>
            </div>
        );
    }
}

export default Layout;
```

- **8.解决多级路径刷新页面样式丢失问题**
-
    - ***1.public/index.html 中 引入样式时不写 ./ 写 / 即可解决（常用）***
        - \<link href="/css/index.css"/>
    - ***2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% 即可解决（常用 只适用于React脚手架搭建的项目）***
        - \<link href="%PUBLIC_URL%/css/index.css"/>
    - ***3.使用HashRouter 路由模式 即可解决（浏览器默认hash路由 # 后面的路径忽略，不作为请求路径）***

```text
 <HashRouter>
    <Routes>
      <Route path="/home" element={<h1>Home</h1>}
      <Route path="/about" element={<h1>About</h1>}
    </Routes>
</HashRouter>
```

- **9.路由的严格匹配与模糊匹配**
-
    - ***1.默认使用模糊匹配（【输入的路径】必须包含要【匹配的路径】，且顺序要一致）***
    - \<MyNavLink to="/home/a/b">home\</MyNavLink>
    - \<Route path="/home" component={About} />
    - ***2.开启严格匹配（开启严格匹配后，使用路由路径必须一模一样，否则匹配不到）：***
    - \<MyNavLink to="/home" end>home\</MyNavLink>
    - \<Route exact path="/home" component={About} />
    - ***3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由***

- **10.Redirect 的使用**
-
    - ***1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由***
    - ***2.具体编码：***

```text
<Switch>
    <Route path="/about" component={About} />
    <Route path="/home" component={Home} />
    <Redirect to="/about" />
</Switch>
```

- **11.嵌套路由**
-
    - ***1.注册子路由时要写上父路由的path值***
    - 一级路由\<Route path="/about" component={About} />
    - 二级路由\<Route path="/about/team" component={Team} />
    - ***2.路由的匹配是按照注册路由的顺序进行的 ，开启严格匹配，点击二级路由将无法将无法匹配上级路由，导致匹配失败不展示***
    - 一级路由\<Route path="/about" component={About} />
    - 二级路由\<Route path="/about/team" component={Team} />
    - ***3.路由的严格匹配与模糊匹配***
    - 一级导航\<MyNavLink to="/about">about\</MyNavLink>
    - 一级路由\<Route path="/about" component={About} />
    - 二级导航\<MyNavLink to="/about/team">team\</MyNavLink>
    - 二级路由\<Route path="/about/team" component={Team} />

- **12.向路由组件传递参数**
-
    - ***1.params参数***
    - 路由链接（携带参数）：\<MyNavLink to="/home/message/detail/**001**">message detail\</MyNavLink>
    - 注册路由（声明接收）：\<Route path="/home/message/detail/**:id**" component={Detail} />
    - 接收参数 ：Detail组件中通过const{id} = this.props.match.params获取

    - ***2.search参数***
    - 路由链接（携带参数）：\<MyNavLink to="/home/message/detail?***id=002***">message detail\</MyNavLink>
    - 注册路由（无需声明，正常注册即可）：\<Route path="/home/message/detail" component={Detail} />
    - 接收参数 ：Detail组件中通过const{search} = this.props.location获取
    - 备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

```js
import qs from 'querystring'

const {search} = this.props.location
const {id} = qs.parse(search.slice(1))
```

    - ***3.state参数***

```text
   路由链接（携带参数）： <MyNavLink to={{path:'/home/message/detail',state:{id:'001'}}}>message detail</MyNavLink>
   注册路由（无需声明，正常注册即可）：<Route path="/home/message/detail" component={Detail} />
   接收参数 ：Detail组件中通过 const{ id } = this.props.location.state获取
   备注：刷新也可以保留住参数
```

- **13.push与replace**
-
    - push：压栈模式，**触发路由组件的重新渲染**
    - replace：替换模式，**不会触发路由组件的重新渲染**

- **14.编程式路由导航**
-
    - 借助this.props.history对象上的API对操作(只有路由组件才能使用，非路由组件借助withRouter方法)
    - 具体方法：
    - this.props.history.push() // 跳转到指定页面，并想历史记录中添加一个记录
    - this.props.history.replace() // 跳转到指定页面，**替换掉当前history记录**
    - this.props.history.goBack() // 回退到上一个页面
    - this.props.history.goForward() // 前进到下一个页面
    - this.props.history.go() // 参数为数字，表示前进或后退多少步，参数为负数表示后退多少步

```jsx
//   编程式导航 + params
<button onClick={() => this.props.history.push('/home/message/detail/002')}>push</button>
<button onClick={() => this.props.history.replace('/home/message/detail/002')}>replace</button>
//   编程式导航 + search
<button onClick={() => this.props.history.push('/home/message/detail?id=003')}>push</button>
<button onClick={() => this.props.history.replace('/home/message/detail?id=003')}>replace</button>
//   编程式导航 + state
<button onClick={() => this.props.history.push('/home/message/detail', {id: '004'})}>push</button>
<button onClick={() => this.props.history.replace('/home/message/detail', {id: '004'})}>replace</button>
//   编程式导航 前进
<button onClick={() => this.props.history.go(1)}>前进</button>
<button onClick={() => this.props.history.goForward()}>前进</button>

//   编程式导航 后退
<button onClick={() => this.props.history.go(-1)}>后退</button>
<button onClick={() => this.props.history.goBack()}>后退</button>

```

- **15.withRouter 的使用**
- withRouter 是一个 HOC，它可以让一般组件具有路由组件所具有的 props，如 history、location 和 match
- withRouter 的作用就是包装一般组件，将路由组件所具有的三个属性（history、location 和 match）传入一般组件中
- withRouter 的返回值是一个新组件

```jsx
import {withRouter} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>我是头部</h1>
                <a href="https://www.baidu.com">百度</a>
            </div>
        )
    }
}

export default withRouter(Header)   
```

- **16.BrowserRouter 与 HashRouter 的区别**
- ***1.底层原理不一样***
-
    - BrowserRouter 使用的是 H5 提供的 history API，不兼容 IE9 及以下版本。
    - HashRouter 使用的是 URL 中的 哈希值。
- **2.url 表现形式不一样**
-
    - BrowserRouter 的路径中没有 #，例如：localhost:3000/demo/test
    - HashRouter 的路径包含 #，例如：localhost:3000/#/demo/test
- **3.刷新后对路由 state 参数的影响**
-
    - BrowserRouter 没有任何影响，因为 state 保存在 history 对象中。
    - HashRouter 刷新后会导致路由 state 参数的丢失！！！
- **4.备注**
-
    - HashRouter 可以用于解决一些路径错误相关的问题。

### 23、antd的按需引入 + 自定义主题

- **1.安装依赖**

```bash
npm i react-app-rewired customize-cra babel-plugin-import less less-loader -D
```

- **2.修改 package.json**

```json lines
{
  //...
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
  //...
}
```

- **3.根目录下创建 config-overrides.js**

```js
// 配置具体的修改规则
const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    // 按需加载样式
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    // 也可以自定义主题
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {'@primary-color': '#1DA57A'},
        }
    }),
);
```

- **4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css' 应该删掉**

### 24、Redux

#### 1.学习文档

- [Redux 中文文档](https://www.redux.org.cn/)

#### 1.Redux是什么

- 1.redux 是一个专门用于做状态管理的JS库（不是react插件库）
- 2.它可以用在react, angular, vue等项目中，但基本与react配合使用
- 3.作用：集中式管理react应用中多个组件共享的状态

#### 2.什么情况下需要使用Redux

- 1.某个组件的状态，需要让其他组件可以随时拿到（共享）
- 2.一个组件需要改变全局状态（唯一改变状态的方式）
- 3.一个组件需要改变另一个组件的状态
- 4.总体原则：能不用就不用，如果不用比较吃力才考虑使用

#### 3.Redux工作流程

<img src="/web/redux.png">

#### 4.Redux的三大核心概念

- **1.Action：**
- 1.动作对象
- 2.包含2个属性
    - 1.type：标识属性，值为字符串，唯一，必要属性
    - 2.data：数据属性，值类型任意，可选属性
- 3.例子：{type:'ADD_STUDENT',data:{name:'tom',age:18}}

- **2.Reducer：**
- 1.用于初始化状态、加工状态
- 2.加工时，根据旧的state和action，产生新的state的纯函数

- **3.Store：**
- 1.将state,action,reducer联系在一起的对象
- 2.如何得到此对象?
    - 1.import {createStore} from 'redux'
    - 2.import reducer from './reducers'
    - 3.const store = createStore(reducer)

- 3.此对象的功能?
    - 1.getState():得到state
    - 2.dispatch(action):分发action,触发reducer调用,产生新的state
    - 3.subscribe(listener):注册监听,当产生了新的state时,自动调用

#### 5.基本使用

- **1.安装：**

```bash
redux 核心库
npm install --save redux
redux 开启异步任务库
npm install --save redux-thunk
```

- **2.创建reducer：**

```js
/**
 * 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数。
 * reducer有两个作用：初始化状态，加工状态
 * reducer被第一次调用时，是store自动触发的，
 *        传递的 preState 是undefined
 *        传递的 action 是 {type:'@@REDUX/INIT_a.2.0'}
 * 该函数会接到两个参数，分别为：之前的状态（preState）和动作对象（action）
 * 动作对象中包含type（动作的类型）和data（动作的数据）
 * */
// 初始化状态
const initState = 0;
export default function countReducer(preState = initState, action) {
    // 从action对象中获取type和data
    const {type, data} = action;
    // 判断type的值，如果是加，则返回数字+1
    switch (type) {
        case 'increment':
            console.log('increment', preState)
            return preState * 1 + data * 1;
        case 'subtract':
            return preState - data;
        default:
            return preState;
    }
}
```

- **3.创建action.js**

```js
/**
 * 该文件专门为Count组件生成action对象
 * */
// 引入常量
import {INCREMENT, DECREMENT} from './constant'
// 同步action,就是指action的值为Object类型d的一般对象
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})
// 异步action,就是指action的值为函数，异步action中一般都会调用同步action，
// 备注：异步action不是必须要用的,完全可以自己等待异步任务的结果，再去分发同步action。
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        // 异步操作
        setTimeout(() => {
            // 调用同步action
            dispatch(createIncrementAction(data))
        }, time)
    }
}
```

- **4.创建constant.js**

```js
/**
 * 该模块是用于定义action的type常量，目的只有一个
 * 方便管理，防止写错
 * */
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
```

- **3.创建store：**

```js
/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 * */
// 引入createStore,专门用来创建redux中最为核心的store对象
import {createStore} from "redux"
// 旧版引入redux-thunk，用于支持异步action
// import thunk from "redux-thunk"
// 新版引入方式
import {thunk} from "redux-thunk"
// 引入为count组件服务的reducer
import countReducer from "./count_reducer"
// 记得要暴露store对象 （使用中间件applyMiddleware注入redux-thunk 用于redux支持返回值为函数的调用）
export default createStore(countReducer, applyMiddleware(thunk))
```

- **4.在组件中使用store：**

```jsx
// 引入store
import store from './redux/store'
// 引入redux中提供的专门用于操作状态的action
import {createIncrementAction, createIncrementAsyncAction} from "./redux/count_action"

// 组件中使用store
class Count extends Component {

    // 加1按钮的回调
    increment = () => {
        const {value} = this.selectNumber;
        // 通知store 去修改数据
        store.dispatch(createIncrementAction(value * 1));
    }
    // 减1按钮的回调
    subtract = () => {
        const {value} = this.selectNumber;
        // 通知store 去修改数据
        store.dispatch({type: 'subtract', data: value * 1});
    }
    incrementAsync = () => {
        const {value} = this.selectNumber;
        store.dispatch(createIncrementAsyncAction(value * 1, 500));
    }

    render() {
        const {history, store} = this.props;
        // 获取store中的数据
        const {count} = store.getState();
        return (
            <div>
                <h1>当前求和为：{count}</h1>
                <button onClick={e => this.increment(e)}>+1</button>
                <button onClick={e => this.subtract(e)}>-1</button>
                <button onClick={this.incrementAsync}>异步+1</button>
            </div>
        )
    }
}
```

- **5.全局检测store状态改变，触发页面更新渲染：**

```js
// 在src/index.js
/**
 * 在index.js中检测store状态的改变，一旦发生改变，重新渲染页面 <App />
 * 备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写
 * */
import store from './redux/store'

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// 检测store状态的改变
store.subscribe(() => {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
})
```

### 25、React-Redux

<img src="/web/react-redux.png">

#### 2.React-Redux的基本使用

```text
1.明确两个概念：
    1.UI组件：不能使用任何redux的api，只负责页面的呈现、交互等。
    2.容器组件：负责和redux通信，将结果交给UI组件。
2.如何创建一个容器组件————靠react-redux的connect函数
    connect(mapStateToProps,mapDispatchToProps)(UI组件)
    - mapStateToProps：映射状态，返回值是一个对象
    - mapDispatchToProps：映射操作状态的方法，返回值是一个对象
3.备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
4.备注2：mapDispatchToProps也可以是一个对象
```

- **1.安装：**

```bash
npm install react-redux --save
```

- **2.创建
    - 容器组件：
    ```js
  // 引入react-redux
    import {connect} from 'react-redux'
  // 引入action_creators
    import {addGUN,removeGUN} from '../redux/action_creators'
  // 引入UI组件
    import CountUI from '../components/Count'
    // 映射状态回调 state => props
    const mapStateToProps = (state) => {
    // 返回映射状态
        return {num:state}
    }
    // 映射操作状态的方法回调 dispatch => props
    const mapDispatchToProps = (dispatch) => { 
        return {
             // 操作状态的方法
            addGUN:() => dispatch(addGUN()),
            removeGUN:() => dispatch(removeGUN())
        }
    }
    // connect函数调用，将容器组件和UI组件进行连接
    export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
  
  // mapDispatchToProps 简写对象形式
    export default connect(
      mapStateToProps,
      {
      addGUN:addGUN,
      removeGUN:removeGUN
      }
        )(CountUI)
    ```
    - UI组件：
    ```js
  // 组件中不能包含任何redux的api，只负责页面的呈现、交互等。
    import React, { Component } from 'react'
    
    class Count extends Component {
        render() { 
            return (
                <div>
                    <h1>{this.props.num}</h1>
                    <button onClick={this.props.addGUN}>+</button>
                    <button onClick={this.props.removeGUN}>-</button>
                </div>
            )
        }
    }
  ```
    - 使用容器组件
  ```jsx
  // 引入容器组件
    import Count from './Count'
    import store from "./redux/store"
    // 渲染容器组件
    class A extends Component { 
            render() { 
                return (
                    <div>
                        {/* 容器组件使用store*/}
                        <Count store={store}/>
                    </div>
                )
            }
        }
    export default A
  ```

#### 3.react-redux 优化

- 1.容器组件和UI组件整合成一个文件
- 2.无需自己给容器传递store，给\<App/>包裹一个\<Provider store={store}>即可。
  ```jsx
  import { Provider } from 'react-redux'
  
  ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'))
  ```
- 3.使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
  ```jsx
  // 不用再写这样方式检测状态改变 更新视图 
  import store from './redux/store'
  
  store.subscribe(() => {
  ReactDOM.render(
  /* 此处需要用Provider包裹App组件，目的是让App所有的后代容器组件都能接收到store */
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'))
  })
  ```
- 4.mapDispatchToProps也可以简单的写成一个对象。
- 5.一个组件要和redux“打交道”要经过哪几步？
-
    - 1.定义好UI组件——不暴露
    - 2.引入connect生成一个容器组件，并暴露，写法如下：

```js
connect(
    state => ({key: value}), //映射状态
    {key: xxxxxAction} //映射操作状态的方法
)(UI组件)
```

    - 3.在UI组件中通过this.props.xxxxxxx读取和操作状态

```jsx
// 定义一个Count 容器组件和UI组件整合成一个文件 (一般这种文件放在containers文件夹中  container/Count)
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addGUN, removeGUN} from './redux/action'

// Count的UI组件
class Count extends Component {
    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.sum}</h1>
                <button onClick={this.props.addGUN}>+</button>
                <button onClick={this.props.removeGUN}>-</button>
            </div>
        )
    }
}

// 把Count组件和redux中的状态连接起来
// 1.connect()() 返回的是一个容器组件
// 2.容器组件包裹UI组件
export default connect(
    state => ({sum: state}), //映射状态
    {addGUN, removeGUN} //映射操作状态的方法
)(Count)
```

#### 4.react-redux数据共享

- 1.定义一个Person组件，和Count组件通过Redux共享数据
- 2.为Person组件编写：reducer、action，配置constant常量

```js
// reducer
import {ADD_PERSON} from "../constant"

const initState = [
    {
        id: '001',
        name: '张三',
        age: 18
    }
]
export default function PersonReducer(preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState;
    }


}
```

```js
// action
import {ADD_PERSON} from "../constant"

export const createAddPersonAction = (person) => ({
    type: ADD_PERSON,
    data: person
})
```

```js
// constant
export const ADD_PERSON = 'add_person'
```

- 3.重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，合并后的总reducer才能被store使用

```js
// store
/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 * */
// 引入createStore,专门用来创建redux中最为核心的store对象
import {legacy_createStore as createStore, applyMiddleware, combineReducers} from "redux"
// 引入redux-thunk，用于支持异步action
import {thunk} from "redux-thunk"
// 引入为count组件服务的reducer
import countReducer from "./reducers/count"
// 引入为person组件服务的reducer
import personReducer from "./reducers/person"
// 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    count: countReducer,
    personList: personReducer
})
export default createStore(allReducer, applyMiddleware(thunk))
```

- 4.交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”

```js
import React, {Component} from 'react';
import {nanoid} from "nanoid"
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {
    getPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const person = {
            name,
            age,
            id: nanoid()
        }
        this.props.addPerson(person)
        this.nameNode.value = ''
        this.ageNode.value = ''
        console.log(person)
    }

    render() {
        const {personList, count} = this.props
        return (
            <div>
                <h1>人员列表{count}</h1>
                <h1>我是Person组件</h1>
                <input ref={c => this.nameNode = c} placeholder="请输入名字"/>
                <input ref={c => this.ageNode = c} placeholder="请输入年龄"/>
                <button onClick={this.getPerson}>添加</button>
                <ul>
                    {
                        personList.map(person => {
                            return <li key={person.id}>{person.name}-----{person.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}


export default connect(
    state => ({
        // "personList"是组件中props的属性名  ，state.personList 对应reducers中personList的值（即：汇总reducers时对象内的属性名）
        personList: state.personList,
        // 在Person组件中共享count 数据
        count: state.count
    }),

    {addPerson: createAddPersonAction}
)(Person)
```

#### 5.纯函数

```text
1. 一类特别的函数：只要是同样的输入（实参），必定得到同样的输出（返回值）。
2. 必须遵守以下一些约束：
    - 不得改写参数数据；
    - 不能调用系统IO等外部接口（不会产生任何副作用，例如：网络请求，输入h和输出设备）；
    - 不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果。
3.react的redux函数必须是纯函数
```

#### 6.redux开发者工具的使用

- 1.浏览器安装插件 [Redux DevTools](https://blog.loverzz.cn/web/reduxdevtools-3.1.6.xpi)
- 2.下载完成后，点击chrome右上角的插件图标，选择加载已解压的扩展程序，选择redux-devtools文件夹(解压后的文件)
- 3.项目中安装 redux-devtools-extension

```bash
npm install --save-dev redux-devtools-extension
```

```javascript
// store.js文件使用
import {composeWithDevTools} from 'redux-devtools-extension'

// 创建store
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
```

#### 7.react-redux书写优化

- 1.所有变量名字要规范，尽量触发对象的简写形式
- 2.reducers文件夹中，编写index.js文件专门用于汇总并暴露所有的reducer

### 26、扩展

#### 1.setState

- **setState更新状态的2种写法**

```text
1. setState(stateChange, [callback])------对象式的setState
    1.stateChange为状态改变对象(该对象可以体现出状态的更改)
    2.callback是可选的回调函数，它在状态更新完毕、界面也更新后(render调用后)才被调用
2. setState(updater, [callback])------函数式的setState
    1.updater为返回stateChange对象的函数。
    2.updater可以接收到state和props。
    3.callback是可选的回调函数，它在状态更新、界面也更新后(render调用后)才被调用。
    
```

- **总结：**
    - 1.对象式的setState是函数式的setState的简写方式(语法糖)
    - 2.使用原则：
    -
        - 1.如果新状态不依赖于原状态 ===> 使用对象方式
        - 2.如果新状态依赖于原状态 ===> 使用函数方式
        - 3.如果需要在setState()执行后获取最新的状态数据，要在第二个callback函数中读取

#### 2.lazyLoad

- **路由组件的lazyLoad**

```text
// 1.通过React.lazy()函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const Login = lazy(() => import('@/pages/Login'))

// 2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
<Suspense fallback={<h1>loading.....</h1>}>
    <Switch>
        <Route path="/xxx" component={Xxxx}/>
        <Redirect to="/login"/>
    </Switch>
</Suspense>
```

#### 3.hooks

- **1.React Hook/Hooks是什么？**

```text
    (1). Hook是React 16.8.0版本增加的新特性/新语法
    (2). 可以让你在函数组件中使用 state 以及其他的 React 特性
```

- **2.三个常用的Hook**

```text
    (1). State Hook: React.useState()
    (2). Effect Hook: React.useEffect()
    (3). Ref Hook: React.useRef()
```

- **3.State Hook**

```text
    (1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
    (2). 语法: const [xxx, setXxx] = React.useState(initValue)
    (3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第一个为内部当前状态值, 第二个为更新状态值的函数
    (4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

- **4.Effect Hook**

```text
    (1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
    (2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
    (3). 语法和说明:
    // 使用Effect Hook来指定副作用操作
        useEffect(didEffect, [])
        // 具体使用
        useEffect(()=>{
        // 在此可以执行任何带副作用操作
        .........
        return ()=>{
            // 在组件卸载前执行 类似于 componentWillUnmount
            // 做一些收尾工作, 比如清除定时器/取消订阅等
            .......
         }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
        参数:
            1. didUpdate: 副作用操作
            2. []: 依赖项数组, 用于控制side effect的执行，
                    不写[],默认监测所有状态变化类似于 componentDidUpdate，
                    写空[],默认初始化调用一次,状态改变不在调用相当于 用于代替componentDidMount ，
                    写[count]，表示只监测count状态变化
        说明:
            1. useEffect()用于代替componentDidMount(), componentDidUpdate()
            2. 可以把 useEffect() 看做如下三个函数的组合
                componentDidMount()
                componentDidUpdate()    
                componentWillUnmount()
```

- **5.Ref Hook**

```text
    (1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其他数据
    (2). 语法:
        const refContainer = useRef();
    (3). 作用:保存标签对象,功能与React.createRef()一样
```

#### 4.Fragment

```text
使用：只接收一个key属性 <Fragment key={xxx}>，不是遍历key可以不写
 
    <Fragment>
        <ChildA/>
        <ChildB/>
    </Fragment>
    <>
    <ChildA/>
    <ChildB/>
    </>

作用：
    可以不用必须的有一个真实的DOM根标签了
```

#### 5.Context

```text
理解：
    (1). 一种组件间通信的方式, 常用于【祖组件】与【后代组件】间通信
使用：
    (1). 创建Context容器对象：
        const XxxContext = React.createContext();

    (2). 渲染子组时，外面包裹xxxContext.Provider, 
        通过value属性给后代组件传递数据：
            <xxxContext.Provider value={数据}>
                子组件
            </xxxContext.Provider>

    (3). 后代组件读取数据：
        //第一种方式:仅适用于类组件
        static contextType = xxxContext;  // 声明接收context
        this.context // 读取context中的value值

        //第二种方式: 函数组件与类组件中都可以读取context
        <xxxContext.Consumer>
            {
                value => ( // value就是context中的value值
                    要显示的内容
                )
            }
        </xxxContext.Consumer>
        
注意：
    在应用开发中一般不用context, 一般都用它的封装react插件（react-redux)
```

#### 6.组件优化
-

- ***1.Component的2个问题***

```text
    (1). 只要执行setState(),即使不改变状态数据, 组件也会重新render()
    (2). 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据
```

- ***2.效率高的做法***

```text
只有当组件的state或props数据发生改变时才重新render()
```

- ***3.原因***

```text
Component中的shouldComponentUpdate()总是返回true
```

- ***4.解决***

```text
办法1: 
    重写shouldComponentUpdate()方法.
    比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false.
办法2:
    使用PureComponent代替Component
    PureComponent重写了shouldComponentUpdate(),
    只有state或props数据有变化才返回true.
    注意:
        只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了,返回false.
        不要直接修改state数据, 而是要产生新的数据（存储地址不能相同，不然无法浅比较）.
项目中一般使用PureComponent来优化。
``` 

#### 7.render props
-

- ***1.如何向组件内部动态传入带内容的结构（标签）***

```text
Vue中：
    使用slot技术，也就是通过组件标签体传入结构，<A><B /></A>
React中:
    使用children props: 通过组件标签体传入结构，<A>{this.props.children}</A>
    使用render props: 通过组件标签属性传入结构，而且可以携带数据，一般用render函数属性
        <A render={(data) => {return <div>{data}</div>}}></A>
``` 

- ***2.children props***

```text
    <A>
        <B>xxxxx</B>
    </A>
    { this.props.children }
    问题: 如果B组件需要向A组件传入数据，则A组件需要知道B组件的内部细节（state, props...）
```

- ***3.render props***

```text
    <A render={(data) => {return <C data={data}></C>}}></A>
    A组件： { this.props.render(内部state数据) }
    C组件： 读取A组件传入的数据显示, {this.props.data}
```

#### 8.错误边界
- 

- ***1.理解***

```text
    错误边界（Error boundary）：用来捕获后代组件错误，渲染出备用页面
```

- ***2.特点***
- 只能捕获***后代组件生命周期产生的错误***，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误


- ***3.使用方式***
- getDerivedStateFromError配合componentDidCatch

```text
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回值会合并到state中
    return { hasError: true };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```

```jsx
// 父组件
import React, {Component} from 'react';
import CompChild from "./CompChild";

class BoundaryDemo extends Component {
    // 当Parent组件的子组件抛出错误时，会触发getDerivedStateFromError调用，并携带错误信息
    // 该方法接收抛出的错误作为参数，并返回一个对象来更新state
    state = {
        hasError: ''
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        console.log(error)
        return {hasError: error};
    }

    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        console.log('日志上报给服务器:', error, errorInfo);
    }

    render() {
        return (
            <div>
                <h3>父组件</h3>
                {this.state.hasError ? <div>当前网络不稳定，稍后重试</div> : <CompChild/>}
            </div>
        );
    }
}

export default BoundaryDemo;
```

```jsx
// 子组件
import React, {Component} from 'react';

class CompChild extends Component {
    state = {
        // users:[
        //     {id:'001',name:'张三',age:20},
        //     {id:'002',name:'李四',age:21},
        //     {id:'003',name:'王五',age:22}
        // ]
        users: 'adc'
    }

    render() {
        return (
            <div>
                {this.state.users.map(item => {
                    return <div key={item.id}>{item.name}---{item.age}</div>
                })}
            </div>
        );
    }
}

export default CompChild;
```

#### 9.组件通信方式总结

- **组件间的关系**
    - 父子组件
    - 兄弟组件（非嵌套组件）
    - 祖孙组件（跨级组件）
- **几种通信方式**

```text
    （1）props：
        (1) children props
        (2) render props
    （2）消息订阅与发布模式：pubs-sub、event等等
    （3）集中式管理：redux、dva等等
    （4）conText：生产者/消费者
```

- **比较好的搭配方式**

```text
    父子组件：props
    兄弟组件：消息订阅-发布，集中式g管理
    祖孙组件（跨级组件）：消息订阅与发布模式、集中式管理、conText（开发用的少，封装插件用的多）
```

### 27、React Router 6

#### 1.概述

- **1.React Router以三个不同的包发布到npm上，它们分别为：**

```text
1.react-router:路由的核心库，提供了很多的：组件、钩子。
2.react-router-dom:包含react-router的所有内容，并添加了一些专门用于DOM的组件，例如<BrowserRouter>、<HashRouter>等。
3.react-router-native:包含react-router的所有内容，并添加了一些专门用于React Native的API，例如<NativeRouter>等。
```

- **2.与React Router 5.x版本相比，改变了什么？**

```text
1.内置组件的变化：移除 <Switch/>,新增 <Routes/>等。
2.语法的变化：component={About} 变为 element={<About/>}等。
3.新增多个hook:
    useParams()、useNavigate()、useLocation()、useMatch()等。
4.官方明确推荐函数式组件了！
...
```

#### 2.Component

- **1.\<BrowserRouter>**
    - 1.说明：\<BrowserRouter>用于包裹整个应用
    - 2.示例代码：

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
// createRoot(container!) if you use TypeScript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        // 整体结构（通常为App组件）
        <App/>
    </BrowserRouter>
)
```

- **2.\<HashRouter>**
    - 1.说明：作用与\<BrowserRouter>一样，但\<HashRouter>修改的是URL的哈希值
    - 备注：6.x版本中\<HashRouter>、\<BrowserRouter>的用法与5.x相同。

- **3.\<Routes>与\<Route>**
    - 1.v6版本中，移除了Switch组件，新增了Routes组件，并且Route组件也发生了变化。
    - 2.\<Routes>和\<Route>要配合使用，且必须要用\<Routes>包裹\<Route>。
    - 3.\<Route>相当于一个if语句，如果其路径与当前URL匹配，则呈现其对应的组件。
    - 4.\<Route caseSensitive>属性用于指定：匹配时是否区分大小写（默认false)。
    - 5.当URL发生变化时，\<Routes>都会查看其所有子\<Route>，并呈现与当前URL匹配的第一个\<Route>。
    - 6.\<Route>也可以嵌套使用，且可配合useRoutes()配置“路由表”，但需要通过\<Route>组件来渲染其子路由。
    - 7.示例代码：
   ```text
    <Routes>
        // path属性用于定义路径，element属性用于定义当前路径所对应的组件
        <Route path="/login" element={<Login/>}/>
        // 用于定义嵌套路由，home是一级路由，对应的路径/home
        <Route path="/home" element={<Home/>}>
            // test1 和 test2 是二级路由，对应的路径分别是/home/test1 和 /home/test2
            <Route path="test1" element={<Test1/>}/>
            <Route path="test2" element={<Test2/>}/>
        </Route>
    </Routes>
    ```

- **4.\<Link>**
    - 1.作用：修改URL，且不发送网络请求（路由链接）。
    - 2.注意：外侧需要用\<BrowserRouter>或\<HashRouter>包裹。
    - 3.示例代码：
    ```jsx
        import {Link} from 'react-router-dom'
        function Test(){
            return(<div>
                <Link to="/路径">按钮</Link>
            </div>)
        }
    ```

- **5.\<NavLink>**
    - 1.作用：与\<Link>组件类似，且可实现导航高亮效果。
    - 2.示例代码：
    ```text
     // 注意：NavLink 默认类名是active，下面是指定自定义的class
     // 自定义样式
        <NavLink to="/home" className={({isActive}) => isActive ? 'base 自定义类名' : 'base'}>
            按钮
        </NavLink>
    // 默认情况下，当Home的子组件匹配成功，Home的导航也会高亮，当NavLink上添加了end属性后，若Home的子组件匹配成功，Home的导航不会高亮
        <NavLink to="/home" end>
            按钮
        </NavLink>
    ```

- **6.\<Navigate>**
    - 1.作用：只要\<Navigate>组件被渲染，就会修改路径，切换视图。
    - 2.replace属性用于控制跳转模式（push或replace,默认为push）。
    - 3.示例代码：
  ```jsx
  import React,{useState} from 'react'
  import {Navigate} from 'react-router-dom'
  export default function Home(){
  const [sum,setSum] = useState(1)
  return(<div>
  <h2>Home组件</h2>
  {/*        根据sum的值决定是否切换视图*/}
  {sum === 1 ? <h4>sum的值为{sum}</h4> : <Navigate replace to="/about"/>}
  <button onClick={() => setSum(2)} >修改sum的值为2</button>
  </div>)
  }
  ```

- **7.\<Outlet>**
    - 1.当\<Route>产生嵌套时，\<Outlet>用于渲染子路由的视图。
    - 2.示例代码：
    ```js
    // 根据路由表生成对应的路由规则
    const element = useRoutes([
        {
            path: '/about',
            element: <About/>
        },
         {
            path: '/home',
            element: <Home/>,
            children:[
                    {
                    path: 'news',
                    element: <News/>
                    },
                    {
                    path: 'message',
                    element: <Message/>
                    }
                ]
        },
        {
            path: '/',
            element: <Navigate to="/home"/>
        }
    ])
    ```
    ```jsx
        // Home.jsx
        import React from "react";
        import {NavLink, Outlet } from "react-router-dom";
        
        export default function Home() {
          return (
            <div>
              <h2>Home组件</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item" to="/home/news">
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="list-group-item" to="/home/message">
                      Message
                    </NavLink>
                  </li>
                </ul>
                <div>
                  <Outlet />
                </div>
              </div>
            </div>
          );
        }
    ```

#### 3.Hooks

- **1.useRoutes**
    - 作用：根据路由表，动态创建\<Routes>和\<Route>。
    - 示例代码：

      ```jsx
      // 路由表配置：src/routes/index.js
      import About from '../pages/About'
      import Home from '../pages/Home'
      import {Navigate} from"react-router-dom";
      
      export default[
          {
              path:'/about',
              element:<About/>
          },
          {
              path:'/home',
              element:<Home/>
          },
          {
              path:'/',
              element:<Navigate to="/home"/>
          }
      ]
      ```

      ```jsx
      // 在App.jsx中使用路由规则
      import { useRoutes } from 'react-router-dom';
      import routes from './routes';
      
      function App() {
          const element = useRoutes(routes);
          return (
            <div className="App">
              {element}
            </div>
          );
        }
      ```

- **2.useNavigate**
    - 作用：用于访问路由器，可以用来实现路由的跳转。
    - 示例代码：

        ```jsx
        import React from"react";
        import { useNavigate } from 'react-router-dom';
      
        function About() { 
        const navigate = useNavigate();
        const handle=()=>{
          // 第一种使用方式：指定具体的路径
          navigate('/login',{
          replace:false,
          state:{a:1,b:2}
          });
        // 第二种使用方式：传入数值进行前进和后退，类似于5.x中的history.go()方法
         navigate(1);
        }
  
          return (
            <div>
              <button onClick={handle}>跳转到login</button>
            </div>
          );
        }    
        ```

- **3.useParams**
    - 作用：返回当前匹配路由的params参数，类似于5.x中的match.params。
    - 示例代码：

        ```jsx
        import React from"react";
        import { useParams } from 'react-router-dom';
        
        export default function Detail() { 
          // 获取URL中携带的params参数
          const {id} = useParams();
          return (
            <div>
              <h2>Detail</h2>
              <p>{id}</p>
            </div>
          );
        }
        ```
      ```jsx
      import React from"react";
      import { Routes,Route } from 'react-router-dom';
      import Detail from './Detail';
      export default function App (){
          return (
            <div>
              <Routes>
      {/*定义params动态参数（占位）*/}
                <Route path="/detail/:id" element={<Detail/>}/>
              </Routes>
            </div>)
      }
      ```


- **4.useSearchParams**
    - 作用：用于读取和修改当前位置的URL中的查询参数。
    - 返回一个包含两个值的数组，内容分别为：当前的search参数，更新search参数的函数。
    - 示例代码：

        ```jsx
        import React from"react";
        import { useSearchParams } from 'react-router-dom';
        
        export default function Detail() { 
          // 获取URL中携带的params参数
          const [searchParams, setSearchParams] = useSearchParams();
          return (
            <div>
              <h2>Detail</h2>
      {/*获取属性值*/}
              <p>{searchParams.get('id')}</p>
      {/*修改search属性值*/}
              <button onClick={() => {
                  //第一种写法：字符串参数
                  setSearchParams('id=123&name=abc');
                   /*第二种写法： 对象参数*/
                   setSearchParams({id:123,name:'abc'});
              }}>修改id</button>
            </div>
          );
        }
        ```
- **5.useLocation**
    - 作用：返回当前的location对象，对比5.x中的路由组件的props.location属性。
    - 示例代码：

        ```jsx
        import React from"react";
        import { useLocation } from 'react-router-dom';
      
        export default function Detail() { 
          const location = useLocation();
          console.log(location);
          // 返回一个location 对象
              /*
              {
               hash:'',
               key:'ah9ncdff',
               pathname: "/detail",
               search:"?id=123&name=abc",
               state: {
               id: 123,
               name: 'abc'
               }
              }
               */
          return (
            <div>
              <h2>Detail</h2>
              <p>{location.pathname}</p>
            </div>
          );
        }
        ```

- **6.useMatch**
    - 作用：返回当前的match对象，对比5.x中的路由组件的props.match属性。
    - 示例代码：

      ```jsx
      import React from "react";
      import {useMatch} from 'react-router-dom';
      
      export default function Detail() {
          const match = useMatch('/detail/:id');
          console.log(match);
      // 返回一个match 对象
      /*
      {
        params:{id:123},
        path:'/detail/:id',
        url:'/detail/123',
        pattern:{
            path:'/detail/:id',
            caseSensitive:false,
            end:true
        }
      }
      */
      
          return (
            <div>
              <h2>Detail</h2>
            </div>)
      }
      ```
-  **7.useInRouterContext**
  -   作用：如果组件在\<Router>的上下文中呈现，则返回true，否则返回为false(被\<BrowserRouter>或\<HashRouter>组件包裹返回为true)。

- **8.useNavigationType**
  - 作用：返回当前的导航类型(用户是如何来到当前页面的）。
  - 返回值：
    - POP：用户点击了浏览器后退按钮。
    - PUSH：用户点击了浏览器前进按钮。
    - REPLACE：用户点击了浏览器刷新按钮。
  - 备注：POP是指在浏览器中直接打开了这个路由组件（刷新页面）

- **9.useOutlet**
  - 作用：返回当前路由组件的子路由组件。
  - 示例代码：

    ```jsx
    import React from "react";
    import {useOutlet} from 'react-router-dom';
    
    export default function Detail() {
        const outlet = useOutlet();
    // console.log(outlet); 
    // 如果嵌套路由没有挂载，则 outlet 为 null
    // 如果嵌套路由挂载了，则 outlet 为 嵌套路由对象
        return (
          <div>
            <h2>Detail</h2>
            {outlet}
          </div>)
    }
    ```

- **10.useResolvedPath**
  - 作用：给定一个URL值，解析其中的：path、search、hash属性，并返回一个对象。
  - 示例代码：

    ```jsx
    import React from "react";
    import {useResolvedPath} from 'react-router-dom';
    
    export default function Detail() {
        const resolvedPath = useResolvedPath('/home/news');
        console.log(resolvedPath);
        /*
        {
            pathname: "/home/news",
            search: "",
            hash: "",
        }
        */
        return (
          <div>
            <h2>Detail</h2>
          </div>)
    }
    ```