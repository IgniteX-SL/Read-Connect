const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const BookDamagesSchema=new Schema({
    bookID:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    damageReportDate:{
        type:String,
        required:true
    },
    damageReportStaffID:{
        type:String,
        required:true
    },
    damageMemberID:{
        type:String,
        required:true
    },
    damageMemberName:{
        type:String,
        required:true
    },
    damageID:{
        type:String,
        required:true
    },
})
const BookDamages=mongoose.model("BookDamages",BookDamagesSchema);
module.exports=BookDamages;