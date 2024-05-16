## HTML
 
### 1、html文档的构成
- 标签
- 属性
- 文本
- 注释

### 2、常见标签
- 段落标签 `<p></p>`
- 标题标签 `<h1></h1>`
- 换行标签 `<br>`
- 水平线标签 `<hr />`
- 图片标签 `<img />`
- 链接标签 `<a></a>`
- 区块标签 `<div></div> <span></span>`
- 列表标签 `<ul></ul> <ol></ol> <li></li>`
- 表格标签 `<table></table> <tr></tr> <td></td>`
- 表单标签 `<form></form> <input /> <textarea></textarea> <select></select> <option></option>`

### 3、行内元素有哪些？

- span img input button a b strong i em del s u ins

### 4、块级元素有哪些？

- div footer header nav section p h1 h2 h3 h4 h5 h6 ol ul li dl dt dd form table tr td

### 5、空元素有哪些？

- br hr img input link meta

### 6、行内块元素

- input textarea select img td label

### 7、元素之间的转换

- 行内元素转换为块级元素 `<div></div>`
- 块级元素转换为行内元素 `<span></span>`

```css
div{
    /* 把某元素转换成了行内元素 ==》 不独占一行且不能设置宽高*/
    display: inline;
    /* 把某元素转换成了行内块元素 ==》 不独占一行但能设置宽高*/
    display: inline-block;
    /* 把某元素转换成了块元素 ==》 独占一行且能设置宽高*/
    display: block;
}
```








