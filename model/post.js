const moment = require('moment/moment');
const mongoose = require('mongoose');
// const { post } = require('../config/routes');
const schema = mongoose.Schema;

// const FeedSchema = new mongoose.Schema({Feed})


const posts = new schema({
    title:{
        type: String,
        required: true,
        maxLength: 15,
    },
   text:{
    type: String,
        required: true,
        maxLength: 40,
   },
   creat_at:{
    type:Date,
    default:Date.now,
    get: function(creatPost){
        return moment(creatPost).format('MMMM Do YYYY, h:mm:ss a')
    }
   } 
},{timestamps:true})


module.exports = mongoose.model('post', posts)