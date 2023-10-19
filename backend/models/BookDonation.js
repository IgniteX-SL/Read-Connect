const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const BookDonationtSchema=new Schema({
    bookID:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    donatorName:{
        type:String,
        required:true,
    },
    BookDonationDate:{
        type:Date,
        required:true
    },
    donatorEmail:{
        type:String,
        required:true
    },
    donationStaffID:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const BookDonation=mongoose.model("BookDonation",BookDonationtSchema);
module.exports=BookDonation;