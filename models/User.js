const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema ({
    username: String,
    password: String,
})

mongoose.model('user', userSchema)