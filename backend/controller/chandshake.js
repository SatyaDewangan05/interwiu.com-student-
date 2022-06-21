const handshake = require("../model/mhandshake");
const notification = require("../model/notification");
//get
exports.get = async (req, res, next) => {
  try {
    const dbhandShake = await handshake.find({});
    res.json(dbhandShake);
  } catch (error) {
    next(error);
  }
};

//get by id
exports.getid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dbhandShake = await handshake.findOne({
      _id: id,
    });

    if (!dbhandShake) {
      const error = new Error("Employee does not exist");
      return next(error);
    }

    res.json(dbhandShake);
  } catch (error) {
    next(error);
  }
};

//post

exports.post = (req, res) => {
  const dbhandShake = req.body;
  handshake.create(dbhandShake, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      new notification({
        dId: data._id,
        toname: data.toname,
        fromname: data.fromname,
      }).save((err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
    }
  });
};

//update

//
exports.update = async (req, res) => {
  try {
    const updates = req.body;
    const { id } = req.params;
    const dbhandShake = await handshake.findOne({
      _id: id,
    });
    if (!dbhandShake) {
      const error = new Error("Employee does not exist");
      return next(error);
    }
    new notification({
      dId: dbhandShake._id,
      toname: dbhandShake.toname,
      fromname: dbhandShake.fromname,
    }).save((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
    const obj = await handshake
      .updateOne({ _id: req.params.id }, { $set: updates })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.sNotifs = async (req, res, next) => {
  try {
    const dbhandShake = await notification.find({});
    res.json(dbhandShake);
  } catch (error) {
    next(error);
  }
};

exports.sNotifsId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dbhandShake = await notification.findOne({
      _id: id,
    });
    if (!dbhandShake) {
      const error = new Error("Employee does not exist");
      return next(error);
    }
    res.json(dbhandShake);
  } catch (error) {
    next(error);
  }
};

/**exports.getid= async (req, res, next) => {
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
}; */
