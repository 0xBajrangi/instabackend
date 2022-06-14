const express = require('express');
const connection = require('./storage/db');
const authRouter = require('./router/auth')
require('dotenv').config()
const app = express();
app.use(express.json());

app.use('/auth',authRouter);


app.get('/', (req, res) => {
    res.send("home")
})
app.get('/', (req, res) => {
    
})


app.listen(process.env.PORT || 8080, async() => {
   await connection;

})