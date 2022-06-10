const Contact=require('../model/scontact-form')


exports.contactForm= (req,res)=>{
    const dbContact=req.body
    Contact.create(dbContact,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
}

