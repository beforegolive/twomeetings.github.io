---
title: webpack系列－开篇
date: "2016-01-08"
---
### 为什么要用Webpack？它是什么？
随着nodejs的迅猛发展，javascript不断进化，且逐渐变成服务器端开发的主流，而在前端领域它能做的事情也越来越多。可是，不断增多的js代码管理起来却让人头疼，模块化是唯一的解决办法，常见的做法是将不同功能的js分割作为单独模块。
```
<script src="module1.js"></script>
<script src="module2.js"></script>
<script src="module3.js"></script>`
```
但这种做法有几点问题：
1. 全局变量可能冲突
2. 加载顺序无法保证
3. 模块之间可能存在依赖
4. 在大项目里，模块过多难以管理

在nodejs领域，通过CommonJS规范和AMD，这些问题得到了解决。所谓CommonJS，简单来说就是可用关键字require加载模块：

```
var foo = require('foo');
```
这种加载方式是同步的，在浏览器常常需异步加载，这时就涉及到了AMD的异步加载方式。
```
require(["module", "../file"], function(module, file) { /* ... */ });

define("mymodule", ["dep1", "dep2"], function(d1, d2) {
  return someExportedValue;
});
```

这解决了异步但不可避免的让代码更难阅读和维护。除此之外，随着ECMAScript6的推行，它也带来自己的模块加载方式，让模块加载这件事变的更加复杂。

Webpack是一个模块化管理系统，使用它的好处有以下三点：
1. 它可以统一模块的加载方式给开发者带来便捷。
2. 它可以利用已存在的nodejs模块，将其应用到浏览器前端。
3. 除了javascript，它可以模块化web前端相关的一切元素，图片，css，html等等。

### 用webpack创建项目
首先，你需要用nodejs来安装webpack，假如对nodejs不熟悉也没有关系，将其当作是一个安装工具，常用的命令也不过3句。下载nodejs并安装后，在一个文件目录下执行如下命令，用来初始化项目。
```
npm init
```

之后，运行下面命令安装webpack，命令后的-g，表示将其安装为全局模块：
```
npm install webpack -g
```

这时可用编辑器（Atom或VsCode）打开该项目，添加以下两个文件：
```
// 添加 entry.js
docuemnt.write("It works").
```

```
// 添加 index.html
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </body>
</html>
```

接着执行一下命令：
```
webpack ./entry.js bundle.js
```

这时用浏览器打开index.html文件，你能看到"It works"显示在页面上。
![](http://7xtbg7.com2.z0.glb.clouddn.com/webpack1-1)

### 引用第二个文件
接着添加一个content.js文件：

```
// 添加 content.js
module.exports= "It works from content.js";
```

```
// 修改entry.js
document.write(require("./content.js")
```

重新运行命令
```
webpack ./entry.js bundle.js
```

刷新那个页面你会看到更新的内容：
```
It works from content.js
```

### 第一个加载器(loader)
现在添加一个css文件，webpack本身职能处理javascript代码，所以我们需要加载器css-loader来处理css文件，同时我们需要style-loader来处理css文件中的样式。执行命令如下：
`npm install css-loader style-loader --save`

现在做如下操作：
```
// 添加 style.css
body{
	background: yellow;
}
```

```
// 更新 entry.js
require('!style!css!./style.css');
document.write(require('./content.js'))
```

重新执行命令：
```
webpack ./entry.js bundle.js
```

刷新页面，应该能看到背景色的变化。

### 配置文件
现在将上面对例子移动到配置文件中。

```
// 创建 webpack.config.js
module.exports={
  entry:'./entry.js',
  output:{
    path: __dirname,
    filename: "bundle.js"
  },
  module:{
    loaders:[
      {test: /\.css$/, loader:"style!css"}
    ]
  }
};
```

现在我们只要运行命令：
```
webpack
```

webpack会尝试加载当前目录下的webpack.config.js文件，这样就可以完成编译。

### 监控模式
如果不想每次更改后都手动执行一下，可以在最开始执行下面的命令：
```
wepack --watch
```

这样webpack会自动监控每一个文件，假如有更新，则会自动重新编译。

### 开发服务器
使用开发服务器模块是webpack开发中不可缺少的，它会绑定一个简便服务器到localhost:8080，每次有改动会自动编译，你可以通过浏览器访问localhost:8080/webpack-dev-server/bundle来查看页面，方便调试。
开发服务器的模块名是webpack-dev-server,安装命令如下：
```
npm install webpack-dev-server -g
```

> 记得也要将webpack安装在全局，此后命令行下执行webpack-dev-server即可开启服务

### 示例代码
示例代码可在[此处](https://github.com/twomeetings/webpackExample)找到。

### 参考链接
1. http://javascript.ruanyifeng.com/nodejs/module.html
2. http://webpack.github.io/docs/motivation.html
3. http://webpack.github.io/docs/tutorials/getting-started/
