const mongoose=require('mongoose')

const notification = mongoose.Schema({
    dId:String,
    toname: String,
    fromname:String,
    status:{
        type:Boolean,
        default:false
    }
})

module.exports= mongoose.model('notification', notification)