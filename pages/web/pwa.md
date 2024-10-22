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
- 1.介绍：
- - web app manifest是PWA技术集合中的一部分
- - web app manifest可以让网站安装到设备的主屏幕，而不需要用户通过应用商店进行下载。
- - web app manifest在一个JSON文本文件中提供有关应用程序的信息（如名称、作者、图标、描述）
- - 传统的web App 入口：1.网址 2.书签，收藏夹 3.直接搜索
- - web app manifest：
- - - 可以添加到桌面，有唯一的图标和名称
- - - 有启动时界面，避免生硬的过渡
- - - 隐藏浏览器相关的UI，如地址栏等

- 2.使用步骤：
- - 在项目的根目录下创建一个manifest.json文件
- - 在index.html中引入manifest.json文件
- - 在manifest.json文件中提供常见的配置
- - 需要在https协议或者http:s://localhost下访问项目
- ```html
  <link rel="manifest" href="/manifest.json">
  ```
  
- 3.常见配置1
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

- #### 4. web worker
- - 1.web worker 介绍
- - - 1.web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。
- - - 2.您可以创建多个 web worker，以充分利用多核 CPU。一旦被创建，web worker 就可以独立运行，而不会影响主线程，也不会影响页面的性能。
- - - 3.web worker 可以用来执行一些耗时的操作，比如计算、数据请求等，而不会阻塞主线程的执行，但不能操作DOM 和 BOM。
- - - 4.web worker 是临时的，每次做的事情的结果还不能被持久存下来，如果下次有同样的复杂操作，还得费时间重新来一遍

- - 2.web worker使用
- - - 1.创建一个 worker 线程 var worker = new Worker('worker.js');
- - - 2.在web worker 中执行一些耗时的操作
- - - 3.web worker 中执行完毕后，通过 self.postMessage() 方法将结果发送给主线程
- - - 4.主线程中通过 worker.onmessage= function(msg){} 方法接收 web worker 发送过来的结果
- - - 5.主线程也可以用同样的方法来给 web worker 发送消息
- - - 6.主线程中通过 worker.terminate() 方法终止 web worker
- - 3.示例代码：
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


- #### 5. service worker：服务工作者
- - 1.介绍：
- - - 1.一个标准的PWA程序，必须包含3个部分
- - - - 1.manifest.json：应用程序清单
- - - - 2.service worker：服务工作者
- - - - 3.https服务器 或者 http://localhost
- - - 2.W3C组织早在2014年5月就提出过 Service Worker 这样的一个HTML5 API，主要用来做持久的离线缓存。
- - - 3.前端有很多性能优化的手段：CDN、CSS Sprite、文件的合并压缩、异步加载、资源缓存等等，这些手段都是用来做性能优化的，但是如果断网了会发生什么
- - - 4.service worker 允许web应用在网络环境较差或者是离线的环境下依旧可以使用
- - - 5.service worker 可以极大的提升web App 的用户体验
- - - 6.service worker 是一个独立的worker线程，独立于浏览器主线程，不会阻塞主线程的执行,是一种特殊的 web worker

- - 2.service worker使用
- - - 1.在window.onload中注册 service worker,防止与其他资源竞争
- - - 2.navigator对象中内置了 serviceWorker属性，可以用来注册service worker
- - - 3.service worker 在老版本的浏览器中不支持，需要进行浏览器兼容 if('serviceWorker' in navigator) {}
- - - 4.注册service worker navigator.serviceWorker.register('./sw.js'),返回一个promise对象
- - - 5.一旦被install,就永远存在，除非被手动unregister
- - - 6.用到的时候可以直接唤醒，不用的时候自动休眠
- - - 7.可编程拦截代理请求和返回，缓存文件，缓存的文件可以被网页进程取到（包括网络离线状态）
- - - 8.离线内容开发者可控
- - - 9.必须在HTTPS环境下才能工作
- - - 10.异步实现，内部大都是通过Promise实现，不能使用同步API
- - 3.示例代码：
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
- - 4.service worker 的生命周期
- - - 1.install事件会在 service worker 注册成功的时候触发，主要用于缓存资源
- - - 2.activate 事件会在 service worker 激活的时候触发，主要用于删除旧的资源
- - - 3.fetch 事件会在发送请求的时候触发，主要用于操作缓存或者读取网络资源

- - - 4.如果sw.js发生了变化，install事件会重新触发，但是activate事件不会重新触发，需要手动删除旧的sw.js
- - - 5.activate事件会在install事件后触发，但是如果现在已经存在 service worker,那么就处于等待状态，直到当前 service worker 终止
- - - 6.可以通过self.skipWaiting()方法跳过等待，返回一个promise对象
- - - 7.可以通过event.waitUntil(promise)方法,会在promise结束后才会结束当前生命周期函数，防止浏览器在异步操作之前就停止了生命周期
- - - 8.service worker 激活后，会在下一次刷新页面的时候生效，可以通过self.clients.claim()方法，立即获取控制权
- - ```js
    // sw.js 文件 主要用来缓存 和 处理请求
    // service worker install event
    self.addEventListener('install',(event)=>{
    // 111
    console.log('installing service worker',event);
    // 会让 service worker 跳过等待 ，直接进入active 状态
    // 等待 skipWaiting() 执行完 才会执行 activate
    event.waitUntil(self.skipWaiting())
    })
    // service worker activate event
    self.addEventListener('activate',(event)=>{
    console.log('activating service worker',event);
    // 表示 service worker 激活后，立即获取控制权 不然只能刷新之后才会执行
    event.waitUntil(self.clients.claim())
    })
    // service worker fetch event
    //
    self.addEventListener('fetch',(event)=>{
    console.log('fetching service worker',event);
    })
    ```
