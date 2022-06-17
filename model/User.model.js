const mongoose = require('mongoose')

const schema = require('mongoose');

//  Email,userName,PhoneNumber,Password,Post,Bio,followers,following,profilePic
const UserSchema = new mongoose.Schema({
    UserName : {type: String , required : true} ,
    Email : {type: String, required : true},
    Password : {type: String , required : true},
    PhoneNumber : {type: Number , required : true , min : 1000000000, max: 9999999999}
})


module.exports = mongoose.model('user', UserSchema);




