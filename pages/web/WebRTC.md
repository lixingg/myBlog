# WebRTC
### 1、WebRTC简介
- WebRTC（Web Real-Time Communication）是一个支持网页浏览器进行实时语音对话或视频对话的API。它允许网络应用或者网站实现点对点的音视频通信，
而无需借助任何插件。WebRTC的目标是使实时通信变得简单易用，让开发者能够轻松地在网页上实现实时音视频通信功能。

### 2、应用场景
- 1.点对点视频聊天：如微信视频等实时视频通话应用；
- 2.多人视频会议：企业级多人视频会议系统，如：飞书、钉钉、腾讯会议等；
- 3.在线教育：如在线课堂、在线辅导等；
- 4.直播：游戏直播、课程直播等；

### 3、P2P通信原理
- WebRTC使用P2P（Peer-to-Peer）通信原理，即点对点通信。在P2P通信中，两个设备可以直接进行通信，而不需要通过服务器中转。
这使得通信更加高效，延迟更低。

- <img src="/web/p2p.jpg">

- 要实现两个客户端的实时音视频通信，并且这两个客户端可能处于不同网络环境，使用不同的设备，都需要解决哪些问题？
- 主要是下面3个问题：
- 1.如何发现对方？
- 2.不同的音视频编解码能力如何沟通？
- 3.如何联系上对方？

- **如何发现对方？**
- 在P2P通信的过程中，双方需要交换一些数据比如媒体信息，网络数据等信息，我们通常称这个过程叫做“信令（signaling）”。
- 对应的服务器即“信令服务器（signaling server）”，通常也有人将它称为“房间服务器”，因为它不仅可以交换彼此的媒体
信息和网络信息，还可以交换一些其他信息，比如房间信息、用户信息等。
- - 比如:
- - - （1）通知彼此xxx用户加入了房间；
- - - （2）通知彼此xxx用户离开了房间；
- - - （3）通知彼此xxx用户正在共享屏幕；
- 为了避免出现冗余，并最大限度的提高与已有技术的兼容性，WebRTC标准并没有规定信令方法和协议。这里我们会用websocket来实现信令服务器。

- **不同的音视频编解码能力如何沟通？**
- 不同浏览器对于音视频的编解码能力是不同的。
- 在WebRTC中，有一个专门的协议，称为 Session Description Protocol（SDP），用于描述音视频的编解码能力。
- 因此：参与音视频通讯的双方想要了解对方支持的媒体格式，必须要交换SDP信息。而交换SDP的过程，通常称为**媒体协商**
- SDP信息包括：音视频编码格式、分辨率、帧率、传输协议等。

- **如何联系上对方？**
- 其实就是网络协商的过程，即参与音视频实时通信的双方要了解彼此的网络情况，这样才有可能找到一条相互通讯的链路。
- 理想的网络情况是每个客户端都有自己的私有公网IP，这样的话就可以直接进行点对点连接。实际上呢，出于网络安全和其他
原因的考虑，大多数客户端之间都是在某个局域网内，需要网络地址转换（NAT）。
- 在WebRTC中我们使用ICE（Interactive Connectivity Establishment）机制建立网络连接。ICE协议通过一系列的技术（如：
STUN、TURN、TURN+STUN等）帮助通信双方发现和协商可用的公共网络地址，从而实现NAT穿越。
- ICE的工作原理如下：
- - 1.首先，通信双方收集本地网络地址（包括私有地址和公共地址）以及通过STUN和TURN服务器获取的候选地址。
- - 2.接下来，双方通过信令服务器交换这些候选地址。
- - 3.通信双方使用这些候选地址进行连接测试，确定最佳的可用地址。
- - 4.一旦找到可用的地址，双方就可以开始进行音视频通信。

- <img src="/web/p2p1.jpg">

- 在WebRTC中网络信息通常用candidate来描述
- 针对上面三个问题的总结：就是通过WebRTC提供的API获取各端的媒体信息SDP以及网络信息candidate,并通过信令服务器交换这些信息，从而实现音视频通信。

