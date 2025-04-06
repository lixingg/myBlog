 # Docker

 ## Docker基础
### 1、Docker简介
- #### 1.为什么会有docker出现
- - 假定您在开发一个某某商城，您使用的是一台笔记本电脑而且您的开发环境具有特定的配置。其他开发人员身处的环境配置也各有不同。
- - 您正在开发的应用依赖于您当前的配置且还要依赖于某些配置文件。此外，您的企业还拥有标准化的测试和生产环境，且具有自身的配置和一系列支持文件。
- - 您希望尽可能多在本地模拟这些环境而不产生重新创建服务器环境的开销。请问？
- - 您要如何确保应用能够在这些环境中运行和通过质量检测？并且在部署过程中不出现令人头疼的版本、配置问题，也无需重新编写代码和进行故障修复？
- - 答案就是使用容器。Docker之所以发展如此迅速，也是因为它对此给出了一个标准化的解决方案-----系统平滑移植，容器虚拟化技术。
- - 环境配置相当麻烦，换一台机器，就要重来一次，费力费时。很多人想到，能不能从根本上解决问题，软件可以带环境安装？也就是说，安装的时候，
把原始环境一模一样地复制过来。开发人员利用 Docker 可以消除协作编码时“在我的机器上可正常工作”的问题。
- - <img src="/operation/docker/docker01.png">
- 之前在服务器配置一个应用的运行环境，要安装各种软件，就拿某某电商项目的环境来说，Java/RabbitMQ/MySQL/JDBC驱动包等。
安装和配置这些东西有多麻烦就不说了，它还不能跨平台。假如我们是在 Windows 上安装的这些环境，到了 Linux 又得重新装。 况且就算不跨操作系统，
换另一台同样操作系统的服务器，要移植应用也是非常麻烦的。 传统上认为，软件编码开发/测试结束后，所产出的成果即是程序或是能够编译执行的二进制字节码
等(java为例)。而为了让这些程序可以顺利执行，开发团队也得准备完整的部署文件，让维运团队得以部署应用程式，开发需要清楚的告诉运维部署团队，
用的全部配置文件+所有软件环境。不过，即便如此，仍然常常发生部署失败的状况。Docker的出现使得Docker得以打破过去「程序即应用」的观念。
透过镜像(images)将作业系统核心除外，运作应用程式所需要的系统环境，由下而上打包，达到应用程式跨平台间的无缝接轨运作。
- #### 2、docker理念
- Docker是基于Go语言实现的云开源项目。
- Docker的主要目标是“Build，Ship and Run Any App,Anywhere”，也就是通过对应用组件的封装、分发、部署、运行等生命周期的管理，
- 使用户的APP（可以是一个WEB应用或数据库应用等等）及其运行环境能够做到“一次镜像，处处运行”。
- <img src="/operation/docker/docker02.png">
- Linux容器技术的出现就解决了这样一个问题，而 Docker 就是在它的基础上发展过来的。将应用打成镜像，通过镜像成为运行在Docker容器上面的实例，
- 而 Docker容器在任何操作系统上都是一致的，这就实现了跨平台、跨服务器。只需要一次配置好环境，换到别的机子上就可以一键部署好，大大简化了操作。
- #### 3、一句话
- 解决了运行环境和配置问题的软件容器， 方便做持续集成并有助于整体发布的容器虚拟化技术。
- #### 4、容器与虚拟机比较
- <img src="/operation/docker/docker03.png" alt="">
- <img src="/operation/docker/docker04.png" alt="">
- #### 5、传统虚拟机技术
- 虚拟机（virtual machine）就是带环境安装的一种解决方案。
  它可以在一种操作系统里面运行另一种操作系统，比如在Windows10系统里面运行Linux系统CentOS7。应用程序对此毫无感知，
- 因为虚拟机看上去跟真实系统一模一样，而对于底层系统来说，虚拟机就是一个普通文件，不需要了就删掉，对其他部分毫无影响。
- 这类虚拟机完美的运行了另一套系统，能够使应用程序，操作系统和硬件三者之间的逻辑不变。  
  Win10	VMWare	Centos7	各种cpu、内存网络额配置+各种软件	虚拟机实例

- <img src="/operation/docker/docker05.png" alt="">
虚拟机的缺点：
1    资源占用多               2    冗余步骤多                 3    启动慢
- #### 6、容器虚拟化技术
- 由于前面虚拟机存在某些缺点，Linux发展出了另一种虚拟化技术：
- Linux容器(Linux Containers，缩写为 LXC)
- Linux容器是与系统其他部分隔离开的一系列进程，从另一个镜像运行，并由该镜像提供支持进程所需的全部文件。容器提供的镜像包含了应用的所有依赖项，
因而在从开发到测试再到生产的整个过程中，它都具有可移植性和一致性。
- <img src="/operation/docker/docker06.png" alt="">
- Linux 容器不是模拟一个完整的操作系统而是对进程进行隔离。有了容器，就可以将软件运行所需的所有资源打包到一个隔离的容器中。容器与虚拟机不同，
不需要捆绑一整套操作系统，只需要软件工作所需的库资源和设置。系统因此而变得高效轻量并保证部署在任何环境中的软件都能始终如一地运行。
 
- #### 7、对比
- <img src="/operation/docker/docker07.png" alt="">
- 比较了 Docker 和传统虚拟化方式的不同之处：
- *传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；
- *容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。
- *每个容器之间互相隔离，每个容器有自己的文件系统 ，容器之间进程不会相互影响，能区分计算资源。

- #### 8、开发/运维（DevOps）新一代开发工程师（一次构建、随处运行）
- 更快速的应用交付和部署
- 传统的应用开发完成后，需要提供一堆安装程序和配置说明文档，安装部署后需根据配置文档进行繁杂的配置才能正常运行。
Docker化之后只需要交付少量容器镜像文件，在正式生产环境加载镜像并运行即可，应用安装配置在镜像里已经内置好，大大节省部署配置和测试验证时间。
- 更便捷的升级和扩缩容
- 随着微服务架构和Docker的发展，大量的应用会通过微服务方式架构，应用的开发构建将变成搭乐高积木一样，每个Docker容器将变成一块“积木”，
应用的升级将变得非常容易。当现有的容器不足以支撑业务处理时，可通过镜像运行新的容器进行快速扩容，使应用系统的扩容从原先的天级变成分钟级甚至秒级。
- 更简单的系统运维
- 应用容器化运行后，生产环境运行的应用可与开发、测试环境的应用高度一致，容器会将应用程序相关的环境和状态完全封装起来，
不会因为底层基础架构和操作系统的不一致性给应用带来影响，产生新的BUG。当出现程序异常时，也可以通过测试环境的相同容器进行快速定位和修复。
- 更高效的计算资源利用
- Docker是内核级虚拟化，其不像传统的虚拟化技术一样需要额外的Hypervisor支持，所以在一台物理机上可以运行很多个容器实例，
可大大提升物理服务器的CPU和内存的利用率。
- **Docker应用场景**
- <img src="/operation/docker/docker08.png" alt="">
- **Docker官网**
- docker官网：http://www.docker.com
- Docker Hub官网: https://hub.docker.com/
- ### 2、Docker安装
- #### 1、前提说明
- CentOS Docker 安装
- <img src="/operation/docker/docker09.png" alt="">
前提条件
目前，CentOS 仅发行版本中的内核支持 Docker。Docker 运行在CentOS 7 (64-bit)上，
要求系统为64位、Linux系统内核版本为 3.8以上，这里选用Centos7.x

查看自己的内核
uname命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。

