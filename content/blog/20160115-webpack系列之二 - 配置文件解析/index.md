---
title: "webpack系列之二 - 配置文件解析"
date: "2016-01-15"
---
使用配置文件是webpack的基本用法，默认的配置文件名是webpack.config.js，只需把这个文件创建在根目录下，webpack编译时就会自动加载。

在开篇文章里，一个简单示例展示了webpack的基本机制和运作方式，例子中的配置文件内容如下：
```
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

通过这配置文件，webpack将entry.js当作入口文件，无论其内部引用了多少js文件，jquery，angularJS，react等等，最终都会被编译并重命名为一个单独文件bundle.js, 这个单独的文件即被视为模块(在webpack中被称为chunk)。

### 配置字段：entry
entry可以接受三种形式的赋值，一个字符串，一个字符串数组或者一个对象。
```
//字符串
entry:'./entry.js'

//字符串数组
entry:['./entry1.js','./entry2.js','./entry3.js']

//对象
entry:{
	name1:'./entry1.js',
	name2:'./entry2.js'
}
```

它们的区别是，第一种的模块名等于没有后缀的文件名，即entry。第二种会将数组中的文件全部编译到一个文件中，以最后一个文件名来命名模块名。第三种则是根据对象的字段，一个属性名对应一个模块，且属性名为模块名，上面的例子中会生成两个模块name1和name2.

### 配置字段：output

output用来决定输出模块的信息，比如目录或者名称。下面的代码将模块文件命名为bundle.js，并放置到当前目录下。

```
output:{
    path: __dirname,
    filename: "bundle.js"
  }
```
> __dirname是nodejs中的常量，表示当前目录

因此这段代码

所有模块输出的规则都遵守output中的配置，因此在多模块的情况下，filename为常量会造成一些问题。推荐的做法是使用变量，在output中有几个可以使用的变量来对应相应的信息。比如：
1. id
2. name
3. hash
4. chunkhash

这些变量因其对应的不同模块而不同，使用时需要放到方括号中，如[id].js,[name]_bundle.js,比如下面的示例：
```
entry:｛
	name1: './entry1.js',
	name2: './entry1.js'
｝,
  output:{
    path: __dirname,
    filename: "[name]_bundle.js"
}
```

上面的配置最终会在当前目录下生成两个模块文件name1_bundle.js和name2_bundle.js。
你可以将四个变量都写在一起，用来查看分别代表什么值。
```
filename: [id]_[name]_[hash]_[chunkhash].js
```

除此之外output还有一个较常用的的字段是publicPath,用于指定文件或图片的相对路径，用于网站对访问，有别于path字段，因为后者是本地硬盘的存储路径。
```
	output:{
		path:'/home/project/assets/',
		publicPath:'/assets/'
	}
```

```
<img src='/assets/pic.gif'
```

在output中，除了path, filename, publicPath这三个常见字段外，还有十多个不常用的字段，在此不细说，可查阅其[官方网站对应页面](http://www.google.com)。

### 配置字段：module
module字段最核心的属性就是loaders，利用nodejs庞大的插件库，可以方便的引入专门模块来处理特殊文件，比如例子中对css文件和相应语法的处理。
```
module:{
    loaders:[
      {test: /\.css$/, loader:"style!css"}
    ]
  }
```

loaders字段接受一个数组，数组中是包含指定字段的对象。其中test值是正则表达式，用来定位什么样的文件，例中/\.css$/代表以.css结尾的文件。

loader表示加载器，或者叫加载模块。通常这种模块是以loader为后缀，给loader字段赋值时，可以用全名，也可省略后缀。比如style和css的全名是style-loader和css-loader，可用下面的命令来安装：
```
npm install css-loader style-loader --save
```

loader:'style!css'表示将css和style两种加载器放到一起处理，多个加载器之间用感叹号隔开是其指定的语法，也可分开书写，便于理解。

```
{test: /\.css$/ , loaders:['style','css']}
```

> 分开写在数组中需要把字段loader改成loaders

除此之外include和exclude也是常用的两个字段，include用来指定目录，exclude用来排除目录。当项目不断变大，模块不断变多时，模块加载器要遍历的文件也越来越多，除了导致编译速度变慢外，有时还会因为加载了不该加载的文件而报错，因此限制文件目录就变的很重要。下面的代码表示只处理app/src目录下的css文件。

```
{test:/\.css$/, loaders:['style','css'], include:path.resolve(__dirname,"app/src")}
```

> __dirname时nodejs中的变量，表当前目录；path.resolve是nodejs内置的方法。

而exclude最常见的用法是排除node_modules目录，因为该目录包含项目所有的第三份模块，将其排除在外可提高编译速度。

```
exclude: /node_modules/
```

### 配置字段：plugins

webpack自身提供了一系列的插件来应对不同需求，这些插件按功能分类有30个左右，可在[官网](http://webpack.github.io)查询。这里用ProvidePlugin插件将jquery引用为全局变量在所有模块中使用，这样就不必在每个模块都添加引用jquery的代码。
```
plugins:[
	new webpack.ProvidePlugin({
		$:'jquery',
		jQuery:'jquery'
	})
]
```

使用webpack插件要记得先在配置文件中引用webpack。

```
var webpack = require('webpack')
```

更多的插件相关内容，会在接下来的系列文章详细讲解。
