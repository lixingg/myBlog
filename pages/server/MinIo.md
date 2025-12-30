## MinIO 完整使用指南
### 一、MinIO 简介
#### 1. 定义与定位
- MinIO 是一款高性能、兼容 S3 协议的对象存储系统，专为大规模 AI/ML、数据湖和数据库工作负载设计。它采用软件定义架构，
可运行于任意云环境或本地基础设施，为人工智能系统提供数据存储与支持。
#### 2. 支持的数据类型
- 文本数据：新闻报道、社交媒体文章、博客等
- 语音数据：音频形式存储的数据（如语音 mp3 文件）
- 图像数据：各类图片文件
- 视频数据：各类视频、电影文件
- 非结构化数据：无明确结构的数据（如社交评论、日志文件等）
#### 3. 核心特性
- 兼容亚马逊 S3 云存储服务接口
- 双重许可机制：
- 开源 GNU AGPL v3（完全免费）
- 商业企业许可证（收费）
- 基于对象存储架构：以对象为单位处理、存储和检索数据，每个对象包含数据本身及元数据（如用户 account、存储桶 bucket、存储桶索引 bucket index 等）
- 数据读写方式：通过 HTTP/HTTPS 协议的 API 进行
#### 4. 相关链接
- 官网：https://min.io/
- 中文官网：http://minio.org.cn/
- Github：https://github.com/minio
- Gitee：https://gitee.com/mirrors/minio
- 官方文档：https://min.io/docs/minio/linux/developers/minio-drivers.html
### 二、MinIO 环境部署
#### 1. 直接部署（Linux 环境）
- （1）下载与权限配置
```bash
# 下载 MinIO 服务器端程序
wget https://dl.min.io/server/minio/release/linux-amd64/minio

# 赋予可执行权限（二选一）
chmod +x minio
chmod 744 minio
```
- （2）启动与管理
```bash
# 基础启动（指定存储目录和控制台端口）
MINIO_ROOT_USER=admin MINIO_ROOT_PASSWORD=password ./minio server /mnt/data -console-address ":9001"
# 或简化启动
./minio server /mnt/data --console-address ":9001"

# 后台启动
./minio server /mnt/data --console-address ":9001" &

# 查询 MinIO 进程
ps -ef | grep minio

# 停止 MinIO
# 后台启动进程：kill 进程号（pid）
# 前台启动进程：ctrl + c
```
#### 2. Docker 部署（Linux 环境）
- （1）Docker 安装与配置
```bash
# 检查是否已安装 Docker
yum list installed | grep docker

# 卸载旧版本 Docker（如需）
yum remove docker.x86_64 -y
yum remove docker-client.x86_64 -y
yum remove docker-common.x86_64 -y

# 安装最新版 Docker
yum install yum-utils -y
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# 查看 Docker 版本（验证安装）
docker --version
docker version
docker -v
```
- （2）Docker 服务管理
```bash
# 启动 Docker
systemctl start docker 或 service docker start

# 停止 Docker
systemctl stop docker 或 service docker stop

# 重启 Docker
systemctl restart docker 或 service docker restart

# 查看 Docker 运行状态
systemctl status docker 或 service docker status

# 查看 Docker 进程
ps -ef | grep docker

# 查看 Docker 系统信息
docker info

# 查看 Docker 帮助信息
docker --help
# 查看特定命令帮助
docker [command] --help
```
-  （3）MinIO 容器部署
```bash
# 搜索 MinIO 镜像
docker search minio

# 拉取 MinIO 镜像
docker pull minio/minio

# 启动 MinIO 容器（映射端口 9000：API 端口，9001：控制台端口）
docker run -p 9000:9000 -p 9001:9001 minio/minio server /mnt/docker/data --console-address :9001

# 查看已安装镜像
docker images

# 删除 MinIO 镜像（如需）
docker rmi minio/minio
```
#### 3. Windows 环境部署
```bash
# 1. 下载 Windows 版 MinIO
# 下载地址：https://dl.min.io/server/minio/release/windows-amd64/minio.exe

# 2. 启动 MinIO 服务
# 进入 minio.exe 所在目录，执行以下命令（指定数据存储目录）
minio.exe server D:\dev\MinIO\data

# 3. 访问 Web 管理后台
# 浏览器输入：http://localhost:9000/
# 默认用户名/密码：minioadmin/minioadmin
```
### 三、Spring Boot 集成 MinIO 开发
#### 1. 开发环境准备
- MinIO 服务器：采用 Go 语言开发
- 支持的客户端编程语言：Go、Python、Java、.NET、JavaScript、Haskell、C++ 等
#### 2. 项目搭建步骤
- （1）创建 Spring Boot 项目
- - 常规 Spring Boot 项目创建流程（可通过 Spring Initializr 快速构建）
- （2）添加依赖
```xml
<dependency>
    <groupId>io.minio</groupId>
    <artifactId>minio</artifactId>
    <version>8.5.9</version>
</dependency>
```
- （3）配置文件
- 根据项目需求配置 MinIO 连接信息（示例）
```yaml
minio:
  endpoint: http://localhost:9000
  accessKey: minioadmin
  secretKey: minioadmin
  bucketName: myfile
```
- （4）核心概念
- - Bucket：存储 Object 的逻辑空间，相当于顶层文件夹，不同 Bucket 数据相互隔离
- - Object：存储到 MinIO 的基本对象，相当于文件
- （5）MinioClient 常用 API
- 
| API 方法 | 功能描述 |
| :------ | :------ |
| bucketExists() | 检查指定存储桶是否存在，返回布尔值 |
| makeBucket()	| 创建新存储桶，需指定存储桶名称 |
| listBuckets()	| 列出用户有权访问的所有存储桶，返回存储桶列表 |
| removeBucket() | 删除已存在的存储桶，删除失败抛出异常 |
| putObject() | 上传文件到指定存储桶 |
| statObject() | 检查指定对象（文件）的状态 |
| getPresignedObjectUrl() | 生成对象的签名 URL，支持 HTTP 访问 |
| getObject() | 从指定存储桶下载文件 |
| listObjects() | 列出指定存储桶中的所有对象 |
| removeObject() | 删除指定存储桶中的对象，需指定存储桶名称和对象键 |