- <img src="/operation/docker/docker10.png" alt="">
- #### 2、Docker的基本组成
- <img src="/operation/docker/docker11.png" alt="">
- Docker工作原理
- Docker是一个Client-Server结构的系统，Docker守护进程运行在主机上， 然后通过Socket连接从客户端访问，
守护进程从客户端接受命令并管理运行在主机上的容器。 容器，是一个运行时环境，就是我们前面说到的集装箱。可以对比mysql演示对比讲解
- <img src="/operation/docker/docker12.png" alt="">
- #### 3、Docker平台架构图解(架构版)
- 整体架构及底层通信原理简述
- Docker 是一个 C/S 模式的架构，后端是一个松耦合架构，众多模块各司其职。 
- <img src="/operation/docker/docker13.png" alt="">
- <img src="/operation/docker/docker14.png" alt="">
- #### 4、安装步骤
- CentOS7安装Docker
- 确定你是CentOS7及以上版本 - cat /etc/redhat-release
- 卸载旧版本
- <img src="/operation/docker/docker15.png" alt="">
- yum安装gcc相关
- CentOS7能上外网
- <img src="/operation/docker/docker16.png" alt="">
- ```bash
  yum -y install gcc
  yum -y install gcc-c++
  ```
- 安装需要的软件包
- - 官网要求
- - <img src="/operation/docker/docker17.png" alt="">
- - 执行命令
- ```bash
  yum install -y yum-utils
  ```

- 设置stable镜像仓库
- - ```bash
       yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    ```
-  <img src="/operation/docker/docker18.png" alt="">
- 更新yum软件包索引
- ```bash
  yum makecache fast
  ```
- 安装DOCKER CE
- ```bash
  yum -y install docker-ce docker-ce-cli containerd.io
  ```
- 官网要求
- <img src="/operation/docker/docker19.png" alt="">
-  执行结果
- <img src="/operation/docker/docker20.png" alt="">
- <img src="/operation/docker/docker21.png" alt="">
- 测试
- ```bash
  docker version
  docker run hello-world
  ```
- 卸载
- <img src="/operation/docker/docker22.png" alt="">
- ```bash
  systemctl stop docker 
  yum remove docker-ce docker-ce-cli containerd.io
  rm -rf /var/lib/docker
  rm -rf /var/lib/containerd
  ```
- #### 5、阿里云镜像加速
- https://promotion.aliyun.com/ntms/act/kubernetes.html
- 注册一个属于自己的阿里云账户(可复用淘宝账号)
- 获得加速器地址连接
- - 登陆阿里云开发者平台
- - <img src="/operation/docker/docker23.png" alt="">
- - 点击控制台
- - <img src="/operation/docker/docker24.png" alt="">
- - 选择容器镜像服务
- - <img src="/operation/docker/docker25.png" alt="">
- - 获取加速器地址
- - <img src="/operation/docker/docker26.png" alt="">
- 粘贴脚本直接执行
- - 直接粘
- - ```bash
    sudo mkdir -p /etc/docker   
    
    tee /etc/docker/daemon.json <<-'EOF'
    {  "registry-mirrors": ["https://aa25jngu.mirror.aliyuncs.com"]
    }
    EOF
    ```
- - 或者分步骤都行
- - ```bash
    mkdir -p /etc/docke
    vim  /etc/docker/daemon.json
    ```
- - ```bash
    #阿里云
    {
    "registry-mirrors": ["https://｛自已的编码｝.mirror.aliyuncs.com"]
    }
    ```
- 重启服务器
- - ```bash
    systemctl daemon-reload
    systemctl restart docker
    ```
- #### 6、永远的HelloWorld
- 启动Docker后台容器(测试运行 hello-world)
- - ```bash
    docker run hello-world
    ```
- - <img src="/operation/docker/docker27.png" alt="">
- run干了什么
- - - <img src="/operation/docker/docker28.png" alt="">
- #### 7、底层原理
- 为什么Docker会比VM虚拟机快
- (1)docker有着比虚拟机更少的抽象层
- - 由于docker不需要Hypervisor(虚拟机)实现硬件资源虚拟化,运行在docker容器上的程序直接使用的都是实际物理机的硬件资源。
因此在CPU、内存利用率上docker将会在效率上有明显优势。
- (2)docker利用的是宿主机的内核,而不需要加载操作系统OS内核
- - 当新建一个容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。进而避免引寻、加载操作系统内核返回等比较费时费资源的过程,
当新建一个虚拟机时,虚拟机软件需要加载OS,返回新建过程是分钟级别的。而docker由于直接利用宿主机的操作系统,则省略了返回过程,
因此新建一个docker容器只需要几秒钟。
- - <img src="/operation/docker/docker29.png" alt="">
- - <img src="/operation/docker/docker30.png" alt="">
  
- ### 3、Docker常用命令
- #### 1、帮助启动类命令
- - 启动docker：
- - ```bash
    systemctl start docker
    ```
- - 重启docker：
- - ```bash
    systemctl restart docker
    ```
- - 停止docker：
- - ```bash
    systemctl stop docker
    ```
- - 查看docker状态：
- - ```bash
    systemctl status docker
    ```
- - 开机启动：
- - ```bash
    systemctl enable docker
    ```
- - 查看docker概要信息：
- - ```bash
    docker info
    ```
- - 查看docker总体帮助文档：
- - ```bash
    docker --help
    ```
- - 查看docker命令帮助文档：
- - ```bash
    docker 具体命令 --help
    ```
- #### 2、镜像命令
- - 列出本地主机上的镜像：
- - ```bash
    docker images
    ```
- - <img src="/operation/docker/docker31.png" alt="">
- - 各个选项说明:
- - - REPOSITORY：表示镜像的仓库源
- - - TAG：镜像的标签版本号
- - - IMAGE ID：镜像ID
- - - CREATED：镜像创建时间
- - - SIZE：镜像大小
- - 同一仓库源可以有多个 TAG版本，代表这个仓库源的不同个版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。
- - 如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像
- - OPTIONS说明：
- - - -a :列出本地所有的镜像（含历史映像层）
- - - -q :只显示镜像ID。
- - docker search 某个XXX镜像名字
- - - 网站 https://hub.docker.com
- - - ```bash
      docker search [OPTIONS] 镜像名字
      ```
- - - 案例
- - - <img src="/operation/docker/docker32.png" alt="">
- - - <img src="/operation/docker/docker33.png" alt="">
- - - OPTIONS说明：
- - - --limit : 只列出N个镜像，默认25个
- - - docker search --limit 5 redis
- - 下载镜像
- - ```bash
    docker pull 镜像名字[:TAG]
    ```
- - - docker pull 镜像名字
- - - 没有TAG就是最新版,等价于 docker pull 镜像名字:latest
- - - ```bash
       docker pull ubuntu
      ```
- - - <img src="/operation/docker/docker34.png" alt="">
- -  查看镜像/容器/数据卷所占的空间
- - - ```bash
      docker system df
      ```
- - - <img src="/operation/docker/docker35.png" alt="">
- - 删除镜像
- - - 删除单个
- - - ```bash
      docker rmi  -f 镜像ID
      ```
- - - 删除多个
- - - ```bash
      docker rmi -f 镜像名1:TAG 镜像名2:TAG 
      ```
- - - 删除全部
- - - ```bash
      docker rmi -f $(docker images -qa)
      ```
- - 面试题：谈谈docker虚悬镜像是什么？
- - - 是什么?
- - - 仓库名、标签都是\<none>的镜像，俗称虚悬镜像dangling image
- - - 长什么样?
- - - <img src="/operation/docker/docker36.png" alt="">
- #### 3、容器命令
- - 有镜像才能创建容器， 这是根本前提(下载一个CentOS或者ubuntu镜像演示)
- - - 说明
- - - <img src="/operation/docker/docker37.png" alt="">
- - - ```bash
       docker pull centos
      ```
- - - ```bash
       docker pull ubuntu
      ```
- - - <img src="/operation/docker/docker38.png" alt="">
- - - 本次演示用ubuntu演示
- - 新建+启动容器
- - - ```bash
      docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
      ```
