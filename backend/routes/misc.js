const router=require('express').Router()
const cfSetup=require('../controller/contact-form')
const profileSetup=require('../controller/profile-page')

  //get
router.post('/contactus',cfSetup.contactForm );

router.patch('/profile/:id',profileSetup.profileForm);

router.post('/iprofile',profileSetup.Interviewrpost)

router.get('/interviewers',profileSetup.Interviewrget)

router.get('/interviewrs/:id',profileSetup.InterviewerGetId)

router.get('/student/:id',profileSetup.studentGetId)



module.exports = router;