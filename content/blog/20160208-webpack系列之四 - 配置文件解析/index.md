---
title: "webpack系列之四－资源文件的整合"
date: "2016-02-08"
---

### css的提取和合并
在webpack模版插件下，可以对css做提取和合并成一个文件，从而达到优化性能和方便管理的目的。比如我们现在需要index.js文件中引入两个css文件：

```
require('./main.css');
require('./common.css');
```
提取和合并的工作就需要用到插件‘extract-text-webpack-plugin’，安装代码如下：

```
npm install extract-text-webpack-plugin --save-dev
```

首先在配置文件中该插件，并创建一个实例。

```
var ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');
var extractCss = new ExtractTextWebpackPlugin('[name].css');
```

> [name]类似output配置节中的变量，等于对应模块的名称，其他几个变量可在[对应网站](https://github.com/webpack/extract-text-webpack-plugin)查询

然后，我们需要修改module的loaders配置节中针对css文件的部分，如下：

```
{test: /\.css$/, loader: extractCss.extract('style','css')}
```

最后在plugins配置节加入这个插件的实例。

```
plugins:[
	...,
	extractCss,
	...
]
```

运行编译命令：webpack。编译后的文件就多来一个index.css,这个文件的内容合并main.css和common.css的内容。而且模版生成的html页面里，head标签自动加入了css引用的代码，省去了手工处理的麻烦，如下：

```
<head>
    <meta charset="utf-8">
    <title></title>
  <link href="index.css" rel="stylesheet"></head>
  <body>
```

如前面提到的，通过这样的处理不但让css文件方便管理之外，还减少了请求次数，提高了性能。

css和img的抽取

### 图片的提取
假如项目中需要用到图片该怎么处理呢？比如现在我们在模版文件用img标签来引入一张图片。

```
<img src="./image/what-is-webpack.png" />
```

现在在项目下添加img目录，并在其中放入一张图片(what-is-webpack.png)。然后我们在index.js这个入口文件加入引用代码。

```
import './imgs/what-is-webpack.png'
```

然后我们用最基本的文件加载器file-loader处理图片，安装命令如下:

```
npm install file-loader --save-dev
```

然后在配置文件的module字段区域添加如下代码，其中name=[name].[ext]表示编译时命名文件的规则。 

```
{test: /\.png$/, loader:'file?name=[name].[ext]'}
```
 
>  [name]和[ext]是其内置的变量，除此之外还有[path]，[hash]等，详细的说明可到[对应网站](https://github.com/webpack/file-loader)查询

执行webpack命令进行编译，图片就会出现在发布目录下。假如你想把图片放在某个目录下，只要像下面代码，在前面加目录名就行了。

```
{test: /\.png$/, loader:'file?name=image/[name].[ext]'}
```


### 示例代码如下

本文代码可在[此处](https://github.com/twomeetings/webpackPluginExtension)查看。
