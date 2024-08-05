## Canvas 专栏
### 1.创建canvas元素,并设置其宽高（创建画布）
- ```html
  <!-- 标签创建法 ，注意需要使用属性形式设置宽高-->
  <canvas id="myCanvas" width="500" height="500"></canvas>
  ```
- ```js
  // js创建法 ， 注意需要使用属性形式设置宽高 ，主要是为了正常显示里面的图形
  // 使用style样式会导致canvas里面图形无法正确试别宽高大小导致异常问题
  var canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 500;
  document.body.appendChild(canvas);
  ```
  
### 2.获取绘图上下文（context 对象），俗称画笔
- ```js
  // 获取标签元素
  var canvas = document.getElementById('myCanvas');
  // 获取context对象
  var ctx = canvas.getContext('2d');
  ```
  
### 3.使用CanvasAPI进行绘图

- #### 1.绘制直线
- ```js
  // 绘制一条直线
  ctx.moveTo(0, 0); // 设置起始点
  ctx.lineTo(200, 200); // 设置结束点
  // 绘制多条连续直线（折线）
  // ctx.lineTo(300, 0); // 设置结束点
  // ctx.lineTo(400, 100); // 设置结束点
  // 设置线的粗细
  ctx.lineWidth = 5; // 设置线的宽度
  // 设置线的颜色 
  ctx.strokeStyle = 'red'; // 设置线的颜色
  // 开始绘制
  ctx.stroke(); // 绘制线条
  ```
- #### 2. lineWidth属性设置线条粗细   
- ```js
  // 设置线的宽度
  ctx.lineWidth = 5; // 设置线的宽度
  ```
  
- #### 3. strokeStyle属性设置线条颜色
- ```js
  // 设置线的颜色
  ctx.strokeStyle = 'red'; // 设置线的颜色
  ```

- #### 4. createLinearGradient() 创建一个线性的渐变颜色
- ```js
  // 创建一个线性的渐变颜色 createLinearGradient(起始点x, 起始点y, 结束点x, 结束点y)
  var grd = ctx.createLinearGradient(0, 0, 200, 200);
  // 定义开始渐变颜色 addColorStop(位置, 颜色)
  grd.addColorStop(0, "red"); 
  // 定义中间颜色
  grd.addColorStop(0.5, "yellow");
  // 定义结束渐变颜色
  grd.addColorStop(1, "blue");
  // 设置线的颜色
  ctx.strokeStyle = grd;
  ```
  
- #### 5. createRadialGradient() 创建一个径向的渐变颜色
- ```js
  // 创建一个径向的渐变颜色 createRadialGradient(起始点x, 起始点y, 起始点半径, 结束点x, 结束点y, 结束点半径)
  var grd = ctx.createRadialGradient(100, 100, 0, 100, 100, 100);
  // 定义开始渐变颜色 addColorStop(位置, 颜色)
  grd.addColorStop(0, "red");
  // 定义中间颜色
  grd.addColorStop(0.5, "yellow");
  // 定义结束渐变颜色
  grd.addColorStop(1, "blue");
  // 设置线的颜色
  ctx.strokeStyle = grd;
  ```
  
- #### 6. createConicGradient() 创建一个锥形渐变颜色
- ```js
  // 创建一个锥形渐变颜色 createConicGradient(弧度值, 起始点x, 起始点y)
  // 弧度值：0为3点钟方向，π/2为9点钟方向，π为12点钟方向，3π/2为6点钟方向： (Math.PI / 180) * 旋转角度
  var grd = ctx.createConicGradient(90 * (Math.PI / 180), 100, 100);
  // 定义开始渐变颜色 addColorStop(位置, 颜色)
  grd.addColorStop(0, "red");
  // 定义中间颜色
  grd.addColorStop(0.5, "yellow");
  // 定义结束渐变颜色
  grd.addColorStop(1, "blue");
  // 设置线的颜色
  ctx.strokeStyle = grd;
  ```
  
- #### 7. 重复元图像
- ```js
  // 创建一个重复元图像 createPattern(图像, 重复方式)
  var img = new Image();
  img.src = "./img/1.jpg";
  img.onload = function () {
    // 创建一个重复元图像 createPattern(图像, 重复方式)
    var pattern = ctx.createPattern(img, "repeat");
    // 设置线的颜色
    ctx.strokeStyle = pattern;
    // 绘制一个矩形
    ctx.fillRect(0, 0, 800, 600); 
  };
  ```
  