### 4、WebRTC API
#### 1、音视频采集 getUserMedia
```js
// 获取本地音视频流
const getLocalStream = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ // 获取音视频流
    video: true, // 是否获取视频
    audio: true // 是否获取音频
  })
  localVideo.value!.srcObject = stream // 将音视频流赋值给video标签
  localVideo.value!.play() // 播放音视频流
  return stream
}
```

#### 2、核心对象 RTCPeerConnection
- RTCPeerConnection是WebRTC中最核心的对象，它负责建立和管理点对点的连接，包括媒体协商、ICE协商、媒体传输等。
```js
const peer = new RTCPeerConnection({
  iceServers:[ // 部署的时候需要配置
    {
      urls: 'stun:stun.l.google.com:19302' // 谷歌的公共服务
    },
    {
      urls: 'turn:turn.example.com:3478', // TURN服务器地址
      username: 'user', // TURN服务器用户名
      credential: 'pass' // TURN服务器密码
    }
  ]
})
```
主要会用到以下几个方法：
- 媒体协商方法
- createOffer：创建一个offer，用于开始媒体协商。
- createAnswer：创建一个answer，用于响应一个offer。
- setLocalDescription：设置本地SDP。
- setRemoteDescription：设置远程SDP。

- 重要事件：
- onicecandidate：当ICE候选者被收集到时触发。
- onaddstream：当远程媒体流到达时触发。

- <img src="/web/p2p2.jpg">

- 整个媒体协商过程可以简化为三个步骤对应上述四个媒体协商方法：
- 1.呼叫端创建Offer（createOffer）并将offer消息（内容是呼叫端的SDP）通过信令服务器传送给接收端， 
同时调用setLocalDescription方法将offer消息保存到呼叫端的本地SDP中。
- 2.接收端收到对端的Offer信息后调用setRemoteDescription方法将Offer信息保存到接收端的本地SDP中，然后创建Answer（createAnswer）
并将answer消息（内容是接收端的SDP）通过信令服务器传送给呼叫端，同时调用setLocalDescription方法将answer消息保存到接收端的本地SDP中。
- 3.呼叫端收到对端的Answer信息后调用setRemoteDescription方法将Answer信息保存到呼叫端的本地SDP中，至此，媒体协商完成。

- 经过上述三个步骤，则完成了P2P通信过程中的媒体协商部分，实际上在呼叫端以及接收端调用setLocalDescription同时也开始了收集各端自己的网络
信息（candidate），然后各端通过监听事件onicecandidate收集各自的candidate并通过信令服务器传递给对端，进而打通P2P通信的网络通道，并通过
监听 onaddstream 事件拿到对方的视频流进而完成了整个视频通话过程。

- <img src="/web/p2p3.jpg">

### 5、案例
- #### 1、项目搭建
- - ##### 前端项目
- - 1.项目使用vue3+ts运行如下命令：
- - ```bash
    npm create vite@latest webrtc-client -- --template vue-ts
    ```
