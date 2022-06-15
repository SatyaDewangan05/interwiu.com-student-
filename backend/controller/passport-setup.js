const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../model/user-model");
const FacebookStrategy = require("passport-facebook").Strategy;
const LinkedInStrategy=require("passport-linkedin-oauth2").Strategy
const sprofile=require("../model/sprofile-page");

passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});




//Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:8585/auth/facebook/redirect",
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ Id: profile.id }).then((currentUser) => {
        if (currentUser) {
          //user already exists
          console.log("hi")
          console.log(profile);
          console.log("revisting user is :", currentUser);
          done(null, currentUser)
          console.log("ends")
        } else {
          //create new entry
          // saving  a user in DB
          new User({
            username: profile.displayName,
            Id: profile.id,
            thumbNail: `https://graph.facebook.com/${profile.id}/picture?type=small`
          })
            .save()
            .then((newUser) => {
              console.log("new user created :", newUser);
              new sprofile({
                dId:profile.id ,
                dfname: profile._json.given_name,
                dlname: profile._json.family_name
              }).save((err,result)=>{
                if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
              })
              done(null, newUser)
            });
        }
      })
    }
  )
);

//LinkedIn
passport.use(
  new LinkedInStrategy(
    {
      callbackURL: "http://localhost:8585/auth/linkedin/redirect",
      clientID: process.env.LINKEDIN_APP_ID,
      clientSecret: process.env.LINKEDIN_APP_SECRET,
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callback function
      /*console.log("callback function is fired");
      console.log(profile);*/

      //checking user before saving it to prevent same ID to store twice.
      User.findOne({ Id: profile.id }).then((currentUser) => {
        if (currentUser) {
          //user already exists
          console.log("linkedin")
          console.log(profile);
          console.log("revisting user is :", currentUser);
          done(null, currentUser);
        } else {
          //create new entry
          // saving  a user in DB
          new User({
            username: profile.displayName,
            Id: profile.id,
            thumbNail: profile.photos[0].value,
          })
            .save()
            .then((newUser) => {
              console.log("new user created :", newUser);
              new sprofile({
                dId:profile.id ,
                dfname: profile._json.given_name,
                dlname: profile._json.family_name
              }).save((err,result)=>{
                if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
              })
              done(null, newUser);
            });
        }
      });
    }
  )
);


//Google
passport.use(
  new GoogleStrategy(
    {
      callbackURL: "http://localhost:8585/auth/google/redirect",
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callback function
      /*console.log("callback function is fired");
      console.log(profile);*/

      //checking user before saving it to prevent same ID to store twice.
      User.findOne({ Id: profile.id }).then((currentUser) => {
        if (currentUser) {
          //user already exists
          console.log(profile);
          console.log("revisting user is :", currentUser);
          done(null, currentUser);
        } else {
          //create new entry
          // saving  a user in DB

          
          new User({
            username: profile.displayName,
            Id: profile.id,
            thumbNail: profile._json.picture,
          })
            .save()
            .then((newUser) => {
              console.log("new user created :", newUser);
              new sprofile({
                dId:profile.id ,
                dfname: profile._json.given_name,
                dlname: profile._json.family_name
              }).save((err,result)=>{
                if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
              })
              done(null, newUser);
            });
        }
      });
    }
  )
);
