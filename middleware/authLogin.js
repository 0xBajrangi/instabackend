const User = require('../model/User.model');
const authLogin = async (req, res, next) => {
    const user = await User.find(req.body);
    if (user.length < 1) {
        return res.status(500).send({ message: "Invalid User or Invalid Credentials !"});
    }
    next();
    
      
} 

module.exports = authLogin;