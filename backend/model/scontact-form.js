const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    message:String

});

const Contact=mongoose.model('contactu',userSchema)
module.exports=Contact;