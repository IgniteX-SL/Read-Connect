const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const BookReservationSchema=new Schema({
    memberID:{
        type:String,
        required:true
    },
    bookID:{
        type:String,
        required:true
    },
    reservationStartDate:{
        type:Date,
        required:true
    },
    reservationEndDate:{
        type:Date,
        required:true
    },
    reservationStaffID:{
        type:String,
        required:false
    },

})
const BookReservation=mongoose.model("BookReservation",BookReservationSchema);
module.exports=BookReservation;