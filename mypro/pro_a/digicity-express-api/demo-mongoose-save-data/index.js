
var express = require('express');
var app = express();

// var data = {
//   title: "myTitle",
//   content: "myContent"
// }

app.post('/posts', function(req, res){
  console.log('hello')
  // post = new Post(data)
  // post.save()
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