- #### 8. 渐变折线
- ```js
  // 绘制折线
  ctx.moveTo(0,0)
  ctx.lineTo(100,100)
  ctx.lineTo(200,0)
  ctx.lineTo(300,100)
  ctx.lineTo(400,0)

  // 创建一个渐变折线 createLinearGradient(起始点x, 起始点y, 结束点x, 结束点y)
  var grd = ctx.createLinearGradient(0, 0, 400, 0);
  // 定义开始渐变颜色 addColorStop(位置, 颜色)
  grd.addColorStop(0, "red");
  // 定义中间颜色
  grd.addColorStop(0.25, "yellow");
  grd.addColorStop(0.5, "orange");
  grd.addColorStop(0.75, "green");
  // 定义结束渐变颜色
  grd.addColorStop(1, "blue");
  // 设置线的颜色
  ctx.strokeStyle = grd;
  // 绘制折线
  ctx.stroke();
  ```
  
- #### 9. 线段的转角样式 
- ```js
  // 修改线段的转角样式 
  // lineJoin 修改的是线的转角样式 ：miter(默认) bevel 斜角 round 圆角
  ctx.lineJoin = "round";
  // lineCap 修改的是线的端点样式 ：butt(默认) round 圆角 square 高度多出一半的线宽 
  ctx.lineCap = "round";
  // 绘制线段
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 100);
  ctx.lineTo(200, 0);
  ctx.stroke();
  ```
  
- #### 10. arc 绘制圆弧
- ```js
  // 绘制圆弧 arc(圆心x, 圆心y, 半径, 起始角度（角度*(Math.PI / 180)）, 结束角度（角度*(Math.PI / 180)）, 是否逆时针)
  // beginPath 在两个不相关图形之间需要告诉context,重新生成一个新的路径
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 30 * (Math.PI / 180), false);
  // 画圆
  // ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
  ctx.stroke();
  // closePath 配合beginPath 在什么时候开始，在什么时候闭合
  ctx.closePath();
  ```
  
- #### 11. ellipse 绘制椭圆
- ```js
  // 绘制椭圆 
  // ellipse(圆心x, 圆心y, 水平半径, 垂直半径,旋转角度（角度*(Math.PI / 180)）,起始角度（同旋转算法）, 结束角度（同起始算法）, 是否逆时针)
  // beginPath 在两个不相关图形之间需要告诉context,重新生成一个新的路径
  ctx.beginPath();
  ctx.ellipse(100, 100, 50, 100, 0, 0, 30 * (Math.PI / 180), false);
  ctx.stroke();
  // 注意：closePath 放在绘制下面不会形成闭合，放在绘制上面会形成一个闭合图形
  ctx.closePath();
  ```
  
- #### 12. fill 填充图形
- ```js
  // 填充图形
  // fill(图形)
  // 在调用fill方法的时候，路径会自动连接起始点和终点形成闭合路径
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 100);
  ctx.lineTo(200, 0);
  ctx.fill();
  ctx.closePath();
  ```
  
- #### 13. fillStyle 填充颜色
- ```js
  // 填充颜色
  // fillStyle 设置填充颜色
  // 设置填充颜色为渐变
  // createLinearGradient(x1, y1, x2, y2) 创建线性渐变
  // addColorStop(位置, 颜色) 添加颜色
  // 设置填充颜色为径向渐变
  // createRadialGradient(x1, y1, r1, x2, y2, r2) 创建径向渐变
  // 设置填充颜色为图案
  // createPattern(图片, 平铺方式) 创建图案
  ctx.fillStyle = 'red';
  ```

- #### 14. 添加阴影
- ```js
  // 添加阴影
  // shadowOffsetX 阴影水平偏移量
  // shadowOffsetY 阴影垂直偏移量
  // shadowBlur 阴影模糊程度
  // shadowColor 阴影颜色
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 10;
  ctx.shadowColor = 'red';
  ```
  
- #### 15. 贝赛尔曲线 
- ```js
  // 二次贝赛尔曲线 quadraticCurveTo(控制点的x, 控制点的y, 结束点的x, 结束点的y)
  // quadraticCurveTo(cp1x, cp1y, x, y)
  // 绘制二次贝赛尔曲线
  ctx.beginPath();
  // 绘制起点
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(100, 100, 200, 0);
  ctx.stroke();
  // 三次贝赛尔曲线 bezierCurveTo(控制点的x1, 控制点的y1, 控制点的x2, 控制点的y2, 结束点的x, 结束点的y)
  // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  // 绘制三次贝赛尔曲线
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(100, 100, 200, 100, 300, 0);
  ctx.stroke();
  ```
  
