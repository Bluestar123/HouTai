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
