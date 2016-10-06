var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: String,
    content:String,
    category:String
  },
  {
    timestamps:true
  }
)

module.exports = mongoose.model('Post', PostSchema);