- #### 16. arcTo绘制圆弧
- ```js
  // 需要精准提供三个点，相对来说难用一点，在一些特殊情况才会使用
  // 绘制圆弧 arcTo(控制点x1, 控制点y1, 控制点x2, 控制点y2, 半径)
  // arcTo(x1, y1, x2, y2, radius) 
  // 绘制圆弧
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arcTo(100, 100, 200, 100, 50);
  ctx.stroke();
  ```
  
- #### 17. drawImage绘制图片 
- ```js
  // 1.绘制图片 drawImage(图片源, 左上坐标x, 左上坐标y)
  // 2.绘制图片 drawImage(图片源, 左上坐标x, 左上坐标y, 图片宽度, 图片高度)
  // 3.绘制图片 drawImage(图片源, 裁切区域左上坐标x, 裁切区域左上坐标y, 裁切宽度, 裁切高度, 图片渲染位置x, 图片渲染位置y, 图片渲染宽度, 图片渲染高度)
  
  // 绘制图片
  let img = new Image();
  img.src = 'xxx.png';
  img.onload = function() {
    // 1.第一种绘制 按照原图大小 ，指定渲染的图片和大小
    ctx.drawImage(img, 0, 0);
    // 2.第二种绘制 按照指定大小，位置 ，绘制图片
    ctx.drawImage(img, 0, 0, 100, 100);
    // 3.第三种绘制 指定裁切的位置、大小，渲染到指定的位置、大小
    ctx.drawImage(img, 0, 0, 100, 100, 200, 200, 100, 100);
  }
  ```
  
- #### 18. fillText绘制文字 （文字填充）
- ```js
  // 绘制文字 fillText(文字内容, 左上角坐标x, 左上角坐标y)
  // 绘制文字 fillText(文字内容, 左上角坐标x, 左上角坐标y, 最大宽度)
  ctx.fillText('hello', 0, 0);
  ctx.fillText('hello', 0, 0, 100);
  ```
  
- #### 19. strokeText绘制文字（文字描边）
- ```js
  // 绘制文字 strokeText(文字内容, 左上角坐标x, 左上角坐标y)
  // 绘制文字 strokeText(文字内容, 左上角坐标x, 左上角坐标y, 最大宽度)
  ctx.strokeText('hello', 0, 0);
  ctx.strokeText('hello', 0, 0, 100);
  ```
  
- #### 20. font修改文字样式 
- ```js
  // 修改文字： 斜体、加粗、大小、字体
  ctx.font = 'italic 700 50px Arial';
  ```
  
- #### 21. textAlign修改文字横向对齐方式
- ```js
  // 属性是以起点为对齐的位置
  // 修改文字对齐方式： 左对齐、居中对齐、右对齐
  ctx.textAlign = 'left';
  ctx.textAlign = 'center';
  ctx.textAlign = 'right';
  ctx.textAlign = 'start'; // start以direction的开始方向为方向
  ctx.textAlign = 'end'; // end以direction的结束方向为方向
  ```
  
- #### 22. textBaseline修改文字纵向对齐方式
- ```js
  // 修改文字基线： 顶部对齐、底部对齐、中间对齐
  ctx.textBaseline = 'top'; // 顶部基线
  ctx.textBaseline = 'hanging'; // 悬挂基线
  ctx.textBaseline = 'middle'; // 中间基线
  ctx.textBaseline = 'alphabetic'; // 字母基线
  ctx.textBaseline = 'ideographic'; // 表意基线
  ctx.textBaseline = 'bottom'; // 底部基线
  ```
  
- #### 23. measureText获取文字的宽度和高度
- ```js
  // 获取文字的宽度和高度
  var text = ctx.measureText('hello');
  console.log(text.width); // 文字宽度
  console.log(text.height); // 文字高度
  ```
  