- - -  OPTIONS说明（常用）：有些是一个减号，有些是两个减号
- - - --name="容器新名字"       为容器指定一个名称；
- - - -d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)；
- - - -i：以交互模式运行容器，通常与 -t 同时使用；
- - - -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；
- - - 也即启动交互式容器(前台有伪终端，等待交互)；
- - - -P: 随机端口映射，大写P
- - - -p: 指定端口映射，小写p
- - - <img src="/operation/docker/docker39.png" alt="">
- - - 启动交互式容器(前台命令行)
- - - <img src="/operation/docker/docker40.png" alt="">
- - - #使用镜像centos:latest以交互模式启动一个容器,在容器内执行/bin/bash命令。
- - - - ```bash
        docker run -it centos /bin/bash 
        ```
- - - - 参数说明：
- - - - -i: 交互式操作。
- - - - -t: 终端。
- - - - centos : centos 镜像。
- - - - /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。
- - - - 要退出终端，直接输入 exit:
- - 列出当前所有正在运行的容器
- - - ```bash
      docker ps [OPTIONS]
      ```
- - - OPTIONS说明：
- - - -a :列出当前所有正在运行的容器+历史上运行过的
- - -  -l :显示最近创建的容器。
- - -  -n：显示最近n个创建的容器。
- - -  -q :静默模式，只显示容器编号。
- - 退出容器
- - - 两种退出方式
- - - - exit :run进去容器，exit退出，容器停止
- - - - ctrl+p+q :run进去容器，ctrl+p+q退出，容器不停止
- - 启动已停止运行的容器
- - - ```bash
      docker start 容器ID或者容器名
      ```
- - 重启容器
- - - ```bash
      docker restart 容器ID或者容器名
      ```
- - 停止容器
- - - ```bash
      docker stop 容器ID或者容器名
      ```
- - 强制停止容器
- - - ```bash
      docker kill 容器ID或者容器名
      ```
- - 删除已停止的容器
- - - ```bash
      docker rm 容器ID
      #一次性删除多个容器实例
      docker rm -f $(docker ps -a -q)
      docker ps -a -q | xargs docker rm
      ```
- - 重要
- - - 有镜像才能创建容器，这是根本前提(下载一个Redis6.0.8镜像演示)
- - - 启动守护式容器(后台服务器)
- - - 在大部分的场景下，我们希望 docker 的服务是在后台运行的，我们可以过 -d 指定容器的后台运行模式。
- - - ```bash
      docker run -d 容器名
      ```
- - - #使用镜像centos:latest以后台模式启动一个容器
- - - - ```bash
        docker run -d centos
        ```
- - - - 问题：然后docker ps -a 进行查看, 会发现容器已经退出
- - - - 很重要的要说明的一点: Docker容器后台运行,就必须有一个前台进程.
- - - - 容器运行的命令如果不是那些一直挂起的命令（比如运行top，tail），就是会自动退出的。

- - - - 这个是docker的机制问题,比如你的web容器,我们以nginx为例，正常情况下,
- - - - 我们配置启动服务只需要启动响应的service即可。例如service nginx start
- - - - 但是,这样做,nginx为后台进程模式运行,就导致docker前台没有运行的应用,
- - - - 这样的容器后台启动后,会立即自杀因为他觉得他没事可做了.
- - - - 所以，最佳的解决方案是,将你要运行的程序以前台进程的形式运行，
- - - - 常见就是命令行模式，表示我还有交互操作，别中断，O(∩_∩)O哈哈~
- - - redis 前后台启动演示case
- - - - 前台交互式启动
- - - - - ```bash
          docker run -it redis:6.0.8
          ```  
- - - - 后台守护式启动
- - - - - ```bash
          docker run -d redis:6.0.8
          ```
- - 查看容器日志
- - - ```bash
        docker logs 容器ID
      ```  
- - 查看容器内运行的进程
- - - ```bash
        docker top 容器ID
      ```
- - 查看容器内部细节
- - - ```bash
        docker inspect 容器ID
      ```
- - 进入正在运行的容器并以命令行交互
- - - ```bash
      docker exec -it 容器ID bashShell
      #重新进入docker attach 容器ID
      ```
- - - <img src="/operation/docker/docker41.png" alt="">
- - - <img src="/operation/docker/docker42.png" alt="">
- - - 案例演示，用centos或者unbuntu都可以
- - - 上述两个区别
- - - - attach 直接进入容器启动命令的终端，不会启动新的进程 ,用exit退出，会导致容器的停止。
- - - - -  <img src="/operation/docker/docker43.png" alt="">
- - - - exec 是在容器中打开新的终端，并且可以启动新的进程 ,用exit退出，不会导致容器的停止。
- - - - -  <img src="/operation/docker/docker44.png" alt="">
- - - - 推荐大家使用 docker exec 命令，因为退出容器终端，不会导致容器的停止
- - - - 用之前的redis容器实例进入试试
- - - - - 进入redis服务
- - - - - - ```bash
            docker exec -it 容器ID /bin/bash
            docker exec -it 容器ID redis-cli
            #一般用-d后台启动的程序，再用exec进入对应容器实例
            ```  
- - - 从容器内拷贝文件到主机上(容器→主机)
- - - - docker cp  容器ID:容器内路径 目的主机路径
- - - - <img src="/operation/docker/docker45.png" alt="">
- - - - 公式：docker cp  容器ID:容器内路径 目的主机路径
- - - 导入和导出容器
- - - - export 导出容器的内容留作为一个tar归档文件[对应import命令]
- - - - import 从tar包中的内容创建一个新的文件系统再导入为镜像[对应export]
- - - - 案例
- - - - - docker export 容器ID > 文件名.tar
- - - - - <img src="/operation/docker/docker46.png" alt="">
- - - - - cat 文件名.tar | docker import - 镜像用户/镜像名:镜像版本号
- - - - - <img src="/operation/docker/docker47.png" alt="">
- #### 4、小总结
- - 常用命令
- - ```text
    attach    Attach to a running container                 # 当前 shell 下 attach 连接指定运行镜像
    build     Build an image from a Dockerfile              # 通过 Dockerfile 定制镜像
    commit    Create a new image from a container changes   # 提交当前容器为新的镜像
    cp        Copy files/folders from the containers filesystem to the host path   #从容器中拷贝指定文件或者目录到宿主机中
    create    Create a new container                        # 创建一个新的容器，同 run，但不启动容器
    diff      Inspect changes on a container's filesystem   # 查看 docker 容器变化
    events    Get real time events from the server          # 从 docker 服务获取容器实时事件
    exec      Run a command in an existing container        # 在已存在的容器上运行命令
    export    Stream the contents of a container as a tar archive   # 导出容器的内容流作为一个 tar 归档文件[对应 import ]
    history   Show the history of an image                  # 展示一个镜像形成历史
    images    List images                                   # 列出系统当前镜像
    import    Create a new filesystem image from the contents of a tarball # 从tar包中的内容创建一个新的文件系统映像[对应export]
    info      Display system-wide information               # 显示系统相关信息
    inspect   Return low-level information on a container   # 查看容器详细信息
    kill      Kill a running container                      # kill 指定 docker 容器
    load      Load an image from a tar archive              # 从一个 tar 包中加载一个镜像[对应 save]
    login     Register or Login to the docker registry server    # 注册或者登陆一个 docker 源服务器
    logout    Log out from a Docker registry server          # 从当前 Docker registry 退出
    logs      Fetch the logs of a container                 # 输出当前容器日志信息
    port      Lookup the public-facing port which is NAT-ed to PRIVATE_PORT    # 查看映射端口对应的容器内部源端口
    pause     Pause all processes within a container        # 暂停容器
    ps        List containers                               # 列出容器列表
    pull      Pull an image or a repository from the docker registry server   # 从docker镜像源服务器拉取指定镜像或者库镜像
    push      Push an image or a repository to the docker registry server    # 推送指定镜像或者库镜像至docker源服务器
    restart   Restart a running container                   # 重启运行的容器
    rm        Remove one or more containers                 # 移除一个或者多个容器
    rmi       Remove one or more images       # 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]
    run       Run a command in a new container              # 创建一个新的容器并运行一个命令
    save      Save an image to a tar archive                # 保存一个镜像为一个 tar 包[对应 load]
    search    Search for an image on the Docker Hub         # 在 docker hub 中搜索镜像
    start     Start a stopped containers                    # 启动容器
    stop      Stop a running containers                     # 停止容器
    tag       Tag an image into a repository                # 给源中镜像打标签
    top       Lookup the running processes of a container   # 查看容器中运行的进程信息
    unpause   Unpause a paused container                    # 取消暂停容器
    version   Show the docker version information           # 查看 docker 版本号
    wait      Block until a container stops, then print its exit code   # 截取容器停止时的退出状态值    
    ```
