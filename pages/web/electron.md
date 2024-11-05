## Electron 专栏

### 1、什么是Electron ?

- [Electron](https://www.electronjs.org/zh/docs/latest/)  是一个跨平台桌面应用开发框架，开发者可以使用：HTML、CSS、JavaScript
  等web技术来开发跨平台的桌面应用，它的本质是结合了Chromium和Node.js，现在广泛用于桌面应用开发。例如：
  微信开发者工具、VSCode、Atom、Slack、Postman、GitKraken、Typora等。

### 2、Electron 的优势

- 1.可跨平台：同一套代码，可以编译到不同平台，例如：Windows、Linux、MacOS。
- 2.上手容易：使用web技术，如HTML、CSS、JavaScript，可以快速上手。
- 3.底层权限：允许应用程序访问文件系统、操作系统等底层功能，从而实现复杂的系统交互。
- 4.社区支持：拥有一个庞大且活跃的社区，开发者可以轻松找到文档、教程和开源库。

### 3、Electron 技术架构
-

- #### 3.1技术架构
    - Chromium: 支持最新特性的浏览器。
    - Node.js:   JavaScript 运行时，可实现文件的读写等。
    - Native APIs: 提供统一的原生界面能力。

- #### 3.2 进程模型

    - <img src="/web/Electron.png">

### 4、搭建工程
- 

  - #### 4.1 创建一个项目文件夹，并初始化项目
  
    ```text
      mkdir electron-demo
      cd electron-demo
      npm init -y
    ```
    ```json lines
    // package.json 文件
      {
        "name": "electron-demo",
        "version": "1.0.0",
        "description": "this is a electron demo", // 为后续能顺利打包，此处要编写描述
        "main": "main.js",
        "scripts": {
          "start": "electron ." // start命令用于启动整个应用
        },
        "keywords": [],
        "author": "lixin", // 为后续能顺利打包，此处要写明作者
        "license": "ISC"
      }
    ```
  - #### 4.2 安装Electron作为开发依赖

    ```bash
      npm install electron -D
    ```

  - #### 4.3 根目录录下创建主进程文件（main.js）

    ```javascript
    /**
    * main.js 运行在应用的主进程上，无法访问web相关API，主要负责：
    * - 控制生命周期
    * - 显示界面
    * - 控制渲染进程
    * - 调用Node.js API
    **/
    const {app, BrowserWindow} = require('electron');
    function createWindow(){
    const win = new BrowserWindow({
    width: 800, // 窗口的宽度
    height: 600, // 窗口的高度
    autoHideMenuBar: true, // 自动隐藏菜单栏
    x:1100, // 窗口的横坐标
    y:0, // 窗口的纵坐标
    awaysOnTop: true, // 窗口总在最前
    })
    // 加载一个远程页面
    win.loadURL('https://www.baidu.com')
    }
    // 当app准备好后，执行createWindow创建窗口
    app.on('ready', () => {
    createWindow()
    })
    ```
  -  关于BrowserWindow的详细配置，请参考[BrowserWindow](https://www.electronjs.org/zh/docs/latest/api/browser-window)
  -  启动应用查看效果
     ```bash
      npm start
     ```
  -  效果如图所示：
  -  <img src="/web/electron-bd.png">

### 5、加载本地页面

-
  -  创建pages/index.html编写内容：
  -  ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>index</title>
        </head>
        <body>
          <h1>Hello Electron</h1>
        </body>
        </html>
     ```
     
  -  修改main.js中加载本地页面
  -  ```javascript
     // 加载一个本地页面
        win.loadFile('./pages/index.html')
     ```
  -  此时开发者工具会报出一个安全警告，需要修改index.html的文件头，配置CSP（Content-Security-Policy）添加如下代码：
  -  ```html
        <meta http-equiv="Content-Security-Policy" 
              content="default-src 'self'; style-src 'self' 'unsafe-inline';img-src 'self' data:;">
     ```
     
  -  上述配置说明：
  - - **1.default-src 'self'**
    - - (1). default-src 配置加载策略，适用于所有未在其他指令中明确指定的资源类型。
    - - (2). 'self' 仅允许从同源的资源加载，禁止从不受信任的外部来源加载，提高安全性。
  - - **2.style-src 'self' 'unsafe-inline'**
  - - - (1). style-src 指定样式表（CSS）的加载策略。
  - - - (2). 'self' 仅允许从同源的资源加载样式表，禁止从不受信任的外部来源加载，提高安全性。
  - - - (3). 'unsafe-inline' 允许加载内联样式表（inline style），提高灵活性。
  - - **3.img-src 'self' data:**
  - - - (1). img-src 指定图片（image）的加载策略。
  - - - (2). 'self' 仅允许从同源的资源加载图片，禁止从不受信任的外部来源加载，提高安全性。
  - - - (3). data: 允许使用 data: URI来嵌入图像，这种URI模式允许将图像数据直接嵌入到HTML或CSS中，而不是通过外部链接引入。
  - - **关于CSP的详细说明请参考
      [MDN-Content-Security-Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy)
      、[Electron Security](https://www.electronjs.org/zh/docs/latest/tutorial/security)**

### 6、完善窗口行为
  -  1.Windows和Linux平台窗口特点是：关闭所有窗口时退出应用。
  -  ```js
        // 当所有窗口都关闭时
        app.on('window-all-closed',()=>{
        // 如果所处平台不是MacOS，则退出应用
          if(process.platform!=='darwin'){
            app.quit()
          }
        })
     ```
  -  2.Mac 应用即使在没有打开任何窗口的情况下也可以保持运行状态，并且在没有窗口可用的情况下激活应用时会打开新的窗口。
  -  ```js
        // 当app准备好后，执行createWindow创建窗口
        app.on('ready',()=>{
            createWindow()
            // 当应用被激活时
            app.on('activate',()=>{
            // 如果没有窗口打开，则创建新窗口
            if(BrowserWindow.getAllWindows().length===0){
              createWindow()
            }
          })
        })
     ```

### 7、配置自动重启
  -  1.安装`nodemon`
  -  ```bash
        npm install -D nodemon
     ```
     
  -  2.修改`package.json`命令
  -  ```json lines
        {
          // ....
         "scripts": {
                  "start": "nodemon --exec electron ."
              }, 
          // ....    
        }
     ```
     
  -  3.配置`nodemon.json`规则
  -  ```json lines
        {
          "ignore": [
            ".git",
            "node_modules",
            "dist"
          ],
          "restartable": "r",
          "watch": ["*.*"],
          "ext": "js,html,css"
        }
     ```
     
  -  4.运行`npm start`命令，即可实现自动重启

### 8、主进程与渲染进程
  -  #### 8.1 主进程
  - -  每个 Electron 应用都由一个单一的主进程，作为应用程序的入口点。主进程在Node.js环境中运行，它具有require 模块和使用所有
       Node.js 模块的能力。在主进程中创建的BrowserWindow 实例将使用Electron框架和Node.js API的能力，主进程的核心就是：
       `使用 BrowserWindow 来创建和管理窗口。`
  -  #### 8.2 渲染进程
  - -  每个 BrowserWindow 实例都对应一个单独的渲染进程，运行在渲染器进程中的代码，必须遵守网页标准，这也就意味着：
       `渲染器进程无权直接访问 require 或 使用任何 Node.js 的API。`
  - -  问题产生：处于渲染器进程的用户界面，该怎样才与Node.js和Electron 的原生桌面功能进行交互？

### 9.Preload 脚本
  -  预加载（preload）脚本是运行在渲染进程中的，但它是在`网页内容加载之前`执行的，这意味者着它具有比普通渲染器代码更高的权限，
     可以访问 Node.js 的API, 同时又可以与网页内容进行安全的交互。
  -  简单的说：他是 `Node.js` 和 `Web API`的桥梁，Preload 脚本可以安全的将部分 Node.js 功能暴露给渲染器进程，从而减少安全风险。
  -  具体文件结构与编码如下：
  -  1.创建`preload.js`文件
  -  ```js
        // preload.js
        const {contextBridge,ipcRenderer} = require('electron')

        contextBridge.exposeInMainWorld('api',{
        version:process.version,
        saveFile:(data)=>{
        ipcRenderer.send('save-file',data)
        },
        readFile: ()=>{
        return ipcRenderer.invoke('file-read')
        
            }
        })
     ```
     
  -  2.在`main.js`中引入`preload.js`
  -  ```js
        // main.js
        const {app, BrowserWindow,ipcMain} = require('electron');
        const path = require('path');
      
        function createWindow(){
        const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        x:1100,
        y:0,
        awaysOnTop: true,
        webPreferences:{ // 引入 preload.js
        preload:path.resolve(__dirname,'./preload.js')
        }
        })

        win.loadURL('https://www.baidu.com')
        // win.loadFile('./pages/index.html')
        }
        
        app.on('ready', () => {
        createWindow()
        app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
        })
        
        app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
        })
     ```

### 10、进程通信（IPC)

  -  #### 10.1 渲染进程 👉 主进程（单向）
  -  -  概述：在`渲染器进程`中`ipcRenderer.send`发送消息，在`主进程`中使用`ipcMain.on`接收消息，从而实现进程间通信。
  -  -  常用于：`在Web 中调用主进程的API`。
  -  -  举个栗子:
  -  -  ```text
            需求：点击按钮，在D盘创建一个文件，文件名为"electron.txt"，文件内容来自于用户输入。
        ```
  -  -  1.页面中添加相关元素。
  -  -  ```html
            <button id="btn">点击我</button>
            <input type="text" id="input">
        ```
  -  -  2.在pages/render.js中添加相关代码(render.js 是渲染器，使用时需要通过javascript标签引入到html文件中)  
  -  -  ```js
            // render.js
            const {ipcRenderer} = require('electron')
            const btn = document.getElementById('btn')
            const input = document.getElementById('input')
            btn.addEventListener('click',()=>{
            const fileName = input.value
            myApi.saveFile(fileName)
            })
        ```
  -  -  3.在preload.js中使用`ipcRenderer.send('信道',参数)`发送消息，与主进程通信。
  -  -  ```js
            // preload.js
           const {contextBridge,ipcRenderer} = require('electron')
            contextBridge.exposeInMainWorld('api',{
            version:process.version,
             // 在preload.js文件中添加一个saveFile方法，用于与主进程通信
            saveFile:(data)=>{
            ipcRenderer.send('save-file',data)
            },
            })
        ```
        
  -  -  4.在主进程中使用`ipcMain.on('信道',(event,参数)=>{})`接收消息，与渲染器进程通信。
  -  -  ```js
            // main.js
            const {app, BrowserWindow,ipcMain} = require('electron');
            const path = require('path');
            const fs = require('fs');
            function writeFile(event,data){
            fs.writeFileSync('D:/hello.txt',data)
            }

            function createWindow(){
            const win = new BrowserWindow({
            width: 800,
            height: 600,
            autoHideMenuBar: true,
            x:1100,
            y:0,
            awaysOnTop: true,
            webPreferences:{
            preload:path.resolve(__dirname,'./preload.js')
            }
            })
            // 在主进程中使用ipcMain.on接收渲染器进程发送的消息
            ipcMain.on('save-file',writeFile)
            // win.loadURL('https://www.baidu.com')
            win.loadFile('./pages/index.html')
            }
            
            app.on('ready', () => {
            createWindow()
            app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) createWindow()
            })
            })
            
            app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') app.quit()
            })
        ```
        
  - #### 10.2 渲染进程  👈👉 主进程 （双向）
    -  概述：渲染进程通过`ipcRenderer.invoke`发送消息，主进程通过`ipcMain.handle`接收消息。
    -  备注：ipcRenderer.invoke的返回值是Promise实例。
    -  常用于：`从渲染器进程调用主进程方法并等待结果`
    -  举个栗子：
    -  ```text
         需求：点击按钮从D盘读取electron.txt中的内容，并将结果呈现到页面上。
       ```
    -  1.页面中添加相关元素，render.js中添加对应的脚本
    -  ```html
        <!--       index.html-->
         <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta http-equiv="X-UA-Compatible" content="IE=edge">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Document</title>
         </head>
         <body>
             <button id="btn">读取文件</button>
             <script src="render.js"></script>
         </body>
         </html>
       ```
    -  ```js 
       // render.js
       const btn = document.getElementById("btn")
        // 因为返回时Promise 需要使用async await 获取返回值
       btn.onclick=async ()=>{
        let data = await myApi.readFile()
         alert(data)
       }

       ```
    -  ```js
       // preload.js
        const {contextBridge,ipcRenderer} = require('electron')

        contextBridge.exposeInMainWorld('api',{
        version:process.version,
       // 在preload.js文件中 定义一个readFile方法用来调用 ipcRenderer.invoke
        readFile: ()=>{
         return ipcRenderer.invoke('file-read')
         }
        })
       ```
    -  ```js
       // main.js
       const {app, BrowserWindow,ipcMain} = require('electron');
       const path = require('path');
       const fs = require('fs');

    
       function readFile(){
       const res = fs.readFileSync('D:/hello.txt').toString()
       console.log('res@@@',res)
       return res;  
       }
       function createWindow(){
        const win = new BrowserWindow({
          width: 800,
          height: 600,
          autoHideMenuBar: true,
          x:1100,
          y:0,
          awaysOnTop: true,
          webPreferences:{
          preload:path.resolve(__dirname,'./preload.js')
          }
       })
       // 在main.js文件中 定义一个readFile方法用来调用 ipcMain.handle
       ipcMain.handle('file-read',readFile)
       // win.loadURL('https://www.baidu.com')
        win.loadFile('./pages/index.html')
       }
       ```
  
  - #### 10.3 主进程到👉渲染进程
  - 概述：主进程使用`win.webContents.send`发送消息，渲染进程使用`ipcRenderer.on`监听消息。
  - 常用于：`从主进程主动发送消息给渲染进程`
  - 代码：
    - ```js
      // main.js
       const {app, BrowserWindow,ipcMain} = require('electron');
       const path = require('path');
       const fs = require('fs');

    
       function readFile(){
       const res = fs.readFileSync('D:/hello.txt').toString()
       console.log('res@@@',res)
       return res;  
       }
       function createWindow(){
        const win = new BrowserWindow({
          width: 800,
          height: 600,
          autoHideMenuBar: true,
          x:1100,
          y:0,
          awaysOnTop: true,
          webPreferences:{
          preload:path.resolve(__dirname,'./preload.js')
          }
       })
       // 在main.js文件中 定义一个readFile方法用来调用 ipcMain.handle
        setTimeout(()=>{
         win.webContents.send('message','hello')
        },6000)
       // win.loadURL('https://www.baidu.com')
        win.loadFile('./pages/index.html')
       }
       ```
    - ```js
       // preload.js
        const {contextBridge,ipcRenderer} = require('electron')

        contextBridge.exposeInMainWorld('api',{
        version:process.version,
        // 在preload.js文件中 定义一个readFile方法用来调用 ipcRenderer.invoke
        getMessage: (callback)=>{
        return ipcRenderer.on('message',callback)
        }
        })
      ```
      
    - ```js
        // render.js
        window.onload=()=>{
          myApi.getMessage(logMessage)
        }
        // 传入回调
        function logMessage(event,str){
        console.log('str@@@',str)
        }
      ```
      
### 11、打包应用
-  使用 `electron-builder`打包应用
-  1.安装 `electron-builder`
-  ```bash
    npm install electron-builder -D
   ```
   
-  2.修改 `package.json`
-  ```json lines
    {
    "name": "electron_test", // 应用名称
    "version": "1.0.0", // 
    "description": "Electron_test", // 应用描述
    "main": "main.js", // 应用程序的入口文件
    "scripts": {
    "start": "nodemon --exec electron .", // 启动应用
    "build": "electron-builder" // 
    },
    "build": {
    "appId": "com.example.electron_test", // 应用程序的唯一标识符
      "win": { 
        "icon": "./logo.ico", // 应用图标
      "target": [
       {
      "target": "nsis", // 指定使用 NSIS 作为安装程序格式
        "arch": ["x64"] // 生成 64 位安装包
        }
       ]
      },
      "nsis": {
        "oneClick": false, // 设置为false 使安装程序显示安装向导界面，而不是一键安装
        "perMachine": true, // 允许每台机器安装一次，而不是每个用户都安装
        "allowToChangeInstallationDirectory": true // 允许用户更改安装目录
        }
      },
      "author": "lixin", // 作者信息
      "license": "ISC", // 许可证信息
      "devDependencies": {
      "electron": "^31.1.0", // 开发依赖中的 Electron 版本
      "electron-builder": "^24.13.3", // 开发依赖中的 electron-builder 版本
      "nodemon": "^3.1.4" // 开发依赖中的 nodemon 版本
      }
    }
   ```

### 12、[electron-vite](/pages/web/electron-vite.md)

### 13、[electron-vue](/pages/web/electron-vue.md)