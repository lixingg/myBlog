## Uni-app 专栏
### 1、uni-app简介
- 1.uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，
可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

- 2.uniapp是一个框架
- - vue.js + 微信小程序 = uniapp

### 2、选择uniapp的原因
- 1.优点：
- - - 1.跨平台，一套代码，多端运行，一次开发，多端运行
- - - 虽然要走条件编译
- - - 2.节省时间
- - 2.缺点：
- - - 1.性能比原生差（不如 flutter、react-native）
- - - 2.上架有问题
- - 3.适用场景：
- - - 1.公司定位：中小公司
- - - 2.花钱少，时间少

### 3、安装HBuilderX
- 1.下载地址：https://www.dcloud.io/hbuilderx.html
- 2.安装：一路下一步
- 3.打开HBuilderX
- 4.创建项目：选择uni-app，填写项目名称，选择模板，创建项目
- 5.运行项目：点击运行按钮，选择运行平台，点击运行


### 4、目录结构
- pages：页面文件存放目录
- static：静态资源目录（图片、字体、css等）
- unpackage：存放打包文件
- App.vue：根组件（不含template）
- index.html：入口文件
- main.js：js入口文件
- manifest.json：应用配置文件
- pages.json：页面配置文件
- uni.scss：全局样式文件

### 5、配置外部浏览器及各种小程序模拟器
- 1.配置外部浏览器：点击运行菜单，点击运行到小程序模拟器，点击运行设置，打开settings.json文件，浏览器运行配置选择浏览器安装路径。
- 2.配置各种小程序模拟器：点击运行菜单，点击运行到小程序模拟器，点击运行设置，打开settings.json文件，小程序模拟器运行配置选择小程序模拟器安装路径。
- - 微信小程序：微信开发者工具安装地址： https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
- - 支付宝小程序：支付宝小程序开发者工具安装地址：https://open.alipay.com/channel/miniIndex.htm
- - 百度小程序：百度开发者工具安装地址：https://smartprogram.baidu.com/docs/develop/devtools/devtools/
- - QQ小程序：QQ小程序开发者工具安装地址：https://q.qq.com/wiki/develop/miniprogram/dev/devtools/download.html
- - 360小程序：360小程序开发者工具安装地址：https://mp.360.cn/developer/index.html
- - 快手小程序：快手小程序开发者工具安装地址：https://mp.kuaishou.com/
- - 抖音小程序：字节小程序开发者工具安装地址：https://microapp.bytedance.com/
- - 京东小程序：京东小程序开发者工具安装地址：https://mp.jd.com/
- - 小米小程序：小米开发者工具安装地址：https://dev.mi.com/console/appList/
- - 华为小程序：华为开发者工具安装地址：https://developer.huawei.com/consumer/cn/service/josp/agc/index.html
- - OPPO小程序：OPPO开发者工具安装地址：https://open.oppomobile.com/
- - VIVO小程序：VIVO开发者工具安装地址：https://dev.vivo.com.cn/
- - 魅族小程序：魅族开发者工具安装地址：https://open.meizu.com/
- - 飞书小程序：飞书开发者工具安装地址：https://open.feishu.cn/app
- 3.开发工具调试
- - 1.点击运行菜单，点击运行到小程序模拟器，选择微信开发者工具，点击确定。
    （如果打不开报错：[微信小程序开发者工具] × initialize ，选择开发者工具-设置-安全-打开服务端口）重启

### 6、创建页面
- 1.在pages文件夹下创建页面，右键pages文件夹，选择新建页面，输入页面名称，点击确定。
- 2.在pages.json文件中，pages选项中添加页面的路径。
- 3.在pages文件夹下创建的页面，会自动生成对应的页面文件（vue组件）。

### 7、内置组件
- 1.内置组件：uni-app中提供了一些内置组件，可以直接使用。
- - view：相当于div ，用于布局 
- - text：相当于span，用于文本显示  
- - image：相当于img，用于图片显示 
- 
 