### 4、Docker镜像
- 1、是什么
- - 镜像 是一种轻量级、可执行的独立软件包，它包含运行某个软件所需的所有内容，我们把应用程序和配置依赖打包好形成一个可交付的运行环境
(包括代码、运行时需要的库、环境变量和配置文件等)，这个打包好的运行环境就是image镜像文件。只有通过这个镜像文件才能生成Docker容器实例
(类似Java中new出来一个对象)。
- 2、分层的镜像
- - 以我们的pull为例，在下载的过程中我们可以看到docker的镜像好像是在一层一层的在下载
- - <img src="/operation/docker/docker49.png" alt="">
- 3、UnionFS（联合文件系统）
- - UnionFS（联合文件系统）：Union文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，
同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。
Union 文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。
- 特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。
- 4、Docker镜像加载原理
- - docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。bootfs(boot file system)主要包含bootloader和kernel,
bootloader主要是引导加载kernel, Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是引导文件系统bootfs。
这一层与我们典型的Linux/Unix系统是一样的，包含boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，
此时系统也会卸载bootfs。
- rootfs (root file system) ，在bootfs之上。包含的就是典型 Linux 系统中的 /dev, /proc, /bin, /etc 等标准目录和文件。
rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。 
- - <img src="/operation/docker/docker50.png" alt="">
- 5、为什么 Docker 镜像要采用这种分层结构呢
- - 镜像分层最大的一个好处就是共享资源，方便复制迁移，就是为了复用。
- - 比如说有多个镜像都从相同的 base 镜像构建而来，那么 Docker Host 只需在磁盘上保存一份 base 镜像；
- - 同时内存中也只需加载一份 base 镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。
- 6、重点理解
- - Docker镜像层都是只读的，容器层是可写的当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称作“容器层”，“容器层”之下的都叫“镜像层”。
- - - 当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称作“容器层”，“容器层”之下的都叫“镜像层”。 
- - - 所有对容器的改动 - 无论添加、删除、还是修改文件都只会发生在容器层中。只有容器层是可写的，容器层下面的所有镜像层都是只读的。
- - -  <img src="/operation/docker/docker51.png" alt="">
- 7、Docker镜像commit操作案例
- - docker commit提交容器副本使之成为一个新的镜像
- - docker commit -m="提交的描述信息" -a="作者" 容器ID 要创建的目标镜像名:[标签名]
- - 案例演示ubuntu安装vim
- - - 从Hub上下载ubuntu镜像到本地并成功运行
- - - - 原始的默认Ubuntu镜像是不带着vim命令的
- - - - <img src="/operation/docker/docker52.png" alt="">
- - - 外网连通的情况下，安装vim
- - - - <img src="/operation/docker/docker53.png" alt="">
- - - - docker容器内执行上述两条命令：
- - - - apt-get update
- - - - apt-get -y install vim
- - - - <img src="/operation/docker/docker54.png" alt="">
- - - - <img src="/operation/docker/docker55.png" alt="">
- - - 安装完成后，commit我们自己的新镜像
- - - - <img src="/operation/docker/docker56.png" alt="">
- - - - <img src="/operation/docker/docker57.png" alt="">
- - - 启动我们的新镜像并和原来的对比
- - - - <img src="/operation/docker/docker58.png" alt="">
- - - - 1 官网是默认下载的Ubuntu没有vim命令
- - - - 2我们自己commit构建的镜像，新增加了vim功能，可以成功使用。
- - 小总结
- - - Docker中的镜像分层，支持通过扩展现有镜像，创建新的镜像。类似Java继承于一个Base基础类，自己再按需扩展。
- - - 新镜像是从 base 镜像一层一层叠加生成的。每安装一个软件，就在现有镜像的基础上增加一层
- - - <img src="/operation/docker/docker59.png" alt="">
### 5、本地镜像发布到阿里云
- - 1、本地镜像发布到阿里云流程
- - - <img src="/operation/docker/docker60.png" alt="">
- - 2、镜像的生成方法
- - - 基于当前容器创建一个新的镜像，新功能增强
- - - ```bash
       docker commit [OPTIONS] 容器ID [REPOSITORY[:TAG]]
      ```
- - - OPTIONS说明：
- - - - -a :提交的镜像作者；
- - - - -m :提交时的说明文字；
- - - - 本次案例centos+ubuntu两个，当堂讲解一个，家庭作业一个，请大家务必动手，亲自实操。
- - - - <img src="/operation/docker/docker61.png" alt="">
- - - - <img src="/operation/docker/docker62.png" alt="">
- - 3、将本地镜像推送到阿里云
- - - 1、本地镜像素材原型
- - - - <img src="/operation/docker/docker63.png" alt="">
- - - - <img src="/operation/docker/docker64.png" alt="">
- - - 2、阿里云开发者平台
- - - - https://promotion.aliyun.com/ntms/act/kubernetes.html
- - - 3、创建仓库镜像
- - - - <img src="/operation/docker/docker65.png" alt="">
- - - - 1、选择控制台，进入容器镜像服务
- - - - - <img src="/operation/docker/docker66.png" alt="">
- - - - 2、选择个人实例
- - - - - <img src="/operation/docker/docker67.png" alt="">
- - - - 3、创建命名空间
- - - - - <img src="/operation/docker/docker68.png" alt="">
- - - - - 继续
- - - - - <img src="/operation/docker/docker69.png" alt="">
- - - - 4、仓库名称
- - - - - <img src="/operation/docker/docker70.png" alt="">
- - - - - 继续
- - - - - <img src="/operation/docker/docker71.png" alt="">
- - - - 5、进入管理界面获得脚本
- - - - - <img src="/operation/docker/docker72.png" alt="">
- - - 4、将镜像推送到阿里云
- - - - 将镜像推送到阿里云registry
- - - - - 1、管理界面脚本
- - - - - - <img src="/operation/docker/docker73.png" alt="">
- - - - - 2、脚本实例（举例：操作时根据自己的地址）
- - - - - - ```text
            docker login --username=zzyybuy registry.cn-hangzhou.aliyuncs.com
            docker tag cea1bb40441c registry.cn-hangzhou.aliyuncs.com/atguiguwh/myubuntu:1.1
            docker push registry.cn-hangzhou.aliyuncs.com/atguiguwh/myubuntu:1.1
            ```
- - - - - - <img src="/operation/docker/docker74.png" alt="">
- - - 5、将阿里云上的镜像下载到本地
- - - - ```bash
        docker pull registry.cn-hangzhou.aliyuncs.com/atguiguwh/myubuntu:1.1
        ```
- - - - <img src="/operation/docker/docker75.png" alt="">
### 6、本地镜像发布到私有库
- 1、本地镜像发布到私有库流程
- - <img src="/operation/docker/docker76.png" alt="">
- 2、是什么
- - 1 官方Docker Hub地址：https://hub.docker.com/，中国大陆访问太慢了且准备被阿里云取代的趋势，不太主流。
- - 2 Dockerhub、阿里云这样的公共镜像仓库可能不太方便，涉及机密的公司不可能提供镜像给公网，所以需要创建一个本地私人仓库供给团队使用，基于公司内部项目构建镜像。
- - Docker Registry是官方提供的工具，可以用于构建私有镜像仓库
- 3、将本地镜像推送到私有库
- - 1、下载镜像Docker Registry
- - - ```bash
      docker pull registry 
      ```
