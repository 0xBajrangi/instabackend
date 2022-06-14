import mongoose from 'mongoose';

const schema = require('mongoose');

//  Email,userName,PhoneNumber,Password,Post,Bio,followers,following,profilePic
const UserSchema = {
    UserName : {type: String , required : true} ,
    Email : {type: String , required : true},
    Password : {type: String , required : true},
    PhoneNumber : {type: Number , required : true}
}


export default mongoose.model('user', UserSchema);