- - 2.引入tailwindcss:
- - ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
- - 3.配置tailwindcss,在tailwind.config.js中添加如下配置：
- - ```js
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
- - 4.在main.ts中引入tailwindcss:
- - ```ts
    import './style.css'
    ```
- - 5.在style.css中引入tailwindcss:
- - ```scss
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
- - 6.在App.vue中添加如下代码：
- - ```Vue
    <template>
      <div class="flex items-center flex-col text-center p-12 h-full">
        <div class="relative h-full mb-4">
          <video 
             ref="localVideo"
             class="w-96 h-full bg-gray-200 mb-4"></video>
          <video
             ref="remoteVideo"
             class="w-32 h-48 absolute bottom-0 right-0 object-cover"></video>
          <div v-if="caller && calling" class="absolute top-2/3 left-36 flex flex-col items-center">
            <p class="mb-4 text-white">等待对方接听...</p>
            <img @click="hangUp" src="./hangup.svg" alt="hangup" class="w-16 cursor-pointer">
          </div>
          <div v-if="called && calling" class="absolute top-2/3 left-32 flex flex-col items-center">
            <p class="mb-4 text-white">收到视频邀请...</p>
            <div class="flex">
              <img @click="hangUp" src="./hangup.svg" alt="hangup" class="w-16 cursor-pointer mr-4">
              <img @click="acceptCall" src="./accept.svg" alt="answer" class="w-16 cursor-pointer" >
            </div>
          </div>
        </div>
        <div class="flex gap-2 mb-4">
          <button class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white" 
           @click="callRemote">发起视频</button>
          <button class="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white" 
           @click="hangUp">挂断视频</button>
        </div>
      </div>
    </template>
    <script lang="ts" setup>
     import { ref } from 'vue'
     const called = ref<boolean>(false) // 是否是接受方
     const caller = ref<boolean>(false) // 是否是发起方
     const calling = ref<boolean>(false) // 呼叫中
     const communicating = ref<boolean>(false) // 视频通话中
     const localVideo = ref<HTMLVideoElement>() // video标签实例，播放人的视频
     const remoteVideo = ref<HTMLVideoElement>() // video标签实例，播放对方的视频
    
     // 发起方发起视频中请求
     const callRemote = () => {
      console.log('发起视频')
     }
     // 接受方接受视频请求
     const acceptCall = () => {
      console.log('同意视频邀请')
     }
     // 挂断视频
     const hangUp = () => {
      console.log('挂断视频') 
     }
    </script>
    ```
    
- - 执行完上面步骤可以运行npm run dev 来在本地启动项目了
- - ##### 后端项目
- - 创建一个webrtc-server的文件夹，执行npm init ,一路回车即可，然后运行如下命令安装 socket.io 和 nodemon:
- - ```bash
    npm install socket.io nodemon --save
    ```
- - 在webrtc-server文件夹下创建一个index.js文件，内容如下:
- - ```javascript
    const socket = require('socket.io');
    const http = require('http');
    const server = http.createServer();
    const io = socket(server,{
      cors:{
        origin:'*', //允许所有来源
      }
    });
    io.on('connection',sock=>{
      console.log('连接成功')
    // 向客户端发送连接成功的消息
      sock.emit('connection success')
    })
    server.listen(3000,()=>{
      console.log('服务器启动成功')
    })
    ```
    
- - 在packag.json中添加如下命令:
- - ```json
     {
      "scripts": {
        "start": "nodemon index.js"
      }
    }
    ```
- - 运行npm start即可启动后端项目

- - ##### 前端连接信令服务器
- - 前端需要安装 socket.io-client,并连接信令服务器
- - 先安装 socket.io-client：
- - ```bash
     npm install socket.io-client --save
    ```
- - ```Vue
    <script lang="ts" setup>
     import { onMounted,ref,onUnmounted } from 'vue'
     import { io , Socket} from 'socket.io-client'  
    
     const socket = ref<Socket | null>(null) // socket实例
     onMounted(()=>{
       socket.value = io('http://localhost:3000') // 连接信令服务器
       socket.value.on('connection success',()=>{
         console.log('连接信令服务器成功')
       })
     })
     onUnmounted(()=>{
       socket.value?.disconnect() // 断开连接
     })
    </script> 
    ```

- - ##### 发起视频请求
- - 角色：用户A -- 发起方，用户B -- 接收方
- - 房间：类比聊天窗口
- - 连接成功时加入房间：
- - ```javascript
     // 前端代码
    const roomId = '001'
      sock.on('connectionSuccess',()=>{
        console.log('连接信令服务器成功')
        sock.emit('joinRoom',roomId) // 前端发送加入房间事件
      })
    ```
- - 后端代码：
- - ```javascript
     // 后端代码
      sock.on('joinRoom',(room)=>{
        console.log('用户加入房间',room)
        sock.join(room) // 加入房间
      })
    ```
    
