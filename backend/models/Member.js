const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const MemberSchema=new Schema({
    memberID:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    registrationNumber:{
        type:String,
        required:true,
        unique:true
    },
    NIC:{
        type:String,
        required:true
    },
    grade:{
        type:String,
        required:false
    },
    classRoom:{
        type:String,
        required:false
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
    email :{
        type:String,
        required:false
    },
    isActiveUser:{
        type:Boolean,
        required:false
    },
})
const Member=mongoose.model("Member",MemberSchema);
module.exports=Member;