- （6）常见问题解决
 - 报错：The difference between the request time and the server's time is too large.
 - 解决方法：
```bash
# 安装时间同步工具
yum install ntpdate -y
# 同步网络时间
ntpdate pool.ntp.org
```
- （7）文件直接访问配置
- - 默认情况下，上传到 MinIO 的文件无法通过 http://ip:9000/存储桶/文件名 直接访问，需配置访问策略：
- - - 方式一：Web 管理后台修改（将访问策略设为 public）
- - - 方式二：通过客户端 API 修改（示例代码）：
```java
String policyJsonString = "{\"Statement\":[{\"Sid\":\"PublicRead\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":[\"*\"]},\"Action\":[\"s3:GetObject\"],\"Resource\":[\"arn:aws:s3:::" + bucketName + "/*\"]}]}";
```
### 四、Vue 3 + SpringBoot 3 + MinIO 实践
#### 1. 前端环境准备
- （1）核心工具与对应关系
- 
| 前端工具 | 类比 Java 工具 | 功能描述 |
| :------ | :------ | :------ |
| node.js | JDK | JavaScript 运行时环境 |
| npm |Maven | JavaScript 依赖包管理工具（打包、依赖下载） |
| Vite | Spring Initializr | Vue 项目快速构建脚手架 |

