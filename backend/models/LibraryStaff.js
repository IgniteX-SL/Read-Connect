const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const LibraryStaffSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:false
    },
    age:{
        type:String,
        required:false
    },
    whatsappNumber:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    profilePicture:{
        type:Object,
        required:false
    },
    isActiveUser:{
        type:Boolean,
        required:false
    },
})
const LibraryStaff=mongoose.model("LibraryStaff",LibraryStaffSchema);
module.exports=LibraryStaff;