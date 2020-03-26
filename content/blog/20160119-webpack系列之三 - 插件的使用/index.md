---
title: "webpack系列之三 - 插件的使用"
date: "2016-01-19"
---
webpack框架内置了20多种插件，除此之外的开源社区也存在很多优秀的第三方插件，利用这些插件可以轻松扩展webpack到功能，给使用者带来极大的便利。

在web开发中，模版文件基本不可或缺，它抽取出通用部分，为编写代码节省了大量的时间。在webpack中也有模版文件的功能，不过它是通过第三方插件来实现的，这个插件叫HtmlWebpackPlugin。可通过下面命令安装：

```
npm install html-webpack-plugin --save
```

现在我们通过这个插件来创建index页面。先在一个目录下初始化项目:

```
npm init
```

然后创建一个模块入口文件index.js。

```
// add index.js
console.log('index')
```

然后我们来创建模版文件template.html。

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div>
    	<h2><%- htmlWebpackPlugin.options.title %></h2>
    </div>
  </body>
</html>
```

模版文件中有一句表达式<%- htmlWebpackPlugin.options.title %>，用来显示某个对象点title属性，这个属性就来自于webpack与HtmlWebpackPlugin插件相关的配置节点。

 ```
 // 创建 webpack.config.js
 module.exports={
  entry:'./index.js',
  output:{
    path: __dirname,
    filename: "bundle_[name].js"
  },
  plugins:[
  	new HtmlWebpackPlugin({title:'Index Page',template:'template.html',filename:'index.html', chunks:['index']})
  ]
};
 ```
 
可以看到对应的index模块中模版插件的title值为‘Index Page’。

现在执行编译命令：
```
webpack
```

当前目录下生成index.html文件，用浏览器打开如下：

### 添加新的页面
在当前模版下，添加页面变的容易许多，比如我们添加的页面叫basic。首先添加模版入口文件basic.js，内容如下：

```
console.log('basic')
```

之后修改配置文件的entry属性，加入basic模块。

```
entry:{
	index: './index.js',
	basic: './basic.js'
}
```

然后添加一个新的HtmlWebPackPlugin插件给basic模块。

```
plugins:[
  	new HtmlWebpackPlugin({title:'Index Page',template:'template.html',filename:'index.html', chunks:['index']})
  ],
  	new HtmlWebpackPlugin({title:'Basic Page',template:'template.html',filename:'basic.html', chunks:['basic']})
  ]
```

执行编译命令：

```
webpack
```

这样以basic.js为模块的basic.html页面就添加好了。

### 模板变量
该模板插件中内置了一些变量，可以通过“<%= %>”来引用，当需要对变量中的内容编码时，可以使用“<%- %>”。具体的模版属性可以访问[此处](https://github.com/ampedandwired/html-webpack-plugin)查看官方说明。


> 模板编译时无法用console.log查看信息，此处通过Object.keys()的方式罗列出所有的属性参数。
 
### 示例代码
本文相关代码可在[此处](https://github.com/twomeetings/webpackPluginExtension)查询。