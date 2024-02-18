const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const BookBorrowalSchema=new Schema({
    memberID:{
        type:String,
        required:true
    },
    memberName:{
        type:String,
        required:true
    },
    bookID:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    dateOfBorrowal:{
        type:String,
        required:true
    },
    dateOfReturnToBe:{
        type:String,
        required:true
    },
    borrowalStaffID:{
        type:String,
        required:true
    },
    returnID:{
        type:String,
        required:true
    }
})
const BookBorrowal=mongoose.model("BookBorrowal",BookBorrowalSchema);
module.exports=BookBorrowal;