const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const LibrarianSchema=new Schema({
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
const Librarian=mongoose.model("Librarian",LibrarianSchema);
module.exports=Librarian;