## Vue 专栏

### 1、diff 算法

- 1.主流diff依赖：snabbdom 、 virtual-dom
- 2.搭建环境

```text
 1.创建一个项目
 2.npm init -y
 3.npm i -D webpack@4 webpack-cli@3 webpack-dev-server@3 
 4.npm i snabbdom -S
 5.创建并配置webpack.config.js文件
 6.修改package.json文件 dev 属性为 "webpack-dev-server --open --port 3000"
 7.根目录下创建index.js文件
 8.根目录下创建index.html文件
```

```js
//webpack.config.js 基础配置
module.exports = {
    // mode: 'development',
    entry: {
        index: './src/index.js', //踩坑： 这里使用对象, key 映射的是 filename的name
    },
    output: {
        filename: './js/[name].js',
        path: path.resolve(__dirname, '/public')
    },
    devServer: {
        contentBase: './public',
        inline: true,
    }
}
```

```html
<!--html 文件 引入index.js-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>snabbdom</title>
</head>
<body>
<h1 id="container">111111</h1>
<script type="text/javascript" src="/js/index.js"></script>
</body>
</html>
```

 ```js
// 查看 snabbdom 源码 复制案例到index.js
import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h
} from "snabbdom";

alert("11111")
const patch = init([
    // 通过传入模块初始化 patch 函数
    classModule, // 开启 classes 功能
    propsModule, // 支持传入 props
    styleModule, // 支持内联样式同时支持动画
    eventListenersModule // 添加事件监听
]);

const container = document.getElementById("container");
console.log(container)
const vnode = h("div#container.two.classes", {
    on: {
        click: function () {
        }
    }
}, [
    h("span", {style: {fontWeight: "bold"}}, "This is bold"),
    " and this is just normal text",
    h("a", {props: {href: "/foo"}}, "I'll take you places!")
]);
// 传入一个空的元素节点 - 将产生副作用（修改该节点）
patch(container, vnode);
```

- 3.虚拟节点和真实节点
- 虚拟节点：vnode

```json lines
{
  children: undefined,
  data: {},
  elm: h2,
  key: undefined,
  sel: "h2",
  text: "你好"
}
```

- 真实节点：DOM

```html
<h2>你好</h2>
```

- 4.新老节点替换规则
- 4.1新节点和老节点类型不同，直接删除老节点，插入新节点
```js
const vnode1 = h("h1",{}, "hello snabbdom");
const vnode2 = h("div",{}, "hello snabbdom");
const container = document.getElementById("container");
const btn = document.getElementById("btn");
patch(container, vnode1);
btn.onclick = function(){
    patch(vnode1, vnode2);
}
```
- 4.2新节点和老节点类型相同，比较新节点和老节点的子节点
- 4.3新节点和老节点类型相同，且子节点相同，则只更新老节点
```js
const container = document.getElementById("container");
const btn = document.getElementById("btn");
console.log(container)
const vnode =h('ul', {}, [
    h('li', {key:'Apples'}, 'Apples'),
    h('li', {key:'Oranges'}, 'Oranges'),
    h('li', {key:'Pears'}, 'Pears')
])
// 传入一个空的元素节点 - 将产生副作用（修改该节点）
patch(container, vnode);

const vnode2 = h('ul', {}, [
    h('li', {key:'Oranges'}, 'Oranges'),
    h('li', {key:'Pears'}, 'Pears'),
    h('li', {key:'Apples'}, 'Apples'),
])
btn.onclick=function (){
    patch(vnode, vnode2)
}
// 注意：如果要提升性能，一定要加key,key是唯一标识，再更改前后，确认是不是同一个节点。
```
- 4.4新节点和老节点类型相同，且子节点不同，则直接删除老节点，插入新节点
- 4.5只能同级比较，不能跨层级比较，如果跨层就会暴力删除旧节点，创建插入新节点

- 5.h函数
```js
function h(sel, b, c) { // sel 是标签名，b是属性，c是子元素:可以是内容 'hello' 或者 [] 子节点
    return {
        sel: sel, // 标签
        data: b, // 属性
        children: c, // 子元素
        text: undefined, // 文本
        elm: undefined // 元素节点
    }
}
```
-  6.patch函数
```js
function patch(oldVnode, vnode) { // oldVnode是老节点，vnode是新节点
    // 判断传入的第一个参数是否是真实元素节点
    if (oldVnode.nodeType) {
        // 创建空的元素节点
        oldVnode = emptyNodeAt(oldVnode)
    }
    // 判断传入的第一个参数是否是空节点
    if (sameVnode(oldVnode, vnode)) {
        // 比较新节点和老节点
        patchVnode(oldVnode, vnode)
    } else {
        // 暴力删除旧节点，创建插入新节点
        let oEl = oldVnode.elm // 获取老节点
        let parentEle = api.parentNode(oEl) // 获取父节点
        createEle(vnode).elm // 创建新节点
        if (parentEle !== null) {
            // 将新节点插入到页面中
            api.insertBefore(parentEle, vnode.elm, api.nextSibling(oEl))
            // 删除旧节点
            api.removeChild(parentEle, oldVnode.elm)
            // 删除真实dom节点
            oldVnode.elm = vnode.elm
        }
    }
}
```

-  手写diff
- 1.如果新老节点不是同一个节点名称，那么就暴力删除旧节点，创建插入新节点；
- 2.只能同级比较，不能跨层比较，如果跨层那么就暴力删除旧节点，创建插入新节点；
- 3.如果是相同节点又分很多种情况
```text
3.1 新节点有没有children
    如果新的节点没有children,那就证明新节点是文本，那么就直接把旧的替换成新的文本
3.2 如果新的节点有children
        1.新的节点有children，老节点有children ===>就是diff算法的核心
        2.新的节点有children，老节点没有children ===> 创建新节点添加（把旧的内容删除清空，新增新节点）
3.3 diff算法核心（最复杂情况）
        1.旧前 和 新前
          匹配：旧前的指针++ ，旧后的指针++；
        2.旧后 和 新后
          匹配：旧后的指针-- ，新后的指针--；
        3.旧前 和 新后
          匹配：旧前的指针++ ，新后的指针--；
        4.旧后 和 新前
          匹配：旧后的指针-- ，新前的指针++；
        5.以上四种情况，如果都没有命中， ===> 查找
          1.查找：在旧节点中查找与新节点相同的节点，如果找到了，那么就移动到旧节点的前面
          2.如果没找到，那么就创建新节点，添加到旧节点的前面
        6.创建 或者 删除
```

