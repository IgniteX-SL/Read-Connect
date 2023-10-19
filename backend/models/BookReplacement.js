const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const BookReplacementSchema=new Schema({
    bookID:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    replacementDate:{
        type:Date,
        required:true
    },
    replacementStaffID:{
        type:String,
        required:true
    },
    replacementReason:{
        type:String,
        required:true
    },
    memberID:{
        type:String,
        required:true
    },
    memberName:{
        type:String,
        required:true
    }    
})
const BookReplacement=mongoose.model("BookReplacement",BookReplacementSchema);
module.exports=BookReplacement;