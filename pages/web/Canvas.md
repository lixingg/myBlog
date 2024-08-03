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
  