### 8、条件编译
- 1.条件编译：根据平台的不同，执行不同的代码
- 2.条件编译的写法：
- - - #ifdef 条件
- - - - 条件编译代码
- - - #endif
- 3.条件编译的条件：
- - - - H5：h5
- - - - 微信小程序：mp-weixin
- - - - App：app-plus
- - - - nvue：app-nvue
- - 4.条件编译的例子：
- - - ```html
      <!--      #ifdef H5--> 
      <div>h5</div>
      <!--      #endif-->
      ```
      ```js
      // #ifdef H5
      console.log('h5')
      // #endif
      ```
      ```css
      /* #ifdef H5 */
      div{
        color: red;
      }
      /* #endif */
      ```
- - 5.[条件编译详情](https://uniapp.dcloud.io/platform?id=条件编译)
- - 6.条件编译的注意事项：
- - - 1.app-plus 是无法判断是ios还是安卓的 
- - - - 解决办法：uni.getSystemInfoSync().platform;获取设备类型 做if判断

### 9、微信小程序打包发布上线流程
- 1.[微信公众号](https://mp.weixin.qq.com/)注册小程序账号
- 2.扫码登录后台管理
- 3.点击左侧菜单栏中的“开发”选项，选择“开发设置”，找到“AppID”字段，复制AppID
- 4.在HBuilderX中，点击菜单栏中的“发行”，选择“小程序-微信”，输入AppID，点击“发行”
- 5.在微信开发者工具中，打开项目，点击“上传”，输入版本号和版本描述，点击“上传”
- 6.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“提交审核”，输入审核信息，点击“提交审核”
- 7.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“审核状态”，查看审核结果
- 8.审核通过后，在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“发布”，输入版本号和版本描述，点击“发布”
- 9.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“线上版本”，查看已发布的版本
- 10.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“版本更新”，更新小程序版本
- 11.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“版本回退”，回退小程序版本
- 12.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“版本重命名”，重命名小程序版本
- 13.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“版本删除”，删除小程序版本
- 14.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“版本下载”，下载小程序版本
- 15.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“版本预览”，预览小程序版本
- 16.在微信开发者工具中，点击左侧菜单栏中的“版本管理”，选择“版本回滚”，回滚小程序版本



### 1、uniapp安卓本地打包成apk

#### 1.1 环境准备

-  1.HBuilderX最新版
  -  2.与HBuilderX版本对应版本的“Android 离线SDK - 正式版”， 下载见：https://nativesupport.dcloud.net.cn/AppDocs/download/android.html
     (使用HBuilderX 安装 HBuilderX版本对应的离线SDK，下载成功后解压压缩包后打开，可根据个人习性，
  将HBuilder-Integrate-AS文件夹拷贝至其他专门存放打包文件的文件夹内)
-  3.Android Studio，官方下载地址：https://developer.android.google.cn/studio?hl=zh-cn
-  4.java1.8环境

#### 1.2 申请Appkey

-  1.登录DCloud开发者中心，https://dev.dcloud.net.cn/
-  2.点击“我的应用”，点击“创建应用”
-  3.填写应用名称，选择应用平台，点击“创建应用”
-  4.点击“应用详情”，点击“应用密钥”
-  5.点击“查看密钥”，复制AppKey和AppSecret;

#### 1.3 创建项目

-   1.3.1使用HBuilderX创建uniapp项目

-   1.3.2项目创建好后可以在“开发者中心-我的应用”中查看到该应用和Appid

  -   1.3.3Android平台信息配置与离线打包key获取
      点击应用名称进入管理页面 -> 点击各平台信息 -> 点击新增 -> 平台选择Android App，版本选择正式版，输入包名（自定义即可），
      和证书指纹信息中的SHA1，SHA256值，然后点击提交 -> 提交后点击创建离线打包key -> 创建好之后然后点击查看 -> 
      打码部分就是我们需要的离线打包key，之后需要用到

#### 1.4 App配置
    
-   1.4.1 配置manifest.json文件
-   1.4.2 配置需要支持的CPU类型，我这里全勾了，关于该配置的说明见官网：https://ask.dcloud.net.cn/article/36195
-   1.4.3 配置App图标，在manifest.json文件中配置，关于该配置的说明见官网：https://ask.dcloud.net.cn/article/36194
-   1.4.4 配置App名称，在manifest.json文件中配置，关于该配置的说明见官网：https://ask.dcloud.net.cn/article/36193
-   1.4.5 配置App版本号，在manifest.json文件中配置，关于该配置的说明见官网：https://ask.dcloud.net.cn/article/36192
-   1.4.6 配置App版本名称，在manifest.json文件中配置，关于该配置的说明见官网：https://ask.dcloud.net.cn/article/36191
-   1.4.7 配置App启动页，在manifest.json文件中配置，关于该配置的说明见官网：https://ask.dcloud.net.cn/article/36190

#### 1.5 生成本地打包App资源

-   1.5.1 打开HBuilderX，点击菜单栏的“发行” -> 点击“原生APP本地打包” -> 生成本地打包app资源 
    -> 生成的资源所在路径如下：（我这里unpackage/resources/_UNI_AFC1990就是生成的资源）

#### 1.6 使用Android Studio将资源打包成apk

-  1.6.1 打开Android Studio，点击菜单栏的“文件” -> 点击“打开”，打开“Android 离线SDK”中的“HBuilder-Integrate-AS”项目
-  1.6.2 将HBuilder-Integrate-AS\simpleDemo\src\main\assets\apps_UNI_A删除，替换为HBuilderX生成的资源（_UNI_AFC1990）
-  1.6.3 打开HBuilderX，点击菜单栏的“发行” -> 点击“原生APP本地打包” -> 生本打包app资源
-  1.6.4 修改simpleDemo/src/main/AndroidManifest.xml中的包名为dcloud里配置的包名
    1.package="UNI.AFC1990"
    2.android:label="HBuilder-Integrate-AS"(application标签)
    3.android:label="HBuilder-Integrate-AS"(activity标签)
    4.android:value="离线打包key"(开发者登录申请的那个离线key)
-  1.6.5 修改simpleDemo/src/main/assets/data/dcloud_control.xml中的appid为你的appid（我这里是__UNI__AFC1990）
-  1.6.6 修改simpleDemo/build.gradle中的applicationId为包名，我这里是（UNI.AFC1990）
-  1.6.7 修改simpleDemo\src\main\res\values\strings.xml的app_name为你需要的app名称

#### 1.7 配置构建使用的jdk版本

-  1.7.1 打开Android Studio，点击菜单栏的“文件” -> 点击“设置” ->点击构建、执行、部署 -> 构建工具 -> Gradle -> Gradle JVM 
    -> 选择本地JDK1.8版本 -> Gradle 用户目录可以配置自己想要的盘目录中 -> 点击应用 确定

#### 1.8 打包

-  1.8.1 打开Android Studio，点击菜单栏的“构建” -> 点击“Generate singled Bundle /APK” -> 选中APK -> 填写证书路径，别名，密码等信息
   -> 点击Next，选中release，点击Create开始打包 -> 打包成功之后生成的apk文件在simpleDemo/release路径下 
- 
-  HBuilderX官方（App离线打包）： https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android.html#versioncode

### 2.0 Android Studio如何使用本地的gradle；gradle-6.5-all.zip和gradle-6.1.1-all.zip下载

#### 2.1 下载gradle-6.5-all.zip和gradle-6.1.1-all.zip 通过迅雷下载快

-  2.1.1 通过迅雷下载快，下载地址：https://github.com/gradle/gradle-distributions/releases/download/v6.5.0/gradle-6.5-all.zip
-  2.1.2 链接 ：https://pan.baidu.com/s/1lqC5X4GQIGAOcDr76TnGyw 提取码 ：hehr （网上看的）

#### 2. OK，下载完压缩包后开始操作：
-   1.降压缩放放在 .gradle/wrapper/dists 目录下 解压；
-   2.打开HBuilder-Integrate-AS，gradle/gradle-wrapper.properties，修改distributionUrl=file:/// + 压缩包路径，
    也就是步骤2中存放压缩包的路径；
-   3.HBuilder-Integrate-AS 中点击 File -> Settings -> Gradle ，修改分发为本地安装，并将刚刚解压的文件夹路径填上。
-   4.点击 File -> Invalidate Caches / Restart，重启AS，等待gradle下载完成。

### 3.0 配置gradle

### 自己写的仿抖音app(无毒可以扫码下载安装玩，特此声明仅用于学习)
-  <img src="/douPlayer.png">

###