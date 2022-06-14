const express = require('express');
const connection = require('./storage/db');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send("home")
})


app.listen(process.env.PORT || 8080, async() => {
    await connection;

})