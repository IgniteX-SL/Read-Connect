const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator =require('validator');

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum: ['admin', 'librarian', 'libraryStaff', 'member'],
    }
});    

userSchema.statics.signup = async function({email, password,name,role}){
    if(!email ||!password||!role||!name){      
        throw Error("All fields must be filled.");     
    }
    
    if(!validator.isEmail(email)){    
        throw Error("Email is not valid");
    }
    // if(!validator.isStrongPassword(password)){
    //     throw Error("Password is not Strong Enough");
    // }
    //const User = this;
    
    const exists=await this.findOne({email});
    if(exists){
        throw new Error("Email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({email, password:hash, name, role});
    return user;
};


userSchema.statics.login = async function({ email, password}) {
    if (!email || !password) {
      throw new Error("All fields must be filled.");
      
    }
  
    const user = await this.findOne({ email});
    if (!user) {
      throw new Error("Incorrect Email");
    }
  
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Incorrect Password");
    }
    return user;
  };

  userSchema.statics.changePassword = async function({ email, currentPassword, newPassword, confirmNewPassword }) {
    if (!email || !currentPassword || !newPassword || !confirmNewPassword) {
      throw new Error("All fields must be filled.");
    }
  
    const user = await this.findOne({ email });
    if (!user) {
      throw new Error("User not found.");
    }
  
    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) {
      throw new Error("Incorrect current password.");
    }
  
    if (currentPassword === newPassword) {
      throw new Error("New password should be different from the current password.");
    }
  
    if (newPassword !== confirmNewPassword) {
      throw new Error("New passwords don't match.");
    }
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
  
    user.password = hash;
    await user.save();
  
    return user;
  };
  
module.exports = mongoose.model("User",userSchema);