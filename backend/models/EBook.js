const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const EBookSchema=new Schema({
    bookName:{
        type:String,
        required:true
    },
    bookID:{
        type:String,
        required:true
    },
    bookObject:{
        type:object,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    additionalContributors:{
        type:String,
        required:false
    },
    genresAndCategories:{
        type:String,
        required:true
    },
    tagsAndKeywords:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    edition:{
        type:String,
        required:true
    },
    dateOfEntry:{
        type:String,
        required:true
    },
    approvedByStaff:{
        type:String,
        required:true
    },

})
const EBook=mongoose.model("EBook",EBookSchema);
module.exports=EBook;