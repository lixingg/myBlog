### css内容

#### 1. 布局

- 水平居中

  ```css
  .center {
    margin: 0 auto;
  }
  ``

- 垂直居中

  ```css
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ```

- 水平垂直居中

  ```css
  .center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  ```

#### 2. 背景

- 背景图片

  ```css
  .bg-img {
    background-image: url('/logo.svg');
  }
  ```

- 背景颜色

  ```css
  .bg-color {
    background-color: #f1f1f1;
  }
  ```

- 背景重复

  ```css
  .bg-repeat {
    background-repeat: repeat;
  }
  ```

- 背景固定

  ```css
  .bg-fixed {
    background-attachment: fixed;
  }
  ```

- 背景大小

  ```css
  .bg-size {
    background-size: cover;
  }
  ```

- 背景位置

  ```css
  .bg-position {
    background-position: center;
  }
  ```

- 背景透明度

  ```css
  .bg-opacity {
    background-color: rgba(0, 0, 0, 0.5);
  }
  ```

#### 3. 文本

- 文本颜色

  ```css
  .text-color {
    color: #f1f1f1;
  }
  ```

- 文本对齐

  ```css
  .text-align {
    text-align: center;
  }
  ```

- 文本装饰

  ```css
  .text-decoration {
    text-decoration: underline;
  }
  ```

- 文本缩进

  ```css
  .text-indent {
    text-indent: 2em;
  }
  ```

- 文本行高

  ```css
  .line-height {
    line-height: 1.5;
  }
  ```

- 文本阴影

  ```css
  .text-shadow {
    text-shadow: 2px 2px #000;
  }
  ```

#### 4. 字体

- 字体大小

  ```css
  .font-size {
    font-size: 16px;
  }
  ```

- 字体粗细

  ```css
  .font-weight {
    font-weight: bold;
  }
  ```

- 字体样式

  ```css
  .font-style {
    font-style: italic;
  }
  ```

- 字体粗细和样式

  ```css
  .font-weight-style {
    font-weight: bold;
    font-style: italic;
  }
  ```

- 字体系列

  ```css
  .font-family {
    font-family: Arial, sans-serif;
  }
  ```

#### 5. 边框

- 边框样式

  ```css
  .border-style {
    border-style: solid;
  }
  ```

- 边框宽度

  ```css
  .border-width {
    border-width: 1px;
  }
  ```

- 边框颜色

  ```css
  .border-color {
    border-color: #f1f1f1;
  }
  ```

- 边框圆角

  ```css
  .border-radius {
    border-radius: 5px;
  }
  ```


