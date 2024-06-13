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
    // 类添加属性
    static type = 'car';
    // 类添加方法
    static getType() {
        return 'car';
    }
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

#### 2.三大属性 -- props
##### 1. 理解
```text
1. 每个组件对象都会有props(properties的简写)属性

2. 组件标签的所有属性都保存在props中
```

- **1.props的基本使用**
```jsx
class MyComponent extends React.Component{
    render(){
        const {name,age,gender} = this.props;
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
ReactDOM.render(<MyComponent name="Tom" age={18} gender="male"/>,document.getElementById('example'));
```
- **2.批量传递props**
```jsx
class MyComponent extends React.Component{
    render(){
        //注意： props 是只读的 ，不允许修改
        // this.props.name = 'Jack'; // 此行代码会报错，因为props是只读的
        const {name,age,gender} = this.props;
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
    name:PropTypes.string.isRequired, // 限制name必传，且为字符串
    age:PropTypes.number, // 限制age为数值
    gender:PropTypes.string,// 限制gender为字符串
    speak:PropTypes.func, // 限制speak为函数
}
// 指定默认标签属性值（设置props默认值）
MyComponent.defaultProps = {
    age:18,
    gender:'male',
}

function speak(){
    console.log('speak');
}
const p = {name:"Tom",age:18,gender:"male",speak};
// {...p} 并非对象的扩展运算符（克隆对象），而是React提供的新属性，用于批量传递props
ReactDOM.render(<MyComponent {...p}/>,document.getElementById('example'));

```
```js
/*********** 回顾展开运算符的使用 ************/
let arr1=[1,3,5,7,9];
let arr2=[2,4,6,8,10];
console.log(...arr1); // 数组展开： 1 3 5 7 9
console.log([...arr1,...arr2]); //数组合并： [1,3,5,7,9,2,4,6,8,10]

// 在函数中使用
function sum(...numbers){ // ...numbers 表示将传入的参数以数组的形式接收
    return numbers.reduce((preValue,currentValue)=>{
        return preValue + currentValue;
    })
}
console.log(sum(1,2,3,4,5)); // 15

// 构造字面量对象时使用展开语法
let person = {name:"Tom",age:18};
let person2 = {...person}; // 克隆对象
console.log(...person) // 展开对象报错 TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function

// 对象合并 后面相同属性覆盖前面的
let person3 = {...person,name:"Jack",address:"No.1 Road"}
console.log(person3); // {name: "Jack", age: 18, address: "No.1 Road"}};
```

- **3.props的简写方式**
```jsx
// 通过类关键字 static 将 添加类的静态属性和方法放在类里面维护，结构更清晰
class MyComponent extends React.Component{
    // 对标签属性进行类型、必要性的限制（设置props属性的类型及必要性）
    static propTypes = { // PropTypes 来自 prop-types库
        name:PropTypes.string.isRequired, // 限制name必传，且为字符串
        age:PropTypes.number, // 限制age为数值
        gender:PropTypes.string,// 限制gender为字符串
        speak:PropTypes.func, // 限制speak为函数
    }
// 指定默认标签属性值（设置props默认值）
    static defaultProps = {
        age:18,
        gender:'male',
    }
    render(){
        const {name,age,gender} = this.props;
        return (
            <div>
                <h2>姓名：{name}</h2>
                <h2>年龄：{age}</h2>
                <h2>性别：{gender}</h2>
            </div>
        )
    }
}


function speak(){
    console.log('speak');
}
const p = {name:"Tom",age:18,gender:"male",speak};
ReactDOM.render(<MyComponent {...p}/>,document.getElementById('example'));
```

-  **4.类式组件中的构造器与props**
```jsx
class MyComponent extends React.Component{
    constructor(props) {
        // 构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
        // console.log(props);
        super(props);
       console.log('constructor',this.props); // 通过实例获取props
        console.log('constructor',props); // 通过接收参数获取props
    }
    static propTypes = { 
        name:PropTypes.string.isRequired, 
        age:PropTypes.number, 
        gender:PropTypes.string,
        speak:PropTypes.func, 
    }
    static defaultProps = {
        age:18,
        gender:'male',
    }
    render(){
        const {name,age,gender} = this.props;
        return (
            <div>
                <h2>姓名：{name}</h2>
                <h2>年龄：{age}</h2>
                <h2>性别：{gender}</h2>
            </div>
        )
    }
}

const p = {name:"Tom",age:18,gender:"male"};
ReactDOM.render(<MyComponent {...p}/>,document.getElementById('example'));
```