- - 用户A发送视频请求并通知用户B:
- - ```javascript
     // 发起方 发起视频聊天请求
    const callRemote = async ()=>{
    console.log('发起视频请求')
    caller.value = true
    calling.value = true
    await getLocalStream() // 获取本地视频流
    // 向信令服务器发起请求事件
    socket.value?.emit('callRemote',roomId)
    }
    ```
- - 用户B同意视频请求，并且通过信令服务器通知A用户
- - ```javascript
     // 接收方 接受视频聊天请求
    const acceptCall =  ()=>{
      console.log('接受视频请求')
      // 向信令服务器发起请求事件
      socket.value?.emit('acceptCall',roomId)
    }
    ```
    
- - ##### 开始交换SDP信息和candidate信息
- - 1.用户A创建RTCPeerConnection对象，添加本地音视频流，生成offer,并且通过信令服务器将offer发送给用户B
- - ```javascript
     // 发起方 创建RTCPeerConnection对象
    peer.value = new RTCPeerConnection()
    // 添加本地视频流
    peer.value.addStream(localStream.value)
    // 创建offer
    const offer = await peer.value.createOffer({
      offerToReceiveAudio: 1,
      offerToReceiveVideo: 1
    })
    // 设置本地描述的offer
    await peer.value.setLocalDescription(offer)
    // 向信令服务器发送offer
    socket.value?.emit('sendOffer',{offer,roomId})
    ```
    
- - 2.用户B收到用户A的offer
- - ```javascript
     // 接收方 接收offer
    sock.on('sendOffer',(offer)=>{
      if(called.value){ // 判断接收方
         console.log('收到offer',offer)
      }
    })
    ```
    
- - 3.用户B创建RTCPeerConnection对象，添加本地音视频流，设置远程描述的offer,生成answer,并且通过信令服务器将answer发送给用户A
- - ```javascript
     // 接收方 接收offer
    // 创建RTCPeerConnection对象
    peer.value = new RTCPeerConnection()
    // 添加本地视频流
    const stream = await getLocalStream()
    peer.value.addStream(stream)
    // 设置远程描述的offer
    await peer.value.setRemoteDescription(offer);
    // 创建answer
    const answer = await peer.value.createAnswer()
    // 设置本地描述的answer
    await peer.value.setLocalDescription(answer)
    // 向信令服务器发送answer
    socket.value?.emit('sendAnswer',{answer,roomId})
    ```
    
- - 4.用户A收到用户B的answer
- - ```javascript
     // 发送方 接收answer
    sock.on('sendAnswer',(answer)=>{
      if(caller.value){ // 判断发送方
         // 设置远程描述的answer
         peer.value.setRemoteDescription(answer)
      }
    })
    ```
    
- - 5.用户A获取candidate信息并且通过信令服务器发送candidate给用户B
- - ```javascript
    // 发送方 获取candidate信息并且通过信令服务器发送candidate给用户B
    peer.value.onicecandidate = (event) => {
      if (event.candidate) { // 判断是否有candidate信息
        // 通过信令服务器发送candidate信息给用户B
        socket.value?.emit('sendCandidate', { candidate: event.candidate, roomId })
      }
    }
    ```
    
- - 6.用户B收到并添加用户A的candidate信息
- - ```javascript
    // 接收方 接收candidate信息
    sock.on('sendCandidate', async (candidate) => {
      if (!caller.value) { // 判断接收方
        // 添加用户A的candidate信息
       await peer.value.addIceCandidate(candidate)
      }
    })
    ```
    
- - 7.用户B获取candidate信息并且通过信令服务器发送candidate给用户A
- - ```javascript
    // 接收方 获取candidate信息并且通过信令服务器发送candidate给用户A
    peer.value.onicecandidate = async (event) => {
      if (event.candidate) { // 判断是否有candidate信息
        // 通过信令服务器发送candidate信息给用户A
        await socket.value?.emit('sendCandidate', { candidate: event.candidate, roomId })
      }
    }
    ```

