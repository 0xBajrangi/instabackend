const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://insta:insta1234@cluster0.kjye009.mongodb.net/?retryWrites=true&w=majority',  { useUnifiedTopology: true });


module.exports = connection;