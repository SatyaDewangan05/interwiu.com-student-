const SProfile=require('../model/sprofile-page')
const Iprofile=require('../model/iprofile-page')

//student's profile page post
exports.profileForm=(req,res)=>{
    const dbProfile=req.body
    SProfile.create(dbProfile,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
}

//Interviewrs profile page post
exports.Interviewrpost=(req,res)=>{
    const dbInterPost=req.body
    Iprofile.create(dbInterPost,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
}

//Interviewers Profile page get
exports.Interviewrget=async(req,res,next)=>{
    try {
        const dbInterGet=await Iprofile.find({});
        res.json(dbInterGet)
    } catch (error) {
        next(error)
    }
}

//Individual intervewr detailed page
exports.InterviewerGetId= async (req, res, next) => {
    try {
        const { id } = req.params;
        const dbhandShake = await Iprofile.findOne({
            _id: id
        });

        if(!dbhandShake) {
            const error = new Error(' does not exist');
            return next(error);
        }

    res.json(dbhandShake);
    } catch(error) {
        next(error);
    }
};

