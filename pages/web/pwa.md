## PWA 技术应用
- ### PWA 简介
- #### 1. PWA 是什么？
- - PWA 是 Progressive Web App 的缩写，渐进式网络应用程序，是提升WEB APP体验的一种新方法，能给用户原生应用的体验。
- - PWA 可以用来开发跨平台的应用程序，可以在各种设备上运行，包括桌面、移动设备等。
- - PWA 运用现代的 WEB API 以及传统的渐进式增强策略来创建跨平台 Web 应用程序。
- - PWA 能做到原生应用的体验不是靠特指某一项技术，而是经过应用一些新技术进行改进。
- - 现在vue、react的脚手架中都已经集成了PWA功能。
- - MDN地址： https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps

- #### 2. PWA 的优势
- - 渐进式：适用于所有浏览器，因为它是以渐进式增强作为宗旨开发的
- - 流畅：能够借助Service Worker在离线或者网络较差的情况下正常访问
- - 可安装：用户可以添加常用的webapp到桌面，免去去应用商店下载的麻烦
- - 原生体验：可以和app一样，拥有首屏加载动画，可以隐藏地址栏等沉浸式体验
- - 粘性：通过推送离线通知等，可以让用户回流

- #### 3. web app manifest: 应用程序清单
- 介绍：
- - web app manifest是PWA技术集合中的一部分
- - web app manifest可以让网站安装到设备的主屏幕，而不需要用户通过应用商店进行下载。
- - web app manifest在一个JSON文本文件中提供有关应用程序的信息（如名称、作者、图标、描述）
- - 传统的web App 入口：1.网址 2.书签，收藏夹 3.直接搜索
- - web app manifest：
- - - 可以添加到桌面，有唯一的图标和名称
- - - 有启动时界面，避免生硬的过渡
- - - 隐藏浏览器相关的UI，如地址栏等

- 使用步骤：
- - 在项目的根目录下创建一个manifest.json文件
- - 在index.html中引入manifest.json文件
- - 在manifest.json文件中提供常见的配置
- - 需要在https协议或者http:s://localhost下访问项目
- ```html
  <link rel="manifest" href="/manifest.json">
  ```
  
- 常见配置1
- - name：用于指定应用的名称，用户安装横幅提示名称，和启动画面中的文字
- - short_name：用于指定应用的短名称，用于主屏幕图标下的文字
- - start_url：用于指定用户从设备启动应用程序时加载的URL，可以是绝对路径和相对路径
- - icons：用于指定可在各种环境中用作应用程序图标的图像对象数组，144x144
- - background_color：用于指定启动画面的背景颜色
- - theme_color：用于指定应用程序的主题颜色
- - display：用于指定应用程序的显示模式
- - - fullscreen：全屏显示，所有可用的显示区域都被使用，并且不显示状态栏
- - - standalone：独立模式，让这个应用看起来像一个独立的应用程序，包括具有不同的窗口，在应用程序启动器中拥有自己的图标等
- - - minimal-ui：该应用程序将看起来像一个独立的应用程序，但会有浏览器地址栏

- #### 4. service worker：服务工作者
- 介绍：
- - 一个标准的PWA程序，必须包含3个部分
- - - manifest.json：应用程序清单
- - - service worker：服务工作者
- - - https服务器 或者 http://localhost
- - W3C组织早在2014年5月就提出过 Service Worker 这样的一个HTML5 API，主要用来做持久的离线缓存。
- - 前端有很多性能优化的手段：CDN、CSS Sprite、文件的合并压缩、异步加载、资源缓存等等，这些手段都是用来做性能优化的，但是如果断网了会发生什么
- - service worker 允许web应用在网络环境较差或者是离线的环境下依旧可以使用
- - service worker 可以极大的提升web App 的用户体验
- - service worker 是一个独立的worker线程，独立于浏览器主线程，不会阻塞主线程的执行,是一种特殊的 web worker
- - web worker 是什么
- - - web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。
- - - 您可以创建多个 web worker，以充分利用多核 CPU。一旦被创建，web worker 就可以独立运行，而不会影响主线程，也不会影响页面的性能。
- - - web worker 可以用来执行一些耗时的操作，比如计算、数据请求等，而不会阻塞主线程的执行，但不能操作DOM 和 BOM。
- - web worker 使用
- - - 1.创建一个 worker 线程 var worker = new Worker('worker.js');
- - - 2.在web worker 中执行一些耗时的操作
- - - 3.web worker 中执行完毕后，通过 self.postMessage() 方法将结果发送给主线程
- - - 4.主线程中通过 worker.onmessage= function(msg){} 方法接收 web worker 发送过来的结果
- - - 5.主线程也可以用同样的方法来给 web worker 发送消息
- - - 6.主线程中通过 worker.terminate() 方法终止 web worker
- - - web worker 使用
- ```html
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
    <script>
        let worker = new Worker('work.js')
        console.log('start')
        // 接受 worker 发来的消息
         worker.addEventListener("message", e=> {
            console.log(e.data)
         })
        // 向 worker 发送消息
        worker.postMessage('hello')
        console.log('end')
    </script>
    </body>
    </html>
  ```
- ```js
  // work.js 文件
  // 计算 1- 1亿之间所有数的和
  let sum = 0
  for (let i = 1; i <= 100000000; i++) {
  sum += i
  }
  // 获取结果 向主线程发送消息
  self.postMessage({sum:sum})
  // 监听主线程消息
  self.addEventListener('message', (event) => {
  console.log(event.data)
  })
  ```
- - - web worker 是临时的，每次做的事情的结果还不能被持久存下来，如果下次有同样的复杂操作，还得费时间重新来一遍
- - - 一旦被install,就永远存在，除非被手动unregister
- - - 用到的时候可以直接唤醒，不用的时候自动休眠
- - - 可编程拦截代理请求和返回，缓存文件，缓存的文件可以被网页进程取到（包括网络离线状态）
- - - 离线内容开发者可控
- - - 必须在HTTPS环境下才能工作
- - - 异步实现，内部大都是通过Promise实现，不能使用同步API
- - service worker 使用
- - - 在window.onload中注册 service worker,防止与其他资源竞争
- - - navigator对象中内置了 serviceWorker属性，可以用来注册service worker
- - - service worker 在老版本的浏览器中不支持，需要进行浏览器兼容 if('serviceWorker' in navigator) {}
- - - - 注册service worker navigator.serviceWorker.register('./sw.js'),返回一个promise对象
- - ```js
    window.onload = function () {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js').then((registration) => {
                console.log(registration)
            }).catch((error) => {
                console.log(error) 
            })
        }
    }
    ```
- - - sw.js 文件中，监听 install 事件，install 事件会在 service worker 注册成功后触发
- - - ```js
      // sw.js 文件 主要用来缓存 和 处理请求
      // 监听 install 事件
      self.addEventListener('install', (event) => {
        console.log('install')
      })
      ```
