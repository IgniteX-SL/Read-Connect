const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const BookRemovalSchema=new Schema({
    bookID:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    removalStaffID:{
        type:String,
        required:true
    },
    removalDate:{
        type:Date,
        required:true
    },
    removalReason:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
    
})
const BookRemoval=mongoose.model("BookRemoval",BookRemovalSchema);
module.exports=BookRemoval;