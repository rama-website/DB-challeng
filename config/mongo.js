const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://demoGroup12:demoGroup12@cluster0.tcmz6sx.mongodb.net/')
.then(() => console.log('DB is connected'))
.catch(err => console.log(err))