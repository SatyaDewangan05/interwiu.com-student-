const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    number:Number,
    message:String

});

const Contact=mongoose.model('contactu',userSchema)
module.exports=Contact;