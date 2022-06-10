const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobNumber:{
        type:Number,
        required:true
    },
    institute:{
        type:String
    },
    program:{
        type:String
    },
    Branch:{
        type:String
    },
    sessionRecord:{
        type:String
    },
    description:{
        type:String
    },
    profilePreference:{
        type:String
    },
    specialization:{
        type:String
    }

});

const Iprofile=mongoose.model('interviewprofile',userSchema)
module.exports=Iprofile;