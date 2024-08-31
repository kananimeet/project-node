let mongoose = require('mongoose');

let pageSchema = mongoose.Schema({
    
    name:String,
    email:String,
    city:String,
    image:String
})

let pageModel = mongoose.model('pageTable',pageSchema);
module.exports = pageModel;