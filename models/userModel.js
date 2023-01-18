const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    priority: {
        type: String,
        require: true
    },
    dateExpiration: {
        type: String,
        require: true
    },
    executionStep: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);