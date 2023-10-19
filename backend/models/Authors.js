const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const AuthorsSchema=new Schema({
    Name:{
        type:String,
        required:true,
        unique:true
    }
})
const Author=mongoose.model("Author",AuthorsSchema);
module.exports=Author;