const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FlowerShema = new Schema({
    Name:String,
    Colors:Array,
    Characteristics:String,
    Phrase:String,
    Season:String,
})
mongoose.model("flowers", FlowerShema)