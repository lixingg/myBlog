# Unity 
### 1、什么是Unity
Unity 是一个跨平台的游戏开发引擎，由 Unity Technologies 开发。它允许开发者创建 2D 和 3D 游戏，以及虚拟现实（VR）和增强现实（AR）应用程序。
Unity 支持多种编程语言，包括 C#、JavaScript 和 Boo，并且可以发布到多种平台，包括 Windows、Mac、Linux、iOS、Android、Web 和 VR/AR 设备

### 1.Unity 下载
[Unity 官方网站](https://unity.com/)
- 1.注册账号
- 2.下载 unity hub 并安装
- 3.安装完成后，打开 并登录
- 4.点击跳过安装，进入下一页
- 5.选择不再提示， 并同意协议
- 6.点击齿轮设置按钮，选择Appearance，选择简体中文
- 7.点击许可证，选择免费个人版
- 8.点击安装，选择编辑器安装的位置
- 9.点击安装编辑器，选择要安装的版本（LTS版本稳定版本）
- 10.点击安装，勾选：文档 、简体中文、Microsoft Visual Studio Community（编辑器）
- 11.点击继续，同意条款，并安装
- 12.点击项目，选择要创建的项目类型，填写项目名称，项目存放位置点击创建项目（有点耗时，耐心等待）
- 13.项目创建完成会开启新的窗口，点击右上角的layout，选择布局（by 3）
- 14.点击Editor，选择Edit，选择Preferences，选择External Tools，选择Visual Studio，选择Visual Studio Community，点击确定
- 15.点击Editor，选择Edit，选择Preferences，选择Language，选择简体中文，（关闭编辑器重启项目生效）

```text
Unity Hub破解
1.退出UnityHub,安装好nodejs后，用Win+R输入"cmd"执行以下命令

npm install -g asar
2.打开UnityHub安装目录如 C:\Program Files\Unity Hub\resources。
3.在C:\Program Files\Unity Hub\resources打开命令行,执行以下命令解压app.asar。

C:\Program Files\Unity Hub\resources> asar extract .\app.asar app
解压后删除C:\Program Files\Unity Hub\resources\app.asar。
4.修改C:\Program Files\Unity Hub\resources\app\src\services\licenseService\licenseClient.js

复制代码
getLicenseInfo(callback) {
    // load license
    // get latest data from licenseCore
    //licenseInfo.activated = licenseCore.getLicenseToken().length > 0;//注释这行
    licenseInfo.activated = true;//新增这行
    licenseInfo.flow = licenseCore.getLicenseKind();
复制代码
5.C:\Program Files\Unity Hub\resources\app\src\services\licenseService\licenseCore.js

verifyLicenseData(xml) {
    return new Promise((resolve, reject) => {
        resolve(true);//新增这行
      if (xml === '') {
```

### 2、Unity 编辑器
#### 1.常用快捷键
- 1.按住鼠标滚轮，拖动场景
- 2.滑动鼠标滚轮，缩放场景
- 3.右键，旋转视角
- 4.右键+W、A、S、D，漫游视角，同时按下Shift可加速移动
- 5.Alt+鼠标左键，环视
- 6.Alt+鼠标右键，视角拉近/拉远
- 7.在Scene场景中选中某一物体按住F，或在Hierarchy面板中双击该物体，可将视角聚焦至该物体
- 8.选中摄像机+Ctrl+Shift+F，快速设置摄像机到指定视角

#### 2.Tools
- <img src="/web/unity/unity01.png">
- 从左到右依次是ViewTool、MoveTool、RotateTool、ScaleTool、RectTool、TransformTool
- ps：对应快捷键依次是Q、W、E、R、T、Y
- ViewTool：拖动场景（鼠标左键）
- <img src="/web/unity/unity02.png">
- MoveTool：平移物体
- <img src="/web/unity/unity03.png">
- ScaleTool：缩放物体
- <img src="/web/unity/unity04.png">

#### 3.定点吸附
- 选择平移工具后按住V键，选择物体的某一定点。确定顶点后即可拖拽至另一物体的某个顶点上
- <img src="/web/unity/unity05.png">

#### 4.播放控件
- <img src="/web/unity/unity06.png">
- 从左到右依次是运行游戏、暂停游戏、逐帧播放
- ps：在运行模式下，任何更改只是暂时的，在退出运行时会重置复位

#### 5.视图
- <img src="/web/unity/unity07.png">
- ISO：正交模式
- <img src="/web/unity/unity08.png">
- Persp：透视模式（近大远小）
- <img src="/web/unity/unity09.png">

#### 6.Center与Pivot
- <img src="/web/unity/unity10.png">
- Global：世界坐标
- Local：自身坐标

#### 7.场景、游戏对象与组件间的关系
- **场景Scene：** 是一组相关联的游戏对象GameObject的集合，通常游戏中每个关卡就是一个场景，用于展现当前关卡中的所有物体
- **游戏对象GameObject：** 是运行时出现在场景中的游戏物体（人物、地形、树木.......），同时是一种容器（父、子物体），也可以挂载组件Component
- 在Hierarchy面板中，将一个物体拖拽至另外一个物体中。子物体将继承父物体的移动，旋转和缩放属性，但子物体不影响父物体
- <img src="/web/unity/unity11.png">
- ps：此时，子物体全局坐标作为参考系，而是以父物体的自身坐标作为参考系（如子物体坐标为（0,0,0）时，与父物体重合）
- **组件Component：** 是游戏对象的功能模块。每个组件都是一个类的实例
- **一些常见的组件：**
- **Transform 变换组件：** 决定物体位置、旋转、缩放比
- **Camera 摄像机：** 向玩家捕获和显示世界
- **Flare Layer 耀斑层：** 激活可显示光源耀斑
- **GUI Layer：** 激活可渲染二维GUI元素
- **Audio Listener 音频监听器：** 接收场景输入的音频源AudioSource并通过计算机的扬声器播放声音
- **Mesh Filter 网格过滤器：** 用于从资源中获取网格信息
- **Mesh Renderer 网格渲染器：** 从网格过滤器中获得几何形状，再根据变化组件定义的位置进行渲染（模型的显示需要网格过滤器和网格渲染器）
- <img src="/web/unity/unity12.png">

#### 8.纹理、着色器与材质间的关系
- <img src="/web/unity/unity13.png">

#### 9.Rendering Mode 
- <img src="/web/unity/unity14.png">
- **Opaque：** 不透明
- <img src="/web/unity/unity15.png">
- **Cutout 镂空：** 用于完全透明或完全不透明物体，如栅栏（本质上是只显示图片的透明通道隐藏，仅显示不透明的部分）
- <img src="/web/unity/unity16.png">
- **Transparent 透明：** 用于半透明和全透明物体，如玻璃（alpha=0时，完全透明）
- <img src="/web/unity/unity17.png">
- **Fade 渐变：** 用于需要淡入淡出的物体（alpha=0时，完全淡出）
- <img src="/web/unity/unity18.png">
- ps： Transparent和Fade的区别在于alpha=0时，前者是完全透明仍可见，后者完全淡出而不可见
- **Main Maps**
- <img src="/web/unity/unity19.png">
- **Albedo 基础贴图：** 决定物体表面纹理与颜色
- **Metallic 金属：** 使用金属特性模拟外观
- **Smoothness光滑度：** 设置物体表面光滑程度
- **Normal Map 法线贴图：** 描述物体表面凹凸程度
- **Emission 自发光：** 控制物体表面自发光颜色和贴图
- - 1.None：不影响环境
- - 2.Realtime：实时动态改变
- - 3.Backed：烘焙生效

#### 9.Camera
- <img src="/web/unity/unity20.png">
- **Clear Flags 清除标识：** 决定屏幕的空白部分如何处理
- 1.**Skybox 天空盒：** 空白部分显示天空盒图案
- <img src="/web/unity/unity21.png">
- 2.**Solid Color 纯色：** 空白部分显示背景颜色
- <img src="/web/unity/unity22.png">
- 3.**Depth Only 仅深度：** 画中画效果时，小画面摄像机选择该项可清除屏幕空部分信息只保留物体颜色信息
- Depth Only 
- <img src="/web/unity/unity23.png">
- 非Depth Only（Skybox）
- <img src="/web/unity/unity24.png">
- **Don’t Clear 不清除：** 不清除任何颜色或深度缓存
- <img src="/web/unity/unity25.png">
- **Background 背景：** 所有元素绘制后，没有天空盒的情况下，剩余屏幕的颜色
- **Culling Mask 选择遮蔽层：** 选择要照射的层Layer
- **Projection 投射方式：**
- - 1.**Perspective 透视：** 透视图，物体具有近大远小效果
- - <img src="/web/unity/unity26.png">
- - 2.**Orthographic 正交：** 摄像机会均匀地渲染物体，没有透视感，通常小地图使用
- - <img src="/web/unity/unity27.png">
- **Size 大小(正交模式)：** 摄影机视口的大小
- **Field of view 视野(透视模式)：** 设置相机视野的远近距离
- **Clipping Planes 裁剪面：** 相机到开始和结束渲染的距离
- **Viewport Rect 视口矩形：** 标明这台相机视图将会在屏幕上绘制的屏幕坐标
- - 1.**X：** 摄像机视图的开始水平位置
- - 2.**Y：** 摄像机视图的开始垂直位置
- - 3.**W：** 摄像机输出在屏幕上的宽度
- - 4.**H：** 摄像机输出在屏幕上的高度
- **Depth 深度：** 相机在渲染顺序上的位置。具有较低深度的摄像机将在较高深度的摄像机之前渲染
#### 10.天空盒
- 1.将摄像机的Clear Flags属性设置为Skybox并为其添加组件Skybox
- <img src="/web/unity/unity28.png">
- 2.Window—>Rendering—>Lighting—>Environment
- <img src="/web/unity/unity29.png">
- **6 Sided**
- **Tint Color：** 色彩
- **Exposure：** 亮度
- **Rotation：** 旋转 
- <img src="/web/unity/unity30.png">
- **Procedural**
- **Sun** 太阳模式：
- 1.**None：** 没有
- 2.**Simple：** 简单
- 3.**Hight Quality：** 高质量
- <img src="/web/unity/unity31.png">
- **Atmoshpere Thickness：** 大气层厚度
- **Ground：** 地面颜色
- ps：如果为Environment Lighting的Sun属性设置一个平行光，场景中会根据平行光角度自动创建太阳，并且位置随平行光旋转而改变。
如果不设置，系统将默认选择场景中最亮的平行光
#### 11.渲染管线
- 图形数据在GPU上经过运算处理，最后输出到屏幕的过程
- <img src="/web/unity/unity32.png">
- **顶点处理：** 接收模型顶点数据；坐标系转换
- **图元装配**
- 组装面：连接相邻的顶点，绘制为三角面
- <img src="/web/unity/unity33.png">
- **光栅化：** 计算三角面上的像素，并为后面着色阶段提供合理的插值参数
- <img src="/web/unity/unity34.png">
- **像素处理：** 对每个像素区域进行着色；写入到缓存中
- **缓存：** 一个存储像素数据的内存块，最重要的缓存是帧缓存与深度缓存
- - 1.**帧缓存：** 存储每个像素的色彩，即渲染后的图像。帧缓存常常在显存中，显卡不断读取并输出到屏幕中
- - 2.**深度缓存z-buffer：** 存储像素的深度信息，即物体到摄像机的距离。光栅化时便计算各像素的深度值，如果新的深度值比现有值更近，
则像素颜色被写到帧缓存，并替换深度缓存
- 在Game面板中点击Stats选项，Statistics面板中的Batchs就是Draw Call
- <img src="/web/unity/unity35.png">

#### 12.Profiler
- Unity 性能分析器 (Unity Profiler) 是一种可以用来获取应用程序性能信息的工具。可以将性能分析器连接到网络中的设备或连接到已连接到计算机的设备，
从而测试应用程序在目标发布平台上的运行情况。还可以在 Editor 中运行性能分析器，从而在开发应用程序时概要了解资源分配情况。
- Window—>Analysis—>Profiler
- <img src="/web/unity/unity36.png">

#### 13.Occlusion Culling 遮挡剔除
- **遮挡剔除：** 当物体被送进渲染流水线之前，将摄像机视角内看不到的物体进行剔除，从而减少了每帧渲染数据量，提高渲染性能
将场景中的物体标记为Occlusion Static或Occludee Static，亦或是均标记 
- <img src="/web/unity/unity37.png">
- Occluder static：静态遮挡物体
- Occludee static：静态被遮挡物体
- 勾选上Occluder static或Occludee static的物体会参与遮挡踢除系统的预计算过程，并保留计算结果，在运行时可提高遮挡踢除效率。
建议将场景中无需移动的物体勾上这两个选项
- ps：透明物体不能遮挡，以及小物件，都不可能阻挡其他的东西，应标记为Occludees
- Window—>Rendering—>Occlusion Culling
- <img src="/web/unity/unity38.png">
- **Smallest Occluder：** 最小遮挡物的尺寸（能遮挡其他物体的最小尺寸，任何小于这个尺寸的背后物体将被遮挡）
- **Smallest Hole：** 该值表示相机应该看到的几何图形之间的最小间隙。
- **Backface Threshold：** Unity的遮挡使用数据大小优化，通过测试背面减少不必要的细节。默认值为100是强大的，不会从数据集中删除背面。
值为5将根据具有可见背面的位置积极减少数据。这个想法通常，有效的摄像机位置通常不会看到许多背景 - 例如，地形下面的视图，
或者您不应该能够到达的固体对象中的视图。在阈值低于100的情况下，Unity将完全从数据集中删除这些区域，从而减少遮挡的数据大小。
- 创建遮挡区域
- <img src="/web/unity/unity39.png">
- <img src="/web/unity/unity40.png">
- 点击Bake后，在Scene面板的右下角的Occlusion Culling中选择Visualize
- ps：记得保存Scene后在进行Bake，否则会出现No asset directiory的问题
- <img src="/web/unity/unity41.png">
- <img src="/web/unity/unity42.png">
#### 14.LOD Group
- LOD技术指根据物体模型的节点在显示环境中所处的位置和重要度，决定物体渲染的资源分配，降低非重要物体的面数和细节度，从而获得高效率的渲染运算
- 创建一个空物体Cube并挂载LOD Group组件，然后为其创建三个Cube作为子物体，分别命名为LOD0、LOD1、LOD2
- <img src="/web/unity/unity43.png">
- <img src="/web/unity/unity44.png">
- 为三个作为子物体的Cube创建不同颜色的材质以示区分，并将LOD Group中的LOD 0、LOD 1、LOD 2的Renders依次设置为不同的子物体；
滑动蓝色的摄像机标志即可观察不同距离的LOD
- <img src="/web/unity/unity45.png">
#### 15.直接光照
- 从光源直接发出的光，通过Light组件实现
- <img src="/web/unity/unity46.png">
- <img src="/web/unity/unity47.png">
- **Point Light 点光源：** 在灯光位置上向四周发射光线，可以照射其范围内的所有对象，用于模拟灯泡
- **Directional Light 平行光：** 平行发射光线，可以照射场景里所有物体，用于模拟太阳
- **Point Light 点光源：** 在灯光位置上向四周发射光线，可以照射其范围内的所有对象，用于模拟灯泡
- **Area Light 区域光：** 由一个面向一个方向发射光线，只照射该区域内物体，仅烘焙时有效，用在光线较为集中的区域
- **Range 范围：** 光从物体的中心发射的范围。仅适用于点光源和聚光灯。
- **Spot Angle 聚光角度：** 灯光的聚光角度。只适用于聚光灯
- **Color 颜色：** 光线的颜色
- **Shadow Type 阴影类型：**
- - 1.**No Shadows：** 无阴影
- - 2.**Hard：** 硬阴影
- - 3.**Soft：** 软阴影
- **Culling Mask 选择遮蔽层：** 选择要照射的层Layer
- <img src="/web/unity/unity48.png">
- **Receive Shadows：** 当前物体是否接收阴影
- <img src="/web/unity/unity49.png">
- **Cast Shodows：**
- - 1.**Off：** 不投射阴影
- - 2.**On：** 投射阴影
- - 3.**Two Sided：** 双面阴影
- - 4.**Shadows Only：** 隐藏物体只投射阴影

#### 16.环境光照
- 作用于场景内所有物体的光照 
- <img src="/web/unity/unity50.png">
- <img src="/web/unity/unity51.png">
- 1.**Skybox：** 通过天空盒颜色设置环境光照
- 2.**Gradient：** 梯度颜色
- 3.**Color：** 纯色
- <img src="/web/unity/unity52.png">
- 1.**Sky：** 天空颜色
- 2.**Equator：** 地平线颜色
- 3.**Ground：** 地面颜色

#### 17.游戏脚本（c#）
- **MonoBehaviour：** 所有脚本的基类，包含生命周期方法
```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class move : MonoBehaviour
{
    private void Awake()
    {
        Debug.Log("最早调用，所以一般可以在此实现单例模式，Awake");
    }

    private void OnEnable()
    {
        Debug.Log("组件激活后即：Awake执行之后，调用 OnEnable");
    }


    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("在Update之前，OnEnable之后调用第一次，可以在此设置一些初始值，Start");
    }

    // Update is called once per frame
    void Update()
    {
      //  Debug.Log("每一帧会调用一次，Update");
    }

    private void LateUpdate()
    {
       // Debug.Log("Update执行完，执行，LateUpdate");
    }

    private void FixedUpdate()
    {
      //  Debug.Log("每隔固定间隔刷新一次，FixedUpdate");
    }

    private void OnDisable()
    {
        Debug.Log("非激活状态调用，OnDisable");

    }

    private void OnDestroy()
    {
        Debug.Log("组件销毁时调用一次，OnDestroy");
    }
}
```
- 位置方向 Vector3的使用
```cs
using System.Collections;
using System.Collections.Generic;
using Unity.Burst.Intrinsics;
using UnityEngine;

public class Rotate : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        // 向量 | 坐标 | 旋转 | 缩放
        Vector3 v = new Vector3(1, 2, 0.5f);
        // 通过静态属性，快速获得结构体
        v = Vector3.zero;
        v = Vector3.right;
        // v = Vector3.one;
        //  v = Vector3.back;
        //  v = Vector3.forward;
        // v = Vector3.down;
        // 修改属性值
        v.x = 1;
        Vector3 v2 = Vector3.forward;
        // 两点间的夹角
        Debug.Log(Vector3.Angle(v, v2));
        // 两点间的距离
        Debug.Log(Vector3.Distance(v, v2));
        // 点乘
        Debug.Log(Vector3.Dot(v, v2));
        // 叉乘
        Debug.Log(Vector3.Cross(v, v2));
        // 插值
        Debug.Log(Vector3.Lerp(Vector3.zero, Vector3.one, 0.5f));
        // 向量的模
        Debug.Log(v.magnitude);
        // 规范化的向量
        Debug.Log(v.normalized);
        // 
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
```
- 方向的描述，欧拉角与四元数的转换
```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateTest : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        // 旋转：欧拉角,四元数
        Vector3 rotate = new Vector3(0, 30, 0);

        Quaternion quaternion = new Quaternion();
        // 创建无旋转的四元数
        Quaternion quaternion1 = Quaternion.identity;
        // 通过欧拉角转四元数
        quaternion = Quaternion.Euler(rotate);
        // 四元数转欧拉角
        rotate = quaternion.eulerAngles;
        // 看向一个物体(0,0,0)
        quaternion = Quaternion.LookRotation(new Vector3(0, 0, 0));
    }

    // Update is called once per frame
    void Update()
    {

    }
}

```
- Debug帮助调试
```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DebugTest : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("正常调试打印");
        Debug.LogWarning("警告调试打印");
        Debug.LogError("报错调试打印");
    }

    // Update is called once per frame
    void Update()
    {
        // 绘制一条线： 起点 终点 颜色
        Debug.DrawLine(Vector3.zero, Vector3.one,Color.blue);
        // 绘制一条射线：起点 射线 颜色
        Debug.DrawRay(Vector3.zero, Vector3.up, Color.red);

    }
}
```

