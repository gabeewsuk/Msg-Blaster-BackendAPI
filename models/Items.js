const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    userNames: {
        type: Array,
        required:true
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
        required:false
    }
        
});

module.exports = Item = mongoose.model('item', ItemSchema)