-  **5.函数组件使用props**
```jsx
// 创建函数式组件 只能使用props (在hooks函数没有诞生之前 state,refs不能用 )
function MyComponent(props) { 
    const {name,age,gender} = props;
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
    name:PropTypes.string.isRequired, 
    age:PropTypes.number, 
    gender:PropTypes.string,
    speak:PropTypes.func,
}

MyComponent.defaultProps = {
    age:18,
    gender:'male',
}
const p = {name:"Tom",age:18,gender:"male"};
ReactDOM.render(<MyComponent {...p}/>,document.getElementById('example'));
```

##### 2.作用
```text
1. 通过标签属性从组件外向组件内传递变化的数据

2.注意：组件内部不能修改props数据
```

##### 3.编码操作
-  **1.内部读取某个属性值**
```jsx
this.props.name
```

-  **2.对props中的属性值进行类型、必要性的限制**
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
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    speak:PropTypes.func,
}

// static propTypes = {
//     name:PropTypes.string.isRequired,
//     age:PropTypes.number,
//     speak:PropTypes.func,
// }
```

-  **3.指定默认标签属性值**
```jsx
MyComponent.defaultProps = {
    name:'老刘',
    age:18,
}
```

-  **4.通过标签属性传递函数类型的props给组件，并使用**
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

-  **1.字符串形式的refs**
```jsx
<input ref="input1"/>
```
-  **2.回调函数形式的refs**
```jsx
<input ref={(c) => {this.input1 = c; console.log(c)}}/>
```
-  **3.createRef()形式的refs**
```jsx
<input ref={this.myRef}/>
```

##### 3.案例
-  **1.字符串形式的refs**
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
-  **2.回调函数形式的refs**
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
                <input ref={(c) => {this.input1 = c; console.log(c)}} type="text" placeholder="点击按钮提示数据"/>&nbsp;
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

-  **3.createRef()形式的refs**
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

-  **1.通过onXxx属性指定事件处理函数（注意大小写）**

  -  **（a）React使用的是自定义（合成）事件，而不是使用的原生DOM事件 -- 为了更好的兼容性**

  -  **（b）React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）-- 为了高效**

  -  **2.通过event.target得到发生事件的DOM元素对象 -- 不要过度的使用Ref**

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
                <input  onBlur={this.showData2} type="text" placeholder="点击按钮提示数据"/>
            </div>
        )
    }
}
```

### 14.收集表单数据
#### 1.理解

-  **1.包含表单的组件分类：**

  -  **（1）受控组件**

  -    **表单项输入的数据，实时同步到state中**

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

  -  **（2）非受控组件**

  -    **表单项输入的数据，不会自动同步到state中**

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

  -  **（1）高阶函数**

  -    **如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。**

  -    **1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。**

  -    **2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。**

  -    **常见的高阶函数有：Promise、setTimeout、arr.map()等等**
