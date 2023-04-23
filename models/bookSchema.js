const mongoose=require("mongoose")

 const bookSchema=new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String,required:true}

 },{timestamps:true})

 const bookModel=mongoose.model("BOOKAPP",bookSchema)
 
 module.exports=bookModel
