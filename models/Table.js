const {Schema,model} = require("mongoose");
const schema = new Schema({
  date:{
    required:true,
    type:String
  },
  name:{
    required:true,
    type:String
  },
  count:{
    required:true,
    type:Number
  },
  distance:{
    required:true,
    type:Number
  },
});
module.exports = new model('Table',schema);