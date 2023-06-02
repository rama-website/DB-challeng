const express = require('express')
const { default: mongoose } = require('mongoose')
require('./config/mongo')
const route = require('./config/routes');
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));
app.use(route)


mongoose.connect('mongodb+srv://demoGroup12:demoGroup12@cluster0.tcmz6sx.mongodb.net/')
.then(() =>{
    
    console.log('connected to DB..');

})
app.listen(3000)

// let port = 3050
// app.listen(port, ()=> console.log(`${port}`))