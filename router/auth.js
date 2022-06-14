const User = require('../model/User.model')
const {Router} = require('express');

const authRouter = Router();


authRouter.post('/register', async (req,res) => {
    console.log(req.body)
   const user = await User.create(req.body);
//    console.log(user)
//    console.log(user)

  res.send(user)
})



module.exports = authRouter;