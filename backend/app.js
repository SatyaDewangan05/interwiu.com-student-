const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const authRoutes=require('./routes/auth-routes')
const profileRoutes=require('./routes/profile-route')
const apis=require('./routes/apihandshake')
require('./db/conn')
require('./controller/passport-setup')
const session=require('express-session')
const passport=require('passport')
app.use(express.json());
const misc =require('./routes/misc')

//port
const port=process.env.PORT

app.use(session({
    secret: 'somethingsecretgoeshere',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false,
    expires: 60000*60*24*3
    },
    
 }))
//passport initialize
app.use(passport.initialize());
app.use(passport.session());

//m
app.use('/auth',authRoutes)
app.use('/profile',profileRoutes )
app.use('/api',apis)
app.use('/send',misc)

//homepage
app.get('/',(req,res)=>{
    res.send("This is server")
})



app.listen(port,()=>{
    console.log("Server Running")
})