- #### 24. 绘制渐变文字
- ```js
  // fillStyle 与 strokeStyle 使用
  // fillStyle 对应的是fill相关的颜色
  // 例如：fill()、fillRect()、fillText()
  // strokeStyle 对应的是stroke相关的颜色
  // 例如：stroke()、strokeRect()、strokeText()
  
  // 创建渐变文字(从左到右渐变）
  var gradient = ctx.createLinearGradient(0, 0, 600, 0);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(0.5, 'yellow');
  gradient.addColorStop(1, 'blue'); 
  
  // 设置渐变色
  ctx.fillStyle = gradient;
  ctx.strokeStyle = gradient;
  ```
  
- #### 25. direction文字的方向控制 
- ```js
  // 文字的方向控制
  // direction 属性： ltr(默认值，从左到右)、rtl(从右到左)、inherit
  ctx.direction = 'ltr';
  ctx.direction = 'rtl';
  ctx.direction = 'inherit';
  ```
  
- #### 26. 滤镜
- ```js
  // 滤镜
  // 滤镜属性： blur(10px)、模糊
  //          brightness(50%)、亮度
  //          contrast(对比度)、
  //          drop-shadow(阴影)、
  //          grayscale(灰度)、
  //          hue-rotate(色相旋转)、
  //          invert(反色)、
  //          opacity(透明度)、
  //          saturate(饱和度)、
  //          sepia(褐色)
  //          none(无滤镜)
  //          url(滤镜链接)
  
  // 设置滤镜
  ctx.filter = 'blur(10px)'; // 模糊度调节
  ctx.filter = 'brightness(50%)'; // 亮度调节
  ctx.filter = 'contrast(120%)'; // 对比度调节
  ctx.filter = 'drop-shadow(16px 16px 20px blue)'; // 阴影效果
  ctx.filter = 'grayscale(50%)'; // 灰度效果
  ctx.filter = 'hue-rotate(90deg)'; // 色相旋转效果
  ctx.filter = 'invert(100%)'; // 反色效果
  ctx.filter = 'opacity(50%)'; // 透明度效果
  ctx.filter = 'saturate(200%)'; // 饱和度效果
  ctx.filter = 'sepia(60%)'; // 褐色效果
  ctx.filter = 'none'; // 移除滤镜
  ctx.filter = 'url(https://example.com/filter.svg)'; // 滤镜链接
  ```
  
- #### 27. translate方法位移
- ```js
  // translate(左上角坐标x,左上角坐标y)方法位移
  // 位置的变换基于原点(0,0)的变换
  // 在绘制之前位移，基于该图的所有图形都会发生位移
  // 参数： x轴位移、y轴位移
  ctx.translate(100, 100);
  ```
  
- #### 28. scale方法缩放
- ```js
  // scale方法缩放
  // 变换基于原点(0,0)缩放
  // 参数： x轴缩放、y轴缩放
  ctx.scale(2, 2);
  ```
  
- #### 29. rotate方法旋转
- ```js
  // rotate(旋转角 * Math.PI / 180）方法旋转
  // 位置的变换基于原点(0,0)的瞬时间旋转
  // 参数： 弧度 
  ctx.rotate(45 * Math.PI / 180);
  // 想要实现以中心点旋转
  // ctx.fillRect(-自身宽度/2, -自身高度/2, 自身宽度, 自身高度)
  ```
  
- #### 30. transform方法变换
- ```js
  // transform(a,b,c,d,e,f)方法变换 
  // 参数： 矩阵变换 
  // a,c,e 水平缩放、水平倾斜、水平平移
  // b,d,f 垂直倾斜、垂直缩放、垂直平移
  // 0,0,1 矩阵变换的第三个参数，表示是否对绘制的图形进行旋转、缩放、移动处理
  ctx.transform(1, 0, 0, 1, 0, 0);
  ```
  
- #### 31. setTransform方法重置变换
- ```js
  // setTransform方法重置变换
  // 参数： 矩阵变换 
  // 0,0,1 矩阵变换的第三个参数，表示是否对绘制的图形进行旋转、缩放、移动处理
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ```
  
- #### 32. requestAnimationFrame方法做动画 
- ```js
  // requestAnimationFrame(回调函数)方法 
  // 浏览器内置方法，仅限于浏览器使用
  // 参数： 回调函数
  // 返回值： 定时器ID
  // 作用： 设置定时器
  // 定义回调
  function loop(){
   requestAnimationFrame(loop);
  }
  let id = requestAnimationFrame(loop);
  // cancelAnimationFrame(定时器ID)方法清除动画
  cancelAnimationFrame(id);
  ```