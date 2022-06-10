const mongoose=require('mongoose')

const handShake = mongoose.Schema({
    toname: String,
    fromname:String,
    meetUrl: String,
    status:{
        type:Boolean,
        default:false
    }
})

module.exports= mongoose.model('handShake', handShake)