- （2）Node.js 安装与配置
```bash
# 1. 下载 Node.js
# 下载地址：https://nodejs.org/（选择 zip 压缩包）

# 2. 解压安装（解压即完成安装）

# 3. 创建依赖库和缓存目录
# 在 Node.js 安装目录下创建：
# node_global（依赖库）
# node_cache（缓存）

# 4. 配置 npm 全局路径
npm config set prefix "D:\dev\node-v20.12.0-win-x64\node_global"
npm config set cache "D:\dev\node-v20.12.0-win-x64\node_cache"

# 5. 验证配置
npm config get prefix
npm config get cache

# 6. 配置环境变量 Path
# 添加以下路径到系统 Path 变量：
# D:\dev\node-v20.12.0-win-x64
# D:\dev\node-v20.12.0-win-x64\node_global

# 7. 验证安装
node -v
npm -v
```
- （3）npm 仓库配置（更换国内源）
```bash
# 查看当前仓库源
npm config get registry

# 设置淘宝源（新地址）
npm config set registry https://registry.npmmirror.com/

# 测试依赖安装（全局安装 axios）
npm install axios -g
```
- （4）Vite 环境安装与项目创建
```bash
# 创建 Vite + Vue 项目
npm create vite@latest

# 执行命令后按提示操作：
# 1. 输入项目名称（如 vue-minio）
# 2. 选择框架：Vue
# 3. 选择变体：JavaScript

# 进入项目目录
cd vue-minio

# 安装依赖
npm install 或 npm i

# 启动项目
npm run dev
```
- （5）前端开发工具
- IntelliJ IDEA（新版本自带 Vue 插件）
- HBuilder
- WebStorm
- VS Code（Visual Studio Code）
#### 2. 前端项目开发
- （1）项目结构说明
```plantuml
vue-minio/
├── .vscode/          # VSCode 编辑器配置文件
├── public/           # 公共静态文件（如网站图标）
├── src/              # 源代码目录
├── .gitignore        # Git 忽略文件配置
├── index.html        # 项目首页（访问入口）
├── package.json      # 依赖配置及项目命令（类似 Maven 的 pom.xml）
├── README.md         # 项目帮助文档
└── vite.config.js    # Vite 配置文件
```
- （2）Vue 组件开发规范
- - Vue 页面（.vue 结尾文件）由三部分组成：
```vue
<template>
  <!-- HTML 展示内容 -->
</template>

<script>
  // JavaScript 代码
</script>

<style>
  // CSS 样式
</style>
```
- （3）项目运行流程
- - 1.入口文件：main.js
```javascript
import { createApp } from 'vue'
import App from './App.vue' // 导入根组件
const app = createApp(App)
app.mount('#app') // 挂载到 index.html 中的 <div id="app"></div>
```
- （4）核心依赖集成
- - ① Element Plus（UI 组件库）
```bash
# 安装 Element Plus
npm install element-plus --save
```
```javascript
// main.js 中导入并使用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
```
- - ② Axios（网络请求库）
```bash
# 安装 Axios
npm install axios --save
```
- - ③ 路由（vue-router）
```bash
# 安装路由
npm install vue-router --save
```
```javascript
// 1. 创建 router.js
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/view/DashboardView.vue')
    }
  ]
})
export default router;

// 2. main.js 中导入并使用
import router from './router/router.js'
app.use(router);

// 3. 在页面中使用 <router-view/> 渲染组件
```
- - ④ 图标（Element Plus Icons）
```bash
# 安装图标库
npm install @element-plus/icons-vue --save
```
```javascript
// main.js 中注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 使用示例
// <el-icon><Plus /></el-icon>
// <el-icon><Minus /></el-icon>
```
- （5）跨域处理
- - 在 Spring Boot 后端 Controller 上添加 @CrossOrigin 注解解决跨域问题：
```java
@RestController
@CrossOrigin
@RequestMapping("/api")
public class MinioController {
  // 接口实现
}
```
- （6）功能原型
- - 核心功能：头像上传、合同上传、提交操作
- - 界面组件：使用 Element Plus 实现表单、输入框、按钮等交互元素

