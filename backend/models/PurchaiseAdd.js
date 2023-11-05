const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PurchaiseAddSchema=new Schema({
    bookID:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    purchaiseAddDate:{
        type:Date,
        required:true
    },
    purchaiseAddStaffID:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})
const PurchaiseAdd=mongoose.model("PurchaiseAdd",PurchaiseAddSchema);
module.exports=PurchaiseAdd;