- - - <img src="/operation/docker/docker77.png" alt="">
- - - <img src="/operation/docker/docker78.png" alt="">
- - 2、运行私有库Registry，相当于本地有个私有Docker hub
- - - ```bash
      docker run -d -p 5000:5000  -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry
      # 默认情况，仓库被创建在容器的/var/lib/registry目录下，建议自行用容器卷映射，方便于宿主机联调
      ```
- - - <img src="/operation/docker/docker79.png" alt="">
- - - 3、案例演示创建一个新镜像，ubuntu安装ifconfig命令
- - - - 1、从Hub上下载ubuntu镜像到本地并成功运行
- - - - 2、原始的Ubuntu镜像是不带着ifconfig命令的
- - - - - <img src="/operation/docker/docker80.png" alt="">
- - - - 3、外网连通的情况下，安装ifconfig命令并测试通过
- - - - - ```bash
          #docker容器内执行上述两条命令：
          apt-get update
          apt-get install net-tools
          ```
- - - - - <img src="/operation/docker/docker81.png" alt="">
- - - - - <img src="/operation/docker/docker82.png" alt="">  
- - - - 4、安装完成后，commit我们自己的新镜像
- - - - - ```bash
          #公式：
          docker commit -m="提交的描述信息" -a="作者" 容器ID 要创建的目标镜像名:[标签名]
          #命令：在容器外执行，记得
          docker commit -m="ifconfig cmd add" -a="zzyy" a69d7c825c4f zzyyubuntu:1.2
          ```
- - - - - <img src="/operation/docker/docker83.png" alt="">
- - - - 5、启动我们的新镜像并和原来的对比
- - - - - 1 官网是默认下载的Ubuntu没有ifconfig命令
- - - - - 2 我们自己commit构建的新镜像，新增加了ifconfig功能，可以成功使用。
- - - - - <img src="/operation/docker/docker84.png" alt="">

- - - 4、curl验证私服库上有什么镜像
- - - - ```bash
        curl -XGET http://192.168.111.162:5000/v2/_catalog
        #可以看到，目前私服库没有任何镜像上传过。。。。。。
        ```
- - - - <img src="/operation/docker/docker85.png" alt="">
- - - 5、将新镜像zzyyubuntu:1.2修改符合私服规范的Tag
- - - - ```bash
        #按照公式： docker   tag   镜像:Tag   Host:Port/Repository:Tag
        #自己host主机IP地址，填写同学你们自己的，不要粘贴错误，O(∩_∩)O
        #使用命令 docker tag 将zzyyubuntu:1.2 这个镜像修改为192.168.111.162:5000/zzyyubuntu:1.2
        docker tag  zzyyubuntu:1.2  192.168.111.162:5000/zzyyubuntu:1.2
        ```
- - - - <img src="/operation/docker/docker86.png" alt="">
- - - 6、修改配置文件使之支持http
- - - - <img src="/operation/docker/docker87.png" alt="">
- - - - ```bash
        # 别无脑照着复制，registry-mirrors 配置的是国内阿里提供的镜像加速地址，不用加速的话访问官网的会很慢。
        # 2个配置中间有个逗号 ','别漏了，这个配置是json格式的。
        # 2个配置中间有个逗号 ','别漏了，这个配置是json格式的。
        # 2个配置中间有个逗号 ','别漏了，这个配置是json格式的。
        # vim命令新增如下红色内容：vim /etc/docker/daemon.json
        # {
        #   "registry-mirrors": ["https://aa25jngu.mirror.aliyuncs.com"],
        #   "insecure-registries": ["192.168.111.162:5000"]
        # }
        # 上述理由：docker默认不允许http方式推送镜像，通过配置选项来取消这个限制。====> 修改完后如果不生效，建议重启docker
        ```
- - - 7、push推送到私服库
- - - - ```bash
        docker push 192.168.111.162:5000/zzyyubuntu:1.2
        ```
- - - - <img src="/operation/docker/docker88.png" alt="">
- - - 8、curl验证私服库上有什么镜像2
- - - - ```bash
        curl -XGET http://192.168.111.162:5000/v2/_catalog
        ```
- - - - <img src="/operation/docker/docker89.png" alt="">
- - - 9、pull到本地并运行
- - - - ```bash
        docker pull 192.168.111.162:5000/zzyyubuntu:1.2
        ```
- - - - <img src="/operation/docker/docker90.png" alt="">
- - - - ```bash
        docker run -it 镜像ID /bin/bash
        ```
- - - - <img src="/operation/docker/docker91.png" alt="">
### 7、Docker容器数据卷
- 1、坑：容器卷记得加入 --privileged=true参数
- - ```text
    Docker挂载主机目录访问如果出现cannot open directory .: Permission denied
    解决办法：在挂载目录后多加一个--privileged=true参数即可
    如果是CentOS7安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，
    在SELinux里面挂载目录被禁止掉了额，如果要开启，我们一般使用--privileged=true命令，扩大容器的权限解决挂载目录没有权限的问题，也即
    使用该参数，container内的root拥有真正的root权限，否则，container内的root只是外部的一个普通用户权限。
    ```
- 2、还记得蓝色框框中的内容吗？
- - <img src="/operation/docker/docker92.png" alt="">
- 3、是什么
- - 一句话：有点类似我们Redis里面的rdb和aof文件，
- - 将docker容器内的数据保存进宿主机的磁盘中
- - 运行一个带有容器卷存储功能的容器实例
- - - ```bash
      docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录      镜像名
      ```
- 4、能干嘛
- - ```text
    *  将运用与运行的环境打包镜像，run后形成容器实例运行 ，但是我们对数据的要求希望是持久化的
    Docker容器产生的数据，如果不备份，那么当容器实例删除后，容器内的数据自然也就没有了。
    为了能保存数据在docker中我们使用卷。

    特点：
    1：数据卷可在容器之间共享或重用数据
    2：卷中的更改可以直接实时生效，爽
    3：数据卷中的更改不会包含在镜像的更新中
    4：数据卷的生命周期一直持续到没有容器使用它为止
    ```
- 5、数据卷案例
- - 1、宿主vs容器之间映射添加容器卷
- - - 1、直接命令添加
- - - ```bash
      # 公式：docker run -it -v /宿主机目录:/容器内目录 ubuntu /bin/bash
      docker run -it --name myu3 --privileged=true -v /tmp/myHostData:/tmp/myDockerData ubuntu /bin/bash
      # docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录      镜像名
      ```
- - - <img src="/operation/docker/docker93.png" alt="">
- - - 2、查看数据卷是否挂载成功
- - - - ```bash
        docker inspect 容器ID
        ```
- - - - <img src="/operation/docker/docker94.png" alt="">
- - - 3、容器和宿主机之间数据共享
- - - - ```text
        1  docker修改，主机同步获得
        2 主机修改，docker同步获得
        3 docker容器stop，主机修改，docker容器重启看数据是否同步。
        ```
- - - - <img src="/operation/docker/docker95.png" alt="">
- - 2、读写规则映射添加说明
- - - 1、读写(默认)
- - - - <img src="/operation/docker/docker96.png" alt="">
- - - - rw = read + write
- - - - <img src="/operation/docker/docker97.png" alt="">
- - - - ```bash
        docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录:rw      镜像名
        ```
- - - - 默认同上案例，默认就是rw
- - - 2、只读
- - - - 1、容器实例内部被限制，只能读取不能写
- - - - - <img src="/operation/docker/docker98.png" alt="">
- - - - - ```text
          /容器目录:ro 镜像名               就能完成功能，此时容器自己只能读取不能写

          ro = read only

          此时如果宿主机写入内容，可以同步给容器内，容器可以读取到。
          ```
- - - - - ```bash
          docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录:ro      镜像名 
          ```
- - 3、卷的继承和共享
- - - 1、容器1完成和宿主机的映射
- - - - ```bash
        docker run -it  --privileged=true -v /mydocker/u:/tmp --name u1 ubuntu
        ```
