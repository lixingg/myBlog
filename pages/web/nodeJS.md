## nodeJS 专栏

### 1.什么是nodeJS?

- nodeJS是一个开源的，跨平台的JavaScript运行时环境。通俗的将，nodeJS就是一款应用程序，是一款软件，它可以让JavaScript运行在服务端。
- nodeJS作用： 开发服务器应用 、开发工具类应用 、开发桌面端应用

### 2.nodeJS的安装

- #### 1.应用程序安装
-
    - 1.下载地址：[国外网站](https://nodejs.org/en/download/)、[国内网站](https://nodejs.cn/download/)
    - 2.按照步骤安装即可
    - 3.安装完成后，在命令行输入node -v，如果出现版本号，则说明安装成功。

- #### 2.手动配置安装
-
    - 1.下载地址：[国外网站](https://nodejs.org/en/download/)、[国内网站](https://nodejs.cn/download/)
    - 2.解压下载的文件，将解压后的文件夹重命名为nodejs
    - 3.配置环境变量
    - 4.在系统变量中新建一个NODEJS_HOME，值为nodejs的安装路径
    - 5.在系统变量中新建一个Path，在变量值的最前面添加%NODEJS_HOME%\
    - 6.在命令行中输入node -v，如果出现版本号，则说明配置成功。

- #### 3.nvm进行安装（管理多个版本） 推荐
-
    - 1.下载地址：[官方网站](https://github.com/coreybutler/nvm-windows/releases)，
      [百度云资源](https://pan.baidu.com/s/1eWGJa43lDEpBkbpYjhmmYQ) 提取码: 363q （nvm-setup.exe）
    - 2.注意：安装之前先卸载（删除）现有的node!!!
    - 3.按照步骤安装即可，安装过程中需要切换安装路径，选择要安装的位置即可，一个是nvm的安装位置，一个是node的安装位置
    - 3.安装完成后，在命令行输入nvm -v，如果出现版本号，则说明安装成功。
    - 4.配置镜像地址
    -
        - 1.在命令行中输入nvm node_mirror https://npm.taobao.org/mirrors/node
        - 2.在命令行中输入nvm npm_mirror https://npm.taobao.org/mirrors/
    - 4.使用nvm命令
    -
        - 1.nvm list 查看已安装的node版本
        - 2.nvm install 版本号 安装指定版本的node
        - 3.nvm use 版本号 切换到指定版本的node
        - 4.nvm uninstall 版本号 卸载指定版本的node
        - 5.nvm ls-remote 查看远程服务器上可用的版本
        - 6.nvm version 查看当前的版本
        - 7.nvm root 查看当前的安装路径
        - 8.nvm version-node 查看当前的node版本
        - 9.nvm version-npm 查看当前的npm版本
        - 10.nvm version-arch 查看当前的系统架构
        - 11.nvm version-lts 查看当前的lts版本
        - 12.nvm version-latest 查看当前的最新版本
        - 13.nvm install-latest-npm 安装最新版本的npm
        - 14.nvm reinstall-packages 重新安装全局包
        - 15.nvm uninstall-packages 卸载全局包
        - 16.nvm on 启用node.js版本管理
        - 17.nvm off 禁用node.js版本管理
        - 18.nvm proxy 查看当前的代理设置
        - 19.nvm node_mirror [url] 设置或者查看node镜像地址
        - 20.nvm npm_mirror [url] 设置或者查看npm镜像地址

- #### 3.nrm管理镜像地址
    - 1.nrm是什么
    -
        - nrm是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换
    - 2.安装
    -
        - 1.npm install -g nrm
    - 3.使用
    -
        - 1.nrm ls 查看可选的镜像源地址
        - 2.nrm use 镜像源名称 切换指定的镜像源
        - 3.nrm test 查看当前镜像源的响应时间
        - 4.nrm home 查看指定镜像源的地址
        - 5.nrm add 镜像源名称 镜像源地址 添加新的镜像源
        - 6.nrm del 镜像源名称 删除指定的镜像源
        - 7.nrm current 查看当前的镜像源
        - 8.nrm help 查看帮助
        - 9.nrm version 查看nrm版本

### 3.命令行工具

- #### 1.CMD常用命令
    - 1.cd 目录名 进入指定目录
    - 2.cd .. 返回上一级目录
    - 3.cd ../.. 返回上两级目录
    - 4.dir 查看当前目录下的所有文件
    - 5.dir /s 列出当前目录下的所有文件和子目录，包括隐藏文件
    - 5.cls 清屏
    - 6.md 目录名 创建一个文件夹
    - 7.rd 目录名 删除一个文件夹
    - 8.del 文件名 删除一个文件
    - 9.echo 内容 输出内容

- #### 2.运行node.js文件
    - 1.命令行工具切换到文件的所在目录，然后执行： node test.js
    - 2.自动补全功能：输入文件的部分名称然后按tab键自动补全

### 4.模块API

- #### 1.注意事项：

    - 1.nodeJs是不能使用浏览器API，例如DOM和BOM等，只能使用nodeJs内置的API
    - 2.可以使用setTimeout()和setInterval()方法
    - 3.nodeJs中没有window对象，但是可以使用顶级对象 global | globalThis访问顶级对象
    - 4.nodeJs中没有document对象，但是可以使用process对象
    - 5.nodeJs中没有console对象，但是可以使用console.log()方法
    - 6.nodeJs中没有alert()方法，但是可以使用process.stdout.write()方法

- #### 2.Buffer
    - 1.Buffer概念：
        - Buffer是nodeJs全局变量，俗称缓冲区，是一个类似于Array的对象，用于表示固定长度的字节序列，
          换句话说，Buffer就是一段固定长度的内存空间，用于处理二进制数据。

    - 2.特点：
        - 1.Buffer的大小一旦确定就不能修改
        - 2.Buffer性能较好，可以直接对计算机内存将进行操作
        - 3.每个元素的大小为1字节（byte）

    - 3.创建Buffer：
        - 1.Buffer.alloc(size[, fill[, encoding]])：创建一个指定大小的Buffer实例，
          所有的元素都为0，如果没有设置fill，则默认填充为0，每次使用内存空间都会清零内存
        - ```js
          const buf = Buffer.alloc(10);
          console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>

          const buf1 = Buffer.alloc(10, 1);
          console.log(buf1); // <Buffer 01 01 01 01 01 01 01 01 01 01>

          const buf2 = Buffer.alloc(10, 1, 'utf-8');
          console.log(buf2); // <Buffer 01 01 01 01 01 01 01 01 01 01>
          ```
        - 2.Buffer.allocUnsafe(size)：创建一个指定大小的Buffer实例，
          但是Buffer实例的元素可能包含敏感数据，每次使用内存空间时不会清零内存，所以不安全
        - ```js
          const buf = Buffer.allocUnsafe(10);
          console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>
          ```
        - 3.Buffer.from(array)：创建一个Buffer实例，
          该实例包含传入的数组中的所有字节
        - ```js
          const buf = Buffer.from([1, 2, 3, 4, 5]);
          console.log(buf); // <Buffer 01 02 03 04 05>
          ```

        - 4.ASII码对照表
        - <img src="/web/ASII.png"  alt="ASII码"/>

    - 5.Buffer 与字符串的转换
        - 1.Buffer 转换为字符串：
            - 1.buf.toString([encoding[, start[, end]]])
            - ```js
              const buf = Buffer.from('hello');
              console.log(buf.toString()); // hello
              console.log(buf.toString('utf-8')); // hello
              console.log(buf.toString('utf-8', 0, 3)); // hello
              ```
            - 2.buf.toJSON()
            - ```js
               const buf = Buffer.from('hello');
               console.log(buf.toJSON()); // { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }
              ```
        - 2.字符串转换为Buffer：
            - 1.Buffer.from(string[, encoding])
            - ```js 
              const str = 'hello';
              const buf = Buffer.from(str);
              console.log(buf); // <Buffer 68 65 6c 6c 6f>
              ```

        - 3.Buffer 获取存储元素
            - 1.buf[index]
            - ```js
              const buf = Buffer.from('hello');
              console.log(buf[0].toString(2)); // 1100001
              ```

        - 4.Buffer 修改存储元素
            - 1.buf[index] = value
            - ```js
              const buf = Buffer.from('hello');
              buf[0] = 100;
              console.log(buf.toString()); // elllo
              ```

        - 5.Buffer 溢出
            - 1.buf[index] = value
            - ```js 
              const buf = Buffer.from('hello');
              buf[0] = 361; // 舍弃高位的数字 0001 0110 1001 => 0110 1001 => 1001001 => 1001001
              console.log(buf) // <Buffer 69 65 6c 6c 6f>
              ```

        - 6.Buffer 中文
        -
            - 1.中文在UTF-8编码下占3个字节
            - ```js
              const buf = Buffer.from('你好');
              console.log(buf); // <Buffer e4 bd a0 e5 a5 bd>
              ```

- #### 3.fs模块
  - fs模块可以实现与硬盘的交互，例如：文件的创建、删除、重命名、移动、还有文件内容的读取、写入以及文件夹的相关操作。
  - fs模块的使用：
    - 1.writeFile异步写入文件
    - ```js
      // 执行同步代码，同步代码执行完在执行异步回调
      // 1.导入fs模块
      const fs = require('fs');
      
      // 2.调用fs.writeFile(文件名, 内容[, 配置(可选)], 回调函数)方法，写入文件
      fs.writeFile('./a.txt', 'hello world', function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('写入成功');
      });
      ```

    - 2.writeFileSync同步写入文件
    - ```js
      // 写入操作执行完再向下执行其他代码
      // 1.导入fs模块
      const fs = require('fs');
      
      // 2.调用fs.writeFileSync(文件名, 内容[, 配置(可选)])方法，写入文件
      try {
        fs.writeFileSync('./a.txt', 'hello world');
        console.log('写入成功');
      } catch (err) {
        console.log(err);
      }
      ```

    - 3.appendFile异步追加文件
    - ```js
      // 执行同步代码，同步代码执行完在执行异步回调
      // 1.导入fs模块
      const fs = require('fs');
      
      // 2.调用fs.appendFile()方法，追加文件
      fs.appendFile('./a.txt', 'hello world', function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('追加成功');
      });
      ```

    - 4.appendFileSync同步追加文件
    - ```js
      // 追加操作执行完再向下执行其他代码
      // 1.导入fs模块
      const fs = require('fs');
      
      // 2.调用fs.appendFileSync()方法，追加文件
      try {
        fs.appendFileSync('./a.txt', 'hello world');
        console.log('追加成功');
      } catch (err) {
        console.log(err);
      }
      ```

    - 5.writeFile、writeFileSync追加写入
    - ```js
      // 在配置项中添加 flag:'a'
      // 1.导入fs模块
      const fs = require('fs');
      
      // 2.调用fs.writeFileSync()方法，追加文件
      try {
        fs.writeFileSync('./a.txt', 'hello world',{ flag:'a'});   // 追加写入
        console.log('追加成功');
      } catch (err) {
        console.log(err);
      }
      
      // 3.调用fs.writeFile()方法，追加文件
      try {
        fs.writeFile('./a.txt', 'hello world',{ flag:'a'}, function (err) {
          if (err) {
            console.log(err);
            return;
          }
          console.log('追加成功');
        });
      } catch (err) {
        console.log(err);
      }
      ```

    - 6.createWriteStream文件流式写入
    - ```js
      // 适用于写入频次较多的场景
      // 1.导入fs模块
      const fs = require('fs');
      
      // 2.创建一个可写流 createWriteStream(文件路径, 配置项)
      const ws = fs.createWriteStream('./a.txt')
      
      // 3.通过可写流写入文件
      ws.write('hello world\r\n');
      ws.write('你好，世界\r\n');
      // 4.关闭通道（可选，加不加都是可以的）
      ws.close();
      ```

    - 7.文件写入应用场景
    - ```js
      // 1.下载文件
      // 2.安装软件
      // 3.保存程序日志，如：git
      // 4.编辑器保存文件
      // 5.视频录制
      // 当需要持久化存储数据的时候，应该想到文件写入
      ```

    - 8.readFile异步读取
    - ```js
      // fs.readFile(path[,options],callback)方法是异步读取文件
      // 参数1：必选参数，字符串，表示文件的路径。
      // 参数2：可选参数，表示以什么编码格式来读取文件。
      // 参数3：可选参数，回调函数，用于接收文件的内容。
      // 返回值：undefind
      // 1.导入fs模块
      const fs = require('fs');
      
      // 2.调用fs.readFile()方法，异步读取文件
      fs.readFile('./a.txt', function (err, data) { 
        if (err) {
          console.log(err);
          return;
        }
      // data 读取类型是 Buffer
        console.log(data.toString());
      });
      ```

    - 9.readFileSync同步读取
    - ```js
      // fs.readFileSync(path[,options])方法是同步读取文件
      // 参数1：必选参数，字符串，表示文件的路径。
      // 参数2：可选参数，表示以什么编码格式来读取文件。
      // 返回值：返回一个字符串，表示文件的内容。
      // 1.导入fs模块
      const fs = require('fs');
      
      // 2.调用fs.readFileSync()方法，同步读取文件
      const data = fs.readFileSync('./a.txt');
      console.log(data.toString()); 
      ```

    - 10.createReadStream流式读取
    - ```js
      // fs.createReadStream(path[,options])方法是创建可读流
      // 参数1：必选参数，字符串，表示文件的路径。
      // 参数2：可选参数，表示以什么编码格式来读取文件。
      // 返回值：返回一个可读流对象。
      // 1.导入fs模块
      const fs = require('fs');
      
      // 2.创建可读流
      const rs = fs.createReadStream('./a.txt', {
        flags: 'r', // 文件操作模式
        encoding: 'utf-8', // 字符编码
        autoClose: true, // 自动关闭文件
        start: 0, // 文件读取的起始位置
        end: 9 // 文件读取的结束位置
      });
      
      // 3.监听流的open事件
      rs.on('open', function () {
        console.log('文件被打开');
      });
      
      // 4.监听流的close事件
      rs.on('close', function () {
        console.log('文件被关闭');
      });
      
      // 5.读取文件内容
      rs.on('data', function (chunk) {
        console.log(chunk); // 分块读取,类型 Buffer
        console.log(chunk.length) // 每块的大小
      });
      
      // 6.监听流的error事件
      rs.on('error', function (err) {
        console.log(err);
      });
      // 7.监听流的end事件（可选）
      rs.on('end', function () {
        console.log('文件读取完成');
      });
      ```

    - 11.读取文件的应用场景
    - ```js
      // 1.电脑开机
      // 2.程序运行
      // 3.编辑器打开文件
      // 4.查看图片
      // 5.播放视频
      // 6.播放音乐
      // 7.git查看日志
      // 8.上传文件
      // 9.查看聊天记录
      // 10. ......
      ```

    - 12.复制文件 （流的方式）
    - ```js
      // 1.创建可读流（配置项选填，可不写）
      const rs = fs.createReadStream('./1.txt', {
        encoding: 'utf-8',
        autoClose: true,
        start: 0,
        end: 9
      });
      
      // 2.创建可写流（配置项选填，可不写）
      const ws = fs.createWriteStream('./2.txt', {
        encoding: 'utf-8',
        autoClose: true
      });
      
      // 3.监听流的open事件
      rs.on('open', function () {
        console.log('文件被打开');
      });
      
      // 4.监听流的close事件
      rs.on('close', function () {
        console.log('文件被关闭');
      });
      // 5.监听流的data事件
      rs.on('data', function (data) {
        console.log(data);
        // 6.将读取到的内容写入到文件中
        ws.write(data);
      });
      // 7.监听流的error事件
      rs.on('error', function (err) {
        console.log(err);
      });
      // 8.监听流的end事件（可选）
      rs.on('end', function () {
        console.log('文件读取完成');
        // 9.关闭文件
        ws.end();
      });
      
      // 使用管道复制文件
      rs.pipe(ws);
      ```

    - 13.文件重命名和移动
    - ```js
      // 1.异步重命名文件 rename(旧文件名, 新文件名, 回调函数)
      // 导入fs模块
      const fs = require('fs');
      // 重命名文件 remove(旧文件名, 新文件名, 回调函数)
      fs.rename('./1.txt', './2.txt', function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('文件重命名成功');
      });
      
      // 移动文件 rename(旧文件名, 新文件名, 回调函数)
      fs.rename('./2.txt', './test/2.txt', function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('文件移动成功');
      });
      // 2.同步重命名文件 renameSync(旧文件名, 新文件名)
      fs.renameSync('./2.txt', './test/2.txt');
      ```

    - 14.删除文件
    - ```js
      // unlink方法删除
      // 1.异步删除文件 unlink(文件路径, 回调函数)
      // 导入fs模块
      const fs = require('fs');
      // 删除文件 unlink(文件路径, 回调函数)
      fs.unlink('./test/2.txt', function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('文件删除成功');
      });
      // 2.同步删除文件 unlinkSync(文件路径)
      fs.unlinkSync('./test/2.txt');
      
      // rm方法删除
      // 1.异步删除文件 rm(文件路径, 回调函数)
      fs.rm('./test/2.txt', function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('文件删除成功');
      });
      // 2.同步删除文件 rmSync(文件路径)
      fs.rmSync('./test/2.txt');
      ```

    - 15.文件夹操作
    - ```js
        // 导入fs模块
        const fs = require('fs');
        // 创建文件夹 mkdir(文件夹路径, 回调函数)
        // 多目录创建只需要在路径中添加即可，例如：./test/a/b/c  
        // 多目录创建需要添加配置参数：{recursive: true}，不是多目录配置项可不加   
        fs.mkdir('./test',{recursive: true}, function (err) {
          if (err) {
            console.log(err);
            return;
          }
          console.log('文件夹创建成功');
        });
      
        // 删除文件夹 rmdir(文件夹路径, 回调函数)（不推荐使用，这个API可能将来会被移除，推荐使用rm方法）
        // 多目录删除只需要添加配置参数即可：{recursive: true}，不是多目录配置项可不加
        fs.rmdir('./test',{recursive: true }, function (err) {
          if (err) {    
                    console.log(err);
            return;
          }
          console.log('文件夹删除成功');
        });
        // rm(文件夹路径, 回调函数)（推荐使用）
        fs.rm('./test',{recursive: true }, function (err) {
          if (err) {    
                    console.log(err);
            return;
          }
          console.log('文件夹删除成功');
        });
        
        // 读取文件夹 readdir(文件夹路径, 回调函数)
        // 回调函数中的files是一个数组，包含文件夹中的所有文件名 
        fs.readdir('./test', function (err, files) { 
          if (err) {
            console.log(err);
            return;
          }
          console.log(files);
        });
      ```

    - 16.查看资源状态
    - ```js
       // 导入fs模块
       const fs = require('fs');
       // stat(文件路径, 回调函数)
       fs.stat('./test.txt', function (err, stats) { 
         if (err) {
           console.log(err);
           return;
         }
         console.log(stats); // 返回一个fs.Stats对象
         console.log(stats.isFile()); // 判断是否是文件
         console.log(stats.isDirectory()); // 判断是否是文件夹
       });
       ```

    - 17.路径补充说明
    - ```js
      // 相对路径问题
      // 相对路径：相对于当前文件所在的路径
      // 例如：./test.txt 或者 test.txt 表示当前文件所在的文件夹下的test.txt文件
      // 生成文件的路径-> 相对路径参照物:命令行的工作目录
      // node .\test\test1.js 生成文件会在 test同级目录下
  
      // 绝对路径：从根目录开始的路径
      // 例如：C:\Users\test.txt 或者 /test.txt 表示C盘下的Users文件夹下的test.txt文件
      // 绝对路径，‘全局变量’: __dirname 表示所在文件的所在目录的绝对路径
      ```
    
- #### 4.path模块  
  - path模块提供了操作路径的功能，例如：路径拼接、获取文件名、获取扩展名等。
  - path模块的使用：
    - 1.resolve()方法：用于拼接规范的绝对路径
    - ```js
      // 导入path模块
      const path = require('path');
      // resolve()方法用于拼接路径
      const pathStr = path.resolve(__dirname,'./test.txt');
      console.log(pathStr); // 输出：C:\Users\test.txt
      ```
      
    - 2.join()方法：用于拼接路径
    - ```js
      // 导入path模块
      const path = require('path');
      // join()方法用于拼接路径
      const pathStr = path.join('a', 'b', 'c', '../', './d', 'e');
      console.log(pathStr); // 输出：a\b\d\e
      ```
      
    - 3.sep()方法：用于获取操作系统的路径分隔符
    - ```js
      // 导入path模块
      const path = require('path');
      // sep()方法用于获取操作系统的路径分隔符
      const sep = path.sep;
      console.log(sep); // 输出：\ 或者 /，取决于操作系统 window为\，linux为/
      ```
      
    - 4.parse()方法：用于将路径字符串解析成对象
    - ```js
      // 导入path模块
      const path = require('path');
      // parse()方法用于将路径字符串解析成对象
      const pathObj = path.parse('a/b/c/d.txt');
      console.log(pathObj); // 输出：{ root: '', dir: 'a/b/c', base: 'd.txt', ext: '.txt', name: 'd' }
      ```
      
    - 5.basename()方法：用于获取路径的基础名称
    - ```js
      // 导入path模块
      const path = require('path');
      // basename()方法用于获取路径的基础名称
      const basename = path.basename('a/b/c/d.txt');// 输出：d.txt
      console.log(basename);
      ```
      
    - 6.dirname()方法：用于获取路径的目录名称
    - ```js
      // 导入path模块
      const path = require('path');
      // dirname()方法用于获取路径的目录名称
      const dirname = path.dirname('a/b/c/d.txt');// 输出：a/b/c
      console.log(dirname);
      ```
      
    - 7.extname()方法：用于获取路径的扩展名
    - ```js
      // 导入path模块
      const path = require('path');
      // extname()方法用于获取路径的扩展名
      const extname = path.extname('a/b/c/d.txt');// 输出：.txt
      console.log(extname);
      ```
    
- #### 5.HTTP协议
  - 1.什么是HTTP协议
    - 超文本传输协议（HyperText Transfer Protocol，简称HTTP）是一种用于传输超文本的协议，它规定了客户端和服务器之间如何通信。
    
  - 2.什么是超文本
    - 超文本就是指页面中除了可以包含文本，还可以包含图片、音频、视频、链接等非文本元素。
    
  - 3.什么是客户端
    - 发送请求的一方，可以是浏览器、手机APP、其他服务器等。
    
  - 4.什么是服务器
    - 接收请求的一方，可以是Web服务器、数据库服务器、文件服务器等。
    
  - 5.窥探HTTP报文：
    - 安装插件：[Fiddler](https://www.telerik.com/fiddler),这里我就不在安装了，需要使用该软件，可以自行百度下载。
    - 打开Fiddler，然后打开浏览器，访问http://www.baidu.com，然后查看Fiddler中的请求和响应。
    
  - 6.请求报文结构
  - <img src="/web/http-header.png" alt="请求报文">
    
  - 7.请求行
  - <img src="/web/http-request-line.png" alt="请求行">
  - 关于请求头更多的介绍，可以查看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)
  
  - 8.请求体
  - 请求体是可选的，只有当请求方法是POST、PUT、PATCH等时，才会包含请求体。
  - 请求体中可以包含用户提交的数据，例如表单数据、JSON数据等。 
  - 请求体的格式由Content-Type请求头指定，常见的格式有：application/x-www-form-urlencoded、multipart/form-data、application/json等。
  - 请求体的数据可以通过req.body获取，例如：
  - ```js
    const http = require('http');
    const server = http.createServer((req, res) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          console.log(body);
          res.end('ok');
        });
      }
    });
    server.listen(3000);
    ```
  - 9.响应报文结构
  - <img src="/web/http-response.png" alt="响应报文">
  - 10.响应行
  - <img src="/web/http-response-line.png" alt="响应行">
  
  
      
      

  
      
      
    
      
 
      

 
