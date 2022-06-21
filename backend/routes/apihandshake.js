const router=require('express').Router()
const setup=require('../controller/chandshake')

  //get
router.get('/get', setup.get);

//get by id
router.get('/get/:id', setup.getid);

  //post

  router.post("/post", setup.post);

  //update
router.patch("/edit/:id",setup.update)

router.get('/snotifs/',setup.sNotifs)

router.get('/snotifs/:id',setup.sNotifsId)

module.exports = router;