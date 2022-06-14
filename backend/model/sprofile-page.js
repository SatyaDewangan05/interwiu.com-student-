const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    dId:{
        type:String
    },
    dfname:{
        type:String,
        default:""
    },
    dlname:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    mobNumber:{
        type:Number,
        default:-1
    },
    institute:{
        type:String,
        default:""
    },
    program:{
        type:String,
        default:""
    },
    Branch:{
        type:String,
        default:""
    },
    sessionRecord:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:""
    },
    profilePreference:{
        type:String,
        default:""
    },
    specialization:{
        type:String,
        default:""
    }

});

const SProfile=mongoose.model('studentprofile',userSchema)
module.exports=SProfile;