- #### 6.promise
- - 基本使用
- - - 1.promise 是异步编程的一种解决方案，比传统的解决方案 --- 回调函数和事件 -- 更合理和强大
- - - 2.promise 可以以链式的方式来进行异步编程，解决了回调地狱的问题
- - - 3.promise 常用的静态方法
- - - - 1.Promise.resolve(value) 返回一个以给定值解析后的 Promise 对象，如果返回值是一个 Promise 对象，则直接返回该对象。
- - - - 2.Promise.reject(reason) 静态函数Promise.reject返回一个以给定 reason 拒绝的 Promise 对象。
- - - - 3.Promise.all(iterable) 返回一个 Promise 实例，等待所有 Promise 对象都成功了，才会成功
- - - - 4.Promise.race(iterable) 竞速，只要有一个 Promise 对象成功或者失败，就会成功或者失败

- #### 7. async await
- - 基本使用
- - - 1.ES2017 引入的 async/await，是 Generator 函数的语法糖，用于简化异步操作
- - - 2.async 用于修饰一个函数，async function fn (){} , await 函数会返回一个 Promise 对象
- - - 3.await 只能出现在 async 函数中，await 后面跟一个 promise 对象 ，用于获取Promise 成功的结果，如果不是 Promise对象，直接返回
- - - 4.await 会阻塞 async 函数的执行，直到 Promise 对象成功或者失败，才会继续执行 async 函数后面的代码
- - - 5.await 后面的 Promise 对象如果失败，会抛出异常，需要用 try/catch 来捕获异常

