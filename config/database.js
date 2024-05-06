const mongoose=require("mongoose");
require("dotenv").config();


const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/AnimalDB",{
       
    }).then(()=>{
        console.log("Database Connection Successfull")
    }).catch((error)=>{
        console.log("Connection failed with DB");
        console.error(error);
    })
}
module.exports=connectDB;