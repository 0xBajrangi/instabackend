const User = require('../model/User.model')
const { Router } = require('express');
// middlewares
const authentication  = require('../middleware/authentication');
const authLogin = require('../middleware/authLogin')

const authRouter = Router();

// get all the user for testing
authRouter.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users)
})

authRouter.post('/login', authLogin, async (req, res) => {
  const users = await User.find(req.body);
  res.status(201).send({ message: 'user exits' ,user:users[0]});

})

authRouter.post('/register',authentication, async (req,res) => {
    console.log(req.body)
   const user = await User.create(req.body);
//    console.log(user)
//    console.log(user)

  res.send(user)
})

authRouter.get('/data', async(req,res) => {
   
    try {
    const user = await User.find({}).limit(10).lean().exec()
    
    res.send(user);
    }
    catch(err){
        console.log(1)
        console.log(err);
        res.send(err);
    }
  
})


module.exports = authRouter;