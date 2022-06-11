const router=require('express').Router()
const cfSetup=require('../controller/contact-form')
const profileSetup=require('../controller/profile-page')

  //get
router.post('/contactus',cfSetup.contactForm );

router.post('/profile',profileSetup.profileForm);

router.post('/iprofile',profileSetup.Interviewrpost)

router.get('/interviewers',profileSetup.Interviewrget)

router.get('/interviewrs/:id',profileSetup.InterviewerGetId)


module.exports = router;