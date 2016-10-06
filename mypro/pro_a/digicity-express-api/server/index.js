var express = require('express');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//关闭同源策略，开放ｃｏｒｓ
var cors=require('cors');
app.use(cors());


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digicity-express-api');


var Post = require('./models/post');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});

// app.get('/', function(req, res) {
//   var page = "<form method='post' action='/posts'>" +
//              "<input type='text' name='title' />" +
//              "<input type='submit' />" +
//              "</form>"
//   res.send(page)
// })
app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts})
  });
})

app.get('/post/:id', function(req, res) {
  Post.findById({_id:req.params.id},function (err,doc) {
    if (err) return res.send('出错了');
    res.json({post: doc})
  })
})

app.post('/posts/', function(req, res) {
  // res.send('the post title is: ' + req.body.title)
  //var post = new Post({title: req.body.title});//前台来的ｔｉｔｌｅ存在ｒｅｑ．ｂｏｄｙ里，传到后台
  //console.log(req.body);
  var post = new Post({
    title:req.body.title,
    category:req.body.category,
    content:req.body.content
  });

  post.save(function(err){
    if(err) return console.log(err);//加ｒｅｔｕｒｎ如果出错后面不执行了
    console.log('saved!');
  })
  res.json({message:'成功'})//用ｊｓｏｎ方式返回
  //res.redirect('/posts');
})
app.listen(3000, function() {
  console.log('running on port 3000')
})
