## Uni-app 专栏

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