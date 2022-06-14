const router=require('express').Router()
const passport=require('passport')



// auth google
router.get('/google',passport.authenticate('google',{
    scope:['profile','email']
}
));

router.get('/login/g/failed',(req,res)=>{
  res.json(401).json({
    error:true,
    message:"Log in Failure"
  })
})

router.get('/login/g/success',(req,res)=>{
  if(req.user){
    res.status(200).json({
    error:false,
    message: "Succefully Logged in",
    user:req.user
    })
  }else{
    res.status(403).json({error:true,message:"Not Authorised"})
  }
})
//redirect URI for google
router.get('/google/redirect',passport.authenticate('google',{
  successRedirect:"http://localhost:3000",
  failureRedirect:"/login/g/failed"
}));




// facebook auth
router.get('/login/f/failed',(req,res)=>{
  res.json(401).json({
    error:true,
    message:"Log in Failure"
  })
})

router.get('/login/f/success',(req,res)=>{
  if(req.user){
    res.status(200).json({
    error:false,
    message: "Succefully Logged in",
    user:req.user
    })
  }else{
    res.status(403).json({error:true,message:"Not Authorised"})
  }
})
router.get('/facebook',passport.authenticate('facebook'));

router.get('/facebook/redirect',passport.authenticate('facebook',{
  successRedirect:"http://localhost:3000",
  failureRedirect:"/login/f/failed"
}));

// linkedIn auth
router.get('/login/l/failed',(req,res)=>{
  res.json(401).json({
    error:true,
    message:"Log in Failure"
  })
})

router.get('/login/l/success',(req,res)=>{
  if(req.user){
    res.status(200).json({
    error:false,
    message: "Succefully Logged in",
    user:req.user
    })
  }else{
    res.status(403).json({error:true,message:"Not Authorised"})
  }
})
router.get('/linkedin',passport.authenticate('linkedin'));

router.get('/linkedin/redirect',passport.authenticate('linkedin',{
  successRedirect:"http://localhost:3000",
  failureRedirect:"/login/l/failed"
}));


//logout
router.get('/logout',(req,res)=>{
    //handle with passport
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('http://localhost:3000');
      });
});


module.exports=router;