## JQuery 专栏
### 1、JQuery简介
- JQuery(JavaScript Query)是一个轻量级的、兼容多浏览器的JavaScript库。它简化了HTML文档遍历和操作、事件处理、动画和Ajax交互。
  JQuery的设计目标是让JavaScript编程更加简单和高效。

### 2、JQuery的优点：
- - 1.轻量级。核心文件才几十kb,不会影响页面加载速度
- - 2.跨浏览器兼容。基本兼容了现在主流的浏览器
- - 3.链式编程、隐士迭代
- - 4.对事件、样式、动画支持，大大简化了DOM操作
- - 5.支持插件扩展开发。有着丰富的第三方的插件，例如：
- - - 树形菜单、日期控件、轮播图等
- - 6.免费、开源

### 3、JQuery的基本使用
- - 1.官网地址：httpss://jquery.com/
- - 2.版本：
- - - 1.x版本：兼容IE678,使用最为广泛的，官方只做BUG维护，功能不再新增。因此一般项目来说，使用1.x版本就可以了
- - - 2.x版本：不兼容IE678，很少有人使用，官方只做BUG维护，功能不再新增。
- - - 3.x版本：不兼容IE678，只支持最新的浏览器。虽然最新版本的功能最多，但是很多浏览器不支持。为了兼顾最新浏览器和旧浏览器的兼容性，
        一般项目来说，使用2.x版本就可以了。

- - 3.下载
- - - 官网下载地址：https://jquery.com/download/
- - - CDN方式引入：https://www.bootcdn.cn/jquery/
- - - 官网找到mini版，复制内容，创建jquery.mini.js文件，放到项目中

- - 4.引入JQuery
- - - 1.在HTML文件中引入JQuery文件
- - - 2.在浏览器中打开HTML文件
- - - 3.在控制台输出JQuery的版本号

- - 5.使用JQuery
- - - JQuery的入口函数
- - - - ```javascript
        $(document).ready(function(){})
        ```
- - - - ```javascript
        $(function(){})

        ```
- - - - 1.等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，JQuery 帮我们完成了封装；
- - - - 2.相当于原生js中的DOMContentLoaded事件；
- - - - 3.不同于原生js中的load事件是等页面文档、外部的js文件、css文件、图片加载完毕才执行内部代码。

