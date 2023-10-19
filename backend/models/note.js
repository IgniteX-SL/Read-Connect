const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const NoteSchema=new Schema({
    bookID:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    }    
})
const Note=mongoose.model("Note",NoteSchema);
module.exports=Note;