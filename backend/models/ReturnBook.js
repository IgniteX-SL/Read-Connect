const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const BookReturnSchema=new Schema({
    returnID:{
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
    },
    bookID:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    borrowalID:{
        type:String,
        required:true
    },
    dateOfReturned:{
        type:Date,
        required:true
    },
    returnStaffID:{
        type:String,
        required:true
    },
    damageID:{
        type:String,
        required:false
    }    
})
const BookReturn=mongoose.model("BookReturn",BookReturnSchema);
module.exports=BookReturn;