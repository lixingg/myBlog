---
outline: deep
---
# 前言
###
#### 前端知识点比较琐碎，需要长久的学习和积累，是一个循序渐进的过程，戒骄戒躁，稳扎稳打

### 专栏 大纲
- [x] 1.html 专栏
- [x] 2.css 专栏
- [x] 3.js 专栏
- [x] 4.nodejs 专栏
- [x] 5.jquery 专栏
- [x] 6.ajax 专栏
- [x] 7.typescript 专栏
- [x] 8.vue 专栏
- [x] 9.微信小程序 专栏
- [x] 10.uni-app 专栏
- [x] 11.react 专栏
- [x] 12.react native 专栏
- [x] 13.threeJS 专栏
- [x] 14.Echarts 专栏
- [x] 15.疑难解答

### 1、html 专栏
<pre>
    HTML的全称是超文本标记语言（Hyper Text Markup Language），是为“网页创建和其它可在网页浏览器中看到的信息”设计的一种标记语言。
</pre>
-    [专栏详情](./html.md)
### 2、css 专栏
<pre>
    CSS即层叠样式表(Cascading Style Sheets)，是一种用来表现HTML或XML等文件样式的计算机语言。
    CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。CSS能够对网页中元素位置的排版进行像素级精确控制，
    支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。
    
    CSS不仅可以美化网页，还可以控制页面布局，让网页更加丰富多彩，布局更加灵活自如。CSS的最大贡献是让HTML从样式中脱离，
    实现了HTML专注去做结构呈现，样式交给CSS。此外，CSS还可以简化网页的代码，提高访问速度，外部的CSS文件会被浏览器保存在缓存里，
    加快下载显示的速度，也减少了需要上传的代码数量。
    
    总的来说，CSS是一种用于描述网页上元素外观和布局的样式语言，对于网页设计来说是非常重要的工具之一。
</pre>
-    [专栏详情](./css.md)
### 3、js 专栏
<pre>
    JavaScript（简称“JS”）是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。
    虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，
    JavaScript基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。
    JavaScript在1995年由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。
    因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。
    但实际上它的语法风格与Self及Scheme较为接近。
    JavaScript的标准是ECMAScript。截至2012年，所有浏览器都完整的支持ECMAScript 5.1，
    旧版本的浏览器至少支持ECMAScript 3标准。2015年6月17日，ECMA国际组织发布了ECMAScript的第六版，
    该版本正式名称为ECMAScript 2015，但通常被称为ECMAScript 6或者ES2015。
</pre>
-    [专栏详情](./js.md)

### 4、nodeJS 专栏
<pre>
    Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，用于构建高性能、可扩展的网络应用程序。
    相比于传统的 JavaScript 运行环境，Node.js 可以在服务器端运行 JavaScript 代码，使开发人员能够使用 JavaScript 在服务器上构建完整的应用程序。

    Node.js 的出现极大地推动了 JavaScript 的发展，将其从仅限于浏览器端的脚本语言扩展到了服务器端开发领域。
    它的设计理念是利用事件驱动和非阻塞 I/O 模型来构建高效的应用程序。这种模型使得 Node.js 能够处理大量的并发连接，并具备卓越的性能表现。
    与传统的服务器端语言相比，Node.js 具备以下几个显著特点。

    首先，Node.js 是单线程、非阻塞的。单线程意味着它只有一个主线程来处理所有的请求，这样避免了多线程并发带来的线程同步问题，
    简化了开发模型。非阻塞意味着当一个请求在执行过程中发出 I/O 操作时，不会等待操作完成再执行下一条语句，而是继续执行下一个请求。
    这种特性使得 Node.js 能够高效地处理大量的并发请求，同时保持低延迟和高吞吐量。

    其次，Node.js 采用了事件驱动的编程模型。通过使用事件和回调函数，开发人员可以异步地处理请求，提高代码的效率和可维护性。
    事件驱动模型使得开发人员只需要关注事件的处理逻辑，而不需要关心底层的 I/O 操作和线程管理。

    此外，Node.js 提供了丰富的模块和工具，使开发人员能够快速构建复杂的网络应用。它拥有大量的第三方模块，可以用于处理各种任务，
    例如网络通信、数据库访问、文件操作等。此外，Node.js 还具备强大的包管理器 npm，能够方便地安装和管理模块。

    由于其卓越的性能和便捷的开发模型，Node.js 成为了很多大型互联网公司的首选技术。它在各行各业都有广泛的应用，
    包括实时聊天应用、网络爬虫、在线游戏、物联网和服务器端 API 等。

    总之，Node.js 的出现使得 JavaScript 可以在服务器端运行，开发人员可以使用同一种语言来构建前后端应用，减少了学习成本和代码的重复性。
    它的高性能、高并发处理能力以及丰富的模块和工具，使得 Node.js 成为了现代网络应用开发的重要工具之一。随着 JavaScript 生态系统的不断壮大，
    Node.js 也将继续发展，为开发人员创造更多的机会和可能性。
