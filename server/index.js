const express = require('express')
const app = express();
const db = require('./config/db')

app.get('/' , (req,res) => {
    res.send('hi')
})

app.listen(3000)