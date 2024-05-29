## Vue 专栏

### diff 算法

-  1.主流：snabbdom 、 virtual-dom
-  2.搭建环境 
```text
 1.创建一个项目
 2.npm init -y
 3.npm i -D webpack@4 webpack-cli@3 webpack-dev-server@3 
 4.npm i snabbdom -S
 5.创建并配置webpack.config.js文件
 6.修改package.json文件 dev 属性为 "webpack-dev-server --open --port 3000"
 7.根目录下创建index.js文件
 8.根目录下创建index.html文件
```
```js
//webpack.config.js
module.exports = {
    // mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './js/[name].js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        inline: true
    }
}
```
 