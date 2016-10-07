# mongoDB使用

## 1. 启动

    基本命令行操作：mkdir -p data/db
    mongod --dbpath=./data/db
    可以启动mongodb数据库

## 2.启动操作界面

    -　用户图形接口GUI
    -  命令行接口CLI
    对于mongodb我们使用mongo shell 这个命令行来操作
    启动Mongo shell 的形式是：mongo
[dd](http://www/baidu.com)

### 创建一个数据库
```
$ use digicity-express-api
```
数据库是mongodb中的顶级存储单位，下一级就是``集合``

###　创建一个集合
```
$ db.createCollection
```
### 插入数据记录

一个集合（例如：posts），里面可以插入多个数据记录。


### 插入一段数据
```
$ db.posts.insert({title:'myTitle',content:'myContent'})
```

### 列出当前集合所有记录详情

```
db.posts.find()
```


### hello Ada
![df](http://img06.tooopen.com/images/20160924/tooopen_sy_179904684231.jpg)

![](https://github.com/happypeter/digicity-express-api/blob/master/doc/img/001-ada.png?raw=true)
### 修改一条记录（了解内容）

 ```
 db.posts.update({_id: ObjectId('xxx')}, {$set: {title: 'mongodb'}})
 ```

 ### 删除一条记录

 ```
 db.posts.remove({_id: ObjectId('xxx')})
 ```
 ### 删除 posts 集合中的所有记录

 ```
 db.posts.remove({})
 ```

 ### 删除数据库

 假设我们的数据库叫做 digicity-express-api

 ```
 use digicity-express-api
 db.dropDatabase()
 ```

### 为什么叫记录电子版笔记？

第一个原因，使用 markdown 格式美观

>Beauty is your ablity to tame complexity

第二个原因，便于更新

第三个原因，有 git/github 控制，永远不会丢失

第四个原因，便于搜索。


我們主要基於一個 JS 庫的幫助，[Mongoose](http://mongoosejs.com/) ，它可以
 作為一個 npm 的包來安裝。

 解釋一下，一個 **JS 庫** 就是一組 **JS 接口** 的集合。庫，英文對應 library 。

 作為一個 npm 的包來安裝。

  解釋一下，一個 **JS 庫** 就是一組 **JS 接口** 的集合。庫，英文對應 library 。		  解釋一下，一個 **JS 庫** 就是一組 **JS 接口** 的集合。庫，英文對應 library 。


 ![](https://github.com/happypeter/digicity-express-api/blob/master/doc/img/002-mongoose.png?raw=true)


###　写一个最简单的express程序
```
var express = require('express')
var app = express();

app.post('/posts',function(req,res){
  console.log('hello')
  })

  app.listen(3000,function(){
    console.log('success')
    })
```
 相应的curl测试命令

```
curl --request POST localhost:3000/posts
```

如果可以运行　node index.js 的位置到`hello`


### 安装mongoose

作为一个npm包进行安装，[link]（https://www/npmjs/com/package/mongoose）

```
npm i --save mongoose
```

### 在js代码中导入ｍｏｎｇｏｏｓｅ

### 进行数据库的连接

### 定义数据库的概要 Schma

### 创建数据模型　model

### 实例化　model 得到数据对象

### 对象之上呼叫　save()

这样可以把数据保存到数据库中

![](https://github.com/happypeter/digicity-express-api/blob/c340b04015e0873c8cb7423b267aefd5c3021534/doc/img/003-curl.png?raw=true)


# Mongodb 数据库操作

### 在js代码中导入mongoose
```
var mongoose = require('mongoose')
```

### 进行数据库的连接

```
mongoose.connect('mongodb://localhost:27017/ddigicity-express-api')

```

mongoose.connect 接口用来连接我们系统上安装的mongoose数据库。

如何定位数据库的所在位置？

一种逻辑上可行的方案，就是用数据存储的文件夹的位置（比如我们前面采用的data/db文件夹），但是实际上mongoose有其他方法

mongoose的软件，运行起来类似一个网站，用链接来访问。（mongodb://loaclhost:27017）

但是，连接之后，要跟上具体的数据库名字。我们每次连接，都是连接到一个数据库。比如我们这里，就是digicity-express-api(一般与项目名同名)。

如何验证连接成功呢？用下面的代码

var db = mongoose.connection;
db.on('error',console.log);
db.once('open',function(){
  console.log('success!')
  })

看到`success` 字样表示链接成功



数据天然的具有一定的结构，比如，人员名单中，自然的会涉及姓名，年龄，籍贯等信息。
在 mongodb 这里，一个人员的信息会被作为一条记录来保存。所有信息的类型会对应成字段名，
由于是跟计算机打交道，每个字段还要涉及它的数据类型（ num，string ...) 。

那么　Ｓｃｈｅｍａ　就是用来规定一个记录的各个字段的，字段名＋数据类型
```
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title:String,
  content:String
  })

```

数据库的结构是　一个数据库里面有多个集合，一个集合里面会包含多个数据记录，

那么现在我们数据要往哪个数据库中存？这个问题通过前面的`mongoose.connect(xxx)`的语句指定了。

但是数据要保存到那个集合还没有指定，所有我们的创建语句如下：

```
var Post = mongoose.model('Post',PostSchema)

```
上面`.model()`的第一个参数，‘Ｐｏｓｔ’就为我们指定了集合的名字，会对应数据库中的posts这个集合。第二个参数就是数据schema，就是前面我们定义的。

到这里所有是；数据存储的基础