- - - 例如：
- - - ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
         <!--    这个JS文件是复制的官网到本地使用  -->
          <script src="jquery.min.js"></script>
      </head>
      <body>
          <div>hello world</div>
      <script>
      //  1.等待页面DOM加载完毕再去执行js 代码
         $(document).ready(function(){
             $("div").hide(); // 隐藏div
         })
      //  2.等待页面DOM加载完毕再去执行js 代码 (简写)
         $(function(){
             $("div").hide(); // 隐藏div
         })
      </script> 
      </body>
      </html>
      ```
      
- - 6.JQuery的顶级对象$
- - - 1.$是jQuery的别称，在代码中可以使用$代替jQuery，但要注意$代表的是jQuery对象，而jQuery代表的是jQuery函数；
- - - 2.$是jQuery的顶级对象，相当于原生js中的window，把元素利用$包装成jQuery对象，就可以用$调用jQuery中的方法；

- - 7.jQuery对象和DOM对象
- - - ```js
      // 1.DOM对象: 通过原生js获取过来的对象就是DOM对象
      var div = document.getElementById("div1");
      // 2.jQuery对象: 通过jQuery方式获取过来的对象是jQuery对象。本质：通过$把DOM对象包装起来，jQuery对象是伪数组形式存在的；
      $("div")
      // 3.jQuery对象只能使用jQuery方法，DOM对象则使用原生的JavaScript属性方法
      div.style.display="none"
      $("div").style.display="none" // 这个$("div")是jQuery对像不能使用原生js的属性和方法
      $("div").hide() // 正确使用jQuery对象的方法
      // 4.DOM对象和jQuery对象之间可以相互转换的
        //1.DOM对象转换为jQuery对象
         $("div") // 第一种
         var div = document.getElementById("div1"); // 第二种
         $(div)
        // 2.jQuery对象转换为DOM对象
        $("div")[0] // 第一种
        $("div").get(0) // 第二种
      ```
      
### 4、jQuery常用API
- #### 1.jQuery选择器 
- - 1. 基本选择器
- - - 原生JS获取元素的方式很多，很杂，而且兼容性情况不一致，因此jQuery给我们封装了兼容性的获取元素的方法统一语法：
- - - ```js
      // 1.基本选择器
      $("选择器") // 里面选择器直接写CSS选择器即可，但是要加引号
      $("p") // 标签选择器
      $(".class") // 类选择器
      $("#id") // id选择器
      $("div,p,span") // 并集选择器
      $("div p") // 后代选择器
      $("div>p") // 子代选择器
      $("div+p") // 相邻兄弟选择器
      $("div~p") // 通用兄弟选择器
      // 2.层级选择器
      $("ul li") // 后代选择器
      $("ul>li") // 子代选择器
      // 3.过滤选择器
      $("li:first") // 第一个
      $("li:last") // 最后一个
      $("li:eq(index)") // 索引等于index的那个元素
      $("li:odd") // 奇数
      $("li:empty") // 选择没有子元素的li
      $("li:contains(text)") // 选择含有text文本的li
      $("li:has(selector)") // 选择含有selector元素的li
      $("li:parent") // 选择有子元素的li
      $("li:hidden") // 选择隐藏的li
      $("li:visible") // 选择可见的li
      $("li:even") // 偶数
      $("li:gt(index)") // 大于index
      $("li:lt(index)") // 小于index
      $("li:not(selector)") // 除了除了选择器以外的元素
      // 4.属性选择器
      $("li[属性名]") // 选择含有此属性的元素
      $("li[属性名=值]") // 选择含有此属性并且属性值等于值的元素
      $("li[属性名!=值]") // 选择含有此属性并且属性值不等于值的元素
      $("li[属性名^=值]") // 选择含有此属性并且属性值以值开头的元素
      $("li[属性名$=值]") // 选择含有此属性并且属性值以值结尾的元素
      $("li[属性名*=值]") // 选择含有此属性并且属性值包含值的元素
      // 5.表单选择器
      $(":input") // 表单内所有元素
      $(":text") // 文本框
      $(":password") // 密码框
      $(":radio") // 单选框
      $(":checkbox") // 复选框
      $(":submit") // 提交按钮
      $(":reset") // 重置按钮
      $(":button") // 普通按钮
      $(":image") // 图片按钮
      $(":file") // 文件按钮
      // 6.表单对象属性选择器
      $(":enabled") // 可用元素
      $(":disabled") // 不可用元素
      $(":checked") // 选中元素
      $(":selected") // 选中元素
      // 7.子元素选择器
      $("ul li:first-child") // 选择每个ul的第一个li
      $("ul li:last-child") // 选择每个ul的最后一个li
      $("ul li:nth-child(index)") // 选择每个ul的第index个li
      $("ul li:nth-child(odd)") // 选择每个ul的奇数个li
      $("ul li:nth-child(even)") // 选择每个ul的偶数个li
      $("ul li:first-of-type") // 选择每个ul的第一个li
      $("ul li:last-of-type") // 选择每个ul的最后一个li
      $("ul li:nth-of-type(index)") // 选择每个ul的第index个li
      $("ul li:nth-of-type(odd)") // 选择每个ul的奇数个li
      $("ul li:nth-of-type(even)") // 选择每个ul的偶数个li
      ```
- - 2.隐式迭代（重要）
- - - 遍历内部DOM元素（伪数组形式存储）的过程就叫做隐式迭代。
- - - 简单理解：给匹配到的所有元素进行循环遍历，执行相应操作。
- - - ```js
      // 隐式迭代
      $("div").css("background", "red"); // 给所有div设置背景色为红色
      ```

- - 3.jQuery筛选方法（重点）
- - -      语法                       用法                              说明
- - -     parent()                 $("li").parent();                  查找父亲元素   
- - -     parents(selector)        $("li").parents(".current");       查找祖先元素(不写 selector 默认查询全部）
- - -     parentsUntil(selector)   $("li").parentsUntil("ul");        查找祖先元素，直到ul结束
- - -     children(selector)       $("ul").children("li");            相当于$("ul>li"),最近一级（儿子元素）
- - -     find(selector)           $("ul").find("li");                相当于$("ul li"),后代选择器
- - -     siblings(selector)       $(".first").siblings("li");        查找兄弟元素，不包括自己
- - -     nextAll()                $(".first").nextAll()              查找当前元素之后所有的同辈元素
- - -     prevtAll()               $(".last").prevAll()               查找当前元素之前所有的同辈元素
- - -     hasClass(class)        $("div").hasClass("protected")       检查当前的元素是否含有某个特定的类，如果有，则返回true
- - -     eq(index)                $("li").eq(2)                      相当于$("li:eq(2)"),index从0开始
- - -     first()                  $("li").first()                    相当于$("li:first"),返回第一个元素
- - -     last()                   $("li").last()                     相当于$("li:last"),返回最后一个元素
- - -     filter(selector)         $("li").filter(":eq(2)")           筛选元素，保留被选元素集合中匹配的元素

- - 4.排他思想
- - - ```js
      $(".nav li").click(function(){
        $(this).addClass("active").siblings().removeClass("active"); 
      }) 
      ```
- #### 2.jQuery样式操作
- - 1.操作css方法
- - - jQuery可以使用css()方法来修改简单样式，css()方法可以操作css样式表中的样式;也可以操作类，修改多个样式
- - - 1.参数只写属性名，则返回属性值
- - - ```js
      $("div").css("width"); //返回宽度值
      ```
- - - 2.参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号
- - - ```js
      $("div").css("width","300px");
      $("div").css("width",300);
      ```
- - - 3.参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开，属性可以不用加引号
- - - ```js
      $("div").css({
                   width:300,
                   height:200,
                   backgroundColor:"red" // 如果是复合属性则必须采用驼峰命名法，如果值不是数字，则必须加引号
      }); //设置一组样式
      ```
      
- - 2.设置类样式方法
- - - 作用等同于以前的classList，可以操作类样式，注意操作类里面的参数不要加点。
- - - 1.add(class)         添加类
- - - ```js
      $("div").click(function(){
        $(this).addClass("current");
      })
      ```
- - - 2.remove(class)     删除类
- - - ```js
      $("div").removeClass("current");
      ```
- - - 3.toggleClass(class)     切换类，有则删除，无则添加
- - - ```js
      $("div").toggleClass("current");
      ```
- - - 4.类操作与className区别
- - - - 1.原生js中的className会覆盖以前的类名
- - - - 2.jQuery中类操作只是对指定类进行操作，不影响原先的类名
- - - - ```js
        // 通过类名获取div元素
        var oDiv = document.querySelector(".oDiv");
        // 设置类名
        oDiv.className = "box2";  
        // 打开控制台发现div 元素上原来的类名被覆盖了
        // jQuery中类操作只是对指定类进行操作，不影响原先的类名
        $("div").addClass("box2"); //添加类
        $("div").removeClass("box2"); //删除类
        $("div").toggleClass("box2"); //切换类
        // 打开控制台发现div 元素上多了类名而没有覆盖
        ```
        
- #### 3.jQuery效果
- - jQuery封装了很多的动画效果
- - - 1.显示隐藏
- - - - 1.show([speed,[easing],[fn]])  显示
- - - - 2.hide([speed,[easing],[fn]])  隐藏
- - - - 3.toggle([speed],[easing],[fn]])  切换
- - - - - speed:动画的速度，默认是"normal"，也可以是"slow"、"fast"或者毫秒数
- - - - - easing:动画的节奏，默认是"swing"，也可以是"linear"
- - - - - fn:动画完成后执行的函数，每个元素执行一次
- - - - - 一般情况下，我们都不加参数直接显示隐藏就可以了
- - - - ```js
        // 显示 
        $("button").mouseover(function() {
          $("div").show();
        }) 
        
        // 隐藏
         $("button").mouseout(function() {
          $("div").hide();
        }) 
       
        // 切换
        $("div").toggle();
        // 事件切换 hover(enter,leave)
        $("button").hover(function() {
          $("div").show();
        }, function() {
          $("div").hide();
        })
        // 事件切换 hover 如果只有一个函数，那么鼠标经过和鼠标离开都会触发这个函数
        $("button").hover(function() {
          $("div").toggle();
        })
        ```
- - - 2.滑动
- - - - 1.slideDown([speed],[easing],[fn])  向下展开
- - - - 2.slideUp([speed],[easing],[fn])  向上卷起
- - - - 3.slideToggle([speed],[easing],[fn])  上下切换
- - - - ```js
        // 向下展开
        $("div").slideDown();
        // 向上卷起
        $("div").slideUp();
        // 上下切换
        $("div").slideToggle();
        ```
- - - 3.淡入淡出
- - - - 1.fadeIn([speed],[easing],[fn])  淡入
- - - - 2.fadeOut([speed],[easing],[fn])  淡出
- - - - 3.fadeToggle([speed],[easing],[fn])  淡入淡出切换
- - - - 4.fadeTo([[speed],opacity,[easing],[fn]])  渐变到
- - - - ```js
        // 淡入
        $("div").fadeIn();
        // 淡出
        $("div").fadeOut();
        // 淡入淡出切换
        $("div").fadeToggle();
        // 渐变到 这个速度和透明度必须要写
        $("div").fadeTo(1000,0.5);
        ```  
- - - 4.自定义动画
- - - - 1.animate(params,[speed],[easing],[fn])
- - - - - 1.params:想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采用驼峰命名法。其余参数都可以省略
- - - - - 2.speed:速度参数，三个可选值（slow、normal、fast）或具体的毫秒数
- - - - - 3.easing:缓动效果，默认为swing，可用参数linear
- - - - - 4.fn:回调函数
- - - - ```js
        // 自定义动画
        $("div").animate({width:"200px"},1000);
        $("div").animate({width:"200px",height:"200px"},1000);
        $("div").animate({width:"200px",height:"200px",opacity:"0.5"},1000);
        ```
        
- - - 5.动画队列及其停止排队方法
- - - - 1.动画或效果队列功能
- - - - - 1.动画或效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行
- - - - - 2.停止排队方法 stop([clearQueue],[jumpToEnd])
- - - - - - clearQueue 如果设置成true，则清空元素上的队列，false，则不会清空队列
- - - - - - jumpToEnd 如果设置成true，则跳到当前动画的最终效果
- - - - - ```js
          // 停止排队 stop 方法必须写到动画的前面 ,相当于停止结束上次动画
          $("div").stop().animate({width:"200px"},1000);
          ```

- #### 4. jQuery属性操作
- - 1.设置获取元素固有属性值 prop("属性名")
- - - 所谓固有属性就是元素本身自带的属性，比如 a 标签的 href，input 的 type。
- - - ```js
        // 获取元素固有属性值 prop("属性名")
        console.log($("a").prop("href"));
        // 设置元素固有属性值 prop("属性名","属性值")
        $("a").prop("title","我是a的title");
        ```
- - 2.设置获取元素自定义属性值 attr("属性名")
- - - 自定义属性就是程序员自己定义的属性，比如 h5的自定义属性： data-index； 自己定义的属性 index。
- - - - ```js
        // 获取元素自定义属性值 attr("属性名") 类似于原生的 getAttribute("属性名")
        console.log($("div").attr("data-index"));
        // 设置元素自定义属性值 attr("属性名","属性值") 类似于原生的 setAttribute("属性名","属性值")
        $("div").attr("data-index",2);
        ```
- - 3.数据缓存 data() 方法
- - - data() 方法可以在指定的元素上存取数据，并不会修改DOM元素结构。一旦页面刷新，之前存放的数据都将被移除。
- - - ```js
      // 数据缓存 data() 方法 用来缓存和获取 自定义属性数据 和 H5自定义属性数据(data-xxx) （在dom元素上看不到缓存属性和值）
      // 获取元素数据缓存 data("名称")
      $("div").data("index",2);
      // 这个方法获取data-index H5自定义属性 第一个 不用写data- 而且返回的是数字类型
      console.log($("div").data("index"));
      ```
      
- #### 5. jQuery内容文本值
- - 主要针对元素的内容还有表单的值操作
- - - 1.普通元素内容 html() （相当于原生innerHTML）
- - - - 1.获取元素内容
- - - - ```js
        // 获取元素内容 html() （相当于原生innerHTML）
        console.log($("div").html());
        ```
- - - - 2.设置元素内容
- - - - ```js
        // 设置元素内容 html("内容") （相当于原生innerHTML）
        $("div").html("我是div的内容");
        ```
- - - 2.普通元素文本内容 text() （相当于原生innerText）
- - - - 1.获取元素文本内容
- - - - ```js
        // 获取元素文本内容 text() （相当于原生innerText）
        console.log($("div").text());
        ```
- - - - 2.设置元素文本内容
- - - - ```js
        // 设置元素文本内容 text("内容") （相当于原生innerText）
        $("div").text("我是div的文本内容");
        ```
- - - 3.表单值 val() （相当于原生value）
- - - - 1.获取表单值
- - - - ```js
        // 获取表单值 val() （相当于原生value） 
        console.log($("input").val());
        ```
- - - - 2.设置表单值
- - - - ```js
        // 设置表单值 val("内容") （相当于原生value）
        $("input").val("我是input的值");
        ```

- #### 6. jQuery元素操作
- - - 主要是遍历、创建、添加、删除元素操作
- - - 1.遍历元素
- - - - jQuery隐式迭代会对同一类元素进行同样的操作，如果想要给同一类元素做不同操作，就需要用到遍历
- - - - ```js
        // 遍历元素第一种用法
        $("div").each(function (index, domEle) {});
        // index 索引号 
        // domEle 当前被遍历到的DOM元素（不是jQuery对象），想要使用jQuery方法需要将DOM对象转成jQuery对象 $(domEle)
        // 我们可以借助each()方法，遍历匹配到的所有元素
        // 注意：each()方法只能遍历jQuery对象
        // each()方法等同于原生的forEach()方法
        ```
- - - - ```js
        // 遍历元素第二种用法
        arr = ['我是第1个div', '我是第2个div', '我是第3个div'];
        obj={name:'andy',age:18};
        $.each($("div"), function (index, domEle) {});
        // index 索引号 domEle 当前被遍历到的DOM元素
        // 我们可以借助$.each()方法，遍历对象或数组 
        $.each(arr,function(index,ele){})
        // index 索引号 ele 当前被遍历到的元素
         $.each(obj,function(index,ele){})
        // index 属性名 ele 属性值
        ```
- - - 2.创建元素
- - - - ```js
        // 创建元素
        $("<h3></h3>");
        ```
- - - 3.添加元素
- - - - ```js
        // 创建元素
        var li = $("<li>我是后来创建的li</li>");
        var div = $("<div>我是后来创建的div</div>");
        // 1.内部添加元素（父子关系）
        $("ul").append(li); //$("ul") 内部后面添加 li , 把内容放入匹配元素内部最后面，类似于原生 appendChild 向里面追加元素
        $("ul").prepend(li); //$("ul") 内部最前面添加 li ,把内容放入匹配元素内部最前面，类似于原生 prependChild 向前面追加元素
        // 2.外部添加元素（兄弟关系）
        $("ul").after(div); //$("ul") 外部后面添加 div ,把内容放入匹配元素外部后面，类似于原生 insertAfter  
        $("ul").before(div); //$("ul") 外部前面添加 div ,把内容放入匹配元素外部前面，类似于原生 insertBefore
        ```
        
- - - 4.删除元素
- - - - ```js
        // 删除元素
        $("ul").remove(); // 1.删除匹配的元素（将自己及子孙都删除）
        $("ul").empty(); // 2.清空匹配的元素里面的内容（将子孙删除保留自己）
        $("ul").html(""); // 3.清空匹配的元素里面的内容（将子孙删除保留自己）
        ```
        
#### 7.jQuery 事件
- ##### 1.事件注册
- - 1.单个事件注册
- - - ```js
        $("div").click(function(){  })
        $("div").mouseenter(function(){  })
      ```

- ##### 2.事件处理
- - 1.事件处理on
- - - on()方法在匹配元素上绑定一个或多个事件的事件处理函数
- - - ```js
      // element.on( events [, selector ] [, data ], handler )
      // events：一个或多个用空格分隔的事件类型，如"click"或"keydown"。
      // selector：一个选择器字符串，用于过滤被选中的元素集合，仅绑定匹配选择器的后代元素。（元素的子元素选择器）
      // data：传递给事件处理函数的额外数据，可选。
      // handler：事件处理函数。
      // 动态创建的元素绑定事件使用on()方法可以触发，使用单个事件绑定的不能触发（on可以给未来动态创建元素绑定事件） 
      $("div").on("click mouseenter", function(){  }) // 1.绑定多个事件
      $("div").on("click", "p", function(){  }) // 2.事件委托（事件代理）点击p才会触发，但是事件是在div上绑定着
      $("div").on({  click: function(){  }, mouseenter: function(){  }  }) // 3.绑定多个事件
      $("div").on("click", {  name: "andy"  }, function(event){  console.log(event.data.name);  }) // 4.传递参数
      $("div").on("click", ".test", function(event){  console.log(event.target);  }) // 5.阻止冒泡
      $("div").on("click", ".test", function(event){  event.stopPropagation();  }) // 6.阻止默认行为
      ```
      
- - 2.事件处理off
- - - off()方法移除先前用on()方法添加的事件处理程序
- - - ```js
      // element.off( events [, selector ] [, handler ] )
      // events：一个或多个用空格分隔的事件类型，如"click"或"keydown"。
      // selector：一个选择器字符串，用于过滤被选中的元素集合，仅移除匹配选择器的后代元素的事件处理程序。
      // handler：一个函数，用于指定要移除的事件处理程序。
      $("div").off("click mouseenter") // 1.移除多个事件
      $("div").off("click", "p") // 2.移除事件委托（事件代理）
      $("div").off({  click: function(){  }, mouseenter: function(){  }  }) // 3.移除多个事件
      $("div").off() // 4.移除所有事件
      $("div").once("click",function() {
        alert("hello");
      }) // 5.只触发一次事件
      ```
      
- - 3.事件处理trigger（自动触发事件）
- - - 有些事件希望自动触发，比如轮播图自动播放功能跟点击右侧按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发。
- - - ```js
      // element.trigger( type [, extraParameters ] )
      // type：要触发的事件类型，如"click"或"keydown"。
      // extraParameters：可选参数，一个数组，用于传递给事件处理程序。
      $("div").on('click',function(){  console.log("hello");  }) // 1.添加事件
      $("div").click(); // 2.手动触发事件
      $("div").trigger("click") // 3.自动触发事件
      $("div").triggerHandler("click") // 4.自动触发事件，不触发默认行为
      $("div").trigger("click", [param1, param2, param3]) // 5.自动触发事件，并传递参数
      ```

- - 4.事件对象
- - - 事件被触发，就会有事件对象的产生
- - - ```js
      element.on(events, [selector], handler)
      // events：一个或多个空格分隔的事件类型和可选的命名空间，如"click"或"keydown.myPlugin"。
      // selector：一个选择器字符串，用于过滤冒泡上来的事件。如果为空，则表示不进行过滤。
      // handler：当匹配到的事件触发时，所执行的函数。
      $("div").on("click", function(event) {})
      // event：事件对象，包含了事件的相关信息，如事件类型、目标元素、鼠标位置等。
      // event.type：事件类型，如"click"或"keydown"。
      // event.target：事件的目标元素，即触发事件的元素。
      // event.pageX：鼠标相对于文档的X坐标。
      // event.pageY：鼠标相对于文档的Y坐标。
      // event.preventDefault()：阻止事件的默认行为。
      // event.stopPropagation()：阻止事件的冒泡。
      // event.stopImmediatePropagation()：阻止事件的冒泡，并阻止后续的事件处理程序执行。
      ```

- ##### 3.其他事件
- - 1.拷贝对象
- - - 如果想要把某个对象拷贝（合并）给另外一个对象使用，此时可以使用$.extend()方法
- - - - ```js
        // 语法：
        $.extend([deep], target, object1, [objectN])
        // deep：可选参数，如果设置为true，则进行深拷贝，否则进行浅拷贝。
        // target：目标对象，拷贝到该对象上。
        // object1, [objectN]：源对象，从这些对象中拷贝属性到目标对象上。
        var target = {name: "Tom", age: 18};
        var object1 = {name: "Jerry", gender: "male"};
        var object2 = {age: 20, gender: "female"};
        $.extend(target, object1, object2);
        console.log(target); // {name: "Jerry", age: 20, gender: "female"}
        ```

- - 2.多库共存
- - - jQuery使用$作为标识符，如果与其他库冲突，可以使用$.noConflict()方法释放$标识符，然后使用jQuery代替$。
- - - - ```js
        // 1.解决方案一：
        // 使用jQuery的别名$，如：jQuery("div")
        // 示例：
        jQuery(function() {})
        // 2.解决方案二：
        // jQuery变量规定新的名称：$.noConflict()
        // 示例：
        var $jq = $.noConflict();
        $jq(function() {})
        ```

- - 3.其他方法
- - - ```js
        // $.trim()：去除字符串两端的空格。
        // $.type()：判断数据的类型。
        // $.isArray()：判断是否为数组。
        // $.isFunction()：判断是否为函数。
        // $.isPlainObject()：判断是否为普通对象。
        // $.isEmptyObject()：判断是否为空对象。
        // $.parseJSON()：将JSON字符串转换为JavaScript对象。
        // $.parseXML()：将XML字符串转换为XML文档对象。
        // $.ajax()：发送AJ
        // $.get()：发送GET请求。
        // $.post()：发送POST请求。
        // $.getJSON()：发送GET请求并解析JSON数据。
        // $.getScript()：发送GET请求并加载JavaScript文件。
      ```
      
- - 4.jQuery插件
- - - 1.jQuery插件是扩展jQuery功能的第三方库，可以通过jQuery的extend()方法来扩展jQuery的功能。
- - - 2.jQuery插件常用网站：
- - - - 1.jQuery插件库：http://www.jq22.com/
- - - - 2.jQuery之家：http://www.htmleaf.com/ （推荐）
- - - - 3.jQuery插件网：http://www.jq-school.com/
- - - 3.jQuery插件的使用步骤：
- - - - 1.下载jQuery插件：从jQuery插件网站下载所需的jQuery插件，并将其引入到HTML文件中。
- - - - 2.引入jQuery插件：在HTML文件中引入jQuery插件，可以通过以下方式引入：
- - - - - 1.直接引入jQuery插件文件：
- - - - - 2.通过CDN引入jQuery插件：
- - - - 3.复制html、css、js(调用插件)

- - - 4.常用插件：
- - - - 1.瀑布流插件（Masonry.js）
- - - - 2.轮播图插件（Bootstrap Carousel）
- - - - 3.图片懒加载（EasyLazyLoad.js）
- - - - 4.日期选择器插件（DatePicker.js）
- - - - 5.表单验证插件（jQuery Validation Plugin）
- - - - 6.弹出层插件（Layer.js）
- - - - 7.滚动条插件（NiceScroll.js）
- - - - 8.滚动监听插件（ScrollMagic.js）
- - - - 9.图表插件（Chart.js）
- - - - 10.地图插件（Leaflet.js）
- - - - 11.富文本编辑器插件（Quill.js）
- - - - 12.视频播放器插件（Video.js）
- - - - 13.音频播放器插件（Howler.js）
- - - - 14.动画插件（Animate.css）
- - - - 15.模态框插件（Bootstrap Modal）
- - - - 16.导航插件（Bootstrap Navbar）
- - - - 17.全屏滚动插件（fullPage.js）
- - - - 18.响应式表格插件（Responsive Tables）
- - - - 19.图片预览插件（Magnific Popup）
- - - - 20.图片裁剪插件（cropper.js）
- - - - 21.图片上传插件（Dropzone.js）
- - - - 22.图片压缩插件（Compressor.js）
- - - - 23.图片预览插件（Viewer.js）
- - - - 24.图片拖拽插件（Draggable.js）
- - - - 25.图片旋转插件（Rotate.js）
- - - - 26.图片缩放插件（Zoom.js）
- - - - 27.图片滤镜插件（Filterizr.js）
- - - - 28.图片拖拽排序插件（Sortable.js）
- - - - 29.bootstrap JS（Bootstrap.js）

#### 8.jQuery尺寸、位置操作
- - 方法：
- -            语法                                 用法
- -            width()/height()                    获取匹配元素的宽度和高度 只算 width/height
- -            innerWidth()/innerHeight()          获取匹配元素的宽度和高度 包含 padding
- -            outerWidth()/outerHeight()          获取匹配元素的宽度和高度 包含 padding、border
- -            outerWidth(true)/outerHeight(true)  获取匹配元素的宽度和高度 包含 padding、border、margin
- -            offset()                            获取匹配元素相对于文档的偏移（浏览器窗口）
- -            position()                          获取匹配元素相对于其父元素的偏移（父级带有定位的盒子）
- -            scrollTop()/scrollLeft()            获取匹配元素相对滚动条顶部的偏移/相对滚动条左侧的偏移
- -            scroll()                            设置匹配元素相对滚动条顶部的偏移/相对滚动条左侧的偏移
- -            offsetParent()                      获取最近的被定位的祖先元素

- - 使用：
- - - ```js
      // 获取元素相对于文档的偏移
      var offset = $('#box').offset();
      console.log(offset.left, offset.top);
      // 设置元素偏移量
      $('#box').offset({
        left: 100,
        top: 200
      })
      // 获取元素相对于父元素的偏移（这个方法只能获取不能设置）
      var position = $('#box').position();
      console.log(position.left, position.top);
      
      // 获取元素相对滚动条顶部的偏移
      var scrollTop = $(document).scrollTop();
      // 设置元素相对滚动条顶部的偏移
      $(document).scrollTop(100);
      ```

        
