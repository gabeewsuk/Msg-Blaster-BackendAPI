const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    day: {
        type: Number,
        required:false
    },
    task: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now

    },
    id: {
        type:Number,
        required:true
    }
        
});

module.exports = ITem = mongoose.model('item', ItemSchema)