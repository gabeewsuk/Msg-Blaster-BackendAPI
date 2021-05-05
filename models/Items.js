const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    userNames: {
        type: Array,
        required:false
    },
    message: {
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

module.exports = Item = mongoose.model('item', ItemSchema)