```js
// 高阶函数
function fn(a, b, c) {
    return b();
}
fn(10, () => {alert(100)}, 20); // 100

```

  -  **（2）柯里化**

  -    **通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。**
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
        return (e)=>{
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
    saveFormData = (dataType,e) => {
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
                用户名：<input onChange={(event)=>this.saveFormData('username',event)} type="text" name="username"/>
                密码：<input onChange={(event)=>this.saveFormData('password',event)} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}
// 渲染组件到页面
ReactDOM.render(<Login/>, document.getElementById('test'))
```

### 16.组件的生命周期

-  **1.组件生命周期使用**
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
    componentWillMount(){
        console.log('componentWillMount');
    }
    // 组件挂载完毕
    componentDidMount(){
        this.timer = setInterval(() => {
            // 获取原来的状态
            let {opacity} = this.state
            opacity -= 0.1
            if(opacity <= 0){
                opacity = 1
            }
            // 更新状态
            this.setState({opacity})
        },200)
        console.log('componentDidMount');
    }
    // 控制组件更新的“阀门”
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
    }
    // 组件将要更新

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    // 组件更新完毕
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    // 组件将要卸载
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    
    // render 调用时机：
    // 1. 初始化渲染 2. 状态更新之后
    render(){
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
ReactDOM.render(<Life/>,document.getElementById('test'))
```
-   **2.生命周期(旧)**
-   ***初始化阶段：由ReactDOM.render()触发---初次渲染***
-    1.constructor() // 构造器
-    2.componentWillMount() // 即将挂载
-    3.render() // 渲染
-    4.componentDidMount() =====> 常用 // 挂载之后
        -   一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
-   ***更新阶段：由组件内部this.setSate()或父组件重新render触发***
-    1.shouldComponentUpdate() // 控制组件更新的“阀门”
-    2.componentWillUpdate() // 组件将要更新
-    3.render() =====> 必须使用的一个 // 渲染
-    4.componentDidUpdate() // 组件更新完毕
-   ***卸载组件：由ReactDOM.unmountComponentAtNode()触发***
-    1.componentWillUnmount() =====> 常用  // 组件将要卸载
        -   一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
- 
-  <img src="/web/react-life.png">

```jsx
/*********** 组件初始化创建生命周期的执行 到setState修改状态值 及 强制更新的生命周期 看上图流程************/
class Count extends React.Component{
    // 构造器
    constructor(props){
        console.log('Count---constructor');
        super(props)
        this.state = {count:0}
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
    add = ()=>{
        const {count} = this.state
        this.setState({count:count+1})
    }
    // 强制更新按钮的回调
    force = ()=>{
        this.forceUpdate()
    }
    render(){
        console.log('Count---render');
        const {count} = this.state
        return(
            <div>
                <h2>当前求和为：{count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
            </div>
        )
    }
}
ReactDOM.render(<Count count={100}/>,document.getElementById('test'))
```
```jsx
/*********** 父组件render触发子组件更新 ************/
class A extends React.Component{
    state={carName:'奔驰'}
    changeCar=()=>{
        this.setState({carName:'奥拓'})
    }
    render(){
        return(
            <div>
                <div>我是A组件</div>
                <button onClick={this.changeCar}>换车</button>
                <B carName={this.state.carName}/>
            </div>
        )
    }
}
class B extends React.Component{
    // 组件将要接收新的props（初始化第一次传递的props不会被调用）
    componentWillReceiveProps(props){
        console.log('B---componentWillReceiveProps',props);
    }
    // 组件是否应该更新
     shouldComponentUpdate(){
          console.log('B---shouldComponentUpdate');
          return true
     }
     // 组件将要更新
     componentWillUpdate(){
          console.log('B---componentWillUpdate');
     }
     // 组件更新完毕
     componentDidUpdate(){
          console.log('B---componentDidUpdate');
     }
    render(){
        return(
            <div>我是B组件，接收到的车是：{this.props.carName}</div>
        )
    }
}
ReactDOM.render(<A/>,document.getElementById('test'))
```

-  **3.生命周期（新）**
-  <img src="/web/react-life-new.png">
-   **4.生命周期的三个阶段（新）**
-   ***初始化阶段：由ReactDOM.render()触发---初次渲染***
-   1.constructor // 构造器
-   2.getDerivedStateFromProps // 
-   3.render // 
-   4.componentDidMount
-   ***更新阶段：由组件内部this.setSate()或父组件重新render触发***
-   1.getDerivedStateFromProps
-   2.shouldComponentUpdate
-   3.render
-   4.getSnapshotBeforeUpdate
-   5.componentDidUpdate
-   ***卸载组件：由ReactDOM.unmountComponentAtNode()触发***
-   1.componentWillUnmount

```jsx
// 创建组件
class Count extends React.Component{
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
     constructor(props){
         console.log('Count---constructor');
         super(props);
         // 初始化状态
         this.state = {count:0}
     }
     // 加1按钮的回调
     add = ()=>{
         // 获取原装态
         const {count} = this.state
          // 更新状态
         this.setState({count:count+1})
     }
     //  使用 static 注册事件 从props中衍生state 
     //  getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它
     //  应该返回一个对象来更新 state，如果返回 null 则不更新任何内容。
     //  如果返回是 porps 
     //  那么 state 将会被覆盖 触发setState方法 不会触发render方法
     static getDerivedStateFromProps(props,state){
         console.log('Count---getDerivedStateFromProps',props,state);
         return null
     }
     // 
     componentDidMount(){
         console.log('Count---componentDidMount');
     }
     
     shouldComponentUpdate(){
         console.log('Count---shouldComponentUpdate');
         return true
     }
     
     getSnapshotBeforeUpdate(){
         console.log('Count---getSnapshotBeforeUpdate');
         return 'hahha'
     }
     
     componentDidUpdate(preProps,preState,snapshotValue) {
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
ReactDOM.render(<Count/>,document.getElementById('test'))
```

```jsx
/*********** getSnapshotBeforeUpdate演示 **************/

class NewList extends React.Component{
    state={newArr:[]}
     
     componentDidMount(){
         setInterval(()=>{
             const {newArr} = this.state
           const news = "新闻" + (newArr.length + 1)
             this.setState({newArr:[news,...newArr]})
         },1000)
     }
     // 获取组件更新前的快照
     getSnapshotBeforeUpdate(oldProps, oldState) { // oldProps, oldState 表示更新前的props和state
         console.log('Count---getSnapshotBeforeUpdate');
         return  this.refs.list.scrollHeight;
     }
     // 更新完成后的操作
     // previousProps 表示更新前的props
     // previousState 表示更新前的state
     // snapshot 表示 getSnapshotBeforeUpdate 返回的快照值
     componentDidUpdate(previousProps, previousState, snapshot) {
        console.log('Count---componentDidUpdate', previousProps, previousState, snapshot);
// 获取现在的滚动高度 - 快照 就是 当前的滚动高度 - 更新前的快照
         this.refs.list.scrollTop += this.refs.list.scrollHeight - snapshot;}

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
ReactDOM.render(<NewList/>,document.getElementById('test'))
```

-  **4.重要的钩子**
  -  ***1.render 初始化渲染或更新渲染调用***
  -  ***2.componentDidMount：开启监听，发送ajax请求***
  -  ***3.componentWillUnmount：做一些收尾工作，如：清除定时器***

-  **5.即将废弃的钩子**
-   ***1.componentWillMount：组件挂载前调用***
-   ***2.componentWillReceiveProps：props发生变化时调用***
-   ***3.componentWillUpdate：更新渲染调用***
-   ***现在使用会出现警告，下个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用**

### 17.Diffing 算法

#### 1.验证Diffing算法
```jsx
// 只有span 里面的内容发生了改变 其他的节点都复用了 没有改变
class Time extends React.Component{
    state={date:new Date()}
     
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
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
ReactDOM.render(<Time/>,document.getElementById('test'))
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

class Person extends React.Component{

    state = {
        persons:[
            {id:'001',name:'小张',age:18},
            {id:'002',name:'小李',age:19},
            {id:'003',name:'小王',age:20}
        ]
    }

    //删除操作
    deletePerson = (index) => {
        //获取原数组
        const {persons} = this.state
        //删除
        persons.splice(index,1)
        //更新状态
        this.setState({persons})
    }

    // 慢动作回放
    addPerson = () => {
        const {persons} = this.state
        const person = {id:'004',name:'小刘',age:20}
        persons.unshift(person)
        this.setState({persons})    
    }

    render(){
        return(
            <div>
                <h2>人员列表</h2>
                <button onClick={this.addPerson}>添加小刘</button>
                <ul>
                    {
                        this.state.persons.map((personObj,index)=>{
                            return (
                                <li key={index}>
                                    {personObj.name}---{personObj.age}
                                    <input type="text"/>
                                    <button onClick={()=>{this.deletePerson(index)}}>删除</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<PersonList/>,document.getElementById('test'))
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

### 2.React 脚手架项目解构
-  **node_modules**：存放项目依赖的包
-  **public ------ 静态资源文件**：
  - &emsp;&emsp; **favicon.ico**：页签图标
  - &emsp;&emsp; **index.html**：主页面
  - &emsp;&emsp; **logo192.png**：logo图
  - &emsp;&emsp; **logo512.png**：logo图
  - &emsp;&emsp; **manifest.json**：应用加壳的配置文件
  - &emsp;&emsp; **robots.txt**：爬虫协议文件
-  **src ------ 源码文件**：
  - &emsp;&emsp; **App.css**：App组件的样式
  - &emsp;&emsp; **App.js**：App组件
  - &emsp;&emsp; **App.test.js**：用于给App做测试
  - &emsp;&emsp; **index.css**：为根组件配置样式
  - &emsp;&emsp; **index.js**：入口文件
  - &emsp;&emsp; **logo.svg**：logo图
  - &emsp;&emsp; **reportWebVitals.js**：页面性能分析文件（需要 web-vitals库的支持）
  - &emsp;&emsp; **setupTests.js**：jest测试的配置文件（需要 jest-dom库的支持）

-  **.gitignore**：git版本管制忽略的配置
-  **package.json**：应用包配置文件
-  **package-lock.json**：包版本控制文件
-  **README.md**：应用描述说明的readme文件

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

### 3.创建组件
-  **webstorm快捷方式**
- 
  -  &emsp;&emsp;**创建类组件**： rcc
  -  &emsp;&emsp;**创建函数组件**： rcf
 
-  **vscode快捷方式 ----- 需要安装插件（ES7 React/Redux/GraphQL/React-Native snippets）**
-
  -  &emsp;&emsp;**创建类组件**： rcc
  -  &emsp;&emsp;**创建函数组件**： rfc

### 4.功能界面的组件化编码流程

-  **1.拆分组件：拆分界面抽取组件**
-  **2.实现静态组件：使用组件实现静态页面**
-  **3.实现动态组件：**
- 
  - 1.动态显示初始化数据
    - 1.数据类型
    - 2.数据名称
    - 3.保存在哪个组件
  - 2.交互（从绑定事件监听开始）
 
