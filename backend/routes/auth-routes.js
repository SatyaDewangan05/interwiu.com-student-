const router=require('express').Router()
const passport=require('passport')

//auth login
router.get('/login',(req,res)=>{
    res.send("login")
});
router.get('/register',(req,res)=>{
    res.send("register")
});


// auth google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}

));
//redirect URI for google
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect('/profile/');
    //res.redirect('/profile');
});

// facebook auth
router.get('/facebook',
  passport.authenticate('facebook'));

router.get('/facebook/redirect',
  passport.authenticate('facebook', ),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/profile');
  });

// linkedIn auth
router.get('/linkedin',
  passport.authenticate('linkedin'));

router.get('/linkedin/redirect',
  passport.authenticate('linkedin', ),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/profile/');
  });


//logout
router.get('/logout',(req,res)=>{
    //handle with passport
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});


module.exports=router;