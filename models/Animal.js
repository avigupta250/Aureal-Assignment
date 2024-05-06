const { Schema } = require("mongoose");
const mongoose=require("mongoose");


const AnimalSchema=new Schema({
    name:{
        type:String,
        required:true
    },
  
   about:{
    type:String,
    required:true
   },


})

module.exports=mongoose.model("Animal",AnimalSchema);