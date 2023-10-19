const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const ProfileSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:false
    }    
})
const Profile=mongoose.model("Profile",ProfileSchema);
module.exports=Profile;