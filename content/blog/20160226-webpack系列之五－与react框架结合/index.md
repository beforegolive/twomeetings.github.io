---
title: "webpack系列之五－与react框架结合"
date: "2016-02-26"
---

前四篇文章介绍了webpack基本的使用之后，这一篇逐步演示一个webpack结合react的项目，其中只包含react最基本的使用，所以没用过react的不必担心。当然，也可以通过[react系列文章](http://twomeetings.github.io/2016/05/08/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E6%96%87%E6%B1%87%E6%80%BB/)查看其用法。

### 初始化项目

首先，在一个目录下初始化项目，执行以下命令，然后一路回车到底。

```
npm init
```

> 初始化时不要将项目名称命名为模块名，比如react，这样会导致下面的react安装出错。

假如没有安装过webpack的，需要先将webpack安装到全局环境，可顺便在此处连简易服务器组件webpack-dev-server一起安装，该组件说明可在[系列文章第一篇](http://twomeetings.github.io/2016/01/05/Webpack%20%E7%B3%BB%E5%88%97%E5%BC%80%E7%AF%87%E4%B8%80/)找到。

```
npm install webpack webpack-dev-server -g
```

### 添加webpack配置文件

添加配置文件webpack.config.js,将index.js做为模块入口，且用加载器babel-loader来处理js文件，内容如下：
```
module.exports={
  entry:'./index.js',
  output:{
    path: __dirname+'/dist',
    filename: "bundle_[name].js"
  },
  module:{
    loaders:[
      {test: /\.jsx?$/, loader:"babel"}
    ]
  }
};
```

> 配置文件内各节点的含义可查阅[系列文章第二篇](http://twomeetings.github.io/2016/01/15/webpack%E7%B3%BB%E5%88%97%E4%BA%8C%20%EF%BC%8D%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6/)

### 安装react相关的组件

为了让react能运作正常，除了加载器babel-loader，还需要另外两个插件babel-preset-es2015，babel-preset-react，前者用来支持ES6语法，后者则是支持react语法，安装命令如下：

```
npm install babel-loader babel-preset-es2015 babel-preset-react --save
```

这两个语法插件需写在配置文件中才能生效，像这样：

```
{
    {test: /\.jsx?$/, loader:"babel", query : { presets:['es2015','react']}}
}
```

或者也可添加一个名为.babelrc的文件，填入以下内容，编译时该文件会被自动加载。两种方法都可，这里我们采用后者。

```
{
  "presets":["es2015", "react"]
}
```

> 假如不使用babel-preset-es2015，es6的语法（如import）将无法被识别。

现在所有准备工作就绪，我们现在执行安装命令引入react，当前版本的react推荐使用react-dom来操作html元素，所以要一并安装

```
npm install react react-dom --save
```

### 编写React代码

添加入口文件index.js，编写一个名为HelloWorld的组件，在"id＝react-div"的html元素上呈现一段文字，代码如下：

```
import React from 'react'
import ReactDOM from 'react-dom'

var HelloWorld=React.createClass({
  render(){
    return(
      <p>Hello World, Hello React. </p>
    )
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('react-div')
)	
```

现在只需一个包含id为react-div元素的html页面就可以看到最终效果，我们可以手动添加，也可以利用[系列文章第三篇](http://twomeetings.github.io/2016/01/19/webpack%E7%B3%BB%E5%88%97%E4%B9%8B%E4%B8%89%EF%BC%8Dplugin%E6%8F%92%E4%BB%B6/)中谈及的模板插件来创建页面。

### 模版插件添加HTML页面
安装模版插件html-webpack-plugin，因为其依赖webpack，所以要一并安装，执行命令如下：

```
npm install webpack html-webpack-plugin --save
```

修改配置文件为如下所示：

```
var HtmlWebpackplugin=require('html-webpack-plugin');

module.exports={
  entry:{
    index : './index.js'
  },
  output:{
    path: __dirname+'/dist',
    filename: "bundle_[name].js"
  },
  module:{
    loaders:[
      {test: /\.jsx?$/, exclude:/node_modules/, loader:"babel"}
    ]
  },
  plugins:[
    new HtmlWebpackplugin({title:'Index Page', template:'template.html', filename:'index.html', chunks:['index']})
  ]
};
```

添加模板文件template.html:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id='react-div'></div>
  </body>
</html>
```

执行编译命令：
 
```
webpack
```

编译成功后，再执行下面命令启动简易服务器。

```
webpack-dev-server
```

最后，就可以通过浏览器访问服务器默认地址 http://localhost:8080/webpack-dev-server/ 查看效果。

### 示例代码
这样一个webpack和react相结合的项目就搭建完成，假如你按上面步骤操作碰到了问题，可直接到[这里](https://github.com/twomeetings/webpackAndReact)下载示例代码。