</pre>
-    [专栏详情](./nodeJS.md)

### 5、jquery 专栏
<pre>
    jquery是一个快速、小型且功能丰富的javascript库，是为了简化js的开发或者dom等操作而开发的一种类库；它封装了js常用的功能代码（函数），
    提供一种简便的js设计模式，优化了html文档操作、事件处理、动画设计、ajax交互等。
    jquery 库的核心是选择器（selector）和事件处理（event handling）。通过使用选择器，jquery 能够方便地选择页面中的元素，并进行操作。
    通过事件处理，jquery 能够监听页面中的事件，并在事件发生时执行相应的操作。
    jquery 还提供了许多其他功能，例如动画、Ajax 请求、DOM 操作等，使得开发人员可以更加轻松地构建复杂的 Web 应用。
</pre>
-    [专栏详情](./jquery.md)

### 6、ajax 专栏

<pre>
    ajax（Asynchronous JavaScript and XML）是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，
    ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
    传统的网页（不使用 ajax）如果需要更新内容，必需重载整个网页面。
    使用 ajax 的网页，在发送请求更新内容的同时，页面不会发生刷新，用户还可以继续进行其他操作。
</pre>
-    [专栏详情](./ajax.md)

### 7、typescript 专栏
<pre>
    TypeScript是一种由微软开发的开源编程语言，它是JavaScript语言的一个超集，支持JavaScript中的所有语法和特性，并在此基础上添加了一些新的特性。
    TypeScript与JavaScript最大的不同是它引入了静态类型检查机制，通过在编译时检查变量的类型，可以帮助程序员更快速地找出代码中潜在的错误。
    类型系统：TypeScript支持静态类型、动态类型的检查，还有类型推断功能，让程序员能够更好地编写易于维护、可扩展且可读性高的代码。
    强大的开发工具：TypeScript具有完整的编辑器和开发工具支持，包括语法高亮、自动补全、重构等功能，还支持多种常用的构建工具。
    容易上手：TypeScript基于JavaScript语言，对于已经掌握JavaScript开发的开发者们来说，学习成本相应较低，只需要花费少量时间阅读文档和实践即可。
    增强代码质量：TypeScript能够在编译时发现代码中的潜在错误，减少运行时异常导致的问题，同时提高代码的可读性和可维护性。
    兼容性：TypeScript兼容JavaScript的所有版本和第三方库，可以无缝地向已有的JavaScript项目中引入TypeScript。
</pre>
-    [专栏详情](./typescript.md)

### 8、vue 专栏
<pre>
    Vue 是一个用于创建用户界面的渐进式框架，旨在帮助开发人员构建可扩展的 Web 应用程序。Vue 由尤雨溪（Evan You）开发，首次发布于2014年。
    它采用了一种类似于响应式编程的方法，允许我们通过声明式渲染数据来构建用户界面。

    Vue 可以与其他库或框架结合使用，例如 React 或 AngularJS。它还可以与现代工具链和构建工具进行集成，例如 Webpack 或 Gulp，
    使其更加灵活和可扩展。

    Vue的核心思想是组件化编程。组件是应用程序中的一个可重复使用的部分，它可以封装代码、样式和行为，并将其作为一个整体进行管理。

    每个Vue 应用程序都由一个或多个组件组成。这些组件可以嵌套，形成嵌套层次结构，并且可以通过父子组件之间的数据传递来实现通信。
    这种方式使得Vue应用程序易于维护和拓展。