- #### 8. fetch（处理兼容问题 使用 polyfill）
- - 基本使用
- - - 1.[fetch API](https://www.w3cschool.cn/fetch_api/) 提供了一个Javascript接口，用于访问和操作HTTP请求和响应。
         它返回一个 Promise 对象，该对象表示一个异步操作的结果
- - - 2.在 service worker 中，如果想要发送请求，无法使用XMLHttpRequest，只能使用 fetch API
- - - 3.fetch API 是基于Promise实现的
- - - 4.fetch(url,options) 用于发送HTTP请求，返回一个包含响应结果的Promise对象
- - - 5.response 是一个二进制数据流，需要调用json()方法，将二进制数据流转换为JSON对象
- - - 6.options 常见参数：
- - - - - 1.method：请求方法，例如 GET、POST、PUT、DELETE 等
- - - - - 2.headers：请求头，是一个 Headers 对象，可以设置请求头信息
- - - - - 3.body：请求体，可以是一个字符串、FormData 对象或者 Blob 对象

- #### 9. cache storage
- - 1.基本使用
- - - 1.cacheStorage 接口表示 Cache 对象的存储。配合service worker 来实现资源的缓存
- - - 2.caches api 类似于数据库的操作
- - - - 1.caches.open(cacheName).then(function(cache){})：用于打开缓存，返回一个匹配cacheName的 Cache 对象的Promise,类似与连接数据库
- - - - 2.caches.keys().then(function(names){})：返回一个promise 对象，包括所有的缓存的key(数据库名)
- - - - 3.caches.delete(cacheName)：用于删除指定的缓存（数据库）
- - - 3.cache对象常用方法（单条数据的操作）
- - - - 1.cache接口为缓存的Request/Response对象对提供存储和检索功能。它类似于数据库事务，允许一组操作被原子地执行。
- - - - 2.cache.put(req,res)：把请求当成key,并且把对应的响应存储起来
- - - - 3.cache.add(url)：根据url发起请求，并且把响应结果存储起来
- - - - 4.cache.addAll(urls)：抓取一个url数组，并且把结果都存储起来
- - - - 5.cache.match(req)：获取req对应的response

- - 2.离线缓存
- - - 1.Caches 中已经缓存了我们需要的静态资源
- - - 2.当请求失败的时候，就可以去缓存中读取对应的数据了
- - - 3.通过event.respondWith(response) 可以控制响应的内容
- - - 代码示例：
- - - ```js
      // 缓存名称
      const CACHE_NAME = 'my-cache-v3';
      // 用于 缓存内容
      self.addEventListener('install', async (event)=> {
      // 开启一个cache, 得到一个cache对象
      const cache = await caches.open(CACHE_NAME)
      // cache对象就可以存储资源
      await cache.addAll([
      "/", //这里踩坑 不能缓存 /index.html ,否则刷新页面会404，直接 / 就行了
      "/images/aiqiyi.png",
      "/manifest.json",
      "/index.css"

      ]);
      await self.skipWaiting();
      })

      // 用于清除旧的缓存
      self.addEventListener('activate', async (event) =>{
      // 会清除掉旧的资源
      // 获取
      const keys = await caches.keys();
      for(const key in keys){
      // 如果key不等于CACHE_NAME，就删除掉
      if(keys[key] !== CACHE_NAME){
      await caches.delete(keys[key]);
        }
      }
      await self.clients.claim();
      })

      // 用于拦截请求
      // 判断资源是否能够请求成功，如果请求成功，就响应成功的结果，如果断网了，请求失败了，读取caches中的资源
      self.addEventListener('fetch', (event)=> {
      // 请求对象
      const request = event.request;
      // 给浏览器响应
      event.respondWith(networkFirst(request))
      console.log(event.request.url);
      })
      // 定义网络优先方法
      async function networkFirst(req) {
      // 先从网络读取资源
      try{
      const fresh =  await fetch(req)
      return fresh;
      }catch (error){
      // 如果读取失败，从caches中读取资源
      const cache = await caches.open(CACHE_NAME)
      const cached = await  cache.match(req)
      return cached
      }
      }
      ```
      
- #### 10.notification API
- - 1.[Notification API](https://developer.mozilla.org/zh-CN/docs/Web/API/Notification)基本使用
- - - 1.Notifications API 的通知接口用于向用户配置和显示桌面通知。
- - - 2.Notification.permission 可以获取当前用户的授权情况：
- - - - - 1.granted：用户允许接收通知
- - - - - 2.denied：用户拒绝接收通知
- - - - - 3.default：默认的，用户未授权；
- - - 3.通过Notification.requestPermission()方法可以请求用户授权
- - - 4.通过new Notification('title',{body:',icon:')可以显示通知
- - - 5.在授权通过的情况下，可以在service worker中通过self.registration.showNotification('title',{body:msg',icon:xxx')来显示通知
- - 2.案例代码：
- - - ```html
      <script>
      // 注册 service worker
       window.addEventListener('load', function () {
      // 判断浏览器是否支持
      if ('serviceWorker' in navigator) {
       // 使用 try catch 捕获异常
      try{
       // 注册 service worker
       navigator.serviceWorker.register('./sw.js').then(function (registration) {
        console.log('service 注册成功', registration)
        })
      }catch (e) {
        console.log('service 注册失败', e)
        }
      }
      })
      //  判断用户是否允许通知
      if(Notification.permission === 'default'){
      // 询问用户是否开启通知
        Notification.requestPermission()
      }
      // 如果用户进来发现没有网络 发送给用户通知
      // if(!navigator.onLine){
      //     console.log(123)
      //     new Notification('提示！',{body: '网络连接失败！'})
      // }
      // 监听网络连接给提示
       window.addEventListener('online',()=>{
          new Notification('提示！',{body: '网络已连接！'})
       })
      // 监听网络断开给提示
       window.addEventListener('offline',()=>{
          new Notification('提示！',{body: '网络连接失败！'})
       })
      </script>
      ```
      
- #### 11.缓存策略
- - 1.对于不同的数据，需要不同的缓存策略
- - 2.本地的静态资源，缓存优先
- - 3.对于需要动态更新的数据，网络优先
- - 4.避免缓存跨域资源
- - - 1.由于更新机制的问题，如果Service worker 缓存了错误结果，将会对web应用造成灾难性后果。我们必须小心翼翼的检查网络返回是否准确。
- - - 2.一种常见的做法是只缓存满足如下条件的结果：
- - - - 1.响应状态码为200；避免缓存304、404、50x等常见结果。
- - - - 2.响应类型为basic或者cors;即只缓存同源、或者正确地跨域请求结果；避免缓存错误的响应和不正确的跨域请求响应（opaque）
- - - - ```js
         const CACHE_NAME = 'v1';
         self.addEventListener('fetch', async function (event) {
           // 只缓存同源的内容
         cosnt req = event.request;
          // 获取url对象
         const url = new URL(req.url);
         // 判断是否同源
          // 如果不同源 直接返回
          if(url.origin !== location.origin){
              return;
            } 
           // 判断是静态资源还是动态资源
          if(req.url.includes('/api')){
             // 如果动态资源 网络优先
             await event.respondWith(networkFirst(event));
            } else{
             // 如果静态资源 缓存优先
             await event.respondWith(cacheFirst(event));
           }  
         })
        
         // cache 优先，一般适用于静态资源
          async function cacheFirst(event) {
            const req = event.request;
            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match(req);
            return cachedResponse || await fetch(req);
          }
          // 网络优先，一般适用于动态数据
          async function networkFirst(event) {
             const req = event.request;
             const cache = await caches.open(CACHE_NAME);
             try{
                  const response = await fetch(req);
                  // 把响应的备份存储到缓存中
                  cache.put(req, response.clone());
                   return response;
                }catch (e){
                  return await cache.match(req); 
               }
          }
          // 如果网络断开，则使用缓存
          async function offlineFirst(event) {
            const req = event.request;
            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match(req);
          }
        ```

