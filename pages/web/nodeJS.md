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

- #### 3.nodeJs编写
- 1.注意事项：
-
    - 1.nodeJs是不能使用浏览器API，例如DOM和BOM等，只能使用nodeJs内置的API
    - 2.可以使用setTimeout()和setInterval()方法
    - 3.nodeJs中没有window对象，但是可以使用顶级对象 global | globalThis访问顶级对象
    - 4.nodeJs中没有document对象，但是可以使用process对象
    - 5.nodeJs中没有console对象，但是可以使用console.log()方法
    - 6.nodeJs中没有alert()方法，但是可以使用process.stdout.write()方法
