const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const TaskSchema = new Schema({
    text: {
        type: String,
        required:true
    },

        id: {
            type:Number,
            required:false},

            ID:{
                type:Number,
                required:false},

   
    
        
});

module.exports = Task = mongoose.model('task', TaskSchema)