</pre>

-    [专栏详情](./vue.md)


### 11、react 专栏
<pre>
    React是一种流行的JavaScript库，用于构建用户界面。它是Facebook公司开发的，目前由开放源代码社区维护和开发。
    React的主要特点是它是一个组件化的框架，它允许你将用户界面分解为可重用的组件。这些组件可以单独开发、测试和维护，
    使得大型应用程序的开发变得更加容易和可管理。
    
    React的主要功能之一是虚拟DOM。虚拟DOM是一种轻量级的JavaScript对象，它代表了用户界面的当前状态。
    当组件的属性或状态发生变化时，React使用虚拟DOM来计算出新的用户界面，然后只将实际发生更改的部分应用到真实的DOM中。
    这种优化技术使得React具有很高的性能，并且可以有效地处理大规模的用户界面。
    
    React还提供了一些其他有用的功能，例如状态管理、生命周期方法和事件处理等。状态管理允许你在组件内部保存数据，
    并在组件的生命周期内跟踪它们的变化。生命周期方法则允许你在组件创建、更新和销毁时执行自定义逻辑。
    事件处理则使得你可以轻松地将交互事件与代码逻辑连接起来。
    
    在使用React时，有一些注意事项需要注意。首先，你需要了解JavaScript和HTML/CSS的基本知识，因为React是基于这些技术的。
    其次，你需要熟悉ES6语法和一些常用的React组件和工具，例如Redux、React Router和Axios等。最后，
    你需要了解如何使用npm或yarn等包管理工具来安装和管理React依赖项。
    
    总的来说，React是一种强大而灵活的JavaScript库，它可以帮助你构建高性能、可维护的大型用户界面。
    如果你正在寻找一种构建现代Web应用程序的方法，那么React是一个很好的选择。
</pre>
-    [专栏详情](./react.md)

### 12、React Native 专栏

-    [专栏详情](./react-native.md)

### 13、uni-app 专栏

-    [专栏详情](./uni-app.md)

### 14、vite 专栏

-    [专栏详情](./vite.md)

### 14、Echarts 专栏
<pre>
    ECharts是一款基于JavaScript的数据可视化图表库，它提供了直观、生动、可交互且可高度个性化定制的数据可视化图表。
    ECharts最初由百度团队开源，并于2018年初捐赠给Apache基金会，成为ASF孵化级项目。这款库的主要特点是其极强的扩展能力，
    采用了模块化的设计，每个图表类型都是一个独立的模块，可以根据需要选择加载。ECharts支持丰富的图表类型，
    包括折线图、柱状图、饼图、散点图等，满足各种不同的数据可视化需求。此外，它还具有强大的交互功能，
    允许用户通过鼠标滚动、拖拽、放大缩小等方式与图表交互，支持数据筛选、缩放等操作，使用户能够更加方便地探索和分析数据。
    
    ECharts的另一个显著优势是其简单易用的接口和丰富的定制选项。用户只需要准备好数据，通过简单的配置操作就可以创建出各式各样的图表。
    它提供了大量的样式、格式和主题选项，用户可以根据自己的需求来定制图表的外观和风格。ECharts还支持多维数据的可视化展示，
    可以方便地处理多个维度的数据，并以不同的方式展示出来。此外，ECharts支持移动端的适配和优化，能够在不同的屏幕尺寸和设备上自适应地展示图表，
    使用户能够在手机、平板等移动设备上获得良好的可视化体验。
    
    作为一个开源项目，ECharts拥有一个活跃的社区，开发者可以在社区中找到大量的教程、文档、案例等资源，并与其他开发者进行交流和分享。
</pre> 
-    [专栏详情](./Echarts.md)

### 15、map专栏
-    [专栏详情](./map.md)

### 15、疑难解答

<pre>
    针对不同的方面的问题，解答
</pre>
-    [专栏详情](./疑难解答.md)

### 16、工具专栏

-    [专栏详情](./tools.md)

