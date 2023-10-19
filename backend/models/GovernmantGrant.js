const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const GovernmantGrantSchema=new Schema({
    firstName:{
        type:String,
        required:true
    }
})
const GovernmantGrant=mongoose.model("GovernmantGrant",GovernmantGrantSchema);
module.exports=GovernmantGrant;