const handshake=require("../model/mhandshake")

  //get
exports.get=async (req, res, next) => {
    try {
        const dbhandShake = await handshake.find({});
        res.json(dbhandShake);
    } catch(error) {
        next(error);
    }
};

//get by id
exports.getid= async (req, res, next) => {
    try {
        const { id } = req.params;
        const dbhandShake = await handshake.findOne({
            _id: id
        });

        if(!dbhandShake) {
            const error = new Error('Employee does not exist');
            return next(error);
        }

    res.json(dbhandShake);
    } catch(error) {
        next(error);
    }
};

  //post

exports.post= (req, res) => {
    const dbhandShake = req.body;
    handshake.create(dbhandShake, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  };

  //update
exports.update= async (req,res)=>{
    try {
        const updates=req.body
        const obj=await handshake.updateOne({_id:req.params.id},{$set:updates})
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
        
    } catch (error) {
        res.status(404).send(error)
    }
  }