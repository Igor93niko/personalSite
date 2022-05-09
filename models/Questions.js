const {Schema,model} = require("mongoose");
const schema = new Schema({
  name:{
    required:true,
    type:String
  },
  email:{
    required:true,
    type:String
  },
  question:{
    required:true,
    type:String
  }
});
module.exports = new model('Questions',schema);