const router=require('express').Router();

const authCheck=(req,res,next)=>{
    if(!req.isAuthenticated()){
        //if not logged in
        res.send('/auth/login ');
    }
    else{
        //if logged in
        next();
    }
}

router.get('/',authCheck,(req,res)=>{
    res.send('ok in u r logged in')    
})

module.exports=router;