- - 8.用户A收到并添加用户B的candidate信息
- - ```javascript
    //  接收candidate信息
    sock.on('sendCandidate', async (candidate) => {
      // if (!caller.value) { 
        await peer.value.addIceCandidate(candidate)
      // }
    })
    ```
    
- - 9.用户A和用户B建立连接，可以进行P2P通信流
- - ```javascript
     // 监听onaddstream事件，获取对方视频流
     peer.value.onaddstream = (event) => {
      calling.value = false
      communicating.value = true;
      // 将对方视频流添加到video元素中
      remoteVideo.value!.srcObject = event.stream
      // 播放视频
      remoteVideo.value!.play()
    }
    ```
    
- - ##### 挂断视频
- - ```javascript
    // 挂断视频
    const hangUp = async () => {
      socket.value?.emit('hangUp',roomId)
    } 
    
    // 状态恢复
    const reset = () => {
     // 关闭本地视频流
     localVideo.value!.srcObject?.getTracks().forEach(track => track.stop())
     // 关闭远程视频流
     remoteVideo.value!.srcObject?.getTracks().forEach(track => track.stop())
     // 关闭本地视频流
     localVideo.value!.srcObject = null
     // 关闭远程视频流
     remoteVideo.value!.srcObject = null
     // 关闭本地
     peer.value.close()
      calling.value = false
      caller.value = false
      called.value = false
      peer.value = null
      communicating.value = false
      localStream.value = null
    }
    ```

    
- - [案例演示](https://)

- ### 拓展：[peerjs](https://peerjs.com/docs/#start)
- [peerjs-github](https://github.com/peers/peerjs)
- #### 服务端实现
- ```javascript
   const {PeerServer} =require('peer')
   const peerServer = PeerServer({port:9000,path:'/myPeerServer'})
  ```
  
- #### 客户端实现
- ```vue
  <script lang="ts" setup>
  import { ref,onMounted } from 'vue'  
  import {Peer} from 'peerjs'
  
  const url = ref<string>('') 
  const peer = ref<any>()
  const localVideo = ref<HTMLVideoElement>()
  const remoteVideo = ref<HTMLVideoElement>()
  const peerId = ref<string>()
  const remoteId = ref<string>()
  const caller = ref<boolean>(false)
  const called = ref<boolean>(false)
  const callObj = ref<any>()
  
   onMounted(() => {
     peer.value = new Peer({ // 连接信令服务器
       host: 'localhost',
       port: 9000,
       path: '/myPeerServer',
     })
     peer.value.on('open', (id) => {
       peerId.value = id
     })
     // 接受视频请求
     peer.value.on('call', async (call) => {
       called.value = true
       callObj.value = call
     })
   })
  
   // 获取本地视频流
  async function getLocalStream(constraints) {
  // 获取媒体流
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
  // 将媒体流设置到video标签上播放
    localVideo.value!.srcObject = stream
    localVideo.value!.play()
    return stream
  }
  
  const acceptCalled = async () => {
   // 接受视频
    const stream = await getLocalStream({ video: true, audio: true })
    callObj.value.answer(stream);
    callObj.value.on('stream', (remoteStream) => { // 接收到的视频流
    called.value = false
     // 将远程媒体流添加到video标签中播放
    remoteVideo.value!.srcObject = remoteStream
    remoteVideo.value!.play()
  })
  }
  
  // 开启视频
  const callRemote = async () => {
     if(!remoteId.value){
       alert('请输入对方id')
       return
     }
     const stream = await getLocalStream({ video: true, audio: true })
     // 将本地媒体流发送到远程 Peer
     const call = peer.value.call(remoteId.value, stream)
     called.value = true  
     call.on('stream', (remoteStream) => { // 接收到的视频流
      caller.value = false
      // 将远程媒体流添加到video标签中播放
      remoteVideo.value!.srcObject = remoteStream
      remoteVideo.value!.play()
     })
   }
 
  </script>
  ```

    



    