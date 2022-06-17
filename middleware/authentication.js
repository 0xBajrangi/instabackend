const User  = require('../model/User.model');
const authentication = async (req,res,next) => {
   const {UserName, Email,Password,PhoneNumber} = req.body;
   const email = new RegExp(/\S+@\S+\.\S+/g);
// email checking
   if(!email.test(Email)) {
     console.log(Email)
     return  res.status(201).send({
           status : 'failed',
           message : 'please type apprioate Email'
       })
   }

   const password = new  RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/);

   if( !password.test(Password)){
   return res.status(201).send({
        status : 'failed',
        message : 'Password type should be Strong Password which have atleast 8 letter, 1 min capital alphabet, 1 min small alphabet, 1 min number, 1 min special character'
    })
   }

   const username = new RegExp(/^[A-Za-z][A-Za-z0-9_]{7,29}$/)

   if(!username.test(UserName)){
   
  
    return  res.status(201).send({
          status : 'failed',
          message : 'user must have 8 eight alphabets, first letter should start with alphabet  '
      })
}

  if(PhoneNumber < 1000000000 || PhoneNumber > 9999999999){
   
    return res.status(201).send({
        status : 'failed',
        message : 'user must have 10 numbers for Phone Numbers'
    })
}

   if(Email){
    const findEmail = await User.findOne({Email}).lean().exec();
    console.log(findEmail)
    if(findEmail)  return res.status(409).send({
        status : 'failed',
        message : 'email already exist',
    })

}
   //password checking
   

   


// userName checking
   

// phone Number checking

  

  

   if(UserName){
    const findUser = await User.findOne({UserName}).lean().exec();
    console.log(findUser);
if(findUser){
     return  res.status(209).send({
           status : 'failed',
           message : 'UserName is already exist'
       })
    }
   }

   next()

}

module.exports = authentication;