- - - - <img src="/operation/docker/docker99.png" alt="">
- - - - <img src="/operation/docker/docker100.png" alt="">
- - - 2、容器2继承容器1的卷规则
- - - - <img src="/operation/docker/docker101.png" alt="">
- - - - ```bash
        docker run -it  --privileged=true --volumes-from 父类  --name u2 ubuntu
        ```
### 8、Docker常规安装简介
- 1、总体步骤
- - ```text
    搜索镜像
    拉取镜像
    查看镜像
    启动镜像 - 服务端口映射
    停止容器
    移除容器
    ```
- 2、安装tomcat
- - 1、docker hub上面查找tomcat镜像
- - - ```bash
      docker search tomcat
      ```
- - - <img src="/operation/docker/docker102.png" alt="">
- - 2、从docker hub上拉取tomcat镜像到本地
- - - ```bash
      docker pull tomcat
      ```
- - - <img src="/operation/docker/docker103.png" alt="">
- - - <img src="/operation/docker/docker104.png" alt="">
- - 3、docker images查看是否有拉取到的tomcat
- - - <img src="/operation/docker/docker105.png" alt="">
- - 4、使用tomcat镜像创建容器实例(也叫运行镜像)
- - - ```bash
      docker run -it -p 8080:8080 tomca
      # -p 小写，主机端口:docker容器端口
      # -p 大写，随机端口:docker容器端口
      # i:交互
      # t:终端
      # d:后台
      ```
- - - <img src="/operation/docker/docker106.png" alt="">  
- - 5、访问猫首页
- - - 1、问题
- - - - <img src="/operation/docker/docker107.png" alt="">
- - - 2、解决
- - - - 1、可能没有映射端口或者没有关闭防火墙
- - - - - <img src="/operation/docker/docker108.png" alt="">
- - - - 2、把webapps.dist目录换成webapps
- - - - - 1、先成功启动tomcat
- - - - - - <img src="/operation/docker/docker109.png" alt="">
- - - - - 2、查看webapps 文件夹查看为空
- - - - - - <img src="/operation/docker/docker110.png" alt="">
- - 6、免修改版说明
- - - ```bash
      docker pull billygoo/tomcat8-jdk8
      docker run -d -p 8080:8080 --name mytomcat8 billygoo/tomcat8-jdk8
      ```
- 3、安装mysql
- - 1、docker hub上面查找mysql镜像
- - - <img src="/operation/docker/docker111.png" alt="">
- - 2、从docker hub上(阿里云加速器)拉取mysql镜像到本地标签为5.7
- - - <img src="/operation/docker/docker112.png" alt="">
- - 3、使用mysql5.7镜像创建容器(也叫运行镜像)
- - - 1、命令出处，哪里来的？
- - - - <img src="/operation/docker/docker113.png" alt="">
- - - 2、简单版
- - - - 1、使用mysql镜像
- - - - - ```text
          docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
          docker ps
          docker exec -it 容器ID /bin/bash
          mysql -uroot -p
          ```
- - - - -  <img src="/operation/docker/docker114.png" alt="">
- - - - 2、建库建表插入数据
- - - - -  <img src="/operation/docker/docker115.png" alt="">
- - - - 3、外部Win10也来连接运行在dokcer上的mysql容器实例服务
- - - - -  <img src="/operation/docker/docker116.png" alt="">
- - - - 4、问题
- - - - - 1、插入中文数据试试
- - - - - -  <img src="/operation/docker/docker117.png" alt="">
- - - - - - 为什么报错?
- - - - - - - docker上默认字符集编码隐患
- - - - - - -  ```text
               docker里面的mysql容器实例查看，内容如下：
               SHOW VARIABLES LIKE 'character%'
               ```
- - - - - - - - <img src="/operation/docker/docker118.png" alt="">
- - - - - 2、删除容器后，里面的mysql数据如何办
- - - - - - 容器实例一删除，你还有什么？ 删容器到跑路。。。。。？
- - - 3、实战版
- - - - 1、新建mysql容器实例
- - - - - ```bash
          docker run -d -p 3306:3306 --privileged=true -v /zzyyuse/mysql/log:/var/log/mysql -v /zzyyuse/mysql/data:/var/lib/mysql -v /zzyyuse/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456  --name mysql mysql:5.7
          ```
- - - - - <img src="/operation/docker/docker119.png" alt="">
- - - - 2、新建my.cnf
- - - - - 通过容器卷同步给mysql容器实例
- - - - - ```text
           [client]
           default_character_set=utf8
           [mysqld]
           collation_server = utf8_general_ci
           character_set_server = utf8
          ```
- - - - - <img src="/operation/docker/docker120.png" alt="">
- - - - 3、重新启动mysql容器实例再重新进入并查看字符编码
- - - - - <img src="/operation/docker/docker121.png" alt="">
- - - - - <img src="/operation/docker/docker122.png" alt="">
- - - - 4、再新建库新建表再插入中文测试
- - - - - <img src="/operation/docker/docker123.png" alt="">
- - - - - <img src="/operation/docker/docker124.png" alt="">
- - - - 5、结论
- - - - - ```text
          之前的DB  无效
          修改字符集操作+重启mysql容器实例
          之后的DB  有效，需要新建
          结论：docker安装完MySQL并run出容器后，建议请先修改完字符集编码后再新建mysql库-表-插数据
          ```
- - - - - <img src="/operation/docker/docker125.png" alt="">
- 4、安装redis
- - 1、从docker hub上(阿里云加速器)拉取redis镜像到本地标签为6.0.8
- - -  <img src="/operation/docker/docker126.png" alt="">
- - 2、入门命令
- - -  <img src="/operation/docker/docker127.png" alt="">
- - 3、命令提醒：容器卷记得加入--privileged=true
- - -  ```text
        Docker挂载主机目录Docker访问出现cannot open directory .: Permission denied
        解决办法：在挂载目录后多加一个--privileged=true参数即可  
       ```
- - 4、在CentOS宿主机下新建目录/app/redis
- - - <img src="/operation/docker/docker128.png" alt="">
- - - ```bash
       # 建目录
       mkdir -p /app/redis
      ```
- - 5、将一个redis.conf文件模板拷贝进/app/redis目录下
- - - <img src="/operation/docker/docker129.png" alt="">
- - - ```bash
      # 2 拷贝配置文件
      # 将准备好的redis.conf文件放进/app/redis目录下
      ```
- - 6、/app/redis目录下修改redis.conf文件
- - - ```text
      3 /app/redis目录下修改redis.conf文件
      3.1 开启redis验证    可选
      requirepass 123

      3.2 允许redis外地连接  必须
      注释掉 # bind 127.0.0.1
      ```
- - - <img src="/operation/docker/docker130.png" alt="">
- - - ```bash
        daemonize no
        # 将daemonize yes注释起来或者 daemonize no设置，因为该配置和docker run中-d参数冲突，会导致容器一直启动失败
        ```
- - - <img src="/operation/docker/docker131.png" alt="">
- - - ```bash
      # 开启redis数据持久化  appendonly yes  可选
      ```
