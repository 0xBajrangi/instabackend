const User = require('../model/User.model')
const {Router} = require('express');
const authentication  = require('../middleware/authentication');

const authRouter = Router();


authRouter.post('/register',authentication, async (req,res) => {
    console.log(req.body)
   const user = await User.create(req.body);
//    console.log(user)
//    console.log(user)

  res.send(user)
})

authRouter.get('/data', async(req,res) => {
   
    try {
    const user = await User.find({}).lean().exec()
    
    res.send(user);
    }
    catch(err){
        console.log(1)
        console.log(err);
        res.send(err);
    }
  
})


module.exports = authRouter;