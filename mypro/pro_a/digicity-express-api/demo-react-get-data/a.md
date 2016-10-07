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