- - - 默认出厂的原始redis.conf
- - - - ```text
        #    going from either the head or tail"
        #    So: [head]->node->node->...->node->[tail]
        #    [head], [tail] will always be uncompressed; inner nodes will compress.
        # 2: [head]->[next]->node->node->...->node->[prev]->[tail]
        #    2 here means: don't compress head or head->next or tail->prev or tail,
        #    but compress all nodes between them.
        # 3: [head]->[next]->[next]->node->node->...->node->[prev]->[prev]->[tail]
        # etc.
        list-compress-depth 0

        # Sets have a special encoding in just one case: when a set is composed
        # of just strings that happen to be integers in radix 10 in the range
        # of 64 bit signed integers.
        # The following configuration setting sets the limit in the size of the
        # set in order to use this special memory saving encoding.
        set-max-intset-entries 512

        # Similarly to hashes and lists, sorted sets are also specially encoded in
        # order to save a lot of space. This encoding is only used when the length and
        # elements of a sorted set are below the following limits:
        zset-max-ziplist-entries 128
        zset-max-ziplist-value 64

        # HyperLogLog sparse representation bytes limit. The limit includes the
        # 16 bytes header. When an HyperLogLog using the sparse representation crosses
        # this limit, it is converted into the dense representation.
        #
        # A value greater than 16000 is totally useless, since at that point the
        # dense representation is more memory efficient.
        #
        # The suggested value is ~ 3000 in order to have the benefits of
        # the space efficient encoding without slowing down too much PFADD,
        # which is O(N) with the sparse encoding. The value can be raised to
        # ~ 10000 when CPU is not a concern, but space is, and the data set is
        # composed of many HyperLogLogs with cardinality in the 0 - 15000 range.
        hll-sparse-max-bytes 3000

        # Streams macro node max size / items. The stream data structure is a radix
        # tree of big nodes that encode multiple items inside. Using this configuration
        # it is possible to configure how big a single node can be in bytes, and the
        # maximum number of items it may contain before switching to a new node when
        # appending new stream entries. If any of the following settings are set to
        # zero, the limit is ignored, so for instance it is possible to set just a
        # max entires limit by setting max-bytes to 0 and max-entries to the desired
        # value.
        stream-node-max-bytes 4096
        stream-node-max-entries 100

        # Active rehashing uses 1 millisecond every 100 milliseconds of CPU time in
        # order to help rehashing the main Redis hash table (the one mapping top-level
        # keys to values). The hash table implementation Redis uses (see dict.c)
        # performs a lazy rehashing: the more operation you run into a hash table
        # that is rehashing, the more rehashing "steps" are performed, so if the
        # server is idle the rehashing is never complete and some more memory is used
        # by the hash table.
        #
        # The default is to use this millisecond 10 times every second in order to
        # actively rehash the main dictionaries, freeing memory when possible.
        #
        # If unsure:
        # use "activerehashing no" if you have hard latency requirements and it is
        # not a good thing in your environment that Redis can reply from time to time
        # to queries with 2 milliseconds delay.
        #
        # use "activerehashing yes" if you don't have such hard requirements but
        # want to free memory asap when possible.
        activerehashing yes

        # The client output buffer limits can be used to force disconnection of clients
        # that are not reading data from the server fast enough for some reason (a
        # common reason is that a Pub/Sub client can't consume messages as fast as the
        # publisher can produce them).
        #
        # The limit can be set differently for the three different classes of clients:
        #
        # normal -> normal clients including MONITOR clients
        # replica  -> replica clients
        # pubsub -> clients subscribed to at least one pubsub channel or pattern
        #
        # The syntax of every client-output-buffer-limit directive is the following:
        #
        # client-output-buffer-limit <class> <hard limit> <soft limit> <soft seconds>
        #
        # A client is immediately disconnected once the hard limit is reached, or if
        # the soft limit is reached and remains reached for the specified number of
        # seconds (continuously).
        # So for instance if the hard limit is 32 megabytes and the soft limit is
        # 16 megabytes / 10 seconds, the client will get disconnected immediately
        # if the size of the output buffers reach 32 megabytes, but will also get
        # disconnected if the client reaches 16 megabytes and continuously overcomes
        # the limit for 10 seconds.
        #
        # By default normal clients are not limited because they don't receive data
        # without asking (in a push way), but just after a request, so only
        # asynchronous clients may create a scenario where data is requested faster
        # than it can read.
        #
        # Instead there is a default limit for pubsub and replica clients, since
        # subscribers and replicas receive data in a push fashion.
        #
        # Both the hard or the soft limit can be disabled by setting them to zero.
        client-output-buffer-limit normal 0 0 0
        client-output-buffer-limit replica 256mb 64mb 60
        client-output-buffer-limit pubsub 32mb 8mb 60

        # Client query buffers accumulate new commands. They are limited to a fixed
        # amount by default in order to avoid that a protocol desynchronization (for
        # instance due to a bug in the client) will lead to unbound memory usage in
        # the query buffer. However you can configure it here if you have very special
        # needs, such us huge multi/exec requests or alike.
        #
        # client-query-buffer-limit 1gb

        # In the Redis protocol, bulk requests, that are, elements representing single
        # strings, are normally limited ot 512 mb. However you can change this limit
        # here.
        #
        # proto-max-bulk-len 512mb

        # Redis calls an internal function to perform many background tasks, like
        # closing connections of clients in timeout, purging expired keys that are
        # never requested, and so forth.
        #
        # Not all tasks are performed with the same frequency, but Redis checks for
        # tasks to perform according to the specified "hz" value.
        #
        # By default "hz" is set to 10. Raising the value will use more CPU when
        # Redis is idle, but at the same time will make Redis more responsive when
        # there are many keys expiring at the same time, and timeouts may be
        # handled with more precision.
        #
        # The range is between 1 and 500, however a value over 100 is usually not
        # a good idea. Most users should use the default of 10 and raise this up to
        # 100 only in environments where very low latency is required.
        hz 10

        # Normally it is useful to have an HZ value which is proportional to the
        # number of clients connected. This is useful in order, for instance, to
        # avoid too many clients are processed for each background task invocation
        # in order to avoid latency spikes.
        #
        # Since the default HZ value by default is conservatively set to 10, Redis
        # offers, and enables by default, the ability to use an adaptive HZ value
        # which will temporary raise when there are many connected clients.
        #
        # When dynamic HZ is enabled, the actual configured HZ will be used as
        # as a baseline, but multiples of the configured HZ value will be actually
        # used as needed once more clients are connected. In this way an idle
        # instance will use very little CPU time while a busy instance will be
        # more responsive.
        dynamic-hz yes

        # When a child rewrites the AOF file, if the following option is enabled
        # the file will be fsync-ed every 32 MB of data generated. This is useful
        # in order to commit the file to the disk more incrementally and avoid
        # big latency spikes.
        aof-rewrite-incremental-fsync yes

        # When redis saves RDB file, if the following option is enabled
        # the file will be fsync-ed every 32 MB of data generated. This is useful
        # in order to commit the file to the disk more incrementally and avoid
        # big latency spikes.
        rdb-save-incremental-fsync yes

        # Redis LFU eviction (see maxmemory setting) can be tuned. However it is a good
        # idea to start with the default settings and only change them after investigating
        # how to improve the performances and how the keys LFU change over time, which
        # is possible to inspect via the OBJECT FREQ command.
        #
        # There are two tunable parameters in the Redis LFU implementation: the
        # counter logarithm factor and the counter decay time. It is important to
        # understand what the two parameters mean before changing them.
        #
        # The LFU counter is just 8 bits per key, it's maximum value is 255, so Redis
        # uses a probabilistic increment with logarithmic behavior. Given the value
        # of the old counter, when a key is accessed, the counter is incremented in
        # this way:
        #
        # 1. A random number R between 0 and 1 is extracted.
        # 2. A probability P is calculated as 1/(old_value*lfu_log_factor+1).
        # 3. The counter is incremented only if R < P.
        #
        # The default lfu-log-factor is 10. This is a table of how the frequency
        # counter changes with a different number of accesses with different
        # logarithmic factors:
        #
        # +--------+------------+------------+------------+------------+------------+
        # | factor | 100 hits   | 1000 hits  | 100K hits  | 1M hits    | 10M hits   |
        # +--------+------------+------------+------------+------------+------------+
        # | 0      | 104        | 255        | 255        | 255        | 255        |
        # +--------+------------+------------+------------+------------+------------+
        # | 1      | 18         | 49         | 255        | 255        | 255        |
        # +--------+------------+------------+------------+------------+------------+
        # | 10     | 10         | 18         | 142        | 255        | 255        |
        # +--------+------------+------------+------------+------------+------------+
        # | 100    | 8          | 11         | 49         | 143        | 255        |
        # +--------+------------+------------+------------+------------+------------+
        #
        # NOTE: The above table was obtained by running the following commands:
        #
        #   redis-benchmark -n 1000000 incr foo
        #   redis-cli object freq foo
        #
        # NOTE 2: The counter initial value is 5 in order to give new objects a chance
        # to accumulate hits.
        #
        # The counter decay time is the time, in minutes, that must elapse in order
        # for the key counter to be divided by two (or decremented if it has a value
        # less <= 10).
        #
        # The default value for the lfu-decay-time is 1. A Special value of 0 means to
        # decay the counter every time it happens to be scanned.
        #
        # lfu-log-factor 10
        # lfu-decay-time 1

        ########################### ACTIVE DEFRAGMENTATION #######################
        #
        # WARNING THIS FEATURE IS EXPERIMENTAL. However it was stress tested
        # even in production and manually tested by multiple engineers for some
        # time.
        #
        # What is active defragmentation?
        # -------------------------------
        #
        # Active (online) defragmentation allows a Redis server to compact the
        # spaces left between small allocations and deallocations of data in memory,
        # thus allowing to reclaim back memory.
        #
        # Fragmentation is a natural process that happens with every allocator (but
        # less so with Jemalloc, fortunately) and certain workloads. Normally a server
        # restart is needed in order to lower the fragmentation, or at least to flush
        # away all the data and create it again. However thanks to this feature
        # implemented by Oran Agra for Redis 4.0 this process can happen at runtime
        # in an "hot" way, while the server is running.
        #
        # Basically when the fragmentation is over a certain level (see the
        # configuration options below) Redis will start to create new copies of the
        # values in contiguous memory regions by exploiting certain specific Jemalloc
        # features (in order to understand if an allocation is causing fragmentation
        # and to allocate it in a better place), and at the same time, will release the
        # old copies of the data. This process, repeated incrementally for all the keys
        # will cause the fragmentation to drop back to normal values.
        #
        # Important things to understand:
        #
        # 1. This feature is disabled by default, and only works if you compiled Redis
        #    to use the copy of Jemalloc we ship with the source code of Redis.
        #    This is the default with Linux builds.
        #
        # 2. You never need to enable this feature if you don't have fragmentation
        #    issues.
        #
        # 3. Once you experience fragmentation, you can enable this feature when
        #    needed with the command "CONFIG SET activedefrag yes".
        #
        # The configuration parameters are able to fine tune the behavior of the
        # defragmentation process. If you are not sure about what they mean it is
        # a good idea to leave the defaults untouched.

        # Enabled active defragmentation
        # activedefrag yes

        # Minimum amount of fragmentation waste to start active defrag
        # active-defrag-ignore-bytes 100mb

        # Minimum percentage of fragmentation to start active defrag
        # active-defrag-threshold-lower 10

        # Maximum percentage of fragmentation at which we use maximum effort
        # active-defrag-threshold-upper 100

        # Minimal effort for defrag in CPU percentage
        # active-defrag-cycle-min 5

        # Maximal effort for defrag in CPU percentage
        # active-defrag-cycle-max 75

        # Maximum number of set/hash/zset/list fields that will be processed from
        # the main dictionary scan
        # active-defrag-max-scan-fields 1000
        ```