### 五、MinIO 集群部署
#### 1. 纠删码模式部署（单机多磁盘）
- （1）纠删码原理
- - 纠删码（Erasure Code，EC）：采用 Reed-Solomon code（RScode）纠错码，将对象拆分为 N/2 数据块和 N/2 奇偶校验块
- - 数据恢复：即使部分磁盘损坏或丢失，可通过剩余数据块和校验块恢复原始数据
- - 示例：12 块磁盘时，数据拆分为 6 个数据块 + 6 个校验块，允许任意 6 块磁盘损坏
- （2）部署步骤
```bash
# 1. 查看可用块设备
lsblk

# 2. 添加一块新磁盘（硬件操作）

# 3. 格式化磁盘为 xfs 格式
mkfs.xfs /dev/sdb

# 4. 挂载磁盘到 MinIO 存储目录
mount /dev/sdb /opt/minio/data

# 5. 再次查看磁盘挂载情况
lsblk

# 6. 启动纠删码模式（单机多磁盘）
/usr/local/minio/minio server --console-address ":9001" /opt/minio/data/data{1...12}

# 7. 后台启动纠删码模式（日志输出到文件）
nohup /usr/local/minio/minio server --console-address ":9001" /opt/minio/data/data{1...12} > /opt/minio/data/minio.log 2>&1 &
```
#### 2. 分布式集群部署（多节点多磁盘）
- （1）部署要求
- - 至少 4 个节点（确保 N/2 节点在线时数据安全，N/2+1 节点在线时可写数据）
- - 每个节点独占一块磁盘（不使用 Linux root 磁盘）
- - 所有节点 MinIO 版本统一
- （2）部署步骤
```bash
# 1. 每个节点执行以下操作：
# （1）添加并格式化磁盘
mkfs.xfs /dev/sdb
# （2）挂载磁盘
mount /dev/sdb /opt/minio/data
# （3）安装 MinIO 到 /usr/local/minio 目录

# 2. 一键部署脚本（在任意节点执行）
#!/bin/bash
export MINIO_ROOT_USER=minioadmin
export MINIO_ROOT_PASSWORD=minioadmin
/usr/local/minio/minio server --config-dir /etc/minio --address :9000 --console-address :9001 \
http://192.168.11.128/opt/minio/data/data1 http://192.168.11.128/opt/minio/data/data2 \
http://192.168.11.128/opt/minio/data/data3 http://192.168.11.128/opt/minio/data/data4 \
http://192.168.11.129/opt/minio/data/data1 http://192.168.11.129/opt/minio/data/data2 \
http://192.168.11.129/opt/minio/data/data3 http://192.168.11.129/opt/minio/data/data4 \
http://192.168.11.130/opt/minio/data/data1 http://192.168.11.130/opt/minio/data/data2 \
http://192.168.11.130/opt/minio/data/data3 http://192.168.11.130/opt/minio/data/data4 \
http://192.168.11.131/opt/minio/data/data1 http://192.168.11.131/opt/minio/data/data2 \
http://192.168.11.131/opt/minio/data/data3 http://192.168.11.131/opt/minio/data/data4 &
```
- （3）Nginx 负载均衡配置
- - ① Nginx 简介
- - 高性能 Web 服务器，由俄罗斯人 Igor Sysoev 用 C 语言开发
- - 版本：商业版（http://www.nginx.com）、开源版（http://nginx.org）
- - 下载地址：http://nginx.org/download/nginx-1.24.0.tar.gz
- - ② Nginx 安装
```bash
# 1. 安装依赖库
yum install gcc openssl openssl-devel pcre pcre-devel zlib zlib-devel -y

# 2. 解压安装包
tar -zxvf nginx-1.24.0.tar.gz

# 3. 配置安装路径
cd nginx-1.24.0
./configure --prefix=/usr/local/nginx

# 4. 编译与安装
make
make install
```
- - ③ Nginx 服务管理
```bash
# 启动 Nginx（指定配置文件）
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf

# 检查 Nginx 进程
ps -ef | grep nginx

# 重启 Nginx
/usr/local/nginx/sbin/nginx -s reload

# 优雅关闭 Nginx（处理完现有请求）
ps -ef | grep nginx # 查找主进程号
kill -QUIT 主进程号

# 快速关闭 Nginx（强制关闭）
kill -TERM 主进程号

# 配置文件语法检查
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf -t
```
- - ④ 负载均衡配置（nginx.conf）
```nginx
http {
    # 配置 API 负载均衡
    upstream api {
        server 192.168.11.128:9000;
        server 192.168.11.129:9000;
        server 192.168.11.130:9000;
        server 192.168.11.131:9000;
    }

    # 配置 Web UI 负载均衡
    upstream webui {
        server 192.168.11.128:9001;
        server 192.168.11.129:9001;
        server 192.168.11.130:9001;
        server 192.168.11.131:9001;
    }

    server {
        listen       80;
        server_name  localhost;

        # API 路由转发
        location / {
            proxy_set_header Host $http_host;
            proxy_set_header Server MinIO;
            proxy_set_header Accept-Ranges bytes;
            proxy_pass http://api;
        }

        # Web UI 路由转发
        location /webui {
            proxy_pass http://webui;
        }
    }
}
```