const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    desg:String,
    price:String,

});

const DemoIp=mongoose.model('demoIp',userSchema)
module.exports=DemoIp;