- - 7、使用redis6.0.8镜像创建容器(也叫运行镜像)
- - - ```bash
      docker run  -p 6379:6379 --name myr3 --privileged=true -v /app/redis/redis.conf:/etc/redis/redis.conf -v /app/redis/data:/data -d redis:6.0.8 redis-server /etc/redis/redis.conf
      ```
- - - <img src="/operation/docker/docker132.png" alt="">
- - 8、测试redis-cli连接上来
- - - <img src="/operation/docker/docker133.png" alt="">
- - - ```bash
       docker exec -it 运行着Rediis服务的容器ID redis-cli
      ```
- - 9、请证明docker启动使用了我们自己指定的配置文件
- - - 1、修改前
- - -  <img src="/operation/docker/docker134.png" alt="">
- - - ```text
       我们用的配置文件，数据库默认是16个
      ```
- - - 2、修改后
- - -  <img src="/operation/docker/docker135.png" alt="">
- - - ```text
      宿主机的修改会同步给docker容器里面的配置。
      记得重启服务
      ```
- - 10、测试redis-cli连接上来第2次
- - - <img src="/operation/docker/docker136.png" alt="">
- 5、安装Nginx（见高级篇Portainer）
## 高级篇(大厂进阶)
### 1、Docker复杂安装详说
#### 1、安装mysql主从复制
- 1、主从复制原理（默认你懂）
- 2、主从搭建步骤
- - 1、新建主服务器容器实例3307
- - - ```bash
      docker run -p 3307:3306 --name mysql-master \
      -v /mydata/mysql-master/log:/var/log/mysql \
      -v /mydata/mysql-master/data:/var/lib/mysql \
      -v /mydata/mysql-master/conf:/etc/mysql \
      -e MYSQL_ROOT_PASSWORD=root  \
      -d mysql:5.7
      ```
- - 2、进入/mydata/mysql-master/conf目录下新建my.cnf
- - - ```bash
      vim my.cnf
      ```
- - - ```text
      [mysqld]
       ## 设置server_id，同一局域网中需要唯一
       server_id=101
       ## 指定不需要同步的数据库名称
       binlog-ignore-db=mysql
       ## 开启二进制日志功能
       log-bin=mall-mysql-bin
       ## 设置二进制日志使用内存大小（事务）
       binlog_cache_size=1M
       ## 设置使用的二进制日志格式（mixed,statement,row）
       binlog_format=mixed
       ## 二进制日志过期清理时间。默认值为0，表示不自动清理。
       expire_logs_days=7
       ## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。
       ## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致
       slave_skip_errors=1062
      ```
- - 3、修改完配置后重启master实例
- - - ```bash
      docker restart mysql-master
      ```
- - 4、进入mysql-master容器
- - - - ```bash
        docker exec -it mysql-master /bin/bash
        mysql -uroot -proot
        ```
- - 5、master容器实例内创建数据同步用户
- - - ```sql
      CREATE USER 'slave'@'%' IDENTIFIED BY '123456';
      GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'slave'@'%';
      ```
- - 6、新建从服务器容器实例3308
- - - ```bash
      docker run -p 3308:3306 --name mysql-slave \
      -v /mydata/mysql-slave/log:/var/log/mysql \
      -v /mydata/mysql-slave/data:/var/lib/mysql \
      -v /mydata/mysql-slave/conf:/etc/mysql \
      -e MYSQL_ROOT_PASSWORD=root  \
      -d mysql:5.7
      ```
- - 7、进入/mydata/mysql-slave/conf目录下新建my.cnf
- - - ```bash
      vim my.cnf
      ```
- - - ```mysqld
      [mysqld]
      ## 设置server_id，同一局域网中需要唯一
      server_id=102
      ## 指定不需要同步的数据库名称
      binlog-ignore-db=mysql
      ## 开启二进制日志功能，以备Slave作为其它数据库实例的Master时使用
      log-bin=mall-mysql-slave1-bin
      ## 设置二进制日志使用内存大小（事务）
      binlog_cache_size=1M
      ## 设置使用的二进制日志格式（mixed,statement,row）
      binlog_format=mixed
      ## 二进制日志过期清理时间。默认值为0，表示不自动清理。
      expire_logs_days=7
      ## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。
      ## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致
      slave_skip_errors=1062
      ## relay_log配置中继日志
      relay_log=mall-mysql-relay-bin
      ## log_slave_updates表示slave将复制事件写进自己的二进制日志
      log_slave_updates=1
      ## slave设置为只读（具有super权限的用户除外）
      read_only=1
      ```
- - 8、修改完配置后重启slave实例
- - - ```bash
      docker restart mysql-slave
      ```
- - 9、在主数据库中查看主从同步状态
- - - ```bash
      show master status;
      ```


        
        
 
